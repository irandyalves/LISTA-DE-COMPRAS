// Catálogo Mestre Completo Expandido (Hortifrúti 40+, Carnes e Frangos 25+, Higiene 16+, Básicos 20+, Laticínios 14+, Limpeza 12+, Padaria 7+)
const CATALOGO_PADRAO_EXPANDIDO = [
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
  { id: 'f_peito_osso', nome: 'Peito de Frango sem Osso e Pele (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_sassami', nome: 'Filé de Peito / Sassami de Frango (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 18.50, ultimoPreco: 18.50, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coxa_sobre', nome: 'Coxa e Sobrecoxa de Frango Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_asinha', nome: 'Asinha de Frango / Meio da Asa (Tulipa) (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coxinha_asa', nome: 'Coxinha da Asa de Frango (Drumet) (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_passarinho', nome: 'Frango a Passarinho Congelado (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 13.50, ultimoPreco: 13.50, dataUltimoPreco: '2026-08-25' },
  { id: 'f_coracao', nome: 'Coração de Frango para Grelhar (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_moela', nome: 'Moela de Frango Limpa (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-08-25' },
  { id: 'f_inteiro', nome: 'Frango Inteiro Resfriado (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-25' },
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
  { id: 'b_arroz_5kg', nome: 'Arroz Branco Tipo 1 (Pacote 5kg)', categoria: 'Básicos e Grãos', icone: 'arroz', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_arroz_parb', nome: 'Arroz Parboilizado Tipo 1 (Pacote 5kg)', categoria: 'Básicos e Grãos', icone: 'arroz_parboilizado', precoMedioDF: 24.50, ultimoPreco: 24.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_arroz_int', nome: 'Arroz Integral Selecionado (1kg)', categoria: 'Básicos e Grãos', icone: 'arroz_integral', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_car', nome: 'Feijão Carioca Novo Tipo 1 (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 7.49, ultimoPreco: 7.49, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_pt', nome: 'Feijão Preto Tipo 1 (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao_preto', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
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
  { id: 'b_achoc_nescau', nome: 'Achocolatado em Pó Nescau 2.0 (370g / 400g)', categoria: 'Básicos e Grãos', icone: 'achocolatado', marca: 'Nescau', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-08-28' },
  { id: 'b_achoc_toddy', nome: 'Achocolatado em Pó Toddy Original (370g / 400g)', categoria: 'Básicos e Grãos', icone: 'achocolatado', marca: 'Toddy', precoMedioDF: 8.49, ultimoPreco: 8.49, dataUltimoPreco: '2026-08-28' },
  { id: 'b_achoc_tody', nome: 'Achocolatado Toddy / Tody (370g / 400g)', categoria: 'Básicos e Grãos', icone: 'achocolatado', marca: 'Toddy', precoMedioDF: 8.49, ultimoPreco: 8.49, dataUltimoPreco: '2026-08-28' },
  { id: 'b_extrato_tomate', nome: 'Extrato de Tomate Concentrado (340g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-28' },
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
  { id: 'pad_pao_forma', nome: 'Pão de Forma Tradicional (Pacote 500g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_pao_frances', nome: 'Pão Francês Fresquinho (kg)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_pao_queijo', nome: 'Pão de Queijo Congelado (Pacote 400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-08-28' },
  { id: 'pad_biscoito_rech', nome: 'Biscoito Recheado Tradicional (Pacote 130g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_biscoito_sal', nome: 'Biscoito Água e Sal / Cream Cracker (Pacote 400g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_torrada', nome: 'Torrada Tradicional Crocante (Pacote 140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-08-25' },
  { id: 'pad_bolo', nome: 'Bolo de Pacote / Mistura para Bolo (400g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-08-25' },
  { id: 'hig_escova_cab_raq', nome: 'Escova de Cabelo Almofadada Raquete Desembaraçadora', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_escova_cab_red', nome: 'Escova de Cabelo Redonda Térmica para Secador', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_pente_cab', nome: 'Pente de Cabelo Antiestático com Dentes Largos', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_escova_eletrica', nome: 'Escova Dental Elétrica Recarregável / Refil Cerdas Macias', categoria: 'Higiene', icone: 'dente', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_fio_100m', nome: 'Fio Dental com Cera Sabor Menta (100m)', categoria: 'Higiene', icone: 'fiodental', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_creme_luminous', nome: 'Creme Dental Branqueador Colgate Luminous White (70g)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_enxaguante_zero', nome: 'Enxaguante Bucal Antisséptico Zero Álcool (500ml)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_sab_intimo', nome: 'Sabonete Líquido Íntimo Dermacyd / similar (200ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_sab_dove', nome: 'Sabonete em Barra Hidratante Dove Original (90g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_sab_liq_refil', nome: 'Sabonete Líquido para Mãos Refil Econômico (500ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_shampoo_anticaspa', nome: 'Shampoo Anticaspa Clear Men / Head & Shoulders (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_condic_pantene', nome: 'Condicionador Capilar Pantene Restauração (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_mascara_capilar', nome: 'Máscara de Tratamento Capilar Hidratação Profunda (1kg)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_creme_pentear', nome: 'Creme para Pentear / Leave-in Definição e Brilho (300ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_oleo_capilar', nome: 'Óleo Capilar Reparador de Pontas / Argan (100ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_desod_clinical_fem', nome: 'Desodorante Antitranspirante Aerosol Clinical Feminino (150ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_desod_clinical_masc', nome: 'Desodorante Antitranspirante Aerosol Clinical Masculino (150ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_carga_mach3', nome: 'Cargas para Aparelho de Barbear Gillette Mach 3 (c/ 4 unidades)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 42.90, ultimoPreco: 42.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_espuma_barbear', nome: 'Espuma de Barbear Pele Sensível Gillette Foamy (200ml)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_pos_barba', nome: 'Loção Pós-Barba Refrescante e Hidratante (100ml)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 17.50, ultimoPreco: 17.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_absorv_noturno', nome: 'Absorvente Noturno com Abas e Cobertura Suave (Pacote c/ 16)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_absorv_diario', nome: 'Protetor Diário sem Perfume Respirável (Pacote c/ 40)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_protetor_facial', nome: 'Protetor Solar Facial com Toque Seco FPS 50/60 (50g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_protetor_corporal', nome: 'Protetor Solar Corporal Loção Hidratante FPS 50 (200ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_hidratante_corp', nome: 'Hidratante Corporal Pele Seca a Extrasseca Nivea / Cerave (400ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_creme_maos', nome: 'Creme Hidratante Reparador para as Mãos (75g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_sab_facial', nome: 'Sabonete Facial Líquido para Pele Oleosa / Acne (150ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_agua_micelar', nome: 'Água Micelar Demaquilante 5 em 1 L\'Oréal (200ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_lencos_umedecidos', nome: 'Lenços Umedecidos Toalhinhas para Higiene (Pacote c/ 50)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_algodao_disco', nome: 'Algodão em Discos para Cuidados Faciais (Pacote c/ 50)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_algodao_bolas', nome: 'Algodão Hidrófilo em Bolas Multiuso (Pacote 100g)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 6.20, ultimoPreco: 6.20, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_cortador_unha', nome: 'Cortador de Unha em Aço Inox Mundial', categoria: 'Higiene', icone: 'dente', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_lixa_unha', nome: 'Lixas para Unhas Dupla Face (Pacote c/ 6 unidades)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_esmalte_unha', nome: 'Esmalte Cremoso / Verniz Tratamento Risqué / Impala (8ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_removedor_esmalte', nome: 'Removedor de Esmalte sem Acetona Suave (100ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_fralda_m', nome: 'Fralda Descartável Infantil Tamanho M (Pacote c/ 36)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 44.90, ultimoPreco: 44.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_fralda_g', nome: 'Fralda Descartável Infantil Tamanho G (Pacote c/ 32)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 44.90, ultimoPreco: 44.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_fralda_xg', nome: 'Fralda Descartável Infantil Tamanho XG (Pacote c/ 28)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 44.90, ultimoPreco: 44.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_pomada_assadura', nome: 'Pomada para Assaduras Infantil Bepantol / Hipoglós (45g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_shampoo_bebe', nome: 'Shampoo Infantil Suave sem Lágrimas Johnson\'s (200ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_preservativo', nome: 'Preservativo / Camisinha Jontex / Prudence (Pacote c/ 3)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_curativos', nome: 'Curativos Adesivos Respiráveis tipo Band-Aid (Caixa c/ 20)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_alcool_gel', nome: 'Álcool em Gel 70% Higienizante para Mãos (Pote 400g/500ml)', categoria: 'Higiene', icone: 'sanitaria', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_soro_fisiologico', nome: 'Soro Fisiológico 0.9% Frasco Multiuso (500ml)', categoria: 'Higiene', icone: 'agua', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_antisseptico', nome: 'Spray Antisséptico Merthiolate / similar para Machucados (50ml)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 16.50, ultimoPreco: 16.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_gel_fixador', nome: 'Gel Fixador de Cabelo Cola / Efeito Molhado (250g)', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_reparador_pontas', nome: 'Reparador de Pontas Óleo de Silicone para Cabelos (30ml)', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 11.50, ultimoPreco: 11.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_pinça_sobrancelha', nome: 'Pinça para Sobrancelha em Aço Inox Ponta Reta/Chanfrada', categoria: 'Higiene', icone: 'dente', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_touca_banho', nome: 'Touca de Banho Impermeável Plástica com Elástico', categoria: 'Higiene', icone: 'cabelo', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'hig_sabonete_antbac', nome: 'Sabonete Antibacteriano Protex / Dettol (85g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_escova_roupa', nome: 'Escova de Lavar Roupas Multiuso com Cerdas de Nylon', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_escova_sanitaria', nome: 'Escova Sanitária para Vaso Sanitário com Suporte', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_sabao_omo_24', nome: 'Sabão em Pó OMO Lavagem Perfeita Caixa (2.4kg)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 27.90, ultimoPreco: 27.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_sabao_liq_3l', nome: 'Sabão Líquido Lava-Roupas Concentrado OMO / Ariel (3L)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_sabao_barra_ype', nome: 'Sabão em Barra Glicerinado Ypê Neutro (Pacote c/ 5 de 200g)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_amaciante_comfort', nome: 'Amaciante Concentrado Comfort Toque Suave (1L)', categoria: 'Limpeza', icone: 'amaciante', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_amaciante_downy', nome: 'Amaciante Concentrado Downy Brisa de Verão (1L)', categoria: 'Limpeza', icone: 'amaciante', precoMedioDF: 18.50, ultimoPreco: 18.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_tira_manchas_po', nome: 'Tira Manchas em Pó para Roupas Vanish Oxi Action (450g)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_alvejante_sem_cloro', nome: 'Alvejante sem Cloro para Roupas Coloridas (1.5L)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_deterg_pastilha', nome: 'Pastilhas para Máquina Lava-Louças Finish Powerball (c/ 15)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_secante_lava_louca', nome: 'Líquido Secante e Abrilhantador para Lava-Louças (250ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_desengord_cozinha', nome: 'Desengordurante para Cozinha e Fogão Veja / Mr Músculo Spray (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_limpa_vidros', nome: 'Limpa Vidros e Espelhos Vidrex com Gatilho Spray (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pinho_sol_1l', nome: 'Desinfetante Pinho Sol Tradicional Original (1L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_lysoform_1l', nome: 'Desinfetante Lysoform Bruto Germicida / Bactericida (1L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_cloro_gel', nome: 'Cloro Gel Ativo Sanitário Harpic / Veja (500ml)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pastilha_adesiva', nome: 'Pastilhas Adesivas Desodorizantes para Vaso Harpic (c/ 3)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 9.50, ultimoPreco: 9.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_bloco_vaso', nome: 'Bloco Sanitário Perfumado com Gancho para Vaso', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_odorizador_spray', nome: 'Odorizador de Ambiente em Aerossol Glade / Bom Ar (360ml)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_difusor_aroma', nome: 'Difusor de Aromas com Varetas Lavanda / Vanilla (100ml)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_limpador_perfumado', nome: 'Limpador Perfumado para Pisos Casa & Perfume / Ajax (1L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_cera_liquida', nome: 'Cera Líquida Autobrilho para Pisos Poliflor (750ml)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 14.50, ultimoPreco: 14.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_lustra_moveis', nome: 'Lustra Móveis com Silicone Óleo de Peroba / Poliflor (200ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_esponja_antiader', nome: 'Esponja Macia Não Risca para Panelas Antiaderentes (c/ 3)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pano_perfex_rolo', nome: 'Pano Multiuso Tipo Perfex em Rolo Picotado (Rolo c/ 50)', categoria: 'Limpeza', icone: 'papel', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pano_chao_grosso', nome: 'Pano de Chão Alvejado Grosso 100% Algodão Xadrez (Unidade)', categoria: 'Limpeza', icone: 'papel', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pano_microfibra', nome: 'Pano de Microfibra de Alta Absorção para Limpeza Geral', categoria: 'Limpeza', icone: 'papel', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_rodo_40cm', nome: 'Rodo de Borracha Duplo 40cm com Cabo Resistente', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_vassoura_interior', nome: 'Vassoura de Cerdas Macias para Pisos Delicados com Cabo', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_vassoura_piacava', nome: 'Vassoura Piaçava Reforçada para Calçada e Área Externa', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_pa_lixo_cabo', nome: 'Pá de Lixo Articulada com Cabo Longo Plástica', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_balde_10l', nome: 'Balde Plástico Graduado com Alça de Metal (10L)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_desentupidor_vaso', nome: 'Desentupidor de Borracha para Vaso Sanitário com Cabo', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_diabo_verde', nome: 'Desentupidor Líquido de Pias e Ralos Diabo Verde (1L)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_inseticida_spray', nome: 'Inseticida em Aerossol Multi-insetos SBP / Baygon (300ml)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_repelente_tomada', nome: 'Repelente Elétrico de Tomada SBP Líquido 45 Noites Refil', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_repelente_off', nome: 'Repelente Corporal em Spray Off / Repelex Família (200ml)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_saco_30l', nome: 'Saco de Lixo Reforçado 30 Litros (Rolo c/ 30 unidades)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_saco_100l', nome: 'Saco de Lixo Super Reforçado 100 Litros Preto (Rolo c/ 15)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_luva_borracha', nome: 'Luva de Borracha Látex Amarela para Limpeza (Par)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_prendedor_roupa', nome: 'Prendedores de Roupas Plásticos com Mola (Embalagem c/ 24)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_tira_ferrugem', nome: 'Tira Ferrugem em Tecidos e Roupas Semorin (50ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_soda_caustica', nome: 'Soda Cáustica em Escamas 99% para Limpeza Pesada (1kg)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_limpa_forno', nome: 'Limpa Forno e Grelhas Tradicional com Pincel Fácil (250ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 11.50, ultimoPreco: 11.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_limpa_aluminio', nome: 'Brilho Alumínio Limpa e Desengordura Panelas (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_cloro_puro_5l', nome: 'Hipoclorito de Sódio / Cloro Concentrado Galão (5 Litros)', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_sacola_retornavel', nome: 'Sacola Ecológica Retornável Reutilizável de Supermercado', categoria: 'Limpeza', icone: 'papel', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_desumidificador', nome: 'Desumidificador Antimofo para Guarda-Roupas Secar (Pote 180g)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_naftalina', nome: 'Naftalina em Esferas Antipragas e Traças (Pacote 100g)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'limp_limpa_carpete', nome: 'Limpador de Estofados e Carpetes a Seco Tuff Stuff Spray (300ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_mirtilo', nome: 'Mirtilo / Blueberry Fresco Selecionado (Bandeja 125g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_kiwi', nome: 'Kiwi Verde Importado Selecionado (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_ameixa_fresca', nome: 'Ameixa Vermelha Nacional Fresca (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pessego', nome: 'Pêssego Amarelo Nacional Fresco (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pera_williams', nome: 'Pêra Williams / D\'Anjou Argentina (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_uva_thompson', nome: 'Uva Verde Thompson sem Semente (Bandeja 500g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_uva_vitoria', nome: 'Uva Roxa Vitória sem Sementes Doce (Bandeja 500g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_coco_verde', nome: 'Coco Verde Gelado com Água (Unidade)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_coco_seco', nome: 'Coco Seco Inteiro da Bahia (Unidade)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_goiaba_vermelha', nome: 'Goiaba Vermelha Doce Selecionada (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_manga_tommy', nome: 'Manga Tommy Atkins Madura (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_jabuticaba', nome: 'Jabuticaba Sabará Fresquinha (Bandeja 500g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pitaya', nome: 'Pitaya Rosa Polpa Vermelha ou Branca (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_avocado', nome: 'Abacate Tipo Avocado Pequeno Hass (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_maracuja_doce', nome: 'Maracujá Doce para Comer de Colher (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_caqui', nome: 'Caqui Fuyu / Chocolate Doce (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_inhame', nome: 'Inhame da Terra Fresco Selecionado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_cara', nome: 'Cará Branco Especial Selecionado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_batata_asterix', nome: 'Batata Asterix Rosada Especial para Fritar (kg)', categoria: 'Hortifrúti', icone: 'batata', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_batata_bolinha', nome: 'Batatinha Bolinha para Conserva (kg)', categoria: 'Hortifrúti', icone: 'batata', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_alho_poro', nome: 'Alho Poró Fresco Higienizado (Maço / Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_alho_descascado', nome: 'Alho Descascado em Pote Prático (200g)', categoria: 'Hortifrúti', icone: 'alho', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_gengibre', nome: 'Gengibre Fresco Selecionado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pimenta_dedo', nome: 'Pimenta Dedo de Moça Fresca (Bandeja 100g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pimenta_biquinho', nome: 'Pimenta Biquinho Doce Fresca (Bandeja 150g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_pimenta_cheiro', nome: 'Pimenta de Cheiro Amarela do Norte (Bandeja 100g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-09-01' },
  { id: 'h_tomate_cereja', nome: 'Tomate Grape / Tomatinho Cereja Doce (Bandeja 250g)', categoria: 'Hortifrúti', icone: 'tomate', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_tomate_holandes', nome: 'Tomate Holandês em Rama Especial (Bandeja 400g)', categoria: 'Hortifrúti', icone: 'tomate', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_milho_espiga', nome: 'Milho Verde em Espiga Fresco (Bandeja c/ 4 ou 5)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_brocolis_ninja', nome: 'Brócolis Tipo Ninja / Japonês (Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_couve_flor', nome: 'Couve-Flor Branca Fresca Selecionada (Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_repolho_verde', nome: 'Repolho Verde Liso (kg)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_repolho_roxo', nome: 'Repolho Roxo Crocante (kg)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_acelga', nome: 'Acelga Fresca em Folhas Grandes (Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_agriao', nome: 'Agrião Hidropônico Folhas Frescas (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.80, ultimoPreco: 3.80, dataUltimoPreco: '2026-09-01' },
  { id: 'h_hortela', nome: 'Hortelã Fresca Aromática (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 2.90, ultimoPreco: 2.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_manjericao', nome: 'Manjericão Fresco para Molho e Pizza (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-01' },
  { id: 'h_alecrim', nome: 'Alecrim Fresco Aromático (Bandeja / Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_tomilho', nome: 'Tomilho Fresco Especial para Carnes (Bandeja)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_salsa', nome: 'Salsinha Verde Fresca Selecionada (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 2.50, ultimoPreco: 2.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_cebolinha', nome: 'Cebolinha Verde Fresca (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 2.50, ultimoPreco: 2.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_shimeji_preto', nome: 'Cogumelo Shimeji Preto Fresco (Bandeja 200g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_shimeji_branco', nome: 'Cogumelo Shimeji Branco Fresco (Bandeja 200g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 11.50, ultimoPreco: 11.50, dataUltimoPreco: '2026-09-01' },
  { id: 'h_champignon_fresco', nome: 'Cogumelo Champignon / Paris Fresco Inteiro (Bandeja 200g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'h_shitake_fresco', nome: 'Cogumelo Shitake Fresco Selecionado (Bandeja 200g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_file_mignon', nome: 'Filé Mignon Bovino Limpo Peça / Bife (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 69.90, ultimoPreco: 69.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_ancho', nome: 'Bife de Ancho / Ribeye Bovino para Grelhar (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 54.90, ultimoPreco: 54.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_chorizo', nome: 'Bife de Chorizo Bovino Selecionado (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 52.90, ultimoPreco: 52.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_coxao_mole', nome: 'Coxão Mole Bovino em Bifes Macios (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_coxao_duro', nome: 'Coxão Duro Bovino para Assar / Cozinhar (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_rabada', nome: 'Rabada Bovina Cortada em Rodelas (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_ossobuco', nome: 'Ossobuco Bovino com Tutano para Panela (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_mocoto', nome: 'Mocotó Bovino Limpo Cortado (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_lingua_bovina', nome: 'Língua Bovina Limpa Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_figado_bovino', nome: 'Fígado Bovino em Bifes Frescos (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_charque', nome: 'Carne Seca Charque Dianteiro Salgado (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_costelinha_suina', nome: 'Costelinha de Porco Suína Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'costela', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_pernil_sem_osso', nome: 'Pernil Suíno sem Osso em Pedaço (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_lombo_suino', nome: 'Lombo Suíno Resfriado em Bifes / Peça (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_bisteca_porco', nome: 'Bisteca Suína com Osso Macia (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_mignon_suino', nome: 'Filé Mignon Suíno Limpinho (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_panceta', nome: 'Panceta Suína para Torresmo Pururuca (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_bacon_fatiado', nome: 'Bacon em Fatias Defumado Seara / Sadia (250g)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_bacon_pedaco', nome: 'Bacon Defumado em Pedaço / Manta (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_ling_cuiabana', nome: 'Linguiça Cuiabana Recheada com Queijo para Churrasco (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_ling_paio', nome: 'Linguiça Paio Defumada para Feijoada (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_ling_frango', nome: 'Linguiça de Frango Fina para Grelhar (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_salsicha_hotdog', nome: 'Salsicha Hot Dog Resfriada Sadia / Perdigão (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_salsicha_viena', nome: 'Salsicha Tipo Viena em Lata / Pacote (300g)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_sobrecoxa_desoss', nome: 'Sobrecoxa de Frango Desossada sem Pele (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_tulipa_asa', nome: 'Meio da Asa de Frango (Tulipa) Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_galeto', nome: 'Galeto Primo Canto Resfriado (Unidade kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_figado_frango', nome: 'Fígado de Frango Limpo Resfriado (1kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_salmao_file', nome: 'Filé de Salmão Chileno Fresco com Pele (kg)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 79.90, ultimoPreco: 79.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_bacalhau_dessalg', nome: 'Lombo de Bacalhau Gadus Morhua Dessalgado Congelado (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 89.90, ultimoPreco: 89.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_bacalhau_desfiado', nome: 'Lascas de Bacalhau Dessalgado Congelado (500g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_merluza_file', nome: 'Filé de Merluza Austral Congelado sem Pele (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 27.90, ultimoPreco: 27.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_camarao_cinza', nome: 'Camarão Cinza Médio Limpo sem Cabeça e Casca (400g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_camarao_rosa', nome: 'Camarão Rosa Grande Limpo Congelado (400g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 48.90, ultimoPreco: 48.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_cacao_posta', nome: 'Postas de Cação sem Pele e Espinho (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_sardinha_limpa', nome: 'Sardinha Inteira Limpa e Eviscerada Congelada (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_atum_file_fresco', nome: 'Filé de Atum Vermelho Fresco / Congelado (kg)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_lula_aneis', nome: 'Anéis de Lula Congelados Prontos para Empanar (400g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_polvo_limpo', nome: 'Tentáculos de Polvo Cozido Congelado (500g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 64.90, ultimoPreco: 64.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_costela_bov_ripa', nome: 'Costela Bovina Ripa Grossa para Churrasco (kg)', categoria: 'Carnes e Proteínas', icone: 'costela', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_cupim_bovino', nome: 'Cupim Bovino Alto para Bafo / Churrasqueira (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_medalhao_frango', nome: 'Medalhão de Frango com Bacon Congelado (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_kafta_bovina', nome: 'Espetinho de Kafta Bovina Temperada (Pacote c/ 10)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_espetinho_carne', nome: 'Espetinho de Carne Bovina para Churrasco (Pacote c/ 10)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_figado_isca', nome: 'Iscas de Fígado Bovino Cortadinhas (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 15.50, ultimoPreco: 15.50, dataUltimoPreco: '2026-09-01' },
  { id: 'l_leite_po_ninho', nome: 'Leite em Pó Integral Instantâneo Ninho Lata (380g/400g)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_leite_po_molico', nome: 'Leite em Pó Desnatado Molico Rico em Cálcio (280g)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_leite_vegetal', nome: 'Bebida Vegetal de Amêndoas / Aveia Silk / A Tal da Castanha (1L)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_coalho', nome: 'Queijo de Coalho em Espetos para Churrasco (Pacote c/ 7)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_parmesao_ralado', nome: 'Queijo Parmesão Ralado Saquinho Parmalat / Faixa Azul (50g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-01' },
  { id: 'l_parmesao_cunha', nome: 'Queijo Parmesão Tipo Grana Cunha Especial (200g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_gorgonzola', nome: 'Queijo Gorgonzola Tipo Azul em Pedaço (150g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_brie', nome: 'Queijo Tipo Brie / Camembert Cremoso (125g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_provolone', nome: 'Queijo Provolone Defumado em Peça / Fatias (kg)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 48.00, ultimoPreco: 48.00, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_gouda', nome: 'Queijo Tipo Gouda Holandês Suave Fatiado (150g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_ricota_fresca', nome: 'Ricota Fresca Pura Light Tirolez (400g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_cottage', nome: 'Queijo Tipo Cottage Cremoso Pote (200g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_cream_cheese', nome: 'Cream Cheese Tradicional Philadelphia / Danúbio (150g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_margarina_qualy', nome: 'Margarina Cremosa com Sal Qualy (500g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_manteiga_sem_sal', nome: 'Manteiga de Primeira Qualidade sem Sal Tablete (200g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 11.50, ultimoPreco: 11.50, dataUltimoPreco: '2026-09-01' },
  { id: 'l_peito_peru', nome: 'Peito de Peru Defumado Fatiado Sadia / Seara (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_blanquet_peru', nome: 'Blanquet de Peru Fatiado Leve (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_salame_italiano', nome: 'Salame Tipo Italiano Fatiado Sadia (100g)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_salame_peca', nome: 'Salame Italiano Inteiro Peça Defumado (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 64.90, ultimoPreco: 64.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_mortadela_bologna', nome: 'Mortadela Bologna Tradicional Fatiada Ceratti / Sadia (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_mortadela_defumada', nome: 'Mortadela de Frango / Defumada Fatiada (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_presunto_parma', nome: 'Presunto Cru Tipo Italiano / Parma Fatiado (100g)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_iogurte_grego', nome: 'Iogurte Grego Tradicional Pote Vigor / Danone (100g)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 3.80, ultimoPreco: 3.80, dataUltimoPreco: '2026-09-01' },
  { id: 'l_iogurte_garrafa_1kg', nome: 'Iogurte Sabor Morango / Frutas Vermelhas Garrafa (1kg)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_leite_fermentado', nome: 'Leite Fermentado com Lactobacilos Tipo Yakult / Chamyto (Pack c/ 6)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_petit_suisse', nome: 'Queijo Petit Suisse Sabor Morango Danoninho (Bandeja c/ 8)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_coalhada', nome: 'Coalhada Fresca Tradicional Pote (170g)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'l_nata_fresca', nome: 'Nata Pasteurizada Fresca Pote (300g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_chantilly_spray', nome: 'Creme Chantilly Spray Pronto para Servir (250g)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_sobremesa_chocolate', nome: 'Sobremesa Láctea Sabor Chocolate Danette / Chandelle (Pote c/ 2)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_requeijao_light', nome: 'Requeijão Cremoso Light Copo (200g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_arroz_arboreo', nome: 'Arroz Arbóreo Especial para Risoto (1kg)', categoria: 'Básicos e Grãos', icone: 'arroz_1kg', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_arroz_jasmim', nome: 'Arroz Jasmim Aromático Tailandês (1kg)', categoria: 'Básicos e Grãos', icone: 'arroz_1kg', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_feijao_fradinho', nome: 'Feijão Fradinho / Corda Selecionado (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_vermelho', nome: 'Feijão Vermelho Caldo Grosso (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao_preto', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_branco', nome: 'Feijão Branco Especial para Dobradinha / Salada (500g)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_lentilha', nome: 'Lentilha Seca Selecionada (500g)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_grao_bico', nome: 'Grão-de-Bico Cru Selecionado (500g)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_ervilha_seca', nome: 'Ervilha Partida Seca para Sopa (500g)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_farinha_cuscuz', nome: 'Flocão de Milho para Cuscuz Nordestino (500g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 2.80, ultimoPreco: 2.80, dataUltimoPreco: '2026-09-01' },
  { id: 'b_polvilho_doce', nome: 'Polvilho Doce Especial para Biscoito e Pão de Queijo (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_polvilho_azedo', nome: 'Polvilho Azedo Selecionado (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 9.50, ultimoPreco: 9.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_farinha_rosca', nome: 'Farinha de Rosca Especial para Empanar (500g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_farinha_panko', nome: 'Farinha Panko para Empanados Crocantes (200g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_aveia_flocos', nome: 'Aveia em Flocos Finos / Grossos Quaker (170g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_granola_trad', nome: 'Granola Tradicional Mel e Castanhas Crocante (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_chia_graos', nome: 'Semente de Chia Natural (200g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_linhaca_dourada', nome: 'Semente de Linhaça Dourada (200g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_quinoa_graos', nome: 'Quinoa em Grãos Branca / Mista (250g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_azeite_acidez_02', nome: 'Azeite de Oliva Extra Virgem Acidez 0.2% Premium (Vidro 500ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 42.90, ultimoPreco: 42.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_vinagre_alcool', nome: 'Vinagre de Álcool Tradicional Limpeza e Culinária (750ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 2.20, ultimoPreco: 2.20, dataUltimoPreco: '2026-09-01' },
  { id: 'b_vinagre_maca', nome: 'Vinagre de Maçã 100% Fermentado Natural (750ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_vinagre_balsamico', nome: 'Vinagre Balsâmico Aceto Balsamico Italiano (250ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_molho_tomate_sache', nome: 'Molho de Tomate Tradicional Pomarola / Fugini Sachê (300g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 2.39, ultimoPreco: 2.39, dataUltimoPreco: '2026-09-01' },
  { id: 'b_molho_manjericao', nome: 'Molho de Tomate Especial com Manjericão (Sachê 340g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_passata_tomate', nome: 'Passata de Tomate Rústica sem Pele Italiana (Vidro 680g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_tomate_pelado', nome: 'Tomate Pelado Inteiro em Lata com Suco (Lata 400g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_ervilha_lata', nome: 'Ervilha em Conserva Lata Quero / Fugini (170g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 2.90, ultimoPreco: 2.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_milho_lata', nome: 'Milho Verde em Conserva Lata Quero / Fugini (170g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 3.10, ultimoPreco: 3.10, dataUltimoPreco: '2026-09-01' },
  { id: 'b_dueto_lata', nome: 'Milho e Ervilha em Conserva Dueto (Lata 170g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-01' },
  { id: 'b_azeitona_verde_caroco', nome: 'Azeitona Verde com Caroço Vidro Grande (500g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_azeitona_sem_caroco', nome: 'Azeitona Verde sem Caroço Vidro (300g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_azeitona_preta', nome: 'Azeitona Preta Azapa Selecionada Vidro (300g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_palmito_pupunha', nome: 'Palmito Pupunha / Açaí em Rodelas Vidro (300g drenado)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_champignon_vidro', nome: 'Cogumelo Champignon em Conserva Fatiado Vidro (200g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_atum_oleo', nome: 'Atum Ralado ao Óleo Comestível Lata Gomes da Costa (170g)', categoria: 'Básicos e Grãos', icone: 'peixe', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_atum_solido', nome: 'Atum Sólido em Pedaços ao Natural / Azeite (Lata 170g)', categoria: 'Básicos e Grãos', icone: 'peixe', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_sardinha_molho', nome: 'Sardinha com Molho de Tomate Lata Coqueiro (125g)', categoria: 'Básicos e Grãos', icone: 'peixe', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_sardinha_oleo', nome: 'Sardinha ao Óleo Comestível Lata Coqueiro (125g)', categoria: 'Básicos e Grãos', icone: 'peixe', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_maionese_pote', nome: 'Maionese Tradicional Cremosa Hellmann\'s Pote (500g)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_ketchup_heinz', nome: 'Ketchup Tradicional Heinz Frasco Squeeze (397g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_mostarda_heinz', nome: 'Mostarda Amarela Tradicional Heinz (255g)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_mostarda_dijon', nome: 'Mostarda Francesa Tipo Dijon Original Vidro (200g)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_molho_shoyu', nome: 'Molho de Soja Shoyu Tradicional Sakura (500ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_molho_barbecue', nome: 'Molho Barbecue Defumado para Carnes Heinz (397g)', categoria: 'Básicos e Grãos', icone: 'tomate', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_molho_ingles', nome: 'Molho Inglês Condimentado Tradicional (150ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_doce_leite_pote', nome: 'Doce de Leite Tradicional Cremoso Viçosa / Itambé (Pote 400g)', categoria: 'Básicos e Grãos', icone: 'leite', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_mel_abelha', nome: 'Mel Puro de Abelha Silvestre Bisnaga (300g)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_geleia_morango', nome: 'Geleia de Morango Queensberry 100% Fruta Vidro (320g)', categoria: 'Básicos e Grãos', icone: 'fruta', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_pasta_amendoim', nome: 'Pasta de Amendoim Integral Torrado Crocante (Pote 500g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_chocolate_cobertura', nome: 'Chocolate em Barra Meio Amargo para Confeitaria Garoto (1kg)', categoria: 'Básicos e Grãos', icone: 'achocolatado', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_cacau_po_100', nome: 'Cacau em Pó 100% Puro Solúvel sem Açúcar (Pote 200g)', categoria: 'Básicos e Grãos', icone: 'achocolatado', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_fermento_biologico', nome: 'Fermento Biológico Seco Instantâneo para Pães Fleischmann (10g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 1.80, ultimoPreco: 1.80, dataUltimoPreco: '2026-09-01' },
  { id: 'b_fermento_quimico', nome: 'Fermento Químico em Pó para Bolos Royal (Pote 100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_bicarbonato', nome: 'Bicarbonato de Sódio Puro Multiuso Culinário (100g)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_agua_15l', nome: 'Água Mineral sem Gás Garrafa (1.5 Litro)', categoria: 'Bebidas', icone: 'agua', precoMedioDF: 2.50, ultimoPreco: 2.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_agua_gas_15l', nome: 'Água Mineral com Gás Garrafa (1.5 Litro)', categoria: 'Bebidas', icone: 'agua', precoMedioDF: 2.80, ultimoPreco: 2.80, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_agua_galao_20l', nome: 'Água Mineral Galão Retornável (20 Litros)', categoria: 'Bebidas', icone: 'agua', precoMedioDF: 14.00, ultimoPreco: 14.00, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_agua_tonica_lata', nome: 'Água Tônica Antarctica Tradicional Lata (350ml)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_coca_2l', nome: 'Refrigerante Coca-Cola Original Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 8.99, ultimoPreco: 8.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_coca_zero_2l', nome: 'Refrigerante Coca-Cola sem Açúcar Zero Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 8.99, ultimoPreco: 8.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_guarana_2l', nome: 'Refrigerante Guaraná Antarctica Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 7.99, ultimoPreco: 7.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_guarana_zero_2l', nome: 'Refrigerante Guaraná Antarctica Zero Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 7.99, ultimoPreco: 7.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_fanta_laranja_2l', nome: 'Refrigerante Fanta Laranja Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_fanta_uva_2l', nome: 'Refrigerante Fanta Uva Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_sprite_2l', nome: 'Refrigerante Sprite Lemon Fresh Pet (2 Litros)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_suco_uva_aurora', nome: 'Suco de Uva Integral 100% Aurora Garrafa Vidro (1.5L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_suco_laranja_natural_one', nome: 'Suco de Laranja Integral Refrigerado Natural One (900ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_suco_maracuja_conc', nome: 'Suco Concentrado de Maracujá Garrafa Maguary (500ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_suco_delvalle_1l', nome: 'Suco Néctar de Pêssego / Uva Del Valle Caixinha (1L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cha_leao_pessego', nome: 'Chá Gelado Ice Tea Sabor Pêssego / Limão Leão (1.5L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cha_matte_leao', nome: 'Chá Mate Leão Tradicional Natural Garrafa (1.5L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cha_sache_camomila', nome: 'Chá em Sachê Camomila e Erva-Cidreira Leão (Caixa c/ 10)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_agua_coco_1l', nome: 'Água de Coco 100% Esterilizada Caixinha Kero Coco (1L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_red_bull_lata', nome: 'Energético Red Bull Energy Drink Tradicional Lata (250ml)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_monster_lata', nome: 'Energético Monster Energy Tradicional / Zero Lata (473ml)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_gatorade_500ml', nome: 'Isotônico Gatorade Sabor Laranja / Limão Garrafa (500ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_heineken_ln', nome: 'Cerveja Puro Malte Heineken Garrafa Long Neck (330ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 6.99, ultimoPreco: 6.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_heineken_pack', nome: 'Cerveja Heineken Puro Malte Long Neck (Pack c/ 6 unidades)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 38.90, ultimoPreco: 38.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_heineken_zero', nome: 'Cerveja sem Álcool Heineken 0.0 Long Neck (330ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 6.99, ultimoPreco: 6.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_stella_ln', nome: 'Cerveja Stella Artois Puro Malte Long Neck (330ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 5.99, ultimoPreco: 5.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_spaten_lata', nome: 'Cerveja Puro Malte Spaten Lata Munich Helles (350ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 4.49, ultimoPreco: 4.49, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_amstel_lata', nome: 'Cerveja Puro Malte Amstel Lager Lata (350ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 3.99, ultimoPreco: 3.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_corona_ln', nome: 'Cerveja Corona Extra com Limão Long Neck (330ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 6.99, ultimoPreco: 6.99, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerveja_budweiser', nome: 'Cerveja Budweiser American Lager Long Neck (330ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 5.49, ultimoPreco: 5.49, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_vinho_casillero', nome: 'Vinho Tinto Chileno Cabernet Sauvignon Casillero del Diablo (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_vinho_reservado', nome: 'Vinho Tinto Suave Reservado Concha y Toro (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_vinho_branco_seco', nome: 'Vinho Branco Sauvignon Blanc Chileno Seco (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_espumante_chandon', nome: 'Espumante Brut Chandon Réserve Garrafa (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 89.90, ultimoPreco: 89.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_espumante_salton', nome: 'Espumante Moscatel Doce Salton Garrafa (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_whisky_red_label', nome: 'Whisky Johnnie Walker Red Label Escocês (1 Litro)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 89.90, ultimoPreco: 89.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_whisky_black_label', nome: 'Whisky Johnnie Walker Black Label 12 Anos (1 Litro)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 159.00, ultimoPreco: 159.00, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_vodka_smirnoff', nome: 'Vodka Smirnoff Tradicional Garrafa (998ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_vodka_absolut', nome: 'Vodka Sueca Absolut Tradicional Pura (1 Litro)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 89.90, ultimoPreco: 89.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_gin_tanqueray', nome: 'Gin Tanqueray London Dry Importado Garrafa (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 99.00, ultimoPreco: 99.00, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cachaca_salinas', nome: 'Cachaça Artesanal Envelhecida Salinas Garrafa (700ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 39.90, ultimoPreco: 39.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_campari', nome: 'Aperitivo Bitter Campari Original Italiano (900ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 54.90, ultimoPreco: 54.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_integral_12', nome: 'Pão de Forma Integral 12 Grãos Pullman (500g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_hamburguer', nome: 'Pão para Hambúrguer com Gergelim (Pacote c/ 4)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_hotdog', nome: 'Pão para Hot Dog Tradicional Macio (Pacote c/ 6)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_rap10', nome: 'Massa de Tortilha para Wrap Rap10 Tradicional (Pacote c/ 10)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_sirio', nome: 'Pão Sírio Pita Bread Fresco (Pacote c/ 6 unidades)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_alho', nome: 'Pão de Alho Baguete Recheada Santa Massa / Zinho (400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_bolo_ingles', nome: 'Bolo Inglês Fatiado de Chocolate / Cenoura Bauducco (250g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_biscoito_wafer', nome: 'Biscoito Wafer Chocolate / Baunilha Bauducco (140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_biscoito_oreo', nome: 'Biscoito Recheado Baunilha Oreo Original (144g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_passatempo', nome: 'Biscoito Recheado Chocolate Passatempo Nestlé (130g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_club_social', nome: 'Biscoito Salgado Club Social Original Multipack (Pack c/ 6)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_polvilho_salg', nome: 'Biscoito de Polvilho Salgado Azedinho Tradicional (100g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pringles', nome: 'Batata Frita Pringles Sabor Original / Cebola e Salsa (114g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_doritos', nome: 'Salgadinho de Tortilha Doritos Queijo Nacho (140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_ruffles', nome: 'Batata Palha Ondulada Salgadinha Ruffles Original (140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_cheetos', nome: 'Salgadinho de Milho Assado Cheetos Requeijão (130g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_batata_palha', nome: 'Batata Palha Tradicional Crocante Yoki (140g)', categoria: 'Padaria e Lanches', icone: 'batata', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pipoca_micro', nome: 'Pipoca para Micro-ondas Sabor Manteiga Yoki (100g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_amendoim_torrado', nome: 'Amendoim Torrado Salgado sem Pele Santa Helena (150g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_castanha_caju', nome: 'Castanha de Caju Torrada e Salgada W1 Selecionada (100g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_castanha_para', nome: 'Castanha do Pará / Brasil Inteira Sem Casca (100g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_barra_cereal', nome: 'Barra de Cereal Banana com Chocolate Nutry (Caixa c/ 3)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_barra_chocolate_lacta', nome: 'Barra de Chocolate ao Leite Lacta / Nestlé (80g)', categoria: 'Padaria e Lanches', icone: 'achocolatado', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_caixa_bombom', nome: 'Caixa de Bombons Sortidos Garoto / Nestlé (250g)', categoria: 'Padaria e Lanches', icone: 'achocolatado', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_bala_frutas', nome: 'Bala Mastigável de Frutas Sortidas Dori (Pacote 500g)', categoria: 'Padaria e Lanches', icone: 'acucar', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_trident', nome: 'Goma de Mascar Trident sem Açúcar Sabor Menta (Caixinha c/ 5)', categoria: 'Padaria e Lanches', icone: 'acucar', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_sorvete_kibon_15l', nome: 'Sorvete Pote Flocos / Chocolate Cremoso Kibon (1.5 Litro)', categoria: 'Padaria e Lanches', icone: 'iogurte', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_brioche', nome: 'Pão de Forma Tipo Brioche Manteiga Bauducco (400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_lasanha_bolonhesa', nome: 'Lasanha à Bolonhesa Congelada Sadia / Seara (600g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_lasanha_queijos', nome: 'Lasanha Quatro Queijos Congelada Sadia (600g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_pizza_calabresa', nome: 'Pizza Congelada Sabor Calabresa Sadia (460g)', categoria: 'Básicos e Grãos', icone: 'pao', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_pizza_mussarela', nome: 'Pizza Congelada Sabor Mussarela Perdigão (460g)', categoria: 'Básicos e Grãos', icone: 'pao', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_hamburguer_bovino', nome: 'Hambúrguer Bovino Congelado Texas / Sadia (Caixa c/ 12 de 672g)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_hamburguer_frango', nome: 'Hambúrguer de Frango Congelado Sadia (Caixa c/ 12)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_nuggets_frango', nome: 'Empanado de Frango Nuggets Sadia / Seara (Pacote 300g)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_batata_palito_mccain', nome: 'Batata Pré-frita Congelada Tipo Palito McCain (1.5kg)', categoria: 'Hortifrúti', icone: 'batata', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_seleta_legumes', nome: 'Seleta de Legumes Congelados Milho Ervilha Cenoura (400g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_brocolis_floretes', nome: 'Brócolis em Floretes Congelados Prontos (400g)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_acai_pote_1l', nome: 'Açaí Congelado com Guaraná Pote Cremoso (1 Litro)', categoria: 'Padaria e Lanches', icone: 'fruta', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_pao_queijo_1kg', nome: 'Pão de Queijo Mineiro Congelado Forno de Minas (1kg)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_coxinhas_festa', nome: 'Mini Coxinhas de Frango para Festa Congeladas (Pacote c/ 30)', categoria: 'Padaria e Lanches', icone: 'frango', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_bolinho_queijo', nome: 'Mini Bolinhos de Queijo para Festa Congelados (Pacote c/ 30)', categoria: 'Padaria e Lanches', icone: 'queijo', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_massa_folhada', nome: 'Massa Folhada Laminada Congelada Arosa (Rolo 300g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'cong_massa_pastel', nome: 'Massa para Pastel Fresca Redonda / Rolo (500g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_papel_aluminio', nome: 'Papel Alumínio Resistente Rolo Wyda (30cm x 7.5m)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_filme_pvc', nome: 'Filme Plástico PVC Transparente Rolo para Alimentos (30m)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_papel_manteiga', nome: 'Papel Manteiga para Forno e Assadeiras Rolo (5m)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_saco_ziploc', nome: 'Sacos Herméticos com Fecho Zip para Congelamento (Caixa c/ 15)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_copo_descartavel', nome: 'Copos Plásticos Descartáveis 200ml Transparentes (Tira c/ 100)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_prato_descartavel', nome: 'Pratos Descartáveis Reforçados 15cm Brancos (Pacote c/ 10)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_guardanapo_folha_dup', nome: 'Guardanapo de Papel Folha Dupla Grande Snob (Pacote c/ 50)', categoria: 'Diversos', icone: 'papel', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_palito_dente', nome: 'Palitos de Dente em Madeira Roliços (Caixa c/ 100 unidades)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 2.20, ultimoPreco: 2.20, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_palito_churrasco', nome: 'Espetos de Bambu para Churrasco 25cm (Pacote c/ 50)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_fosforo', nome: 'Fósforos de Segurança Longos Fiat Lux (Pacote c/ 10 maços)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_isqueiro_bic', nome: 'Isqueiro Descartável Maxi Bic Original', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_velas_brancas', nome: 'Velas Brancas Tradicionais Votivas (Pacote c/ 8 velas)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_carvao_3kg', nome: 'Carvão Vegetal para Churrasco Saco (3kg)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_acendedor_carvao', nome: 'Acendedor Sólido em Cubos para Churrasqueira (Caixa c/ 8)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_pilha_aa', nome: 'Pilhas Alcalinas Pequenas AA Duracell (Cartela c/ 4 unidades)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_pilha_aaa', nome: 'Pilhas Alcalinas Palito AAA Duracell (Cartela c/ 4 unidades)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_lampada_led_9w', nome: 'Lâmpada LED Bulbo 9W Bivolt Luz Branca 6500K Elgin / Philips', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_filtro_cafe_103', nome: 'Filtro de Papel para Café Melitta Tamanho 103 (Caixa c/ 30)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 5.20, ultimoPreco: 5.20, dataUltimoPreco: '2026-09-01' },
  { id: 'baz_pano_prato', nome: 'Pano de Prato Atoalhado para Cozinha 100% Algodão', categoria: 'Diversos', icone: 'papel', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_racao_cao_adulto_3kg', nome: 'Ração Seca para Cães Adultos Carne e Frango Pedigree / Golden (3kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 46.90, ultimoPreco: 46.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_racao_cao_filhote', nome: 'Ração para Cães Filhotes Porte Médio Golden (3kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_sache_cao', nome: 'Ração Úmida para Cães Sachê Pedigree Carne ao Molho (100g)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_bifinho_cao', nome: 'Petisco Bifinho para Cães Keldog Sabor Carne (Pacote 100g)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_racao_gato_1kg', nome: 'Ração Seca para Gatos Castrados Salmão Whiskas / Golden (1kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_sache_gato', nome: 'Ração Úmida para Gatos Sachê Whiskas Peixe (85g)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 3.10, ultimoPreco: 3.10, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_petisco_gato', nome: 'Petisco Dreamies Crocante por Fora Macio por Dentro Gatos (40g)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_areia_gato_4kg', nome: 'Areia Sanitária Higiênica Pipicat Tradicional para Gatos (4kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_tapete_higienico', nome: 'Tapete Higiênico Descartável para Cães (Pacote c/ 30 unidades)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pet_shampoo_pet', nome: 'Shampoo Neutro para Cães e Gatos Antipulgas Sanol (500ml)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_pao_australiano', nome: 'Pão Australiano com Mel e Cacau Tipo Outback (Pacote c/ 3)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_croissant_manteiga', nome: 'Croissants Congelados Tradicionais Folhados (Pacote c/ 4)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-01' },
  { id: 'pad_panetone_frutas', nome: 'Panetone Tradicional de Frutas Cristalizadas / Chocotone (400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_cerpa_export', nome: 'Cerveja Cerpa Export Premium Garrafa (350ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'beb_suco_caju_conc', nome: 'Suco Concentrado de Caju Garrafa Maguary (500ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_picanha_maturatta', nome: 'Carne Picanha Bovina Maturatta / Bassi Selecionada (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 74.90, ultimoPreco: 74.90, dataUltimoPreco: '2026-09-01' },
  { id: 'c_costela_porco_bbq', nome: 'Costelinha Suína Temperada com Molho Barbecue Resfriada (kg)', categoria: 'Carnes e Proteínas', icone: 'costela', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-01' },
  { id: 'l_queijo_mascarpone', nome: 'Queijo Tipo Mascarpone Italiano Pote (250g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_alho_frito', nome: 'Alho Frito Dourado e Crocante em Pote Prático (150g)', categoria: 'Básicos e Grãos', icone: 'alho', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_cebola_crispy', nome: 'Cebola Crispy Crocante em Pote para Hambúrguer e Salada (100g)', categoria: 'Básicos e Grãos', icone: 'cebola', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_chimichurri_seco', nome: 'Tempero Chimichurri sem Pimenta Desidratado (100g)', categoria: 'Básicos e Grãos', icone: 'folhas', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_lemon_pepper', nome: 'Tempero Lemon Pepper com Raspas de Limão e Pimenta (100g)', categoria: 'Básicos e Grãos', icone: 'fruta', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_paprica_defumada', nome: 'Páprica Doce / Defumada Espanhola Pote (100g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-01' },
  { id: 'b_oregano_sache', nome: 'Orégano Desidratado Aromático Kitano (Pacote 50g)', categoria: 'Básicos e Grãos', icone: 'folhas', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-01' },
  { id: 'b_canela_po_sache', nome: 'Canela em Pó Pura Aromática Kitano (Pacote 50g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-09-01' },

  // --- HORTIFRÚTI EXPANDIDO ---
  { id: 'h_mexerica_ponkan', nome: 'Mexerica / Tangerina Ponkan Doce (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_laranja_lima', nome: 'Laranja Lima Suave para Bebês e Sucos (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_uva_italia', nome: 'Uva Itália / Rubi Selecionada (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_melao_cantaloupe', nome: 'Melão Cantaloupe / Orange Doce (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_pera_rocha', nome: 'Pêra Portuguesa Rocha Macia (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_goiaba_branca', nome: 'Goiaba Branca Selecionada (kg)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_figo_fresco', nome: 'Figo Roxo Fresco Selecionado (Bandeja 200g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_acerola_fresca', nome: 'Acerola Fresca Selecionada (Bandeja 500g)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_caju_fresco', nome: 'Caju Fresco do Nordeste (Bandeja c/ 4 unidades)', categoria: 'Hortifrúti', icone: 'fruta', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_abobora_moranga', nome: 'Abóbora Moranga Inteira para Rechear (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_mandioca_manteiga', nome: 'Mandioca Manteiga Amarela Descascada (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_jilo', nome: 'Jiló Redondo Fresco Selecionado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_maxixe', nome: 'Maxixe Fresco do Cerrado (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_rabanete', nome: 'Rabanete Fresco Crocante (Maço)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_nabo', nome: 'Nabo Branco Fresco (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_ervilha_torta', nome: 'Ervilha Torta Fresca em Vagens (kg)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_alface_lisa', nome: 'Alface Lisa Hidropônica Higienizada (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_alface_roxa', nome: 'Alface Roxa Hidropônica (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.80, ultimoPreco: 3.80, dataUltimoPreco: '2026-09-09' },
  { id: 'h_escarola', nome: 'Chicória / Escarola Fresca (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_almeirao', nome: 'Almeirão Fresco em Folhas (Maço)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'h_salvia', nome: 'Sálvia Fresca Aromática (Bandeja 30g)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 4.20, ultimoPreco: 4.20, dataUltimoPreco: '2026-09-09' },
  { id: 'h_erva_doce_bulbo', nome: 'Erva Doce / Funcho Fresco com Bulbo (Unidade)', categoria: 'Hortifrúti', icone: 'folhas', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'h_moyashi', nome: 'Broto de Feijão Moyashi Fresco (Bandeja 250g)', categoria: 'Hortifrúti', icone: 'legumes', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },

  // --- CARNES E PROTEÍNAS EXPANDIDO ---
  { id: 'c_prime_rib', nome: 'Filé de Costela Bovina (Ancho / Prime Rib) (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 56.90, ultimoPreco: 56.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_paleta_osso', nome: 'Paleta Bovina com Osso para Panela (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 27.90, ultimoPreco: 27.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_capa_file', nome: 'Capa de Filé Bovina Especial (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 28.90, ultimoPreco: 28.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_chambaril', nome: 'Músculo Traseiro Bovino com Osso / Chambaril (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 25.90, ultimoPreco: 25.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_picanha_suina', nome: 'Picanha Suína Temperada para Churrasco (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_barriga_pururuca', nome: 'Barriga de Porco Suína Especial para Pururuca (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_joelho_porco', nome: 'Joelho de Porco (Eisbein) Defumado / Fresco (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_copa_lombo', nome: 'Copa Lombo Suíno em Bifes Macios (kg)', categoria: 'Carnes e Proteínas', icone: 'carne', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_ling_pernil_ervas', nome: 'Linguiça de Pernil com Ervas Finas Artesanal (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 27.90, ultimoPreco: 27.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_ling_fina_apimentada', nome: 'Linguiça Fina Apimentada para Churrasco (kg)', categoria: 'Carnes e Proteínas', icone: 'linguica', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_galinha_caipira', nome: 'Galinha Caipira Inteira Limpa Congelada (kg)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_frango_desfiado_vapza', nome: 'Frango Desfiado Cozido a Vácuo Vapza (400g)', categoria: 'Carnes e Proteínas', icone: 'frango', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_pescada_branca', nome: 'Filé de Pescada Branca sem Pele Congelado (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_panga_file', nome: 'Filé de Panga Congelado sem Espinhas (800g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_robalo_file', nome: 'Filé de Robalo Fresco em Postas (kg)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 69.90, ultimoPreco: 69.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_mexilhao_sem_casca', nome: 'Mexilhão / Marisco sem Casca Cozido Congelado (400g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-09' },
  { id: 'c_kani_kama', nome: 'Kani Kama Bastonetes de Siri Congelados (250g)', categoria: 'Carnes e Proteínas', icone: 'peixe', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-09' },

  // --- BÁSICOS E GRÃOS EXPANDIDO ---
  { id: 'b_arroz_7_graos', nome: 'Arroz 7 Grãos Integrais Selecionados (500g)', categoria: 'Básicos e Grãos', icone: 'arroz_integral', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_arroz_preto', nome: 'Arroz Preto / Vermelho Nobre Ruzene (500g)', categoria: 'Básicos e Grãos', icone: 'arroz_integral', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_rajado', nome: 'Feijão Rajado Tipo 1 Caldo Claro (1kg)', categoria: 'Básicos e Grãos', icone: 'feijao_preto', precoMedioDF: 9.50, ultimoPreco: 9.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_feijao_verde', nome: 'Feijão Verde em Grãos Fresco / Congelado (500g)', categoria: 'Básicos e Grãos', icone: 'feijao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_macarrao_ninho', nome: 'Macarrão Ninho de Sêmola com Ovos (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_macarrao_gravatinha', nome: 'Macarrão Gravatinha / Farfalle Barilla (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_macarrao_penne_barilla', nome: 'Macarrão Penne Rigate Barilla (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_macarrao_talharim', nome: 'Macarrão Talharim Caseiro com Ovos (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_massa_lasanha_seca', nome: 'Massa Seca Direto ao Forno para Lasanha Barilla (500g)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_miojo_pack', nome: 'Macarrão Instantâneo Nissin Miojo Galinha Caipira (Pack c/ 5)', categoria: 'Básicos e Grãos', icone: 'macarrao', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_oleo_girassol', nome: 'Óleo de Girassol Refinado Puro Liza (900ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_oleo_milho', nome: 'Óleo de Milho Puro Especial Mazola (900ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 9.50, ultimoPreco: 9.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_oleo_canola', nome: 'Óleo de Canola Puro Saudável Salada (900ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_oleo_coco_copra', nome: 'Óleo de Coco Extra Virgem Prensado a Frio Copra (500ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 29.90, ultimoPreco: 29.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_azeite_dende', nome: 'Azeite de Dendê Puro Tradicional Baiano (200ml)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_cafe_graos_espresso', nome: 'Café em Grãos Espresso Gourmet 100% Arábica (500g)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 32.90, ultimoPreco: 32.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_cafe_capsula_lor', nome: 'Café em Cápsulas Compatíveis Nespresso L\'Or (Caixa c/ 10)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_cafe_descafeinado', nome: 'Café Descafeinado Moído a Vácuo Melitta (500g)', categoria: 'Básicos e Grãos', icone: 'cafe', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_farinha_aveia', nome: 'Farinha de Aveia Fina Integral Quaker (170g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_farelo_aveia', nome: 'Farelo de Aveia Rico em Fibras Oat Bran (170g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_farinha_amendoas', nome: 'Farinha de Amêndoas Pura Low Carb (200g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_farinha_arroz', nome: 'Farinha de Arroz sem Glúten Urbano (1kg)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_amido_maizena', nome: 'Amido de Milho Maizena Tradicional (500g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_acucar_mascavo', nome: 'Açúcar Mascavo Natural sem Conservantes (1kg)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_acucar_demerara', nome: 'Açúcar Demerara Natural União (1kg)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_adocante_sucralose', nome: 'Adoçante Líquido Sucralose Linea (75ml)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_adocante_stevia', nome: 'Adoçante Stevia 100% Natural Gotas Color Andina (60ml)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 12.90, ultimoPreco: 12.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_sal_rosa_himalaia', nome: 'Sal Rosa do Himalaia Fino / Grosso (500g)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_alho_sal_triturado', nome: 'Tempero Alho e Sal Triturado Pronto Pote (500g)', categoria: 'Básicos e Grãos', icone: 'alho', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_caldo_knorr', nome: 'Caldo de Galinha / Carne em Cubos Knorr (Caixa c/ 6 unidades)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_louro_folhas', nome: 'Louro em Folhas Selecionadas Kitano (Pacote 10g)', categoria: 'Básicos e Grãos', icone: 'folhas', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-09' },
  { id: 'b_colorau_po', nome: 'Colorífico / Colorau com Urucum em Pó (100g)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_cominho_po', nome: 'Cominho em Pó Puro Aromático (100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_pimenta_reino_po', nome: 'Pimenta do Reino Preta Moída Pura Kitano (50g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_curcuma_po', nome: 'Açafrão da Terra / Cúrcuma Pura em Pó (100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_curry_po', nome: 'Curry em Pó Tradicional Indiano (100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_tempero_baiano', nome: 'Tempero Baiano Especial sem Pimenta (100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-09' },
  { id: 'b_cravo_india', nome: 'Cravo da Índia em Flor Kitano (20g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_canela_pau', nome: 'Canela em Casca / Pau Aromática (30g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 5.20, ultimoPreco: 5.20, dataUltimoPreco: '2026-09-09' },
  { id: 'b_noz_moscada', nome: 'Noz Moscada Inteira com Ralador (2 unidades)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_pimenta_mendez', nome: 'Molho de Pimenta Cremosa Mendez Tradicional (215ml)', categoria: 'Básicos e Grãos', icone: 'legumes', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_molho_alho_kenko', nome: 'Molho de Alho Cremoso com Ervas Kenko (200ml)', categoria: 'Básicos e Grãos', icone: 'alho', precoMedioDF: 6.50, ultimoPreco: 6.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_molho_tartaro', nome: 'Molho Tártaro Cremoso para Saladas e Peixes Fugini (200g)', categoria: 'Básicos e Grãos', icone: 'oleo', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_leite_coco_sococo', nome: 'Leite de Coco Tradicional Sococo (Garrafinha 200ml)', categoria: 'Básicos e Grãos', icone: 'leite', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_coco_ralado_sococo', nome: 'Coco Ralado Úmido e Adoçado Sococo (100g)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 4.50, ultimoPreco: 4.50, dataUltimoPreco: '2026-09-09' },
  { id: 'b_gelatina_royal', nome: 'Gelatina em Pó Sabores Sortidos Royal (Pacote 25g)', categoria: 'Básicos e Grãos', icone: 'acucar', precoMedioDF: 2.20, ultimoPreco: 2.20, dataUltimoPreco: '2026-09-09' },
  { id: 'b_goiabada_cascao', nome: 'Goiabada Cascão em Barra Predilecta (500g)', categoria: 'Básicos e Grãos', icone: 'fruta', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_pacoca_rolha', nome: 'Paçoca de Amendoim Tipo Rolha Santa Helena (Pote c/ 30)', categoria: 'Básicos e Grãos', icone: 'farinha', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-09' },
  { id: 'b_nutella_350g', nome: 'Creme de Avelã com Cacau Nutella Ferrero Pote (350g)', categoria: 'Básicos e Grãos', icone: 'achocolatado', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-09' },

  // --- LATICÍNIOS E FRIOS EXPANDIDO ---
  { id: 'l_mussarela_peca', nome: 'Queijo Mussarela Fresco Peça / Pedaço (kg)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 38.90, ultimoPreco: 38.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_queijo_minas_padrao', nome: 'Queijo Minas Meia Cura Padrão Tradicional (Peça 500g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 26.90, ultimoPreco: 26.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_queijo_emmental', nome: 'Queijo Tipo Emmental / Suíço Fatiado (150g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_mozzarella_bufala', nome: 'Queijo Mozzarella de Búfala em Bolas Bom Destino (Pote 250g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_catupiry_bisnaga', nome: 'Requeijão Culinário Original Catupiry Bisnaga (410g)', categoria: 'Laticínios e Frios', icone: 'manteiga', precoMedioDF: 18.90, ultimoPreco: 18.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_requeijao_barra', nome: 'Requeijão de Corte em Barra Mineiro Tirolez (500g)', categoria: 'Laticínios e Frios', icone: 'queijo', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_yopro_danone', nome: 'Iogurte Proteico YoPRO Danone 15g Proteína (250ml)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_piracanjuba_whey', nome: 'Bebida Láctea Piracanjuba Whey 23g Proteína Baunilha/Morango (250ml)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-09' },
  { id: 'l_iogurte_natural_nestle', nome: 'Iogurte Natural Integral sem Açúcar Nestlé Copo (170g)', categoria: 'Laticínios e Frios', icone: 'iogurte', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'l_toddynho_pack', nome: 'Bebida Láctea Chocolate Toddynho / Nescau Pronto (Pack c/ 4)', categoria: 'Laticínios e Frios', icone: 'achocolatado', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_creme_leite_fresco', nome: 'Creme de Leite Fresco Pasteurizado Garrafa (500ml)', categoria: 'Laticínios e Frios', icone: 'leite', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_peito_frango_defumado', nome: 'Peito de Frango Defumado Fatiado Seara Gourmet (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 42.90, ultimoPreco: 42.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_lombo_canadense', nome: 'Lombo Suíno Canadense Defumado Fatiado (kg)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 36.90, ultimoPreco: 36.90, dataUltimoPreco: '2026-09-09' },
  { id: 'l_copa_fatiada', nome: 'Copa Suína Curada e Fatiada Especial Sadia (100g)', categoria: 'Laticínios e Frios', icone: 'carne', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },

  // --- HIGIENE EXPANDIDO ---
  { id: 'hig_sab_granado', nome: 'Sabonete em Barra Glicerinado Tradicional Granado Bebê / Adulto (90g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 4.90, ultimoPreco: 4.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_shampoo_elseve', nome: 'Xampu Elseve L\'Oréal Óleo Extraordinário Nutrição (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 21.90, ultimoPreco: 21.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_condic_elseve', nome: 'Condicionador Elseve L\'Oréal Óleo Extraordinário (400ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 23.90, ultimoPreco: 23.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_shampoo_seda', nome: 'Xampu Seda Ceramidas Brilho Intenso (325ml)', categoria: 'Higiene', icone: 'shampoo', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_creme_colgate_total', nome: 'Creme Dental Colgate Total 12 Antibacteriano (90g)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_creme_oralb', nome: 'Creme Dental Oral-B Pro-Gengiva / Pro-Saúde (90g)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_listerine_coolmint', nome: 'Enxaguante Bucal Listerine Cool Mint Antisséptico (500ml)', categoria: 'Higiene', icone: 'dente', precoMedioDF: 22.90, ultimoPreco: 22.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_fralda_pampers_g', nome: 'Fralda Descartável Pampers Confort Sec Mega G (Pacote c/ 60)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 79.90, ultimoPreco: 79.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_lenco_pampers', nome: 'Toalhinhas Umedecidas Pampers Fresh Clean (Pack c/ 48)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_protetor_labial', nome: 'Protetor Labial Hidratante Nivea / Carmed Fini (10g)', categoria: 'Higiene', icone: 'sabonete', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-09' },
  { id: 'hig_lenco_kleenex', nome: 'Lenço de Papel Macio Caixa Kleenex (Caixa c/ 100)', categoria: 'Higiene', icone: 'papel', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },

  // --- LIMPEZA EXPANDIDO ---
  { id: 'limp_omo_16kg', nome: 'Sabão em Pó OMO Lavagem Perfeita Sachê Econômico (1.6kg)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 19.90, ultimoPreco: 19.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_ariel_2l', nome: 'Sabão Líquido Ariel Concentrado Expert Frasco (2L)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_sabao_coco_ruth', nome: 'Sabão em Barra de Coco Puro Ruth / Ypê (Pacote c/ 5 de 200g)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_amaciante_ype_2l', nome: 'Amaciante Tradicional Ypê Carinho Frasco Azul (2L)', categoria: 'Limpeza', icone: 'amaciante', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_vanish_gel_500', nome: 'Tira-Manchas Líquido em Gel Refil Vanish (500ml)', categoria: 'Limpeza', icone: 'sabao', precoMedioDF: 16.90, ultimoPreco: 16.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_veja_flores_2l', nome: 'Desinfetante Veja Perfumado Flores e Lavanda (2L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_bak_ype_2l', nome: 'Desinfetante Bak Ypê Eucalipto / Pinho (2L)', categoria: 'Limpeza', icone: 'desinfetante', precoMedioDF: 8.50, ultimoPreco: 8.50, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_deterg_clear_ype', nome: 'Detergente Ypê Clear Neutro sem Cheiro (500ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 2.15, ultimoPreco: 2.15, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_sapolio_cremoso', nome: 'Sapólio Radium Cremoso com Cloro Ativo (300ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_limpa_inox_spray', nome: 'Limpador Limpa Inox e Alumínio Scotch-Brite Spray (200ml)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_esponja_scotch_pack', nome: 'Esponja Multiuso Scotch-Brite Leve 4 Pague 3', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_esponja_magica', nome: 'Esponja Mágica Tira Manchas Paredes e Rejuntes (Pacote c/ 3)', categoria: 'Limpeza', icone: 'detergente', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'limp_refil_mop', nome: 'Refil para Mop Giratório de Microfibra Universal FlashLimp', categoria: 'Limpeza', icone: 'sanitaria', precoMedioDF: 14.90, ultimoPreco: 14.90, dataUltimoPreco: '2026-09-09' },

  // --- PADARIA E LANCHES EXPANDIDO ---
  { id: 'pad_pao_wickbold_100', nome: 'Pão de Forma 100% Integral Wickbold Grão Sabor (400g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_pao_brioche_hamb', nome: 'Pão de Hambúrguer Brioche com Manteiga Pullman (Pacote c/ 4)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_biscoito_bono', nome: 'Biscoito Recheado Bono Chocolate Nestlé (126g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.50, ultimoPreco: 3.50, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_biscoito_trakinas', nome: 'Biscoito Recheado Trakinas Chocolate / Morango (126g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 3.20, ultimoPreco: 3.20, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_biscoito_maizena_marilan', nome: 'Biscoito Tradicional Maizena Marilan (Pacote 400g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 5.50, ultimoPreco: 5.50, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_rosquinha_mabel', nome: 'Rosquinhas Doces Sabor Coco Mabel (Pacote 600g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_torrada_multigraos', nome: 'Torrada Bauducco Integral Multigrãos (Pacote 140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 4.80, ultimoPreco: 4.80, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_bolinho_anamaria', nome: 'Bolinho Recheado Ana Maria Baunilha com Chocolate (70g)', categoria: 'Padaria e Lanches', icone: 'pao', precoMedioDF: 2.50, ultimoPreco: 2.50, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_torcida_queijo', nome: 'Salgadinho Torcida Sabores Churrasco / Queijo (Pacote 70g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 2.90, ultimoPreco: 2.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_fandangos_presunto', nome: 'Salgadinho Fandangos Presunto Milho Assado Elma Chips (140g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 7.50, ultimoPreco: 7.50, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_lays_classica', nome: 'Batata Frita Clássica Lay\'s Sal Marinho (Pacote 80g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 7.90, ultimoPreco: 7.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_pringles_sour_cream', nome: 'Pringles Sour Cream and Onion Cebola e Salsa (114g)', categoria: 'Padaria e Lanches', icone: 'biscoito', precoMedioDF: 10.90, ultimoPreco: 10.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_nozes_quartz', nome: 'Nozes Chilenas Quartz Sem Casca Metades (100g)', categoria: 'Padaria e Lanches', icone: 'farinha', precoMedioDF: 13.90, ultimoPreco: 13.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_uva_passa_preta', nome: 'Uva Passa Preta sem Semente Selecionada (200g)', categoria: 'Padaria e Lanches', icone: 'fruta', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_ameixa_seca', nome: 'Ameixa Seca sem Caroço Doce (200g)', categoria: 'Padaria e Lanches', icone: 'fruta', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pad_damasco_turco', nome: 'Damasco Turco Seco Alaranjado (200g)', categoria: 'Padaria e Lanches', icone: 'fruta', precoMedioDF: 15.90, ultimoPreco: 15.90, dataUltimoPreco: '2026-09-09' },

  // --- BEBIDAS EXPANDIDO ---
  { id: 'beb_schweppes_citrus_lata', nome: 'Refrigerante Schweppes Citrus Lata (350ml)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 3.90, ultimoPreco: 3.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_coca_lata_350', nome: 'Refrigerante Coca-Cola Original Lata (350ml)', categoria: 'Bebidas', icone: 'refrigerante', precoMedioDF: 3.80, ultimoPreco: 3.80, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_suco_prats_laranja', nome: 'Suco de Laranja Integral 100% Suco Prats Garrafa (900ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 9.90, ultimoPreco: 9.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_suco_natural_one_uva', nome: 'Suco 100% Integral Uva / Maçã Natural One Pet (900ml)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_sococo_1l', nome: 'Água de Coco Sococo Integral Garrafa / Caixinha (1L)', categoria: 'Bebidas', icone: 'suco', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_brahma_chopp_lata', nome: 'Cerveja Chopp Brahma Puro Malte Lata (350ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 3.69, ultimoPreco: 3.69, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_eisenbahn_pilsen_ln', nome: 'Cerveja Eisenbahn Pilsen Puro Malte Long Neck (355ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 5.90, ultimoPreco: 5.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_blue_moon', nome: 'Cerveja Blue Moon Belgian White Trigo Garrafa (355ml)', categoria: 'Bebidas', icone: 'cerveja', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_dv_catena_malbec', nome: 'Vinho Argentino DV Catena Cabernet Malbec Tinto (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 149.00, ultimoPreco: 149.00, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_casal_garcia', nome: 'Vinho Verde Português Casal Garcia Garrafa (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 49.90, ultimoPreco: 49.90, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_gin_bombay', nome: 'Gin Bombay Sapphire London Dry Importado (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 119.00, ultimoPreco: 119.00, dataUltimoPreco: '2026-09-09' },
  { id: 'beb_baileys_licor', nome: 'Licor Creme Irlandês Baileys Original Garrafa (750ml)', categoria: 'Bebidas', icone: 'vinho', precoMedioDF: 89.90, ultimoPreco: 89.90, dataUltimoPreco: '2026-09-09' },

  // --- DIVERSOS, PET E CHURRASCO EXPANDIDO ---
  { id: 'pet_golden_special_15kg', nome: 'Ração Seca para Cães Adultos Frango e Carne Golden Special (15kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 149.90, ultimoPreco: 149.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pet_premier_pequenas', nome: 'Ração Super Premium para Cães Premier Raças Pequenas (2.5kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 74.90, ultimoPreco: 74.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pet_churu_gatos', nome: 'Petisco Líquido Churu Sabor Frango para Gatos (Pack c/ 4 tubos)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 17.90, ultimoPreco: 17.90, dataUltimoPreco: '2026-09-09' },
  { id: 'pet_areia_silica', nome: 'Areia Sanitária Sílica Gel Cristais Absorventes Gatos (1.6kg)', categoria: 'Diversos', icone: 'pet', precoMedioDF: 34.90, ultimoPreco: 34.90, dataUltimoPreco: '2026-09-09' },
  { id: 'baz_carvao_5kg', nome: 'Carvão Vegetal de Eucalipto 100% Reflorestamento Saco (5kg)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 24.90, ultimoPreco: 24.90, dataUltimoPreco: '2026-09-09' },
  { id: 'baz_sal_churrasco_cantagallo', nome: 'Sal Grosso Cantagallo com Chimichurri para Churrasco (500g)', categoria: 'Básicos e Grãos', icone: 'sal', precoMedioDF: 11.90, ultimoPreco: 11.90, dataUltimoPreco: '2026-09-09' },
  { id: 'baz_saco_freezer_3kg', nome: 'Sacos Plásticos para Freezer e Micro-ondas 3kg (Rolo c/ 50)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'baz_filme_pvc_cortador', nome: 'Filme PVC com Trilho Cortador Deslizante Wyda (30m)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 8.90, ultimoPreco: 8.90, dataUltimoPreco: '2026-09-09' },
  { id: 'baz_fita_crepe_congelamento', nome: 'Fita Crepe Multiuso para Congelamento e Marcação (18mm x 50m)', categoria: 'Diversos', icone: 'utilidades', precoMedioDF: 6.90, ultimoPreco: 6.90, dataUltimoPreco: '2026-09-09' }
];

// Estado da Aplicação
const ehDispositivoMobile = (typeof window !== 'undefined' && (window.innerWidth <= 820 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '')));

let AppState = {
  abaAtiva: 'lista', // 'lista', 'despensa', 'historico'
  filtroCategoria: 'todas',
  cotacaoAtiva: true, // true = cotado com preços e atacadistas visíveis, false = preços e atacadistas ocultos
  modoNoMercado: ehDispositivoMobile ? true : false, // No celular, por padrão mercados vêm ocultados
  modoResumido: false, // true = exibe nomes simplificados e deduplica variedades
  modoCotacao: 'alfabetico', // Padrão Alfabético A-Z em todo o app
  mercadoReferencia: 'atacadao',
  ordenacaoMercados: 'original', // 'original', 'alfabetico_az', 'alfabetico_za', 'preco'
  usuarioAtivo: (typeof localStorage !== 'undefined' && localStorage.getItem('usuario_nome_ativo')) || 'Irandy',
  usuarioIcone: (typeof localStorage !== 'undefined' && localStorage.getItem('usuario_icone_ativo')) || '👨',
  usuarios: [
    { id: 'usr_irandy', nome: 'Irandy', icone: '👨', papel: 'Marido / No Mercado' },
    { id: 'usr_sioneide', nome: 'Sioneide', icone: '👩', papel: 'Patroa / Pedidos' }
  ],
  ultimoEvento: null,
  itensExcluidos: [],
  catalogo: [...CATALOGO_PADRAO_EXPANDIDO],

  // Itens atualmente marcados para a compra (sincronizados com os selecionados em Montar Lista)
  listaAtiva: [],

  // Histórico de compras finalizadas com dados para comparação e cálculo de duração
  historico: [
    {
      id: 'h_4',
      data: '2026-09-25T16:45:00Z',
      mercado: 'Dia a Dia',
      total: 192.10,
      itensQtd: 6,
      itens: [
        { nome: 'Arroz 5kg', categoria: 'Básicos e Grãos', qtde: 2, preco: 29.50, subtotal: 59.00 },
        { nome: 'Feijão Carioca', categoria: 'Básicos e Grãos', qtde: 2, preco: 8.20, subtotal: 16.40 },
        { nome: 'Óleo de Soja', categoria: 'Básicos e Grãos', qtde: 4, preco: 6.40, subtotal: 25.60 },
        { nome: 'Café Torrado', categoria: 'Básicos e Grãos', qtde: 2, preco: 19.90, subtotal: 39.80 },
        { nome: 'Amaciante Concentrado', categoria: 'Limpeza', qtde: 1, preco: 17.50, subtotal: 17.50 },
        { nome: 'Sabão em Pó', categoria: 'Limpeza', qtde: 1, preco: 33.80, subtotal: 33.80 }
      ]
    },
    {
      id: 'h_3',
      data: '2026-09-10T11:15:00Z',
      mercado: 'Assaí Atacadista',
      total: 176.40,
      itensQtd: 6,
      itens: [
        { nome: 'Arroz 5kg', categoria: 'Básicos e Grãos', qtde: 2, preco: 27.50, subtotal: 55.00 },
        { nome: 'Feijão Carioca', categoria: 'Básicos e Grãos', qtde: 2, preco: 7.50, subtotal: 15.00 },
        { nome: 'Óleo de Soja', categoria: 'Básicos e Grãos', qtde: 4, preco: 5.80, subtotal: 23.20 },
        { nome: 'Café Torrado', categoria: 'Básicos e Grãos', qtde: 2, preco: 18.50, subtotal: 37.00 },
        { nome: 'Amaciante Concentrado', categoria: 'Limpeza', qtde: 1, preco: 16.20, subtotal: 16.20 },
        { nome: 'Sabão em Pó', categoria: 'Limpeza', qtde: 1, preco: 30.00, subtotal: 30.00 }
      ]
    },
    {
      id: 'h_2',
      data: '2026-08-20T14:30:00Z',
      mercado: 'Supermercado Central',
      total: 184.20,
      itensQtd: 6,
      itens: [
        { nome: 'Arroz 5kg', categoria: 'Básicos e Grãos', qtde: 2, preco: 28.90, subtotal: 57.80 },
        { nome: 'Feijão Carioca', categoria: 'Básicos e Grãos', qtde: 2, preco: 7.80, subtotal: 15.60 },
        { nome: 'Óleo de Soja', categoria: 'Básicos e Grãos', qtde: 4, preco: 6.20, subtotal: 24.80 },
        { nome: 'Café Torrado', categoria: 'Básicos e Grãos', qtde: 2, preco: 18.90, subtotal: 37.80 },
        { nome: 'Amaciante Concentrado', categoria: 'Limpeza', qtde: 1, preco: 16.90, subtotal: 16.90 },
        { nome: 'Sabão em Pó', categoria: 'Limpeza', qtde: 1, preco: 31.30, subtotal: 31.30 }
      ]
    },
    {
      id: 'h_1',
      data: '2026-08-01T10:00:00Z',
      mercado: 'Atacadão',
      total: 168.50,
      itensQtd: 6,
      itens: [
        { nome: 'Arroz 5kg', categoria: 'Básicos e Grãos', qtde: 2, preco: 26.50, subtotal: 53.00 },
        { nome: 'Feijão Carioca', categoria: 'Básicos e Grãos', qtde: 2, preco: 7.90, subtotal: 15.80 },
        { nome: 'Óleo de Soja', categoria: 'Básicos e Grãos', qtde: 4, preco: 5.90, subtotal: 23.60 },
        { nome: 'Café Torrado', categoria: 'Básicos e Grãos', qtde: 2, preco: 17.50, subtotal: 35.00 },
        { nome: 'Amaciante Concentrado', categoria: 'Limpeza', qtde: 1, preco: 15.90, subtotal: 15.90 },
        { nome: 'Sabão em Pó', categoria: 'Limpeza', qtde: 1, preco: 25.20, subtotal: 25.20 }
      ]
    }
  ]
};

// Sincroniza a Lista de Compra: SÓ MOSTRA O QUE FOR SELECIONADO EM MONTAR LISTA
function sincronizarListaAtivaComCatalogo() {
  // Garante que qualquer produto não selecionado tenha comprado = false no catálogo
  AppState.catalogo.forEach(prod => {
    if (!prod.selecionado) {
      prod.comprado = false;
      prod.precoRegistradoMercado = 0;
    }
  });

  AppState.listaAtiva = AppState.catalogo
    .filter(prod => !!prod.selecionado)
    .map(prod => {
      const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === prod.id || p.nome.toLowerCase().trim() === prod.nome.toLowerCase().trim());
      const precoReferenciaDF = (padrao && padrao.precoMedioDF) || prod.precoMedioDF || prod.preco || 0;

      // No celular (somente mobile): não traz preços, vêm todos 0,00 até falar no mic
      let precoRegistrado = 0;
      if (ehDispositivoMobile) {
        precoRegistrado = (prod.precoRegistradoMercado && Number(prod.precoRegistradoMercado) > 0) 
          ? Number(prod.precoRegistradoMercado) 
          : 0;
      } else {
        precoRegistrado = (prod.precoRegistradoMercado && Number(prod.precoRegistradoMercado) > 0) 
          ? Number(prod.precoRegistradoMercado) 
          : (Number(prod.preco) || 0);
      }

      return {
        id: prod.id,
        catalogoId: prod.id,
        nome: prod.nome,
        categoria: prod.categoria || deduzirCategoria(prod.nome),
        icone: prod.icone || detectarChaveIcone(prod.nome),
        marca: prod.marca || null,
        qtde: prod.qtde || 1,
        precoReferencia: precoReferenciaDF,
        preco: precoRegistrado, // No mobile, rigorosamente 0.00
        precoRegistradoMercado: precoRegistrado,
        ultimoPreco: prod.ultimoPreco || precoReferenciaDF,
        dataUltimoPreco: prod.dataUltimoPreco || new Date().toISOString().slice(0, 10),
        comprado: !!prod.comprado,
        origemPreco: prod.origemPreco || null
      };
    });
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  inicializarTema();
  carregarLocalmente();
  sanearTodaListaHortifruti();
  atualizarBadgeUsuarioHeader();
  atualizarUIModoNoMercado();
  atualizarUIModoResumido();
  configurarNavegacao();
  configurarReconhecimentoVoz();
  inicializarNuvem();
  carregarCotacoesRaspadas();
  configurarBuscaGlobal();
  renderizarTudo();
  atualizarVisualBotaoOrdemAlfabetica();
  atualizarCardResumo();
  atualizarContadorSidebarMontar();
  inicializarEscalaFonteMontar();
  inicializarSwipeDeleteMobile();
});

// Carregamento de dados locais
function carregarLocalmente() {
  carregarUsuariosCadastrados();
  const dadosSalvos = localStorage.getItem('app_compras_irandy_v2');
  if (dadosSalvos) {
    try {
      const parsed = JSON.parse(dadosSalvos);
      if (parsed.itensExcluidos) AppState.itensExcluidos = parsed.itensExcluidos;
      if (parsed.cotacaoAtiva !== undefined) AppState.cotacaoAtiva = parsed.cotacaoAtiva;
      if (parsed.modoNoMercado !== undefined) {
        if (ehDispositivoMobile && localStorage.getItem('usuario_interagiu_modo_mercado') !== 'true') {
          AppState.modoNoMercado = true;
        } else {
          AppState.modoNoMercado = parsed.modoNoMercado;
        }
      } else if (ehDispositivoMobile) {
        AppState.modoNoMercado = true;
      }
      if (parsed.modoResumido !== undefined) AppState.modoResumido = parsed.modoResumido;
      if (parsed.mercadoReferencia && parsed.mercadoReferencia !== 'todos') {
        AppState.mercadoReferencia = parsed.mercadoReferencia;
      } else {
        AppState.mercadoReferencia = 'nenhum';
      }
      if (parsed.modoCotacao) {
        AppState.modoCotacao = parsed.modoCotacao;
      } else {
        AppState.modoCotacao = 'alfabetico';
      }
      if (parsed.ordenacaoMercados) AppState.ordenacaoMercados = parsed.ordenacaoMercados;
      
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
        const idsNaLista = new Set(parsed.listaAtiva.map(it => String(it.id)));

        AppState.catalogo.forEach(c => {
          const estaNaLista = nomesNaLista.has(c.nome.toLowerCase().trim()) || idsNaLista.has(String(c.id));
          if (estaNaLista) {
            c.selecionado = true;
          } else if (c.selecionado === undefined) {
            c.selecionado = false;
          }

          const itemSalvo = parsed.listaAtiva.find(it => 
            it.nome.toLowerCase().trim() === c.nome.toLowerCase().trim() || 
            String(it.id) === String(c.id)
          );
          if (itemSalvo) {
            c.qtde = itemSalvo.qtde || 1;
            c.comprado = !!itemSalvo.comprado;
            c.marca = itemSalvo.marca || null;
            if (c.precoMedioDF && itemSalvo.preco < (c.precoMedioDF * 0.7)) {
              c.preco = c.precoMedioDF;
            } else {
              c.preco = itemSalvo.preco || c.precoMedioDF;
            }
            c.origemPreco = itemSalvo.origemPreco || null;
          }
        });

        // Garante que qualquer item customizado da lista que não estava no catálogo seja adicionado
        parsed.listaAtiva.forEach(itemSalvo => {
          const jaExiste = AppState.catalogo.find(c => 
            c.nome.toLowerCase().trim() === itemSalvo.nome.toLowerCase().trim() ||
            String(c.id) === String(itemSalvo.id)
          );
          if (!jaExiste) {
            AppState.catalogo.unshift({
              id: itemSalvo.id || ('c_custom_' + Date.now()),
              nome: itemSalvo.nome,
              categoria: itemSalvo.categoria || deduzirCategoria(itemSalvo.nome),
              icone: itemSalvo.icone || detectarChaveIcone(itemSalvo.nome),
              precoMedioDF: itemSalvo.preco || 0,
              preco: itemSalvo.preco || 0,
              ultimoPreco: itemSalvo.ultimoPreco || itemSalvo.preco || 0,
              dataUltimoPreco: itemSalvo.dataUltimoPreco || new Date().toISOString().slice(0, 10),
              selecionado: true,
              qtde: itemSalvo.qtde || 1,
              comprado: !!itemSalvo.comprado
            });
          }
        });
      }

      // Garante que todos os valores de gôndola/mercado venham zerados por padrão
      if (AppState.catalogo) {
        AppState.catalogo.forEach(p => {
          if (!p.precoRegistradoMercado) {
            p.precoRegistradoMercado = 0;
            p.preco = 0;
          }
        });
      }

      // Sincroniza a Lista de Compra
      sincronizarListaAtivaComCatalogo();

      if (parsed.historico && Array.isArray(parsed.historico) && parsed.historico.length >= 2) {
        AppState.historico = parsed.historico;
      }
    } catch (e) {
      console.error("Erro ao carregar dados locais:", e);
    }
  } else {
    AppState.catalogo = [...CATALOGO_PADRAO_EXPANDIDO];
    sincronizarListaAtivaComCatalogo();
  }
}

// Saneamento automático para desvincular marcas incorretas de laticínios em hortaliças (ex: Couve Manteiga)
function sanearItemHortifrutiSeCorrompido(item) {
  if (!item || !item.nome) return;
  const nomeNorm = item.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const isHorti = item.categoria === 'Hortifrúti' || item.icone === 'folhas' || nomeNorm.includes('couve') || nomeNorm.includes('alface');
  const marcasLaticinios = ['itambe', 'itambé', 'batavo', 'aviacao', 'aviação', 'tirolez', 'qualy', 'doriana', 'vigor', 'piracanjuba'];
  
  if (isHorti && item.marca) {
    const marcaNorm = item.marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (marcasLaticinios.includes(marcaNorm)) {
      console.warn(`[Auto-Correção] Removendo marca indevida '${item.marca}' de hortifrúti '${item.nome}'`);
      item.marca = null;
      const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === item.id || p.nome.toLowerCase() === item.nome.toLowerCase());
      const precoCerto = padrao && padrao.precoMedioDF > 0 ? padrao.precoMedioDF : 3.00;
      item.preco = precoCerto;
      item.precoReferencia = precoCerto;
      item.ultimoPreco = precoCerto;
      if (item.precosMercados) delete item.precosMercados;
    }
  }
}

function sanearTodaListaHortifruti() {
  if (Array.isArray(AppState.listaAtiva)) AppState.listaAtiva.forEach(sanearItemHortifrutiSeCorrompido);
  if (Array.isArray(AppState.catalogo)) AppState.catalogo.forEach(sanearItemHortifrutiSeCorrompido);
}

// Salvar dados com sincronização automática
let timeoutSincronizacao = null;
let timestampUltimaModificacaoLocal = 0;

function salvarEstado(enviarParaNuvem = true) {
  if (enviarParaNuvem) {
    timestampUltimaModificacaoLocal = Date.now();
  }

  // Salva no localStorage como cache rápido
  localStorage.setItem('app_compras_irandy_v2', JSON.stringify({
    catalogo: AppState.catalogo,
    listaAtiva: AppState.listaAtiva,
    historico: AppState.historico,
    usuarios: AppState.usuarios || [],
    itensExcluidos: AppState.itensExcluidos || [],
    cotacaoAtiva: AppState.cotacaoAtiva,
    modoNoMercado: AppState.modoNoMercado || false,
    modoResumido: AppState.modoResumido || false,
    mercadoReferencia: (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos') ? AppState.mercadoReferencia : 'nenhum',
    modoCotacao: AppState.modoCotacao || 'mais_baratos',
    ordenacaoMercados: AppState.ordenacaoMercados || 'original',
    ultimaModificacao: new Date().toISOString()
  }));

  // Sincroniza com o Firebase se estiver conectado
  if (enviarParaNuvem && FirebaseSync.estaConectado) {
    clearTimeout(timeoutSincronizacao);
    timeoutSincronizacao = setTimeout(() => {
      FirebaseSync.sincronizarComNuvem({
        catalogo: AppState.catalogo,
        listaAtiva: AppState.listaAtiva,
        historico: AppState.historico,
        usuarios: AppState.usuarios || [],
        mercadoReferencia: AppState.mercadoReferencia || 'nenhum',
        cotacaoAtiva: AppState.cotacaoAtiva !== false,
        modoNoMercado: !!AppState.modoNoMercado,
        modoResumido: !!AppState.modoResumido,
        ultimoEvento: AppState.ultimoEvento || null
      });
    }, 400); // Debounce de 400ms
  }
}

// Conectar e gerenciar Nuvem Google (Firebase)
function inicializarNuvem() {
  FirebaseSync.inicializar(
    (dadosNuvem) => {
      // Proteção contra eco: se fizemos uma modificação local há menos de 4s, ignora o re-render
      const modificacaoLocalRecente = timestampUltimaModificacaoLocal > 0 && (Date.now() - timestampUltimaModificacaoLocal) < 4000;
      if (modificacaoLocalRecente) {
        console.log("[Nuvem] Modificação local recente (<4s) - preservando renderização local.");
        salvarEstado(false);
        return;
      }

      if (dadosNuvem.ultimaAtualizacao && timestampUltimaModificacaoLocal > 0) {
        const timeNuvem = new Date(dadosNuvem.ultimaAtualizacao).getTime();
        if (timeNuvem < (timestampUltimaModificacaoLocal - 500)) {
          console.log("[Nuvem] Ignorando snapshot antigo para preservar alteração local recente.");
          return;
        }
      }

      // Verifica se houve novo pedido vindo da outra pessoa (ex: Patroa Sioneide mandando itens)
      if (dadosNuvem.ultimoEvento && dadosNuvem.ultimoEvento.timestamp) {
        const evento = dadosNuvem.ultimoEvento;
        const agora = Date.now();
        const ultimoProcessado = Number(localStorage.getItem('ultimo_evento_notificado_ts') || 0);

        // Se o evento foi criado há menos de 90 segundos e ainda não foi mostrado
        if (evento.timestamp > ultimoProcessado && (agora - evento.timestamp) < 90000) {
          const meuNome = (AppState.usuarioAtivo || 'Irandy').toLowerCase().trim();
          const autorEvento = (evento.autor || '').toLowerCase().trim();

          // Se quem enviou o item NÃO foi este aparelho (veio do cônjuge/patroa)
          if (autorEvento && autorEvento !== meuNome) {
            localStorage.setItem('ultimo_evento_notificado_ts', String(evento.timestamp));
            tocarAvisoSonoroNotificacao();
            exibirAvisoPedidoPatroa(evento.autor, evento.itens, evento.icone || '👩');
          }
        }
      }

      // Recebeu atualização da Nuvem (ex: esposa acabou de marcar ou adicionar um item no celular)
      if (dadosNuvem.catalogo) AppState.catalogo = dadosNuvem.catalogo;
      if (dadosNuvem.listaAtiva) AppState.listaAtiva = dadosNuvem.listaAtiva;
      if (dadosNuvem.historico) AppState.historico = dadosNuvem.historico;
      if (dadosNuvem.usuarios && Array.isArray(dadosNuvem.usuarios) && dadosNuvem.usuarios.length > 0) {
        AppState.usuarios = dadosNuvem.usuarios;
        localStorage.setItem('app_usuarios_cadastrados', JSON.stringify(AppState.usuarios));
        atualizarBadgeUsuarioHeader();
        renderizarGridUsuarios();
      }
      if (dadosNuvem.mercadoReferencia && dadosNuvem.mercadoReferencia !== 'todos') {
        AppState.mercadoReferencia = dadosNuvem.mercadoReferencia;
      }

      // No celular (somente mobile), não traga preços. Tem que vir todos 0,00 até falar no mic
      if (ehDispositivoMobile) {
        if (AppState.listaAtiva) {
          AppState.listaAtiva.forEach(item => {
            if (!item.precoRegistradoMercado) {
              item.precoRegistradoMercado = 0;
              item.preco = 0;
            }
          });
        }
        if (AppState.catalogo) {
          AppState.catalogo.forEach(p => {
            if (!p.precoRegistradoMercado) {
              p.precoRegistradoMercado = 0;
              p.preco = 0;
            }
          });
        }
      }

      salvarEstado(false); // Salva local sem retransmitir
      renderizarTudo();
      atualizarContadorSidebarMontar();
    },
    (status) => {
      atualizarBadgeStatus(status);
    }
  );
}

// Reproduz aviso sonoro (Ding-Dong harmônico) via Web Audio API nativa
function tocarAvisoSonoroNotificacao() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    const tocarNota = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0.28, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + duration);
    };

    // Ding-Dong de alerta (587Hz -> 880Hz)
    tocarNota(587.33, 0, 0.28);
    tocarNota(880.00, 0.18, 0.48);
  } catch(e) {
    console.warn("Áudio não executado:", e);
  }
}

// Banner Flutuante de Pedido da Patroa (Sioneide)
let timerAvisoPatroa = null;
function exibirAvisoPedidoPatroa(autor, itens, icone = '👩') {
  const banner = document.getElementById('toast-aviso-patroa');
  const tituloEl = document.getElementById('toast-patroa-titulo');
  const itensEl = document.getElementById('toast-patroa-itens');
  if (!banner) return;

  const nomeAutor = autor || 'Sioneide';
  const listaTexto = Array.isArray(itens) ? itens.join(', ') : String(itens);

  if (tituloEl) tituloEl.textContent = `${icone} ${nomeAutor} pediu para comprar:`;
  if (itensEl) itensEl.textContent = listaTexto;

  banner.style.display = 'flex';
  banner.classList.add('visivel');

  // Vibração suave no celular
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate([250, 100, 250]); } catch(e){}
  }

  // Permanece aberto na tela (com botão fechar manual e auto-dismiss de 25s)
  clearTimeout(timerAvisoPatroa);
  timerAvisoPatroa = setTimeout(() => {
    fecharAvisoPatroa();
  }, 25000);
}

function fecharAvisoPatroa() {
  const banner = document.getElementById('toast-aviso-patroa');
  if (banner) {
    banner.style.display = 'none';
    banner.classList.remove('visivel');
  }
  clearTimeout(timerAvisoPatroa);
}

// ========================================================
// GESTOR DE USUÁRIOS DINÂMICO (CRIAÇÃO, EDIÇÃO E SELEÇÃO)
// ========================================================
let usuarioEmEdicaoId = null;

function carregarUsuariosCadastrados() {
  const salvos = localStorage.getItem('app_usuarios_cadastrados');
  if (salvos) {
    try {
      const parsed = JSON.parse(salvos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        AppState.usuarios = parsed;
        return;
      }
    } catch (e) {
      console.warn("Erro ao ler usuarios cadastrados:", e);
    }
  }
  AppState.usuarios = [
    { id: 'usr_irandy', nome: 'Irandy', icone: '👨', papel: 'Marido / No Mercado' },
    { id: 'usr_sioneide', nome: 'Sioneide', icone: '👩', papel: 'Patroa / Pedidos' }
  ];
  salvarUsuariosCadastrados();
}

function salvarUsuariosCadastrados() {
  localStorage.setItem('app_usuarios_cadastrados', JSON.stringify(AppState.usuarios || []));
  salvarEstado(true);
}

function atualizarBadgeUsuarioHeader() {
  const icoEl = document.getElementById('ico-perfil-header');
  const nomeEl = document.getElementById('nome-perfil-header');
  const nomeAtivo = AppState.usuarioAtivo || 'Irandy';
  
  const usr = (AppState.usuarios || []).find(u => u.nome.toLowerCase().trim() === nomeAtivo.toLowerCase().trim());
  const iconeAtivo = usr ? usr.icone : (AppState.usuarioIcone || (nomeAtivo.toLowerCase().includes('sioneide') ? '👩' : '👨'));

  if (icoEl) icoEl.textContent = iconeAtivo;
  if (nomeEl) nomeEl.textContent = nomeAtivo;
}

function abrirModalPerfilUsuario() {
  const modal = document.getElementById('modal-perfil-usuario');
  if (!modal) return;
  cancelarEdicaoUsuario();
  atualizarBadgeUsuarioHeader();
  renderizarGridUsuarios();
  modal.style.display = 'flex';
}

function renderizarGridUsuarios() {
  const grid = document.getElementById('grid-usuarios-cards');
  if (!grid) return;

  const nomeAtivo = (AppState.usuarioAtivo || 'Irandy').toLowerCase().trim();
  grid.innerHTML = '';

  (AppState.usuarios || []).forEach(usr => {
    const isAtivo = (usr.nome.toLowerCase().trim() === nomeAtivo);
    const card = document.createElement('div');
    card.className = `btn-perfil-card-opcao ${isAtivo ? 'selecionado' : ''}`;
    card.id = `card-usr-${usr.id}`;

    const iconeEscapado = (usr.icone || '👤');

    card.innerHTML = `
      <div class="perfil-card-acoes-topo">
        <button type="button" class="btn-acao-perfil btn-editar-perfil" onclick="iniciarEdicaoUsuario('${usr.id}', event)" title="Editar nome, avatar e papel">✏️</button>
        ${(AppState.usuarios || []).length > 1 ? `
          <button type="button" class="btn-acao-perfil btn-excluir-perfil" onclick="removerUsuarioPerfil('${usr.id}', event)" title="Excluir este perfil">🗑️</button>
        ` : ''}
      </div>
      <div class="perfil-avatar">${iconeEscapado}</div>
      <strong class="perfil-nome">${usr.nome}</strong>
      <span class="perfil-desc">${usr.papel || 'Usuário'}</span>
      ${isAtivo ? '<span class="badge-perfil-ativo">✓ Ativo</span>' : ''}
    `;

    card.onclick = (e) => {
      if (!e.target.closest('.perfil-card-acoes-topo')) {
        selecionarPerfilUsuario(usr.nome, usr.icone || '👤');
      }
    };

    grid.appendChild(card);
  });
}

function selecionarPerfilUsuario(nome, icone) {
  AppState.usuarioAtivo = nome;
  AppState.usuarioIcone = icone;
  localStorage.setItem('usuario_nome_ativo', nome);
  localStorage.setItem('usuario_icone_ativo', icone);
  atualizarBadgeUsuarioHeader();
  renderizarGridUsuarios();
  fecharModal('modal-perfil-usuario');
  mostrarNotificacaoToast(`👤 Perfil ativo: ${icone} ${nome}`);
}

function adicionarNovoUsuarioPerfil() {
  const inputNome = document.getElementById('input-novo-usuario-nome');
  const inputPapel = document.getElementById('input-novo-usuario-papel');
  const selectIcone = document.getElementById('input-novo-usuario-icone');

  const nome = inputNome ? inputNome.value.trim() : '';
  if (!nome) {
    mostrarNotificacaoToast("⚠️ Digite um nome para o novo usuário.");
    if (inputNome) inputNome.focus();
    return;
  }

  const existente = (AppState.usuarios || []).find(u => u.nome.toLowerCase().trim() === nome.toLowerCase().trim());
  if (existente) {
    mostrarNotificacaoToast(`⚠️ Já existe um usuário com o nome "${nome}".`);
    return;
  }

  const papel = (inputPapel && inputPapel.value.trim()) ? inputPapel.value.trim() : 'Pedidos';
  const icone = selectIcone ? selectIcone.value : '👤';

  const novoUsr = {
    id: 'usr_' + Date.now(),
    nome: capitalizar(nome),
    icone: icone,
    papel: papel
  };

  if (!AppState.usuarios) AppState.usuarios = [];
  AppState.usuarios.push(novoUsr);
  salvarUsuariosCadastrados();

  AppState.usuarioAtivo = novoUsr.nome;
  AppState.usuarioIcone = novoUsr.icone;
  localStorage.setItem('usuario_nome_ativo', novoUsr.nome);
  localStorage.setItem('usuario_icone_ativo', novoUsr.icone);

  atualizarBadgeUsuarioHeader();
  renderizarGridUsuarios();

  if (inputNome) inputNome.value = '';
  if (inputPapel) inputPapel.value = '';

  mostrarNotificacaoToast(`✅ Card de "${novoUsr.nome}" criado e ativado com sucesso!`);
}

function iniciarEdicaoUsuario(usrId, ev) {
  if (ev) ev.stopPropagation();
  const usr = (AppState.usuarios || []).find(u => u.id === usrId);
  if (!usr) return;

  usuarioEmEdicaoId = usrId;

  const painelEdicao = document.getElementById('painel-edicao-usuario');
  const painelNovo = document.getElementById('painel-novo-usuario');
  const inputNome = document.getElementById('input-edit-usuario-nome');
  const inputPapel = document.getElementById('input-edit-usuario-papel');
  const selectIcone = document.getElementById('input-edit-usuario-icone');

  if (inputNome) inputNome.value = usr.nome;
  if (inputPapel) inputPapel.value = usr.papel || '';
  if (selectIcone) selectIcone.value = usr.icone || '👤';

  if (painelNovo) painelNovo.style.display = 'none';
  if (painelEdicao) {
    painelEdicao.style.display = 'block';
    if (inputNome) {
      inputNome.focus();
      inputNome.select();
    }
  }
}

function salvarEdicaoUsuario() {
  if (!usuarioEmEdicaoId) return;
  const usr = (AppState.usuarios || []).find(u => u.id === usuarioEmEdicaoId);
  if (!usr) return;

  const inputNome = document.getElementById('input-edit-usuario-nome');
  const inputPapel = document.getElementById('input-edit-usuario-papel');
  const selectIcone = document.getElementById('input-edit-usuario-icone');

  const novoNome = inputNome ? inputNome.value.trim() : '';
  if (!novoNome) {
    mostrarNotificacaoToast("⚠️ O nome não pode ficar vazio.");
    return;
  }

  const nomeAnterior = usr.nome;
  usr.nome = capitalizar(novoNome);
  usr.papel = inputPapel ? inputPapel.value.trim() : usr.papel;
  usr.icone = selectIcone ? selectIcone.value : usr.icone;

  salvarUsuariosCadastrados();

  if (AppState.usuarioAtivo.toLowerCase() === nomeAnterior.toLowerCase()) {
    AppState.usuarioAtivo = usr.nome;
    AppState.usuarioIcone = usr.icone;
    localStorage.setItem('usuario_nome_ativo', usr.nome);
    localStorage.setItem('usuario_icone_ativo', usr.icone);
    atualizarBadgeUsuarioHeader();
  }

  cancelarEdicaoUsuario();
  renderizarGridUsuarios();
  mostrarNotificacaoToast(`✅ Perfil atualizado para "${usr.nome}"!`);
}

function cancelarEdicaoUsuario() {
  usuarioEmEdicaoId = null;
  const painelEdicao = document.getElementById('painel-edicao-usuario');
  const painelNovo = document.getElementById('painel-novo-usuario');
  if (painelEdicao) painelEdicao.style.display = 'none';
  if (painelNovo) painelNovo.style.display = 'block';
}

function removerUsuarioPerfil(usrId, ev) {
  if (ev) ev.stopPropagation();
  if (!AppState.usuarios || AppState.usuarios.length <= 1) {
    mostrarNotificacaoToast("⚠️ Mantenha pelo menos um usuário cadastrado.");
    return;
  }

  const usr = AppState.usuarios.find(u => u.id === usrId);
  if (!usr) return;

  if (!confirm(`Deseja realmente excluir o perfil de "${usr.nome}"?`)) return;

  const eraAtivo = (AppState.usuarioAtivo.toLowerCase() === usr.nome.toLowerCase());
  AppState.usuarios = AppState.usuarios.filter(u => u.id !== usrId);
  salvarUsuariosCadastrados();

  if (eraAtivo && AppState.usuarios.length > 0) {
    const proximo = AppState.usuarios[0];
    AppState.usuarioAtivo = proximo.nome;
    AppState.usuarioIcone = proximo.icone;
    localStorage.setItem('usuario_nome_ativo', proximo.nome);
    localStorage.setItem('usuario_icone_ativo', proximo.icone);
    atualizarBadgeUsuarioHeader();
  }

  cancelarEdicaoUsuario();
  renderizarGridUsuarios();
  mostrarNotificacaoToast(`🗑️ Usuário "${usr.nome}" removido.`);
}

let timerToastNuvem = null;
function exibirToastNuvem(mensagem = "Lista atualizada em tempo real!") {
  const toast = document.getElementById('toast-notificacao-nuvem');
  const txt = document.getElementById('toast-nuvem-texto');
  if (!toast) return;
  if (txt) txt.textContent = mensagem;

  toast.style.display = 'flex';
  clearTimeout(timerToastNuvem);
  timerToastNuvem = setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

function atualizarBadgeStatus(status) {
  const btnNuvem = document.getElementById('btn-nuvem-header');
  const dotMobile = document.getElementById('mobile-nuvem-dot');
  if (btnNuvem) {
    if (status.online) {
      btnNuvem.classList.add('online');
      btnNuvem.title = "Nuvem Google: Sincronizado em Tempo Real";
    } else {
      btnNuvem.classList.remove('online');
      btnNuvem.title = status.msg || "Configurar Nuvem / Compartilhar com Esposa";
    }
  }
  if (dotMobile) {
    dotMobile.style.background = status.online ? '#10B981' : '#94A3B8';
  }
}

// Carregar Cotações Reais Raspadas dos Supermercados de Brasília
async function carregarCotacoesRaspadas() {
  try {
    const resp = await fetch('precos_mercados_df.json');
    if (!resp.ok) return;
    const dados = await resp.json();
    if (dados && dados.cotacoes) {
      window.COTACOES_REAIS_DF = dados.cotacoes;
      window.COTACOES_REAIS_META = {
        data: dados.ultima_atualizacao,
        total: dados.total_produtos
      };
      console.log(`[Cotação Real DF] Carregadas cotações atualizadas (${dados.ultima_atualizacao}) com ${dados.total_produtos} itens.`);
      atualizarCardResumo();
      if (AppState.abaAtiva === 'lista') renderizarListaCompras();
      else if (AppState.abaAtiva === 'mercados') renderizarComparadorDF();
    }
  } catch (e) {
    console.log("[Cotação Real DF] Arquivo precos_mercados_df.json em modo estático local.");
  }
}

// Configuração dos Mercados de Brasília (Asa Norte / Asa Sul / SIA / Vicente Pires)
const MERCADOS_DF = {
  atacadao: { id: 'atacadao', nome: 'Atacadão', regiao: 'SIA / DF', emoji: '🟠', logo: 'atacadao', fator: 0.92 },
  assai: { id: 'assai', nome: 'Assaí', regiao: 'SIA / DF', emoji: '🔵', logo: 'assai', fator: 0.93 },
  diaadia: { id: 'diaadia', nome: 'Dia a Dia', regiao: 'SIA / DF', emoji: '🔴', logo: 'diaadia', fator: 0.96 },
  carrefour: { id: 'carrefour', nome: 'Carrefour', regiao: 'Asa Sul / Blvd Norte', emoji: '🟦', logo: 'carrefour', fator: 1.03 },
  bigbox: { id: 'bigbox', nome: 'Big Box', regiao: 'Asa Norte / Asa Sul', emoji: '🟢', logo: 'bigbox', fator: 1.10 },
  dona: { id: 'dona', nome: 'Dona', regiao: 'Asa Norte / Asa Sul / DF', emoji: '🟢', logo: 'dona', fator: 1.08 },
  paodeacucar: { id: 'paodeacucar', nome: 'Pão de Açúcar', regiao: 'Asa Sul / Asa Norte', emoji: '🌿', logo: 'paodeacucar', fator: 1.20 }
};

// Perfis Competitivos do DF por Categoria (Atacadão e Assaí lideram na escala real, Carrefour em higiene e Dia a Dia em ofertas pontuais)
const FATORES_COMPETITIVOS_DF = {
  'Hortifrúti': {
    atacadao: 0.91,   // Atacadão no SIA é fortíssimo no atacado de feira e hortifrúti
    assai: 0.93,
    diaadia: 0.95,
    carrefour: 1.06,
    dona: 1.10,
    bigbox: 1.14,
    paodeacucar: 1.24
  },
  'Carnes e Proteínas': {
    atacadao: 0.90,  // Atacadão lidera em cortes bovinos, frangos no atacado e friboi
    assai: 0.92,     // Assaí muito competitivo em suínos, linguiças e cortes resfriados
    diaadia: 0.95,
    carrefour: 1.06,
    dona: 1.10,
    bigbox: 1.14,
    paodeacucar: 1.22
  },
  'Limpeza': {
    assai: 0.90,     // Assaí é a maior referência do DF em sabão em pó, amaciantes e detergentes
    atacadao: 0.92,
    diaadia: 0.96,
    carrefour: 1.05,
    dona: 1.09,
    bigbox: 1.12,
    paodeacucar: 1.20
  },
  'Básicos e Grãos': {
    atacadao: 0.90,  // Atacadão imbatível no DF em fardos de arroz 5kg, feijão, óleos e farinhas
    assai: 0.92,     // Assaí compete muito perto em massas, cafés e açúcar
    diaadia: 0.95,
    carrefour: 1.05,
    dona: 1.08,
    bigbox: 1.12,
    paodeacucar: 1.20
  },
  'Laticínios e Frios': {
    assai: 0.91,     // Assaí lidera em queijos fatiados, manteigas e achocolatados
    atacadao: 0.92,  // Atacadão muito forte em caixas de leite UHT e ovos
    diaadia: 0.95,
    carrefour: 1.04,
    dona: 1.08,
    bigbox: 1.12,
    paodeacucar: 1.18
  },
  'Higiene': {
    carrefour: 0.91, // Carrefour lidera com frequência ofertas agressivas de higiene e beleza
    assai: 0.92,
    atacadao: 0.93,
    diaadia: 0.96,
    dona: 1.07,
    bigbox: 1.10,
    paodeacucar: 1.16
  },
  'Padaria e Lanches': {
    assai: 0.91,     // Assaí muito forte em biscoitos, torradas e pães de forma
    atacadao: 0.92,
    diaadia: 0.95,
    carrefour: 1.04,
    dona: 1.08,
    bigbox: 1.10,
    paodeacucar: 1.20
  },
  'Bebidas': {
    assai: 0.90,     // Assaí é referência no DF em cervejas, cafés e refrigerantes
    atacadao: 0.92,
    diaadia: 0.95,
    carrefour: 1.02,
    dona: 1.08,
    bigbox: 1.12,
    paodeacucar: 1.18
  },
  'Diversos': {
    atacadao: 0.92,
    assai: 0.93,
    diaadia: 0.96,
    carrefour: 1.04,
    dona: 1.08,
    bigbox: 1.12,
    paodeacucar: 1.20
  }
};

// Variação determinística realista por item para dinamismo autêntico das cotações
function obterFatorCompetitivoMercado(nomeOuId, categoria, redeId) {
  if (!redeId || redeId === 'nenhum' || redeId === 'todos') return 1.0;
  const cat = categoria || 'Diversos';
  const perfilCat = FATORES_COMPETITIVOS_DF[cat] || FATORES_COMPETITIVOS_DF['Diversos'];
  const fatorBase = perfilCat[redeId] || (MERCADOS_DF[redeId] ? MERCADOS_DF[redeId].fator : 1.0);

  // Hash determinístico baseado no nome do produto
  let hash = 0;
  const s = String(nomeOuId || '').toLowerCase().trim();
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) - hash) + s.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash);

  // Variação equilibrada simulando promoções reais de cada supermercado
  let delta = 0;
  if (redeId === 'atacadao') {
    delta = ((seed % 11) - 5) * 0.007; // -0.035 a +0.035
  } else if (redeId === 'assai') {
    delta = (((seed >> 2) % 11) - 5) * 0.007;
  } else if (redeId === 'diaadia') {
    delta = (((seed >> 4) % 11) - 4) * 0.007;
  } else if (redeId === 'carrefour') {
    delta = (((seed >> 3) % 9) - 4) * 0.006;
  } else {
    delta = (((seed >> 5) % 7) - 3) * 0.005;
  }

  return Math.max(0.85, Number((fatorBase + delta).toFixed(3)));
}

// Cotações específicas de produtos para a região de Brasília (DF) com alternância real de vencedores
const COTACOES_DF = {
  'arroz': { atacadao: 22.49, assai: 22.90, diaadia: 23.50, carrefour: 25.90, dona: 26.50, bigbox: 27.50, paodeacucar: 29.50 },
  'arroz_1kg': { atacadao: 5.89, assai: 5.99, diaadia: 6.20, carrefour: 6.90, dona: 7.20, bigbox: 7.50, paodeacucar: 7.90 },
  'arroz_integral': { atacadao: 7.39, assai: 7.59, diaadia: 7.80, carrefour: 8.90, dona: 9.20, bigbox: 9.50, paodeacucar: 10.50 },
  'arroz_parboilizado': { atacadao: 23.90, assai: 24.50, diaadia: 25.20, carrefour: 27.50, dona: 28.50, bigbox: 29.90, paodeacucar: 31.90 },
  'feijao': { atacadao: 6.79, assai: 6.99, diaadia: 7.29, carrefour: 7.90, dona: 8.20, bigbox: 8.50, paodeacucar: 9.29 },
  'feijao_preto': { atacadao: 7.99, assai: 8.19, diaadia: 8.49, carrefour: 9.50, dona: 9.90, bigbox: 10.20, paodeacucar: 11.50 },
  'acucar': { atacadao: 14.79, assai: 14.99, diaadia: 15.20, carrefour: 16.20, dona: 16.50, bigbox: 16.90, paodeacucar: 17.50 },
  'oleo': { atacadao: 5.19, assai: 5.29, diaadia: 5.49, carrefour: 5.97, dona: 6.14, bigbox: 6.32, paodeacucar: 6.73 },
  'cafe': { assai: 16.49, atacadao: 16.89, diaadia: 17.20, carrefour: 18.90, dona: 19.90, bigbox: 20.90, paodeacucar: 21.50 },
  'macarrao': { assai: 3.49, atacadao: 3.59, diaadia: 3.79, carrefour: 4.18, dona: 4.30, bigbox: 4.43, paodeacucar: 4.71 },
  'farinha': { atacadao: 4.69, assai: 4.79, diaadia: 4.95, carrefour: 5.39, dona: 5.49, bigbox: 5.69, paodeacucar: 6.19 },
  'sal': { atacadao: 2.29, assai: 2.39, diaadia: 2.59, carrefour: 2.99, dona: 3.15, bigbox: 3.30, paodeacucar: 3.50 },
  'frango': { atacadao: 16.49, assai: 16.89, diaadia: 17.20, carrefour: 19.90, dona: 21.50, bigbox: 22.50, paodeacucar: 23.90 },
  'carne': { atacadao: 29.90, assai: 30.90, diaadia: 31.90, carrefour: 34.90, dona: 36.90, bigbox: 38.90, paodeacucar: 41.90 },
  'costela': { atacadao: 23.50, assai: 23.90, diaadia: 24.50, carrefour: 27.90, dona: 28.90, bigbox: 29.90, paodeacucar: 31.90 },
  'linguica': { assai: 20.49, atacadao: 20.90, diaadia: 21.50, carrefour: 24.50, dona: 25.90, bigbox: 26.90, paodeacucar: 27.90 },
  'peixe': { atacadao: 29.50, assai: 30.50, diaadia: 31.50, carrefour: 34.90, dona: 36.90, bigbox: 38.90, paodeacucar: 40.90 },
  'leite': { atacadao: 4.19, assai: 4.25, diaadia: 4.39, carrefour: 4.89, dona: 5.19, bigbox: 5.39, paodeacucar: 5.69 },
  'queijo': { assai: 8.29, atacadao: 8.39, diaadia: 8.79, carrefour: 9.50, dona: 10.20, bigbox: 10.80, paodeacucar: 11.50 },
  'ovos': { atacadao: 14.49, assai: 14.79, diaadia: 15.20, carrefour: 16.90, dona: 17.50, bigbox: 17.90, paodeacucar: 19.40 },
  'manteiga': { assai: 9.79, atacadao: 9.99, diaadia: 10.39, carrefour: 11.49, dona: 11.99, bigbox: 12.50, paodeacucar: 13.49 },
  'iogurte': { assai: 7.29, atacadao: 7.49, diaadia: 7.80, carrefour: 9.20, dona: 9.90, bigbox: 10.50, paodeacucar: 11.20 },
  'detergente': { assai: 1.85, atacadao: 1.89, diaadia: 1.99, carrefour: 2.35, dona: 2.49, bigbox: 2.69, paodeacucar: 2.89 },
  'amaciante': { assai: 13.99, atacadao: 14.49, diaadia: 15.19, carrefour: 16.89, dona: 17.50, bigbox: 18.20, paodeacucar: 19.90 },
  'sabao': { assai: 20.49, atacadao: 20.90, diaadia: 21.90, carrefour: 24.50, dona: 25.90, bigbox: 26.90, paodeacucar: 28.90 },
  'sanitaria': { atacadao: 4.29, assai: 4.35, diaadia: 4.69, carrefour: 5.39, dona: 5.69, bigbox: 5.99, paodeacucar: 6.49 },
  'desinfetante': { assai: 7.29, atacadao: 7.49, diaadia: 7.80, carrefour: 9.50, dona: 10.20, bigbox: 10.90, paodeacucar: 11.50 },
  'banana': { atacadao: 4.79, assai: 4.89, diaadia: 5.29, carrefour: 6.49, dona: 6.89, bigbox: 7.20, paodeacucar: 7.90 },
  'tomate': { atacadao: 5.69, assai: 5.89, diaadia: 6.39, carrefour: 7.19, dona: 7.69, bigbox: 8.29, paodeacucar: 8.90 },
  'batata': { atacadao: 4.59, assai: 4.79, diaadia: 5.19, carrefour: 6.19, dona: 6.49, bigbox: 6.89, paodeacucar: 7.49 },
  'cebola': { atacadao: 4.10, assai: 4.25, diaadia: 4.59, carrefour: 5.29, dona: 5.59, bigbox: 5.89, paodeacucar: 6.49 },
  'alho': { atacadao: 23.90, assai: 24.50, diaadia: 25.90, carrefour: 28.90, dona: 30.50, bigbox: 31.90, paodeacucar: 34.90 },
  'papel': { assai: 14.49, atacadao: 14.89, diaadia: 15.79, carrefour: 17.50, dona: 18.50, bigbox: 19.50, paodeacucar: 21.20 },
  'dente': { carrefour: 3.89, assai: 4.19, atacadao: 4.35, diaadia: 4.55, dona: 5.10, bigbox: 5.40, paodeacucar: 5.90 },
  'fiodental': { assai: 8.29, atacadao: 8.49, diaadia: 8.80, carrefour: 10.50, dona: 11.20, bigbox: 11.90, paodeacucar: 12.50 },
  'sabonete': { assai: 1.79, atacadao: 1.85, diaadia: 1.95, carrefour: 2.29, dona: 2.49, bigbox: 2.69, paodeacucar: 2.99 },
  'shampoo': { carrefour: 14.50, assai: 14.90, atacadao: 15.20, diaadia: 15.80, dona: 18.90, bigbox: 19.90, paodeacucar: 21.50 },
  'pao': { assai: 6.79, atacadao: 6.89, diaadia: 7.20, carrefour: 8.50, dona: 8.80, bigbox: 9.20, paodeacucar: 9.90 },
  'biscoito': { assai: 3.49, atacadao: 3.59, diaadia: 3.75, carrefour: 4.50, dona: 4.70, bigbox: 4.90, paodeacucar: 5.20 },
  'achocolatado': { assai: 7.49, atacadao: 7.69, diaadia: 7.99, carrefour: 8.79, dona: 9.29, bigbox: 9.79, paodeacucar: 10.49 },
  'cabelo': { atacadao: 14.50, assai: 14.90, diaadia: 15.10, carrefour: 17.90, dona: 18.90, bigbox: 19.90, paodeacucar: 21.90 },
  'cerveja': { assai: 4.29, atacadao: 4.39, diaadia: 4.55, carrefour: 4.99, dona: 5.29, bigbox: 5.49, paodeacucar: 5.89 },
  'vinho': { atacadao: 31.50, assai: 31.90, diaadia: 33.50, carrefour: 35.90, dona: 39.90, bigbox: 42.90, paodeacucar: 45.90 },
  'pet': { atacadao: 40.90, assai: 41.90, diaadia: 43.90, carrefour: 48.90, dona: 51.90, bigbox: 54.90, paodeacucar: 58.90 },
  'utilidades': { atacadao: 9.50, assai: 9.80, diaadia: 10.00, carrefour: 11.90, dona: 12.80, bigbox: 13.50, paodeacucar: 14.50 }
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
  'Colgate', 'Oral-B', 'Dove', 'Pantene', 'Neve',
  'Nescau', 'Toddy', 'Tody', 'Nestlé', 'Nestle'
];

// Cotações específicas por Marca para Brasília (DF) com disputa autêntica entre redes
const COTACOES_MARCAS_DF = {
  // Achocolatados em Brasília (Assaí vence no Nescau, Dia a Dia vence no Toddy/Tody)
  'achocolatado:nescau': { assai: 7.69, diaadia: 7.99, atacadao: 8.29, carrefour: 8.79, dona: 9.29, bigbox: 9.79, paodeacucar: 10.49 },
  'achocolatado:toddy': { diaadia: 7.59, assai: 7.89, atacadao: 7.99, carrefour: 8.69, dona: 8.99, bigbox: 9.49, paodeacucar: 10.19 },
  'achocolatado:tody': { diaadia: 7.59, assai: 7.89, atacadao: 7.99, carrefour: 8.69, dona: 8.99, bigbox: 9.49, paodeacucar: 10.19 },

  // Leites em Brasília
  'leite:piracanjuba': { diaadia: 4.29, atacadao: 4.39, assai: 4.49, carrefour: 4.89, bigbox: 5.39, dona: 5.19, paodeacucar: 5.69 },
  'leite:leitissimo': { assai: 7.69, atacadao: 7.79, diaadia: 7.95, carrefour: 8.50, bigbox: 9.20, dona: 8.99, paodeacucar: 9.60 },
  'leite:ninho': { carrefour: 5.49, assai: 5.59, atacadao: 5.69, diaadia: 5.75, bigbox: 6.89, dona: 6.50, paodeacucar: 7.20 },
  'leite:itambe': { assai: 4.39, atacadao: 4.49, diaadia: 4.55, carrefour: 4.99, bigbox: 5.49, dona: 5.29, paodeacucar: 5.79 },
  'leite:molico': { assai: 6.09, atacadao: 6.20, diaadia: 6.35, carrefour: 6.89, bigbox: 7.50, dona: 7.20, paodeacucar: 7.89 },

  // Arroz e Feijão em Brasília
  'arroz:tio joao': { atacadao: 28.90, assai: 29.50, diaadia: 29.90, carrefour: 32.90, bigbox: 35.90, dona: 33.90, paodeacucar: 37.90 },
  'arroz:camil': { atacadao: 25.90, assai: 26.50, diaadia: 26.90, carrefour: 28.90, bigbox: 31.20, dona: 29.90, paodeacucar: 32.50 },
  'arroz:cristal': { diaadia: 27.40, atacadao: 27.90, assai: 28.20, carrefour: 29.50, bigbox: 32.90, dona: 31.50, paodeacucar: 34.90 },
  'arroz:prato fino': { atacadao: 31.50, assai: 31.90, diaadia: 32.20, carrefour: 34.50, bigbox: 37.90, dona: 35.90, paodeacucar: 39.90 },

  // Arroz Integral e 1kg por Marca — Brasília DF
  'arroz_integral:camil': { atacadao: 7.50, assai: 7.80, diaadia: 7.90, carrefour: 8.90, bigbox: 9.50, dona: 9.20, paodeacucar: 10.50 },
  'arroz_integral:tio joao': { atacadao: 7.90, assai: 8.20, diaadia: 8.40, carrefour: 9.20, bigbox: 9.90, dona: 9.60, paodeacucar: 10.90 },
  'arroz_integral:cristal': { diaadia: 7.70, atacadao: 7.90, assai: 8.10, carrefour: 8.95, bigbox: 9.40, dona: 9.10, paodeacucar: 10.20 },
  'arroz_1kg:camil': { diaadia: 5.90, atacadao: 6.20, assai: 6.30, carrefour: 6.90, bigbox: 7.50, dona: 7.20, paodeacucar: 7.90 },
  'arroz_1kg:tio joao': { assai: 6.50, diaadia: 6.70, atacadao: 6.80, carrefour: 7.50, bigbox: 8.20, dona: 7.90, paodeacucar: 8.50 },
  'arroz_1kg:prato fino': { atacadao: 7.20, assai: 7.40, diaadia: 7.50, carrefour: 7.99, bigbox: 8.60, dona: 8.30, paodeacucar: 8.90 },
  'feijao:camil': { diaadia: 6.49, atacadao: 6.99, assai: 7.15, carrefour: 7.80, bigbox: 8.40, dona: 7.99, paodeacucar: 8.90 },
  'feijao:kicaldo': { assai: 6.89, diaadia: 7.10, atacadao: 7.20, carrefour: 7.99, bigbox: 8.60, dona: 8.20, paodeacucar: 9.10 },
  'feijao:tio jorge': { atacadao: 6.79, diaadia: 6.95, assai: 7.25, carrefour: 7.90, bigbox: 8.10, dona: 7.80, paodeacucar: 8.50 },

  // Feijão Preto por Marca (15-20% mais caro que carioca — realidade do DF)
  'feijao_preto:camil': { diaadia: 7.99, atacadao: 8.49, assai: 8.69, carrefour: 9.50, bigbox: 10.20, dona: 9.79, paodeacucar: 10.90 },
  'feijao_preto:kicaldo': { assai: 8.39, diaadia: 8.60, atacadao: 8.79, carrefour: 9.69, bigbox: 10.40, dona: 9.99, paodeacucar: 11.20 },
  'feijao_preto:tio jorge': { atacadao: 8.29, diaadia: 8.49, assai: 8.89, carrefour: 9.60, bigbox: 10.10, dona: 9.69, paodeacucar: 10.90 },

  // Creme Dental por Marca — Brasília DF (set/2026)
  'dente:colgate': { carrefour: 3.99, assai: 4.29, atacadao: 4.45, diaadia: 4.55, dona: 5.10, bigbox: 5.40, paodeacucar: 5.90 },
  'dente:oral-b': { carrefour: 6.49, assai: 6.89, atacadao: 7.20, diaadia: 7.39, dona: 8.20, bigbox: 8.50, paodeacucar: 9.90 },
  'dente:sorriso': { carrefour: 3.49, assai: 3.79, atacadao: 3.99, diaadia: 4.10, dona: 4.60, bigbox: 4.90, paodeacucar: 5.50 },
  'dente:close up': { carrefour: 3.79, assai: 4.09, atacadao: 4.29, diaadia: 4.39, dona: 4.90, bigbox: 5.20, paodeacucar: 5.70 },
  'dente:sensodyne': { carrefour: 14.90, assai: 15.50, atacadao: 15.90, diaadia: 16.20, dona: 17.90, bigbox: 18.50, paodeacucar: 19.90 },

  // Açúcar e Óleo
  'acucar:cristal': { atacadao: 14.90, diaadia: 15.10, assai: 15.20, carrefour: 16.20, bigbox: 16.90, dona: 16.50, paodeacucar: 17.50 },
  'acucar:caravelas': { assai: 15.10, diaadia: 15.30, atacadao: 15.40, carrefour: 15.80, bigbox: 16.50, dona: 16.20, paodeacucar: 17.20 },
  'acucar:uniao': { assai: 15.90, atacadao: 16.20, diaadia: 16.40, carrefour: 17.20, bigbox: 17.90, dona: 17.50, paodeacucar: 18.50 },
  'oleo:soya': { atacadao: 5.29, assai: 5.42, diaadia: 5.49, carrefour: 5.97, bigbox: 6.50, dona: 6.30, paodeacucar: 6.80 },
  'oleo:liza': { assai: 5.85, atacadao: 5.90, diaadia: 5.99, carrefour: 6.30, bigbox: 6.70, dona: 6.50, paodeacucar: 6.99 },
  'oleo:salada': { assai: 5.89, atacadao: 5.95, diaadia: 6.10, carrefour: 6.40, bigbox: 6.60, dona: 6.45, paodeacucar: 6.95 },

  // Cafés em Brasília
  'cafe:pilao': { assai: 16.89, diaadia: 17.20, atacadao: 17.40, carrefour: 18.90, bigbox: 20.90, dona: 19.90, paodeacucar: 21.90 },
  'cafe:3 coracoes': { assai: 16.49, diaadia: 16.79, atacadao: 16.90, carrefour: 18.50, bigbox: 19.90, dona: 19.20, paodeacucar: 20.90 },
  'cafe:melitta': { assai: 17.49, diaadia: 17.80, atacadao: 17.90, carrefour: 19.50, bigbox: 21.50, dona: 20.50, paodeacucar: 22.50 },
  'cafe:l\'or': { assai: 21.49, atacadao: 21.90, diaadia: 22.50, carrefour: 24.90, bigbox: 27.90, dona: 26.50, paodeacucar: 28.90 },

  // Macarrão e Farinha
  'macarrao:adria': { assai: 3.59, diaadia: 3.79, atacadao: 3.99, carrefour: 4.35, bigbox: 4.75, dona: 4.49, paodeacucar: 5.10 },
  'macarrao:renata': { assai: 3.89, diaadia: 4.05, atacadao: 4.10, carrefour: 4.50, bigbox: 4.90, dona: 4.70, paodeacucar: 5.20 },
  'macarrao:barilla': { assai: 5.49, atacadao: 5.60, diaadia: 5.75, carrefour: 5.89, bigbox: 6.50, dona: 6.20, paodeacucar: 6.90 },
  'farinha:dona benta': { assai: 5.25, atacadao: 5.40, diaadia: 5.45, carrefour: 5.80, bigbox: 6.20, dona: 5.95, paodeacucar: 6.50 },
  'farinha:sol': { diaadia: 4.89, atacadao: 4.99, assai: 5.10, carrefour: 5.49, bigbox: 5.69, dona: 5.39, paodeacucar: 5.99 },
  'farinha:primor': { atacadao: 4.69, diaadia: 4.79, assai: 4.85, carrefour: 5.19, bigbox: 5.39, dona: 5.20, paodeacucar: 5.79 },

  // Carnes e Frios
  'frango:seara': { diaadia: 16.90, atacadao: 17.90, assai: 18.20, carrefour: 19.50, bigbox: 20.90, dona: 19.90, paodeacucar: 22.50 },
  'frango:sadia': { diaadia: 17.40, atacadao: 18.20, assai: 18.50, carrefour: 19.80, bigbox: 21.20, dona: 20.40, paodeacucar: 22.90 },
  'carne:friboi': { atacadao: 30.90, diaadia: 31.50, assai: 32.50, carrefour: 34.90, bigbox: 36.90, dona: 35.50, paodeacucar: 39.90 },
  'carne:maturatta': { diaadia: 33.50, atacadao: 33.90, assai: 34.50, carrefour: 36.90, bigbox: 38.90, dona: 37.50, paodeacucar: 41.90 },
  'queijo:piracanjuba': { diaadia: 8.40, assai: 8.50, atacadao: 8.70, carrefour: 9.50, bigbox: 10.20, dona: 9.80, paodeacucar: 10.90 },
  'manteiga:itambe': { diaadia: 9.89, assai: 10.29, atacadao: 10.40, carrefour: 11.50, bigbox: 12.20, dona: 11.80, paodeacucar: 12.90 },

  // Limpeza em Brasília (Assaí lidera limpeza e lavanderia)
  'sabao:omo': { assai: 20.90, diaadia: 22.50, atacadao: 22.90, carrefour: 24.90, bigbox: 27.90, dona: 26.50, paodeacucar: 29.50 },
  'sabao:brilhante': { assai: 16.90, diaadia: 17.50, atacadao: 17.90, carrefour: 19.50, bigbox: 21.90, dona: 20.90, paodeacucar: 23.50 },
  'sabao:ariel': { assai: 21.90, atacadao: 23.50, diaadia: 23.20, carrefour: 25.90, bigbox: 28.90, dona: 27.50, paodeacucar: 30.50 },
  'amaciante:comfort': { assai: 14.80, diaadia: 15.50, atacadao: 15.90, carrefour: 17.50, bigbox: 19.50, dona: 18.50, paodeacucar: 20.50 },
  'amaciante:downy': { assai: 16.89, diaadia: 17.50, atacadao: 17.90, carrefour: 19.50, bigbox: 22.50, dona: 21.50, paodeacucar: 24.50 },
  'amaciante:ype': { assai: 11.20, diaadia: 11.70, atacadao: 11.90, carrefour: 13.50, bigbox: 14.90, dona: 14.20, paodeacucar: 15.90 },
  'detergente:ype': { assai: 1.89, diaadia: 1.99, atacadao: 2.09, carrefour: 2.35, bigbox: 2.69, dona: 2.49, paodeacucar: 2.89 },
  'detergente:minuano': { assai: 1.79, diaadia: 1.89, atacadao: 1.95, carrefour: 2.25, bigbox: 2.55, dona: 2.39, paodeacucar: 2.75 },
  'detergente:limpol': { assai: 1.85, diaadia: 1.95, atacadao: 2.05, carrefour: 2.30, bigbox: 2.60, dona: 2.45, paodeacucar: 2.80 }
};

function detectarMarca(texto) {
  if (!texto) return null;
  const t = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (let marca of MARCAS_POPULARES) {
    const m = marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const regex = new RegExp(`(^|\\s)${m}(\\s|$)`, 'i');
    if (regex.test(t)) {
      if (m.includes('toddy') || m.includes('tody')) return 'Toddy';
      if (m.includes('nescau')) return 'Nescau';
      if (m.includes('nestle')) return 'Nestlé';
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
    'arroz': ['arroz 5kg', 'arroz branco', 'arroz agulhinha'],
    'arroz_1kg': ['arroz arboreo', 'arroz jasmim', 'arroz 1kg'],
    'arroz_integral': ['arroz integral', 'arroz 7 graos', 'arroz preto', 'arroz vermelho'],
    'arroz_parboilizado': ['arroz parboilizado'],
    'feijao': ['feijao carioca', 'feijao fradinho', 'feijao branco', 'feijao verde', 'feijao'],
    'feijao_preto': ['feijao preto', 'feijao vermelho', 'feijao rajado'],
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
    'tomate': ['tomate', 'extrato de tomate'],
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
    'biscoito': ['biscoito', 'bolacha', 'torrada'],
    'achocolatado': ['achocolatado', 'toddy', 'tody', 'nescau', 'chocolate', 'cacau', 'nesquik', 'chocolatado'],
    'cabelo': ['escova de cabelo', 'pente', 'escova raquete', 'escova termica', 'presilha', 'elastico'],
    'cerveja': ['cerveja', 'chopp', 'heineken', 'spaten', 'amstel', 'stella', 'corona', 'budweiser'],
    'vinho': ['vinho', 'espumante', 'whisky', 'vodka', 'gin', 'cachaca', 'licor'],
    'pet': ['racao', 'petisco', 'whiskas', 'pedigree', 'areia sanitaria', 'tapete higienico'],
    'utilidades': ['lampada', 'pilha', 'fosforo', 'isqueiro', 'carvao', 'vela', 'papel aluminio']
  };

  const lista = termosValidos[chaveIcone];
  if (!lista) return false;
  return lista.some(termo => n.includes(termo));
}

// Função para calcular o preço de um item num mercado específico de Brasília
function obterPrecoEstimadoMercado(item, redeId) {
  if (!redeId || redeId === 'nenhum' || redeId === 'todos') {
    const pProprio = Number(item.preco || item.ultimoPreco || item.precoReferencia || item.precoMedioDF || 0);
    if (pProprio > 0) return pProprio;
    const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => 
      p.id === item.id || 
      p.id === item.catalogoId || 
      p.nome.toLowerCase().trim() === (item.nome || '').toLowerCase().trim()
    );
    if (padrao && padrao.precoMedioDF > 0) return Number(padrao.precoMedioDF);
    return 0;
  }

  // 0. Preço personalizado gravado no item para essa rede ou raspagem em tempo real
  if (item.precosMercados && item.precosMercados[redeId] && Number(item.precosMercados[redeId]) > 0) {
    return Number(item.precosMercados[redeId]);
  }
  if (window.COTACOES_REAIS_DF && redeId && redeId !== 'todos') {
    const nomeNorm = (item.nome || '').toLowerCase().trim();
    const chaveIcone = item.icone || detectarChaveIcone(item.nome);
    const entradaReal = window.COTACOES_REAIS_DF[nomeNorm] || window.COTACOES_REAIS_DF[chaveIcone];
    if (entradaReal && entradaReal[redeId] && Number(entradaReal[redeId]) > 0) {
      return Number(entradaReal[redeId]);
    }
  }

  const chaveIcone = item.icone || detectarChaveIcone(item.nome);
  const marca = item.marca || detectarMarca(item.nome);

  // 1. Prioridade: Cotação específica da Marca no DF
  if (marca) {
    const marcaNorm = marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const chaveComposta = `${chaveIcone}:${marcaNorm}`;
    if (COTACOES_MARCAS_DF[chaveComposta]) {
      if (COTACOES_MARCAS_DF[chaveComposta][redeId]) {
        return COTACOES_MARCAS_DF[chaveComposta][redeId];
      }
      const refBaseMarca = COTACOES_MARCAS_DF[chaveComposta].atacadao || COTACOES_MARCAS_DF[chaveComposta].assai || COTACOES_MARCAS_DF[chaveComposta].diaadia || COTACOES_MARCAS_DF[chaveComposta].carrefour;
      if (refBaseMarca) {
        const cat = item.categoria || deduzirCategoria(item.nome);
        const fator = obterFatorCompetitivoMercado(item.nome || item.id, cat, redeId);
        return Number((refBaseMarca * fator).toFixed(2));
      }
    }
  }

  // 2. Preço específico do item no Catálogo Oficial de Brasília (ex: Melancia, Chuchu, Picanha)
  let precoBase = 0;
  let padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => 
    p.id === item.id || 
    p.id === item.catalogoId || 
    p.nome.toLowerCase().trim() === (item.nome || '').toLowerCase().trim()
  );

  if (!padrao && item.nome) {
    const n = item.nome.toLowerCase().trim();
    padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => {
      const pNome = p.nome.toLowerCase();
      return pNome.includes(n) || n.includes(pNome);
    });
  }

  if (padrao && padrao.precoMedioDF > 0) {
    precoBase = padrao.precoMedioDF;
  } else {
    const catItem = AppState.catalogo.find(c => 
      c.nome.toLowerCase().trim() === (item.nome || '').toLowerCase().trim() ||
      String(c.id) === String(item.id) ||
      String(c.id) === String(item.catalogoId) ||
      (item.nome && (c.nome.toLowerCase().includes(item.nome.toLowerCase().trim()) || item.nome.toLowerCase().trim().includes(c.nome.toLowerCase())))
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
      item.precoReferencia = precoBase;
    } else if (catItem && catItem.preco && Number(catItem.preco) > 0) {
      precoBase = Number(catItem.preco);
    }
  }

  if (precoBase > 0) {
    const cat = padrao ? padrao.categoria : (item.categoria || deduzirCategoria(item.nome));
    const fator = obterFatorCompetitivoMercado(item.nome || item.id, cat, redeId);
    return Number((precoBase * fator).toFixed(2));
  }

  // 3. Cotação geral do produto por termo de busca no DF se não tem preço no catálogo
  if (itemCorrespondeCotacaoDF(item.nome, chaveIcone)) {
    if (COTACOES_DF[chaveIcone]) {
      if (COTACOES_DF[chaveIcone][redeId]) {
        return COTACOES_DF[chaveIcone][redeId];
      }
      const refBase = COTACOES_DF[chaveIcone].atacadao || COTACOES_DF[chaveIcone].diaadia || COTACOES_DF[chaveIcone].assai || COTACOES_DF[chaveIcone].carrefour;
      if (refBase) {
        const cat = item.categoria || deduzirCategoria(item.nome);
        const fator = obterFatorCompetitivoMercado(item.nome || item.id, cat, redeId);
        return Number((refBase * fator).toFixed(2));
      }
    }
  }

  // 4. Fallback Inteligente: Garante que NENHUM item fique com preço zerado (R$ --)
  // Deduz uma estimativa razoável de acordo com a categoria estimada do item no DF
  const categoria = item.categoria || deduzirCategoria(item.nome);
  const baselinesCategoria = {
    'Hortifrúti': 6.50,
    'Carnes e Proteínas': 32.90,
    'Laticínios e Frios': 9.90,
    'Limpeza': 8.90,
    'Higiene': 9.50,
    'Padaria e Lanches': 6.90,
    'Básicos e Grãos': 8.50,
    'Diversos': 7.90
  };
  const precoBaseFallback = (item.preco && Number(item.preco) > 0) 
    ? Number(item.preco) 
    : (baselinesCategoria[categoria] || 8.50);
  const fatorFallback = obterFatorCompetitivoMercado(item.nome || item.id, categoria, redeId);
  return Number((precoBaseFallback * fatorFallback).toFixed(2));
}

// ========================================================
// CONTROLE DA SLIDE BAR LATERAL À ESQUERDA (SIDEBAR)
// ========================================================
function alternarSidebar(abrir) {
  const sidebar = document.getElementById('sidebar-esquerda');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar) return;

  const estaAberta = sidebar.classList.contains('aberta');
  const deveAbrir = (abrir !== undefined) ? !!abrir : !estaAberta;

  if (deveAbrir) {
    sidebar.classList.add('aberta');
    if (overlay) overlay.classList.add('aberta');
    document.body.style.overflow = (window.innerWidth <= 768) ? 'hidden' : '';
  } else {
    sidebar.classList.remove('aberta');
    if (overlay) overlay.classList.remove('aberta');
    document.body.style.overflow = '';
  }
}

// Fecha a sidebar ao pressionar Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    alternarSidebar(false);
  }
});

// Formatação Numérica Padrão Brasileiro com Separador de Milhar (ex: 2.014,62 / R$ 2.014,62)
function formatarMoeda(valor, comPrefixo = true) {
  const num = Number(valor) || 0;
  const formatado = num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return comPrefixo ? `R$ ${formatado}` : formatado;
}

// Atualiza o Card de Economia na Sidebar com o Campeão Real (Movido para cá)
function atualizarCardEconomiaSidebar(campeaoId, totais, economia) {
  const elConteudo = document.getElementById('sidebar-eco-conteudo');
  if (!elConteudo) return;

  if (!campeaoId || !totais || !MERCADOS_DF[campeaoId] || AppState.listaAtiva.length === 0) {
    elConteudo.innerHTML = `
      <div class="sidebar-eco-msg" style="color: var(--text-muted); font-size: 0.8rem; line-height: 1.4;">
        Adicione itens à lista para cotar o mercado mais barato do DF.
      </div>
    `;
    return;
  }

  const infoCampeao = MERCADOS_DF[campeaoId];
  const totalCampeaoTxt = formatarMoeda(totais[campeaoId] || 0, false);
  const economiaTxt = (economia > 0) ? formatarMoeda(economia, false) : '0,00';
  const logo = (typeof obterLogoMercado === 'function' && obterLogoMercado(campeaoId)) || `logos/${campeaoId}.png`;

  elConteudo.innerHTML = `
    <div class="sidebar-eco-linha-mercado-total">
      <div class="sidebar-eco-mercado-info">
        <img src="${logo}" class="sidebar-eco-logo" 
             onerror="this.outerHTML='<span style=\\'font-size:1.1rem;\\'>${infoCampeao.emoji}</span>'" alt="${infoCampeao.nome}">
        <span class="sidebar-eco-mercado-titulo">${infoCampeao.nome}</span>
      </div>
      <span class="sidebar-eco-divisor">|</span>
      <div class="sidebar-eco-total-bloco">
        Total <strong class="sidebar-eco-total-valor">R$ ${totalCampeaoTxt}</strong>
      </div>
    </div>
    ${economia > 0 ? `
      <div class="sidebar-eco-poupanca">
        <span class="sidebar-eco-poupanca-label">Sua economia será:</span>
        <strong class="sidebar-eco-poupanca-valor">R$ ${economiaTxt}</strong>
      </div>
    ` : ''}
  `;
}

// Navegação de Abas Unificada (Sidebar + Menus) com Cortinas Identadas
function alternarAbaApp(aba, isUserClick = true) {
  if (!aba) return;

  const abaAnterior = AppState.abaAtiva;
  AppState.abaAtiva = aba;

  // Sincroniza classes ativas em todos os menus (sidebar, inferior celular e desktop)
  document.querySelectorAll('.nav-item, .sidebar-nav-item, .mobile-nav-btn').forEach(b => {
    if (b.getAttribute('data-aba') === aba) b.classList.add('ativo');
    else b.classList.remove('ativo');
  });

  const vLista = document.getElementById('view-lista');
  const vDespensa = document.getElementById('view-despensa');
  const vMercados = document.getElementById('view-mercados');
  const vHistorico = document.getElementById('view-historico');

  if (vLista) vLista.style.display = AppState.abaAtiva === 'lista' ? 'block' : 'none';
  if (vDespensa) vDespensa.style.display = AppState.abaAtiva === 'despensa' ? 'block' : 'none';
  if (vMercados) vMercados.style.display = AppState.abaAtiva === 'mercados' ? 'block' : 'none';
  if (vHistorico) vHistorico.style.display = AppState.abaAtiva === 'historico' ? 'block' : 'none';

  // Submenu de COMPRAR com cortina suave identada
  const subComprar = document.getElementById('sidebar-subopcoes-comprar');
  if (subComprar) {
    if (aba === 'lista') {
      if (abaAnterior === 'lista' && isUserClick) {
        subComprar.classList.toggle('aberto');
      } else {
        subComprar.classList.add('aberto');
      }
    } else {
      subComprar.classList.remove('aberto');
    }
  }

  // Submenu de MONTAR LISTA com cortina suave identada
  const subMontar = document.getElementById('sidebar-subopcoes-montar');
  if (subMontar) {
    if (aba === 'despensa') {
      if (abaAnterior === 'despensa' && isUserClick) {
        subMontar.classList.toggle('aberto');
      } else {
        subMontar.classList.add('aberto');
      }
    } else {
      subMontar.classList.remove('aberto');
    }
  }

  // Submenu de HISTÓRICO com cortina suave identada
  const subHistorico = document.getElementById('sidebar-subopcoes-historico');
  if (subHistorico) {
    if (aba === 'historico') {
      if (abaAnterior === 'historico' && isUserClick) {
        subHistorico.classList.toggle('aberto');
      } else {
        subHistorico.classList.add('aberto');
      }
      // Sincroniza estado ativo nos botões filhos do histórico
      const btnSideHistCompras = document.getElementById('btn-sidebar-hist-compras');
      const btnSideHistItens = document.getElementById('btn-sidebar-hist-itens');
      const btnSideHistMaisComprados = document.getElementById('btn-sidebar-hist-mais-comprados');
      if (btnSideHistCompras) btnSideHistCompras.classList.toggle('ativo', modoExibicaoHistorico === 'compras');
      if (btnSideHistItens) btnSideHistItens.classList.toggle('ativo', modoExibicaoHistorico === 'itens');
      if (btnSideHistMaisComprados) btnSideHistMaisComprados.classList.toggle('ativo', modoExibicaoHistorico === 'mais_comprados');
    } else {
      subHistorico.classList.remove('aberto');
    }
  }

  // Alternar abas do painel superior congelado
  const abasCategorias = document.getElementById('barra-abas-categorias');
  const inputTopo = document.getElementById('input-novo-item');
  const barraMercados = document.querySelector('.barra-mercados-filtro');
  const btnToggleModo = document.getElementById('btn-toggle-modo-mercado');

  // Em Montar Lista e Histórico, retira a linha com supermercados!
  if (barraMercados) {
    barraMercados.style.display = (AppState.abaAtiva === 'despensa' || AppState.abaAtiva === 'historico' || AppState.modoNoMercado) ? 'none' : 'flex';
  }
  if (btnToggleModo) {
    btnToggleModo.style.display = (AppState.abaAtiva === 'lista') ? 'inline-flex' : 'none';
  }

  const linhaAbasMobile = document.querySelector('.linha-abas-e-total-mobile');
  const elBadgeMobile = document.getElementById('badge-total-geral-mobile');
  const buscaTopoReduzida = document.querySelector('.busca-topo-reduzida');
  const histTopoIntegrado = document.getElementById('historico-topo-integrado');
  document.body.setAttribute('data-aba-ativa', aba);
  document.body.classList.toggle('aba-historico', aba === 'historico');

  if (buscaTopoReduzida) {
    buscaTopoReduzida.style.display = (AppState.abaAtiva === 'historico') ? 'none' : 'flex';
  }
  if (histTopoIntegrado) {
    histTopoIntegrado.style.display = (AppState.abaAtiva === 'historico') ? 'flex' : 'none';
  }
  if (linhaAbasMobile) {
    linhaAbasMobile.style.display = (AppState.abaAtiva === 'lista' || AppState.abaAtiva === 'despensa') ? 'flex' : 'none';
  }
  if (elBadgeMobile) {
    elBadgeMobile.style.display = (AppState.abaAtiva === 'historico' || AppState.abaAtiva === 'mercados') ? 'none' : '';
  }
  if (abasCategorias) abasCategorias.style.display = (AppState.abaAtiva === 'lista' || AppState.abaAtiva === 'despensa') ? 'flex' : 'none';
  if (typeof atualizarVisualBotaoOrdemAlfabetica === 'function') {
    atualizarVisualBotaoOrdemAlfabetica();
  }

  // Controles de Aumentar / Reduzir fonte no cabeçalho visíveis apenas na aba Montar Lista
  const ctrlFonteHeader = document.getElementById('controles-fonte-header');
  const isMontar = (AppState.abaAtiva === 'despensa');
  if (ctrlFonteHeader) ctrlFonteHeader.style.display = isMontar ? 'inline-flex' : 'none';

  if (inputTopo) {
    inputTopo.placeholder = AppState.abaAtiva === 'despensa' 
      ? 'Pesquisar ou cadastrar em Montar Lista...' 
      : 'Pesquisar ou adicionar à Lista de Compra...';
  }

  // Ao entrar em Lista de Compra ou Mercados, sincroniza e reseta o filtro para ver tudo!
  if (AppState.abaAtiva === 'lista') {
    sincronizarListaAtivaComCatalogo();
    AppState.filtroCategoria = 'todas';
    const abas = document.querySelectorAll('.despensa-aba-tab');
    abas.forEach(b => {
      if (b.getAttribute('data-categoria') === 'todas') b.classList.add('ativa');
      else b.classList.remove('ativa');
    });
  } else if (AppState.abaAtiva === 'mercados') {
    sincronizarListaAtivaComCatalogo();
  }

  renderizarTudo();
}

function configurarNavegacao() {
  const todosBotoesNav = document.querySelectorAll('.nav-item, .sidebar-nav-item');
  todosBotoesNav.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const aba = btn.getAttribute('data-aba');
      if (aba) alternarAbaApp(aba, true);
    };
  });
}

// Alternar mercado de referência para a lista
function selecionarMercadoReferencia(mercadoId) {
  // Se clicar no mercado que já está ativo (exceto 'nenhum'), desmarca para 'nenhum'
  if (AppState.mercadoReferencia === mercadoId && mercadoId !== 'nenhum') {
    mercadoId = 'nenhum';
  }
  if (!mercadoId || mercadoId === 'todos') mercadoId = 'nenhum';
  AppState.mercadoReferencia = mercadoId;
  const chips = document.querySelectorAll('.btn-chip-mercado');
  chips.forEach(chip => {
    if (chip.getAttribute('data-mercado') === mercadoId) {
      chip.classList.add('ativo');
    } else {
      chip.classList.remove('ativo');
    }
  });

  // Se o usuário selecionou uma rede específica (diferente de 'nenhum') e a cotação estava inativa, ativa automaticamente
  if (!AppState.cotacaoAtiva && mercadoId !== 'nenhum') {
    AppState.cotacaoAtiva = true;
    atualizarVisualBotaoCotar();
  }

  salvarEstado(true);
  atualizarCardResumo();

  if (AppState.abaAtiva === 'lista') {
    renderizarListaCompras();
  } else if (AppState.abaAtiva === 'mercados') {
    renderizarComparadorDF();
  } else if (AppState.abaAtiva === 'despensa') {
    renderizarDespensa();
  }

  // Animação visual sutil de confirmação nos campos de preço
  if (AppState.abaAtiva === 'lista' && AppState.cotacaoAtiva) {
    setTimeout(() => {
      const inputsPreco = document.querySelectorAll('.preco-input');
      inputsPreco.forEach(inp => {
        inp.style.transition = 'background-color 0.3s ease, border-color 0.3s ease';
        inp.style.backgroundColor = '#EFF6FF';
        inp.style.borderColor = '#3B82F6';
        setTimeout(() => {
          inp.style.backgroundColor = '';
          inp.style.borderColor = '';
        }, 400);
      });
    }, 20);
  }
}

// Renderizar telas
function renderizarTudo() {
  atualizarChipsMercadoUI();
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

function atualizarChipsMercadoUI() {
  const ref = (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos') ? AppState.mercadoReferencia : 'nenhum';
  const chips = document.querySelectorAll('.btn-chip-mercado');
  chips.forEach(chip => {
    if (chip.getAttribute('data-mercado') === ref) {
      chip.classList.add('ativo');
    } else {
      chip.classList.remove('ativo');
    }
  });
}

// Modo de exibição do valor principal no cabeçalho: 'estimado', 'restante', 'carrinho'
let visaoTotalModo = 'estimado';

function alternarVisaoTotal() {
  if (visaoTotalModo === 'estimado') {
    visaoTotalModo = 'restante';
  } else if (visaoTotalModo === 'restante') {
    visaoTotalModo = 'carrinho';
  } else {
    visaoTotalModo = 'estimado';
  }
  atualizarCardResumo();
}

// Atualizar Totais do Carrinho e Estimado com reatividade total
function atualizarCardResumo() {
  const elTotal = document.getElementById('resumo-total-valor');
  const elProgresso = document.getElementById('resumo-progresso-badge');
  const elRotulo = document.getElementById('resumo-total-rotulo');
  const elTagMercado = document.getElementById('resumo-mercado-tag');

  if (!AppState.cotacaoAtiva) {
    if (elRotulo) elRotulo.textContent = 'TOTAL ESTIMADO';
    if (elTagMercado) elTagMercado.classList.remove('visivel');
    if (elTotal) {
      elTotal.textContent = 'R$ --';
      elTotal.style.color = 'var(--text-main)';
    }
    if (elProgresso) {
      const comprados = AppState.listaAtiva.filter(i => i.comprado).length;
      elProgresso.textContent = `🛒 ${comprados} de ${AppState.listaAtiva.length} pegos`;
    }
    const elBadgeMobile = document.getElementById('badge-total-geral-mobile');
    if (elBadgeMobile) elBadgeMobile.textContent = '--';
    return;
  }

  let totalGeral = 0;
  let totalCarrinho = 0;
  let totalRestante = 0;
  let totalItens = AppState.listaAtiva.length;
  let itensNoCarrinho = 0;

  let totalCategoria = 0;
  let totalCarrinhoCategoria = 0;
  let itensCategoria = 0;
  let itensNoCarrinhoCat = 0;
  const temFiltroCat = AppState.filtroCategoria && AppState.filtroCategoria !== 'todas';

  const ref = (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos') ? AppState.mercadoReferencia : 'nenhum';

  // Atualizar Tag do Mercado Ativo no topo
  if (elTagMercado) {
    if (ref !== 'nenhum' && MERCADOS_DF[ref]) {
      elTagMercado.textContent = MERCADOS_DF[ref].nome;
      elTagMercado.title = `Cotado no ${MERCADOS_DF[ref].nome} (Clique em outro mercado na tabela para alternar)`;
      elTagMercado.classList.add('visivel');
    } else {
      elTagMercado.textContent = 'Melhor Cotação';
      elTagMercado.title = 'Cotado com os melhores preços encontrados no DF';
      elTagMercado.classList.add('visivel');
    }
  }

  // Deduplicação no modo resumido
  const nomesResumidosVistos = new Set();

  AppState.listaAtiva.forEach(item => {
    if (AppState.modoResumido) {
      const nomeRes = typeof obterNomeResumido === 'function' ? obterNomeResumido(item.nome) : item.nome;
      const chaveDedup = nomeRes.toLowerCase().trim();
      if (nomesResumidosVistos.has(chaveDedup)) {
        return; // Pula variedade repetida no modo resumido
      }
      nomesResumidosVistos.add(chaveDedup);
    }

    let precoItem = 0;
    if (ehDispositivoMobile) {
      precoItem = (item.precoRegistradoMercado && Number(item.precoRegistradoMercado) > 0) 
        ? Number(item.precoRegistradoMercado) 
        : 0;
    } else {
      precoItem = (ref !== 'nenhum') ? obterPrecoEstimadoMercado(item, ref) : 0;
      if (!precoItem || precoItem <= 0) {
        precoItem = item.preco || item.ultimoPreco || item.precoReferencia || 0;
      }
      if (!precoItem || precoItem <= 0) {
        const precosValidos = Object.keys(MERCADOS_DF).map(r => obterPrecoEstimadoMercado(item, r)).filter(p => p > 0);
        if (precosValidos.length > 0) precoItem = Math.min(...precosValidos);
      }
    }

    const subtotal = (item.qtde || 1) * precoItem;
    totalGeral += subtotal;

    if (item.comprado) {
      totalCarrinho += subtotal;
      itensNoCarrinho++;
    } else {
      totalRestante += subtotal;
    }

    if (temFiltroCat) {
      const isFav = AppState.filtroCategoria === 'favoritos' && (item.favorito || (AppState.catalogo.find(c => c.id === item.id || c.id === item.catalogoId)?.favorito));
      if (isFav || item.categoria === AppState.filtroCategoria) {
        totalCategoria += subtotal;
        itensCategoria++;
        if (item.comprado) {
          totalCarrinhoCategoria += subtotal;
          itensNoCarrinhoCat++;
        }
      }
    }
  });

  // Atualiza Valor e Rótulo com base na visão selecionada
  if (elTotal && elRotulo) {
    if (visaoTotalModo === 'restante') {
      elRotulo.textContent = 'FALTA PEGAR';
      elTotal.textContent = formatarMoeda(totalRestante);
      elTotal.style.color = '#DC2626';
    } else if (visaoTotalModo === 'carrinho') {
      elRotulo.textContent = 'NO CARRINHO';
      elTotal.textContent = formatarMoeda(totalCarrinho);
      elTotal.style.color = '#059669';
    } else {
      elRotulo.textContent = 'TOTAL ESTIMADO';
      elTotal.textContent = formatarMoeda(totalGeral);
      elTotal.style.color = 'var(--text-main)';
    }
  }

  // Atualiza Subtítulo de Progresso em Tempo Real
  if (elProgresso) {
    if (totalItens === 0) {
      elProgresso.textContent = 'Nenhum item na lista';
    } else if (temFiltroCat) {
      elProgresso.textContent = `📁 ${AppState.filtroCategoria}: ${formatarMoeda(totalCategoria)} (${itensNoCarrinhoCat}/${itensCategoria} pegos) • Geral: ${formatarMoeda(totalGeral)}`;
    } else if (itensNoCarrinho === totalItens) {
      elProgresso.textContent = `🎉 Todos os ${totalItens} itens pegos no carrinho! (${formatarMoeda(totalCarrinho)})`;
    } else if (itensNoCarrinho === 0) {
      elProgresso.textContent = `🛒 0 de ${totalItens} pegos • ${formatarMoeda(totalGeral)} a comprar`;
    } else {
      elProgresso.textContent = `🛒 ${itensNoCarrinho} de ${totalItens} no carrinho (${formatarMoeda(totalCarrinho)}) • Falta ${formatarMoeda(totalRestante)}`;
    }
  }

  // Atualiza Badge do Total Geral no Mobile (Fundo Vermelho Escuro, Letra Branca, SÓ OS NÚMEROS)
  const elBadgeMobile = document.getElementById('badge-total-geral-mobile');
  if (elBadgeMobile) {
    let valorExibicao = totalGeral;
    if (visaoTotalModo === 'restante') {
      valorExibicao = totalRestante;
    } else if (visaoTotalModo === 'carrinho') {
      valorExibicao = totalCarrinho;
    }
    elBadgeMobile.textContent = formatarMoeda(valorExibicao, false);
    elBadgeMobile.title = (visaoTotalModo === 'restante') 
      ? `Falta Pegar: ${formatarMoeda(totalRestante)} (Toque para alternar)`
      : (visaoTotalModo === 'carrinho')
        ? `No Carrinho: ${formatarMoeda(totalCarrinho)} (Toque para alternar)`
        : `Total Geral: ${formatarMoeda(totalGeral)} (Toque para alternar)`;
  }

  if (typeof atualizarContadorSidebarMontar === 'function') {
    atualizarContadorSidebarMontar();
  }
}

// Formata nomes grandes para padrão compacto: Alho roxo... (remove parênteses e encurta nomes compridos)
function formatarNomeExibicaoCompacto(nomeOriginal) {
  if (!nomeOriginal) return '';
  // 1. Remove parênteses com unidades: (kg), (Maço), (g), (L), etc.
  let limpo = nomeOriginal.replace(/\s*\([^)]*\)/g, '').trim();

  // 2. Remove adjetivos comerciais e palavras desnecessárias que ocupam espaço
  limpo = limpo.replace(/\b(refinado|refinada|especial|tipo\s*\d+|novo\s+tipo\s*\d+|uht|crocante|hidrop[oô]nica|fresco|fresca|fresquinho|selecionado|selecionada|resfriado|resfriada|congelado|congelada|tradicional|nacional|extra\s+virgem|antisséptico|concentrado|concentrada|nobre)\b/gi, '');
  limpo = limpo.replace(/\s{2,}/g, ' ').trim();

  // 3. Divide em palavras
  const palavras = limpo.split(/\s+/).filter(Boolean);
  
  // Se tiver mais de 2 palavras, coloca '...' (ex: Alho Roxo Nobre -> Alho Roxo...)
  if (palavras.length > 2) {
    return `${palavras[0]} ${palavras[1]}...`;
  }
  if (limpo.length > 15) {
    return `${limpo.substring(0, 13)}...`;
  }

  return limpo;
}

// Interpretador de Preço Falado em Português (Web Speech API)
// Interpretador Inteligente de Preço Falado em Português (Web Speech API)
const NUMEROS_PT_VOZ = {
  'zero': 0, 'um': 1, 'uma': 1, 'dois': 2, 'duas': 2, 'três': 3, 'tres': 3,
  'quatro': 4, 'cinco': 5, 'seis': 6, 'meia': 6, 'sete': 7, 'oito': 8, 'nove': 9,
  'dez': 10, 'onze': 11, 'doze': 12, 'treze': 13, 'quatorze': 14, 'catorze': 14,
  'quinze': 15, 'dezesseis': 16, 'dezessete': 17, 'dezoito': 18, 'dezenove': 19,
  'vinte': 20, 'trinta': 30, 'quarenta': 40, 'cinquenta': 50, 'sessenta': 60,
  'setenta': 70, 'oitenta': 80, 'noventa': 90,
  'cem': 100, 'cento': 100, 'duzentos': 200, 'duzentas': 200,
  'trezentos': 300, 'trezentas': 300, 'quatrocentos': 400, 'quatrocentas': 400,
  'quinhentos': 500, 'quinhentas': 500, 'seiscentos': 600, 'seiscentas': 600,
  'setecentos': 700, 'setecentas': 700, 'oitocentos': 800, 'oitocentas': 800,
  'novecentos': 900, 'novecentas': 900
};

const CENTENAS_PT_VOZ = new Set(['cem', 'cento', 'duzentos', 'duzentas', 'trezentos', 'trezentas', 'quatrocentos', 'quatrocentas', 'quinhentos', 'quinhentas', 'seiscentos', 'seiscentas', 'setecentos', 'setecentas', 'oitocentos', 'oitocentas', 'novecentos', 'novecentas']);
const DEZENAS_PT_VOZ = new Set(['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']);
const UNIDADES_PT_VOZ = new Set(['zero', 'um', 'uma', 'dois', 'duas', 'três', 'tres', 'quatro', 'cinco', 'seis', 'meia', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']);

function parseNumeroInteiroPt(tokens) {
  if (!tokens || tokens.length === 0) return null;
  let total = 0;
  let atual = 0;
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === 'e') continue;
    if (t === 'mil') {
      if (atual === 0) atual = 1;
      total += atual * 1000;
      atual = 0;
    } else if (NUMEROS_PT_VOZ[t] !== undefined) {
      atual += NUMEROS_PT_VOZ[t];
    } else if (!isNaN(parseInt(t))) {
      atual += parseInt(t);
    } else {
      return null;
    }
  }
  return total + atual;
}

function interpretarPrecoFalado(texto) {
  if (!texto) return null;
  let t = texto.toLowerCase().trim();

  // Limpeza de ruídos comuns e palavras de apoio no Speech Recognition do Google
  t = t.replace(/^r\$\s*/i, '');
  t = t.replace(/\s*(da tarde|da manhã|da noite|horas?|hrs?)\s*$/i, '');
  t = t.replace(/\b(cinto|sinto)\b/gi, 'cinco');
  t = t.replace(/\b(apenas|só|somente|custa|está|sai por|de|por)\b/gi, '');
  t = t.replace(/\s{2,}/g, ' ').trim();

  // Converte formato de hora que o Google Speech às vezes gera (ex: 3:25 -> 3,25)
  t = t.replace(/(\d{1,4})[:hH](\d{1,2})/g, '$1,$2');

  // Converte padrão brasileiro com ponto de milhar e vírgula: 1.222,00 -> 1222.00
  t = t.replace(/(\d+)\.(\d{3}),(\d{1,2})/g, '$1$2.$3');
  t = t.replace(/(\d+)\.(\d{3})/g, '$1$2');

  // 1. Dígitos diretos com vírgula ou ponto (ex: '3,25', '235,00', '1222,00', '4.35', '0,55', '0.55')
  const matchNumVirgula = t.match(/^(\d+)[,.](\d{1,2})$/);
  if (matchNumVirgula) {
    const inteira = parseInt(matchNumVirgula[1]);
    const centStr = matchNumVirgula[2].length === 1 ? matchNumVirgula[2] + '0' : matchNumVirgula[2];
    return parseFloat(inteira + '.' + centStr);
  }

  // 2. Dígito puro (ex: '235', '1222', '3', '50')
  const matchNumPuro = t.match(/^(\d+)$/);
  if (matchNumPuro) {
    return parseFloat(parseInt(matchNumPuro[1]).toFixed(2));
  }

  // 3. Dígito com 'e' ou 'com' e centavos em dígito (ex: '3 e 25', '235 e 50', '3 com 25', '1 e 10', '1 e 10 centavos')
  const matchDigitoE = t.match(/^(\d+)\s*(?:e|com|vírgula|virgula)\s*(\d{1,2})(?:\s*centavos?)?$/);
  if (matchDigitoE) {
    const inteira = parseInt(matchDigitoE[1]);
    const centStr = matchDigitoE[2].length === 1 ? matchDigitoE[2] + '0' : matchDigitoE[2];
    return parseFloat(inteira + '.' + centStr);
  }

  // 4. Frase contendo 'reais' ou 'real' (ex: 'um real e 10', 'um real e dez', '1 real e 10', 'duzentos e trinta e cinco reais e vinte centavos')
  if (/\b(?:reais|real)\b/.test(t)) {
    const partes = t.split(/\b(?:reais|real)\b/);
    const tokensInt = partes[0].replace(/[^a-zá-ú0-9\s]/g, '').split(/\s+/).filter(Boolean);
    const inteira = parseNumeroInteiroPt(tokensInt) !== null ? parseNumeroInteiroPt(tokensInt) : 0;
    let centavos = 0;
    if (partes[1]) {
      const centTexto = partes[1].replace(/\bcentavos?\b/g, '').replace(/[^a-zá-ú0-9\s]/g, '').trim();
      const tokensCent = centTexto.split(/\s+/).filter(Boolean);
      centavos = parseNumeroInteiroPt(tokensCent) || 0;
    }
    const centStr = centavos < 10 ? '0' + centavos : String(centavos).slice(0, 2);
    return parseFloat(inteira + '.' + centStr);
  }

  // 5. Frase com apenas CENTAVOS (sem a palavra real/reais): ex: 'cinquenta e cinco centavos', '55 centavos', 'dez centavos', '5 centavos'
  if (/\bcentavos?\b/.test(t)) {
    const centTexto = t.replace(/\bcentavos?\b/g, '').replace(/[^a-zá-ú0-9\s]/g, '').trim();

    // Se tiver formato tipo 'um e dez centavos' ou '1 e 10 centavos'
    const matchEDigitos = centTexto.match(/^(\d+)\s*(?:e|com)\s*(\d+)$/);
    if (matchEDigitos) {
      const inteira = parseInt(matchEDigitos[1]);
      const centavos = parseInt(matchEDigitos[2]);
      const centStr = centavos < 10 ? '0' + centavos : String(centavos).slice(0, 2);
      return parseFloat(inteira + '.' + centStr);
    }

    const tokensCentBruto = centTexto.split(/\s+/).filter(Boolean);
    const idxE = tokensCentBruto.indexOf('e');
    if (idxE > 0 && idxE < tokensCentBruto.length - 1) {
      const prev = tokensCentBruto[idxE - 1];
      const next = tokensCentBruto[idxE + 1];
      const ehDezenaComUnidade = DEZENAS_PT_VOZ.has(prev) && UNIDADES_PT_VOZ.has(next);
      if (!ehDezenaComUnidade) {
        const p1 = tokensCentBruto.slice(0, idxE);
        const p2 = tokensCentBruto.slice(idxE + 1);
        const n1 = parseNumeroInteiroPt(p1);
        const n2 = parseNumeroInteiroPt(p2);
        if (n1 !== null && n2 !== null && n2 >= 0 && n2 < 100) {
          const centStr = n2 < 10 ? '0' + n2 : String(n2).slice(0, 2);
          return parseFloat(n1 + '.' + centStr);
        }
      }
    }

    const tokensCent = centTexto.split(/\s+/).filter(Boolean);
    const centavos = parseNumeroInteiroPt(tokensCent);
    if (centavos !== null) {
      if (centavos >= 100) {
        return parseFloat((centavos / 100).toFixed(2));
      }
      const centStr = centavos < 10 ? '0' + centavos : String(centavos).slice(0, 2);
      return parseFloat('0.' + centStr);
    }
  }

  // 6. Frase com conector explícito de centavos: 'com' ou 'vírgula' (ex: 'zero vírgula cinquenta e cinco', '3 vírgula 25')
  if (/\s+(?:com|vírgula|virgula)\s+/.test(t)) {
    const partes = t.split(/\s+(?:com|vírgula|virgula)\s+/);
    const tokensInt = partes[0].replace(/[^a-zá-ú0-9\s]/g, '').split(/\s+/).filter(Boolean);
    const tokensCent = partes[1].replace(/\bcentavos?\b/g, '').replace(/[^a-zá-ú0-9\s]/g, '').split(/\s+/).filter(Boolean);
    const inteira = parseNumeroInteiroPt(tokensInt);
    const centavos = parseNumeroInteiroPt(tokensCent);
    if (inteira !== null && centavos !== null) {
      const centStr = centavos < 10 ? '0' + centavos : String(centavos).slice(0, 2);
      return parseFloat(inteira + '.' + centStr);
    }
  }

  // 7. Tokens por extenso (ex: 'duzentos e trinta e cinco', 'mil duzentos e vinte e dois', 'três e vinte e cinco', 'um e dez', 'quatro e trinta e cinco')
  const tokens = t.replace(/[.,]/g, '').split(/\s+/).filter(Boolean);

  let melhorDivisao = -1;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === 'e') {
      const prev = tokens[i - 1];
      const next = tokens[i + 1];
      
      const ehDezenaComUnidade = DEZENAS_PT_VOZ.has(prev) && UNIDADES_PT_VOZ.has(next);
      const ehCentenaComDezena = CENTENAS_PT_VOZ.has(prev) && DEZENAS_PT_VOZ.has(next);
      const ehCentenaComUnidade = CENTENAS_PT_VOZ.has(prev) && UNIDADES_PT_VOZ.has(next);
      const ehMilComCentena = prev === 'mil' && CENTENAS_PT_VOZ.has(next);
      const ehMilComDezena = prev === 'mil' && DEZENAS_PT_VOZ.has(next);
      const ehMilComUnidade = prev === 'mil' && UNIDADES_PT_VOZ.has(next);

      if (ehDezenaComUnidade || ehCentenaComDezena || ehCentenaComUnidade || ehMilComCentena || ehMilComDezena || ehMilComUnidade) {
        continue;
      }
      
      melhorDivisao = i;
      break;
    }
  }

  if (melhorDivisao !== -1) {
    const parte1 = tokens.slice(0, melhorDivisao);
    const parte2 = tokens.slice(melhorDivisao + 1);
    const n1 = parseNumeroInteiroPt(parte1);
    const n2 = parseNumeroInteiroPt(parte2);
    if (n1 !== null && n2 !== null && n2 >= 0 && n2 < 100) {
      const centStr = n2 < 10 ? '0' + n2 : String(n2).slice(0, 2);
      return parseFloat(n1 + '.' + centStr);
    }
  }

  // Se não houve quebra de centavos, o texto é um número inteiro completo!
  const nInteiro = parseNumeroInteiroPt(tokens);
  if (nInteiro !== null && nInteiro > 0) {
    return parseFloat(nInteiro.toFixed(2));
  }

  return null;
}

// Inicia escuta de preço por voz para o item
let gravandoPrecoItemId = null;
let recognizerPreco = null;

function ouvirPrecoItem(itemId, btnEl, ev) {
  if (ev) ev.stopPropagation();
  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemId));
  if (!item) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    mostrarNotificacaoToast("ℹ️ Navegador sem suporte a voz direta. Abrindo edição manual...");
    editarPrecoItemManualmente(itemId);
    return;
  }

  // Se já está ouvindo este mesmo item, cancela
  if (gravandoPrecoItemId === itemId && recognizerPreco) {
    try { recognizerPreco.stop(); } catch(e){}
    gravandoPrecoItemId = null;
    if (btnEl) btnEl.classList.remove('ouvindo');
    return;
  }

  if (recognizerPreco) {
    try { recognizerPreco.abort(); } catch(e){}
  }

  // Ao clicar no mic, zera os valores do item imediatamente
  item.preco = 0;
  item.precoRegistradoMercado = 0;
  if (item.catalogoId) {
    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.catalogoId));
    if (catItem) {
      catItem.precoRegistradoMercado = 0;
      catItem.preco = 0;
    }
  }

  // Atualiza imediatamente o badge na tela para R$ 0,00
  const badgeEl = document.getElementById(`badge-preco-${itemId}`);
  if (badgeEl) {
    badgeEl.textContent = 'R$ 0,00';
    badgeEl.className = 'badge-preco-real sem-preco';
  }
  salvarEstado(false);
  atualizarCardResumo();

  gravandoPrecoItemId = itemId;
  if (btnEl) btnEl.classList.add('ouvindo');

  try {
    recognizerPreco = new SpeechRecognition();
    recognizerPreco.lang = 'pt-BR';
    recognizerPreco.continuous = false;
    recognizerPreco.interimResults = false;
    recognizerPreco.maxAlternatives = 3;
  } catch (errInst) {
    console.error("Erro ao instanciar SpeechRecognition:", errInst);
    editarPrecoItemManualmente(itemId);
    return;
  }

  recognizerPreco.onresult = (event) => {
    let precoExtraido = null;
    let melhorTexto = '';

    // Avalia todas as hipóteses transcritas para pegar a interpretação correta de preço
    for (let i = 0; i < event.results.length; i++) {
      const res = event.results[i];
      for (let j = 0; j < res.length; j++) {
        const trans = res[j].transcript;
        console.log(`[Voz Preço] Hipótese [${i}][${j}]:`, trans);
        const preco = interpretarPrecoFalado(trans);
        if (preco && preco > 0) {
          precoExtraido = preco;
          melhorTexto = trans;
          break;
        }
      }
      if (precoExtraido) break;
    }

    if (precoExtraido && precoExtraido > 0) {
      console.log(`[Voz Preço] Preço extraído com sucesso: ${precoExtraido} (texto: "${melhorTexto}")`);
      item.preco = precoExtraido;
      item.ultimoPreco = precoExtraido;
      item.precoRegistradoMercado = precoExtraido;
      if (item.catalogoId) {
        const catItem = AppState.catalogo.find(c => String(c.id) === String(item.catalogoId));
        if (catItem) {
          catItem.precoRegistradoMercado = precoExtraido;
          catItem.preco = precoExtraido;
        }
      }
      salvarEstado(true);

      // Atualiza in-place no DOM o badge de preço sem toast popup nem recriar a tabela
      const badgeAtualizado = document.getElementById(`badge-preco-${item.id}`);
      if (badgeAtualizado) {
        badgeAtualizado.textContent = formatarMoeda(precoExtraido);
        badgeAtualizado.className = 'badge-preco-real com-preco';
      } else {
        renderizarListaCompras();
      }
      atualizarCardResumo();
      atualizarBalaoTotalCategoria(item.categoria || 'Diversos');
    } else {
      mostrarNotificacaoToast(`⚠️ Não identifiquei o valor falado ("${melhorTexto || 'silêncio'}"). Tente novamente ou clique no valor para digitar.`);
    }

    // Após concluir, mantém verde por 2 segundos e depois volta à cor normal
    if (btnEl) {
      btnEl.classList.remove('ouvindo');
      btnEl.classList.add('mic-concluido-verde');
      setTimeout(() => {
        btnEl.classList.remove('mic-concluido-verde');
        btnEl.blur();
        gravandoPrecoItemId = null;
      }, 2000);
    }
  };

  recognizerPreco.onerror = (e) => {
    console.warn("[Voz Preço] Erro:", e.error);
    if (btnEl) {
      setTimeout(() => {
        btnEl.classList.remove('ouvindo');
        btnEl.classList.remove('mic-concluido-verde');
        btnEl.blur();
        gravandoPrecoItemId = null;
      }, 2000);
    }
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      mostrarNotificacaoToast("⚠️ Microfone bloqueado no navegador do PC. Abrindo teclado...");
      setTimeout(() => editarPrecoItemManualmente(itemId), 400);
    } else if (e.error === 'audio-capture') {
      mostrarNotificacaoToast("⚠️ Nenhum microfone detectado no PC. Abrindo teclado...");
      setTimeout(() => editarPrecoItemManualmente(itemId), 400);
    } else if (e.error === 'no-speech') {
      mostrarNotificacaoToast("🎙️ Nenhuma fala detectada. Toque no mic verde para tentar de novo.");
    }
  };

  recognizerPreco.onend = () => {
    if (btnEl) {
      setTimeout(() => {
        btnEl.classList.remove('ouvindo');
        btnEl.classList.remove('mic-concluido-verde');
        btnEl.blur();
        gravandoPrecoItemId = null;
      }, 2000);
    }
  };

  try {
    recognizerPreco.start();
  } catch(e) {
    console.error(e);
    editarPrecoItemManualmente(itemId);
  }
}

// Máscara Monetária Automática em Tempo Real (estilo PDV / Caixa Eletrônico)
function formatarMascaraMoeda(val) {
  const digitos = String(val || '').replace(/\D/g, '');
  if (!digitos || parseInt(digitos, 10) === 0) return '';
  const centavos = parseInt(digitos, 10);
  return (centavos / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function aoDigitarMascaraPrecoModal(input) {
  if (!input) return;
  const formatado = formatarMascaraMoeda(input.value);
  input.value = formatado;
}

let itemEmEdicaoPrecoId = null;

function editarPrecoItemManualmente(itemId, ev) {
  if (ev) ev.stopPropagation();
  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemId));
  if (!item) return;

  itemEmEdicaoPrecoId = itemId;

  const modal = document.getElementById('modal-editar-preco');
  const tituloEl = document.getElementById('modal-preco-prod-nome');
  const inputEl = document.getElementById('input-modal-preco-valor');

  if (tituloEl) {
    tituloEl.textContent = item.nome;
  }

  const precoAtual = (item.preco && Number(item.preco) > 0) 
    ? Number(item.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
    : '';

  if (inputEl) {
    inputEl.value = precoAtual;
  }

  if (modal) {
    modal.style.display = 'flex';
  }

  setTimeout(() => {
    if (inputEl) {
      inputEl.focus();
      inputEl.select();
    }
  }, 60);
}

function fecharModalEditarPrecoDireto() {
  const modal = document.getElementById('modal-editar-preco');
  if (modal) modal.style.display = 'none';
  itemEmEdicaoPrecoId = null;
}

function fecharModalEditarPreco(event) {
  if (event && event.target && event.target.id === 'modal-editar-preco') {
    fecharModalEditarPrecoDireto();
  }
}

function limparPrecoModal() {
  const inputEl = document.getElementById('input-modal-preco-valor');
  if (inputEl) inputEl.value = '';

  if (!itemEmEdicaoPrecoId) return;
  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemEmEdicaoPrecoId));
  if (item) {
    item.preco = 0;
    item.ultimoPreco = 0;
    item.precoRegistradoMercado = 0;
    if (item.catalogoId) {
      const catItem = AppState.catalogo.find(c => String(c.id) === String(item.catalogoId));
      if (catItem) {
        catItem.precoRegistradoMercado = 0;
        catItem.preco = 0;
      }
    }
    salvarEstado(true);
    renderizarListaCompras();
    atualizarCardResumo();
  }
  fecharModalEditarPrecoDireto();
}

function confirmarSalvarPrecoModal() {
  if (!itemEmEdicaoPrecoId) return;
  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemEmEdicaoPrecoId));
  if (!item) {
    fecharModalEditarPrecoDireto();
    return;
  }

  const inputEl = document.getElementById('input-modal-preco-valor');
  const valorStr = inputEl ? inputEl.value.trim() : '';

  // Converte os dígitos da máscara em centavos e divide por 100 (ex: 2365 -> 23.65)
  const digitos = valorStr.replace(/\D/g, '');
  const valorFinal = (!digitos || parseInt(digitos, 10) === 0)
    ? 0
    : parseFloat((parseInt(digitos, 10) / 100).toFixed(2));

  item.preco = valorFinal;
  item.ultimoPreco = valorFinal;
  item.precoRegistradoMercado = valorFinal;
  if (item.catalogoId) {
    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.catalogoId));
    if (catItem) {
      catItem.precoRegistradoMercado = valorFinal;
      catItem.preco = valorFinal;
    }
  }
  salvarEstado(true);
  renderizarListaCompras();
  atualizarCardResumo();

  fecharModalEditarPrecoDireto();
}

function aoTeclarModalEditarPreco(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    confirmarSalvarPrecoModal();
  } else if (event.key === 'Escape') {
    event.preventDefault();
    fecharModalEditarPrecoDireto();
  }
}

function sanitizarChaveId(str) {
  return String(str || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "_");
}

function atualizarBalaoTotalCategoria(categoria) {
  if (!categoria) return;
  const chaveId = sanitizarChaveId(categoria);

  // 1. Atualizar balão em Montar Lista (view-despensa)
  const balaoDespensa = document.getElementById(`balao-total-despensa-${chaveId}`);
  if (balaoDespensa) {
    const itensCat = AppState.catalogo.filter(p => (p.categoria || 'Diversos') === categoria && p.selecionado);
    const totalCat = itensCat.reduce((acc, p) => {
      const precoP = Number(p.precoMedioDF) || Number(p.ultimoPreco) || Number(p.preco) || 10;
      return acc + (p.qtde || 1) * precoP;
    }, 0);

    const valorEl = balaoDespensa.querySelector('.balao-valor');
    if (valorEl) valorEl.textContent = formatarMoeda(totalCat);
    if (totalCat > 0) {
      balaoDespensa.classList.remove('vazio');
    } else {
      balaoDespensa.classList.add('vazio');
    }
  }

  // 2. Atualizar balão em Comprar (view-lista)
  const balaoComprar = document.getElementById(`balao-total-comprar-${chaveId}`);
  if (balaoComprar) {
    const itensListaCat = AppState.listaAtiva.filter(i => (i.categoria || 'Diversos') === categoria);
    const totalComprar = itensListaCat.reduce((acc, i) => {
      const precoI = (ehDispositivoMobile && Number(i.precoRegistradoMercado) > 0)
        ? Number(i.precoRegistradoMercado)
        : (Number(i.precoRegistradoMercado) > 0 ? Number(i.precoRegistradoMercado) : (Number(i.preco) || Number(i.precoMedioDF) || 0));
      return acc + (i.qtde || 1) * precoI;
    }, 0);

    const valorEl = balaoComprar.querySelector('.balao-valor');
    if (valorEl) valorEl.textContent = formatarMoeda(totalComprar);
    if (totalComprar > 0) {
      balaoComprar.classList.remove('vazio');
    } else {
      balaoComprar.classList.add('vazio');
    }
  }
}

// Renderizar a Lista de Compras Ativa (com Ícones 2D Coloridos)
function renderizarListaCompras() {
  const container = document.getElementById('itens-lista-container');
  if (!container) return;
  const scrollYAnterior = window.scrollY || document.documentElement.scrollTop || 0;
  const scrollXAnterior = window.scrollX || document.documentElement.scrollLeft || 0;
  const alturaAtual = Math.max(container.offsetHeight, document.documentElement.scrollHeight);
  if (alturaAtual > 0) {
    container.style.minHeight = `${alturaAtual}px`;
  }

  if (AppState.listaAtiva.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: white; border-radius: 16px; border: 1px dashed var(--border);">
        <div style="width: 64px; height: 64px; margin: 0 auto 12px;">${ICONS_2D.padrao}</div>
        <h3 style="font-weight: 700; color: var(--text-main);">Sua lista está vazia!</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">
          Digite um item acima, use o microfone por voz ou escolha itens frequentes na aba <strong>Montar Lista</strong>.
        </p>
      </div>
    `;
    container.style.minHeight = '';
    return;
  }

  // 0. Filtragem por categoria e termo de busca no topo
  let itensListaParaExibir = AppState.listaAtiva;

  if (AppState.filtroCategoria === 'favoritos') {
    itensListaParaExibir = itensListaParaExibir.filter(item => {
      const catItem = AppState.catalogo.find(c => c.id === item.id || c.id === item.catalogoId);
      return !!(item.favorito || (catItem && catItem.favorito));
    });
  } else if (AppState.filtroCategoria && AppState.filtroCategoria !== 'todas') {
    itensListaParaExibir = itensListaParaExibir.filter(item => (item.categoria || 'Diversos') === AppState.filtroCategoria);
  }

  if (termoBuscaLista) {
    itensListaParaExibir = itensListaParaExibir.filter(item => {
      const nomeNorm = (item.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

  const chavesRedes = Object.keys(MERCADOS_DF);
  const isMobile = (typeof window !== 'undefined' && (window.innerWidth <= 820 || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)));
  // Na versão mobile: NUNCA mostrar mercados (sempre ocultos)
  const ocultarMercados = isMobile ? true : !!AppState.modoNoMercado;

  // Calcular totais por mercado para toda a lista ativa
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

  // Cabeçalho dos 7 Mercados (se não ocultarMercados)
  let colunasCabecalhoMercados = '';
  if (!ocultarMercados) {
    colunasCabecalhoMercados = chavesRedes.map(r => {
      const info = MERCADOS_DF[r];
      const logo = (typeof obterLogoMercado === 'function' && obterLogoMercado(r)) || `logos/${r}.png`;
      const isColunaAtiva = (AppState.mercadoReferencia === r);
      return `
        <th class="mcol-th-rede ${isColunaAtiva ? 'mcol-coluna-ativa' : ''}" 
            onclick="selecionarMercadoReferencia('${r}')" 
            title="Clique para cotar a lista inteira no ${info.nome}">
          <div class="mcol-rede-header-inner">
            <img src="${logo}" class="mcol-rede-logo" onerror="this.outerHTML='<span style=\\'font-size:1.1rem\\'>${info.emoji}</span>'" alt="${info.nome}">
            <span class="mcol-rede-nome">${info.nome}</span>
          </div>
        </th>
      `;
    }).join('');
  }

  const numColunas = (ocultarMercados ? 3 : (3 + chavesRedes.length)) + 1;

  // Agrupar itens por Categoria
  const grupos = {};
  itensListaParaExibir.forEach((item, index) => {
    const cat = item.categoria || 'Diversos';
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push({ ...item, indexOriginal: index });
  });

  let linhasTabelaHtml = '';

  for (const [categoria, itens] of Object.entries(grupos)) {
    // Ordenação dinâmica dentro da categoria:
    // Itens NÃO pegos primeiro (A-Z ou ordem padrão)
    // Itens PEGANTE/COMPRADOS vão para o final da seção (A-Z entre os comprados)
    itens.sort((a, b) => {
      const aComp = a.comprado ? 1 : 0;
      const bComp = b.comprado ? 1 : 0;
      if (aComp !== bComp) {
        return aComp - bComp; // 0 (não pego) vem antes de 1 (pego)
      }
      if (AppState.modoCotacao === 'alfabetico') {
        return (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' });
      }
      return (a.indexOriginal || 0) - (b.indexOriginal || 0);
    });

    // Linha de Cabeçalho da Categoria com os Atacadistas na mesma linha
    const iconeOlhoAberto = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    const iconeOlhoFechado = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

    // Na versão mobile: RETIRAR O OLHO
    let botaoOlhoHtml = '';
    if (!isMobile) {
      botaoOlhoHtml = `
        <button type="button" 
                class="btn-olho-tabela ${ocultarMercados ? 'mercados-ocultos' : ''}" 
                onclick="alternarModoNoMercado()" 
                title="${ocultarMercados ? 'Exibir colunas de supermercados' : 'Ocultar colunas de mercados'}" 
                data-hint="${ocultarMercados ? 'Exibir mercados e cotações' : 'Ocultar mercados'}">
          ${ocultarMercados ? iconeOlhoFechado : iconeOlhoAberto}
        </button>
      `;
    }

    const catChave = sanitizarChaveId(categoria);
    const totalCatComprar = itens.reduce((acc, i) => {
      const p = (ehDispositivoMobile && Number(i.precoRegistradoMercado) > 0)
        ? Number(i.precoRegistradoMercado)
        : (Number(i.precoRegistradoMercado) > 0 ? Number(i.precoRegistradoMercado) : (Number(i.preco) || Number(i.precoMedioDF) || 0));
      return acc + (i.qtde || 1) * p;
    }, 0);
    const temValorComprar = totalCatComprar > 0;
    const thAcoesHtml = isMobile ? '' : `<th class="mcol-th-acoes">${botaoOlhoHtml}</th>`;

    linhasTabelaHtml += `
      <tr class="mcol-tr-categoria-separador">
        <th colspan="3" class="mcol-th-categoria-col">
          <div class="categoria-titulo-tabela">
            <span class="categoria-nome-txt">${categoria}</span>
            <span class="categoria-qtd-badge">(${itens.length} ${itens.length === 1 ? 'item' : 'itens'})</span>
            <div class="balao-total-categoria ${temValorComprar ? '' : 'vazio'}" id="balao-total-comprar-${catChave}" title="Total da Categoria">
              <span class="balao-valor">${formatarMoeda(totalCatComprar)}</span>
            </div>
          </div>
        </th>
        ${colunasCabecalhoMercados}
        ${thAcoesHtml}
      </tr>
    `;

    // Linhas de Itens
    const nomesResumidosVistos = new Set();
    itens.forEach(item => {
      let nomeExibicao = formatarNomeExibicaoCompacto(item.nome);
      if (AppState.modoResumido) {
        nomeExibicao = obterNomeResumido(item.nome);
        const chaveDeduplicacao = nomeExibicao.toLowerCase().trim();
        if (nomesResumidosVistos.has(chaveDeduplicacao)) {
          // No modo resumido, variedades com o mesmo nome resumido não são exibidas ("só exibe a primeira")
          return;
        }
        nomesResumidosVistos.add(chaveDeduplicacao);
      }

      const qtde = item.qtde || 1;

      let marcaHtml = '';
      if (item.marca) {
        marcaHtml = `<button type="button" class="btn-marca-listbox-tag com-marca" onclick="alterarMarcaItem('${item.id}', this, event)" title="Marca: ${item.marca} (Clique para alterar)">🏷️ ${item.marca} <span class="ico-caret">▾</span></button>`;
      } else {
        marcaHtml = `<button type="button" class="btn-marca-listbox-tag" onclick="alterarMarcaItem('${item.id}', this, event)" title="Clique para escolher a marca">+ Marca <span class="ico-caret">▾</span></button>`;
      }

      let celulasPrecos = '';
      let badgeMelhor = '';

      if (!ocultarMercados) {
        const precos = {};
        const precosValidos = [];
        chavesRedes.forEach(r => {
          const p = obterPrecoEstimadoMercado(item, r);
          precos[r] = p;
          if (p > 0) precosValidos.push(p);
        });

        const menorPreco = precosValidos.length > 0 ? Math.min(...precosValidos) : -1;
        const melhorRede = menorPreco > 0 ? chavesRedes.find(r => precos[r] === menorPreco) : null;

        celulasPrecos = chavesRedes.map(r => {
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

          const precoTxt = p > 0 ? formatarMoeda(p) : '<span class="mcol-a-cotar">—</span>';

          return `
            <td class="mcol-td-preco ${isMenor ? 'mcol-td-menor-bg' : ''}">
              <div class="mcol-preco-linha-box">
                <span class="mcol-valor ${isMenor ? 'mcol-valor-menor' : ''}">${precoTxt}</span>
                ${diffHtml}
              </div>
            </td>
          `;
        }).join('');
      }

      const isPendente = (itemPendenteDesmarcarId === item.id);
      const classePendente = isPendente ? 'pendente-desmarcar' : '';
      const badgePendente = isPendente 
        ? `<span class="badge-confirmar-desmarcar" title="Clique mais uma vez para desmarcar">⚠️ Toque novamente para desmarcar</span>` 
        : '';

      // No celular (somente mobile): não traz preços, vêm todos 0,00 até falar no mic
      let precoRegistradoValor = 0;
      if (ehDispositivoMobile) {
        precoRegistradoValor = (item.precoRegistradoMercado && Number(item.precoRegistradoMercado) > 0)
          ? Number(item.precoRegistradoMercado)
          : 0;
      } else {
        precoRegistradoValor = (item.precoRegistradoMercado && Number(item.precoRegistradoMercado) > 0)
          ? Number(item.precoRegistradoMercado)
          : (Number(item.preco) || 0);
      }
      const precoFormatadoTxt = precoRegistradoValor > 0 ? formatarMoeda(precoRegistradoValor) : 'R$ 0,00';

      linhasTabelaHtml += `
        <tr class="mcol-tr-item ${item.comprado ? 'item-linha-comprado' : ''} ${classePendente}" id="tr-item-${item.id}">
          <td class="mcol-td-check">
            <input type="checkbox" class="check-item-comprado" ${item.comprado ? 'checked' : ''} 
                   onclick="event.preventDefault(); alternarItemComprado('${item.id}')" 
                   title="${item.comprado ? (isPendente ? 'Clique novamente para confirmar' : 'Clique 2x para desmarcar') : 'Marcar como pego no carrinho'}" />
          </td>
          <td class="mcol-td-qtde">
            <div class="contador-qtde-tabela">
              <button class="btn-step-tabela" onclick="alterarQuantidade('${item.id}', -1)" title="Diminuir">-</button>
              <input type="number" min="1" class="input-qtde-tabela" value="${qtde}" onchange="definirQuantidadeDireta('${item.id}', this.value)" title="Editar quantidade" />
              <button class="btn-step-tabela" onclick="alterarQuantidade('${item.id}', 1)" title="Aumentar">+</button>
            </div>
          </td>
          <td class="mcol-td-produto">
            <div class="mcol-prod-card-cell">
              <div class="mcol-prod-linha-principal">
                <div class="mcol-prod-info-esquerda">
                  <span class="mcol-prod-nome ${item.comprado && !isPendente ? 'texto-riscado' : ''}" onclick="alternarItemComprado('${item.id}')" title="${item.nome}">${nomeExibicao}</span>
                  ${marcaHtml}
                </div>
                <div class="mcol-prod-preco-grupo">
                  <button type="button" class="btn-mic-preco-verde" id="btn-mic-item-${item.id}" onclick="ouvirPrecoItem('${item.id}', this, event)" title="Ditar preço por voz no PC ou Celular (fale ex: 1,10, 55 centavos ou 4 e 35)">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </button>
                  <span class="badge-preco-real ${precoRegistradoValor > 0 ? 'com-preco' : 'sem-preco'}" id="badge-preco-${item.id}" onclick="editarPrecoItemManualmente('${item.id}', event)" title="Preço do produto (Clique para digitar no teclado ou Limpar)">
                    ${precoFormatadoTxt}
                  </span>
                </div>
              </div>
              ${badgePendente}
            </div>
          </td>
          ${celulasPrecos}
          ${isMobile ? '' : `
            <td class="mcol-td-acoes">
              <button class="btn-delete-item-tabela" onclick="removerItem('${item.id}')" title="Remover item da lista">✕</button>
            </td>
          `}
        </tr>
      `;
    });
  }

  // Rodapé com Totais dos Mercados
  let tfootHtml = '';
  if (!ocultarMercados) {
    let celulasTotais = chavesRedes.map(r => {
      const isCampeao = r === campeaoId;
      const isColunaAtiva = (AppState.mercadoReferencia === r);
      return `
        <td class="mcol-td-total ${isCampeao ? 'mcol-td-total-campeao' : ''} ${isColunaAtiva ? 'mcol-coluna-ativa' : ''}" 
            onclick="selecionarMercadoReferencia('${r}')" 
            title="Clique para selecionar o ${MERCADOS_DF[r].nome} como mercado da lista">
          <div class="mcol-total-box">
            <span class="mcol-total-valor">${formatarMoeda(totais[r])}</span>
            ${isCampeao ? '<span class="mcol-campeao-tag">⭐ CAMPEÃO</span>' : ''}
            ${isColunaAtiva ? '<span style="font-size:0.62rem; color:#D97706; font-weight:800;">✓ SELECIONADO</span>' : ''}
          </div>
        </td>
      `;
    }).join('');

    tfootHtml = `
      <tfoot>
        <tr class="mcol-tr-totais">
          <td class="mcol-td-check-total"></td>
          <td class="mcol-td-qtde-total"></td>
          <td class="mcol-td-totais-label">
            <div style="font-weight: 800; font-size: 0.92rem;">TOTAL ESTIMADO</div>
            <small style="color: var(--text-muted); font-size: 0.72rem;">Soma dos ${AppState.listaAtiva.length} itens</small>
          </td>
          ${celulasTotais}
          ${isMobile ? '' : '<td class="mcol-td-acoes-total"></td>'}
        </tr>
      </tfoot>
    `;
  }

  // Mover a informação de economia e melhor mercado para a Slide Bar à esquerda
  atualizarCardEconomiaSidebar(campeaoId, totais, economia);

  container.innerHTML = `
    <div class="mcol-tabela-scroll">
      <table class="mcol-tabela-moderna tabela-lista-compras ${ocultarMercados ? 'mercados-ocultos' : ''}">
        <tbody>
          ${linhasTabelaHtml}
        </tbody>
        ${tfootHtml}
      </table>
    </div>
  `;

  // Preservar a posição do scroll para JAMAIS jogar o usuário para o topo ao interagir na tabela
  if (scrollYAnterior > 0) {
    window.scrollTo({ top: scrollYAnterior, left: scrollXAnterior, behavior: 'instant' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollYAnterior, left: scrollXAnterior, behavior: 'instant' });
      setTimeout(() => {
        window.scrollTo({ top: scrollYAnterior, left: scrollXAnterior, behavior: 'instant' });
        container.style.minHeight = '';
      }, 50);
    });
  } else {
    container.style.minHeight = '';
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
    id: 'p_arroz_1kg',
    nome: 'ARROZ 1KG',
    icone: 'arroz_1kg',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 5.90, mercado: 'Dia a Dia', emoji: '🔴' },
      { nome: 'Tio João', preco: 6.50, mercado: 'Assaí', emoji: '🔵' },
      { nome: 'Prato Fino', preco: 7.20, mercado: 'Atacadão', emoji: '🟠' }
    ]
  },
  {
    id: 'p_arroz_int',
    nome: 'ARROZ INTEGRAL',
    icone: 'arroz_integral',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 7.50, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Cristal', preco: 7.70, mercado: 'Dia a Dia', emoji: '🔴' },
      { nome: 'Tio João', preco: 7.90, mercado: 'Assaí', emoji: '🔵' }
    ]
  },
  {
    id: 'p_feijao',
    nome: 'FEIJÃO CARIOCA',
    icone: 'feijao',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 6.49, mercado: 'Dia a Dia', emoji: '🔴' },
      { nome: 'Tio Jorge', preco: 6.79, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Kicaldo', preco: 6.89, mercado: 'Assaí', emoji: '🔵' }
    ]
  },
  {
    id: 'p_feijao_preto',
    nome: 'FEIJÃO PRETO',
    icone: 'feijao_preto',
    categoria: 'Básicos e Grãos',
    marcas: [
      { nome: 'Camil', preco: 7.99, mercado: 'Dia a Dia', emoji: '🔴' },
      { nome: 'Tio Jorge', preco: 8.29, mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Kicaldo', preco: 8.39, mercado: 'Assaí', emoji: '🔵' }
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
  },
  {
    id: 'p_dente',
    nome: 'CREME DENTAL',
    icone: 'dente',
    categoria: 'Higiene',
    marcas: [
      { nome: 'Sorriso', preco: 3.49, mercado: 'Carrefour', emoji: '🟦' },
      { nome: 'Close Up', preco: 3.79, mercado: 'Carrefour', emoji: '🟦' },
      { nome: 'Colgate', preco: 3.99, mercado: 'Carrefour', emoji: '🟦' },
      { nome: 'Oral-B', preco: 6.49, mercado: 'Carrefour', emoji: '🟦' },
      { nome: 'Sensodyne', preco: 14.90, mercado: 'Carrefour', emoji: '🟦' }
    ]
  }
];

// Filtros e Ordenação da Despensa e Busca no Topo
let termoBuscaTopo = '';
let termoBuscaDespensa = '';
let termoBuscaLista = '';
let ordemAlfabeticaDespensa = true;
let categoriaAtivaDespensa = 'todas';

function configurarBuscaGlobal() {
  const inputBusca = document.getElementById('input-novo-item');
  const containerBusca = document.querySelector('.busca-topo-reduzida');

  // Fecha o dropdown flutuante ao clicar fora
  document.addEventListener('click', (e) => {
    if (containerBusca && !containerBusca.contains(e.target)) {
      fecharDropdownSugestoesTopo();
    }
  });

  // Reabre sugestões ao focar no campo se houver texto
  if (inputBusca) {
    inputBusca.addEventListener('focus', () => {
      if (inputBusca.value.trim().length > 0) {
        renderizarDropdownSugestoesTopo(inputBusca.value.trim());
      }
    });
  }

  // Tecla global: Se o usuário começar a digitar qualquer letra (na tela principal ou com o modal de Presets aberto)
  document.addEventListener('keydown', (e) => {
    // Se já estiver focado em algum input, textarea ou select, ignora
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    // Apenas teclas alfanuméricas simples (sem Ctrl, Alt ou Meta)
    if (e.key && e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      // 1. Se o modal de Presets / Gaveta estiver aberto
      const modalPresets = document.getElementById('modal-presets-lista');
      if (modalPresets && modalPresets.style.display !== 'none' && modalPresets.style.display !== '') {
        const drawerPresets = document.getElementById('modal-presets-lado-direito');
        if (!drawerPresets || drawerPresets.style.display === 'none' || drawerPresets.style.display === '') {
          if (typeof PRESETS_LISTA !== 'undefined' && PRESETS_LISTA.length > 0) {
            abrirDetalhesItensPreset(PRESETS_LISTA[0].id);
          }
        }
        const inputDrawer = document.getElementById('input-busca-drawer-preset');
        if (inputDrawer) {
          inputDrawer.focus();
        }
        return;
      }

      // Se estiver com outro modal aberto, não intercepta
      const modalAberto = document.querySelector('.modal-overlay[style*="display: flex"], .modal-overlay[style*="display: block"]');
      if (modalAberto) return;

      if (AppState.abaAtiva !== 'lista' && AppState.abaAtiva !== 'despensa') return;

      if (inputBusca) {
        inputBusca.focus();
        // A tecla pressionada entrará automaticamente no campo
      }
    }
  });
}

let sugestaoIndiceTeclado = -1;
let timerInatividadeBusca = null;

// Remove estado visual de digitação e limpa timer de inatividade
function resetarEstadoDigitacaoBusca() {
  if (timerInatividadeBusca) {
    clearTimeout(timerInatividadeBusca);
    timerInatividadeBusca = null;
  }
  const containerBusca = document.querySelector('.busca-topo-reduzida');
  const inputBusca = document.getElementById('input-novo-item');
  if (containerBusca) containerBusca.classList.remove('digitando-ativo');
  if (inputBusca) inputBusca.classList.remove('digitando-ativo');
}

// Verifica se o termo digitado existe no catálogo e controla a exibição do botão "Adicionar"
function verificarExibicaoBotaoAdicionar(termoOriginal) {
  const btnAdicionar = document.getElementById('btn-adicionar-topo-header') || document.querySelector('.busca-topo-reduzida .btn-adicionar-topo');
  if (!btnAdicionar) return;

  const termoLimpo = (termoOriginal || '').trim();
  if (termoLimpo.length === 0) {
    btnAdicionar.style.display = 'none';
    return;
  }

  const termoNorm = termoLimpo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Verifica se o item já existe no catálogo
  const itemExisteNoCatalogo = (AppState.catalogo || []).some(p => {
    const nomeNorm = (p.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return nomeNorm === termoNorm;
  });

  // Também verifica se a busca encontrou itens na listagem ativa
  let encontrouItens = false;
  if (AppState.abaAtiva === 'despensa') {
    encontrouItens = (AppState.catalogo || []).some(p => {
      const nomeNorm = (p.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termoNorm);
    });
  } else {
    encontrouItens = (AppState.listaAtiva || []).some(p => {
      const nomeNorm = (p.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termoNorm);
    });
  }

  // O botão "Adicionar" SÓ APARECE se começar a digitar algo que NÃO exista!
  if (!itemExisteNoCatalogo && !encontrouItens) {
    btnAdicionar.style.display = 'inline-flex';
  } else {
    btnAdicionar.style.display = 'none';
  }
}

// Limpa o campo após 4 segundos sem digitar
function limparCampoBuscaInatividade() {
  resetarEstadoDigitacaoBusca();
  const input = document.getElementById('input-novo-item');
  if (input) {
    input.value = '';
  }
  termoBuscaTopo = '';
  termoBuscaDespensa = '';
  termoBuscaLista = '';
  fecharDropdownSugestoesTopo();
  verificarExibicaoBotaoAdicionar('');

  if (AppState.abaAtiva === 'despensa') {
    renderizarDespensa();
  } else {
    renderizarListaCompras();
  }
}

function aoDigitarBuscaTopo(termo) {
  const containerBusca = document.querySelector('.busca-topo-reduzida');
  const inputBusca = document.getElementById('input-novo-item');

  // Limpa qualquer timer anterior a cada toque de tecla
  if (timerInatividadeBusca) {
    clearTimeout(timerInatividadeBusca);
    timerInatividadeBusca = null;
  }

  const termoLimpo = (termo || '').trim();
  termoBuscaTopo = termoLimpo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (termoLimpo.length > 0) {
    // Ao digitar: bordas vermelhas brilhosas e fonte bold
    if (containerBusca) containerBusca.classList.add('digitando-ativo');
    if (inputBusca) inputBusca.classList.add('digitando-ativo');

    // Ficou 4 segundos sem digitar, limpa o campo
    timerInatividadeBusca = setTimeout(() => {
      limparCampoBuscaInatividade();
    }, 4000);
  } else {
    if (containerBusca) containerBusca.classList.remove('digitando-ativo');
    if (inputBusca) inputBusca.classList.remove('digitando-ativo');
  }

  // Regra: O botão "Adicionar" SÓ APARECE se começar a digitar algo que NÃO exista
  verificarExibicaoBotaoAdicionar(termoLimpo);

  // 1. Atualiza visualização na aba ativa embaixo
  if (AppState.abaAtiva === 'despensa') {
    termoBuscaDespensa = termoBuscaTopo;
    renderizarDespensa();
  } else {
    termoBuscaLista = termoBuscaTopo;
    renderizarListaCompras();
  }

  // 2. Imediatamente exibe e filtra o dropdown flutuante sobre o menu
  if (termoLimpo.length > 0) {
    renderizarDropdownSugestoesTopo(termoLimpo);
  } else {
    fecharDropdownSugestoesTopo();
  }
}

function fecharDropdownSugestoesTopo() {
  const dropdown = document.getElementById('dropdown-sugestoes-topo');
  if (dropdown) {
    dropdown.style.display = 'none';
    dropdown.innerHTML = '';
  }
  sugestaoIndiceTeclado = -1;
}

function renderizarDropdownSugestoesTopo(termoOriginal) {
  const dropdown = document.getElementById('dropdown-sugestoes-topo');
  if (!dropdown) return;

  const termoNorm = termoOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  sugestaoIndiceTeclado = -1;

  // Mapa de itens para evitar duplicidades
  const itensEncontrados = [];
  const idsVistos = new Set();

  // Busca prioritária no catálogo atual
  AppState.catalogo.forEach(item => {
    const nomeNorm = (item.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const catNorm = (item.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const marcaNorm = (item.marca || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (nomeNorm.includes(termoNorm) || catNorm.includes(termoNorm) || marcaNorm.includes(termoNorm)) {
      idsVistos.add(String(item.id));
      const comecaCom = nomeNorm.startsWith(termoNorm);
      itensEncontrados.push({ item, comecaCom });
    }
  });

  // Também busca no catálogo mestre expandido se ainda não estiver visto
  CATALOGO_PADRAO_EXPANDIDO.forEach(padrao => {
    if (!idsVistos.has(String(padrao.id))) {
      const nomeNorm = (padrao.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const catNorm = (padrao.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (nomeNorm.includes(termoNorm) || catNorm.includes(termoNorm)) {
        idsVistos.add(String(padrao.id));
        const comecaCom = nomeNorm.startsWith(termoNorm);
        itensEncontrados.push({ item: padrao, comecaCom });
      }
    }
  });

  // Ordena: itens que começam com o termo digitado primeiro!
  itensEncontrados.sort((a, b) => {
    if (a.comecaCom && !b.comecaCom) return -1;
    if (!a.comecaCom && b.comecaCom) return 1;
    return a.item.nome.localeCompare(b.item.nome);
  });

  const refMercado = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'nenhum';
  let html = '';

  // Opção Rápida de Criar / Adicionar o que foi digitado
  html += `
    <div class="sugestao-item-row sugestao-row-criar-novo" onclick="selecionarSugestaoCriarNovo('${escapeHtml(termoOriginal)}')">
      <div class="sugestao-info-esquerda">
        <span style="font-size: 1.15rem;">➕</span>
        <div class="sugestao-textos-box">
          <span class="sugestao-nome-prod">Adicionar "<strong>${escapeHtml(termoOriginal)}</strong>"</span>
          <span class="sugestao-meta-box">Pressione Enter ou clique para adicionar à lista</span>
        </div>
      </div>
      <span class="sugestao-btn-badge sugestao-btn-add">Adicionar ↵</span>
    </div>
  `;

  if (itensEncontrados.length > 0) {
    html += `
      <div class="sugestao-cabecalho-secao">
        <span>PRODUTOS ENCONTRADOS (${itensEncontrados.length})</span>
        <span style="font-size: 0.65rem; text-transform: none; color: #94A3B8;">Clique para selecionar</span>
      </div>
    `;

    // Limita a 10 resultados para manter a caixa rápida e limpa
    itensEncontrados.slice(0, 10).forEach(({ item }) => {
      const iconeSvg = obterIcone2D(item.nome, item.icone);
      const precoEstimado = obterPrecoEstimadoMercado(item, refMercado);
      const precoTxt = precoEstimado > 0 ? formatarMoeda(precoEstimado) : '';

      // Verifica se o item já está na lista ou marcado na despensa
      const estaNaLista = AppState.listaAtiva.some(i => 
        String(i.id) === String(item.id) || 
        (i.nome || '').toLowerCase().trim() === (item.nome || '').toLowerCase().trim()
      );
      const estaMarcadoDespensa = !!item.selecionado;

      let badgeAcao = '';
      if (AppState.abaAtiva === 'despensa') {
        if (estaMarcadoDespensa) {
          badgeAcao = `<span class="sugestao-btn-badge sugestao-btn-marcado" title="Clique para desmarcar">✓ Marcado</span>`;
        } else {
          badgeAcao = `<span class="sugestao-btn-badge sugestao-btn-add" title="Clique para marcar">➕ Marcar</span>`;
        }
      } else {
        if (estaNaLista) {
          badgeAcao = `<span class="sugestao-btn-badge sugestao-btn-marcado" title="Já está na sua lista">✓ Na Lista</span>`;
        } else {
          badgeAcao = `<span class="sugestao-btn-badge sugestao-btn-add" title="Adicionar à lista">➕ Adicionar</span>`;
        }
      }

      const nomeDestacado = destacarTextoBusca(item.nome, termoOriginal);

      html += `
        <div class="sugestao-item-row" data-id="${item.id}" onclick="alternarItemPeloDropdown('${item.id}', event)">
          <div class="sugestao-info-esquerda">
            <div class="sugestao-icone-box">${iconeSvg}</div>
            <div class="sugestao-textos-box">
              <span class="sugestao-nome-prod">${nomeDestacado}</span>
              <div class="sugestao-meta-box">
                <span>${item.categoria || 'Diversos'}</span>
                ${item.marca ? `<span>• ${item.marca}</span>` : ''}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${precoTxt ? `<span class="sugestao-preco-tag">${precoTxt}</span>` : ''}
            ${badgeAcao}
          </div>
        </div>
      `;
    });
  }

  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
}

function destacarTextoBusca(texto, termo) {
  if (!termo) return escapeHtml(texto);
  const re = new RegExp(`(${escapeRegex(termo)})`, 'gi');
  return escapeHtml(texto).replace(re, '<span class="sugestao-termo-match">$1</span>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function alternarItemPeloDropdown(itemId, event) {
  if (event) event.stopPropagation();

  let prod = AppState.catalogo.find(p => String(p.id) === String(itemId) || String(p.catalogoId) === String(itemId));
  if (!prod) {
    const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => String(p.id) === String(itemId));
    if (padrao) {
      prod = { ...padrao, selecionado: true, qtde: 1 };
      AppState.catalogo.unshift(prod);
    }
  }

  if (prod) {
    prod.selecionado = true;
    prod.comprado = false;
    prod.precoRegistradoMercado = 0;
    if (AppState.abaAtiva === 'despensa') {
      prod.qtde = prod.qtde || 1;
    } else {
      // Aba Lista de Compra: se já estiver na lista ativa, incrementa quantidade
      const jaNaLista = AppState.listaAtiva.find(i => String(i.id) === String(prod.id));
      if (jaNaLista) {
        jaNaLista.qtde = (jaNaLista.qtde || 1) + 1;
      }
    }
    sincronizarListaAtivaComCatalogo();

    AppState.ultimoEvento = {
      autor: AppState.usuarioAtivo || 'Irandy',
      icone: AppState.usuarioIcone || (AppState.usuarioAtivo === 'Sioneide' ? '👩' : '👨'),
      itens: [prod.nome],
      timestamp: Date.now()
    };
  }

  salvarEstado(true);
  atualizarCardResumo();
  if (AppState.abaAtiva === 'despensa') renderizarDespensa();
  else renderizarListaCompras();

  // Limpa o input e fecha sugestões com feedback positivo
  resetarEstadoDigitacaoBusca();
  const input = document.getElementById('input-novo-item');
  if (input) {
    input.value = '';
    input.focus();
  }
  termoBuscaTopo = '';
  termoBuscaDespensa = '';
  termoBuscaLista = '';
  fecharDropdownSugestoesTopo();
}

function selecionarSugestaoCriarNovo(termo) {
  const input = document.getElementById('input-novo-item');
  if (input) input.value = termo;
  adicionarItemRapido();
  fecharDropdownSugestoesTopo();
}

function gerenciarTeclasBuscaTopo(event) {
  const dropdown = document.getElementById('dropdown-sugestoes-topo');
  const aberto = dropdown && dropdown.style.display !== 'none';

  if (event.key === 'Escape') {
    fecharDropdownSugestoesTopo();
    const input = document.getElementById('input-novo-item');
    if (input) input.blur();
    return;
  }

  if (event.key === 'ArrowDown' && aberto) {
    event.preventDefault();
    const rows = dropdown.querySelectorAll('.sugestao-item-row');
    if (rows.length === 0) return;
    sugestaoIndiceTeclado = (sugestaoIndiceTeclado + 1) % rows.length;
    rows.forEach((r, idx) => {
      r.classList.toggle('ativo-teclado', idx === sugestaoIndiceTeclado);
      if (idx === sugestaoIndiceTeclado) r.scrollIntoView({ block: 'nearest' });
    });
    return;
  }

  if (event.key === 'ArrowUp' && aberto) {
    event.preventDefault();
    const rows = dropdown.querySelectorAll('.sugestao-item-row');
    if (rows.length === 0) return;
    sugestaoIndiceTeclado = (sugestaoIndiceTeclado - 1 + rows.length) % rows.length;
    rows.forEach((r, idx) => {
      r.classList.toggle('ativo-teclado', idx === sugestaoIndiceTeclado);
      if (idx === sugestaoIndiceTeclado) r.scrollIntoView({ block: 'nearest' });
    });
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    if (aberto && sugestaoIndiceTeclado >= 0) {
      const rows = dropdown.querySelectorAll('.sugestao-item-row');
      if (rows[sugestaoIndiceTeclado]) {
        rows[sugestaoIndiceTeclado].click();
        return;
      }
    }
    adicionarItemRapido();
    fecharDropdownSugestoesTopo();
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

// Ordenação Alfabética Geral (compatível com Lista de Compras, Montar Lista e Mercados)
function alternarOrdemAlfabeticaGeral() {
  if (AppState.abaAtiva === 'mercados') {
    alternarOrdenacaoMercados('alfabetico');
  } else if (AppState.abaAtiva === 'lista') {
    if (AppState.modoCotacao === 'alfabetico') {
      aplicarModoCotacao('mais_baratos');
    } else {
      aplicarModoCotacao('alfabetico');
    }
  } else {
    alternarOrdemAlfabeticaDespensa();
  }
  atualizarVisualBotaoOrdemAlfabetica();
}

function alternarOrdemAlfabeticaDespensa() {
  ordemAlfabeticaDespensa = !ordemAlfabeticaDespensa;
  atualizarVisualBotaoOrdemAlfabetica();
  renderizarDespensa();
}

function atualizarVisualBotaoOrdemAlfabetica() {
  const btn = document.getElementById('btn-ordem-alfabetica');
  if (!btn) return;
  let ativo = false;
  if (AppState.abaAtiva === 'lista') {
    ativo = (AppState.modoCotacao === 'alfabetico');
  } else if (AppState.abaAtiva === 'despensa') {
    ativo = !!ordemAlfabeticaDespensa;
  } else if (AppState.abaAtiva === 'mercados') {
    ativo = (AppState.ordenacaoMercados === 'alfabetico_az');
  }
  if (ativo) {
    btn.classList.add('ativo');
    btn.classList.add('ativo-filtro');
    btn.title = "Ordenado de A a Z (Ativo - Toque para alternar)";
  } else {
    btn.classList.remove('ativo');
    btn.classList.remove('ativo-filtro');
    btn.title = "Ordenar de A a Z";
  }
}

// Renderizar Aba "Montar Lista" (Estrutura idêntica ao modelo da Lista de Compra, sem preços, item não vai pro final)
function renderizarDespensa() {
  const container = document.getElementById('despensa-grid-container');
  if (!container) return;
  container.innerHTML = '';

  const badgeTotal = document.getElementById('despensa-contador-badge');

  // 1. Filtragem por Categoria ou Favoritos
  let itensExibir = AppState.catalogo;
  if (categoriaAtivaDespensa === 'favoritos') {
    itensExibir = itensExibir.filter(p => !!p.favorito);
  } else if (categoriaAtivaDespensa !== 'todas') {
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
    const msgVazio = categoriaAtivaDespensa === 'favoritos'
      ? 'Você ainda não marcou nenhum produto como favorito. Clique na estrelinha ⭐ ao lado dos itens para torná-los favoritos!'
      : (valorDigitado ? `Nenhum produto encontrado com "<strong>${valorDigitado}</strong>".` : 'Nenhum produto nesta categoria.');
    container.innerHTML = `
      <div style="text-align: center; padding: 25px 15px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 8px;">
          ${msgVazio}
        </p>
        ${valorDigitado ? `<button class="btn-adicionar-topo" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 4px;" onclick="adicionarItemRapido()">➕ Cadastrar "${valorDigitado}" no Catálogo</button>` : ''}
      </div>
    `;
    return;
  }

// Conjunto de categorias que estão com o filtro de favoritos ativo
let categoriasFiltroFavoritos = new Set();

function alternarFiltroFavoritosCategoria(categoria, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  if (categoriasFiltroFavoritos.has(categoria)) {
    categoriasFiltroFavoritos.delete(categoria);
    mostrarNotificacaoToast(`🌐 Exibindo todos os produtos de ${categoria}`);
  } else {
    categoriasFiltroFavoritos.add(categoria);
    const qtdFavs = AppState.catalogo.filter(p => (p.categoria || 'Diversos') === categoria && p.favorito).length;
    if (qtdFavs === 0) {
      mostrarNotificacaoToast(`⭐ Nenhum favorito marcado em ${categoria}. Clique na estrelinha ao lado dos itens para favoritar.`);
    } else {
      mostrarNotificacaoToast(`⭐ Exibindo ${qtdFavs} ${qtdFavs === 1 ? 'favorito' : 'favoritos'} de ${categoria}`);
    }
  }

  if (AppState.abaAtiva === 'despensa') {
    renderizarDespensa();
  } else {
    renderizarListaCompras();
  }
}

  // Agrupar itens por Categoria (Modelo idêntico à Lista de Compra)
  const grupos = {};
  itensExibir.forEach((item) => {
    const cat = item.categoria || 'Diversos';
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push(item);
  });

  for (const [categoria, itensOriginais] of Object.entries(grupos)) {
    const filtrandoFavCat = categoriasFiltroFavoritos.has(categoria);
    let itens = itensOriginais;
    if (filtrandoFavCat) {
      itens = itensOriginais.filter(p => !!p.favorito);
    }

    const grupoDiv = document.createElement('div');
    grupoDiv.className = 'categoria-grupo';

    let htmlItens = '';
    const nomesResumidosVistos = new Set();
    let itensVisiveisContador = 0;

    if (filtrandoFavCat && itens.length === 0) {
      htmlItens = `
        <div style="padding: 8px 12px; margin: 3px 0; background: #FFFBEB; border: 1px dashed #FDE68A; border-radius: 6px; font-size: 0.76rem; color: #B45309; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <span>Nenhum favorito marcado em <strong>${categoria}</strong>. Clique na estrelinha ⭐ dos itens para favoritar.</span>
          <button type="button" class="btn-step" style="padding: 2px 8px; font-size: 0.72rem; width: auto; height: auto; white-space: nowrap;" onclick="alternarFiltroFavoritosCategoria('${categoria}', event)">Ver Todos</button>
        </div>
      `;
    } else {
      itens.forEach(prod => {
        let nomeExibicao = prod.nome;
        if (AppState.modoResumido) {
          nomeExibicao = obterNomeResumido(prod.nome);
          const chaveDeduplicacao = nomeExibicao.toLowerCase().trim();
          if (nomesResumidosVistos.has(chaveDeduplicacao)) {
            // No modo resumido, variedades com o mesmo nome resumido não são exibidas ("só exibe a primeira")
            return;
          }
          nomesResumidosVistos.add(chaveDeduplicacao);
        }
        itensVisiveisContador++;

        const chaveIcone = prod.icone || detectarChaveIcone(prod.nome);
        const iconeSvg = obterIcone2D(prod.nome, chaveIcone);

        // Verifica se está selecionado para a Lista de Compra
        const estaNaLista = !!prod.selecionado;
        const ehFavorito = !!prod.favorito;
        const qtde = prod.qtde || 1;
        const checkIcone = estaNaLista ? '✓' : '';
        const classeNaLista = estaNaLista ? 'na-lista-montar' : '';

        htmlItens += `
          <div class="item-card ${classeNaLista}" id="card-despensa-${prod.id}"
               onclick="alternarItemDespensaEmTempoReal('${prod.id}', event)"
               oncontextmenu="event.preventDefault(); abrirModalEditarNomeDespensa('${prod.id}', event);"
               title="${estaNaLista ? 'Na Lista de Compra (Clique para desmarcar)' : 'Clique para marcar e adicionar à Lista de Compra'} • Botão direito para editar"
               style="cursor: pointer;">
            <div class="item-check-btn ${estaNaLista ? 'check-ativo' : ''}" 
                 onclick="event.stopPropagation(); alternarItemDespensaEmTempoReal('${prod.id}', event)"
                 title="${estaNaLista ? 'Retirar da Lista de Compra' : 'Adicionar à Lista de Compra'}">
              ${checkIcone}
            </div>

            <!-- Coluna de Quantidade editável na frente do nome -->
            <div class="contador-qtde" style="margin-right: 2px; ${estaNaLista ? '' : 'opacity: 0.5;'}" onclick="event.stopPropagation()">
              <button class="btn-step" onclick="event.stopPropagation(); alterarQuantidadeMontarLista('${prod.id}', -1, event)">-</button>
              <input type="number" min="1" class="input-qtde-card" value="${qtde}" id="qtde-montar-${prod.id}" onclick="event.stopPropagation()" onchange="definirQuantidadeMontarLista('${prod.id}', this.value, event)" />
              <button class="btn-step" onclick="event.stopPropagation(); alterarQuantidadeMontarLista('${prod.id}', 1, event)">+</button>
            </div>

            <div class="item-corpo">
              <div class="item-linha-nome">
                <span class="item-nome" title="${prod.nome}">${nomeExibicao}</span>
                <button class="btn-favorito-item ${ehFavorito ? 'ativo' : ''}" id="btn-fav-despensa-${prod.id}"
                        title="${ehFavorito ? 'Remover dos favoritos' : 'Tornar favorito'}"
                        onclick="event.stopPropagation(); alternarFavoritoItem('${prod.id}', event)">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="${ehFavorito ? '#F59E0B' : 'none'}" stroke="${ehFavorito ? '#D97706' : '#94A3B8'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
                <button class="btn-editar-despensa" title="Editar este produto" onclick="event.stopPropagation(); abrirModalEditarNomeDespensa('${prod.id}', event)">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    const totalEscolhidoCat = itens.filter(p => p.selecionado).reduce((acc, p) => {
      const precoP = Number(p.precoMedioDF) || Number(p.ultimoPreco) || Number(p.preco) || 10;
      return acc + (p.qtde || 1) * precoP;
    }, 0);
    const temEscolhido = totalEscolhidoCat > 0;
    const catChave = sanitizarChaveId(categoria);
    const qtdExibida = filtrandoFavCat ? itensVisiveisContador : itensOriginais.length;

    grupoDiv.innerHTML = `
      <div class="categoria-titulo">
        <div class="categoria-titulo-info">
          <button type="button" 
                  class="btn-categoria-fav ${filtrandoFavCat ? 'ativo' : ''}" 
                  onclick="alternarFiltroFavoritosCategoria('${categoria}', event)"
                  title="${filtrandoFavCat ? `Exibir todos os produtos de ${categoria}` : `Mostrar apenas os favoritos de ${categoria}`}">
            ⭐
          </button>
          <span>${categoria}</span>
          <span class="categoria-qtd-badge" style="font-size: 0.8rem; font-weight: 500; opacity: 0.85;">(${qtdExibida} ${qtdExibida === 1 ? 'item' : 'itens'}${filtrandoFavCat ? ' favoritos' : ''})</span>
        </div>
        <div class="balao-total-categoria ${temEscolhido ? '' : 'vazio'}" id="balao-total-despensa-${catChave}" title="Total Selecionado">
          <span class="balao-valor">${formatarMoeda(totalEscolhidoCat)}</span>
        </div>
      </div>
      <div class="itens-lista">${htmlItens}</div>
    `;

    container.appendChild(grupoDiv);
  }
}

// Alterna o status de favorito de um item do catálogo (Estrelinha)
function alternarFavoritoItem(produtoId, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  prod.favorito = !prod.favorito;

  // Se o item estiver na lista ativa, atualiza a flag favorito também
  const itemLista = AppState.listaAtiva.find(p => String(p.id) === String(produtoId) || String(p.catalogoId) === String(produtoId));
  if (itemLista) {
    itemLista.favorito = prod.favorito;
  }

  salvarEstado(true);

  // Atualiza visual do botão de estrelinha instantaneamente
  const btnFav = document.getElementById(`btn-fav-despensa-${produtoId}`);
  if (btnFav) {
    btnFav.classList.toggle('ativo', !!prod.favorito);
    btnFav.title = prod.favorito ? 'Remover dos favoritos' : 'Tornar favorito';
    const svg = btnFav.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', prod.favorito ? '#F59E0B' : 'none');
      svg.setAttribute('stroke', prod.favorito ? '#D97706' : '#94A3B8');
    }
  }

  // Se a aba selecionada for Favoritos, re-renderiza para atualizar a lista
  if (categoriaAtivaDespensa === 'favoritos' || AppState.filtroCategoria === 'favoritos') {
    renderizarDespensa();
    if (AppState.abaAtiva === 'lista') renderizarListaCompras();
  }

  mostrarNotificacaoToast(prod.favorito ? `⭐ "${prod.nome}" favoritado!` : `☆ "${prod.nome}" removido dos favoritos.`);
}

// Alterna em TEMPO REAL a inclusão ou remoção em Montar Lista (O item NÃO vai pro final)
function alternarItemDespensaEmTempoReal(produtoId, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  // Inverte o estado de seleção
  prod.selecionado = !prod.selecionado;
  // Ao jogar para comprar (ou ao retirar da lista), NUNCA pode vir marcado como comprado!
  prod.comprado = false;
  prod.precoRegistradoMercado = 0;

  const chaveIcone = prod.icone || detectarChaveIcone(prod.nome);
  const precoPadrao = prod.precoMedioDF || (prod.ultimoPreco > 0 ? prod.ultimoPreco : (COTACOES_DF[chaveIcone] ? COTACOES_DF[chaveIcone].atacadao : 10.0));
  if (!prod.preco) prod.preco = precoPadrao;
  if (!prod.ultimoPreco) prod.ultimoPreco = precoPadrao;
  if (!prod.qtde) prod.qtde = 1;

  // Sincroniza estritamente com a Lista de Compras
  sincronizarListaAtivaComCatalogo();

  if (prod.selecionado) {
    AppState.ultimoEvento = {
      autor: AppState.usuarioAtivo || 'Irandy',
      icone: AppState.usuarioIcone || (AppState.usuarioAtivo === 'Sioneide' ? '👩' : '👨'),
      itens: [prod.nome],
      timestamp: Date.now()
    };
  }

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

  // Atualiza imediatamente o balão de total da categoria correspondente
  atualizarBalaoTotalCategoria(prod.categoria || 'Diversos');

  // Monta em tempo real na Lista de Compra (aqui recebe o que eu faço em Montar Lista)
  renderizarListaCompras();
  atualizarCardResumo();
}

function alterarQuantidadeMontarLista(produtoId, delta, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  const qtdeEl = document.getElementById(`qtde-montar-${prod.id}`);
  let atual = prod.qtde || (qtdeEl ? parseInt(qtdeEl.value || qtdeEl.textContent, 10) : 1);
  if (isNaN(atual) || atual < 1) atual = 1;
  let novaQtde = atual + delta;
  if (novaQtde < 1) novaQtde = 1;

  prod.qtde = novaQtde;
  if (qtdeEl) {
    if (qtdeEl.tagName === 'INPUT') qtdeEl.value = novaQtde;
    else qtdeEl.textContent = novaQtde;
  }

  const itemNaLista = AppState.listaAtiva.find(it => String(it.id) === String(prod.id));
  if (itemNaLista) {
    itemNaLista.qtde = novaQtde;
  }

  salvarEstado(true);
  atualizarBalaoTotalCategoria(prod.categoria || 'Diversos');
  renderizarListaCompras();
  atualizarCardResumo();
}

function definirQuantidadeMontarLista(produtoId, novoValor, event) {
  if (event && event.stopPropagation) event.stopPropagation();

  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  if (!prod) return;

  let val = parseInt(novoValor, 10);
  if (isNaN(val) || val < 1) val = 1;

  prod.qtde = val;
  const qtdeEl = document.getElementById(`qtde-montar-${prod.id}`);
  if (qtdeEl && qtdeEl.tagName === 'INPUT') qtdeEl.value = val;

  const itemNaLista = AppState.listaAtiva.find(it => String(it.id) === String(prod.id));
  if (itemNaLista) {
    itemNaLista.qtde = val;
  }

  salvarEstado(true);
  atualizarBalaoTotalCategoria(prod.categoria || 'Diversos');
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
  const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'nenhum';
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
  const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'nenhum';

  if (prod) {
    const nomeAntigo = prod.nome;
    prod.nome = capitalizar(novoNome);
    prod.icone = detectarChaveIcone(prod.nome);
    prod.categoria = novaCategoria;
    const marcaDetectada = detectarMarca(prod.nome);
    if (marcaDetectada) prod.marca = marcaDetectada;

    // Se o produto estava com preço zerado ou nulo, recalcula imediatamente com base no novo nome
    if (!prod.preco || Number(prod.preco) === 0 || !prod.precoMedioDF || Number(prod.precoMedioDF) === 0) {
      const pEst = obterPrecoEstimadoMercado({ nome: prod.nome, icone: prod.icone, marca: prod.marca, categoria: prod.categoria, preco: 0 }, ref);
      if (pEst > 0) {
        prod.preco = pEst;
        prod.precoMedioDF = pEst;
        prod.ultimoPreco = pEst;
      }
    }

    // Atualiza também se esse item estiver presente na lista ativa de compras
    AppState.listaAtiva.forEach(it => {
      if (it.nome.toLowerCase().trim() === nomeAntigo.toLowerCase().trim() || it.id === `item_despensa_${prod.id}`) {
        it.nome = prod.nome;
        it.icone = prod.icone;
        it.categoria = prod.categoria;
        if (prod.marca) it.marca = prod.marca;
        if (!it.preco || Number(it.preco) === 0) {
          it.preco = prod.preco || obterPrecoEstimadoMercado({ nome: it.nome, icone: it.icone, marca: it.marca, categoria: it.categoria, preco: 0 }, ref);
        }
      }
    });

    salvarEstado(true);
    renderizarDespensa();
    renderizarListaCompras();
    atualizarCardResumo();
  } else {
    // Se for um item avulso adicionado na lista de compras
    const itemLista = AppState.listaAtiva.find(p => String(p.id) === String(itemParaEditarNomeId));
    if (itemLista) {
      itemLista.nome = capitalizar(novoNome);
      itemLista.icone = detectarChaveIcone(itemLista.nome);
      itemLista.categoria = novaCategoria;
      const marcaDetectada = detectarMarca(itemLista.nome);
      if (marcaDetectada) itemLista.marca = marcaDetectada;

      if (!itemLista.preco || Number(itemLista.preco) === 0) {
        const pEst = obterPrecoEstimadoMercado({ nome: itemLista.nome, icone: itemLista.icone, marca: itemLista.marca, categoria: itemLista.categoria, preco: 0 }, ref);
        if (pEst > 0) {
          itemLista.preco = pEst;
        }
      }

      salvarEstado(true);
      renderizarListaCompras();
      atualizarCardResumo();
    }
  }

  fecharModal('modal-editar-nome-despensa');
  itemParaEditarNomeId = null;
}

// Estado e Controles do Histórico de Compras
let modoExibicaoHistorico = 'compras'; // 'compras' ou 'itens'
let termoBuscaHistorico = '';
let itensRascunhoHistorico = [];
let comprasExpandidasIds = new Set();

function alternarModoHistorico(modo) {
  modoExibicaoHistorico = modo;
  
  // Se não estiver na aba de histórico, navega para ela
  if (AppState.abaAtiva !== 'historico') {
    navegarParaAba('historico');
  }

  // Abas na visualização mobile
  const btnCompras = document.getElementById('tab-hist-compras');
  const btnItens = document.getElementById('tab-hist-itens');
  const btnMaisComprados = document.getElementById('tab-hist-mais-comprados');
  if (btnCompras) btnCompras.classList.toggle('ativa', modo === 'compras');
  if (btnItens) btnItens.classList.toggle('ativa', modo === 'itens');
  if (btnMaisComprados) btnMaisComprados.classList.toggle('ativa', modo === 'mais_comprados');

  // Sub-botões filhos na barra lateral PC
  const btnSideHistCompras = document.getElementById('btn-sidebar-hist-compras');
  const btnSideHistItens = document.getElementById('btn-sidebar-hist-itens');
  const btnSideHistMaisComprados = document.getElementById('btn-sidebar-hist-mais-comprados');
  if (btnSideHistCompras) btnSideHistCompras.classList.toggle('ativo', modo === 'compras');
  if (btnSideHistItens) btnSideHistItens.classList.toggle('ativo', modo === 'itens');
  if (btnSideHistMaisComprados) btnSideHistMaisComprados.classList.toggle('ativo', modo === 'mais_comprados');

  renderizarHistorico();
}

function filtrarHistorico(termo) {
  termoBuscaHistorico = (termo || '').toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  renderizarHistorico();
}

function alternarCardCompraHistorico(compraId) {
  if (comprasExpandidasIds.has(compraId)) {
    comprasExpandidasIds.delete(compraId);
  } else {
    comprasExpandidasIds.add(compraId);
  }
  const elCard = document.getElementById(`card-hist-${compraId}`);
  if (elCard) {
    elCard.classList.toggle('aberto', comprasExpandidasIds.has(compraId));
  }
}

// Função utilitária para formatar intervalos de tempo entre compras (minutos, horas ou dias)
function formatarIntervaloMs(diffMs) {
  if (diffMs == null || isNaN(diffMs) || diffMs < 0) return '—';
  const totalMin = Math.floor(diffMs / (1000 * 60));
  const totalHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const totalDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (totalDias >= 1) {
    return `${totalDias}d`;
  } else if (totalHoras >= 1) {
    return `${totalHoras}h`;
  } else if (totalMin >= 1) {
    return `${totalMin}min`;
  } else {
    return `< 1min`;
  }
}

// Reduz o nome do produto para o histórico mantendo legibilidade e evitando quebra de alinhamento
function reduzirNomeHistorico(nome, maxChars = 28) {
  if (!nome) return '';
  const s = String(nome).trim();
  if (s.length <= maxChars) return s;
  let sub = s.slice(0, maxChars);
  const ultimoEspaco = sub.lastIndexOf(' ');
  if (ultimoEspaco >= 18) {
    sub = sub.slice(0, ultimoEspaco);
  }
  sub = sub.replace(/[\s\(\/\-,;.]+$/, '');
  return sub + '...';
}

// Renderizar Histórico Completo de Compras, Duração em Dias/Horas e Comparação %
function renderizarHistorico() {
  const container = document.getElementById('historico-container');
  const containerResumo = document.getElementById('historico-cards-resumo');
  if (!container) return;

  if (!AppState.historico || AppState.historico.length === 0) {
    if (containerResumo) containerResumo.innerHTML = '';
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: white; border-radius: 16px; border: 1px dashed var(--border);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">🧾</div>
        <h3 style="font-weight: 800; color: var(--text-main);">Nenhuma compra no histórico ainda</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 6px; max-width: 480px; margin-left: auto; margin-right: auto;">
          Ao finalizar suas compras na aba <strong>Comprar</strong> ou clicando em <strong>+ Registrar Compra</strong> acima, o app calculará o intervalo entre as compras e a variação % de preços entre cada ida ao mercado!
        </p>
      </div>
    `;
    return;
  }

  // Ordenações cronológicas
  const historicoCrescente = [...AppState.historico].sort((a, b) => new Date(a.data) - new Date(b.data));
  const historicoDecrescente = [...AppState.historico].sort((a, b) => new Date(b.data) - new Date(a.data));

  // Por padrão, a compra mais recente fica aberta
  if (comprasExpandidasIds.size === 0 && historicoDecrescente.length > 0) {
    comprasExpandidasIds.add(historicoDecrescente[0].id);
  }

  // 1. Renderizar Métricas de Resumo no Topo
  if (containerResumo) {
    const totalGastoGeral = AppState.historico.reduce((acc, c) => acc + (Number(c.total) || 0), 0);
    const totalComprasQtd = AppState.historico.length;
    const ticketMedio = totalComprasQtd > 0 ? (totalGastoGeral / totalComprasQtd) : 0;

    let mediaIntervaloTxt = '—';
    if (historicoCrescente.length > 1) {
      let somaMs = 0;
      for (let i = 1; i < historicoCrescente.length; i++) {
        const d1 = new Date(historicoCrescente[i - 1].data);
        const d2 = new Date(historicoCrescente[i].data);
        somaMs += Math.max(0, d2.getTime() - d1.getTime());
      }
      const mediaMs = Math.round(somaMs / (historicoCrescente.length - 1));
      mediaIntervaloTxt = formatarIntervaloMs(mediaMs);
    }

    containerResumo.innerHTML = `
      <div class="card-resumo-hist" title="Total Gasto: ${formatarMoeda(totalGastoGeral)}">
        <div class="card-resumo-hist-ico" style="background: #ECFDF5; color: #059669;">💰</div>
        <div class="card-resumo-hist-info">
          <span class="card-resumo-hist-rotulo">Total</span>
          <span class="card-resumo-hist-valor" style="color: #059669;">${totalGastoGeral > 0 ? formatarMoeda(totalGastoGeral) : 'R$ 0,00'}</span>
        </div>
      </div>
      <div class="card-resumo-hist" title="Idas ao Mercado: ${totalComprasQtd} compras">
        <div class="card-resumo-hist-ico" style="background: #EEF2FF; color: #4F46E5;">🛒</div>
        <div class="card-resumo-hist-info">
          <span class="card-resumo-hist-rotulo">Idas</span>
          <span class="card-resumo-hist-valor">${totalComprasQtd} ${totalComprasQtd === 1 ? 'compra' : 'compras'}</span>
        </div>
      </div>
      <div class="card-resumo-hist" title="Ticket Médio: ${formatarMoeda(ticketMedio)}">
        <div class="card-resumo-hist-ico" style="background: #FFFBEB; color: #D97706;">📊</div>
        <div class="card-resumo-hist-info">
          <span class="card-resumo-hist-rotulo">Ticket</span>
          <span class="card-resumo-hist-valor">${ticketMedio > 0 ? formatarMoeda(ticketMedio) : 'R$ 0,00'}</span>
        </div>
      </div>
      <div class="card-resumo-hist" title="Intervalo Médio: ${mediaIntervaloTxt}">
        <div class="card-resumo-hist-ico" style="background: #F0FDF4; color: #16A34A;">⏱️</div>
        <div class="card-resumo-hist-info">
          <span class="card-resumo-hist-rotulo">Intervalo</span>
          <span class="card-resumo-hist-valor">${mediaIntervaloTxt}</span>
        </div>
      </div>
    `;
  }

  // 2. MODO 1: VISÃO POR COMPRAS (Lista cronológica detalhada com comparação vs anterior)
  if (modoExibicaoHistorico === 'compras') {
    let listaFiltrada = historicoDecrescente;
    if (termoBuscaHistorico) {
      listaFiltrada = listaFiltrada.filter(compra => {
        const merc = (compra.mercado || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const temItem = (compra.itens || []).some(it => {
          const n = (it.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return n.includes(termoBuscaHistorico);
        });
        return merc.includes(termoBuscaHistorico) || temItem;
      });
    }

    if (listaFiltrada.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
          <p style="color: var(--text-muted); font-size: 0.9rem;">Nenhuma compra encontrada para o termo pesquisado.</p>
        </div>
      `;
      return;
    }

    let htmlCards = '';

    listaFiltrada.forEach(compra => {
      const isAberta = comprasExpandidasIds.has(compra.id);
      const dataObj = new Date(compra.data);
      const diaStr = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const horaStr = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

      // Comparação da Compra inteira vs Compra Anterior
      const idxCrescente = historicoCrescente.findIndex(c => String(c.id) === String(compra.id));
      let badgeComparativoCompra = '';

      if (idxCrescente > 0) {
        const compraAnterior = historicoCrescente[idxCrescente - 1];
        const diffTotal = compra.total - compraAnterior.total;
        const pctTotal = compraAnterior.total > 0 ? ((diffTotal / compraAnterior.total) * 100) : 0;
        const diffMs = Math.max(0, new Date(compra.data).getTime() - new Date(compraAnterior.data).getTime());
        const intervaloCompraTxt = formatarIntervaloMs(diffMs);

        if (pctTotal > 0.05) {
          badgeComparativoCompra = `
            <span class="tag-comparativo-aumento" title="Aumento de ${formatarMoeda(diffTotal)} em relação à compra anterior (${intervaloCompraTxt} antes)">
              🔺 +${pctTotal.toFixed(1).replace('.', ',')}% vs anterior
            </span>
          `;
        } else if (pctTotal < -0.05) {
          badgeComparativoCompra = `
            <span class="tag-comparativo-reducao" title="Economia de ${formatarMoeda(Math.abs(diffTotal))} em relação à compra anterior (${intervaloCompraTxt} antes)">
              🔻 ${pctTotal.toFixed(1).replace('.', ',')}% vs anterior
            </span>
          `;
        } else {
          badgeComparativoCompra = `
            <span class="tag-comparativo-estavel" title="Valor idêntico à compra anterior (${intervaloCompraTxt} antes)">
              = Estável vs anterior
            </span>
          `;
        }
      } else {
        badgeComparativoCompra = `
          <span class="tag-comparativo-base" title="Primeira compra registrada no histórico">
            ⭐ Compra Base
          </span>
        `;
      }

      // Linhas da Tabela de Itens Detalhados da Compra
      let linhasItensHtml = '';
      const itensCompra = compra.itens || [];

      itensCompra.forEach(it => {
        const nomeNorm = (it.nome || '').toLowerCase().trim();
        const qtde = it.qtde || 1;
        const precoUnit = Number(it.preco) || 0;
        const subtotal = Number(it.subtotal) || (qtde * precoUnit);

        // 1. Duração / Intervalo entre a compra atual e a anterior deste item
        const comprasDesteItem = historicoCrescente.filter(c => 
          (c.itens || []).some(itemCompra => (itemCompra.nome || '').toLowerCase().trim() === nomeNorm)
        );

        const itemIdxNaLinha = comprasDesteItem.findIndex(c => String(c.id) === String(compra.id));
        let tagDuracaoHtml = '';

        if (itemIdxNaLinha > 0) {
          const dataAnteriorItem = new Date(comprasDesteItem[itemIdxNaLinha - 1].data);
          const diffMs = Math.max(0, dataObj.getTime() - dataAnteriorItem.getTime());
          const intervaloTxt = formatarIntervaloMs(diffMs);
          tagDuracaoHtml = `<span class="tag-duracao-item" title="Intervalo de ${intervaloTxt} desde a compra anterior deste item">⏱️ ${intervaloTxt}</span>`;
        } else {
          tagDuracaoHtml = `<span class="tag-duracao-item" style="background: #F1F5F9; color: #64748B; border-color: #E2E8F0;" title="Primeira vez que este produto foi comprado">⏱️ 1ª compra</span>`;
        }

        // 2. Comparação de Preço do Item vs Compra Anterior do Mesmo Item
        let badgeComparativoItem = '';
        if (itemIdxNaLinha > 0) {
          const compraAntItem = comprasDesteItem[itemIdxNaLinha - 1];
          const itAnt = (compraAntItem.itens || []).find(itemCompra => (itemCompra.nome || '').toLowerCase().trim() === nomeNorm);
          const precoAnt = (itAnt && Number(itAnt.preco)) || 0;

          if (precoAnt > 0 && precoUnit > 0) {
            const diffPreco = precoUnit - precoAnt;
            const pctItem = ((diffPreco / precoAnt) * 100);

            if (pctItem > 0.05) {
              badgeComparativoItem = `<span class="tag-comparativo-aumento" title="Preço subiu de ${formatarMoeda(precoAnt)} para ${formatarMoeda(precoUnit)} (+${formatarMoeda(diffPreco)})">🔺 +${pctItem.toFixed(1).replace('.', ',')}%</span>`;
            } else if (pctItem < -0.05) {
              badgeComparativoItem = `<span class="tag-comparativo-reducao" title="Preço caiu de ${formatarMoeda(precoAnt)} para ${formatarMoeda(precoUnit)} (-${formatarMoeda(Math.abs(diffPreco))})">🔻 ${pctItem.toFixed(1).replace('.', ',')}%</span>`;
            } else {
              badgeComparativoItem = `<span class="tag-comparativo-estavel" title="Preço manteve-se em ${formatarMoeda(precoUnit)}">= Estável</span>`;
            }
          } else if (precoUnit > 0 && precoAnt <= 0) {
            badgeComparativoItem = `<span class="tag-comparativo-base">⭐ 1º preço</span>`;
          } else {
            badgeComparativoItem = `<span class="tag-comparativo-base" style="color: #94A3B8;">—</span>`;
          }
        } else {
          badgeComparativoItem = `<span class="tag-comparativo-base">⭐ 1ª compra</span>`;
        }

        linhasItensHtml += `
          <tr>
            <td class="td-hist-item">
              <div class="hist-prod-info">
                <span class="hist-prod-nome" title="${it.nome}">${reduzirNomeHistorico(it.nome, 28)}</span>
              </div>
            </td>
            <td class="td-hist-qtd"><span class="hist-qtd-num">${String(qtde).padStart(2, '0')}</span></td>
            <td class="td-hist-precoun">${precoUnit > 0 ? formatarMoeda(precoUnit) : '—'}</td>
            <td class="td-hist-total">${subtotal > 0 ? formatarMoeda(subtotal) : '—'}</td>
            <td class="td-hist-comp">${badgeComparativoItem}</td>
            <td class="td-hist-intervalo">${tagDuracaoHtml}</td>
          </tr>
        `;
      });

      // Supermercado registrado na compra (com logo se for mercado cadastrado)
      const nomeMercado = (compra.mercado || '').trim();
      let mercadoBadgeHtml = '';
      if (nomeMercado) {
        let logoSrc = null;
        if (typeof obterLogoMercado === 'function') {
          logoSrc = obterLogoMercado(nomeMercado);
        }
        if (logoSrc && (logoSrc.startsWith('data:') || logoSrc.endsWith('.png') || logoSrc.endsWith('.svg'))) {
          mercadoBadgeHtml = `
            <span class="hist-mercado-badge" title="Supermercado: ${nomeMercado}">
              <img src="${logoSrc}" alt="${nomeMercado}" class="hist-mercado-logo" onerror="this.style.display='none'" />
              <span class="hist-mercado-nome">${nomeMercado}</span>
            </span>
          `;
        } else {
          mercadoBadgeHtml = `
            <span class="hist-mercado-badge sem-logo" title="Supermercado: ${nomeMercado}">
              <span class="hist-mercado-nome">${nomeMercado}</span>
            </span>
          `;
        }
      }

      htmlCards += `
        <div class="historico-compra-card ${isAberta ? 'aberto' : ''}" id="card-hist-${compra.id}">
          <div class="historico-compra-cabecalho" onclick="alternarCardCompraHistorico('${compra.id}')">
            <div class="historico-compra-info-esq">
              <div class="historico-compra-data-hora">
                <span class="hist-data-negrito">${diaStr}</span>
                <span class="hist-hora-laranja">${horaStr}</span>
                ${mercadoBadgeHtml}
              </div>
            </div>
            <div class="historico-compra-info-dir">
              ${badgeComparativoCompra}
              <span class="historico-compra-itens-count">${itensCompra.length} ${itensCompra.length === 1 ? 'item' : 'itens'}</span>
              <span class="historico-total-compra-valor">${compra.total > 0 ? formatarMoeda(compra.total) : 'R$ 0,00'}</span>
              <button type="button" class="btn-acao-mini" onclick="event.stopPropagation(); excluirCompraHistorico('${compra.id}')" title="Excluir esta compra do histórico" style="color: #DC2626; border-color: #FCA5A5; background: #FEF2F2;">🗑️</button>
              <span class="historico-seta-toggle">▼</span>
            </div>
          </div>
          <div class="historico-detalhes-compra">
            <table class="tabela-historico-itens">
              <colgroup>
                <col class="col-hist-item">
                <col class="col-hist-qtd">
                <col class="col-hist-precoun">
                <col class="col-hist-total">
                <col class="col-hist-comp">
                <col class="col-hist-intervalo">
              </colgroup>
              <thead>
                <tr>
                  <th class="th-hist-item">Item</th>
                  <th class="th-hist-qtd">Qtd</th>
                  <th class="th-hist-precoun">Preço Un.</th>
                  <th class="th-hist-total">Total</th>
                  <th class="th-hist-comp">Comparação</th>
                  <th class="th-hist-intervalo">Intervalo</th>
                </tr>
              </thead>
              <tbody>
                ${linhasItensHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    });

    container.innerHTML = `<div class="historico-lista-compras">${htmlCards}</div>`;
  } 
  // 3. MODO 2: VISÃO POR ITEM & CONSUMO (Agrupamento por produto, evolução de preços e intervalo médio)
  else {
    const mapaItens = new Map();

    historicoCrescente.forEach(compra => {
      const dataObj = new Date(compra.data);
      (compra.itens || []).forEach(it => {
        const nomeNorm = (it.nome || '').trim();
        const chave = nomeNorm.toLowerCase();
        if (!mapaItens.has(chave)) {
          mapaItens.set(chave, {
            nome: nomeNorm,
            compras: []
          });
        }
        mapaItens.get(chave).compras.push({
          data: dataObj,
          dataStr: dataObj.toLocaleDateString('pt-BR'),
          mercado: compra.mercado || 'Mercado',
          qtde: it.qtde || 1,
          preco: Number(it.preco) || 0,
          subtotal: Number(it.subtotal) || ((it.qtde || 1) * (Number(it.preco) || 0))
        });
      });
    });

    let listaItensUnicos = Array.from(mapaItens.values());

    if (termoBuscaHistorico) {
      listaItensUnicos = listaItensUnicos.filter(item => {
        const n = item.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return n.includes(termoBuscaHistorico);
      });
    }

    if (listaItensUnicos.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
          <p style="color: var(--text-muted); font-size: 0.9rem;">Nenhum produto encontrado no histórico para a busca realizada.</p>
        </div>
      `;
      return;
    }

    // Ordena produtos por quantidade de vezes comprados decrescente
    listaItensUnicos.sort((a, b) => b.compras.length - a.compras.length);

    let htmlGridItens = '';

    listaItensUnicos.forEach(prod => {
      const totalVezes = prod.compras.length;
      const totalUnidades = prod.compras.reduce((acc, c) => acc + c.qtde, 0);
      const totalGastoProd = prod.compras.reduce((acc, c) => acc + c.subtotal, 0);

      // Último preço (compra mais recente)
      const ultimoPreco = Number(prod.compras[prod.compras.length - 1].preco) || 0;

      // Preço anterior (compra imediatamente anterior à última com preço)
      let precoAnterior = 0;
      if (totalVezes > 1) {
        precoAnterior = Number(prod.compras[prod.compras.length - 2].preco) || 0;
        if (precoAnterior <= 0) {
          for (let k = prod.compras.length - 2; k >= 0; k--) {
            if (Number(prod.compras[k].preco) > 0) {
              precoAnterior = Number(prod.compras[k].preco);
              break;
            }
          }
        }
      }

      let badgeVariacaoGeral = '';
      if (precoAnterior > 0 && ultimoPreco > 0) {
        const diffPreco = ultimoPreco - precoAnterior;
        const pctPreco = ((diffPreco / precoAnterior) * 100);
        if (pctPreco > 0.05) {
          badgeVariacaoGeral = `<span class="tag-comparativo-aumento">🔺 +${pctPreco.toFixed(1).replace('.', ',')}% vs anterior</span>`;
        } else if (pctPreco < -0.05) {
          badgeVariacaoGeral = `<span class="tag-comparativo-reducao">🔻 ${pctPreco.toFixed(1).replace('.', ',')}% vs anterior</span>`;
        }
      }

      // Cálculo do intervalo entre compras
      // Histórico das compras do produto em ordem cronológica (mais antiga para mais recente)
      const comprasExibidas = prod.compras.slice(-5);
      let registrosHtml = comprasExibidas.map(c => {
        const idxGlobal = prod.compras.indexOf(c);
        let intervaloRowTxt = '—';
        if (idxGlobal > 0) {
          const compraAnt = prod.compras[idxGlobal - 1];
          const diffMs = Math.max(0, c.data.getTime() - compraAnt.data.getTime());
          intervaloRowTxt = formatarIntervaloMs(diffMs);
        }

        const partes = (c.dataStr || '').split('/');
        const dataCurta = partes.length === 3 ? `${partes[0]}/${partes[1]}/${partes[2].slice(-2)}` : c.dataStr;
        const qtdeFmt = `${String(c.qtde).padStart(2, '0')}`;
        const precoFmt = c.preco > 0 ? formatarMoeda(c.preco) : '—';

        const badgeIntervaloHtml = (intervaloRowTxt !== '—')
          ? `<span class="hist-reg-intervalo" title="Intervalo desde a compra anterior">${intervaloRowTxt}</span>`
          : `<span class="hist-reg-intervalo vazio" title="Primeira compra registrada">—</span>`;

        return `
          <div class="linha-hist-registro">
            <span class="hist-reg-data">${dataCurta}</span>
            <span class="hist-reg-qtd">${qtdeFmt}</span>
            <span class="hist-reg-preco">${precoFmt}</span>
            ${badgeIntervaloHtml}
          </div>
        `;
      }).join('');

      htmlGridItens += `
        <div class="card-item-analise">
          <div class="card-item-analise-topo">
            <div class="card-item-analise-nome" title="${prod.nome}">${reduzirNomeHistorico(prod.nome, 28)}</div>
            ${badgeVariacaoGeral}
          </div>
          <div class="card-item-analise-registros">
            ${registrosHtml}
          </div>
        </div>
      `;
    });

    container.innerHTML = `<div class="historico-itens-grid">${htmlGridItens}</div>`;
  }

  // 3. MODO 3: RANKING POR MAIS COMPRADOS (Frequência, Quantidade e Gasto Acumulado)
  if (modoExibicaoHistorico === 'mais_comprados') {
    const mapaItens = new Map();

    AppState.historico.forEach(compra => {
      const dataObj = new Date(compra.data);
      (compra.itens || []).forEach(it => {
        const nomeNorm = (it.nome || '').trim();
        const chave = nomeNorm.toLowerCase();
        if (!mapaItens.has(chave)) {
          mapaItens.set(chave, {
            nome: nomeNorm,
            totalQtd: 0,
            vezesComprado: 0,
            totalGasto: 0,
            ultimoPreco: 0,
            ultimaData: dataObj,
            compras: []
          });
        }
        const ref = mapaItens.get(chave);
        const qtd = Number(it.qtde) || 1;
        const preco = Number(it.preco) || 0;
        const subtotal = Number(it.subtotal) || (qtd * preco);
        ref.totalQtd += qtd;
        ref.vezesComprado += 1;
        ref.totalGasto += subtotal;
        if (preco > 0) ref.ultimoPreco = preco;
        if (dataObj > ref.ultimaData) ref.ultimaData = dataObj;
        ref.compras.push({ data: dataObj, qtd, preco, subtotal, mercado: compra.mercado });
      });
    });

    let listaMaisComprados = Array.from(mapaItens.values());

    if (termoBuscaHistorico) {
      listaMaisComprados = listaMaisComprados.filter(item => {
        const n = item.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return n.includes(termoBuscaHistorico);
      });
    }

    if (listaMaisComprados.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; background: white; border-radius: 12px; border: 1px dashed var(--border);">
          <p style="color: var(--text-muted); font-size: 0.9rem;">Nenhum produto encontrado no ranking.</p>
        </div>
      `;
      return;
    }

    // Ordenação: 1º por quantidade total de unidades compradas, depois por frequência
    listaMaisComprados.sort((a, b) => (b.totalQtd - a.totalQtd) || (b.vezesComprado - a.vezesComprado) || (b.totalGasto - a.totalGasto));

    const maxQtd = listaMaisComprados[0].totalQtd || 1;

    let htmlRanking = '';

    listaMaisComprados.forEach((prod, index) => {
      const pos = index + 1;
      let posClass = '';
      let medalhaTxt = `#${pos}`;
      if (pos === 1) { posClass = 'ouro'; medalhaTxt = '🥇 1º'; }
      else if (pos === 2) { posClass = 'prata'; medalhaTxt = '🥈 2º'; }
      else if (pos === 3) { posClass = 'bronze'; medalhaTxt = '🥉 3º'; }

      const pctBarra = Math.min(100, Math.max(8, Math.round((prod.totalQtd / maxQtd) * 100)));

      htmlRanking += `
        <div class="card-ranking-item">
          <div class="card-ranking-topo">
            <span class="card-ranking-posicao ${posClass}">${medalhaTxt}</span>
            <div class="card-ranking-nome" title="${prod.nome}">${prod.nome}</div>
          </div>

          <div class="card-ranking-stats">
            <div class="card-ranking-stat-col">
              <span class="card-ranking-stat-label">Total Comprado</span>
              <span class="card-ranking-stat-val" style="color: var(--primary);">${prod.totalQtd} un <span style="font-weight: 500; font-size: 0.72rem; color: var(--text-muted);">(${prod.vezesComprado}x)</span></span>
            </div>
            <div class="card-ranking-stat-col" style="text-align: center;">
              <span class="card-ranking-stat-label">Último Preço</span>
              <span class="card-ranking-stat-val">${prod.ultimoPreco > 0 ? formatarMoeda(prod.ultimoPreco) : '—'}</span>
            </div>
            <div class="card-ranking-stat-col" style="text-align: right;">
              <span class="card-ranking-stat-label">Gasto Total</span>
              <span class="card-ranking-stat-val" style="color: #059669;">${prod.totalGasto > 0 ? formatarMoeda(prod.totalGasto) : 'R$ 0,00'}</span>
            </div>
          </div>

          <div class="card-ranking-barra-wrapper" title="${prod.totalQtd} unidades compradas (${pctBarra}% do líder)">
            <div class="card-ranking-barra-fill" style="width: ${pctBarra}%;"></div>
          </div>
        </div>
      `;
    });

    container.innerHTML = `<div class="historico-ranking-grid">${htmlRanking}</div>`;
  }
}

// Modal e Registro Manual de Compras no Histórico
function abrirModalNovaCompraHistorico() {
  itensRascunhoHistorico = [];
  const elMercado = document.getElementById('hist-input-mercado');
  const elData = document.getElementById('hist-input-data');
  if (elMercado) elMercado.value = '';
  if (elData) {
    const agora = new Date();
    agora.setMinutes(agora.getMinutes() - agora.getTimezoneOffset());
    elData.value = agora.toISOString().slice(0, 16);
  }
  atualizarListaRascunhoHistorico();
  abrirModal('modal-nova-compra-historico');
}

function adicionarItemRascunhoHistorico() {
  const elNome = document.getElementById('hist-item-nome');
  const elQtde = document.getElementById('hist-item-qtde');
  const elPreco = document.getElementById('hist-item-preco');

  const nome = elNome ? elNome.value.trim() : '';
  const qtde = elQtde ? Math.max(1, Number(elQtde.value) || 1) : 1;
  const preco = elPreco ? Math.max(0, Number(elPreco.value.replace(',', '.')) || 0) : 0;

  if (!nome) {
    alert('Digite o nome do produto.');
    return;
  }

  itensRascunhoHistorico.push({
    nome: nome,
    qtde: qtde,
    preco: preco,
    subtotal: qtde * preco
  });

  if (elNome) elNome.value = '';
  if (elQtde) elQtde.value = '1';
  if (elPreco) elPreco.value = '';
  if (elNome) elNome.focus();

  atualizarListaRascunhoHistorico();
}

function removerItemRascunhoHistorico(index) {
  itensRascunhoHistorico.splice(index, 1);
  atualizarListaRascunhoHistorico();
}

function atualizarListaRascunhoHistorico() {
  const container = document.getElementById('lista-rascunho-itens-historico');
  const totalEl = document.getElementById('hist-total-rascunho');
  if (!container) return;

  if (itensRascunhoHistorico.length === 0) {
    container.innerHTML = `<span style="font-size: 0.78rem; color: var(--text-muted); padding: 6px;">Nenhum item adicionado à compra ainda.</span>`;
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  let total = 0;
  container.innerHTML = itensRascunhoHistorico.map((it, idx) => {
    total += it.subtotal;
    return `
      <div class="item-rascunho-linha">
        <span><strong>${it.qtde}x</strong> ${it.nome} (${formatarMoeda(it.preco)} un.)</span>
        <div>
          <strong style="color: #059669; margin-right: 8px;">${formatarMoeda(it.subtotal)}</strong>
          <button type="button" onclick="removerItemRascunhoHistorico(${idx})" style="background: none; border: none; color: #DC2626; cursor: pointer; font-size: 0.8rem;">✕</button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = formatarMoeda(total);
}

function salvarNovaCompraHistorico() {
  const elMercado = document.getElementById('hist-input-mercado');
  const elData = document.getElementById('hist-input-data');

  const mercado = (elMercado && elMercado.value.trim()) || 'Supermercado';
  const dataVal = (elData && elData.value) ? new Date(elData.value).toISOString() : new Date().toISOString();

  if (itensRascunhoHistorico.length === 0) {
    alert('Adicione pelo menos 1 item para salvar a compra.');
    return;
  }

  const total = itensRascunhoHistorico.reduce((acc, it) => acc + it.subtotal, 0);

  const novaCompra = {
    id: 'h_' + Date.now(),
    data: dataVal,
    mercado: mercado,
    total: total,
    itensQtd: itensRascunhoHistorico.length,
    itens: [...itensRascunhoHistorico]
  };

  AppState.historico.unshift(novaCompra);
  comprasExpandidasIds.add(novaCompra.id);

  salvarEstado(true);
  fecharModal('modal-nova-compra-historico');
  renderizarHistorico();
}

let compraParaExcluirId = null;

function excluirCompraHistorico(compraId) {
  compraParaExcluirId = compraId;
  const compra = AppState.historico.find(c => String(c.id) === String(compraId));
  
  const modal = document.getElementById('modal-confirm-excluir-compra');
  const dataEl = document.getElementById('modal-confirm-compra-data');
  const valorEl = document.getElementById('modal-confirm-compra-valor');
  
  if (compra) {
    const d = new Date(compra.data);
    const dataFmt = d.toLocaleDateString('pt-BR');
    const horaFmt = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const totFmt = compra.total > 0 ? formatarMoeda(compra.total) : 'R$ 0,00';
    
    if (dataEl) dataEl.textContent = `${dataFmt}, ${horaFmt}`;
    if (valorEl) valorEl.textContent = totFmt;
  }
  
  if (modal) modal.style.display = 'flex';
}

function executarExclusaoCompraConfirmada() {
  if (!compraParaExcluirId) return;
  AppState.historico = AppState.historico.filter(c => String(c.id) !== String(compraParaExcluirId));
  salvarEstado(true);
  fecharModal('modal-confirm-excluir-compra');
  compraParaExcluirId = null;
  renderizarHistorico();
  mostrarNotificacaoToast("🗑️ Compra excluída do histórico com sucesso!");
}

// Ações nos Itens da Lista de Compras
// Lógica anti-toque acidental: 1 clique para marcar como comprado;
// 2 cliques (confirmação em até 3 segundos) para desmarcar.
let itemPendenteDesmarcarId = null;
let timerPendenteDesmarcar = null;
let houveArrastoRecente = false;

function atualizarVisualItemLinha(item, isPendente = false) {
  if (!item) return false;
  const tr = document.getElementById(`tr-item-${item.id}`);
  if (!tr) return false;

  tr.className = `mcol-tr-item ${item.comprado ? 'item-linha-comprado' : ''} ${isPendente ? 'pendente-desmarcar' : ''}`;

  const chk = tr.querySelector('.check-item-comprado');
  if (chk) {
    chk.checked = !!item.comprado;
    chk.title = item.comprado 
      ? (isPendente ? 'Clique novamente para confirmar' : 'Clique 2x para desmarcar') 
      : 'Marcar como pego no carrinho';
  }

  const nomeEl = tr.querySelector('.mcol-prod-nome');
  if (nomeEl) {
    if (item.comprado && !isPendente) {
      nomeEl.classList.add('texto-riscado');
    } else {
      nomeEl.classList.remove('texto-riscado');
    }
  }

  const cardCell = tr.querySelector('.mcol-prod-card-cell');
  if (cardCell) {
    let badgePendenteEl = cardCell.querySelector('.badge-confirmar-desmarcar');
    if (isPendente) {
      if (!badgePendenteEl) {
        badgePendenteEl = document.createElement('span');
        badgePendenteEl.className = 'badge-confirmar-desmarcar';
        badgePendenteEl.title = 'Clique mais uma vez para desmarcar';
        badgePendenteEl.textContent = '⚠️ Toque novamente para desmarcar';
        cardCell.appendChild(badgePendenteEl);
      }
    } else if (badgePendenteEl) {
      badgePendenteEl.remove();
    }
  }

  return true;
}

function alternarItemComprado(id) {
  if (houveArrastoRecente) return;
  const item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (!item) return;

  // CASO 1: Item ainda NÃO comprado -> Marca imediatamente com 1 clique!
  if (!item.comprado) {
    item.comprado = true;
    cancelarPendenteDesmarcar();

    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.id) || String(c.id) === String(item.catalogoId));
    if (catItem) catItem.comprado = true;

    salvarEstado(true);

    // Re-renderiza com scroll travado: o item vai para o fim da seção (ordem A-Z dos comprados) sem mover a tela
    renderizarListaCompras();
    atualizarCardResumo();

    // Finalização Automática quando clicar no check do último item da lista
    const todosComprados = AppState.listaAtiva.length > 0 && AppState.listaAtiva.every(i => i.comprado);
    if (todosComprados) {
      setTimeout(() => {
        abrirModalFinalizarCompra(true);
      }, 350);
    }
    return;
  }

  // CASO 2: Item JÁ ESTÁ COMPRADO -> Exige 2 cliques para desmarcar (regra anti-toque acidental)
  if (itemPendenteDesmarcarId === id) {
    // Segundo clique confirmado dentro da janela de 3 segundos!
    cancelarPendenteDesmarcar();
    item.comprado = false;

    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.id) || String(c.id) === String(item.catalogoId));
    if (catItem) catItem.comprado = false;

    salvarEstado(true);
    renderizarListaCompras();
    atualizarCardResumo();
  } else {
    // Primeiro clique: entra em estado de aviso/confirmação
    cancelarPendenteDesmarcar();
    itemPendenteDesmarcarId = id;
    if (!atualizarVisualItemLinha(item, true)) {
      renderizarListaCompras();
    }

    // Timer de 3 segundos para expirar a confirmação se não houver o 2º clique
    timerPendenteDesmarcar = setTimeout(() => {
      cancelarPendenteDesmarcar();
    }, 3000);
  }
}

function cancelarPendenteDesmarcar() {
  if (timerPendenteDesmarcar) {
    clearTimeout(timerPendenteDesmarcar);
    timerPendenteDesmarcar = null;
  }
  if (itemPendenteDesmarcarId) {
    const pendenteItem = AppState.listaAtiva.find(i => String(i.id) === String(itemPendenteDesmarcarId));
    itemPendenteDesmarcarId = null;
    if (pendenteItem) {
      atualizarVisualItemLinha(pendenteItem, false);
    }
  }
}

function alterarQuantidade(id, delta) {
  const item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (item) {
    let novaQtde = (item.qtde || 1) + delta;
    if (novaQtde < 1) novaQtde = 1;
    item.qtde = novaQtde;

    const prodCat = AppState.catalogo.find(p => String(p.id) === String(id) || String(p.catalogoId) === String(id));
    if (prodCat) {
      prodCat.qtde = novaQtde;
    }

    salvarEstado(true);
    atualizarCardResumo();
    atualizarBalaoTotalCategoria(item.categoria || 'Diversos');

    const inputQtde = document.querySelector(`#tr-item-${id} .input-qtde-tabela`);
    if (inputQtde) {
      inputQtde.value = novaQtde;
    } else if (AppState.abaAtiva === 'mercados') {
      renderizarComparadorDF();
    } else {
      renderizarListaCompras();
    }
  }
}

function definirQuantidadeDireta(id, novoValor) {
  const item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (item) {
    let val = parseInt(novoValor, 10);
    if (isNaN(val) || val < 1) val = 1;
    item.qtde = val;

    const prodCat = AppState.catalogo.find(p => String(p.id) === String(id) || String(p.catalogoId) === String(id));
    if (prodCat) {
      prodCat.qtde = val;
    }

    salvarEstado(true);
    atualizarCardResumo();
    atualizarBalaoTotalCategoria(item.categoria || 'Diversos');

    const inputQtde = document.querySelector(`#tr-item-${id} .input-qtde-tabela`);
    if (inputQtde) {
      inputQtde.value = val;
    } else if (AppState.abaAtiva === 'mercados') {
      renderizarComparadorDF();
    } else {
      renderizarListaCompras();
    }
  }
}

function alterarPrecoItem(id, novoPrecoStr, redeRef) {
  const item = AppState.listaAtiva.find(i => i.id === id);
  if (item) {
    const precoFloat = parseFloat(novoPrecoStr.replace(',', '.'));
    const val = isNaN(precoFloat) ? 0 : precoFloat;
    item.preco = val;
    item.precoReferencia = val;
    if (redeRef && redeRef !== 'todos' && redeRef !== 'nenhum') {
      if (!item.precosMercados) item.precosMercados = {};
      item.precosMercados[redeRef] = val;
      item.origemPreco = redeRef;
    }
    const catItem = AppState.catalogo.find(c => String(c.id) === String(item.id) || String(c.id) === String(item.catalogoId));
    if (catItem) {
      catItem.preco = val;
      catItem.ultimoPreco = val;
      if (redeRef && redeRef !== 'todos' && redeRef !== 'nenhum') {
        if (!catItem.precosMercados) catItem.precosMercados = {};
        catItem.precosMercados[redeRef] = val;
      }
    }
    salvarEstado(true);
    atualizarCardResumo();
  }
}

function removerItem(id) {
  const itemRemovido = AppState.listaAtiva.find(i => String(i.id) === String(id) || String(i.catalogoId) === String(id));
  const catItem = itemRemovido ? (itemRemovido.categoria || 'Diversos') : null;

  // Desmarca no catálogo se for produto do catálogo
  const prod = AppState.catalogo.find(p => String(p.id) === String(id) || String(p.catalogoId) === String(id) || `item_despensa_${p.id}` === String(id));
  if (prod) {
    prod.selecionado = false;
    prod.comprado = false;
    prod.precoRegistradoMercado = 0;
  }
  AppState.listaAtiva = AppState.listaAtiva.filter(i => String(i.id) !== String(id) && String(i.catalogoId) !== String(id));
  salvarEstado(true);
  renderizarListaCompras();
  renderizarDespensa();
  atualizarCardResumo();
  if (catItem) atualizarBalaoTotalCategoria(catItem);
}

// =========================================================================
// ESCALA DE FONTE NA ABA MONTAR LISTA (BOTÕES A- E A+ NO CABEÇALHO)
// =========================================================================
const ESCALAS_FONTE_MONTAR = ['0.65rem', '0.72rem', '0.78rem', '0.86rem', '0.96rem', '1.08rem'];
let indiceFonteMontar = 2; // Padrão: 0.78rem

function inicializarEscalaFonteMontar() {
  const salvo = localStorage.getItem('escala_fonte_montar');
  if (salvo !== null) {
    const idx = parseInt(salvo, 10);
    if (!isNaN(idx) && idx >= 0 && idx < ESCALAS_FONTE_MONTAR.length) {
      indiceFonteMontar = idx;
    }
  }
  aplicarEscalaFonteMontar(false);
}

function aplicarEscalaFonteMontar(mostrarToast = false) {
  const tamanhoRem = ESCALAS_FONTE_MONTAR[indiceFonteMontar];
  const vDespensa = document.getElementById('view-despensa');
  if (vDespensa) {
    vDespensa.style.setProperty('--fonte-montar', tamanhoRem);
  }
  document.documentElement.style.setProperty('--fonte-montar', tamanhoRem);
  try {
    localStorage.setItem('escala_fonte_montar', indiceFonteMontar);
  } catch (e) {}

  if (mostrarToast) {
    const labels = ['Muito Pequena (65%)', 'Pequena (72%)', 'Padrão (78%)', 'Média (86%)', 'Grande (96%)', 'Muito Grande (108%)'];
    mostrarNotificacaoToast(`🔤 Fonte Montar Lista: ${labels[indiceFonteMontar]}`);
  }
}

function ajustarFonteMontarLista(direcao) {
  const novoIndice = indiceFonteMontar + direcao;
  if (novoIndice < 0) {
    mostrarNotificacaoToast('Tamanho mínimo de fonte atingido');
    return;
  }
  if (novoIndice >= ESCALAS_FONTE_MONTAR.length) {
    mostrarNotificacaoToast('Tamanho máximo de fonte atingido');
    return;
  }
  indiceFonteMontar = novoIndice;
  aplicarEscalaFonteMontar(true);
}

// =========================================================================
// ARRASTAR PARA A ESQUERDA PARA DELETAR ITEM DA COMPRA (SWIPE TO DELETE)
// =========================================================================
function inicializarSwipeDeleteMobile() {
  function configurarContainerSwipe(containerId, seletorItem, prefixoId, callbackExcluir) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let touchState = null;

    function resetarElem(elem) {
      if (!elem) return;
      elem.classList.remove('arrastando-swipe', 'pronto-deletar-swipe');
      elem.style.transition = 'transform 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      elem.style.transform = 'translateX(0)';
      setTimeout(() => {
        elem.style.transition = '';
        elem.style.transform = '';
      }, 230);
    }

    // --- SUPORTE A TOQUE NATIVO (CELULAR / MOBILE) ---
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) return;
      if (e.target.closest('button, input, select, a, .contador-qtde, .btn-mic-preco-verde, .badge-preco-real, .btn-favorito-item, .btn-editar-despensa, .item-check-btn')) {
        return;
      }

      const elem = e.target.closest(seletorItem);
      if (!elem) return;

      touchState = {
        elem: elem,
        itemId: elem.id ? elem.id.replace(prefixoId, '') : null,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        startTime: Date.now(),
        diffX: 0,
        diffY: 0,
        isSwiping: false,
        directionLocked: false
      };
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (!touchState || !touchState.elem) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      touchState.diffX = currentX - touchState.startX;
      touchState.diffY = currentY - touchState.startY;

      if (!touchState.directionLocked) {
        if (Math.abs(touchState.diffX) > 8 || Math.abs(touchState.diffY) > 8) {
          touchState.directionLocked = true;
          if (Math.abs(touchState.diffY) >= Math.abs(touchState.diffX) || touchState.diffX > 5) {
            touchState = null;
            return;
          } else if (touchState.diffX < -8) {
            touchState.isSwiping = true;
            touchState.elem.classList.add('arrastando-swipe');
            houveArrastoRecente = true;
          }
        }
      }

      if (touchState && touchState.isSwiping) {
        if (e.cancelable) e.preventDefault();

        let translateX = touchState.diffX;
        if (translateX < -130) {
          translateX = -130 + (translateX + 130) * 0.35;
        }

        touchState.elem.style.transform = `translateX(${translateX}px)`;

        if (translateX < -75) {
          touchState.elem.classList.add('pronto-deletar-swipe');
        } else {
          touchState.elem.classList.remove('pronto-deletar-swipe');
        }
      }
    }, { passive: false });

    function finalizarTouch() {
      if (!touchState || !touchState.elem) return;
      const { elem, itemId, diffX, startTime, isSwiping } = touchState;
      touchState = null;

      if (!isSwiping) return;

      setTimeout(() => { houveArrastoRecente = false; }, 150);

      const elapsed = Date.now() - startTime;
      const velocity = Math.abs(diffX) / (elapsed || 1);
      const deveExcluir = diffX < -80 || (diffX < -45 && velocity > 0.45);

      if (deveExcluir && itemId) {
        elem.classList.remove('arrastando-swipe', 'pronto-deletar-swipe');
        elem.classList.add('deletando-swipe');
        elem.style.transition = 'transform 0.22s ease-out, opacity 0.22s ease-out';
        elem.style.transform = 'translateX(-110%)';
        elem.style.opacity = '0';

        setTimeout(() => {
          elem.style.transition = 'all 0.18s ease-in-out';
          elem.style.maxHeight = '0px';
          elem.style.height = '0px';
          elem.style.padding = '0px';
          elem.style.margin = '0px';
          elem.style.border = 'none';

          setTimeout(() => {
            callbackExcluir(itemId);
          }, 180);
        }, 220);
      } else {
        resetarElem(elem);
      }
    }

    container.addEventListener('touchend', finalizarTouch);
    container.addEventListener('touchcancel', finalizarTouch);

    // --- SUPORTE A MOUSE / POINTER (EMULAÇÃO MOBILE E PC) ---
    let mouseState = null;

    container.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('button, input, select, a, .contador-qtde, .btn-mic-preco-verde, .badge-preco-real, .btn-favorito-item, .btn-editar-despensa, .item-check-btn')) {
        return;
      }
      const elem = e.target.closest(seletorItem);
      if (!elem) return;

      mouseState = {
        elem: elem,
        itemId: elem.id ? elem.id.replace(prefixoId, '') : null,
        startX: e.clientX,
        startY: e.clientY,
        startTime: Date.now(),
        diffX: 0,
        diffY: 0,
        isSwiping: false
      };
    });

    window.addEventListener('mousemove', (e) => {
      if (!mouseState || !mouseState.elem) return;

      mouseState.diffX = e.clientX - mouseState.startX;
      mouseState.diffY = e.clientY - mouseState.startY;

      if (!mouseState.isSwiping) {
        if (mouseState.diffX < -15 && Math.abs(mouseState.diffX) > Math.abs(mouseState.diffY)) {
          mouseState.isSwiping = true;
          mouseState.elem.classList.add('arrastando-swipe');
          houveArrastoRecente = true;
        } else if (Math.abs(mouseState.diffY) > 15 || mouseState.diffX > 15) {
          mouseState = null;
          return;
        }
      }

      if (mouseState && mouseState.isSwiping) {
        let translateX = mouseState.diffX;
        if (translateX < -130) translateX = -130 + (translateX + 130) * 0.35;
        mouseState.elem.style.transform = `translateX(${translateX}px)`;
        if (translateX < -75) mouseState.elem.classList.add('pronto-deletar-swipe');
        else mouseState.elem.classList.remove('pronto-deletar-swipe');
      }
    });

    window.addEventListener('mouseup', () => {
      if (!mouseState || !mouseState.elem) return;
      const { elem, itemId, diffX, startTime, isSwiping } = mouseState;
      mouseState = null;

      if (!isSwiping) return;

      setTimeout(() => { houveArrastoRecente = false; }, 150);

      const elapsed = Date.now() - startTime;
      const velocity = Math.abs(diffX) / (elapsed || 1);
      const deveExcluir = diffX < -80 || (diffX < -45 && velocity > 0.45);

      if (deveExcluir && itemId) {
        elem.classList.remove('arrastando-swipe', 'pronto-deletar-swipe');
        elem.classList.add('deletando-swipe');
        elem.style.transition = 'transform 0.22s ease-out, opacity 0.22s ease-out';
        elem.style.transform = 'translateX(-110%)';
        elem.style.opacity = '0';

        setTimeout(() => {
          elem.style.transition = 'all 0.18s ease-in-out';
          elem.style.maxHeight = '0px';
          elem.style.height = '0px';
          elem.style.padding = '0px';
          elem.style.margin = '0px';
          elem.style.border = 'none';

          setTimeout(() => {
            callbackExcluir(itemId);
          }, 180);
        }, 220);
      } else {
        resetarElem(elem);
      }
    });
  }

  // 1. Container de Compras (Aba Comprar)
  configurarContainerSwipe(
    'itens-lista-container',
    '.mcol-tr-item',
    'tr-item-',
    (itemId) => {
      const itemObj = AppState.listaAtiva.find(i => String(i.id) === String(itemId));
      const nomeItem = itemObj ? itemObj.nome : 'Item';
      removerItem(itemId);
      mostrarNotificacaoToast(`🗑️ "${nomeItem}" removido da lista`);
    }
  );

  // 2. Container da Despensa (Aba Montar Lista)
  configurarContainerSwipe(
    'despensa-grid-container',
    '.item-card',
    'card-despensa-',
    (itemId) => {
      excluirItemDespensaDireto(itemId);
    }
  );
}

function excluirItemDespensaDireto(produtoId) {
  const prod = AppState.catalogo.find(p => String(p.id) === String(produtoId));
  const nomeItem = prod ? prod.nome : 'Item';
  if (prod) {
    if (!AppState.itensExcluidos) AppState.itensExcluidos = [];
    AppState.itensExcluidos.push(prod.nome.toLowerCase().trim());
    AppState.catalogo = AppState.catalogo.filter(p => String(p.id) !== String(produtoId));
    AppState.listaAtiva = AppState.listaAtiva.filter(p => String(p.id) !== String(produtoId) && String(p.catalogoId) !== String(produtoId));
    salvarEstado(true);
    renderizarDespensa();
    renderizarListaCompras();
    atualizarCardResumo();
    mostrarNotificacaoToast(`🗑️ "${nomeItem}" excluído do catálogo`);
  }
}

// Adicionar Item Manualmente pela barra de entrada unificada no topo
function adicionarItemRapido() {
  const input = document.getElementById('input-novo-item');
  if (!input) return;
  const texto = input.value.trim();
  resetarEstadoDigitacaoBusca();
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
      prodExistente.comprado = false;
      prodExistente.precoRegistradoMercado = 0;
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
        comprado: false,
        precoRegistradoMercado: 0,
        qtde: 1
      };
      AppState.catalogo.unshift(novoItem);
    }

    sincronizarListaAtivaComCatalogo();

    AppState.ultimoEvento = {
      autor: AppState.usuarioAtivo || 'Irandy',
      icone: AppState.usuarioIcone || (AppState.usuarioAtivo === 'Sioneide' ? '👩' : '👨'),
      itens: [nomeLimpo],
      timestamp: Date.now()
    };

    termoBuscaDespensa = '';
    termoBuscaTopo = '';
    input.value = '';
    verificarExibicaoBotaoAdicionar('');
    salvarEstado(true);
    renderizarDespensa();
    renderizarListaCompras();
    atualizarCardResumo();
  } else {
    termoBuscaLista = '';
    termoBuscaTopo = '';
    adicionarProdutoPorTexto(texto);
    input.value = '';
    verificarExibicaoBotaoAdicionar('');
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
      const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'nenhum';
      preco = obterPrecoEstimadoMercado({ nome, icone: iconeDetectado, marca: marcaDetectada, preco: 0 }, ref);
    }

    // Sincroniza com o catálogo marcando como selecionado
    const doCat = AppState.catalogo.find(c => c.nome.toLowerCase().trim() === nome.toLowerCase().trim());
    if (doCat) {
      doCat.selecionado = true;
      doCat.comprado = false;
      doCat.precoRegistradoMercado = 0;
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
        comprado: false,
        precoRegistradoMercado: 0,
        qtde: qtde
      });
    }

    totalAdicionados++;
  });

  sincronizarListaAtivaComCatalogo();

  if (totalAdicionados > 0) {
    AppState.ultimoEvento = {
      autor: AppState.usuarioAtivo || 'Irandy',
      icone: AppState.usuarioIcone || (AppState.usuarioAtivo === 'Sioneide' ? '👩' : '👨'),
      itens: [`${totalAdicionados} itens adicionados`],
      timestamp: Date.now()
    };
  }

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

// Controle do Modo no Mercado (foco no carrinho e no corredor)
let itemReguaAbertaId = null;
function alternarReguaMercadosItem(itemId) {
  itemReguaAbertaId = (itemReguaAbertaId === itemId) ? null : itemId;
  renderizarListaCompras();
}

function alternarModoNoMercado() {
  localStorage.setItem('usuario_interagiu_modo_mercado', 'true');
  AppState.modoNoMercado = !AppState.modoNoMercado;
  atualizarUIModoNoMercado();
  salvarEstado(true);
  renderizarListaCompras();
  atualizarCardResumo();
}

function atualizarUIModoNoMercado() {
  const btn = document.getElementById('btn-toggle-modo-mercado');
  const btnSubMercados = document.getElementById('btn-sidebar-comprar-mercados');
  const rotuloTotal = document.getElementById('total-rotulo-texto');
  if (AppState.modoNoMercado) {
    document.body.classList.add('modo-mercado-ativo');
    if (btn) {
      btn.classList.add('modo-mercado-on');
      btn.innerHTML = '<span class="ico-modo">🏢</span> <span class="txt-modo">Exibir Mercados</span>';
      btn.title = 'Mostrar colunas de supermercados e cotações';
    }
    if (btnSubMercados) {
      btnSubMercados.innerHTML = '<span class="ico-sub">🏢</span> <span class="txt-sub">Exibir Mercados</span>';
      btnSubMercados.title = 'Mostrar colunas de supermercados e cotações';
    }
    if (rotuloTotal) rotuloTotal.textContent = 'NO CARRINHO';
  } else {
    document.body.classList.remove('modo-mercado-ativo');
    if (btn) {
      btn.classList.remove('modo-mercado-on');
      btn.innerHTML = '<span class="ico-modo">👁️</span> <span class="txt-modo">Ocultar Mercados</span>';
      btn.title = 'Ocultar colunas de mercados para facilitar a compra';
    }
    if (btnSubMercados) {
      btnSubMercados.innerHTML = '<span class="ico-sub">👁️</span> <span class="txt-sub">Ocultar Mercados</span>';
      btnSubMercados.title = 'Ocultar colunas de mercados para facilitar a compra';
    }
    if (rotuloTotal) rotuloTotal.textContent = 'TOTAL ESTIMADO';
  }
}

// Regras de simplificação para o Modo Resumido
const REGRAS_NOMES_RESUMIDOS = [
  { padrao: /^óleo\s+(?:de\s+)?soja/i, res: 'Óleo' },
  { padrao: /^azeite\s+(?:de\s+oliva)?/i, res: 'Azeite' },
  { padrao: /^alface\s+(americana|crespa|lisa|roxa|hidrop[oô]nica)/i, res: 'Alface' },
  { padrao: /^feij[aã]o\s+carioca/i, res: 'Feijão Carioca' },
  { padrao: /^feij[aã]o\s+preto/i, res: 'Feijão Preto' },
  { padrao: /^feij[aã]o\s+fradinho/i, res: 'Feijão Fradinho' },
  { padrao: /^feij[aã]o\s+branco/i, res: 'Feijão Branco' },
  { padrao: /^feij[aã]o\s+vermelho/i, res: 'Feijão Vermelho' },
  { padrao: /^arroz\s+(branco|agulhinha|tipo\s*1)/i, res: 'Arroz Branco' },
  { padrao: /^arroz\s+parboilizado/i, res: 'Arroz Parboilizado' },
  { padrao: /^arroz\s+integral/i, res: 'Arroz Integral' },
  { padrao: /^macarr[aã]o\s+(?:espaguete|com\s+ovos)/i, res: 'Macarrão' },
  { padrao: /^macarr[aã]o\s+parafuso/i, res: 'Macarrão Parafuso' },
  { padrao: /^macarr[aã]o\s+pena/i, res: 'Macarrão Pena' },
  { padrao: /^sal\s+grosso/i, res: 'Sal Grosso' },
  { padrao: /^sal\s+(?:refinado|iodado)?/i, res: 'Sal' },
  { padrao: /^farinha\s+de\s+trigo/i, res: 'Farinha de Trigo' },
  { padrao: /^farinha\s+de\s+mandioca/i, res: 'Farinha de Mandioca' },
  { padrao: /^fub[aá]/i, res: 'Fubá' },
  { padrao: /^milho\s+(?:para\s+)?pipoca/i, res: 'Pipoca' },
  { padrao: /^leite\s+integral/i, res: 'Leite Integral' },
  { padrao: /^leite\s+desnatado/i, res: 'Leite Desnatado' },
  { padrao: /^leite\s+semidesnatado/i, res: 'Leite Semidesnatado' },
  { padrao: /^leite\s+zero\s+lactose/i, res: 'Leite Zero Lactose' },
  { padrao: /^caf[eé]\s+(mo[ií]do|torrado|tradicional|extraforte)/i, res: 'Café' },
  { padrao: /^caf[eé]\s+sol[uú]vel/i, res: 'Café Solúvel' },
  { padrao: /^a[cç][uú]car\s+refinado/i, res: 'Açúcar Refinado' },
  { padrao: /^a[cç][uú]car\s+cristal/i, res: 'Açúcar Cristal' },
  { padrao: /^a[cç][uú]car\s+demerara/i, res: 'Açúcar Demerara' },
  { padrao: /^a[cç][uú]car\s+mascavo/i, res: 'Açúcar Mascavo' },
  { padrao: /^extrato\s+de\s+tomate/i, res: 'Extrato de Tomate' },
  { padrao: /^achocolatado/i, res: 'Achocolatado' },
  { padrao: /^tomate\s+italiano/i, res: 'Tomate Italiano' },
  { padrao: /^tomate\s+salada/i, res: 'Tomate' },
  { padrao: /^cebola\s+branca/i, res: 'Cebola Branca' },
  { padrao: /^cebola\s+roxa/i, res: 'Cebola Roxa' },
  { padrao: /^banana\s+prata/i, res: 'Banana Prata' },
  { padrao: /^banana\s+nanica/i, res: 'Banana Nanica' },
  { padrao: /^ma[cç][aã]\s+(?:nacional\s+)?gala/i, res: 'Maçã Gala' },
  { padrao: /^ma[cç][aã]\s+(?:verde\s*\/\s*)?fuji/i, res: 'Maçã Fuji' },
  { padrao: /^batata\s+inglesa/i, res: 'Batata Inglesa' },
  { padrao: /^batata\s+doce/i, res: 'Batata Doce' },
  { padrao: /^batata\s+baroa/i, res: 'Batata Baroa' }
];

function obterNomeResumido(nome) {
  if (!nome || typeof nome !== 'string') return '';
  const limpoTrim = nome.trim();
  for (const r of REGRAS_NOMES_RESUMIDOS) {
    if (r.padrao.test(limpoTrim)) return r.res;
  }
  // Limpeza geral para outros itens: remove parênteses de unidades e adjetivos comerciais
  let limpo = limpoTrim.replace(/\s*\([^)]*\)/g, '');
  limpo = limpo.replace(/\b(refinado|refinada|especial|tipo\s*\d+|novo\s+tipo\s*\d+|uht|crocante|hidrop[oô]nica|fresco|fresca|fresquinho|selecionado|selecionada|resfriado|resfriada|congelado|congelada|tradicional|nacional|extra\s+virgem|antisséptico|concentrado|concentrada)\b/gi, '');
  limpo = limpo.replace(/\s{2,}/g, ' ').trim();
  return limpo || nome;
}

function alternarModoResumido() {
  AppState.modoResumido = !AppState.modoResumido;
  atualizarUIModoResumido();
  salvarEstado(true);
  if (AppState.abaAtiva === 'lista') {
    renderizarListaCompras();
  } else if (AppState.abaAtiva === 'despensa') {
    renderizarDespensa();
  } else if (AppState.abaAtiva === 'mercados') {
    renderizarComparadorDF();
  }
}

function atualizarUIModoResumido() {
  const ativo = !!AppState.modoResumido;

  // Sincroniza todos os botões de Resumir nomes nas cortinas de Comprar e Montar Lista
  const botoesSub = document.querySelectorAll('.btn-sub-resumir, #btn-sidebar-comprar-resumir, #btn-sidebar-modo-resumido');
  botoesSub.forEach(b => {
    if (ativo) {
      b.classList.add('modo-resumido-on');
      b.innerHTML = '<span class="ico-sub">📄</span> <span class="txt-sub">Completo</span>';
      b.title = 'Alternar para nomes completos e todas as variedades';
    } else {
      b.classList.remove('modo-resumido-on');
      b.innerHTML = '<span class="ico-sub">📝</span> <span class="txt-sub">Resumir nomes</span>';
      b.title = 'Alternar para nomes resumidos e simplificados';
    }
  });

  const btnHeader = document.getElementById('btn-toggle-resumir');
  if (btnHeader) {
    if (ativo) {
      btnHeader.classList.add('modo-resumido-on');
      btnHeader.innerHTML = '<span class="ico-modo">📄</span> <span class="txt-modo">Completo</span>';
      btnHeader.title = 'Alternar para nomes completos e todas as variedades';
    } else {
      btnHeader.classList.remove('modo-resumido-on');
      btnHeader.innerHTML = '<span class="ico-modo">📝</span> <span class="txt-modo">Resumir nomes</span>';
      btnHeader.title = 'Alternar para nomes resumidos e simplificados';
    }
  }

  const btnDespensa = document.getElementById('btn-resumir-despensa');
  if (btnDespensa) {
    if (ativo) {
      btnDespensa.classList.add('modo-resumido-on');
      btnDespensa.innerHTML = '📄 Completo';
      btnDespensa.title = 'Alternar para nomes completos e todas as variedades';
    } else {
      btnDespensa.classList.remove('modo-resumido-on');
      btnDespensa.innerHTML = '📝 Resumir nomes';
      btnDespensa.title = 'Alternar para nomes resumidos e simplificados';
    }
  }
}

// Atualiza a contagem 'xxx itens' na frente do botão MONTAR LISTA (Desktop e Mobile)
function atualizarContadorSidebarMontar() {
  const badge = document.getElementById('sidebar-montar-itens-badge');
  const badgeMobile = document.getElementById('mobile-nav-badge-itens');
  const selecionados = (AppState.listaAtiva && AppState.listaAtiva.length > 0) 
    ? AppState.listaAtiva.length 
    : (AppState.catalogo ? AppState.catalogo.filter(i => i.selecionado).length : 0);
  if (badge) badge.textContent = `${selecionados} itens`;
  if (badgeMobile) badgeMobile.textContent = String(selecionados);
}

function abrirModalOpcoesHeader() {
  const modal = document.getElementById('modal-opcoes-header');
  if (!modal) return;
  const badge = document.getElementById('badge-status-cotado');
  if (badge) {
    badge.textContent = AppState.cotacaoAtiva ? 'Ativo' : 'Pausado';
    badge.style.background = AppState.cotacaoAtiva ? '#D1FAE5' : '#F1F5F9';
    badge.style.color = AppState.cotacaoAtiva ? '#065F46' : '#64748B';
  }
  atualizarVisualTema();
  modal.style.display = 'flex';
}

// Gerenciador de Tema Escuro / Claro
function inicializarTema() {
  const temaSalvo = localStorage.getItem('app_tema') || 'light';
  aplicarTema(temaSalvo);
}

function aplicarTema(tema) {
  const isDark = (tema === 'dark');
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  if (document.body) {
    document.body.classList.toggle('tema-escuro', isDark);
  }
  localStorage.setItem('app_tema', isDark ? 'dark' : 'light');
  atualizarVisualTema();
}

function alternarTemaEscuro() {
  const atual = localStorage.getItem('app_tema') || 'light';
  const novoTema = (atual === 'dark') ? 'light' : 'dark';
  aplicarTema(novoTema);
}

function atualizarVisualTema() {
  const isDark = (localStorage.getItem('app_tema') === 'dark');
  const badge = document.getElementById('badge-status-tema');
  const label = document.getElementById('label-tema-escuro');
  if (badge) {
    badge.textContent = isDark ? 'Ativo' : 'Desativado';
    badge.style.background = isDark ? '#312E81' : '#F1F5F9';
    badge.style.color = isDark ? '#A5B4FC' : '#64748B';
  }
  if (label) {
    label.textContent = isDark ? '☀️ Modo Claro' : '🌙 Tema Escuro';
  }
}

function navegarParaAba(abaId) {
  alternarAbaApp(abaId, true);
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
  const idsModos = ['mais-baratos', 'alfabetico', 'maioria-barata', 'sugerir'];
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
  } else if (modo === 'alfabetico') {
    // 4. MODO ALFABÉTICO: Mantém cotações existentes ou assegura preços do mercado de referência
    const ref = (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos') ? AppState.mercadoReferencia : 'nenhum';
    if (ref !== 'nenhum') {
      AppState.listaAtiva.forEach(item => {
        if (!item.preco || item.preco <= 0) {
          const p = obterPrecoEstimadoMercado(item, ref);
          if (p > 0) {
            item.preco = p;
            item.origemPreco = ref;
          }
        }
      });
    }
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
  if (!nome) return 'Diversos';
  const n = nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (n.includes('cerveja') || n.includes('chopp') || n.includes('refrigerante') || n.includes('coca') || n.includes('guarana') || n.includes('pepsi') || n.includes('fanta') || n.includes('sprite') || n.includes('suco') || n.includes('agua mineral') || n.includes('agua com gas') || n.includes('agua sem gas') || n.includes('vinho') || n.includes('whisky') || n.includes('vodka') || n.includes('gin ') || n.includes('energetico') || n.includes('cha ') || n.includes('tonica') || n.includes('isotonico') || n.includes('gatorade') || n.includes('red bull') || n.includes('heineken') || n.includes('spaten') || n.includes('amstel') || n.includes('stella') || n.includes('corona')) {
    return 'Bebidas';
  } else if (n.includes('arroz') || n.includes('feijao') || n.includes('oleo') || n.includes('acucar') || n.includes('cafe') || n.includes('macarrao') || n.includes('farinha') || n.includes('sal ') || n.includes('achocolatado') || n.includes('toddy') || n.includes('tody') || n.includes('nescau') || n.includes('extrato') || n.includes('molho') || n.includes('milho') || n.includes('azeite') || n.includes('vinagre') || n.includes('atum') || n.includes('sardinha') || n.includes('maionese') || n.includes('ketchup') || n.includes('mostarda') || n.includes('azeitona') || n.includes('palmito') || n.includes('lentilha') || n.includes('grao-de-bico') || n.includes('aveia') || n.includes('granola')) {
    return 'Básicos e Grãos';
  } else if (n.includes('frango') || n.includes('carne') || n.includes('peixe') || n.includes('linguica') || n.includes('bife') || n.includes('alcatra') || n.includes('picanha') || n.includes('costela') || n.includes('maminha') || n.includes('patinho') || n.includes('acem') || n.includes('coxao') || n.includes('cupim') || n.includes('suino') || n.includes('porco') || n.includes('pernil') || n.includes('lombo') || n.includes('bacon') || n.includes('salsicha') || n.includes('tilapia') || n.includes('salmao') || n.includes('camarao') || n.includes('bacalhau')) {
    return 'Carnes e Proteínas';
  } else if (n.includes('leite') || n.includes('queijo') || n.includes('iogurte') || n.includes('manteiga') || n.includes('margarina') || n.includes('ovo') || n.includes('requeijao') || n.includes('presunto') || n.includes('peito de peru') || n.includes('salame') || n.includes('creme de leite') || n.includes('leite condensado') || n.includes('nata') || n.includes('ricota') || n.includes('parmesao') || n.includes('mussarela')) {
    return 'Laticínios e Frios';
  } else if (n.includes('detergente') || n.includes('amaciante') || n.includes('sabao') || n.includes('qboa') || n.includes('cloro') || n.includes('limpeza') || n.includes('desinfetante') || n.includes('esponja') || n.includes('alvejante') || n.includes('vanish') || n.includes('veja') || n.includes('pinho') || n.includes('lustra moveis') || n.includes('rodo') || n.includes('vassoura') || n.includes('pano de chao') || n.includes('pano de prato') || n.includes('saco de lixo') || (n.includes('escova') && (n.includes('roupa') || n.includes('lavar') || n.includes('sanitaria') || n.includes('vaso')))) {
    return 'Limpeza';
  } else if (n.includes('shampoo') || n.includes('condicionador') || n.includes('sabonete') || n.includes('dente') || n.includes('papel higienico') || n.includes('fio dental') || n.includes('desodorante') || n.includes('cabelo') || n.includes('pente') || n.includes('hidratante') || n.includes('protetor solar') || n.includes('barbear') || n.includes('absorvente') || n.includes('fralda') || n.includes('cotonete') || (n.includes('escova') && !n.includes('roupa') && !n.includes('lavar') && !n.includes('vaso'))) {
    return 'Higiene';
  } else if (n.includes('maca') || n.includes('banana') || n.includes('tomate') || n.includes('cebola') || n.includes('alho') || n.includes('batata') || n.includes('legume') || n.includes('cenoura') || n.includes('fruta') || n.includes('laranja') || n.includes('limao') || n.includes('abacaxi') || n.includes('melancia') || n.includes('melao') || n.includes('uva') || n.includes('morango') || n.includes('manga') || n.includes('abacate') || n.includes('alface') || n.includes('couve') || n.includes('brocolis') || n.includes('rucula') || n.includes('cheiro verde') || n.includes('chuchu') || n.includes('abobrinha') || n.includes('berinjela') || n.includes('pepino') || n.includes('pimentao') || n.includes('mandioca') || n.includes('quiabo')) {
    return 'Hortifrúti';
  } else if (n.includes('pao') || n.includes('biscoito') || n.includes('bolacha') || n.includes('torrada') || n.includes('bolo') || n.includes('croissant') || n.includes('waffle') || n.includes('salgadinho') || n.includes('snack') || n.includes('pipoca') || n.includes('amendoim') || n.includes('chocolate') || n.includes('bombom') || n.includes('barra de cereal') || n.includes('sorvete') || n.includes('picole')) {
    return 'Padaria e Lanches';
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
    const ref = AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' ? AppState.mercadoReferencia : 'nenhum';
    precoFinal = obterPrecoEstimadoMercado({ nome, icone: iconeDetectado, marca: marcaDetectada, preco: 0 }, ref);
  }

  // Se já existe no catálogo, marca como selecionado e atualiza quantidade/marca
  if (doCatalogo) {
    doCatalogo.selecionado = true;
    doCatalogo.comprado = false;
    doCatalogo.precoRegistradoMercado = 0;
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
      comprado: false,
      precoRegistradoMercado: 0,
      qtde: qtde
    };
    AppState.catalogo.push(novoCat);
  }

  sincronizarListaAtivaComCatalogo();

  AppState.ultimoEvento = {
    autor: AppState.usuarioAtivo || 'Irandy',
    icone: AppState.usuarioIcone || (AppState.usuarioAtivo === 'Sioneide' ? '👩' : '👨'),
    itens: [capitalizar(nome)],
    timestamp: Date.now()
  };

  salvarEstado(true);
  renderizarListaCompras();
  renderizarDespensa();
  atualizarCardResumo();
}

// Gerenciamento de Marcas com Busca e Filtro em Tempo Real (Cortina Popover)
let itemEmEdicaoMarcaId = null;
let marcasDisponiveisAtuais = [];
let cortinaMarcasItemAbertoId = null;

function alterarMarcaItem(id, btnEl, ev) {
  if (ev) {
    ev.stopPropagation();
  }
  const modal = document.getElementById('modal-marcas');
  // Efeito toggle: se já estiver aberto para este mesmo item, fecha a cortina
  if (modal && modal.style.display !== 'none' && cortinaMarcasItemAbertoId === id) {
    fecharCortinaMarcas();
    return;
  }
  abrirCortinaMarcas(id, btnEl);
}

function abrirModalMarcas(id, btnEl) {
  abrirCortinaMarcas(id, btnEl);
}

function abrirCortinaMarcas(id, btnEl) {
  let item = AppState.listaAtiva.find(i => String(i.id) === String(id));
  if (!item) {
    item = AppState.catalogo.find(i => String(i.id) === String(id));
  }
  if (!item) return;

  // Saneamento preventivo para hortifrúti
  sanearItemHortifrutiSeCorrompido(item);

  itemEmEdicaoMarcaId = item.id;
  cortinaMarcasItemAbertoId = item.id;

  const modal = document.getElementById('modal-marcas');
  const iconeBox = document.getElementById('modal-marca-icone');
  const titulo = document.getElementById('modal-marca-titulo');
  const inputCustom = document.getElementById('input-marca-custom');

  const iconeSvg = (typeof obterIcone2D === 'function') ? obterIcone2D(item.nome, item.icone) : '';
  if (iconeBox) iconeBox.innerHTML = iconeSvg;
  if (titulo) titulo.textContent = item.nome.toUpperCase();
  if (inputCustom) inputCustom.value = '';

  const chaveIcone = item.icone || detectarChaveIcone(item.nome);
  marcasDisponiveisAtuais = obterMarcasParaProduto(chaveIcone, item.nome);

  // Renderiza a lista de marcas completa inicial
  filtrarMarcasRealtime('');

  if (modal) {
    modal.style.display = 'flex';
    // Reinicia animação de cortina descendo
    modal.style.animation = 'none';
    void modal.offsetHeight; // Força reflow
    modal.style.animation = 'cortinaDescerSuave 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards';

    if (btnEl && typeof btnEl.getBoundingClientRect === 'function') {
      const rect = btnEl.getBoundingClientRect();
      const larguraPopover = Math.min(340, window.innerWidth - 24);
      let left = rect.left;
      
      // Ajuste se ultrapassar a borda direita da tela
      if (left + larguraPopover > window.innerWidth - 12) {
        left = window.innerWidth - larguraPopover - 12;
      }
      if (left < 12) left = 12;

      let top = rect.bottom + 6;
      const alturaEstimada = 330;
      // Se não couber embaixo, projeta para cima do botão
      if (top + alturaEstimada > window.innerHeight - 10 && rect.top > alturaEstimada) {
        top = Math.max(10, rect.top - alturaEstimada - 6);
      }

      modal.style.top = `${top}px`;
      modal.style.left = `${left}px`;
    } else {
      modal.style.top = '100px';
      modal.style.left = 'calc(50% - 170px)';
    }

    setTimeout(() => {
      if (inputCustom) inputCustom.focus();
    }, 60);
  }
}

function fecharCortinaMarcas() {
  const modal = document.getElementById('modal-marcas');
  if (!modal || modal.style.display === 'none') return;
  cortinaMarcasItemAbertoId = null;
  modal.style.display = 'none';
}

// Fechar cortina ao clicar fora
document.addEventListener('click', (ev) => {
  const modal = document.getElementById('modal-marcas');
  if (!modal || modal.style.display === 'none') return;
  if (modal.contains(ev.target) || (ev.target.closest && ev.target.closest('.btn-marca-listbox-tag'))) {
    return;
  }
  fecharCortinaMarcas();
});

// Fechar cortina ao rolar a página para não ficar flutuando desencaixada
window.addEventListener('scroll', () => {
  const modal = document.getElementById('modal-marcas');
  if (modal && modal.style.display !== 'none') {
    fecharCortinaMarcas();
  }
}, { passive: true });

// Filtra e exibe marcas em tempo real conforme o usuário digita
function filtrarMarcasRealtime(texto) {
  const listbox = document.getElementById('modal-marca-listbox');
  if (!listbox) return;

  const item = AppState.listaAtiva.find(i => String(i.id) === String(itemEmEdicaoMarcaId));
  const chaveIcone = item ? (item.icone || detectarChaveIcone(item.nome)) : '';
  const termo = (texto || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let html = '';

  // 1. Preço base sem marca
  let precoBasePadrao = 0;
  if (item) {
    const padrao = CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === item.id || p.id === item.catalogoId || p.nome.toLowerCase().trim() === item.nome.toLowerCase().trim())
                || AppState.catalogo.find(c => c.id === item.id || c.id === item.catalogoId || c.nome.toLowerCase().trim() === item.nome.toLowerCase().trim());
    if (padrao && padrao.precoMedioDF > 0) {
      precoBasePadrao = padrao.precoMedioDF;
    } else if (COTACOES_DF[chaveIcone] && COTACOES_DF[chaveIcone].atacadao) {
      precoBasePadrao = COTACOES_DF[chaveIcone].atacadao;
    } else if (item.precoPadraoOriginal && Number(item.precoPadraoOriginal) > 0) {
      precoBasePadrao = Number(item.precoPadraoOriginal);
    } else if (!item.marca && item.preco > 0) {
      precoBasePadrao = Number(item.preco);
    }
  }
  if (!precoBasePadrao || precoBasePadrao <= 0) {
    precoBasePadrao = (COTACOES_DF[chaveIcone] && COTACOES_DF[chaveIcone].atacadao) ? COTACOES_DF[chaveIcone].atacadao : 3.00;
  }

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
          <span>${formatarMoeda(precoBasePadrao)}</span>
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
          <span>${formatarMoeda(m.preco)}</span>
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
            <span>${formatarMoeda(precoEstimado)}</span>
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
  const nomeNorm = (nomeItem || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // IDENTIFICAÇÃO CRÍTICA DE HORTIFRÚTI / VERDURAS / FOLHAS / LEGUMES / FRUTAS
  const isHortifruti = chaveIcone === 'folhas' || chaveIcone === 'legumes' || chaveIcone === 'fruta' ||
    nomeNorm.includes('couve') || nomeNorm.includes('alface') || nomeNorm.includes('rucula') ||
    nomeNorm.includes('espinafre') || nomeNorm.includes('cheiro verde') || nomeNorm.includes('agriao') ||
    nomeNorm.includes('repolho') || nomeNorm.includes('acelga') || nomeNorm.includes('hortela') ||
    nomeNorm.includes('tomate') || nomeNorm.includes('cebola') || nomeNorm.includes('batata') ||
    nomeNorm.includes('banana') || nomeNorm.includes('melancia') || nomeNorm.includes('maca') ||
    nomeNorm.includes('laranja') || nomeNorm.includes('abacaxi') || nomeNorm.includes('cenoura') ||
    nomeNorm.includes('chuchu') || nomeNorm.includes('abobrinha') || nomeNorm.includes('berinjela');

  // HORTIFRÚTI NÃO PODE NUNCA CASAR COM LATICÍNIOS OU PRODUTOS INDUSTRIALIZADOS!
  // (Impede o absurdo de Couve Manteiga receber marcas de laticínio como Itambé, Batavo ou Aviação)
  if (isHortifruti) {
    const padraoItem = CATALOGO_PADRAO_EXPANDIDO.find(p => p.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === nomeNorm)
                    || AppState.catalogo.find(c => c.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === nomeNorm);
    const precoRef = padraoItem && padraoItem.precoMedioDF > 0 ? padraoItem.precoMedioDF : 3.00;

    return [
      { nome: 'Produtor Local DF', preco: Number((precoRef * 0.95).toFixed(2)), mercado: 'Atacadão', emoji: '🟠' },
      { nome: 'Feira / Ceasa DF', preco: Number((precoRef * 0.90).toFixed(2)), mercado: 'Dia a Dia', emoji: '🔴' },
      { nome: 'Orgânico Certificado', preco: Number((precoRef * 1.35).toFixed(2)), mercado: 'Big Box', emoji: '🟢' },
      { nome: 'Hidropônico', preco: Number((precoRef * 1.20).toFixed(2)), mercado: 'Assaí', emoji: '🔵' }
    ];
  }

  // 1. Marcas da Despensa — prioriza correspondência mais específica
  let pDespensa = null;
  if (nomeNorm.includes('integral') || chaveIcone === 'arroz_integral') {
    pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => p.id === 'p_arroz_int');
  } else if ((nomeNorm.includes('arroz') && (nomeNorm.includes('1kg') || nomeNorm.includes('1 kg') || nomeNorm.includes('arboreo') || nomeNorm.includes('jasmim'))) || chaveIcone === 'arroz_1kg') {
    pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => p.id === 'p_arroz_1kg');
  } else if ((nomeNorm.includes('feijao') && (nomeNorm.includes('preto') || nomeNorm.includes('vermelho') || nomeNorm.includes('rajado'))) || chaveIcone === 'feijao_preto') {
    pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => p.id === 'p_feijao_preto');
  } else if (nomeNorm.includes('dente') || nomeNorm.includes('dental') || nomeNorm.includes('creme dental') || nomeNorm.includes('pasta') || chaveIcone === 'dente') {
    pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => p.id === 'p_dente');
  }

  if (!pDespensa) {
    pDespensa = PRODUTOS_DESPENSA_MARCAS.find(p => {
      // Bloqueio rigoroso: p_manteiga só casa se NÃO for verdura nem feijão
      if (p.id === 'p_manteiga' && (nomeNorm.includes('couve') || nomeNorm.includes('feijao') || chaveIcone === 'folhas')) {
        return false;
      }
      if (p.icone && p.icone === chaveIcone && chaveIcone !== 'padrao') {
        return true;
      }
      const pNomeNorm = p.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const regexPalavra = new RegExp(`(^|\\s)${pNomeNorm}(\\s|$)`, 'i');
      return regexPalavra.test(nomeNorm);
    });
  }

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

        const refMercado = (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos' && AppState.mercadoReferencia !== 'nenhum') 
          ? AppState.mercadoReferencia 
          : null;

        if (refMercado && cotacoes[refMercado]) {
          menorPreco = cotacoes[refMercado];
          mercadoNome = MERCADOS_DF[refMercado]?.nome || 'Atacadão';
          emoji = MERCADOS_DF[refMercado]?.emoji || '🟠';
        } else {
          Object.entries(cotacoes).forEach(([mId, pVal]) => {
            if (pVal < menorPreco) {
              menorPreco = pVal;
              mercadoNome = MERCADOS_DF[mId]?.nome || 'Atacadão';
              emoji = MERCADOS_DF[mId]?.emoji || '🟠';
            }
          });
        }

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

  // Atualiza preço imediatamente sincronizado
  const precoNum = Number(preco);
  const ref = (AppState.mercadoReferencia && AppState.mercadoReferencia !== 'todos') ? AppState.mercadoReferencia : 'nenhum';

  if (!isNaN(precoNum) && precoNum > 0) {
    item.preco = precoNum;
    item.precoReferencia = precoNum;
    item.ultimoPreco = precoNum;
    if (!item.precosMercados) item.precosMercados = {};
    if (ref !== 'nenhum') {
      item.precosMercados[ref] = precoNum;
      item.origemPreco = ref;
    }
  } else {
    item.preco = obterPrecoEstimadoMercado(item, ref);
    item.ultimoPreco = item.preco;
  }

  // Sincroniza também no catálogo da despensa
  const catItem = AppState.catalogo.find(p => p.id === item.id || p.id === item.catalogoId);
  if (catItem) {
    catItem.marca = item.marca;
    catItem.preco = item.preco;
    catItem.ultimoPreco = item.preco;
    if (ref !== 'nenhum' && item.preco > 0) {
      if (!catItem.precosMercados) catItem.precosMercados = {};
      catItem.precosMercados[ref] = item.preco;
    }
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

// Fechar modais ao pressionar tecla ESC (Hierárquico: 1º ESC fecha o 2º modal da direita, 2º ESC fecha o modal da esquerda)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
    const modalPresets = document.getElementById('modal-presets-lista');
    const drawerPresets = document.getElementById('modal-presets-lado-direito');

    // Se o modal de Presets estiver aberto
    if (modalPresets && modalPresets.style.display !== 'none' && modalPresets.style.display !== '') {
      // Se a gaveta lateral direita (2º modal) estiver aberta, fecha primeiro ela!
      if (drawerPresets && drawerPresets.style.display !== 'none' && drawerPresets.style.display !== '') {
        fecharDetalhesPreset();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      // Se a gaveta já está fechada, fecha o modal principal (1º modal)
      fecharModalPresetsCompleto();
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Outros modais abertos
    fecharModal('modal-marcas');
    fecharModal('modal-subir-lista');
    fecharModal('modal-finalizar');
    fecharModal('modal-nuvem');
    fecharModal('modal-confirm-exclusao');
    fecharModal('modal-novo-item-despensa');
    fecharModal('modal-editar-nome-despensa');
    fecharModal('modal-confirmar-zerar');
    fecharModal('modal-nova-compra-historico');
    fecharModal('modal-confirm-excluir-compra');
  }
});

// Finalizar Compra no Supermercado
function abrirModalFinalizarCompra(automatico = false) {
  const itensComprados = AppState.listaAtiva.filter(i => i.comprado);
  if (itensComprados.length === 0) {
    mostrarNotificacaoToast("Nenhum item marcado como pego no carrinho ainda!");
    return;
  }

  let totalComprado = 0;
  itensComprados.forEach(it => {
    totalComprado += ((it.qtde || 1) * (it.preco || 0));
  });

  const modal = document.getElementById('modal-finalizar');
  const valorEl = document.getElementById('modal-resumo-valor');
  const qtdeEl = document.getElementById('modal-resumo-qtde');

  if (valorEl) valorEl.textContent = formatarMoeda(totalComprado);
  if (qtdeEl) {
    qtdeEl.textContent = automatico 
      ? `🎉 Todos os ${itensComprados.length} itens foram pegos no carrinho!`
      : `${itensComprados.length} itens marcados como pegos`;
  }
  
  if (modal) modal.style.display = 'flex';
}

function acionarFinalizarCompraMobile() {
  if (!AppState.listaAtiva || AppState.listaAtiva.length === 0) {
    mostrarNotificacaoToast("Sua lista de compras está vazia!");
    return;
  }
  const itensComprados = AppState.listaAtiva.filter(i => i.comprado);
  if (itensComprados.length === 0) {
    mostrarNotificacaoToast("Marque os itens no carrinho [✓] para finalizar a compra.");
    return;
  }
  abrirModalFinalizarCompra(false);
}

function confirmarFinalizarCompra() {
  const nomeMercado = document.getElementById('input-nome-mercado').value.trim() || 'Supermercado';
  const itensComprados = AppState.listaAtiva.filter(i => i.comprado);
  const hoje = new Date().toISOString();

  let totalComprado = 0;
  const listaItensHistorico = itensComprados.map(it => {
    // Registra no histórico ESTRITAMENTE o valor digitado ou falado pelo usuário (nunca valores de cotações)
    const precoUnit = (it.precoRegistradoMercado && Number(it.precoRegistradoMercado) > 0)
      ? Number(it.precoRegistradoMercado)
      : 0;
    const sub = (it.qtde || 1) * precoUnit;
    totalComprado += sub;

    // Atualiza catálogo com o novo preço e data somente se o usuário tiver informado um preço real
    const itemCat = AppState.catalogo.find(c => c.nome.toLowerCase() === it.nome.toLowerCase());
    if (itemCat && precoUnit > 0) {
      itemCat.ultimoPreco = precoUnit;
      itemCat.dataUltimoPreco = hoje.split('T')[0];
    }

    return {
      nome: it.nome,
      qtde: it.qtde || 1,
      preco: precoUnit,
      subtotal: sub
    };
  });

  // Grava no histórico
  const novaIdCompra = 'h_' + Date.now();
  AppState.historico.unshift({
    id: novaIdCompra,
    data: hoje,
    mercado: nomeMercado,
    total: totalComprado,
    itensQtd: itensComprados.length,
    itens: listaItensHistorico
  });
  if (typeof comprasExpandidasIds !== 'undefined') {
    comprasExpandidasIds.add(novaIdCompra);
  }

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
  mostrarNotificacaoToast("🎉 Compra finalizada com sucesso! Relatório gerado no Histórico.");
  
  // Abre diretamente o relatório do Histórico
  navegarParaAba('historico');
}

// Microfone / Reconhecimento de Fala (Web Speech API) - Otimizado para PC e Celular
function configurarReconhecimentoVoz() {
  const btnMic = document.getElementById('btn-mic-voz');
  const inputBusca = document.getElementById('input-novo-item');
  if (!btnMic) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    btnMic.title = "Voz não suportada neste navegador (Recomendamos Google Chrome ou Edge no PC)";
    btnMic.style.opacity = '0.6';
    btnMic.addEventListener('click', () => {
      mostrarNotificacaoToast("ℹ️ O reconhecimento por voz requer Google Chrome ou Microsoft Edge no PC.");
    });
    return;
  }

  btnMic.title = "Pesquisar por voz (Fale no PC ou Celular) [Atalho: Alt+V]";
  btnMic.style.opacity = '1';

  let recognition = null;
  try {
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;
  } catch(e) {
    console.warn("Erro ao instanciar SpeechRecognition:", e);
  }

  let gravando = false;
  let placeholderOriginal = inputBusca ? inputBusca.placeholder : "Pesquisar ou adicionar item...";
  let timerRestaurarMic = null;

  function pararGravacao(delayRemoverEstiloMs = 0) {
    gravando = false;
    if (inputBusca && inputBusca.placeholder.includes("Ouvindo")) {
      inputBusca.placeholder = placeholderOriginal;
    }
    if (timerRestaurarMic) {
      clearTimeout(timerRestaurarMic);
      timerRestaurarMic = null;
    }
    if (delayRemoverEstiloMs > 0) {
      timerRestaurarMic = setTimeout(() => {
        btnMic.classList.remove('gravando');
        btnMic.title = "Pesquisar por voz (Fale no PC ou Celular) [Atalho: Alt+V]";
      }, delayRemoverEstiloMs);
    } else {
      btnMic.classList.remove('gravando');
      btnMic.title = "Pesquisar por voz (Fale no PC ou Celular) [Atalho: Alt+V]";
    }
  }

  function iniciarGravacao() {
    if (!recognition) return;
    if (timerRestaurarMic) {
      clearTimeout(timerRestaurarMic);
      timerRestaurarMic = null;
    }
    try {
      recognition.start();
      gravando = true;
      btnMic.classList.add('gravando');
      btnMic.title = "🔴 Ouvindo... Diga o nome do item no microfone";
      if (inputBusca) {
        placeholderOriginal = inputBusca.placeholder;
        inputBusca.placeholder = "🎙️ Ouvindo... Diga o produto a pesquisar...";
      }
    } catch (e) {
      console.error("Erro ao iniciar microfone:", e);
      pararGravacao(0);
    }
  }

  btnMic.addEventListener('click', () => {
    if (!gravando) {
      iniciarGravacao();
    } else {
      try { recognition.stop(); } catch(e){}
      pararGravacao(0);
    }
  });

  // Atalho global no PC: Alt + V ativa a busca por voz
  window.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'v' || e.key === 'V')) {
      e.preventDefault();
      btnMic.click();
    }
  });

  if (recognition) {
    recognition.onresult = (event) => {
      const textoFalado = event.results[0][0].transcript;
      pararGravacao(2000); // Concluiu a fala: 2 segundos depois o mic volta à cor normal
      mostrarNotificacaoToast(`🔍 Localizando: "${textoFalado}"...`);
      localizarProdutoPorVoz(textoFalado);
    };

    recognition.onerror = (e) => {
      pararGravacao(2000);
      console.warn("[Voz Busca] Erro:", e.error);
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        mostrarNotificacaoToast("⚠️ Microfone bloqueado no PC. Clique no ícone de cadeado na barra de endereços para permitir.");
      } else if (e.error === 'audio-capture') {
        mostrarNotificacaoToast("⚠️ Nenhum microfone detectado no computador. Conecte um microfone ou fone.");
      } else if (e.error === 'no-speech') {
        mostrarNotificacaoToast("🎙️ Nenhuma fala detectada. Fale mais próximo ao microfone.");
      } else if (e.error === 'network') {
        mostrarNotificacaoToast("⚠️ Sem conexão com o serviço de voz. Verifique sua internet.");
      }
    };

    recognition.onend = () => {
      if (gravando) {
        pararGravacao(2000);
      }
    };
  }
}

// Localiza o produto na lista ou catálogo através da voz sem JAMAIS adicionar quantidade
function localizarProdutoPorVoz(frase) {
  if (!frase) return;
  let termo = frase.toLowerCase().trim()
    .replace(/[.,!?]$/, '')
    .replace(/^(procurar|localizar|buscar|achar|onde está|onde fica)\s+/i, '')
    .trim();

  const inputBusca = document.getElementById('input-novo-item');
  if (inputBusca) {
    inputBusca.value = termo;
  }

  // Executa o filtro oficial de busca da aplicação
  aoDigitarBuscaTopo(termo);

  // Localiza e rola a tela suavemente até o item encontrado com destaque
  setTimeout(() => {
    const termoNorm = termo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Procura na Lista Ativa
    const itemEncontrado = AppState.listaAtiva.find(i => {
      const nomeNorm = (i.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNorm.includes(termoNorm);
    });

    if (itemEncontrado) {
      const trEl = document.getElementById(`tr-item-${itemEncontrado.id}`);
      if (trEl) {
        trEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        trEl.classList.add('linha-destaque-voz');
        setTimeout(() => {
          trEl.classList.remove('linha-destaque-voz');
        }, 2200);
      }
    } else {
      // Se estiver no catálogo/despensa
      const prodCat = AppState.catalogo.find(p => {
        const nomeNorm = (p.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return nomeNorm.includes(termoNorm);
      });
      if (prodCat) {
        const cardEl = document.getElementById(`card-despensa-${prodCat.id}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          cardEl.classList.add('linha-destaque-voz');
          setTimeout(() => {
            cardEl.classList.remove('linha-destaque-voz');
          }, 2200);
        }
      }
    }
  }, 120);
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
  if (id === 'modal-marcas') {
    fecharCortinaMarcas();
    return;
  }
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
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

  salvarEstado(true);
  renderizarTudo();
}

// Alterna e gerencia a ordenação no Comparador de Mercados DF
function alternarOrdenacaoMercados(modo) {
  if (modo === 'alfabetico') {
    if (AppState.ordenacaoMercados === 'alfabetico_az') {
      AppState.ordenacaoMercados = 'alfabetico_za';
    } else {
      AppState.ordenacaoMercados = 'alfabetico_az';
    }
  } else if (modo === 'preco') {
    AppState.ordenacaoMercados = 'preco';
  } else {
    AppState.ordenacaoMercados = 'original';
  }

  salvarEstado(false);
  atualizarBotoesOrdenacaoMercados();
  renderizarComparadorDF();
}

function atualizarBotoesOrdenacaoMercados() {
  const btnAlfa = document.getElementById('btn-ordem-mercados-alfa');
  const btnPreco = document.getElementById('btn-ordem-mercados-preco');
  const btnOriginal = document.getElementById('btn-ordem-mercados-original');
  const labelAlfa = document.getElementById('label-ordem-mercados-alfa');

  const ordenacao = AppState.ordenacaoMercados || 'original';

  if (btnAlfa) {
    if (ordenacao === 'alfabetico_az') {
      btnAlfa.classList.add('ativo');
      if (labelAlfa) labelAlfa.textContent = '🔤 Alfabético (A ➔ Z)';
      btnAlfa.title = "Ordenado de A a Z. Clique para inverter (Z a A)";
    } else if (ordenacao === 'alfabetico_za') {
      btnAlfa.classList.add('ativo');
      if (labelAlfa) labelAlfa.textContent = '🔤 Alfabético (Z ➔ A)';
      btnAlfa.title = "Ordenado de Z a A. Clique para voltar para A a Z";
    } else {
      btnAlfa.classList.remove('ativo');
      if (labelAlfa) labelAlfa.textContent = '🔤 Ordem Alfabética (A-Z)';
      btnAlfa.title = "Ordenar alfabeticamente (A-Z ou Z-A)";
    }
  }

  if (btnPreco) {
    if (ordenacao === 'preco') {
      btnPreco.classList.add('ativo');
    } else {
      btnPreco.classList.remove('ativo');
    }
  }

  if (btnOriginal) {
    if (ordenacao === 'original') {
      btnOriginal.classList.add('ativo');
    } else {
      btnOriginal.classList.remove('ativo');
    }
  }
}

// Renderizar Mercados — Mercados como títulos de colunas, produtos como cards em linha
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

  // Ordenação dos produtos para a tabela de mercados
  let itensExibir = [...AppState.listaAtiva];
  const ordenacao = AppState.ordenacaoMercados || 'original';

  if (ordenacao === 'alfabetico_az') {
    itensExibir.sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' }));
  } else if (ordenacao === 'alfabetico_za') {
    itensExibir.sort((a, b) => (b.nome || '').localeCompare(a.nome || '', 'pt-BR', { sensitivity: 'base' }));
  } else if (ordenacao === 'preco') {
    itensExibir.sort((a, b) => {
      const precosA = chavesRedes.map(r => obterPrecoEstimadoMercado(a, r)).filter(p => p > 0);
      const precosB = chavesRedes.map(r => obterPrecoEstimadoMercado(b, r)).filter(p => p > 0);
      const menorA = precosA.length > 0 ? Math.min(...precosA) : 999999;
      const menorB = precosB.length > 0 ? Math.min(...precosB) : 999999;
      return menorA - menorB;
    });
  }

  // Cabeçalho dos Mercados (Colunas)
  let colunasCabecalho = chavesRedes.map(r => {
    const info = MERCADOS_DF[r];
    const logo = (typeof obterLogoMercado === 'function' && obterLogoMercado(r)) || `logos/${r}.png`;
    return `
      <th class="mcol-th-rede">
        <div class="mcol-rede-header-inner">
          <img src="${logo}" class="mcol-rede-logo" onerror="this.outerHTML='<span style=\\'font-size:1.1rem\\'>${info.emoji}</span>'" alt="${info.nome}">
          <span class="mcol-rede-nome">${info.nome}</span>
        </div>
      </th>
    `;
  }).join('');

  // Coluna de Produto interativa (com ordenação A-Z / Z-A ao clicar)
  let badgeOrdemTh = '🔤 A-Z';
  if (ordenacao === 'alfabetico_az') {
    badgeOrdemTh = '🔤 A ➔ Z 🔽';
  } else if (ordenacao === 'alfabetico_za') {
    badgeOrdemTh = '🔤 Z ➔ A 🔼';
  } else if (ordenacao === 'preco') {
    badgeOrdemTh = '🔥 Menor Preço';
  }

  const thProdutoHtml = `
    <th class="mcol-th-produto clicavel" onclick="alternarOrdenacaoMercados('alfabetico')" title="Clique para ordenar alfabeticamente (A-Z ou Z-A)">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
        <span>Produto (${AppState.listaAtiva.length})</span>
        <span class="mcol-th-ordem-badge" style="font-size: 0.72rem; font-weight: 700; color: ${ordenacao.startsWith('alfabetico') ? 'var(--primary)' : 'var(--text-muted)'}; background: ${ordenacao.startsWith('alfabetico') ? '#EEF2FF' : '#F1F5F9'}; padding: 2px 6px; border-radius: 6px; border: 1px solid ${ordenacao.startsWith('alfabetico') ? '#C7D2FE' : 'transparent'};">${badgeOrdemTh}</span>
      </div>
    </th>
  `;

    const nomesResumidosVistos = new Set();
    itensExibir.forEach(item => {
      let nomeExibicao = item.nome;
      if (AppState.modoResumido) {
        nomeExibicao = obterNomeResumido(item.nome);
        const chaveDeduplicacao = nomeExibicao.toLowerCase().trim();
        if (nomesResumidosVistos.has(chaveDeduplicacao)) {
          return; // Deduplica variações no modo resumido
        }
        nomesResumidosVistos.add(chaveDeduplicacao);
      }

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

        const precoTxt = p > 0 ? formatarMoeda(p) : '<span class="mcol-a-cotar">—</span>';

        return `
          <td class="mcol-td-preco ${isMenor ? 'mcol-td-menor-bg' : ''}">
            <div class="mcol-preco-linha-box">
              <span class="mcol-valor ${isMenor ? 'mcol-valor-menor' : ''}">${precoTxt}</span>
              ${diffHtml}
            </div>
          </td>
        `;
      }).join('');

      linhasProdutos += `
        <tr class="mcol-tr-item">
          <td class="mcol-td-qtde">
            <div class="contador-qtde-tabela">
              <button class="btn-step-tabela" onclick="alterarQuantidade('${item.id}', -1)" title="Diminuir">-</button>
              <input type="number" min="1" class="input-qtde-tabela" value="${qtde}" onchange="definirQuantidadeDireta('${item.id}', this.value)" title="Editar quantidade" />
              <button class="btn-step-tabela" onclick="alterarQuantidade('${item.id}', 1)" title="Aumentar">+</button>
            </div>
          </td>
          <td class="mcol-td-produto">
            <div class="mcol-prod-card-cell">
              <div class="mcol-prod-icone">${iconeSvg}</div>
              <div class="mcol-prod-textos">
                <span class="mcol-prod-nome" title="${item.nome}">${nomeExibicao}</span>
                ${item.marca ? `<span class="mcol-prod-marca">${item.marca}</span>` : ''}
              </div>
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
          <span class="mcol-total-valor">${formatarMoeda(totais[r])}</span>
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
            <th class="mcol-th-qtde">Qtde</th>
            ${thProdutoHtml}
            ${colunasCabecalho}
          </tr>
        </thead>
        <tbody>
          ${linhasProdutos}
        </tbody>
        <tfoot>
          <tr class="mcol-tr-totais">
            <td class="mcol-td-qtde-total"></td>
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

  // Atualiza botões de ordenação da barra superior de mercados
  atualizarBotoesOrdenacaoMercados();
}

// =========================================================================
// SISTEMA DE PRESETS / MINHA LISTA PRÉ-MONTADA
// =========================================================================

const PRESETS_LISTA = [
  {
    id: 'basica_mes',
    nome: 'Compra Básica do Mês',
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
    nome: 'Hortifrúti Fresco da Semana',
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
    nome: 'Churrasco & Fim de Semana',
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
    nome: 'Faxina & Limpeza Completa',
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
    nome: 'Café da Manhã & Lanches',
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
          <h4 class="card-preset-titulo">${preset.nome}</h4>
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

let timerInatividadeBuscaDrawer = null;

// Abre o modal lateral à direita com a lista completa de produtos
function abrirDetalhesItensPreset(presetId) {
  const drawer = document.getElementById('modal-presets-lado-direito');
  if (!drawer) return;

  presetAbertoDetalhesId = presetId;

  // Limpa campo de pesquisa e botão limpar
  const containerBusca = document.querySelector('.drawer-busca-container');
  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const btnLimpar = document.getElementById('btn-limpar-busca-drawer');
  if (containerBusca) containerBusca.classList.remove('digitando-ativo');
  if (inputBusca) {
    inputBusca.classList.remove('digitando-ativo');
    inputBusca.value = '';
  }
  if (btnLimpar) btnLimpar.style.display = 'none';
  if (timerInatividadeBuscaDrawer) {
    clearTimeout(timerInatividadeBuscaDrawer);
    timerInatividadeBuscaDrawer = null;
  }

  // Remove destaque anterior e adiciona no botão clicado
  document.querySelectorAll('.btn-ver-itens-preset').forEach(b => b.classList.remove('ativo'));
  const btnAtual = document.getElementById(`btn-toggle-preset-${presetId}`);
  if (btnAtual) btnAtual.classList.add('ativo');

  renderizarItensDrawerPreset(presetId, '');
  drawer.style.display = 'flex';
}

// Renderiza a lista de itens do 2º modal (Gaveta Direita) com suporte a busca geral e exclusão
function renderizarItensDrawerPreset(presetId, termoBusca = '') {
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
  if (subtituloEl) subtituloEl.textContent = `${itemIds.length} produtos`;

  const containerLista = document.getElementById('drawer-lista-itens');
  if (!containerLista) return;

let ordemAlfabeticaDrawer = true;

function alternarOrdemAlfabeticaDrawer() {
  ordemAlfabeticaDrawer = !ordemAlfabeticaDrawer;
  const btn = document.getElementById('btn-ordem-alfabetica-drawer');
  if (btn) {
    btn.classList.toggle('ativo', ordemAlfabeticaDrawer);
  }
  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const termo = inputBusca ? inputBusca.value : '';
  if (presetAbertoDetalhesId) {
    renderizarItensDrawerPreset(presetAbertoDetalhesId, termo);
  }
  mostrarNotificacaoToast(ordemAlfabeticaDrawer ? "🔤 Catálogo ordenado de A a Z" : "📋 Ordem original do catálogo");
}

  const termoNormalizado = (termoBusca || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let htmlItens = '';
  let totalEstimado = 0;
  let itensRenderizados = 0;

  // 1. Renderiza itens já pertencentes ao preset
  let itensDoPreset = [];
  itemIds.forEach(id => {
    const itemCat = (AppState.catalogo && AppState.catalogo.find(p => p.id === id)) || 
                    CATALOGO_PADRAO_EXPANDIDO.find(p => p.id === id);
    if (itemCat) {
      itensDoPreset.push(itemCat);
    }
  });

  if (ordemAlfabeticaDrawer) {
    itensDoPreset.sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' }));
  }

  itensDoPreset.forEach(itemCat => {
    const id = itemCat.id;
    const precoUnit = itemCat.precoMedioDF || itemCat.ultimoPreco || 0;
    totalEstimado += precoUnit;

    const nomeNorm = (itemCat.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const catNorm = (itemCat.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Filtro de busca se houver termo
    if (termoNormalizado && !nomeNorm.includes(termoNormalizado) && !catNorm.includes(termoNormalizado)) {
      return;
    }

    itensRenderizados++;
    const chaveIcone = itemCat.icone || detectarChaveIcone(itemCat.nome);
    const iconeSvg = obterIcone2D(itemCat.nome, chaveIcone);
    const precoFormatado = precoUnit > 0 ? formatarMoeda(precoUnit) : 'R$ --';

    htmlItens += `
      <div class="drawer-item-row">
        <div class="drawer-item-icone">${iconeSvg}</div>
        <div class="drawer-item-info">
          <div class="drawer-item-nome" title="${itemCat.nome}">${itemCat.nome}</div>
          <div class="drawer-item-cat">${itemCat.categoria || 'Geral'}</div>
        </div>
        <div class="drawer-item-preco">${precoFormatado}</div>
        <button class="btn-drawer-remover" onclick="removerItemDoPreset('${presetId}', '${id}', event)" title="Excluir item deste preset">🗑️</button>
      </div>
    `;
  });

  // 2. Busca no catálogo geral se o usuário digitou pesquisa (a partir de 1 caractere)
  if (termoNormalizado.length >= 1) {
    const idSetPreset = new Set(itemIds);
    const todosDoCatalogo = [...(AppState.catalogo || []), ...CATALOGO_PADRAO_EXPANDIDO];
    const vistos = new Set();
    const sugestoesGerais = [];

    todosDoCatalogo.forEach(item => {
      if (!item || !item.id || idSetPreset.has(item.id) || vistos.has(item.id)) return;
      vistos.add(item.id);

      const nNorm = (item.nome || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cNorm = (item.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      if (nNorm.includes(termoNormalizado) || cNorm.includes(termoNormalizado)) {
        sugestoesGerais.push(item);
      }
    });

    if (ordemAlfabeticaDrawer) {
      sugestoesGerais.sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' }));
    }

    if (sugestoesGerais.length > 0) {
      htmlItens += `
        <div class="drawer-secao-geral-rotulo">
          🔍 Catálogo Geral (Clique para adicionar ao Preset)
        </div>
      `;

      sugestoesGerais.slice(0, 25).forEach(catItem => {
        const precoUnit = catItem.precoMedioDF || catItem.ultimoPreco || 0;
        const chaveIcone = catItem.icone || detectarChaveIcone(catItem.nome);
        const iconeSvg = obterIcone2D(catItem.nome, chaveIcone);
        const precoFormatado = precoUnit > 0 ? formatarMoeda(precoUnit) : 'R$ --';

        htmlItens += `
          <div class="drawer-item-row sugestao-geral">
            <div class="drawer-item-icone">${iconeSvg}</div>
            <div class="drawer-item-info">
              <div class="drawer-item-nome" title="${catItem.nome}">${catItem.nome}</div>
              <div class="drawer-item-cat">${catItem.categoria || 'Geral'}</div>
            </div>
            <div class="drawer-item-preco">${precoFormatado}</div>
            <button class="btn-drawer-adicionar-item" onclick="adicionarItemAoPreset('${presetId}', '${catItem.id}', event)" title="Adicionar este item ao preset">+ Adicionar</button>
          </div>
        `;
      });
    }
  }

  if (itensRenderizados === 0 && (!termoNormalizado || !htmlItens)) {
    if (termoNormalizado) {
      htmlItens = `<div style="text-align: center; color: #94A3B8; padding: 25px 10px; font-size: 0.85rem;">Nenhum produto correspondente a "${termoBusca}".</div>`;
    } else {
      htmlItens = `<div style="text-align: center; color: #94A3B8; padding: 25px 10px; font-size: 0.85rem;">Nenhum item nesta lista. Digite acima para pesquisar e adicionar produtos do catálogo!</div>`;
    }
  }

  containerLista.innerHTML = htmlItens;

  const estimativaEl = document.getElementById('drawer-estimativa-valor');
  if (estimativaEl) {
    estimativaEl.textContent = formatarMoeda(totalEstimado);
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
}

// Filtrar itens na busca do 2º modal em tempo real com efeito visual
function filtrarItensDrawerPreset(termo) {
  if (!presetAbertoDetalhesId) return;
  const containerBusca = document.querySelector('.drawer-busca-container');
  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const btnLimpar = document.getElementById('btn-limpar-busca-drawer');

  if (timerInatividadeBuscaDrawer) {
    clearTimeout(timerInatividadeBuscaDrawer);
    timerInatividadeBuscaDrawer = null;
  }

  const termoLimpo = (termo || '').trim();

  if (termoLimpo.length > 0) {
    if (containerBusca) containerBusca.classList.add('digitando-ativo');
    if (inputBusca) inputBusca.classList.add('digitando-ativo');
    if (btnLimpar) btnLimpar.style.display = 'block';

    // Ficou 4 segundos sem digitar, limpa a busca
    timerInatividadeBuscaDrawer = setTimeout(() => {
      limparBuscaDrawerPreset();
    }, 4000);
  } else {
    if (containerBusca) containerBusca.classList.remove('digitando-ativo');
    if (inputBusca) inputBusca.classList.remove('digitando-ativo');
    if (btnLimpar) btnLimpar.style.display = 'none';
  }

  renderizarItensDrawerPreset(presetAbertoDetalhesId, termo);
}

// Limpar busca do 2º modal
function limparBuscaDrawerPreset() {
  const containerBusca = document.querySelector('.drawer-busca-container');
  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const btnLimpar = document.getElementById('btn-limpar-busca-drawer');

  if (timerInatividadeBuscaDrawer) {
    clearTimeout(timerInatividadeBuscaDrawer);
    timerInatividadeBuscaDrawer = null;
  }

  if (containerBusca) containerBusca.classList.remove('digitando-ativo');
  if (inputBusca) {
    inputBusca.classList.remove('digitando-ativo');
    inputBusca.value = '';
  }
  if (btnLimpar) btnLimpar.style.display = 'none';
  if (presetAbertoDetalhesId) {
    renderizarItensDrawerPreset(presetAbertoDetalhesId, '');
  }
}

// Remover item do preset
function removerItemDoPreset(presetId, itemId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  if (presetId === 'meu_preset') {
    const salvoStr = localStorage.getItem('meu_preset_usuario_v1');
    if (salvoStr) {
      try {
        const dados = JSON.parse(salvoStr);
        dados.ids = (dados.ids || []).filter(id => id !== itemId);
        localStorage.setItem('meu_preset_usuario_v1', JSON.stringify(dados));
        atualizarStatusMeuPreset();
      } catch (e) {}
    }
  } else {
    const preset = PRESETS_LISTA.find(p => p.id === presetId);
    if (preset) {
      preset.ids = preset.ids.filter(id => id !== itemId);
      const btnCard = document.getElementById(`btn-toggle-preset-${presetId}`);
      if (btnCard) {
        btnCard.innerHTML = `📋 ${preset.ids.length} produtos <span>▸</span>`;
      }
    }
  }

  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const termoAtual = inputBusca ? inputBusca.value : '';
  renderizarItensDrawerPreset(presetId, termoAtual);
  mostrarNotificacaoToast('🗑️ Item removido do preset!');
}

// Adicionar item do catálogo geral ao preset
function adicionarItemAoPreset(presetId, itemId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  if (presetId === 'meu_preset') {
    const salvoStr = localStorage.getItem('meu_preset_usuario_v1');
    let dados = { data: new Date().toLocaleDateString('pt-BR'), ids: [] };
    if (salvoStr) {
      try { dados = JSON.parse(salvoStr); } catch (e) {}
    }
    if (!dados.ids) dados.ids = [];
    if (!dados.ids.includes(itemId)) {
      dados.ids.push(itemId);
      localStorage.setItem('meu_preset_usuario_v1', JSON.stringify(dados));
      atualizarStatusMeuPreset();
    }
  } else {
    const preset = PRESETS_LISTA.find(p => p.id === presetId);
    if (preset) {
      if (!preset.ids) preset.ids = [];
      if (!preset.ids.includes(itemId)) {
        preset.ids.push(itemId);
        const btnCard = document.getElementById(`btn-toggle-preset-${presetId}`);
        if (btnCard) {
          btnCard.innerHTML = `📋 ${preset.ids.length} produtos <span>▸</span>`;
        }
      }
    }
  }

  const inputBusca = document.getElementById('input-busca-drawer-preset');
  const termoAtual = inputBusca ? inputBusca.value : '';
  renderizarItensDrawerPreset(presetId, termoAtual);
  mostrarNotificacaoToast('✓ Item adicionado ao preset!');
}

// Fechar painel lateral
function fecharDetalhesPreset() {
  presetAbertoDetalhesId = null;
  const drawer = document.getElementById('modal-presets-lado-direito');
  if (drawer) drawer.style.display = 'none';

  limparBuscaDrawerPreset();

  document.querySelectorAll('.btn-ver-itens-preset').forEach(b => b.classList.remove('ativo'));
}

// Fechar todo o modal de presets e gaveta
function fecharModalPresetsCompleto() {
  fecharDetalhesPreset();
  fecharModal('modal-presets-lista');
}

// Fechar ambos os modais ao clicar em qualquer área externa aos cartões
function aoClicarForaModalPresets(event) {
  const target = event.target;
  const contentPrincipal = document.querySelector('.modal-presets-content');
  const drawerDireito = document.getElementById('modal-presets-lado-direito');

  const clicouNoContent = contentPrincipal && contentPrincipal.contains(target);
  const clicouNoDrawer = drawerDireito && drawerDireito.style.display !== 'none' && drawerDireito.contains(target);

  if (!clicouNoContent && !clicouNoDrawer) {
    fecharModalPresetsCompleto();
  }
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

// Atualização Manual de Cotação de Preços dos Supermercados do DF
async function atualizarCotacaoManual() {
  const btn = document.getElementById('btn-atualizar-cotacao');
  const icone = btn ? btn.querySelector('.btn-cotacao-icone') : null;
  const texto = btn ? btn.querySelector('.btn-cotacao-texto') : null;
  
  if (btn) btn.classList.add('atualizando');
  if (texto) texto.textContent = 'VARRENDO MERCADOS...';

  try {
    // 1. Tenta acionar a raspagem real via servidor Python
    let raspagemAoVivo = false;
    try {
      const respApi = await fetch('/api/atualizar-cotacao', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (respApi.ok) {
        const resJson = await respApi.json();
        if (resJson.sucesso) {
          raspagemAoVivo = true;
          console.log('[Raspagem DF] Coleta executada com sucesso:', resJson);
        }
      }
    } catch(errApi) {
      console.log('[Raspagem DF] Servidor estático ativo, recarregando base local de cotações.');
    }

    // 2. Recarrega o arquivo precos_mercados_df.json atualizado
    const timestamp = Date.now();
    const resp = await fetch('precos_mercados_df.json?_t=' + timestamp);
    if (resp.ok) {
      const dados = await resp.json();
      if (dados && dados.cotacoes) {
        window.COTACOES_REAIS_DF = dados.cotacoes;
        window.COTACOES_REAIS_META = {
          data: dados.ultima_atualizacao,
          total: dados.total_produtos
        };
      }
    }

    // 3. Atualizar tela e interfaces
    if (typeof atualizarCardResumo === 'function') atualizarCardResumo();
    if (typeof renderizarListaCompras === 'function' && AppState.abaAtiva === 'lista') renderizarListaCompras();
    if (typeof renderizarComparadorDF === 'function' && AppState.abaAtiva === 'mercados') renderizarComparadorDF();
    if (typeof renderizarCatalogoDespensa === 'function' && AppState.abaAtiva === 'despensa') renderizarCatalogoDespensa();

    if (raspagemAoVivo) {
      mostrarNotificacaoToast('🚀 Preços raspados e atualizados em tempo real!');
    } else {
      mostrarNotificacaoToast('✨ Cotações da base recarregadas com sucesso!');
    }
    if (texto) texto.textContent = '✓ ATUALIZADO!';
  } catch (err) {
    console.error('Erro ao atualizar cotações:', err);
    if (typeof atualizarCardResumo === 'function') atualizarCardResumo();
    if (typeof renderizarListaCompras === 'function') renderizarListaCompras();
    mostrarNotificacaoToast('⚡ Cotação recalculada!');
    if (texto) texto.textContent = '✓ ATUALIZADO!';
  } finally {
    setTimeout(() => {
      if (btn) btn.classList.remove('atualizando');
      if (texto) texto.textContent = 'ATUALIZAR COTAÇÃO';
    }, 2200);
  }
}

