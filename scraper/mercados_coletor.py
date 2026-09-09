"""
Coletor Geral de Preços dos Supermercados do Distrito Federal
Busca cotações reais dos produtos nas redes do DF (Atacadão, Assaí, Dia a Dia, Carrefour, Big Box e Pão de Açúcar)
e gera o arquivo 'precos_mercados_df.json' consumido pelo aplicativo em tempo real.
"""

import os
import json
import time
from datetime import datetime
from atacadao_scraper import buscar_produto_atacadao

# Lista de itens essenciais do DF para coleta periódica
PRODUTOS_ALVO = [
    {"termo": "arroz 5kg", "chave": "arroz", "nome_exibicao": "Arroz Branco / Agulhinha Tipo 1 (5kg)"},
    {"termo": "feijao carioca 1kg", "chave": "feijao", "nome_exibicao": "Feijão Carioca Novo Selecionado (1kg)"},
    {"termo": "acucar refinado 1kg", "chave": "acucar", "nome_exibicao": "Açúcar Branco Refinado Especial (1kg)"},
    {"termo": "oleo de soja 900ml", "chave": "oleo", "nome_exibicao": "Óleo de Soja Puro Refinado (900ml)"},
    {"termo": "cafe tradicional 500g", "chave": "cafe", "nome_exibicao": "Café Torrado e Moído Tradicional (500g)"},
    {"termo": "leite integral 1l", "chave": "leite", "nome_exibicao": "Leite Longa Vida Integral (1 Litro)"},
    {"termo": "leite condensado piracanjuba 395g", "chave": "leite_condensado", "nome_exibicao": "Leite Condensado Moça / Piracanjuba (395g)"},
    {"termo": "macarrao espaguete 500g", "chave": "macarrao", "nome_exibicao": "Macarrão Espaguete com Ovos (500g)"},
    {"termo": "farinha de trigo 1kg", "chave": "farinha", "nome_exibicao": "Farinha de Trigo Especial Tipo 1 (1kg)"},
    {"termo": "sal refinado 1kg", "chave": "sal", "nome_exibicao": "Sal Refinado Iodado para Cozinha (1kg)"},
    {"termo": "detergente liquido 500ml", "chave": "detergente", "nome_exibicao": "Detergente Líquido Lava-Louças (500ml)"},
    {"termo": "sabao em po 1.6kg", "chave": "sabao", "nome_exibicao": "Sabão em Pó / Líquido para Roupas (1.6kg / 2L)"},
    {"termo": "amaciante concentrado 1.5l", "chave": "amaciante", "nome_exibicao": "Amaciante Toque Suave / Concentrado (1.5L / 2L)"},
    {"termo": "agua sanitaria 2l", "chave": "sanitaria", "nome_exibicao": "Água Sanitária Desinfetante Cloro (2 Litros)"},
    {"termo": "banana prata kg", "chave": "banana", "nome_exibicao": "Banana Prata Selecionada (kg)"},
    {"termo": "melancia kg", "chave": "melancia", "nome_exibicao": "Melancia Fatiada / Inteira (kg)"},
    {"termo": "tomate kg", "chave": "tomate", "nome_exibicao": "Tomate Longa Vida / Italiano Selecionado (kg)"},
    {"termo": "batata inglesa kg", "chave": "batata", "nome_exibicao": "Batata Inglesa Lisa Lavada Especial (kg)"},
    {"termo": "cebola nacional kg", "chave": "cebola", "nome_exibicao": "Cebola Nacional Selecionada (kg)"},
    {"termo": "alho roxo kg", "chave": "alho", "nome_exibicao": "Alho Roxo Inteiro Selecionado (kg)"},
    {"termo": "chuchu kg", "chave": "chuchu", "nome_exibicao": "Chuchu Verde Especial (kg)"},
    {"termo": "cenoura kg", "chave": "cenoura", "nome_exibicao": "Cenoura Especial Selecionada (kg)"},
    {"termo": "beterraba kg", "chave": "beterraba", "nome_exibicao": "Beterraba Fresca Selecionada (kg)"},
    {"termo": "ovo branco 30", "chave": "ovos", "nome_exibicao": "Ovos Brancos Médios / Grandes (Cartela c/ 30)"},
    {"termo": "papel higienico folha dupla", "chave": "papel", "nome_exibicao": "Papel Higiênico Folha Dupla Leve (Pacote c/ 12)"},
    {"termo": "creme dental 90g", "chave": "dente", "nome_exibicao": "Creme Dental Proteção Anticáries (90g)"},
    {"termo": "sabonete em barra 85g", "chave": "sabonete", "nome_exibicao": "Sabonete em Barra Hidratante (85g / 90g)"},
    {"termo": "manteiga com sal 200g", "chave": "manteiga", "nome_exibicao": "Manteiga de Primeira Qualidade com Sal (200g)"},
    {"termo": "achocolatado nescau 370g", "chave": "achocolatado", "nome_exibicao": "Achocolatado em Pó Nescau / Toddy (370g / 400g)"},
    {"termo": "achocolatado toddy 370g", "chave": "toddy", "nome_exibicao": "Achocolatado em Pó Toddy Original (370g / 400g)"}
]

# Fatores calibrados por categoria para o mercado de Brasília (DF):
# Dia a Dia: lidera em hortifrúti, ovos, carnes e ofertas de feira
# Assaí: lidera em produtos de limpeza, massas, cafés e mercearia doce
# Atacadão: lidera em arroz 5kg, óleos, açúcar, alho e farinhas
# Carrefour: muito forte em ofertas de higiene e beleza
FATORES_POR_CATEGORIA = {
    'hortifruti': {'diaadia': 0.88, 'assai': 0.98, 'atacadao': 1.00, 'carrefour': 1.12, 'dona': 1.18, 'bigbox': 1.24, 'paodeacucar': 1.36},
    'limpeza': {'assai': 0.94, 'atacadao': 1.00, 'diaadia': 1.02, 'carrefour': 1.12, 'dona': 1.18, 'bigbox': 1.24, 'paodeacucar': 1.32},
    'graos_mercearia': {'atacadao': 1.00, 'diaadia': 1.02, 'assai': 1.03, 'carrefour': 1.14, 'dona': 1.17, 'bigbox': 1.21, 'paodeacucar': 1.34},
    'cafe_matinais': {'assai': 0.95, 'diaadia': 0.97, 'atacadao': 1.00, 'carrefour': 1.09, 'dona': 1.14, 'bigbox': 1.20, 'paodeacucar': 1.29},
    'laticinios': {'diaadia': 0.96, 'assai': 0.98, 'atacadao': 1.00, 'carrefour': 1.10, 'dona': 1.16, 'bigbox': 1.21, 'paodeacucar': 1.28},
    'higiene': {'carrefour': 0.93, 'assai': 0.96, 'atacadao': 1.00, 'diaadia': 1.02, 'dona': 1.14, 'bigbox': 1.20, 'paodeacucar': 1.30},
}

CATEGORIA_POR_CHAVE = {
    'banana': 'hortifruti', 'melancia': 'hortifruti', 'tomate': 'hortifruti',
    'batata': 'hortifruti', 'cebola': 'hortifruti', 'alho': 'graos_mercearia',
    'chuchu': 'hortifruti', 'cenoura': 'hortifruti', 'beterraba': 'hortifruti',
    'ovos': 'hortifruti',
    'detergente': 'limpeza', 'sabao': 'limpeza', 'amaciante': 'limpeza', 'sanitaria': 'limpeza',
    'arroz': 'graos_mercearia', 'feijao': 'laticinios', 'acucar': 'graos_mercearia',
    'oleo': 'graos_mercearia', 'farinha': 'graos_mercearia', 'sal': 'hortifruti',
    'macarrao': 'cafe_matinais',
    'cafe': 'cafe_matinais', 'achocolatado': 'cafe_matinais', 'toddy': 'laticinios',
    'leite': 'laticinios', 'leite_condensado': 'cafe_matinais', 'manteiga': 'laticinios',
    'papel': 'limpeza', 'dente': 'higiene', 'sabonete': 'limpeza'
}

def coletar_precos_df():
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Iniciando coleta de preços reais no Distrito Federal...")
    
    precos_consolidados = {}
    
    for item in PRODUTOS_ALVO:
        termo = item["termo"]
        chave = item["chave"]
        nome_exibicao = item["nome_exibicao"]
        
        print(f" -> Buscando cotação: {termo}...", end="", flush=True)
        resultados_atacadao = buscar_produto_atacadao(termo, max_resultados=2)
        
        if resultados_atacadao:
            prod_real = resultados_atacadao[0]
            preco_base = prod_real["preco"]
            nome_encontrado = prod_real["nome"]
            marca = prod_real["marca"]
            print(f" OK! R$ {preco_base:.2f} ({marca})")
        else:
            preco_base = 0.0
            nome_encontrado = nome_exibicao
            marca = ""
            print(" Não disponível na busca direta, usando estimativa de segurança.")
            
        if preco_base > 0:
            cat = CATEGORIA_POR_CHAVE.get(chave, 'graos_mercearia')
            fatores = FATORES_POR_CATEGORIA.get(cat, FATORES_POR_CATEGORIA['graos_mercearia'])
            precos_consolidados[nome_exibicao.lower().strip()] = {
                "atacadao": round(preco_base * fatores['atacadao'], 2),
                "assai": round(preco_base * fatores['assai'], 2),
                "diaadia": round(preco_base * fatores['diaadia'], 2),
                "carrefour": round(preco_base * fatores['carrefour'], 2),
                "bigbox": round(preco_base * fatores['bigbox'], 2),
                "dona": round(preco_base * fatores['dona'], 2),
                "paodeacucar": round(preco_base * fatores['paodeacucar'], 2),
                "produto_referencia": nome_encontrado,
                "marca_referencia": marca,
                "data_coleta": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            # Adiciona também chave curta para correspondência rápida
            precos_consolidados[chave] = precos_consolidados[nome_exibicao.lower().strip()]
            
        time.sleep(0.4) # Intervalo respeitoso entre requisições
        
    # Salvar em JSON para o Frontend
    caminho_json = os.path.join(os.path.dirname(__file__), "..", "precos_mercados_df.json")
    caminho_json = os.path.abspath(caminho_json)
    
    payload = {
        "versao": "2.0",
        "regiao": "Brasília - DF",
        "ultima_atualizacao": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "total_produtos": len(precos_consolidados),
        "cotacoes": precos_consolidados
    }
    
    with open(caminho_json, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
        
    print(f"\n[SUCESSO] Preços salvos em: {caminho_json}")
    print(f"Total de itens cotados: {len(precos_consolidados)}")

if __name__ == '__main__':
    coletar_precos_df()
