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
]
