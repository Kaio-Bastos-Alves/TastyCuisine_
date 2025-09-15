// Imagens profissionais do Unsplash para receitas saudáveis

export interface Recipe {
  id: number
  title: string
  category: string
  time: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  likes: number
  image: string
}

export const MOCK_RECIPES: Recipe[] = [
  { id: 1, title: 'Bolo de Chocolate Fit', category: 'Sobremesas Saudáveis', time: '30 min', difficulty: 'Fácil', likes: 150, image: 'https://images.unsplash.com/photo-1709195902163-7eee13e78970?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, title: 'Overnight Oats com Chia', category: 'Café da Manhã', time: '5 min', difficulty: 'Fácil', likes: 98, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop' },
  { id: 3, title: 'Wrap Low Carb de Frango', category: 'Low Carb', time: '20 min', difficulty: 'Médio', likes: 120, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400&auto=format&fit=crop' },
  { id: 4, title: 'Salada Detox de Quinoa', category: 'Detox', time: '25 min', difficulty: 'Fácil', likes: 76, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
  { id: 5, title: 'Snacks de Grão-de-Bico Crocante', category: 'Snacks', time: '35 min', difficulty: 'Fácil', likes: 64, image: 'https://images.unsplash.com/photo-1599909533730-8b9b1b5b8e8a?q=80&w=400&auto=format&fit=crop' },
  { id: 6, title: 'Strogonoff Vegano de Cogumelos', category: 'Veganas', time: '40 min', difficulty: 'Médio', likes: 87, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop' },
  { id: 7, title: 'Marmita Fit de Frango com Batata Doce', category: 'Marmitas Fit', time: '50 min', difficulty: 'Médio', likes: 110, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop' },
  { id: 8, title: 'Mousse de Cacau e Abacate', category: 'Sobremesas Saudáveis', time: '10 min', difficulty: 'Fácil', likes: 140, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400&auto=format&fit=crop' },
  { id: 9, title: 'Panqueca de Banana e Aveia', category: 'Café da Manhã', time: '15 min', difficulty: 'Fácil', likes: 185, image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=400&auto=format&fit=crop' },
  { id: 10, title: 'Smoothie Bowl de Açaí', category: 'Café da Manhã', time: '10 min', difficulty: 'Fácil', likes: 167, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=400&auto=format&fit=crop' },
  { id: 11, title: 'Salada de Lentilha com Rúcula', category: 'Veganas', time: '30 min', difficulty: 'Fácil', likes: 92, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop' },
  { id: 12, title: 'Chips de Abobrinha no Forno', category: 'Snacks', time: '25 min', difficulty: 'Fácil', likes: 78, image: 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?q=80&w=400&auto=format&fit=crop' },
  { id: 13, title: 'Lasanha de Abobrinha Low Carb', category: 'Low Carb', time: '45 min', difficulty: 'Médio', likes: 134, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=400&auto=format&fit=crop' },
  { id: 14, title: 'Suco Verde Detox', category: 'Detox', time: '5 min', difficulty: 'Fácil', likes: 89, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=400&auto=format&fit=crop' },
  { id: 15, title: 'Marmita de Salmão com Legumes', category: 'Marmitas Fit', time: '35 min', difficulty: 'Médio', likes: 156, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400&auto=format&fit=crop' },
  { id: 16, title: 'Brownie de Batata Doce', category: 'Sobremesas Saudáveis', time: '40 min', difficulty: 'Médio', likes: 198, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop' },
  { id: 17, title: 'Tapioca Recheada Fit', category: 'Café da Manhã', time: '12 min', difficulty: 'Fácil', likes: 143, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop' },
  { id: 18, title: 'Curry de Grão-de-Bico', category: 'Veganas', time: '35 min', difficulty: 'Médio', likes: 105, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=400&auto=format&fit=crop' },
  { id: 19, title: 'Bolinha de Coco Proteica', category: 'Snacks', time: '20 min', difficulty: 'Fácil', likes: 112, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop' },
  { id: 20, title: 'Omelete de Claras com Espinafre', category: 'Low Carb', time: '8 min', difficulty: 'Fácil', likes: 127, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop' },
  { id: 21, title: 'Água Saborizada Detox', category: 'Detox', time: '2 min', difficulty: 'Fácil', likes: 67, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },
  { id: 22, title: 'Marmita de Peru com Quinoa', category: 'Marmitas Fit', time: '40 min', difficulty: 'Médio', likes: 138, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop' },
  { id: 23, title: 'Pudim de Chia com Manga', category: 'Sobremesas Saudáveis', time: '15 min', difficulty: 'Fácil', likes: 174, image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?q=80&w=400&auto=format&fit=crop' },
  { id: 24, title: 'Vitamina Verde Energética', category: 'Café da Manhã', time: '7 min', difficulty: 'Fácil', likes: 91, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop' },
  { id: 25, title: 'Hambúrguer de Lentilha', category: 'Veganas', time: '30 min', difficulty: 'Médio', likes: 119, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },
  { id: 26, title: 'Mix de Castanhas Temperadas', category: 'Snacks', time: '15 min', difficulty: 'Fácil', likes: 83, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=400&auto=format&fit=crop' },
  { id: 27, title: 'Frango Grelhado com Abobrinha', category: 'Low Carb', time: '25 min', difficulty: 'Fácil', likes: 145, image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=400&auto=format&fit=crop' },
  { id: 28, title: 'Chá Verde com Gengibre', category: 'Detox', time: '10 min', difficulty: 'Fácil', likes: 72, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },
  { id: 29, title: 'Marmita de Tilápia com Brócolis', category: 'Marmitas Fit', time: '30 min', difficulty: 'Fácil', likes: 162, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop' },
  { id: 30, title: 'Sorvete de Banana Fit', category: 'Sobremesas Saudáveis', time: '5 min', difficulty: 'Fácil', likes: 189, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400&auto=format&fit=crop' },
]
