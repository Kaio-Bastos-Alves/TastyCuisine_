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
  
  { id: 3, title: 'Wrap Low Carb de Frango', category: 'Low Carb', time: '20 min', difficulty: 'Médio', likes: 120, image: 'https://images.unsplash.com/photo-1756137949175-66c0cec5d662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 4, title: 'Salada Detox de Quinoa', category: 'Detox', time: '25 min', difficulty: 'Fácil', likes: 76, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop' },
  
  { id: 5, title: 'Snacks de Grão-de-Bico Crocante', category: 'Snacks', time: '35 min', difficulty: 'Fácil', likes: 64, image: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 7, title: 'Marmita Fit de Frango com Batata Doce', category: 'Marmitas Fit', time: '50 min', difficulty: 'Médio', likes: 110, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop' },

  { id: 8, title: 'Mousse de Cacau e Abacate', category: 'Sobremesas Saudáveis', time: '10 min', difficulty: 'Fácil', likes: 140, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZxX1Fd3UqH7BvSOLrPNAhkhj03O3B69zaw&s' },

  { id: 9, title: 'Panqueca de Banana e Aveia', category: 'Café da Manhã', time: '15 min', difficulty: 'Fácil', likes: 185, image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=400&auto=format&fit=crop' },
  
  { id: 10, title: 'Smoothie Bowl de Açaí', category: 'Café da Manhã', time: '10 min', difficulty: 'Fácil', likes: 167, image: 'https://www.joyousapron.com/wp-content/uploads/2020/05/acai-smoothie-bowl-sq-1.jpg' },

  { id: 11, title: 'Salada de Lentilha com Rúcula', category: 'Veganas', time: '30 min', difficulty: 'Fácil', likes: 92, image: 'https://i0.wp.com/chucrutecomsalsicha.com/wp-content/uploads/2017/08/greenlentil-salad.jpg?resize=350%2C200' },

  { id: 12, title: 'Chips de Abobrinha no Forno', category: 'Snacks', time: '25 min', difficulty: 'Fácil', likes: 78, image: 'https://img.cybercook.com.br/receitas/5/chips-de-abobrinha-na-airfryer.jpeg' },

  { id: 13, title: 'Lasanha de Abobrinha Low Carb', category: 'Low Carb', time: '45 min', difficulty: 'Médio', likes: 134, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=400&auto=format&fit=crop' },

  { id: 14, title: 'Suco Verde Detox', category: 'Detox', time: '5 min', difficulty: 'Fácil', likes: 89, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=400&auto=format&fit=crop' },

  { id: 15, title: 'Marmita de Salmão com Legumes', category: 'Marmitas Fit', time: '35 min', difficulty: 'Médio', likes: 156, image: 'https://content.paodeacucar.com/wp-content/uploads/2020/01/SALM%C3%83O.jpg' },

  { id: 16, title: 'Brownie de Batata Doce', category: 'Sobremesas Saudáveis', time: '40 min', difficulty: 'Médio', likes: 198, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop' },

  { id: 17, title: 'Tapioca Recheada Fit', category: 'Café da Manhã', time: '12 min', difficulty: 'Fácil', likes: 143, image: 'https://sabores-new.s3.amazonaws.com/public/2024/11/tapioca-de-frango.jpg' },

  { id: 18, title: 'Curry de Grão-de-Bico', category: 'Veganas', time: '35 min', difficulty: 'Médio', likes: 105, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=400&auto=format&fit=crop' },

  { id: 19, title: 'Bolinha de Coco Proteica', category: 'Snacks', time: '20 min', difficulty: 'Fácil', likes: 112, image: 'https://www.casalmisterio.com/wp-content/uploads/2022/10/21135162_UdhlH.jpg' },

  { id: 20, title: 'Omelete de Claras com Espinafre', category: 'Low Carb', time: '8 min', difficulty: 'Fácil', likes: 127, image: 'https://static.wixstatic.com/media/540f1d_0a656b12aaa145b0ab1472e6a3e8e345~mv2.jpg/v1/fill/w_568,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/540f1d_0a656b12aaa145b0ab1472e6a3e8e345~mv2.jpg' },

  { id: 21, title: 'Água Saborizada Detox', category: 'Detox', time: '2 min', difficulty: 'Fácil', likes: 67, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=400&auto=format&fit=crop' },

  { id: 22, title: 'Marmita de Peru com Quinoa', category: 'Marmitas Fit', time: '40 min', difficulty: 'Médio', likes: 138, image: 'https://www.nit.pt/wp-content/uploads/2018/05/c4ca4238a0b923820dcc509a6f75849b-26-754x394.jpg' },

  { id: 23, title: 'Pudim de Chia com Manga', category: 'Sobremesas Saudáveis', time: '15 min', difficulty: 'Fácil', likes: 174, image: 'https://i.pinimg.com/736x/f6/99/f4/f699f4aa83f5e3d9293ca001fcb57e34.jpg' },

  { id: 24, title: 'Vitamina Verde Energética', category: 'Café da Manhã', time: '7 min', difficulty: 'Fácil', likes: 91, image: 'https://webrun.com.br/wp-content/uploads/vitamina.jpg' },

  { id: 25, title: 'Hambúrguer de Lentilha', category: 'Veganas', time: '30 min', difficulty: 'Médio', likes: 119, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop' },

  { id: 26, title: 'Mix de Castanhas Temperadas', category: 'Snacks', time: '15 min', difficulty: 'Fácil', likes: 83, image: 'https://bing.com/th?id=OSK.b944b0401ce1fce73c7108f74232b36b' },

  { id: 27, title: 'Frango Grelhado com Abobrinha', category: 'Low Carb', time: '25 min', difficulty: 'Fácil', likes: 145, image: 'https://assets.betalabs.net/production/bombox/item-images/bf3f9d699bd80df1e969d1a8ecce3cb5.jpg' },

  { id: 28, title: 'Chá Verde com Gengibre', category: 'Detox', time: '10 min', difficulty: 'Fácil', likes: 72, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop' },

  { id: 29, title: 'Marmita de Tilápia com Brócolis', category: 'Marmitas Fit', time: '30 min', difficulty: 'Fácil', likes: 162, image: 'https://vipfood.com.br/wp-content/uploads/2019/11/tilapia-e-arroz-com-brocolis-aerea.jpg' },

  { id: 30, title: 'Sorvete de Banana Fit', category: 'Sobremesas Saudáveis', time: '5 min', difficulty: 'Fácil', likes: 189, image: 'https://blog.bodytech.com.br/wp-content/uploads/2024/08/BSN_SorveteBanana.jpg' },
]
