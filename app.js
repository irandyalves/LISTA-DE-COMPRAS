// Catálogo Mestre Completo Expandido (Hortifrúti 40+, Carnes e Frangos 25+, Higiene 16+, Básicos 20+, Laticínios 14+, Limpeza 12+, Padaria 7+)
const CATALOGO_PADRAO_EXPANDIDO = [
  // HORTIFRÚTI - LEGUMES E VERDURAS (30+ itens conforme exigido)
  { id: 'h_batata', nome: 'Batata Inglesa Lisa Especial (kg)', categoria: 'Hortifrúti', icone: 'batata', precoMedioDF: 5.80, ultimoPreco: 5.80, dataUltimoPreco: '2026-08-28' },
  { id: 'h_batatadoce', nome: 'Batata Doce Roxa (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_baroa', nome: 'Batata Baroa / Mandioquinha (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_cenoura', nome: 'Cenoura Especial Selecionada (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_beterraba', nome: 'Beterraba Fresca Selecionada (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-28' },
  { id: 'h_tomate_ita', nome: 'Tomate Italiano Especial (kg)', categoria: 'Hortifrúti', icone: 'tomate', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_tomate_sal', nome: 'Tomate Salada Longa Vida (kg)', categoria: 'Hortifrúti', icone: 'tomate', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_cebola_br', nome: 'Cebola Branca Nacional (kg)', categoria: 'Hortifrúti', icone: 'cebola', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_cebola_rx', nome: 'Cebola Roxa Selecionada (kg)', categoria: 'Hortifrúti', icone: 'cebola', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_alho', nome: 'Alho Roxo Nobre (kg)', categoria: 'Hortifrúti', icone: 'alho', precoMedioDF: 28.00, ultimoPreco: 28.00, dataUltimoPreco: '2026-08-28' },
  { id: 'h_alface_cresp', nome: 'Alface Crespa Hidropônica (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_alface_amer', nome: 'Alface Americana Crocante (Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-28' },
  { id: 'h_couve', nome: 'Couve Manteiga Fresca (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.00, ultimoPreco: 3.00, dataUltimoPreco: '2026-08-28' },
  { id: 'h_espinafre', nome: 'Espinafre Fresco Selecionado (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.80, ultimoPreco: 3.80, dataUltimoPreco: '2026-08-28' },
  { id: 'h_rucula', nome: 'Rúcula Hidropônica Fresca (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_abobrinha', nome: 'Abobrinha Verde Italiana (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_berinjela', nome: 'Berinjela Fresca (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-08-28' },
  { id: 'h_chuchu', nome: 'Chuchu Verde Especial (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_pepino', nome: 'Pepino Japonês (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_pimentao_vd', nome: 'Pimentão Verde Fresco (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_pimentao_col', nome: 'Pimentão Vermelho / Amarelo (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_mandioca', nome: 'Mandioca / Aipim Descascado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_quiabo', nome: 'Quiabo Fresco (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_abobora', nome: 'Abóbora Cabotiá / Japonesa (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_vagem', nome: 'Vagem Macarrão Fresca (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_cheiro_verde', nome: 'Cheiro Verde (Coentro e Cebolinha) (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 2.50, ultimoPreco: 2.50, dataUltimoPreco: '2026-08-28' },

  // HORTIFRÚTI - FRUTAS
  { id: 'h_banana_prata', nome: 'Banana Prata Selecionada (kg)', categoria: 'Hortifrúti', icone: 'banana', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_banana_nanica', nome: 'Banana Nanica / Caturra (kg)', categoria: 'Hortifrúti', icone: 'banana', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_maca_gala', nome: 'Maçã Nacional Gala (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_maca_fuji', nome: 'Maçã Verde / Fuji (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_mamao', nome: 'Mamão Papaia Doce (Unidade)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_laranja', nome: 'Laranja Pêra Doce (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-08-28' },
  { id: 'h_limao', nome: 'Limão Taiti Fresco (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-28' },
  { id: 'h_abacaxi', nome: 'Abacaxi Pérola Doce (Unidade)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_melancia', nome: 'Melancia Fatiada / Inteira (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 2.90, ultimoPreco: 2.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_melao', nome: 'Melão Amarelo Selecionado (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_uva', nome: 'Uva Thompson sem Semente (500g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_morango', nome: 'Morango Fresco Selecionado (Bandeja 250g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_abacate', nome: 'Abacate Manteiga Macio (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-08-28' },
  { id: 'h_manga', nome: 'Manga Palmer Doce (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-28' },
  { id: 'h_maracuja', nome: 'Maracujá Azedo (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-28' },

  // CARNES E PROTEÍNAS - CORTES BOVINOS
  { id: 'c_contrafile', nome: 'Carne Bife Contra-Filé Bovino (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_alcatra', nome: 'Carne Alcatra Bovina Selecionada (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_picanha', nome: 'Carne Picanha Bovina Especial (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 64.90, ultimoPreco: 64.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_patinho', nome: 'Carne Moída de Patinho de 1ª (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 35.90, ultimoPreco: 35.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_acem_moido', nome: 'Carne Moída de Acém de 2ª (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_costela', nome: 'Costela Bovina em Tiras / Janela (kg)', categoria: 'Carnes e Proteínas', icone: 'costela', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_musculo', nome: 'Músculo Bovino em Pedaços (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 27.90, ultimoPreco: 27.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_fraldinha', nome: 'Fraldinha Bovina para Grelhar (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_maminha', nome: 'Maminha Bovina Macia (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 38.90, ultimoPreco: 38.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_cupim', nome: 'Cupim Bovino Macio (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_lagarto', nome: 'Lagarto Bovino / Paulista (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 33.90, ultimoPreco: 33.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_acem_cubos', nome: 'Acém Bovino em Cubos para Panela (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_calabresa', nome: 'Linguiça Calabresa Defumada (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_toscana', nome: 'Linguiça Toscana para Churrasco (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-08-25' },
  { id: 'c_tilapia', nome: 'Filé de Tilápia Congelado (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 31.90, ultimoPreco: 31.90, dataUltimoPreco: '2026-08-20' },
  { id: 'c_carne_seca', nome: 'Carne de Sol / Carne Seca (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 42.90, ultimoPreco: 42.90, dataUltimoPreco: '2026-08-20' },

  // CARNES E PROTEÍNAS - FRANGO E AVES (Partes detalhadas)
  { id: 'f_peito_osso', nome: 'Peito de Frango sem Osso e Pele (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_sassami', nome: 'Filé de Peito / Sassami de Frango (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 18.50, ultimoPreco: 18.50, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coxa_sobre', nome: 'Coxa e Sobrecoxa de Frango Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_asinha', nome: 'Asinha de Frango / Meio da Asa (Tulipa) (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coxinha_asa', nome: 'Coxinha da Asa de Frango (Drumet) (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_passarinho', nome: 'Frango a Passarinho Congelado (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 13.50, ultimoPreco: 13.50, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coracao', nome: 'Coração de Frango para Grelhar (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_moela', nome: 'Moela de Frango Limpa (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_inteiro', nome: 'Frango Inteiro Resfriado (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-25' },

  // HIGIENE PESSOAL
  { id: 'hig_papel_dup', nome: 'Papel Higiênico Folha Dupla (Pacote c/ 12)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_papel_trip', nome: 'Papel Higiênico Folha Tripla (Pacote c/ 12)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_creme_dent', nome: 'Creme Dental Proteção Anticáries (90g)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_creme_sens', nome: 'Creme Dental Branqueador / Sensitive (90g)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_fio_dent', nome: 'Fio Dental com Cera Menta (50m)', categoria: 'Higiene', icone: 'fiodental', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_enxaguante', nome: 'Enxaguante Bucal Antisséptico (500ml)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_sab_barra', nome: 'Sabonete em Barra Hidratante (90g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 2.60, ultimoPreco: 2.60, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_sab_liq', nome: 'Sabonete Líquido para Mãos (250ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_shampoo', nome: 'Shampoo Tradicional / Cuidados Diários (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_condic', nome: 'Condicionador Capilar Hidratante (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 18.50, ultimoPreco: 18.50, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_desod_roll', nome: 'Desodorante Roll-on / Antitranspirante (50ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_desod_aero', nome: 'Desodorante Aerosol / Spray Seco (150ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_cotonetes', nome: 'Cotonetes / Hastes Flexíveis (Caixa c/ 75)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_escova_dent', nome: 'Escova Dental Macia Cerdas Finas (Unidade)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_barbear', nome: 'Aparelho de Barbear Descartável (Cartela c/ 2)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-08-15' },
  { id: 'hig_absorvente', nome: 'Absorvente Higiênico com Abas (Pacote c/ 8)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 6.20, ultimoPreco: 6.20, dataUltimoPreco: '2026-08-15' },

  // BÁSICOS E GRÃOS
  { id: 'b_arroz_5kg', nome: 'Arroz Branco Tipo 1 (Pacote 5kg)', categoria: 'Básicos e Grãos', icone: 'arroz', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-08-20' },
  { id: 'b_arroz_parb', nome: 'Arroz Parboilizado Tipo 1 (Pacote 5kg)', categoria: 'Básicos e Grãos', icone: 'arroz', precoMedioDF: 27.50, ultimoPreco: 27.50, dataUltimoPreco: '2026-08-20' },
  { id: 'b_arroz_int', nome: 'Arroz Integral Selecionado (1kg)', categoria: 'Básicos e Grãos', icone: 'arroz', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-08-20' },
  { id: 'b_feijao_car', nome: 'Feijão Carioca Novo Tipo 1 (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 7.20, ultimoPreco: 7.20, dataUltimoPreco: '2026-08-20' },
  { id: 'b_feijao_pt', nome: 'Feijão Preto Tipo 1 (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-08-15' },
  { id: 'b_acucar_cris', nome: 'Açúcar Cristal Especial (5kg)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-08-15' },
  { id: 'b_acucar_ref', nome: 'Açúcar Refinado (1kg)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-15' },
  { id: 'b_oleo_soja', nome: 'Óleo de Soja Refinado (Garrafa 900ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 5.85, ultimoPreco: 5.85, dataUltimoPreco: '2026-08-20' },
  { id: 'b_azeite', nome: 'Azeite de Oliva Extra Virgem (Vidro 500ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-08-10' },
  { id: 'b_cafe', nome: 'Café Torrado e Moído Tradicional (500g)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 17.60, ultimoPreco: 17.60, dataUltimoPreco: '2026-08-10' },
  { id: 'b_cafe_soluvel', nome: 'Café Solúvel / Granulado Tradicional (Pote 100g)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-08-10' },
  { id: 'b_macarrao_esp', nome: 'Macarrão Espaguete com Ovos (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 4.10, ultimoPreco: 4.10, dataUltimoPreco: '2026-08-10' },
  { id: 'b_macarrao_par', nome: 'Macarrão Parafuso / Pena (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-08-10' },
  { id: 'b_sal_ref', nome: 'Sal Refinado Iodado (1kg)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 2.80, ultimoPreco: 2.80, dataUltimoPreco: '2026-07-30' },
  { id: 'b_sal_grosso', nome: 'Sal Grosso para Churrasco (1kg)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-07-30' },
  { id: 'b_farinha_trigo', nome: 'Farinha de Trigo Tipo 1 sem Fermento (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.99, ultimoPreco: 4.99, dataUltimoPreco: '2026-08-05' },
  { id: 'b_farinha_mand', nome: 'Farinha de Mandioca Torrada / Branca (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.20, ultimoPreco: 5.20, dataUltimoPreco: '2026-08-05' },
  { id: 'b_fuba', nome: 'Fubá Mimoso / Milharina (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-08-05' },
  { id: 'b_pipoca', nome: 'Milho para Pipoca Especial (500g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-05' },

  // LATICÍNIOS, FRIOS E OVOS
  { id: 'l_leite_int', nome: 'Leite Integral UHT (Caixa 1L)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 4.49, ultimoPreco: 4.49, dataUltimoPreco: '2026-08-28' },
  { id: 'l_leite_desn', nome: 'Leite Desnatado / Semidesnatado (1L)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 4.89, ultimoPreco: 4.89, dataUltimoPreco: '2026-08-28' },
  { id: 'l_leite_lac', nome: 'Leite Zero Lactose (1L)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 5.40, ultimoPreco: 5.40, dataUltimoPreco: '2026-08-28' },
  { id: 'l_ovos_30', nome: 'Ovos Brancos / Vermelhos (Cartela c/ 30)', categoria: 'Laticínios e Frios', icone: 'ovos', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-08-28' },
  { id: 'l_ovos_caipira', nome: 'Ovos Caipiras Selecionados (Dúzia)', categoria: 'Laticínios e Frios', icone: 'ovos', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-08-28' },
  { id: 'l_mussarela', nome: 'Queijo Mussarela Fatiado (500g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-08-28' },
  { id: 'l_queijo_prato', nome: 'Queijo Prato Fatiado (kg)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 45.00, ultimoPreco: 45.00, dataUltimoPreco: '2026-08-25' },
  { id: 'l_queijo_minas', nome: 'Queijo Minas Frescal / Meia Cura (Peça)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 24.50, ultimoPreco: 24.50, dataUltimoPreco: '2026-08-25' },
  { id: 'l_manteiga', nome: 'Manteiga com Sal (Pote 200g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-08-15' },
  { id: 'l_requeijao', nome: 'Requeijão Cremoso Tradicional (Copo 200g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-20' },
  { id: 'l_iogurte', nome: 'Iogurte Natural / Frutas (Bandeja c/ 6)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-08-20' },
  { id: 'l_presunto', nome: 'Presunto Cozido Fatiado (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-08-25' },
  { id: 'l_creme_leite', nome: 'Creme de Leite UHT (Caixinha 200g)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 3.60, ultimoPreco: 3.60, dataUltimoPreco: '2026-08-20' },
  { id: 'l_leite_cond', nome: 'Leite Condensado Semidesnatado (Caixa 395g)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 5.80, ultimoPreco: 5.80, dataUltimoPreco: '2026-08-20' },

  // LIMPEZA DA CASA
  { id: 'limp_detergente', nome: 'Detergente Líquido Lava-Louças (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 2.15, ultimoPreco: 2.15, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_amaciante', nome: 'Amaciante Concentrado para Roupas (1.5L)', categoria: 'Limpeza', icone: 'amaciante', precoMedioDF: 16.20, ultimoPreco: 16.20, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_sabao', nome: 'Sabão em Pó / Líquido Lava-Roupas (2kg)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_qboa', nome: 'Água Sanitária / Qboa Cloro Ativo (2L)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_desinfet', nome: 'Desinfetante Perfumado Multiuso (2L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_veja', nome: 'Limpador Multiuso Veja / Similar (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_alcool', nome: 'Álcool 70% Líquido / Desinfetante (1L)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_esponja', nome: 'Esponja Dupla Face Multiuso (Pacote c/ 4)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_bombril', nome: 'Lã de Aço / Bombril (Pacote c/ 8)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 2.90, ultimoPreco: 2.90, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_saco_lixo', nome: 'Saco de Lixo Reforçado 50L (Rolo c/ 30)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-08-15' },
  { id: 'limp_papel_toalha', nome: 'Papel Toalha de Cozinha (Pacote c/ 2)', categoria: 'Limpeza', icone: 'papel', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-15' },

  // PADARIA E LANCHES
  { id: 'pad_pao_forma', nome: 'Pão de Forma Tradicional (Pacote 500g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_pao_frances', nome: 'Pão Francês Fresquinho (kg)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_pao_queijo', nome: 'Pão de Queijo Congelado (Pacote 400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_biscoito_rech', nome: 'Biscoito Recheado Tradicional (Pacote 130g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_biscoito_sal', nome: 'Biscoito Água e Sal / Cream Cracker (Pacote 400g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_torrada', nome: 'Torrada Tradicional Crocante (Pacote 140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_bolo', nome: 'Bolo de Pacote / Mistura para Bolo (400g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-25' }
];

// Estado da Aplicação
let AppState = {
  abaAtiva: 'lista', // 'lista', 'despensa', 'historico'
  filtroCategoria: 'todas',
  cotacaoAtiva: true, // true = cotado com preços e atacadistas visíveis, false = preços e atacadistas ocultos
  itensExcluidos: [],
  catalogo: [...CATALOGO_PADRAO_EXPANDIDO],

  // Itens atualmente marcados para a compra (sincronizados com os selecionados em Montar Lista)
  listaAtiva: [],

  // Histórico de compras finalizadas
  historico: [
    {
      id: 'h_1',
      data: '2026-08-20T14:30:00Z',
      mercado: 'Supermercado Central',
      total: 184.20,
      itensQtd: 6,
      itens: [
        { nome: 'Arroz 5kg', qtde: 2, preco: 28.90, subtotal: 57.80 },
        { nome: 'Feijão Carioca', qtde: 2, preco: 7.80, subtotal: 15.60 },
        { nome: 'Óleo de Soja', qtde: 4, preco: 6.20, subtotal: 24.80 },
        { nome: 'Café Torrado', qtde: 2, preco: 18.90, subtotal: 37.80 },
        { nome: 'Amaciante Concentrado', qtde: 1, preco: 16.90, subtotal: 16.90 },
        { nome: 'Sabão em Pó', qtde: 1, preco: 31.30, subtotal: 31.30 }
      ]
    }
  ]
};

// Sincroniza a Lista de Compra: SÓ MOSTRA O QUE FOR SELECIONADO EM MONTAR LISTA
function sincronizarListaAtivaComCatalogo() {
  AppState.listaAtiva = AppState.catalogo
    .filter(prod => !!prod.selecionado)
    .map(prod => {
      const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === prod.id || p.nome.toLowerCase().trim() === prod.nome.toLowerCase().trim());
      const precoReferenciaDF = (padrao && padrao.precoMedioDF) || prod.precoMedioDF || prod.preco || 0;

      return {
        id: prod.id,
        catalogoId: prod.id,
        nome: prod.nome,
        categoria: prod.categoria || deduzirCategoria(prod.nome),
        icone: prod.icone || detectarChaveIcone(prod.nome),
        marca: prod.marca || null,
        qtde: prod.qtde || 1,
        precoReferencia: precoReferenciaDF,
        preco: prod.preco || precoReferenciaDF,
        ultimoPreco: prod.ultimoPreco || precoReferenciaDF,
        dataUltimoPreco: prod.dataUltimoPreco || new Date().toISOString().slice(0, 10),
        comprado: !!prod.comprado,
        origemPreco: prod.origemPreco || null
      };
    });
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  carregarLocalmente();
  configurarNavegacao();
  configurarReconhecimentoVoz();
  inicializarNuvem();
  renderizarTudo();
});

// Carregamento de dados locais
function carregarLocalmente() {
  const dadosSalvos = localStorage.getItem('app_compras_irandy_v2');
  if (dadosSalvos) {
    try {
      const parsed = JSON.parse(dadosSalvos);
      if (parsed.itensExcluidos) AppState.itensExcluidos = parsed.itensExcluidos;
      if (parsed.cotacaoAtiva !== undefined) AppState.cotacaoAtiva = parsed.cotacaoAtiva;
      
      const excluidos = new Set((AppState.itensExcluidos || []).map(n => n.toLowerCase().trim()));
      
      if (parsed.catalogo && parsed.catalogo.length > 0) {
        const catalogoSalvo = parsed.catalogo;
        
        // Mapa mestre imutável do catálogo padrão do DF
        const mapaPadrao = new Map();
        CATALOGO_PADRAO_EXPANDIDO.forEach(p => {
          mapaPadrao.set(p.id, p);
          mapaPadrao.set(p.nome.toLowerCase().trim(), p);
        });

        // Restaura precoMedioDF e dados autênticos para os itens padrão (elimina dados corrompidos por cotar antigo)
        catalogoSalvo.forEach(c => {
          const padrao = mapaPadrao.get(c.id) || mapaPadrao.get(c.nome.toLowerCase().trim());
          if (padrao) {
            c.precoMedioDF = padrao.precoMedioDF;
            c.ultimoPreco = padrao.ultimoPreco;
            c.icone = padrao.icone || c.icone;
            c.categoria = padrao.categoria || c.categoria;
            // Se o preço salvo sofreu corrosão por cliques anteriores em Cotar, recupera o valor real oficial
            if (!c.preco || c.preco < (padrao.precoMedioDF * 0.7)) {
              c.preco = padrao.precoMedioDF;
            }
          }
        });

        const nomesSalvos = new Set(catalogoSalvo.map(c => c.nome.toLowerCase().trim()));
        CATALOGO_PADRAO_EXPANDIDO.forEach(itemPadrao => {
          const nomeNorm = itemPadrao.nome.toLowerCase().trim();
          if (!nomesSalvos.has(nomeNorm) && !excluidos.has(nomeNorm)) {
            catalogoSalvo.push({ ...itemPadrao });
          }
        });
        AppState.catalogo = catalogoSalvo;
      } else {
        AppState.catalogo = CATALOGO_PADRAO_EXPANDIDO.filter(it => !excluidos.has(it.nome.toLowerCase().trim())).map(it => ({ ...it }));
      }

      // Sincroniza quem está selecionado no catálogo com base no que foi salvo
      if (parsed.listaAtiva && Array.isArray(parsed.listaAtiva)) {
        const nomesNaLista = new Set(parsed.listaAtiva.map(it => it.nome.toLowerCase().trim()));
        const idsNaLista = new Set(parsed.listaAtiva.map(it => String(it.id).replace('item_despensa_', '')));

        AppState.catalogo.forEach(c => {
          if (c.selecionado !== undefined) {
            c.selecionado = !!c.selecionado;
          } else {
            c.selecionado = nomesNaLista.has(c.nome.toLowerCase().trim()) || idsNaLista.has(String(c.id));
          }

          const itemSalvo = parsed.listaAtiva.find(it => 
            it.nome.toLowerCase().trim() === c.nome.toLowerCase().trim() || 
            String(it.id).includes(String(c.id))
          );
          if (itemSalvo) {
            c.qtde = itemSalvo.qtde || 1;
            c.comprado = !!itemSalvo.comprado;
            c.marca = itemSalvo.marca || null;
            // Evita herdar preço degradado
            if (c.precoMedioDF && itemSalvo.preco < (c.precoMedioDF * 0.7)) {
              c.preco = c.precoMedioDF;
            } else {
              c.preco = itemSalvo.preco || c.precoMedioDF;
            }
            c.origemPreco = itemSalvo.origemPreco || null;
          }
        });
      }

      // Lista de Compra SÓ mostra o que for selecionado em Montar Lista!
      sincronizarListaAtivaComCatalogo();

      if (parsed.historico) AppState.historico = parsed.historico;
    } catch (e) {
      console.error("Erro ao carregar dados locais:", e);
    }
  } else {
    AppState.catalogo = [...CATALOGO_PADRAO_EXPANDIDO];
    sincronizarListaAtivaComCatalogo();
  }
}

// Salvar dados com sincronização automática
let timeoutSincronizacao = null;
function salvarEstado(enviarParaNuvem = true) {
  // Salva no localStorage como cache rápido
  localStorage.setItem('app_compras_irandy_v2', JSON.stringify({
    catalogo: AppState.catalogo,
    listaAtiva: AppState.listaAtiva,
    historico: AppState.historico,
    itensExcluidos: AppState.itensExcluidos || [],
    cotacaoAtiva: AppState.cotacaoAtiva
  }));

  // Sincroniza com o Firebase se estiver conectado
  if (enviarParaNuvem && FirebaseSync.estaConectado) {
    clearTimeout(timeoutSincronizacao);
    timeoutSincronizacao = setTimeout(() => {
      FirebaseSync.sincronizarComNuvem({
        catalogo: AppState.catalogo,
        listaAtiva: AppState.listaAtiva,
        historico: AppState.historico
      });
    }, 400); // Debounce de 400ms
  }
}

// Conectar e gerenciar Nuvem Google (Firebase)
function inicializarNuvem() {
  FirebaseSync.inicializar(
    (dadosNuvem) => {
      // Recebeu atualização da Nuvem (ex: esposa acabou de marcar um item no celular)
      if (dadosNuvem.catalogo) AppState.catalogo = dadosNuvem.catalogo;
      if (dadosNuvem.listaAtiva) AppState.listaAtiva = dadosNuvem.listaAtiva;
      if (dadosNuvem.historico) AppState.historico = dadosNuvem.historico;
      salvarEstado(false); // Salva local sem retransmitir
      renderizarTudo();
    },
    (status) => {
      atualizarBadgeStatus(status);
    }
  );
}

function atualizarBadgeStatus(status) {
  const btnNuvem = document.getElementById('btn-nuvem-header');
  if (btnNuvem) {
    if (status.online) {
      btnNuvem.classList.add('online');
      btnNuvem.title = "Nuvem Google: Sincronizado em Tempo Real";
    } else {
      btnNuvem.classList.remove('online');
      btnNuvem.title = status.msg || "Configurar Nuvem / Compartilhar com Esposa";
    }
  }
}

// Configuração dos Mercados de Brasília (Asa Norte / Asa Sul / SIA / Vicente Pires)
const MERCADOS_DF = {
  atacadao: { id: 'atacadao', nome: 'Atacadão', regiao: 'SIA / DF', emoji: '🟠', logo: 'atacadao', fator: 0.92 },
  assai: { id: 'assai', nome: 'Assaí Atacadista', regiao: 'SIA / DF', emoji: '🔵', logo: 'assai', fator: 0.94 },
  diaadia: { id: 'diaadia', nome: 'Dia a Dia', regiao: 'SIA / DF', emoji: '🔴', logo: 'diaadia', fator: 0.93 },
  carrefour: { id: 'carrefour', nome: 'Carrefour', regiao: 'Asa Sul / Blvd Norte', emoji: '🟦', logo: 'carrefour', fator: 1.02 },
  bigbox: { id: 'bigbox', nome: 'Big Box', regiao: 'Asa Norte / Asa Sul', emoji: '🟢', logo: 'bigbox', fator: 1.08 },
  paodeacucar: { id: 'paodeacucar', nome: 'Pão de Açúcar', regiao: 'Asa Sul / Asa Norte', emoji: '🌿', logo: 'paodeacucar', fator: 1.15 }
};

// Cotações específicas de produtos para a região de Brasília (DF)
const COTACOES_DF = {
  'arroz': { atacadao: 26.50, assai: 26.90, carrefour: 28.90, bigbox: 31.20 },
  'feijao': { atacadao: 6.99, assai: 7.15, carrefour: 7.80, bigbox: 8.40 },
  'acucar': { atacadao: 15.20, assai: 15.40, carrefour: 16.50, bigbox: 17.80 },
  'oleo': { atacadao: 5.70, assai: 5.85, carrefour: 6.20, bigbox: 6.80 },
  'cafe': { atacadao: 17.40, assai: 17.60, carrefour: 18.90, bigbox: 20.90 },
  'macarrao': { atacadao: 3.99, assai: 4.10, carrefour: 4.50, bigbox: 4.99 },
  'farinha': { atacadao: 4.90, assai: 4.99, carrefour: 5.40, bigbox: 5.90 },
  'sal': { atacadao: 2.60, assai: 2.70, carrefour: 2.99, bigbox: 3.30 },
  'frango': { atacadao: 17.90, assai: 18.10, carrefour: 19.90, bigbox: 22.50 },
  'carne': { atacadao: 31.90, assai: 32.50, carrefour: 34.90, bigbox: 38.90 },
  'costela': { atacadao: 24.50, assai: 24.90, carrefour: 27.90, bigbox: 29.90 },
  'linguica': { atacadao: 21.90, assai: 22.40, carrefour: 24.50, bigbox: 26.90 },
  'peixe': { atacadao: 30.90, assai: 31.50, carrefour: 34.90, bigbox: 38.90 },
  'leite': { atacadao: 4.39, assai: 4.49, carrefour: 4.89, bigbox: 5.39 },
  'queijo': { atacadao: 8.70, assai: 8.90, carrefour: 9.50, bigbox: 10.80 },
  'ovos': { atacadao: 13.90, assai: 14.20, carrefour: 15.00, bigbox: 16.90 },
  'manteiga': { atacadao: 10.40, assai: 10.60, carrefour: 11.50, bigbox: 12.90 },
  'iogurte': { atacadao: 7.90, assai: 8.20, carrefour: 9.20, bigbox: 10.50 },
  'detergente': { atacadao: 2.09, assai: 2.15, carrefour: 2.39, bigbox: 2.79 },
  'amaciante': { atacadao: 14.90, assai: 15.20, carrefour: 16.90, bigbox: 18.90 },
  'sabao': { atacadao: 21.90, assai: 22.40, carrefour: 24.50, bigbox: 27.90 },
  'sanitaria': { atacadao: 4.70, assai: 4.85, carrefour: 5.50, bigbox: 6.10 },
  'desinfetante': { atacadao: 7.90, assai: 8.20, carrefour: 9.50, bigbox: 10.90 },
  'banana': { atacadao: 5.80, assai: 5.90, carrefour: 6.50, bigbox: 7.20 },
  'tomate': { atacadao: 6.50, assai: 6.70, carrefour: 7.20, bigbox: 8.50 },
  'batata': { atacadao: 5.50, assai: 5.60, carrefour: 6.20, bigbox: 6.90 },
  'cebola': { atacadao: 4.60, assai: 4.80, carrefour: 5.40, bigbox: 5.99 },
  'alho': { atacadao: 26.90, assai: 27.50, carrefour: 29.90, bigbox: 32.90 },
  'legumes': { atacadao: 4.20, assai: 4.50, carrefour: 4.99, bigbox: 5.80 },
  'folhas': { atacadao: 2.99, assai: 3.20, carrefour: 3.80, bigbox: 4.50 },
  'fruta': { atacadao: 6.90, assai: 7.20, carrefour: 8.50, bigbox: 9.90 },
  'papel': { atacadao: 15.90, assai: 16.20, carrefour: 18.00, bigbox: 20.50 },
  'dente': { atacadao: 4.50, assai: 4.70, carrefour: 5.40, bigbox: 5.90 },
  'fiodental': { atacadao: 8.90, assai: 9.20, carrefour: 10.50, bigbox: 11.90 },
  'sabonete': { atacadao: 2.40, assai: 2.50, carrefour: 2.80, bigbox: 3.20 },
  'shampoo': { atacadao: 15.90, assai: 16.20, carrefour: 17.90, bigbox: 19.90 },
  'pao': { atacadao: 7.20, assai: 7.50, carrefour: 8.50, bigbox: 9.20 },
  'biscoito': { atacadao: 3.80, assai: 3.99, carrefour: 4.50, bigbox: 4.90 }
};

// Catálogo de Marcas Populares e Cotações Específicas em Brasília (DF)
const MARCAS_POPULARES = [
  'Piracanjuba', 'Ninho', 'Leitíssimo', 'Leitissimo', 'Itambé', 'Itambe', 'Molico', 'Parmalat',
  'Tio João', 'Tio Joao', 'Camil', 'Prato Fino', 'Kicaldo', 'Tio Jorge',
  'Pilão', 'Pilao', '3 Corações', '3 Coracoes', 'Melitta', 'L\'Or', 'Caboclo',
  'União', 'Uniao', 'Cristal', 'Soya', 'Liza', 'Gallo', 'Borges',
  'Barilla', 'Adria', 'Dona Benta', 'Renata',
  'Seara', 'Sadia', 'Perdigão', 'Perdigao', 'Friboi', 'Crioulo', 'Catupiry',
  'OMO', 'Brilhante', 'Ariel', 'Ypê', 'Ype', 'Comfort', 'Downy', 'Qboa',
  'Colgate', 'Oral-B', 'Dove', 'Pantene', 'Neve'
];

// Cotações específicas por Marca para Brasília (DF)
const COTACOES_MARCAS_DF = {
  // Leites em Brasília
  'leite:piracanjuba': { atacadao: 4.39, assai: 4.49, carrefour: 4.89, bigbox: 5.39 },
  'leite:leitissimo': { atacadao: 7.79, assai: 7.99, carrefour: 8.50, bigbox: 9.20 },
  'leite:ninho': { atacadao: 5.59, assai: 5.75, carrefour: 6.20, bigbox: 6.89 },
  'leite:itambe': { atacadao: 4.49, assai: 4.59, carrefour: 4.99, bigbox: 5.49 },
  'leite:molico': { atacadao: 6.20, assai: 6.35, carrefour: 6.89, bigbox: 7.50 },

  // Arroz e Feijão em Brasília
  'arroz:tio joao': { atacadao: 29.90, assai: 30.50, carrefour: 32.90, bigbox: 35.90 },
  'arroz:camil': { atacadao: 26.50, assai: 26.90, carrefour: 28.90, bigbox: 31.20 },
  'arroz:cristal': { atacadao: 27.90, assai: 28.20, carrefour: 28.52, bigbox: 32.90 },
  'arroz:prato fino': { atacadao: 31.50, assai: 31.90, carrefour: 34.50, bigbox: 37.90 },
  'feijao:camil': { atacadao: 6.99, assai: 7.15, carrefour: 7.80, bigbox: 8.40 },
  'feijao:kicaldo': { atacadao: 7.20, assai: 7.35, carrefour: 7.99, bigbox: 8.60 },
  'feijao:tio jorge': { atacadao: 7.10, assai: 7.25, carrefour: 7.90, bigbox: 7.45 },

  // Açúcar e Óleo
  'acucar:cristal': { atacadao: 15.20, assai: 15.50, carrefour: 16.20, bigbox: 16.90 },
  'acucar:caravelas': { atacadao: 15.40, assai: 15.60, carrefour: 15.80, bigbox: 16.50 },
  'acucar:uniao': { atacadao: 16.20, assai: 16.50, carrefour: 17.20, bigbox: 17.90 },
  'oleo:soya': { atacadao: 5.70, assai: 5.85, carrefour: 6.10, bigbox: 6.50 },
  'oleo:liza': { atacadao: 5.90, assai: 5.99, carrefour: 6.30, bigbox: 6.70 },
  'oleo:salada': { atacadao: 5.95, assai: 6.10, carrefour: 6.40, bigbox: 6.20 },

  // Cafés em Brasília
  'cafe:pilao': { atacadao: 17.40, assai: 17.60, carrefour: 18.90, bigbox: 20.90 },
  'cafe:3 coracoes': { atacadao: 16.90, assai: 17.20, carrefour: 18.50, bigbox: 19.90 },
  'cafe:melitta': { atacadao: 17.90, assai: 18.20, carrefour: 19.50, bigbox: 21.50 },
  'cafe:l\'or': { atacadao: 21.90, assai: 22.50, carrefour: 24.90, bigbox: 27.90 },

  // Macarrão e Farinha
  'macarrao:adria': { atacadao: 3.99, assai: 4.10, carrefour: 4.40, bigbox: 4.80 },
  'macarrao:renata': { atacadao: 4.10, assai: 4.20, carrefour: 4.50, bigbox: 4.90 },
  'macarrao:barilla': { atacadao: 5.60, assai: 5.80, carrefour: 5.90, bigbox: 6.50 },
  'farinha:emege': { atacadao: 4.99, assai: 5.09, carrefour: 5.39, bigbox: 5.49 },
  'farinha:rosa branca': { atacadao: 4.90, assai: 4.99, carrefour: 5.30, bigbox: 5.70 },
  'farinha:finna': { atacadao: 5.10, assai: 5.25, carrefour: 5.60, bigbox: 5.20 },
  'farinha:dona benta': { atacadao: 5.40, assai: 5.50, carrefour: 5.80, bigbox: 6.20 },
  'farinha:sol': { atacadao: 5.10, assai: 5.19, carrefour: 5.49, bigbox: 5.69 },
  'farinha:mirella': { atacadao: 5.15, assai: 5.25, carrefour: 5.59, bigbox: 5.79 },
  'farinha:anaconda': { atacadao: 5.50, assai: 5.60, carrefour: 5.89, bigbox: 6.10 },
  'farinha:venturelli': { atacadao: 6.50, assai: 6.60, carrefour: 6.89, bigbox: 7.20 },
  'farinha:primor': { atacadao: 4.79, assai: 4.89, carrefour: 5.19, bigbox: 5.39 },
  'farinha:globo': { atacadao: 4.89, assai: 4.99, carrefour: 5.29, bigbox: 5.49 },

  // Carnes e Frios
  'frango:seara': { atacadao: 17.90, assai: 18.20, carrefour: 19.50, bigbox: 20.90 },
  'frango:sadia': { atacadao: 18.20, assai: 18.50, carrefour: 19.80, bigbox: 21.20 },
  'carne:friboi': { atacadao: 31.90, assai: 32.50, carrefour: 34.90, bigbox: 36.90 },
  'carne:maturatta': { atacadao: 33.90, assai: 34.50, carrefour: 36.90, bigbox: 38.90 },
  'queijo:piracanjuba': { atacadao: 8.70, assai: 8.90, carrefour: 9.50, bigbox: 10.20 },
  'manteiga:itambe': { atacadao: 10.40, assai: 10.70, carrefour: 11.50, bigbox: 12.20 },

  // Limpeza em Brasília
  'sabao:omo': { atacadao: 22.90, assai: 23.50, carrefour: 25.90, bigbox: 28.90 },
  'sabao:brilhante': { atacadao: 17.90, assai: 18.20, carrefour: 19.90, bigbox: 22.50 },
  'sabao:ariel': { atacadao: 23.50, assai: 23.90, carrefour: 26.50, bigbox: 29.90 },
  'amaciante:comfort': { atacadao: 15.90, assai: 16.20, carrefour: 17.90, bigbox: 19.50 },
  'amaciante:downy': { atacadao: 17.90, assai: 18.50, carrefour: 19.90, bigbox: 22.90 },
  'amaciante:ype': { atacadao: 11.90, assai: 12.20, carrefour: 13.50, bigbox: 14.90 },
  'detergente:ype': { atacadao: 2.09, assai: 2.15, carrefour: 2.39, bigbox: 2.69 },
  'detergente:minuano': { atacadao: 1.95, assai: 1.99, carrefour: 2.29, bigbox: 2.59 },
  'detergente:limpol': { atacadao: 2.05, assai: 2.10, carrefour: 2.35, bigbox: 2.15 }
};

function detectarMarca(texto) {
  if (!texto) return null;
  const t = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (let marca of MARCAS_POPULARES) {
    const m = marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const regex = new RegExp(`(^|\\s)${m}(\\s|$)`, 'i');
    if (regex.test(t)) {
      if (m.includes('leitissimo')) return 'Leitíssimo';
      if (m.includes('piracanjuba')) return 'Piracanjuba';
      if (m.includes('ninho')) return 'Ninho';
      if (m.includes('itambe')) return 'Itambé';
      if (m.includes('tio joao')) return 'Tio João';
      if (m.includes('pilao')) return 'Pilão';
      if (m.includes('3 coracoes')) return '3 Corações';
      if (m.includes('omo')) return 'OMO';
      return marca;
    }
  }
  return null;
}

// Verifica se o texto do produto realmente corresponde ao item cotado no DF
function itemCorrespondeCotacaoDF(nome, chaveIcone) {
  if (!nome) return false;
  const n = nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Itens incomuns, exóticos ou desconhecidos que NÃO devem receber cotações genéricas
  if (n.includes('jia') || n.includes(' rã') || n.includes('jacare') || n.includes('avestruz') || n.includes('exotic') || n.includes('puta')) {
    return false;
  }

  // Verifica se o item bate com o catálogo padrão da despensa
  const doCatalogo = AppState.catalogo.find(c => 
    c.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(n) || 
    n.includes(c.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  );
  if (doCatalogo) return true;

  const termosValidos = {
    'arroz': ['arroz'],
    'feijao': ['feijao'],
    'acucar': ['acucar'],
    'oleo': ['oleo', 'soya', 'liza', 'azeite'],
    'cafe': ['cafe', 'pilao', 'melitta'],
    'macarrao': ['macarrao', 'espaguete', 'parafuso'],
    'farinha': ['farinha', 'trigo', 'fuba'],
    'sal': ['sal '],
    'frango': ['frango', 'peito de frango', 'coxa', 'sobrecoxa', 'sassami', 'asinha', 'drumet', 'passarinho', 'coracao de frango', 'moela'],
    'carne': ['contra-file', 'contrafile', 'alcatra', 'picanha', 'patinho', 'acem', 'musculo', 'fraldinha', 'maminha', 'cupim', 'lagarto', 'carne moida', 'bife'],
    'costela': ['costela'],
    'linguica': ['calabresa', 'linguica'],
    'peixe': ['tilapia', 'peixe'],
    'leite': ['leite'],
    'queijo': ['mussarela', 'queijo'],
    'ovos': ['ovo'],
    'manteiga': ['manteiga', 'requeijao'],
    'iogurte': ['iogurte'],
    'detergente': ['detergente'],
    'amaciante': ['amaciante'],
    'sabao': ['sabao', 'omo', 'brilhante', 'ariel'],
    'sanitaria': ['sanitaria', 'qboa', 'cloro'],
    'desinfetante': ['desinfetante'],
    'banana': ['banana'],
    'tomate': ['tomate'],
    'batata': ['batata'],
    'cebola': ['cebola'],
    'alho': ['alho'],
    'legumes': ['cenoura', 'beterraba', 'chuchu', 'abobrinha', 'berinjela', 'pepino', 'quiabo', 'mandioca', 'vagem'],
    'folhas': ['alface', 'couve', 'espinafre', 'rucula', 'cheiro verde'],
    'fruta': ['maca', 'mamao', 'laranja', 'limao', 'abacaxi', 'melancia', 'melao', 'uva', 'morango', 'abacate', 'manga', 'maracuja'],
    'papel': ['papel higienico', 'papel '],
    'dente': ['creme dental', 'pasta de dente', 'escova dental', 'cotonete', 'enxaguante'],
    'fiodental': ['fio dental'],
    'sabonete': ['sabonete', 'desodorante'],
    'shampoo': ['shampoo', 'condicionador'],
    'pao': ['pao de forma', 'pao frances', 'pao de queijo'],
    'biscoito': ['biscoito', 'bolacha', 'torrada']
  };

  const lista = termosValidos[chaveIcone];
  if (!lista) return false;
  return lista.some(termo => n.includes(termo));
}

// Função para calcular o preço de um item num mercado específico de Brasília
function obterPrecoEstimadoMercado(item, redeId) {
  const chaveIcone = item.icone || detectarChaveIcone(item.nome);
  const marca = item.marca || detectarMarca(item.nome);

  // 1. Prioridade: Cotação específica da Marca no DF
  if (marca) {
    const marcaNorm = marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const chaveComposta = `${chaveIcone}:${marcaNorm}`;
    if (COTACOES_MARCAS_DF[chaveComposta] && COTACOES_MARCAS_DF[chaveComposta][redeId]) {
      return COTACOES_MARCAS_DF[chaveComposta][redeId];
    }
  }

  // 2. Cotação geral do produto no DF (Apenas se corresponder a item conhecido no DF)
  if (itemCorrespondeCotacaoDF(item.nome, chaveIcone)) {
    if (COTACOES_DF[chaveIcone] && COTACOES_DF[chaveIcone][redeId]) {
      return COTACOES_DF[chaveIcone][redeId];
    }
  }

  // 3. Busca prioritariamente pelo padrão oficial imutável de Brasília
  let precoBase = 0;
  const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => 
    p.id === item.id || 
    p.id === item.catalogoId || 
    p.nome.toLowerCase().trim() === item.nome.toLowerCase().trim()
  );

  if (padrao && padrao.precoMedioDF > 0) {
    precoBase = padrao.precoMedioDF;
  } else {
    const catItem = AppState.catalogo.find(c => 
      c.nome.toLowerCase().trim() === item.nome.toLowerCase().trim() ||
      String(c.id) === String(item.id) ||
      String(c.id) === String(item.catalogoId)
    );

    if (catItem && catItem.precoMedioDF > 0) {
      precoBase = Number(catItem.precoMedioDF);
    } else if (item.precoReferencia && Number(item.precoReferencia) > 0) {
      precoBase = Number(item.precoReferencia);
    } else if (catItem && catItem.ultimoPreco && Number(catItem.ultimoPreco) > 0) {
      precoBase = Number(catItem.ultimoPreco);
    } else if (item.ultimoPreco && Number(item.ultimoPreco) > 0) {
      precoBase = Number(item.ultimoPreco);
    } else if (item.preco && Number(item.preco) > 0) {
      precoBase = Number(item.preco);
      // Fixa o precoReferencia para que cotações futuras nunca degradem em cascata
      item.precoReferencia = precoBase;
    }
  }

  if (precoBase > 0) {
    const fator = MERCADOS_DF[redeId] ? MERCADOS_DF[redeId].fator : 1.0;
    return Number((precoBase * fator).toFixed(2));
  }

  // Item sem cotação conhecida no DF: retorna 0 (NÃO INVENTAR PREÇO FALSO)
  return 0;
}

// Navegação de Abas
function configurarNavegacao() {
  const botoesNav = document.querySelectorAll('.nav-item');
  botoesNav.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesNav.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      AppState.abaAtiva = btn.getAttribute('data-aba');
      
      document.getElementById('view-lista').style.display = AppState.abaAtiva === 'lista' ? 'block' : 'none';
      document.getElementById('view-despensa').style.display = AppState.abaAtiva === 'despensa' ? 'block' : 'none';
      document.getElementById('view-mercados').style.display = AppState.abaAtiva === 'mercados' ? 'block' : 'none';
      document.getElementById('view-historico').style.display = AppState.abaAtiva === 'historico' ? 'block' : 'none';

      // Alternar abas do painel superior congelado
      const abasCategorias = document.getElementById('barra-abas-categorias');
      const inputTopo = document.getElementById('input-novo-item');

      if (abasCategorias) abasCategorias.style.display = (AppState.abaAtiva === 'lista' || AppState.abaAtiva === 'despensa') ? 'flex' : 'none';
      if (inputTopo) {
        inputTopo.placeholder = AppState.abaAtiva === 'despensa' 
          ? 'Pesquisar ou cadastrar em Montar Lista...' 
          : 'Pesquisar ou adicionar à Lista de Compra...';
      }

      renderizarTudo();
    });
  });
}

// Alternar mercado de referência para a lista
function selecionarMercadoReferencia(mercadoId) {
  AppState.mercadoReferencia = mercadoId;
  const chips = document.querySelectorAll('.btn-chip-mercado');
  chips.forEach(chip => {
    if (chip.getAttribute('data-mercado') === mercadoId) {
      chip.classList.add('ativo');
    } else {
      chip.classList.remove('ativo');
    }
  });

  atualizarCardResumo();
  if (AppState.abaAtiva === 'mercados') {
    renderizarComparadorDF();
  }
}

// Renderizar telas
function renderizarTudo() {
  if (AppState.abaAtiva === 'lista') {
    renderizarListaCompras();
  } else if (AppState.abaAtiva === 'despensa') {
    renderizarDespensa();
  } else if (AppState.abaAtiva === 'mercados') {
    renderizarComparadorDF();
  } else if (AppState.abaAtiva === 'historico') {
    renderizarHistorico();
  }
  atualizarCardResumo();
  atualizarVisualBotaoCotar();
}

// Atualizar Totais do Carrinho e Estimado
function atualizarCardResumo() {
  const elTotal = document.getElementById('resumo-total-valor');
  const elProgresso = document.getElementById('resumo-progresso-badge');

  if (!AppState.cotacaoAtiva) {
    if (elTotal) {
      elTotal.textContent = 'R$ --';
    }
    if (elProgresso) {
      const comprados = AppState.listaAtiva.filter(i => i.comprado).length;
      elProgresso.textContent = `🛒 ${comprados} de ${AppState.listaAtiva.length} pegos`;
    }
    return;
  }

  let totalEstimado = 0;
  let totalCarrinho = 0;
  let totalItens = AppState.listaAtiva.length;
  let itensNoCarrinho = 0;
  const ref = AppState.mercadoReferencia || 'todos';

  AppState.listaAtiva.forEach(item => {
    let precoItem = item.preco || 0;
    if (ref !== 'todos') {
      precoItem = obterPrecoEstimadoMercado(item, ref);
    } else if (precoItem === 0) {
      precoItem = item.ultimoPreco || obterPrecoEstimadoMercado(item, 'carrefour');
    }

    const subtotal = (item.qtde || 1) * precoItem;
    totalEstimado += subtotal;
    if (item.comprado) {
      totalCarrinho += subtotal;
      itensNoCarrinho++;
    }
  });

  if (elTotal) {
    elTotal.textContent = `R$ ${totalEstimado.toFixed(2).replace('.', ',')}`;
  }
  if (elProgresso) {
    elProgresso.textContent = `🛒 ${itensNoCarrinho} de ${totalItens} pegos (R$ ${totalCarrinho.toFixed(2).replace('.', ',')})`;
  }
}

// Renderizar a Lista de Compras Ativa (com Ícones 2D Coloridos)
function renderizarListaCompras() {
  const container = document.getElementById('itens-lista-container');
  if (!container) return;
  container.innerHTML = '';

  if (AppState.listaAtiva.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: white; border-radius: 16px; border: 1px dashed var(--border);">
        <div style="width: 64px; height: 64px; margin: 0 auto 12px;">${ICONS_2D.padrao}</div>
        <h3 style="font-weight: 700; color: var(--text-main);">Sua lista está vazia!</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">
          Digite um item acima, use o microfone por voz ou escolha itens frequentes na aba <strong>Despensa</strong>.
        </p>
      </div>
    `;
    return;
  }

  // 0. Filtragem por categoria e termo de busca no topo
  let itensListaParaExibir = AppState.listaAtiva;

  if (AppState.filtroCategoria && AppState.filtroCategoria !== 'todas') {
    itensListaParaExibir = itensListaParaExibir.filter(item => (item.categoria || 'Diversos') === AppState.filtroCategoria);
  }

  if (termoBuscaLista) {
    itensListaParaExibir = itensListaParaExibir.filter(item => {
      const nomeNorm = item.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const catNorm = (item.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const marcaNorm = (item.marca || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termoBuscaLista) || catNorm.includes(termoBuscaLista) || marcaNorm.includes(termoBuscaLista);
    });
  }

  if (itensListaParaExibir.length === 0) {
    if (AppState.filtroCategoria && AppState.filtroCategoria !== 'todas') {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px 15px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 10px;">
            Nenhum item na sua lista dentro da categoria <strong>${AppState.filtroCategoria}</strong>.
          </p>
          <button class="btn-adicionar-topo" style="margin: 0 auto; display: inline-flex;" onclick="filtrarCategoriaGeral('todas')">🌐 Ver Todas as Categorias</button>
        </div>
      `;
      return;
    }

    if (termoBuscaLista) {
      const inputTopo = document.getElementById('input-novo-item');
      const valorDigitado = inputTopo ? inputTopo.value.trim() : termoBuscaLista;
      container.innerHTML = `
        <div style="text-align: center; padding: 25px 15px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 8px;">
            Nenhum item na lista corresponde a "<strong>${valorDigitado}</strong>".
          </p>
          <button class="btn-adicionar-topo" style="margin: 0 auto; display: inline-flex;" onclick="adicionarItemRapido()">➕ Adicionar "${valorDigitado}" à Lista</button>
        </div>
      `;
      return;
    }
  }

  // Agrupar itens por Categoria
  const grupos = {};
  itensListaParaExibir.forEach((item, index) => {
    const cat = item.categoria || 'Diversos';
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push({ ...item, indexOriginal: index });
  });

  for (const [categoria, itens] of Object.entries(grupos)) {
    const grupoDiv = document.createElement('div');
    grupoDiv.className = 'categoria-grupo';

    // Ordenação dinâmica: se o modo for 'mais_baratos', ordena pelos menores preços primeiro!
    if (AppState.modoCotacao === 'mais_baratos') {
      itens.sort((a, b) => {
        if (a.comprado !== b.comprado) return a.comprado ? 1 : -1;
        return (a.preco || 0) - (b.preco || 0); // Primeiro os mais baratos
      });
    } else {
      itens.sort((a, b) => {
        if (a.comprado === b.comprado) return 0;
        return a.comprado ? 1 : -1;
      });
    }

    let htmlItens = '';
    itens.forEach(item => {
      const iconeSvg = obterIcone2D(item.nome, item.icone);
      const classeComprado = item.comprado ? 'comprado' : '';
      const checkIcone = item.comprado ? '✓' : '';
      
      let marcaHtml = '';
      if (item.marca) {
        marcaHtml = `<span class="tag-marca" onclick="alterarMarcaItem('${item.id}')" title="Marca: ${item.marca} (Clique para alterar)">${item.marca}</span>`;
      } else {
        marcaHtml = `<span class="tag-marca" style="background:#F1F5F9; color:#64748B; border-color:#E2E8F0; font-weight:normal;" onclick="alterarMarcaItem('${item.id}')" title="Clique para definir marca">+ Marca</span>`;
      }

      // Tag de Mercado de Origem do Preço Cotado (some quando desmarcado)
      let tagMercadoOrigem = '';
      if (AppState.cotacaoAtiva && item.origemPreco && MERCADOS_DF[item.origemPreco]) {
        const infoM = MERCADOS_DF[item.origemPreco];
        const logoM = (typeof obterLogoMercado === 'function' && obterLogoMercado(item.origemPreco)) || `logos/${item.origemPreco}.png`;
        tagMercadoOrigem = `
          <span class="tag-origem-preco" title="Preço cotado no ${infoM.nome}">
            <img src="${logoM}" style="width:13px; height:13px; object-fit:contain; border-radius:2px;" onerror="this.outerHTML='<span>${infoM.emoji}</span>'">
            <span>${infoM.nome}</span>
          </span>
        `;
      }

      const isPendente = (itemPendenteDesmarcarId === item.id);
      const classePendente = isPendente ? 'pendente-desmarcar' : '';
      const badgePendente = isPendente 
        ? `<span class="badge-confirmar-desmarcar" title="Clique mais uma vez para desmarcar">⚠️ Toque novamente para desmarcar</span>` 
        : '';

      const campoPrecoHtml = AppState.cotacaoAtiva ? `
        <div class="preco-campo-box">
          <span class="preco-cifrao">R$</span>
          <input type="number" step="0.01" class="preco-input" 
                 placeholder="0,00" value="${item.preco ? Number(item.preco).toFixed(2) : ''}"
                 onchange="alterarPrecoItem('${item.id}', this.value)" />
        </div>
      ` : '';

      htmlItens += `
        <div class="item-card ${classeComprado} ${classePendente}" id="card-item-${item.id}" 
             oncontextmenu="event.preventDefault(); abrirModalEditarNomeDespensa('${item.id}', event);"
             title="Botão direito do mouse para editar">
          <div class="item-check-btn" onclick="alternarItemComprado('${item.id}')" title="${item.comprado ? (isPendente ? 'Clique para confirmar desmarcação' : 'Clique 2x para desmarcar') : 'Clique para marcar como comprado'}">
            ${isPendente ? '❓' : checkIcone}
          </div>

          <div class="item-icone-2d">
            ${iconeSvg}
          </div>

          <div class="item-corpo">
            <div class="item-linha-nome">
              <span class="item-nome" onclick="alternarItemComprado('${item.id}')">${item.nome}</span>
              ${badgePendente}
              ${marcaHtml}
              ${tagMercadoOrigem}
            </div>
          </div>

          <div class="item-acoes-compra">
            <div class="contador-qtde">
              <button class="btn-step" onclick="alterarQuantidade('${item.id}', -1)">-</button>
              <span class="qtde-valor">${item.qtde || 1}</span>
              <button class="btn-step" onclick="alterarQuantidade('${item.id}', 1)">+</button>
            </div>

            ${campoPrecoHtml}

            <button class="btn-delete-item" title="Remover item" onclick="removerItem('${item.id}')">✕</button>
          </div>
        </div>
      `;
    });

    grupoDiv.innerHTML = `
      <div class="categoria-titulo">
        <span>${categoria}</span>
        <span style="font-size: 0.8rem; font-weight: 500;">${itens.length} itens</span>
      </div>
      <div class="itens-lista">${htmlItens}</div>
    `;

    container.appendChild(grupoDiv);
  }
}

// Catálogo Especial da Despensa com Marcas e Menor Preço (8 Cards Lado a Lado)
const PRODUTOS_DESPENSA_MARCAS = [
  {
    id: 'p_arroz',
    nome: 'ARROZ',
    icone: 'arroz',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 22.25, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Tio João', preco: 27.52, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Cristal', preco: 28.52, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_feijao',
    nome: 'FEIJÃO',
    icone: 'feijao',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 6.99, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Kicaldo', preco: 7.20, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Tio Jorge', preco: 7.45, mercado: 'Big Box', emoji: '🟢' }
    ]
  },
  {
    id: 'p_acucar',
    nome: 'AÇÚCAR',
    icone: 'acucar',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Cristal', preco: 15.20, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Caravelas', preco: 15.80, mercado: 'Carrefour', emoji: '🟦' },
      { nome: 'União', preco: 16.50, mercado: 'Assaí', emoji: '🔵' }
    ]
  },
  {
    id: 'p_oleo',
    nome: 'ÓLEO',
    icone: 'oleo',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Soya', preco: 5.70, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Liza', preco: 5.99, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Salada', preco: 6.20, mercado: 'Big Box', emoji: '🟢' }
    ]
  },
  {
    id: 'p_cafe',
    nome: 'CAFÉ',
    icone: 'cafe',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: '3 Corações', preco: 16.90, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Pilão', preco: 17.40, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Melitta', preco: 17.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_leite',
    nome: 'LEITE',
    icone: 'leite',
    categoria: 'Laticínios e Frios',
    marcas: [
      { nome: 'Piracanjuba', preco: 4.39, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Ninho', preco: 5.59, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Leitíssimo', preco: 7.79, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_macarrao',
    nome: 'MACARRÃO',
    icone: 'macarrao',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Adria', preco: 3.99, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Renata', preco: 4.20, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Barilla', preco: 5.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_farinha',
    nome: 'FARINHA',
    icone: 'farinha',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Emegê', preco: 4.99, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Rosa Branca', preco: 4.99, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Sol', preco: 5.10, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Finna', preco: 5.20, mercado: 'Big Box', emoji: '🟢' },
      { nome: 'Dona Benta', preco: 5.40, mercado: 'Atacadão', emoji: '🟠' }
    ]
  },
  {
    id: 'p_frango',
    nome: 'FRANGO',
    icone: 'frango',
    categoria: 'Carnes e Proteínas',
    marcas: [
      { nome: 'Seara', preco: 17.90, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Sadia', preco: 18.50, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Friboi', preco: 19.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_carne',
    nome: 'CARNE',
    icone: 'carne',
    categoria: 'Carnes e Proteínas',
    marcas: [
      { nome: 'Friboi', preco: 31.90, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Maturatta', preco: 34.50, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Sadia', preco: 35.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_queijo',
    nome: 'QUEIJO',
    icone: 'queijo',
    categoria: 'Laticínios e Frios',
    marcas: [
      { nome: 'Piracanjuba', preco: 8.70, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Crioulo', preco: 9.50, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Tirolez', preco: 10.80, mercado: 'Big Box', emoji: '🟢' }
    ]
  },
  {
    id: 'p_manteiga',
    nome: 'MANTEIGA',
    icone: 'manteiga',
    categoria: 'Laticínios e Frios',
    marcas: [
      { nome: 'Itambé', preco: 10.40, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Batavo', preco: 11.20, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Aviação', preco: 12.90, mercado: 'Big Box', emoji: '🟢' }
    ]
  },
  {
    id: 'p_sabao',
    nome: 'SABÃO',
    icone: 'sabao',
    categoria: 'Limpeza',
    marcas: [
      { nome: 'Brilhante', preco: 17.90, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'OMO', preco: 22.90, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Ariel', preco: 23.50, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_amaciante',
    nome: 'AMACIANTE',
    icone: 'amaciante',
    categoria: 'Limpeza',
    marcas: [
      { nome: 'Ypê', preco: 11.90, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Comfort', preco: 15.90, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Downy', preco: 17.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  },
  {
    id: 'p_detergente',
    nome: 'DETERGENTE',
    icone: 'detergente',
    categoria: 'Limpeza',
    marcas: [
      { nome: 'Minuano', preco: 1.99, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Ypê', preco: 2.09, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Limpol', preco: 2.15, mercado: 'Big Box', emoji: '🟢' }
    ]
  },
  {
    id: 'p_sanitaria',
    nome: 'QBOA/CLORO',
    icone: 'sanitaria',
    categoria: 'Limpeza',
    marcas: [
      { nome: 'Dragão', preco: 3.99, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Qboa', preco: 4.70, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Brilhante', preco: 5.20, mercado: 'Carrefour', emoji: '🟦' }
    ]
  }
];

// Filtros e Ordenação da Despensa e Busca no Topo
let termoBuscaTopo = '';
let termoBuscaDespensa = '';
let termoBuscaLista = '';
let ordemAlfabeticaDespensa = false;
let categoriaAtivaDespensa = 'todas';

function aoDigitarBuscaTopo(termo) {
  termoBuscaTopo = (termo || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (AppState.abaAtiva === 'despensa') {
    termoBuscaDespensa = termoBuscaTopo;
    renderizarDespensa();
  } else {
    termoBuscaLista = termoBuscaTopo;
    renderizarListaCompras();
  }
}

function filtrarItensDespensa(termo) {
  termoBuscaDespensa = (termo || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  renderizarDespensa();
}

function filtrarCategoriaGeral(categoria, botaoEl) {
  AppState.filtroCategoria = categoria;
  categoriaAtivaDespensa = categoria;
  
  // Atualiza classes ativas nas abas
  const abas = document.querySelectorAll('.despensa-aba-tab');
  abas.forEach(b => {
    if (b.getAttribute('data-categoria') === categoria) {
      b.classList.add('ativa');
    } else {
      b.classList.remove('ativa');
    }
  });

  renderizarTudo();
}

// Alias para compatibilidade
function filtrarCategoriaDespensa(categoria, botaoEl) {
  filtrarCategoriaGeral(categoria, botaoEl);
}

function alternarOrdemAlfabeticaDespensa() {
  ordemAlfabeticaDespensa = !ordemAlfabeticaDespensa;
  const btn = document.getElementById('btn-ordem-alfabetica');
  if (btn) {
    if (ordemAlfabeticaDespensa) {
      btn.classList.add('ativo-filtro');
      btn.title = "Ordenado de A a Z (Clique para voltar à ordem padrão)";
    } else {
      btn.classList.remove('ativo-filtro');
      btn.title = "Ordenar de A a Z";
    }
  }
  renderizarDespensa();
}

// Renderizar Aba "Montar Lista" (Estrutura idêntica ao modelo da Lista de Compra, sem preços, item não vai pro final)
function renderizarDespensa() {
  const container = document.getElementById('despensa-grid-container');
  if (!container) return;
  container.innerHTML = '';

  const badgeTotal = document.getElementById('despensa-contador-badge');

  // 1. Filtragem por Categoria
  let itensExibir = AppState.catalogo;
  if (categoriaAtivaDespensa !== 'todas') {
    itensExibir = itensExibir.filter(p => (p.categoria || '') === categoriaAtivaDespensa);
  }

  // 2. Filtragem por Termo de Busca
  if (termoBuscaDespensa) {
    itensExibir = itensExibir.filter(p => {
      const nomeNorm = p.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const catNorm = (p.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termoBuscaDespensa) || catNorm.includes(termoBuscaDespensa);
    });
  }

  // 3. Ordenação Alfabética A-Z (se ativada pelo usuário)
  if (ordemAlfabeticaDespensa) {
    itensExibir = [...itensExibir].sort((a, b) => 
      a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
    );
  }

  if (badgeTotal) {
    badgeTotal.textContent = `${itensExibir.length} de ${AppState.catalogo.length} itens`;
  }

  if (itensExibir.length === 0) {
    const inputTopo = document.getElementById('input-novo-item');
    const valorDigitado = inputTopo ? inputTopo.value.trim() : termoBuscaDespensa;
    container.innerHTML = `
      <div style="text-align: center; padding: 25px 15px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 8px;">
          ${valorDigitado ? `Nenhum produto encontrado com "<strong>${valorDigitado}</strong>".` : 'Nenhum produto nesta categoria.'}
        </p>
        ${valorDigitado ? `<button class="btn-adicionar-topo" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 4px;" onclick="adicionarItemRapido()">➕ Cadastrar "${valorDigitado}" no Catálogo</button>` : ''}
      </div>
    `;
    return;
  }

  // Agrupar itens por Categoria (Modelo idêntico à Lista de Compra)
  const grupos = {};
  itensExibir.forEach((item) => {
    const cat = item.categoria || 'Diversos';
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push(item);
  });

  for (const [categoria, itens] of Object.entries(grupos)) {
    const grupoDiv = document.createElement('div');
    grupoDiv.className = 'categoria-grupo';

    let htmlItens = '';
    itens.forEach(prod => {
      const chaveIcone = prod.icone || detectarChaveIcone(prod.nome);
      const iconeSvg = obterIcone2D(prod.nome, chaveIcone);

      // Verifica se está selecionado para a Lista de Compra
      const estaNaLista = !!prod.selecionado;
      const qtde = prod.qtde || 1;
      const checkIcone = estaNaLista ? '✓' : '';
      const classeNaLista = estaNaLista ? 'na-lista-montar' : '';

      htmlItens += `
        <div class="item-card ${classeNaLista}" id="card-despensa-${prod.id}"
             oncontextmenu="event.preventDefault(); abrirModalEditarNomeDespensa('${prod.id}', event);"
             title="${estaNaLista ? 'Na Lista de Compra (Clique para desmarcar)' : 'Clique para marcar e adicionar à Lista de Compra'} • Botão direito para editar">
          <div class="item-check-btn ${estaNaLista ? 'check-ativo' : ''}" 
               onclick="event.stopPropagation(); alternarItemDespensaEmTempoReal('${prod.id}', event)"
               title="${estaNaLista ? 'Retirar da Lista de Compra' : 'Adicionar à Lista de Compra'}">
            ${checkIcone}
          </div>

          <div class="item-icone-2d" onclick="alternarItemDespensaEmTempoReal('${prod.id}', event)">
            ${iconeSvg}
          </div>

          <div class="item-corpo">
            <div class="item-linha-nome">
              <span class="item-nome" onclick="alternarItemDespensaEmTempoReal('${prod.id}', event)">${prod.nome}</span>
              <button class="btn-editar-despensa" title="Editar este produto" onclick="abrirModalEditarNomeDespensa('${prod.id}', event)">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="item-acoes-compra">
            <div class="contador-qtde" style="${estaNaLista ? '' : 'opacity: 0.45;'}">
              <button class="btn-step" onclick="event.stopPropagation(); alterarQuantidadeMontarLista('${prod.id}', -1, event)">-</button>
              <span class="qtde-valor" id="qtde-montar-${prod.id}">${qtde}</span>
              <button class="btn-step" onclick="event.stopPropagation(); alterarQuantidadeMontarLista('${prod.id}', 1, event)">+</button>
            </div>

            <button class="btn-delete-item" title="Excluir produto do catálogo" onclick="excluirItemDespensa('${prod.id}', event)">✕</button>
          </div>
        </div>
      `;
    });

    grupoDiv.innerHTML = `
      <div class="categoria-titulo">
        <span>${categoria}</span>
        <span style="font-size: 0.8rem; font-weight: 500;">${itens.length} itens</span>
      </div>
      <div class="itens-lista">${htmlItens}</div>
    `;

    container.appendChild(grupoDiv);
  }
}

// Alterna em TEMPO REAL a inclusão ou remoção em Montar Lista (O item NÃO vai pro final)
function alternarItemDespensaEmTempoReal(produtoId, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  // Inverte o estado de seleção
  prod.selecionado = !prod.selecionado;

  const chaveIcone = prod.icone || detectarChaveIcone(prod.nome);
  const precoPadrao = prod.precoMedioDF || (prod.ultimoPreco > 0 ? prod.ultimoPreco : (COTACOES_DF[chaveIcone] ? COTACOES_DF[chaveIcone].atacadao : 10.0));
  if (!prod.preco) prod.preco = precoPadrao;
  if (!prod.ultimoPreco) prod.ultimoPreco = precoPadrao;
  if (!prod.qtde) prod.qtde = 1;

  // Sincroniza estritamente com a Lista de Compras
  sincronizarListaAtivaComCatalogo();

  // Salva no LocalStorage e sincroniza na Nuvem imediatamente
  salvarEstado(true);

  // Atualiza diretamente o card no DOM sem JAMAIS ir pro final da tela nem mudar de ordem!
  const cardEl = document.getElementById(`card-despensa-${prod.id}`);
  if (cardEl) {
    const checkBtn = cardEl.querySelector('.item-check-btn');
    const contador = cardEl.querySelector('.contador-qtde');

    if (prod.selecionado) {
      cardEl.classList.add('na-lista-montar');
      cardEl.title = 'Na Lista de Compra (Clique para desmarcar) • Botão direito para editar';
      if (checkBtn) {
        checkBtn.textContent = '✓';
        checkBtn.classList.add('check-ativo');
      }
      if (contador) contador.style.opacity = '1';
    } else {
      cardEl.classList.remove('na-lista-montar');
      cardEl.title = 'Clique para marcar e adicionar à Lista de Compra • Botão direito para editar';
      if (checkBtn) {
        checkBtn.textContent = '';
        checkBtn.classList.remove('check-ativo');
      }
      if (contador) contador.style.opacity = '0.45';
    }
  }

  // Monta em tempo real na Lista de Compra (aqui recebe o que eu faço em Montar Lista)
  renderizarListaCompras();
  atualizarCardResumo();
}

function alterarQuantidadeMontarLista(produtoId, delta, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  const qtdeEl = document.getElementById(`qtde-montar-${prod.id}`);
  let novaQtde = (prod.qtde || (qtdeEl ? parseInt(qtdeEl.textContent) : 1)) + delta;
  if (novaQtde < 1) novaQtde = 1;

  prod.qtde = novaQtde;
  if (qtdeEl) qtdeEl.textContent = novaQtde;

  const itemNaLista = AppState.listaAtiva.find(it => String(it.id) === String(prod.id));
  if (itemNaLista) {
    itemNaLista.qtde = novaQtde;
  }

  salvarEstado(true);
  renderizarListaCompras();
  atualizarCardResumo();
}

// Controle do Modal de Exclusão da Despensa (Centro da Página)
let itemParaExcluirId = null;

function excluirItemDespensa(produtoId, event) {
  if (event) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  itemParaExcluirId = produtoId;

  const modal = document.getElementById('modal-confirm-exclusao');
  const nomeEl = document.getElementById('modal-confirm-nome-item');
  if (nomeEl) {
    nomeEl.textContent = `"${prod.nome}"`;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}

function executarExclusaoConfirmada() {
  if (!itemParaExcluirId) return;

  const prod = AppState.catalogo.find(p => String(p.id) === String(itemParaExcluirId));
  if (prod) {
    if (!AppState.itensExcluidos) AppState.itensExcluidos = [];
    AppState.itensExcluidos.push(prod.nome.toLowerCase().trim());
    AppState.catalogo = AppState.catalogo.filter(p => String(p.id) !== String(itemParaExcluirId));
    salvarEstado(true);
    renderizarDespensa();
  }

  fecharModal('modal-confirm-exclusao');
  itemParaExcluirId = null;
}

// Modal Bonitinho para Adicionar Novo Item à Despensa
function abrirModalNovoItemDespensa() {
  const modal = document.getElementById('modal-novo-item-despensa');
  const input = document.getElementById('input-novo-item-nome');
  if (input) input.value = '';
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      if (input) input.focus();
    }, 100);
  }
}

function salvarNovoItemDespensaModal() {
  const input = document.getElementById('input-novo-item-nome');
  if (!input) return;
  const nome = input.value.trim();
  if (!nome) {
    input.focus();
    return;
  }

  const nomeLimpo = capitalizar(nome);
  const chaveIcone = detectarChaveIcone(nomeLimpo);
  const categoria = deduzirCategoria(nomeLimpo);
  const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'carrefour';
  const precoEstimado = obterPrecoEstimadoMercado({ nome: nomeLimpo, icone: chaveIcone, preco: 0 }, ref);

  const novoItem = {
    id: 'c_custom_' + Date.now(),
    nome: nomeLimpo,
    categoria: categoria,
    icone: chaveIcone,
    precoMedioDF: precoEstimado,
    ultimoPreco: precoEstimado,
    dataUltimoPreco: new Date().toISOString().slice(0, 10)
  };

  AppState.catalogo.push(novoItem);
  salvarEstado(true);
  fecharModal('modal-novo-item-despensa');
  renderizarDespensa();
}

// Modal Bonitinho para Editar Nome do Item na Despensa
let itemParaEditarNomeId = null;

function abrirModalEditarNomeDespensa(produtoId, event) {
  if (event) {
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  }

  let prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) {
    prod = AppState.listaAtiva.find(p => String(p.id) === String(produtoId));
  }
  if (!prod) return;

  itemParaEditarNomeId = produtoId;

  const modal = document.getElementById('modal-editar-nome-despensa');
  const inputNome = document.getElementById('input-editar-nome-produto');
  const inputCat = document.getElementById('input-editar-categoria-produto');

  if (inputNome) {
    inputNome.value = prod.nome;
  }
  if (inputCat) {
    inputCat.value = prod.categoria || 'Básicos e Grãos';
    if (!inputCat.value && prod.categoria) {
      for (let opt of inputCat.options) {
        if (opt.value.toLowerCase().trim() === prod.categoria.toLowerCase().trim()) {
          inputCat.value = opt.value;
          break;
        }
      }
    }
  }

  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      if (inputNome) {
        inputNome.focus();
        inputNome.select();
      }
    }, 100);
  }
}

function salvarEdicaoNomeDespensaModal() {
  if (!itemParaEditarNomeId) return;

  const inputNome = document.getElementById('input-editar-nome-produto');
  const inputCat = document.getElementById('input-editar-categoria-produto');
  if (!inputNome) return;
  const novoNome = inputNome.value.trim();
  if (!novoNome) {
    inputNome.focus();
    return;
  }

  const novaCategoria = (inputCat && inputCat.value) 
    ? inputCat.value 
    : (deduzirCategoria(novoNome) || 'Diversos');

  const prod = AppState.catalogo.find(p => String(p.id) === String(itemParaEditarNomeId));
  if (prod) {
    const nomeAntigo = prod.nome;
    prod.nome = capitalizar(novoNome);
    prod.icone = detectarChaveIcone(prod.nome);
    prod.categoria = novaCategoria;

    // Atualiza também se esse item estiver presente na lista ativa de compras
    AppState.listaAtiva.forEach(it => {
      if (it.nome.toLowerCase().trim() === nomeAntigo.toLowerCase().trim() || it.id === `item_despensa_${prod.id}`) {
        it.nome = prod.nome;
        it.icone = prod.icone;
        it.categoria = prod.categoria;
      }
    });

    salvarEstado(true);
    renderizarDespensa();
    renderizarListaCompras();
  } else {
    // Se for um item avulso adicionado na lista de compras
    const itemLista = AppState.listaAtiva.find(p => String(p.id) === String(itemParaEditarNomeId));
    if (itemLista) {
      itemLista.nome = capitalizar(novoNome);
      itemLista.icone = detectarChaveIcone(itemLista.nome);
      itemLista.categoria = novaCategoria;

      salvarEstado(true);
      renderizarListaCompras();
    }
  }

  fecharModal('modal-editar-nome-despensa');
  itemParaEditarNomeId = null;
}

// Renderizar Histórico de Compras e Preços
function renderizarHistorico() {
  const container = document.getElementById('historico-container');
  if (!container) return;
  container.innerHTML = '';

  if (AppState.historico.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: white; border-radius: 16px; border: 1px solid var(--border);">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Nenhuma compra anterior arquivada ainda.</p>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;">
          Ao finalizar suas compras no mercado, elas ficam guardadas aqui com histórico de preços e totais!
        </p>
      </div>
    `;
    return;
  }

  // Ordenar por data decrescente
  const historicoOrdenado = [...AppState.historico].sort((a, b) => new Date(b.data) - new Date(a.data));

  historicoOrdenado.forEach(compra => {
    const dataFormatada = new Date(compra.data).toLocaleDateString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    let htmlItensCompra = '';
    if (compra.itens && compra.itens.length > 0) {
      compra.itens.forEach(it => {
        htmlItensCompra += `
          <div style="display: flex; justify-content: space-between; padding: 3px 0;">
            <span>${it.qtde}x ${it.nome}</span>
            <span>R$ ${(it.subtotal || (it.qtde * it.preco)).toFixed(2).replace('.', ',')}</span>
          </div>
        `;
      });
    }

    const card = document.createElement('div');
    card.className = 'historico-card';
    card.innerHTML = `
      <div class="historico-cabecalho">
        <div>
          <div>🛒 ${compra.mercado || 'Supermercado'}</div>
          <div style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">${dataFormatada}</div>
        </div>
        <div style="font-size: 1.1rem; color: var(--success); font-weight: 800;">
          R$ ${Number(compra.total).toFixed(2).replace('.', ',')}
        </div>
      </div>
      <div class="historico-lista-itens">
        ${htmlItensCompra}
      </div>
    `;
    container.appendChild(card);
  });
}

// Ações nos Itens da Lista de Compras
// Lógica anti-toque acidental: 1 clique para marcar como comprado;
// 2 cliques (confirmação em até 3 segundos) para desmarcar.
let itemPendenteDesmarcarId = null;
let timerPendenteDesmarcar = null;

function alternarItemComprado(id) {
  const item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (!item) return;

  // CASO 1: Item ainda NÃO comprado -> Marca imediatamente com 1 clique!
  if (!item.comprado) {
    item.comprado = true;
    // Se estava algum outro item pendente de desmarcar, cancela
    cancelarPendenteDesmarcar();
    salvarEstado(true);
    renderizarListaCompras();
    atualizarCardResumo();
    return;
  }

  // CASO 2: Item JÁ ESTÁ COMPRADO -> Exige 2 cliques para desmarcar
  if (itemPendenteDesmarcarId === id) {
    // Segundo clique confirmado dentro da janela de tempo!
    clearTimeout(timerPendenteDesmarcar);
    itemPendenteDesmarcarId = null;
    item.comprado = false;
    salvarEstado(true);
    renderizarListaCompras();
    atualizarCardResumo();
  } else {
    // Primeiro clique: entra em estado de confirmação
    cancelarPendenteDesmarcar();
    itemPendenteDesmarcarId = id;
    renderizarListaCompras();

    // Timer de 3 segundos para expirar a confirmação
    timerPendenteDesmarcar = setTimeout(() => {
      cancelarPendenteDesmarcar();
      renderizarListaCompras();
    }, 3000);
  }
}

function cancelarPendenteDesmarcar() {
  if (timerPendenteDesmarcar) {
    clearTimeout(timerPendenteDesmarcar);
    timerPendenteDesmarcar = null;
  }
  itemPendenteDesmarcarId = null;
}

function alterarQuantidade(id, delta) {
  const item = AppState.listaAtiva.find(i => i.id === id);
  if (item) {
    let novaQtde = (item.qtde || 1) + delta;
    if (novaQtde < 1) novaQtde = 1;
    item.qtde = novaQtde;
    salvarEstado(true);
    renderizarListaCompras();
    atualizarCardResumo();
  }
}

function alterarPrecoItem(id, novoPrecoStr) {
  const item = AppState.listaAtiva.find(i => i.id === id);
  if (item) {
    const precoFloat = parseFloat(novoPrecoStr.replace(',', '.'));
    const val = isNaN(precoFloat) ? 0 : precoFloat;
    item.preco = val;
    item.precoReferencia = val;
    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.id) || String(c.id) === String(item.catalogoId));
    if (catItem) {
      catItem.preco = val;
      catItem.ultimoPreco = val;
    }
    salvarEstado(true);
    atualizarCardResumo();
  }
}

function removerItem(id) {
  // Desmarca no catálogo se for produto do catálogo
  const prod = AppState.catalogo.find(p => String(p.id) === String(id) || `item_despensa_${p.id}` === String(id));
  if (prod) {
    prod.selecionado = false;
  }
  AppState.listaAtiva = AppState.listaAtiva.filter(i => String(i.id) !== String(id));
  salvarEstado(true);
  renderizarListaCompras();
  renderizarDespensa();
  atualizarCardResumo();
}

// Adicionar Item Manualmente pela barra de entrada unificada no topo
function adicionarItemRapido() {
  const input = document.getElementById('input-novo-item');
  if (!input) return;
  const texto = input.value.trim();
  if (!texto) {
    input.focus();
    return;
  }

  const nomeLimpo = capitalizar(texto);
  const chaveIcone = detectarChaveIcone(nomeLimpo);
  const categoria = deduzirCategoria(nomeLimpo);
  const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'carrefour';
  const precoEstimado = obterPrecoEstimadoMercado({ nome: nomeLimpo, icone: chaveIcone, preco: 0 }, ref);

  if (AppState.abaAtiva === 'despensa') {
    // Cadastra na Despensa e seleciona para a Lista Ativa em tempo real
    let prodExistente = AppState.catalogo.find(p => p.nome.toLowerCase().trim() === nomeLimpo.toLowerCase().trim());
    if (prodExistente) {
      prodExistente.selecionado = true;
    } else {
      const novoItem = {
        id: 'c_custom_' + Date.now(),
        nome: nomeLimpo,
        categoria: categoria,
        icone: chaveIcone,
        precoMedioDF: precoEstimado,
        preco: precoEstimado,
        ultimoPreco: precoEstimado,
        dataUltimoPreco: new Date().toISOString().slice(0, 10),
        selecionado: true,
        qtde: 1
      };
      AppState.catalogo.unshift(novoItem);
    }

    sincronizarListaAtivaComCatalogo();

    termoBuscaDespensa = '';
    termoBuscaTopo = '';
    input.value = '';
    salvarEstado(true);
    renderizarDespensa();
    renderizarListaCompras();
    atualizarCardResumo();
  } else {
    termoBuscaLista = '';
    termoBuscaTopo = '';
    adicionarProdutoPorTexto(texto);
    input.value = '';
    renderizarListaCompras();
    renderizarDespensa();
  }
}

// Abertura e Gerenciamento do Modal de Subir Lista
function abrirModalSubirLista() {
  const modal = document.getElementById('modal-subir-lista');
  if (modal) {
    modal.style.display = 'flex';
    const txt = document.getElementById('texto-lista-importar');
    if (txt) {
      txt.focus();
    }
  }
}

function alternarParaConstruirLista() {
  // Leva o usuário para a aba de Despensa para marcar os itens que faltam
  const btnDespensa = document.querySelector('.nav-item[data-aba="despensa"]');
  if (btnDespensa) {
    btnDespensa.click();
  }
}

// Ler arquivo de upload (.txt ou .csv)
function lerArquivoUpload(input) {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const conteudo = e.target.result;
    const txtArea = document.getElementById('texto-lista-importar');
    if (txtArea) {
      txtArea.value = conteudo;
    }
  };
  reader.readAsText(file);
}

// Processar a Lista Subida (Texto ou Planilha)
function processarUploadLista(substituir = false) {
  const txtArea = document.getElementById('texto-lista-importar');
  if (!txtArea) return;
  const texto = txtArea.value.trim();
  if (!texto) {
    alert("Por favor, digite ou cole alguns itens antes de importar!");
    return;
  }

  const cotarAuto = document.getElementById('check-autocotacao-import') ? document.getElementById('check-autocotacao-import').checked : true;

  if (substituir) {
    AppState.catalogo.forEach(c => c.selecionado = false);
    AppState.listaAtiva = [];
  }

  // Quebra por linhas ou quebras de linha
  const linhas = texto.split(/\r?\n/);
  let totalAdicionados = 0;

  linhas.forEach(linha => {
    let l = linha.trim();
    if (!l) return;

    // Remove marcadores de lista como "-", "*", "1.", "1)"
    l = l.replace(/^[-*•\d+.)]\s*/, '').trim();
    if (!l) return;

    // Se for formato CSV simples (ex: "Arroz 5kg, 2, 26.50")
    let partes = l.split(',');
    let textoItem = l;
    let precoEspecifico = null;
    let qtdeEspecifica = null;

    if (partes.length >= 2 && !isNaN(parseFloat(partes[1]))) {
      textoItem = partes[0].trim();
      qtdeEspecifica = parseInt(partes[1], 10);
      if (partes.length >= 3 && !isNaN(parseFloat(partes[2]))) {
        precoEspecifico = parseFloat(partes[2]);
      }
    }

    // Criar o item com inteligência de dedução
    let qtde = qtdeEspecifica || 1;
    let nome = textoItem;

    // Detecta padrão "2x Arroz" ou "3 Leites"
    const match = textoItem.match(/^(\d+)(x|\s+)(.+)/i);
    if (match && !qtdeEspecifica) {
      qtde = parseInt(match[1], 10);
      nome = match[3].trim();
    }

    const iconeDetectado = detectarChaveIcone(nome);
    const marcaDetectada = detectarMarca(nome);
    let categoria = deduzirCategoria(nome);
    let preco = precoEspecifico || 0;

    // Se deve pesquisar e aplicar preços estimados de Brasília (DF)
    if (cotarAuto && preco === 0) {
      const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'carrefour';
      preco = obterPrecoEstimadoMercado({ nome, icone: iconeDetectado, marca: marcaDetectada, preco: 0 }, ref);
    }

    // Sincroniza com o catálogo marcando como selecionado
    const doCat = AppState.catalogo.find(c => c.nome.toLowerCase().trim() === nome.toLowerCase().trim());
    if (doCat) {
      doCat.selecionado = true;
      doCat.qtde = qtde;
      if (marcaDetectada) doCat.marca = marcaDetectada;
      if (preco > 0) doCat.preco = preco;
    } else {
      AppState.catalogo.push({
        id: 'c_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
        nome: capitalizar(nome),
        marca: marcaDetectada,
        categoria: categoria,
        icone: iconeDetectado,
        precoMedioDF: preco,
        preco: preco,
        ultimoPreco: preco,
        dataUltimoPreco: new Date().toISOString().slice(0, 10),
        selecionado: true,
        qtde: qtde
      });
    }

    totalAdicionados++;
  });

  sincronizarListaAtivaComCatalogo();

  salvarEstado(true);
  fecharModal('modal-subir-lista');
  txtArea.value = '';
  renderizarTudo();
}

// Atualiza o visual do botão Cotado / COTAR com check à esquerda
function atualizarVisualBotaoCotar() {
  const btn = document.getElementById('btn-cotar-header');
  if (!btn) return;

  if (AppState.cotacaoAtiva) {
    btn.innerHTML = '<span style="font-weight: 900; margin-right: 4px;">✓</span> Cotado';
    btn.className = 'btn-acao-mini btn-cotado-ativo';
    btn.title = "Lista cotada! Clique para desmarcar e ocultar preços e atacadistas";
  } else {
    btn.innerHTML = 'COTAR';
    btn.className = 'btn-acao-mini btn-cotado-inativo';
    btn.title = "Clique para cotar preços na rede do DF";
  }
}

// Cotação Dinâmica com Toggle (Marcou: ✓ Cotado / Desmarcou: COTAR)
function alternarCotacaoEstado() {
  if (AppState.cotacaoAtiva) {
    // DESMARCOU: Some com preços geral e atacadistas na frente dos produtos, botão vira COTAR
    AppState.cotacaoAtiva = false;
  } else {
    // MARCOU: Realiza cotação, exibe menores preços e atacadistas, botão vira ✓ Cotado
    AppState.cotacaoAtiva = true;
    if (AppState.abaAtiva !== 'lista') {
      const btnLista = document.querySelector('.nav-item[data-aba="lista"]');
      if (btnLista) btnLista.click();
    }
    const modo = AppState.modoCotacao || 'mais_baratos';
    aplicarModoCotacao(modo);
  }

  salvarEstado(false);
  atualizarVisualBotaoCotar();
  renderizarListaCompras();
  atualizarCardResumo();
}

function cotarPrecosDinamico() {
  alternarCotacaoEstado();
}

// Alterna e aplica os filtros dinâmicos de cotação:
// 1. 'mais_baratos': menor preço item a item e itens mais baratos primeiro
// 2. 'maioria_barata': mercado campeão global com preços mais em conta
// 3. 'sugerir': melhor combinação custo-benefício (atacado para pesados/básicos + feira/mercado para frescos)
function aplicarModoCotacao(modo) {
  AppState.modoCotacao = modo;
  AppState.cotacaoAtiva = true;
  atualizarVisualBotaoCotar();

  // Atualiza visual dos chips de modo de cotação
  const idsModos = ['mais-baratos', 'maioria-barata', 'sugerir'];
  idsModos.forEach(idSuffix => {
    const el = document.getElementById(`modo-${idSuffix}`);
    if (el) {
      if (idSuffix === modo.replace('_', '-')) {
        el.classList.add('ativo');
      } else {
        el.classList.remove('ativo');
      }
    }
  });

  if (AppState.listaAtiva.length === 0) {
    return;
  }

  const redesDisponiveis = Object.keys(MERCADOS_DF);

  if (modo === 'mais_baratos') {
    // 1. MODO MAIS BARATOS: Cada item recebe o menor preço entre todos os mercados
    AppState.listaAtiva.forEach(item => {
      let menorPreco = Infinity;
      let melhorRede = null;

      redesDisponiveis.forEach(r => {
        const p = obterPrecoEstimadoMercado(item, r);
        if (p > 0 && p < menorPreco) {
          menorPreco = p;
          melhorRede = r;
        }
      });

      if (menorPreco < Infinity) {
        item.preco = menorPreco;
        item.origemPreco = melhorRede;
      }
    });
  } else if (modo === 'maioria_barata') {
    // 2. MODO MAIORIA BARATA: Identifica o mercado onde o carrinho total fica mais barato
    const totaisRede = {};
    redesDisponiveis.forEach(r => { totaisRede[r] = 0; });

    AppState.listaAtiva.forEach(item => {
      const qtde = item.qtde || 1;
      redesDisponiveis.forEach(r => {
        totaisRede[r] += qtde * obterPrecoEstimadoMercado(item, r);
      });
    });

    const redeCampeã = redesDisponiveis.sort((a, b) => totaisRede[a] - totaisRede[b])[0] || 'atacadao';

    AppState.listaAtiva.forEach(item => {
      const p = obterPrecoEstimadoMercado(item, redeCampeã);
      if (p > 0) {
        item.preco = p;
        item.origemPreco = redeCampeã;
      }
    });
  } else if (modo === 'sugerir') {
    // 3. MODO A SUGERIR (Custo-Benefício Inteligente):
    // Básicos, Grãos, Carnes e Limpeza pesada -> Atacado mais próximo (Atacadão / Dia a Dia)
    // Hortifrúti, Laticínios e Padaria -> Mercados com boa oferta fresca (Assaí / Carrefour)
    AppState.listaAtiva.forEach(item => {
      const cat = (item.categoria || deduzirCategoria(item.nome)).toLowerCase();
      let redeSugerida = 'atacadao';

      if (cat.includes('horti') || cat.includes('latic') || cat.includes('padaria')) {
        redeSugerida = 'assai';
      } else {
        redeSugerida = 'atacadao';
      }

      const p = obterPrecoEstimadoMercado(item, redeSugerida);
      if (p > 0) {
        item.preco = p;
        item.origemPreco = redeSugerida;
      }
    });
  }

  salvarEstado(true);
  renderizarListaCompras();
  atualizarCardResumo();

  // Feedback visual nos inputs de preço em tempo real
  setTimeout(() => {
    const inputsPreco = document.querySelectorAll('.preco-input');
    inputsPreco.forEach(inp => {
      inp.style.transition = 'background-color 0.4s ease, border-color 0.4s ease';
      inp.style.backgroundColor = '#ECFDF5';
      inp.style.borderColor = '#10B981';
      setTimeout(() => {
        inp.style.backgroundColor = '';
        inp.style.borderColor = '';
      }, 900);
    });
  }, 40);
}

// Manter compatibilidade com chamadas anteriores
function pesquisarPrecosListaDF() {
  cotarPrecosDinamico();
}

function deduzirCategoria(nome) {
  const n = nome.toLowerCase();
  if (n.includes('arroz') || n.includes('feijao') || n.includes('oleo') || n.includes('acucar') || n.includes('cafe') || n.includes('macarrao') || n.includes('farinha') || n.includes('sal')) {
    return 'Básicos e Grãos';
  } else if (n.includes('frango') || n.includes('carne') || n.includes('peixe') || n.includes('linguica') || n.includes('bife') || n.includes('alcatra')) {
    return 'Carnes e Proteínas';
  } else if (n.includes('leite') || n.includes('queijo') || n.includes('iogurte') || n.includes('manteiga') || n.includes('ovo')) {
    return 'Laticínios e Frios';
  } else if (n.includes('detergente') || n.includes('amaciante') || n.includes('sabao') || n.includes('qboa') || n.includes('cloro') || n.includes('limpeza') || n.includes('desinfetante')) {
    return 'Limpeza';
  } else if (n.includes('shampoo') || n.includes('sabonete') || n.includes('dente') || n.includes('papel')) {
    return 'Higiene';
  } else if (n.includes('maca') || n.includes('banana') || n.includes('tomate') || n.includes('cebola') || n.includes('alho') || n.includes('batata') || n.includes('legume')) {
    return 'Hortifrúti';
  }
  return 'Diversos';
}

function adicionarProdutoPorTexto(textoCompleto) {
  // Tenta extrair quantidade caso comece com número (ex: "3 Leites" ou "2x Sabão")
  let qtde = 1;
  let nome = textoCompleto;

  const match = textoCompleto.match(/^(\d+)(x|\s+)(.+)/i);
  if (match) {
    qtde = parseInt(match[1], 10);
    nome = match[3].trim();
  }

  // Dedução de Categoria e Ícone 2D inteligente
  const iconeDetectado = detectarChaveIcone(nome);
  let categoria = 'Diversos';

  // Buscar se já existe no catálogo para reaproveitar preço anterior e categoria
  const doCatalogo = AppState.catalogo.find(c => c.nome.toLowerCase().includes(nome.toLowerCase()));
  let ultimoPreco = 0;
  let dataUltimoPreco = '';

  if (doCatalogo) {
    categoria = doCatalogo.categoria;
    ultimoPreco = doCatalogo.ultimoPreco || 0;
    dataUltimoPreco = doCatalogo.dataUltimoPreco || '';
  } else {
    categoria = deduzirCategoria(nome);
  }

  // Detectar marca (ex: Piracanjuba, Leitíssimo, Ninho, OMO, etc.)
  const marcaDetectada = detectarMarca(nome) || (doCatalogo ? doCatalogo.marca : null);

  // Se o item não tem preço definido e o usuário quer cotação automática de Brasília
  let precoFinal = ultimoPreco;
  if (precoFinal === 0) {
    const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'carrefour';
    precoFinal = obterPrecoEstimadoMercado({ nome, icone: iconeDetectado, marca: marcaDetectada, preco: 0 }, ref);
  }

  // Se já existe no catálogo, marca como selecionado e atualiza quantidade/marca
  if (doCatalogo) {
    doCatalogo.selecionado = true;
    doCatalogo.qtde = (doCatalogo.qtde || 0) + qtde;
    if (marcaDetectada) doCatalogo.marca = marcaDetectada;
    if (precoFinal > 0) doCatalogo.preco = precoFinal;
  } else {
    // Adiciona ao catálogo como selecionado
    const novoCat = {
      id: 'c_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      nome: capitalizar(nome),
      marca: marcaDetectada,
      categoria: categoria,
      icone: iconeDetectado,
      precoMedioDF: precoFinal,
      preco: precoFinal,
      ultimoPreco: precoFinal,
      dataUltimoPreco: dataUltimoPreco || new Date().toISOString().slice(0, 10),
      selecionado: true,
      qtde: qtde
    };
    AppState.catalogo.push(novoCat);
  }

  sincronizarListaAtivaComCatalogo();

  salvarEstado(true);
  renderizarListaCompras();
  renderizarDespensa();
  atualizarCardResumo();
}

// Gerenciamento de Marcas com Busca e Filtro em Tempo Real
let itemEmEdicaoMarcaId = null;
let marcasDisponiveisAtuais = [];

function alterarMarcaItem(id) {
  abrirModalMarcas(id);
}

function abrirModalMarcas(id) {
  let item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (!item) {
    item = AppState.catalogo.find(i => String(i.id) === String(id));
  }
  if (!item) return;

  itemEmEdicaoMarcaId = item.id;

  const modal = document.getElementById('modal-marcas');
  const iconeBox = document.getElementById('modal-marca-icone');
  const titulo = document.getElementById('modal-marca-titulo');
  const inputCustom = document.getElementById('input-marca-custom');

  const iconeSvg = obterIcone2D(item.nome, item.icone);
  if (iconeBox) iconeBox.innerHTML = iconeSvg;
  if (titulo) titulo.textContent = item.nome.toUpperCase();
  if (inputCustom) inputCustom.value = '';

  const chaveIcone = item.icone || detectarChaveIcone(item.nome);
  marcasDisponiveisAtuais = obterMarcasParaProduto(chaveIcone, item.nome);

  // Renderiza a lista de marcas completa inicial
  filtrarMarcasRealtime('');

  if (modal) modal.style.display = 'flex';
  setTimeout(() => {
    if (inputCustom) inputCustom.focus();
  }, 100);
}

// Filtra e exibe marcas em tempo real conforme o usuário digita
function filtrarMarcasRealtime(texto) {
  const listbox = document.getElementById('modal-marca-listbox');
  if (!listbox) return;

  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemEmEdicaoMarcaId));
  const chaveIcone = item ? (item.icone || detectarChaveIcone(item.nome)) : '';
  const termo = (texto || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let html = '';

  // 1. Preço base sem marca
  const precoBasePadrao = (COTACOES_DF[chaveIcone] && COTACOES_DF[chaveIcone].atacadao) 
    ? COTACOES_DF[chaveIcone].atacadao 
    : (item && item.preco ? item.preco : 5.0);

  if (!termo) {
    const isSemMarca = !item || !item.marca;
    const classeSemMarca = isSemMarca ? 'selecionada' : '';
    const checkSemMarca = isSemMarca ? '<span class="listbox-check-ico">✓</span>' : '';

    html += `
      <div class="listbox-opcao sem-marca ${classeSemMarca}" 
           onclick="selecionarMarcaModal(null, ${precoBasePadrao})">
        <div class="listbox-opcao-nome">
          <span class="ico-check-placeholder">${checkSemMarca}</span>
          <span>⚪ Sem marca específica (Preço padrão)</span>
        </div>
        <div class="listbox-opcao-preco">
          <span>R$ ${precoBasePadrao.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    `;
  }

  // 2. Marcas correspondentes da base
  let marcasFiltradas = marcasDisponiveisAtuais;
  if (termo) {
    marcasFiltradas = marcasDisponiveisAtuais.filter(m => {
      const nomeNorm = m.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termo);
    });
  }

  marcasFiltradas.forEach(m => {
    const isAtual = item && item.marca && item.marca.toLowerCase() === m.nome.toLowerCase();
    const classeSel = isAtual ? 'selecionada' : '';
    const checkIco = isAtual ? '<span class="listbox-check-ico">✓</span>' : '';
    const nomeEscapado = m.nome.replace(/'/g, "\\'");

    html += `
      <div class="listbox-opcao ${classeSel}" 
           onclick="selecionarMarcaModal('${nomeEscapado}', ${m.preco})">
        <div class="listbox-opcao-nome">
          <span class="ico-check-placeholder">${checkIco}</span>
          <span>${m.nome}</span>
        </div>
        <div class="listbox-opcao-preco">
          <span>R$ ${m.preco.toFixed(2).replace('.', ',')}</span>
          <span class="listbox-mercado-tag">${m.emoji} ${m.mercado}</span>
        </div>
      </div>
    `;
  });

  // 3. Se digitou algo que não bate 100% com nenhuma marca exata da lista, adiciona opção dinâmica imediata
  if (termo) {
    const existeExato = marcasDisponiveisAtuais.some(m => 
      m.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === termo
    );

    if (!existeExato) {
      const marcaNomeCustom = capitalizar(texto.trim());
      const nomeEscapadoCustom = marcaNomeCustom.replace(/'/g, "\\'");
      // Estimar preço específico para este item no atacado DF
      const precoEstimado = (marcasFiltradas.length > 0) ? marcasFiltradas[0].preco : precoBasePadrao;

      html = `
        <div class="listbox-opcao selecionada" 
             style="border-color: var(--primary); background: #EEF2FF;"
             onclick="selecionarMarcaModal('${nomeEscapadoCustom}', ${precoEstimado})">
          <div class="listbox-opcao-nome">
            <span class="listbox-check-ico">✨</span>
            <span style="font-weight: 700; color: var(--primary);">${marcaNomeCustom}</span>
          </div>
          <div class="listbox-opcao-preco">
            <span>R$ ${precoEstimado.toFixed(2).replace('.', ',')}</span>
            <span class="listbox-mercado-tag">🟠 Atacadão</span>
          </div>
        </div>
      ` + html;
    }
  }

  listbox.innerHTML = html;
}

function obterMarcasParaProduto(chaveIcone, nomeItem) {
  const lista = [];
  const marcasVistas = new Set();
  const nomeNorm = (nomeItem || '').toLowerCase();

  // 1. Marcas da Despensa
  const pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => 
    p.icone === chaveIcone || 
    nomeNorm.includes(p.nome.toLowerCase()) || 
    p.nome.toLowerCase().includes(nomeNorm)
  );

  if (pDespensa && pDespensa.marcas) {
    pDespensa.marcas.forEach(m => {
      lista.push({
        nome: m.nome,
        preco: m.preco,
        mercado: m.mercado,
        emoji: m.emoji
      });
      marcasVistas.add(m.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    });
  }

  // 2. Marcas do catálogo de Cotações DF
  const prefixo = `${chaveIcone}:`;
  Object.keys(COTACOES_MARCAS_DF).forEach(chave => {
    if (chave.startsWith(prefixo)) {
      const nomeMarcaRaw = chave.replace(prefixo, '');
      const nomeMarca = capitalizar(nomeMarcaRaw);
      const chaveNorm = nomeMarca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      if (!marcasVistas.has(chaveNorm)) {
        const cotacoes = COTACOES_MARCAS_DF[chave];
        let menorPreco = Infinity;
        let mercadoNome = 'Atacadão';
        let emoji = '🟠';

        Object.entries(cotacoes).forEach(([mId, pVal]) => {
          if (pVal < menorPreco) {
            menorPreco = pVal;
            mercadoNome = MERCADOS_DF[mId]?.nome || 'Atacadão';
            emoji = MERCADOS_DF[mId]?.emoji || '🟠';
          }
        });

        lista.push({
          nome: nomeMarca,
          preco: menorPreco,
          mercado: mercadoNome,
          emoji: emoji
        });
        marcasVistas.add(chaveNorm);
      }
    }
  });

  return lista;
}

// Seleciona e salva imediatamente a marca no produto
function selecionarMarcaModal(marca, preco) {
  if (!itemEmEdicaoMarcaId) return;

  let item = AppState.listaAtiva.find(i => String(i.id) === String(itemEmEdicaoMarcaId));
  if (!item) {
    const tituloEl = document.getElementById('modal-marca-titulo');
    const nomeModal = tituloEl ? tituloEl.textContent.trim().toLowerCase() : '';
    item = AppState.listaAtiva.find(i => i.nome.toLowerCase() === nomeModal);
  }
  if (!item) return;

  // Atualiza marca
  item.marca = marca ? capitalizar(marca) : null;

  // Atualiza preço
  const precoNum = Number(preco);
  if (!isNaN(precoNum) && precoNum > 0) {
    item.preco = precoNum;
    item.ultimoPreco = precoNum;
  } else {
    const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'carrefour';
    item.preco = obterPrecoEstimadoMercado(item, ref);
    item.ultimoPreco = item.preco;
  }

  // Persiste no LocalStorage e Nuvem Firebase
  salvarEstado(true);

  // Fecha o modal e atualiza a interface
  fecharModal('modal-marcas');
  renderizarListaCompras();
  atualizarCardResumo();
  if (AppState.abaAtiva === 'mercados') renderizarComparadorDF();
  if (AppState.abaAtiva === 'despensa') renderizarDespensa();

  // Feedback visual no card do produto salvo
  setTimeout(() => {
    const cardEl = document.getElementById('card-item-' + item.id);
    if (cardEl) {
      cardEl.style.transition = 'all 0.4s ease';
      cardEl.style.boxShadow = '0 0 0 2px #10B981';
      setTimeout(() => { cardEl.style.boxShadow = ''; }, 1200);
    }
  }, 50);
}

function confirmarSalvarMarcaModal() {
  const inputCustom = document.getElementById('input-marca-custom');
  const valor = inputCustom ? inputCustom.value.trim() : '';

  if (valor) {
    // Se digitou uma marca, busca se tem preço cadastrado
    const chaveNorm = valor.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const match = marcasDisponiveisAtuais.find(m => 
      m.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === chaveNorm
    );
    const precoFinal = match ? match.preco : null;
    selecionarMarcaModal(valor, precoFinal);
  } else {
    // Se não digitou, pega a primeira opção visível do listbox
    const primeiraOpcao = document.querySelector('#modal-marca-listbox .listbox-opcao');
    if (primeiraOpcao) {
      primeiraOpcao.click();
    } else {
      fecharModal('modal-marcas');
    }
  }
}

// Fechar modais ao pressionar tecla ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
    fecharModal('modal-marcas');
    fecharModal('modal-subir-lista');
    fecharModal('modal-finalizar');
    fecharModal('modal-nuvem');
    fecharModal('modal-confirm-exclusao');
    fecharModal('modal-novo-item-despensa');
    fecharModal('modal-editar-nome-despensa');
  }
});

// Finalizar Compra no Supermercado
function abrirModalFinalizarCompra() {
  const itensComprados = AppState.listaAtiva.filter(i => i.comprado);
  if (itensComprados.length === 0) {
    alert("Nenhum item marcado como pego (comprado) ainda! Dê check nos itens que você colocou no carrinho.");
    return;
  }

  let totalComprado = 0;
  itensComprados.forEach(it => {
    totalComprado += (it.qtde * it.preco);
  });

  const modal = document.getElementById('modal-finalizar');
  document.getElementById('modal-resumo-valor').textContent = `R$ ${totalComprado.toFixed(2).replace('.', ',')}`;
  document.getElementById('modal-resumo-qtde').textContent = `${itensComprados.length} itens marcados como pegos`;
  modal.style.display = 'flex';
}

function confirmarFinalizarCompra() {
  const nomeMercado = document.getElementById('input-nome-mercado').value.trim() || 'Supermercado';
  const itensComprados = AppState.listaAtiva.filter(i => i.comprado);
  const hoje = new Date().toISOString();

  let totalComprado = 0;
  const listaItensHistorico = itensComprados.map(it => {
    const sub = it.qtde * it.preco;
    totalComprado += sub;

    // Atualiza catálogo com o novo preço e data
    const itemCat = AppState.catalogo.find(c => c.nome.toLowerCase() === it.nome.toLowerCase());
    if (itemCat && it.preco > 0) {
      itemCat.ultimoPreco = it.preco;
      itemCat.dataUltimoPreco = hoje.split('T')[0];
    }

    return {
      nome: it.nome,
      qtde: it.qtde,
      preco: it.preco,
      subtotal: sub
    };
  });

  // Grava no histórico
  AppState.historico.unshift({
    id: 'h_' + Date.now(),
    data: hoje,
    mercado: nomeMercado,
    total: totalComprado,
    itensQtd: itensComprados.length,
    itens: listaItensHistorico
  });

  // Desmarca no catálogo os itens comprados e sincroniza a lista ativa
  itensComprados.forEach(it => {
    const cat = AppState.catalogo.find(c => c.nome.toLowerCase() === it.nome.toLowerCase() || String(c.id) === String(it.id));
    if (cat) {
      cat.selecionado = false;
      cat.comprado = false;
    }
  });

  sincronizarListaAtivaComCatalogo();

  salvarEstado(true);
  fecharModal('modal-finalizar');
  renderizarTudo();
  alert("🎉 Compra finalizada com sucesso! Histórico e preços atualizados.");
}

// Microfone / Reconhecimento de Fala (Web Speech API)
function configurarReconhecimentoVoz() {
  const btnMic = document.getElementById('btn-mic-voz');
  if (!btnMic) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    btnMic.style.display = 'none'; // Navegador sem suporte
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = false;
  recognition.interimResults = false;

  let gravando = false;

  btnMic.addEventListener('click', () => {
    if (!gravando) {
      try {
        recognition.start();
        gravando = true;
        btnMic.classList.add('gravando');
        btnMic.title = "Ouvindo... Diga o que falta comprar";
      } catch (e) {
        console.error("Erro ao iniciar microfone:", e);
      }
    } else {
      recognition.stop();
      gravando = false;
      btnMic.classList.remove('gravando');
    }
  });

  recognition.onresult = (event) => {
    const textoFalado = event.results[0][0].transcript;
    gravando = false;
    btnMic.classList.remove('gravando');
    processarFalaParaLista(textoFalado);
  };

  recognition.onerror = () => {
    gravando = false;
    btnMic.classList.remove('gravando');
  };

  recognition.onend = () => {
    gravando = false;
    btnMic.classList.remove('gravando');
  };
}

// Separa itens quando falados juntos (ex: "precisa de arroz, dois leites e sabão em pó")
function processarFalaParaLista(frase) {
  let limpa = frase.toLowerCase()
    .replace(/^adicionar\s+/i, '')
    .replace(/^comprar\s+/i, '')
    .replace(/^falta\s+/i, '')
    .replace(/^precisa de\s+/i, '');

  // Quebra por vírgula ou por " e "
  const partes = limpa.split(/,|\se\s/);
  partes.forEach(p => {
    const itemLimpo = p.trim();
    if (itemLimpo.length > 1) {
      adicionarProdutoPorTexto(itemLimpo);
    }
  });
}

// Modal de Nuvem e Compartilhamento
function abrirModalNuvem() {
  const modal = document.getElementById('modal-nuvem');
  
  // Preencher campos se já houver config
  if (FirebaseSync.config) {
    document.getElementById('fb-apikey').value = FirebaseSync.config.apiKey || '';
    document.getElementById('fb-projectid').value = FirebaseSync.config.projectId || '';
    document.getElementById('fb-appid').value = FirebaseSync.config.appId || '';
  }

  const linkEsposa = FirebaseSync.gerarLinkCompartilhamento();
  const boxLink = document.getElementById('box-link-esposa');
  if (linkEsposa) {
    boxLink.style.display = 'block';
    document.getElementById('input-link-esposa').value = linkEsposa;
  } else {
    boxLink.style.display = 'none';
  }

  modal.style.display = 'flex';
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

function salvarConfigNuvem() {
  const apiKey = document.getElementById('fb-apikey').value.trim();
  const projectId = document.getElementById('fb-projectid').value.trim();
  const appId = document.getElementById('fb-appid').value.trim();

  if (!apiKey || !projectId) {
    alert("Por favor, preencha a API Key e o Project ID do seu Firebase.");
    return;
  }

  const config = {
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    appId: appId || `1:${projectId}:web:app`
  };

  FirebaseSync.salvarConfig(config);
  inicializarNuvem();
  fecharModal('modal-nuvem');
  alert("✅ Configurações salvas! Conectando à nuvem Google...");
}

function copiarLinkEsposa() {
  const input = document.getElementById('input-link-esposa');
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value).then(() => {
    alert("📋 Link copiado! Envie este link no WhatsApp da sua esposa. Ao abrir no celular dela, já estará 100% conectada na mesma lista que você!");
  }).catch(() => {
    alert("Copie o texto da caixa acima e envie para ela!");
  });
}

// Exportar Planilha CSV
function exportarParaPlanilhaCSV() {
  let csv = 'Categoria,Produto,Quantidade,Preco Unitario,Subtotal,Status\n';
  let total = 0;

  AppState.listaAtiva.forEach(item => {
    const subtotal = item.qtde * item.preco;
    total += subtotal;
    const status = item.comprado ? 'Comprado' : 'Pendente';
    csv += `"${item.categoria}","${item.nome}",${item.qtde},${item.preco.toFixed(2)},${subtotal.toFixed(2)},"${status}"\n`;
  });

  csv += `,,,TOTAL,${total.toFixed(2)},\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `lista_compras_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Utilitários
function capitalizar(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatarDataCurta(isoDateStr) {
  if (!isoDateStr) return '';
  const partes = isoDateStr.split('-');
  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}`;
  }
  return isoDateStr;
}

// Abre o modal bonito de confirmação do Zerar
function limparTudoEZerar() {
  const modal = document.getElementById('modal-confirmar-zerar');
  if (modal) modal.style.display = 'flex';
}

// Executa o Zerar de fato após confirmação no modal
function confirmarZerarTudo() {
  // Fecha o modal
  fecharModal('modal-confirmar-zerar');

  // Limpa localStorage
  localStorage.removeItem('app_compras_irandy_v2');

  // Reseta catálogo do zero, nenhum item selecionado
  AppState.catalogo = CATALOGO_PADRAO_EXPANDIDO.map(it => ({ ...it, selecionado: false, qtde: 1, comprado: false, origemPreco: null }));
  AppState.listaAtiva = [];
  AppState.itensExcluidos = [];
  AppState.cotacaoAtiva = true;
  AppState.modoCotacao = 'mais_baratos';

  salvarEstado(false);
  renderizarTudo();
}

// // Renderizar Mercados — Mercados como títulos de colunas, produtos como cards em linha
function renderizarComparadorDF() {
  const container = document.getElementById('mercados-tabela-completa');
  const badgeProdutos = document.getElementById('badge-produtos-mercados');
  const containerEconomia = document.getElementById('destaque-economia-df');

  if (!container) return;

  const chavesRedes = Object.keys(MERCADOS_DF);

  // Sem produtos
  if (AppState.listaAtiva.length === 0) {
    if (badgeProdutos) badgeProdutos.textContent = '0 itens';
    if (containerEconomia) containerEconomia.style.display = 'none';
    container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.88rem; text-align: center; padding: 40px 15px; background: white; border-radius: 12px; border: 1px dashed var(--border);">Vá em <strong>Montar Lista</strong> e selecione os produtos. Eles aparecerão aqui com todas as cotações.</p>';
    return;
  }

  if (badgeProdutos) badgeProdutos.textContent = `${AppState.listaAtiva.length} itens`;

  // Calcular totais
  const totais = {};
  chavesRedes.forEach(r => { totais[r] = 0; });

  AppState.listaAtiva.forEach(item => {
    const qtde = item.qtde || 1;
    chavesRedes.forEach(r => {
      totais[r] += qtde * obterPrecoEstimadoMercado(item, r);
    });
  });

  const redesOrdenadas = [...chavesRedes].sort((a, b) => totais[a] - totais[b]);
  const campeaoId = redesOrdenadas[0];
  const maisCaroId = redesOrdenadas[redesOrdenadas.length - 1];
  const economia = totais[maisCaroId] - totais[campeaoId];

  // Cabeçalho dos Mercados (Colunas)
  let colunasCabecalho = chavesRedes.map(r => {
    const info = MERCADOS_DF[r];
    const logo = (typeof obterLogoMercado === 'function' && obterLogoMercado(r)) || `logos/${r}.png`;
    const isCampeao = r === campeaoId;
    return `
      <th class="mcol-th-rede ${isCampeao ? 'mcol-campeao-header' : ''}">
        <div class="mcol-rede-header-inner">
          <img src="${logo}" class="mcol-rede-logo" onerror="this.outerHTML='<span style=\\'font-size:1.1rem\\'>${info.emoji}</span>'" alt="${info.nome}">
          <span class="mcol-rede-nome">${info.nome}</span>
          ${isCampeao ? '<span class="mcol-badge-campeao-topo">⭐ Campeão</span>' : ''}
        </div>
      </th>
    `;
  }).join('');

  // Linhas de Produtos (Cada produto é uma linha com preços na mesma linha)
  let linhasProdutos = '';
  AppState.listaAtiva.forEach(item => {
    const iconeSvg = (typeof obterIcone2D === 'function') ? obterIcone2D(item.nome, item.icone) : '';
    const qtde = item.qtde || 1;

    const precos = {};
    const precosValidos = [];
    chavesRedes.forEach(r => {
      const p = obterPrecoEstimadoMercado(item, r);
      precos[r] = p;
      if (p > 0) precosValidos.push(p);
    });

    const menorPreco = precosValidos.length > 0 ? Math.min(...precosValidos) : -1;
    const melhorRede = menorPreco > 0 ? chavesRedes.find(r => precos[r] === menorPreco) : null;

    let celulasPrecos = chavesRedes.map(r => {
      const p = precos[r];
      const isMenor = p > 0 && p === menorPreco;

      let diffHtml = '';
      if (p > 0 && !isMenor && menorPreco > 0) {
        const diffPct = ((p - menorPreco) / menorPreco) * 100;
        const pctTxt = diffPct < 1 ? `+${diffPct.toFixed(1).replace('.', ',')}%` : `+${Math.round(diffPct)}%`;
        diffHtml = `<span class="mcol-tag-diff">${pctTxt}</span>`;
      } else if (isMenor) {
        diffHtml = `<span class="mcol-tag-menor">✓ Menor</span>`;
      }

      const precoTxt = p > 0 ? `R$ ${p.toFixed(2).replace('.', ',')}` : '<span class="mcol-a-cotar">—</span>';

      return `
        <td class="mcol-td-preco ${isMenor ? 'mcol-td-menor-bg' : ''}">
          <div class="mcol-preco-linha-box">
            <span class="mcol-valor ${isMenor ? 'mcol-valor-menor' : ''}">${precoTxt}</span>
            ${diffHtml}
          </div>
        </td>
      `;
    }).join('');

    const badgeMelhor = melhorRede ? `<span class="mcol-badge-menor-prod" title="Mais barato no ${MERCADOS_DF[melhorRede].nome}">🏆 ${MERCADOS_DF[melhorRede].nome}</span>` : '';

    linhasProdutos += `
      <tr class="mcol-tr-item">
        <td class="mcol-td-produto">
          <div class="mcol-prod-card-cell">
            <div class="mcol-prod-icone">${iconeSvg}</div>
            <div class="mcol-prod-textos">
              <span class="mcol-prod-nome"><strong>${qtde}x</strong> ${item.nome}</span>
              ${item.marca ? `<span class="mcol-prod-marca">${item.marca}</span>` : ''}
            </div>
            ${badgeMelhor}
          </div>
        </td>
        ${celulasPrecos}
      </tr>
    `;
  });

  // Linha de Totais (Rodapé da Tabela)
  let celulasTotais = chavesRedes.map(r => {
    const isCampeao = r === campeaoId;
    return `
      <td class="mcol-td-total ${isCampeao ? 'mcol-td-total-campeao' : ''}">
        <div class="mcol-total-box">
          <span class="mcol-total-valor">R$ ${totais[r].toFixed(2).replace('.', ',')}</span>
          ${isCampeao ? '<span class="mcol-campeao-tag">⭐ CAMPEÃO</span>' : ''}
        </div>
      </td>
    `;
  }).join('');

  container.innerHTML = `
    <div class="mcol-tabela-scroll">
      <table class="mcol-tabela-moderna">
        <thead>
          <tr>
            <th class="mcol-th-produto">Produto (${AppState.listaAtiva.length})</th>
            ${colunasCabecalho}
          </tr>
        </thead>
        <tbody>
          ${linhasProdutos}
        </tbody>
        <tfoot>
          <tr class="mcol-tr-totais">
            <td class="mcol-td-totais-label">
              <div style="font-weight: 800; font-size: 0.92rem;">TOTAL ESTIMADO</div>
              <small style="color: var(--text-muted); font-size: 0.72rem;">Soma dos itens escolhidos</small>
            </td>
            ${celulasTotais}
          </tr>
        </tfoot>
      </table>
    </div>
  `;

  // Banner de Economia
  if (containerEconomia) {
    containerEconomia.style.display = 'flex';
    containerEconomia.innerHTML = `
      <span style="font-size: 1.4rem;">💡</span>
      <div>
        <strong>Economia estimada em Brasília:</strong> 
        Comprando no <u>${MERCADOS_DF[campeaoId].nome}</u> em vez do <u>${MERCADOS_DF[maisCaroId].nome}</u>, você economiza aproximadamente 
        <strong style="color: #047857;">R$ ${economia.toFixed(2).replace('.', ',')}</strong> (${Math.round((economia / (totais[maisCaroId] || 1)) * 100)}% de economia)!
      </div>
    `;
  }
}

// =========================================================================
// SISTEMA DE PRESETS / MINHA LISTA PRÉ-MONTADA
// =========================================================================

const PRESETS_LISTA = [
  {
    id: 'basica_mes',
    nome: '🛒 Compra Básica do Mês',
    descricao: 'Arroz, feijão, óleo, café, carnes, leite, ovos, higiene e limpeza.',
    icone: '🛒',
    ids: [
      'b_arroz_5kg', 'b_feijao_car', 'b_oleo_soja', 'b_acucar_cris', 'b_cafe', 'b_sal_ref', 'b_macarrao_esp',
      'l_leite_int', 'l_ovos_30', 'l_manteiga', 'l_mussarela',
      'c_patinho', 'f_sassami', 'c_calabresa',
      'h_batata', 'h_cebola_br', 'h_alho', 'h_tomate_ita', 'h_banana_prata',
      'limp_detergente', 'limp_sabao', 'limp_amaciante', 'limp_qboa', 'limp_desinfet',
      'hig_papel_dup', 'hig_creme_dent', 'hig_sab_barra'
    ]
  },
  {
    id: 'hortifruti_semana',
    nome: '🥬 Hortifrúti Fresco da Semana',
    descricao: 'Frutas selecionadas, verduras hidropônicas, legumes e ovos.',
    icone: '🥬',
    ids: [
      'h_banana_prata', 'h_maca_gala', 'h_laranja', 'h_limao', 'h_mamao', 'h_melancia', 'h_uva',
      'h_tomate_ita', 'h_cebola_br', 'h_alho', 'h_batata', 'h_cenoura', 'h_abobrinha', 'h_chuchu',
      'h_alface_cresp', 'h_couve', 'h_rucula', 'h_cheiro_verde', 'l_ovos_30'
    ]
  },
  {
    id: 'churrasco_fds',
    nome: '🥩 Churrasco & Fim de Semana',
    descricao: 'Picanha, alcatra, linguiça toscana, asinha, carvão, sal grosso e petiscos.',
    icone: '🥩',
    ids: [
      'c_picanha', 'c_alcatra', 'c_toscana', 'c_costela', 'f_asinha', 'f_coracao',
      'b_sal_grosso', 'b_farinha_mand', 'l_mussarela', 'h_limao', 'h_cebola_br', 'h_tomate_sal',
      'limp_saco_lixo', 'limp_papel_toalha'
    ]
  },
  {
    id: 'limpeza_pesada',
    nome: '🧹 Faxina & Limpeza Completa',
    descricao: 'Detergente, sabão em pó, amaciante, Qboa, desinfetante, álcool e esponjas.',
    icone: '🧹',
    ids: [
      'limp_detergente', 'limp_sabao', 'limp_amaciante', 'limp_qboa', 'limp_desinfet',
      'limp_veja', 'limp_alcool', 'limp_esponja', 'limp_bombril', 'limp_saco_lixo', 'limp_papel_toalha',
      'hig_papel_dup'
    ]
  },
  {
    id: 'cafe_lanches',
    nome: '🍞 Café da Manhã & Lanches',
    descricao: 'Café, leite, pães, manteiga, mussarela, presunto, requeijão e biscoitos.',
    icone: '🍞',
    ids: [
      'b_cafe', 'b_acucar_ref', 'l_leite_int', 'pad_pao_forma', 'pad_pao_queijo',
      'l_manteiga', 'l_mussarela', 'l_presunto', 'l_requeijao', 'l_iogurte',
      'pad_biscoito_rech', 'pad_biscoito_sal', 'pad_torrada', 'h_banana_prata'
    ]
  }
];

let presetAbertoDetalhesId = null;

// Abrir Modal de Presets e renderizar os cards
function abrirModalPresets() {
  const modal = document.getElementById('modal-presets-lista');
  const container = document.getElementById('container-lista-presets');
  if (!modal || !container) return;

  fecharDetalhesPreset();
  atualizarStatusMeuPreset();

  let html = '';
  PRESETS_LISTA.forEach(preset => {
    const qtdItens = preset.ids.length;
    html += `
      <div class="card-preset-item" id="card-preset-box-${preset.id}">
        <div class="card-preset-topo">
          <div class="card-preset-icone">${preset.icone}</div>
          <div class="card-preset-textos">
            <h4 class="card-preset-titulo">${preset.nome}</h4>
            <p class="card-preset-desc">${preset.descricao}</p>
          </div>
        </div>
        <div class="card-preset-rodape">
          <button id="btn-toggle-preset-${preset.id}" class="btn-ver-itens-preset" onclick="alternarDetalhesItensPreset('${preset.id}')" title="Clique para ver os ${qtdItens} produtos deste preset">
            📋 ${qtdItens} produtos <span>▸</span>
          </button>
          <div class="card-preset-acoes">
            <button class="btn-preset-adicionar" onclick="aplicarPreset('${preset.id}', 'adicionar')" title="Adicionar estes itens mantendo os atuais">
              + Somar
            </button>
            <button class="btn-preset-substituir" onclick="aplicarPreset('${preset.id}', 'substituir')" title="Substituir toda a lista por este preset">
              ✓ Aplicar Preset
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  modal.style.display = 'flex';
}

// Alterna abrir/fechar o modal lateral de itens
function alternarDetalhesItensPreset(presetId) {
  const drawer = document.getElementById('modal-presets-lado-direito');
  if (!drawer) return;

  if (presetAbertoDetalhesId === presetId && drawer.style.display !== 'none') {
    fecharDetalhesPreset();
    return;
  }

  abrirDetalhesItensPreset(presetId);
}

// Abre o modal lateral à direita com a lista completa de produtos
function abrirDetalhesItensPreset(presetId) {
  const drawer = document.getElementById('modal-presets-lado-direito');
  if (!drawer) return;

  presetAbertoDetalhesId = presetId;

  // Remove destaque anterior e adiciona no botão clicado
  document.querySelectorAll('.btn-ver-itens-preset').forEach(b => b.classList.remove('ativo'));
  const btnAtual = document.getElementById(`btn-toggle-preset-${presetId}`);
  if (btnAtual) btnAtual.classList.add('ativo');

  let titulo = '';
  let icone = '📋';
  let itemIds = [];

  if (presetId === 'meu_preset') {
    titulo = 'Meu Preset Salvo';
    icone = '💾';
    const salvoStr = localStorage.getItem('meu_preset_usuario_v1');
    if (salvoStr) {
      try {
        const dados = JSON.parse(salvoStr);
        itemIds = dados.ids || [];
      } catch (e) {}
    }
  } else {
    const preset = PRESETS_LISTA.find(p => p.id === presetId);
    if (preset) {
      titulo = preset.nome;
      icone = preset.icone;
      itemIds = preset.ids || [];
    }
  }

  const iconeEl = document.getElementById('drawer-icone');
  const tituloEl = document.getElementById('drawer-titulo');
  const subtituloEl = document.getElementById('drawer-subtitulo');
  if (iconeEl) iconeEl.textContent = icone;
  if (tituloEl) tituloEl.textContent = titulo;
  if (subtituloEl) subtituloEl.textContent = `${itemIds.length} produtos inclusos`;

  // Renderiza produtos detalhados
  const containerLista = document.getElementById('drawer-lista-itens');
  let htmlItens = '';
  let totalEstimado = 0;

  itemIds.forEach(id => {
    const itemCat = AppState.catalogo.find(p => p.id === id) || 
                    CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === id);
    
    if (itemCat) {
      const precoUnit = itemCat.precoMedioDF || itemCat.ultimoPreco || 0;
      totalEstimado += precoUnit;
      const chaveIcone = itemCat.icone || detectarChaveIcone(itemCat.nome);
      const iconeSvg = obterIcone2D(itemCat.nome, chaveIcone);
      const precoFormatado = precoUnit > 0 ? `R$ ${precoUnit.toFixed(2).replace('.', ',')}` : 'R$ --';

      htmlItens += `
        <div class="drawer-item-row">
          <div class="drawer-item-icone">${iconeSvg}</div>
          <div class="drawer-item-info">
            <div class="drawer-item-nome" title="${itemCat.nome}">${itemCat.nome}</div>
            <div class="drawer-item-cat">${itemCat.categoria || 'Geral'}</div>
          </div>
          <div class="drawer-item-preco">${precoFormatado}</div>
        </div>
      `;
    }
  });

  if (itemIds.length === 0) {
    htmlItens = `<div style="text-align: center; color: #94A3B8; padding: 25px 10px; font-size: 0.85rem;">Nenhum item encontrado nesta lista.</div>`;
  }

  if (containerLista) containerLista.innerHTML = htmlItens;

  const estimativaEl = document.getElementById('drawer-estimativa-valor');
  if (estimativaEl) {
    estimativaEl.textContent = `R$ ${totalEstimado.toFixed(2).replace('.', ',')}`;
  }

  // Configura os botões de ação do rodapé da gaveta
  const btnSomar = document.getElementById('btn-drawer-somar');
  const btnAplicar = document.getElementById('btn-drawer-aplicar');
  if (btnSomar && btnAplicar) {
    if (presetId === 'meu_preset') {
      btnSomar.onclick = () => { aplicarMeuPreset('adicionar'); fecharModalPresetsCompleto(); };
      btnAplicar.onclick = () => { aplicarMeuPreset('substituir'); fecharModalPresetsCompleto(); };
    } else {
      btnSomar.onclick = () => { aplicarPreset(presetId, 'adicionar'); fecharModalPresetsCompleto(); };
      btnAplicar.onclick = () => { aplicarPreset(presetId, 'substituir'); fecharModalPresetsCompleto(); };
    }
  }

  drawer.style.display = 'flex';
}

// Fechar painel lateral
function fecharDetalhesPreset() {
  presetAbertoDetalhesId = null;
  const drawer = document.getElementById('modal-presets-lado-direito');
  if (drawer) drawer.style.display = 'none';

  document.querySelectorAll('.btn-ver-itens-preset').forEach(b => b.classList.remove('ativo'));
}

// Fechar todo o modal de presets e gaveta
function fecharModalPresetsCompleto() {
  fecharDetalhesPreset();
  fecharModal('modal-presets-lista');
}

// Aplicar preset aos itens do catálogo
function aplicarPreset(presetId, modo = 'substituir') {
  const preset = PRESETS_LISTA.find(p => p.id === presetId);
  if (!preset) return;

  if (modo === 'substituir') {
    AppState.catalogo.forEach(it => { it.selecionado = false; });
  }

  const idSet = new Set(preset.ids);
  let marcadosCount = 0;

  AppState.catalogo.forEach(it => {
    if (idSet.has(it.id)) {
      it.selecionado = true;
      marcadosCount++;
    }
  });

  sincronizarListaAtivaComCatalogo();
  salvarEstado(true);
  renderizarTudo();
  fecharModalPresetsCompleto();

  mostrarNotificacaoToast(`✓ Preset "${preset.nome}" aplicado com ${marcadosCount} itens!`);
}

// Salvar a seleção atual como "Meu Preset"
function salvarComoMeuPreset() {
  const selecionados = AppState.catalogo.filter(p => p.selecionado).map(p => p.id);
  if (selecionados.length === 0) {
    alert('⚠️ Selecione pelo menos 1 produto em "Montar Lista" antes de salvar seu favorito!');
    return;
  }

  const dadosPreset = {
    data: new Date().toLocaleDateString('pt-BR'),
    ids: selecionados
  };

  localStorage.setItem('meu_preset_usuario_v1', JSON.stringify(dadosPreset));
  atualizarStatusMeuPreset();
  mostrarNotificacaoToast(`⭐ Lista favorita gravada com ${selecionados.length} itens!`);
}

// Carregar Meu Preset
function aplicarMeuPreset(modo = 'substituir') {
  const salvoStr = localStorage.getItem('meu_preset_usuario_v1');
  if (!salvoStr) {
    alert('Nenhuma lista favorita foi gravada ainda.');
    return;
  }

  try {
    const dados = JSON.parse(salvoStr);
    const idSet = new Set(dados.ids || []);

    if (modo === 'substituir') {
      AppState.catalogo.forEach(it => { it.selecionado = false; });
    }

    let count = 0;
    AppState.catalogo.forEach(it => {
      if (idSet.has(it.id)) {
        it.selecionado = true;
        count++;
      }
    });

    sincronizarListaAtivaComCatalogo();
    salvarEstado(true);
    renderizarTudo();
    fecharModalPresetsCompleto();

    mostrarNotificacaoToast(`⚡ Favorito carregado com ${count} itens!`);
  } catch (e) {
    console.error('Erro ao carregar preset', e);
  }
}

// Atualiza o card de status do Meu Preset no modal
function atualizarStatusMeuPreset() {
  const statusEl = document.getElementById('meu-preset-status');
  const btnCarregar = document.getElementById('btn-carregar-meu-preset');
  if (!statusEl || !btnCarregar) return;

  const salvoStr = localStorage.getItem('meu_preset_usuario_v1');
  if (salvoStr) {
    try {
      const dados = JSON.parse(salvoStr);
      statusEl.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          <strong style="color: #059669;">✓ ${dados.ids.length} itens salvos</strong> em ${dados.data}
          <button class="btn-meu-preset-ver-itens" onclick="alternarDetalhesItensPreset('meu_preset')" title="Ver itens gravados">📋 Ver Itens</button>
        </span>
      `;
      btnCarregar.disabled = false;
    } catch(e) {
      statusEl.textContent = 'Nenhuma lista personalizada salva ainda.';
      btnCarregar.disabled = true;
    }
  } else {
    statusEl.textContent = 'Nenhuma lista personalizada salva ainda.';
    btnCarregar.disabled = true;
  }
}

// Notificação Toast rápida e discreta
function mostrarNotificacaoToast(mensagem) {
  let toast = document.getElementById('toast-notificacao-flutuante');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notificacao-flutuante';
    toast.className = 'toast-notificacao-flutuante';
    document.body.appendChild(toast);
  }

  toast.textContent = mensagem;
  toast.classList.add('visivel');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('visivel');
  }, 3200);
}
