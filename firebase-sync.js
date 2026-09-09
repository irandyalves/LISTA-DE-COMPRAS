// Gerenciador de Sincronização em Nuvem (Google Firebase Firestore)
// Permite sincronização em tempo real entre Celular da Esposa e Computador

const FIREBASE_DEFAULT_CONFIG = {
  projectId: "lista-compras-d55dc",
  appId: "1:1026630983698:web:ca377c4cf50c62df5af8cb",
  storageBucket: "lista-compras-d55dc.firebasestorage.app",
  apiKey: "AIzaSyDQPg37okFTxaw2QvuaYLnD2bUrl1F8d5Q",
  authDomain: "lista-compras-d55dc.firebaseapp.com",
  messagingSenderId: "1026630983698",
  listId: "compras_familia_irandy"
};

const FirebaseSync = {
  db: null,
  app: null,
  config: null,
  docRef: null,
  unsubscribe: null,
  estaConectado: false,

  // Carregar credenciais salvas ou da URL (para facilitar o compartilhamento com a esposa)
  carregarConfig() {
    // 1. Tentar pegar da URL (hash #config=...) se a esposa abriu o link compartilhado
    if (window.location.hash && window.location.hash.includes('fbconfig=')) {
      try {
        const base64 = window.location.hash.split('fbconfig=')[1].split('&')[0];
        const jsonStr = decodeURIComponent(escape(atob(base64)));
        const configDaUrl = JSON.parse(jsonStr);
        localStorage.setItem('firebase_config_irandy', JSON.stringify(configDaUrl));
        // Limpar hash para não ficar feio
        window.history.replaceState(null, null, window.location.pathname);
      } catch (e) {
        console.error("Erro ao ler config da URL:", e);
      }
    }

    const salvo = localStorage.getItem('firebase_config_irandy');
    if (salvo) {
      try {
        this.config = JSON.parse(salvo);
        return true;
      } catch (e) {
        // continua para o padrão
      }
    }

    // Configuração oficial padrão do projeto Firebase do usuário
    this.config = { ...FIREBASE_DEFAULT_CONFIG };
    return true;
  },

  salvarConfig(configObj) {
    this.config = configObj;
    localStorage.setItem('firebase_config_irandy', JSON.stringify(configObj));
  },

  gerarLinkCompartilhamento() {
    if (!this.config) return null;
    const jsonStr = JSON.stringify(this.config);
    const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
    const baseUrl = (window.location.protocol && window.location.protocol.startsWith('http'))
      ? (window.location.origin + window.location.pathname)
      : 'https://lista-compras-d55dc.web.app/';
    return `${baseUrl}#fbconfig=${base64}`;
  },

  // Inicializar Firebase
  async inicializar(onDataUpdate, onStatusChange) {
    if (!this.carregarConfig()) {
      if (onStatusChange) onStatusChange({ online: false, nuvem: false, msg: 'Modo Local (Offline)' });
      return false;
    }

    try {
      if (onStatusChange) onStatusChange({ online: false, nuvem: true, msg: 'Conectando à nuvem Google...' });
      
      // Firebase compat inicializado via script CDN
      if (typeof firebase === 'undefined') {
        console.warn("SDK do Firebase ainda não carregado.");
        return false;
      }

      if (!firebase.apps.length) {
        this.app = firebase.initializeApp(this.config);
      } else {
        this.app = firebase.app();
      }

      this.db = firebase.firestore();
      
      // Documento padrão de sincronização da lista de compras da família
      const listId = this.config.listId || 'compras_familia_irandy';
      this.docRef = this.db.collection('listas_compras').doc(listId);

      // Ouvinte em TEMPO REAL (quando qualquer um mexer, sincroniza)
      this.unsubscribe = this.docRef.onSnapshot((doc) => {
        if (doc.exists) {
          const dados = doc.data();
          this.estaConectado = true;
          if (onStatusChange) onStatusChange({ online: true, nuvem: true, msg: '🟢 Sincronizado na Nuvem' });
          if (onDataUpdate) onDataUpdate(dados, false); // false = veio da nuvem, não precisa reenviar
        } else {
          // Documento ainda não criado na nuvem, faz o primeiro envio
          this.estaConectado = true;
          if (onStatusChange) onStatusChange({ online: true, nuvem: true, msg: '🟢 Nuvem Conectada (Inicializando)' });
        }
      }, (erro) => {
        console.error("Erro no listener do Firebase:", erro);
        this.estaConectado = false;
        if (onStatusChange) onStatusChange({ online: false, nuvem: true, msg: '⚠️ Erro de Conexão na Nuvem: ' + (erro.code || erro.message) });
      });

      return true;
    } catch (e) {
      console.error("Falha ao inicializar Firebase:", e);
      if (onStatusChange) onStatusChange({ online: false, nuvem: false, msg: 'Erro ao configurar Firebase' });
      return false;
    }
  },

  // Salvar estado completo na Nuvem
  async sincronizarComNuvem(dadosCompletos) {
    if (!this.estaConectado || !this.docRef) {
      return false;
    }

    try {
      // Limpeza de campos indefinidos
      const payload = JSON.parse(JSON.stringify(dadosCompletos));
      payload.ultimaAtualizacao = new Date().toISOString();
      await this.docRef.set(payload, { merge: true });
      return true;
    } catch (e) {
      console.error("Erro ao enviar dados para a nuvem:", e);
      return false;
    }
  },

  desconectar() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
    this.estaConectado = false;
    localStorage.removeItem('firebase_config_irandy');
    this.config = null;
  }
};

if (typeof module !== 'undefined') {
  module.exports = FirebaseSync;
}
