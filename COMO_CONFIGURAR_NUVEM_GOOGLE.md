# ☁️ Como Conectar a Lista na sua Nuvem Google (Gratuito)

Este aplicativo foi desenvolvido para sincronizar em **tempo real** entre o seu computador e o celular da sua esposa usando a nuvem do Google (**Firebase Firestore**), vinculado ao seu e-mail **`irandyalves@gmail.com`**.

O Firebase é 100% gratuito (plano Spark do Google) e permite até 50.000 operações diárias sem qualquer cobrança.

---

## 🚀 Passo a Passo Rápido (Leva 2 minutos)

1. **Acesse o Console do Google Firebase**:
   - Entre em: **[https://console.firebase.google.com](https://console.firebase.google.com)**
   - Faça login com seu e-mail: `irandyalves@gmail.com`

2. **Crie o Projeto**:
   - Clique em **"Adicionar projeto"** (ou "Criar projeto").
   - Digite um nome, por exemplo: `compras-familia`.
   - Pode desmarcar o Google Analytics (opcional) e clique em **Criar projeto**.

3. **Ative o Banco de Dados (Firestore)**:
   - No menu lateral esquerdo, clique em **Criação** > **Firestore Database**.
   - Clique em **"Criar banco de dados"**.
   - Escolha o local (ex: `southamerica-east1` em São Paulo, ou `us-central`).
   - Na etapa de regras de segurança, marque **"Iniciar no modo de teste"** (para você e sua esposa terem acesso imediato de leitura e escrita) e clique em **Ativar**.

4. **Pegue as Chaves de Conexão Web**:
   - Na página inicial do projeto (engrenagem de **Configurações do Projeto** no canto superior esquerdo):
   - Em "Seus aplicativos", clique no ícone **`</>` (Web)**.
   - Dê um apelido (ex: `Compras Web`) e clique em **Registrar aplicativo**.
   - Você verá um bloco de código com:
     - `apiKey: "AIzaSy..."`
     - `projectId: "compras-familia..."`
     - `appId: "1:..."`

5. **Cole na sua Lista de Compras**:
   - Abra a sua Lista de Compras no computador (`index.html`).
   - Clique no ícone de nuvem ☁️ no canto superior direito.
   - Preencha o `Project ID` e a `Web API Key` e clique em **"Salvar e Conectar Nuvem"**.
   - Pronto! O status mudará para **🟢 Sincronizado na Nuvem**.

---

## 📲 Como Enviar para o Celular da Esposa

Você não precisa configurar nada no celular dela!
1. No seu computador, clique novamente no ícone ☁️.
2. Haverá um botão: **"Copiar Link para o Celular da Esposa"**.
3. Envie esse link no WhatsApp dela.
4. Quando ela abrir o link no celular, o app dela já estará **100% conectado na mesma nuvem** que a sua!
5. No navegador do celular dela (Chrome no Android ou Safari no iPhone), basta ela tocar em:
   - **Opções (três pontinhos ou botão compartilhar)** > **"Adicionar à Tela Inicial" / "Instalar Aplicativo"**.
   - O ícone do carrinho 🛒 ficará na tela inicial como um aplicativo nativo.

---

## 💡 Recursos do App
- **Ícones 2D Coloridos**: Cada item ganha automaticamente um ícone vetorial colorido e vibrante.
- **Microfone / Voz**: Basta tocar no microfone e dizer: *"Falta arroz, 2 leites e amaciante"*.
- **Despensa Familiar**: Aba com os produtos mais comuns para marcar o que falta com 1 clique.
- **Histórico & Preços**: Ao concluir no caixa, o sistema calcula o total e guarda a data e preços unitários.
- **Planilha CSV**: Botão 📊 para baixar e abrir no Excel ou Google Sheets a qualquer momento.
