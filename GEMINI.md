# Diretrizes do Projeto - Lista de Compras Inteligente

## Sincronização Automática com o GitHub (Regra Mandatória)

1. **Início de Sessão / Primeira Mensagem no Workspace:**
   - Ao iniciar qualquer conversa ou receber o primeiro comando neste workspace, o assistente DEVE verificar proativamente o repositório remoto executando `git fetch origin`.
   - Se o PC local estiver mais antigo (atrás de `origin/main`), o assistente DEVE rodar `git pull origin main` automaticamente para que o computador fique 100% atualizado antes de qualquer tarefa.
   - Informar de forma breve e discreta que o PC local está sincronizado com o GitHub.

2. **Finalização de Tarefas / Alterações de Código:**
   - Sempre que o assistente fizer modificações ou melhorias no projeto, DEVE automaticamente realizar o `git add`, `git commit` com mensagem descritiva e `git push origin main`.
   - O usuário NUNCA deve precisar lembrar de pedir "atualize o github" nem "atualize o pc local".
