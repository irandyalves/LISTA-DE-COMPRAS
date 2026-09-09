# Módulo de Raspagem e Cotação de Preços dos Supermercados do DF

Este módulo é responsável por coletar cotações reais dos supermercados de Brasília / Distrito Federal e atualizar a base de preços do aplicativo.

---

## 1. Redes Atendidas no DF

1. **Atacadão** (API VTEX oficial - Coleta direta de estoque e preços reais)
2. **Assaí Atacadista** (Atacarejo do DF)
3. **Atacadão Dia a Dia** (Rede regional do DF)
4. **Carrefour** (Hipermercado DF)
5. **Big Box** (Rede de vizinhança Asa Sul / Asa Norte / Sudoeste / Noroeste / Águas Claras)
6. **Pão de Açúcar** (Rede premium Asa Sul / Asa Norte)

---

## 2. Como Executar a Coleta de Preços

Para rodar uma nova cotação e atualizar os preços do aplicativo:

```bash
cd scraper
python mercados_coletor.py
```

O script realizará as consultas de produtos essenciais (arroz, feijão, leite, óleo, café, carnes, hortifrúti, higiene e limpeza) e salvará o arquivo consolidado `precos_mercados_df.json` na raiz da aplicação.

---

## 3. Como o Aplicativo Consome os Dados

O frontend (`app.js`) carrega automaticamente o arquivo `precos_mercados_df.json` ao inicializar.
- Ao clicar nas abas dos mercados (**Atacadão**, **Assaí**, **Dia a Dia**, **Carrefour**, **Big Box**, **Pão de Açúcar**), a lista de compras atualiza **instantaneamente** o preço de cada item para a respectiva rede.
- Ao clicar em **🌐 Média DF**, o aplicativo compara todas as redes e indica onde cada item está mais barato com a insígnia `🏆 [Mercado]`.

---

## 4. Agendamento Automático (Opcional)

Para manter os preços sempre atualizados automaticamente todos os dias às 06:00 da manhã no Windows:

```powershell
$action = New-ScheduledTaskAction -Execute "python.exe" -Argument "mercados_coletor.py" -WorkingDirectory "f:\_SISTEMAS\Lista compras\scraper"
$trigger = New-ScheduledTaskTrigger -Daily -At 6am
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName "CotacaoSupermercadosDF" -Description "Coleta diária de preços nos mercados de Brasília"
```
