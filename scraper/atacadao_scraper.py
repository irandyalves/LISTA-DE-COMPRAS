"""
Coletor de Preços - Atacadão (Brasília / DF)
Utiliza a API pública de catálogo VTEX do Atacadão para buscar preços reais de produtos.
"""

import requests
import urllib.parse
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'application/json',
    'Accept-Language': 'pt-BR,pt;q=0.9',
}

def buscar_produto_atacadao(termo_busca, max_resultados=3):
    """
    Busca um produto no Atacadão e retorna uma lista de dicionários com:
    - nome: nome completo do produto
    - preco: preço de venda atual (float)
    - marca: marca do produto
    - ean: código de barras (se disponível)
    - disponivel: se está em estoque
    """
    termo_enc = urllib.parse.quote(termo_busca)
    url = f"https://www.atacadao.com.br/api/catalog_system/pub/products/search?ft={termo_enc}&_from=0&_to={max_resultados - 1}"
    
    try:
        resp = requests.get(url, headers=HEADERS, timeout=12)
        if resp.status_code not in (200, 206):
            return []
        
        produtos = resp.json()
        resultados = []
        
        for p in produtos:
            nome = p.get('productName', '')
            marca = p.get('brand', '')
            
            items = p.get('items', [])
            if not items:
                continue
            
            primeiro_item = items[0]
            ean = primeiro_item.get('ean', '')
            sellers = primeiro_item.get('sellers', [])
            
            preco = 0.0
            disponivel = False
            
            if sellers:
                offer = sellers[0].get('commertialOffer', {})
                preco = float(offer.get('Price', 0.0))
                disponivel = offer.get('AvailableQuantity', 0) > 0
            
            if preco > 0:
                resultados.append({
                    'mercado': 'atacadao',
                    'nome': nome,
                    'preco': round(preco, 2),
                    'marca': marca,
                    'ean': ean,
                    'disponivel': disponivel
                })
                
        return resultados
    except Exception as e:
        print(f"[Atacadão] Erro ao buscar '{termo_busca}': {e}")
        return []

if __name__ == '__main__':
    termos = ['arroz 5kg', 'feijao carioca 1kg', 'leite piracanjuba 1l', 'melancia', 'banana prata']
    print("=== TESTE DO COLETOR ATACADÃO DF ===")
    for t in termos:
        res = buscar_produto_atacadao(t, max_resultados=1)
        if res:
            p = res[0]
            print(f"OK: {t} -> {p['nome']} | R$ {p['preco']:.2f} ({p['marca']})")
        else:
            print(f"X: {t} -> Não encontrado")
        time.sleep(0.5)
