#!/usr/bin/env python3
"""
Servidor HTTP integrado para a Lista de Compras Inteligente.
Serve a aplicação web frontend e fornece a API '/api/atualizar-cotacao'
para disparar a raspagem em tempo real dos preços no DF.
"""

import os
import sys
import json
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Importar o coletor de preços
DIRETORIO_ATUAL = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.join(DIRETORIO_ATUAL, "scraper"))

try:
    from mercados_coletor import coletar_precos_df
except Exception as e:
    coletar_precos_df = None
    print(f"[Aviso] Coletor não importado diretamente: {e}")

# Flag para evitar raspagens simultâneas concorrentes
_raspagem_em_andamento = False
_lock_raspagem = threading.Lock()

class ListaComprasHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRETORIO_ATUAL, **kwargs)

    def end_headers(self):
        # Desabilitar cache para arquivos JSON dinâmicos
        if self.path.endswith('.json') or '/api/' in self.path:
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def do_POST(self):
        global _raspagem_em_andamento

        if self.path == '/api/atualizar-cotacao':
            with _lock_raspagem:
                if _raspagem_em_andamento:
                    self.send_response(429)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "sucesso": False,
                        "mensagem": "Uma raspagem de cotações já está em andamento. Aguarde alguns segundos."
                    }).encode('utf-8'))
                    return

                _raspagem_em_andamento = True

            try:
                print("\n[API] Recebido comando para atualizar cotações...")
                if coletar_precos_df:
                    coletar_precos_df()
                else:
                    # Executa via subprocess se necessário
                    import subprocess
                    script_coletor = os.path.join(DIRETORIO_ATUAL, "scraper", "mercados_coletor.py")
                    subprocess.run([sys.executable, script_coletor], check=True)

                # Ler resultado recém-gerado
                caminho_json = os.path.join(DIRETORIO_ATUAL, "precos_mercados_df.json")
                dados_atualizados = {}
                if os.path.exists(caminho_json):
                    with open(caminho_json, "r", encoding="utf-8") as f:
                        dados_atualizados = json.load(f)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "sucesso": True,
                    "mensagem": "Cotações raspadas e atualizadas com sucesso!",
                    "ultima_atualizacao": dados_atualizados.get("ultima_atualizacao", ""),
                    "total_produtos": dados_atualizados.get("total_produtos", 0)
                }, ensure_ascii=False).encode('utf-8'))

            except Exception as e:
                print(f"[API] Erro ao executar raspagem: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "sucesso": False,
                    "erro": str(e)
                }).encode('utf-8'))
            finally:
                with _lock_raspagem:
                    _raspagem_em_andamento = False
            return

        # Rota não encontrada
        self.send_response(404)
        self.end_headers()

def iniciar_servidor(porta=8000):
    servidor = HTTPServer(('0.0.0.0', porta), ListaComprasHandler)
    print(f"=== SERVIDOR DA LISTA DE COMPRAS ATIVO ===")
    print(f"URL: http://localhost:{porta}")
    print(f"API de Raspagem: http://localhost:{porta}/api/atualizar-cotacao")
    print(f"Pressione Ctrl+C para encerrar.\n")
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
        servidor.server_close()

if __name__ == '__main__':
    porta = 8000
    if len(sys.argv) > 1:
        try:
            porta = int(sys.argv[1])
        except ValueError:
            pass
    iniciar_servidor(porta)
