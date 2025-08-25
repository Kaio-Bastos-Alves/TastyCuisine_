export interface Recipe {
  id: number
  title: string
  category: string
  time: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  likes: number
}

export const MOCK_RECIPES: Recipe[] = [
  { id: 1, title: 'Bolo de Chocolate Fit', category: 'Sobremesas Saudáveis', time: '30 min', difficulty: 'Fácil', likes: 150 },
  { id: 2, title: 'Overnight Oats com Chia', category: 'Café da Manhã', time: '5 min', difficulty: 'Fácil', likes: 98 },
  { id: 3, title: 'Wrap Low Carb de Frango', category: 'Low Carb', time: '20 min', difficulty: 'Médio', likes: 120 },
  { id: 4, title: 'Salada Detox de Quinoa', category: 'Detox', time: '25 min', difficulty: 'Fácil', likes: 76 },
  { id: 5, title: 'Snacks de Grão-de-Bico Crocante', category: 'Snacks', time: '35 min', difficulty: 'Fácil', likes: 64 },
  { id: 6, title: 'Strogonoff Vegano de Cogumelos', category: 'Veganas', time: '40 min', difficulty: 'Médio', likes: 87 },
  { id: 7, title: 'Marmita Fit de Frango com Batata Doce', category: 'Marmitas Fit', time: '50 min', difficulty: 'Médio', likes: 110 },
  { id: 8, title: 'Mousse de Cacau e Abacate', category: 'Sobremesas Saudáveis', time: '10 min', difficulty: 'Fácil', likes: 140 },
  { id: 9, title: 'Panqueca de Banana e Aveia', category: 'Café da Manhã', time: '15 min', difficulty: 'Fácil', likes: 185 },
  { id: 10, title: 'Smoothie Bowl de Açaí', category: 'Café da Manhã', time: '10 min', difficulty: 'Fácil', likes: 167 },
  { id: 11, title: 'Salada de Lentilha com Rúcula', category: 'Veganas', time: '30 min', difficulty: 'Fácil', likes: 92 },
  { id: 12, title: 'Chips de Abobrinha no Forno', category: 'Snacks', time: '25 min', difficulty: 'Fácil', likes: 78 },
  { id: 13, title: 'Lasanha de Abobrinha Low Carb', category: 'Low Carb', time: '45 min', difficulty: 'Médio', likes: 134 },
  { id: 14, title: 'Suco Verde Detox', category: 'Detox', time: '5 min', difficulty: 'Fácil', likes: 89 },
  { id: 15, title: 'Marmita de Salmão com Legumes', category: 'Marmitas Fit', time: '35 min', difficulty: 'Médio', likes: 156 },
  { id: 16, title: 'Brownie de Batata Doce', category: 'Sobremesas Saudáveis', time: '40 min', difficulty: 'Médio', likes: 198 },
  { id: 17, title: 'Tapioca Recheada Fit', category: 'Café da Manhã', time: '12 min', difficulty: 'Fácil', likes: 143 },
  { id: 18, title: 'Curry de Grão-de-Bico', category: 'Veganas', time: '35 min', difficulty: 'Médio', likes: 105 },
  { id: 19, title: 'Bolinha de Coco Proteica', category: 'Snacks', time: '20 min', difficulty: 'Fácil', likes: 112 },
  { id: 20, title: 'Omelete de Claras com Espinafre', category: 'Low Carb', time: '8 min', difficulty: 'Fácil', likes: 127 },
  { id: 21, title: 'Água Saborizada Detox', category: 'Detox', time: '2 min', difficulty: 'Fácil', likes: 67 },
  { id: 22, title: 'Marmita de Peru com Quinoa', category: 'Marmitas Fit', time: '40 min', difficulty: 'Médio', likes: 138 },
  { id: 23, title: 'Pudim de Chia com Manga', category: 'Sobremesas Saudáveis', time: '15 min', difficulty: 'Fácil', likes: 174 },
  { id: 24, title: 'Vitamina Verde Energética', category: 'Café da Manhã', time: '7 min', difficulty: 'Fácil', likes: 91 },
  { id: 25, title: 'Hambúrguer de Lentilha', category: 'Veganas', time: '30 min', difficulty: 'Médio', likes: 119 },
  { id: 26, title: 'Mix de Castanhas Temperadas', category: 'Snacks', time: '15 min', difficulty: 'Fácil', likes: 83 },
  { id: 27, title: 'Frango Grelhado com Abobrinha', category: 'Low Carb', time: '25 min', difficulty: 'Fácil', likes: 145 },
  { id: 28, title: 'Chá Verde com Gengibre', category: 'Detox', time: '10 min', difficulty: 'Fácil', likes: 72 },
  { id: 29, title: 'Marmita de Tilápia com Brócolis', category: 'Marmitas Fit', time: '30 min', difficulty: 'Fácil', likes: 162 },
  { id: 30, title: 'Sorvete de Banana Fit', category: 'Sobremesas Saudáveis', time: '5 min', difficulty: 'Fácil', likes: 189 },
]
