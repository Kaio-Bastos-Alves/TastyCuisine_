// Função para simular modo claro/escuro (temporário)
document.querySelector('.toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Rolagem horizontal em carrosséis
const carrosseis = document.querySelectorAll('.carousel, .scroll-h');
carrosseis.forEach(c => {
  c.addEventListener('wheel', e => {
    e.preventDefault();
    c.scrollLeft += e.deltaY;
  });
});

// Mapeamento de nomes de receitas para IDs
const receitaIds = {
  'Bolo de Chocolate Fit': 'bolo-chocolate-fit',
  'Brownie Fit Zero Açúcar': 'brownie-fit',
  'Smoothie Bowl Tropical': 'smoothie-bowl',
  'Panquecas de Aveia': 'panquecas-aveia',
  'Suco Verde Detox': 'suco-verde',
  'Omelete Fit': 'omelete-fit',
  'Salmão Assado com Legumes': 'salmao-assado',
  'Lasanha de Abobrinha Vegana': 'lasanha-vegana',
  'Sopa de Lentilha Nutritiva': 'sopa-lentilha',
  'Smoothie Verde Energético': 'smoothie-verde',
  'Cookies Integrais': 'cookies-integrais',
  'Frango com Batata Doce': 'frango-batata-doce',
  'Salada de Frango Grelhado': 'salada-frango',
  // Sobremesas Saudáveis
  'Mousse de Chocolate Fit': 'mousse-chocolate-fit',
  'Sorvete de Banana Fit': 'sorvete-banana-fit',
  'Pudim de Chia Zero Açúcar': 'pudim-chia-zero',
  'Trufas de Tâmara': 'trufas-tamara',
  'Picolé de Frutas Natural': 'picole-frutas',
  'Brigadeiro Fit de Cacau': 'brigadeiro-fit',
  'Cheesecake Fit de Frutas Vermelhas': 'cheesecake-fit',
  'Torta de Maçã Integral': 'torta-maca',
  // Café da Manhã
  'Vitamina Proteica': 'vitamina-proteica',
  'Overnight Oats': 'overnight-oats',
  'Tapioca Fit': 'tapioca-fit',
  'Açaí Bowl Energético': 'acai-bowl',
  'Pão de Banana Fit': 'pao-banana-fit',
  'Granola Caseira': 'granola-caseira',
  'Wrap Integral Matinal': 'wrap-matinal',
  // Marmitas Fit
  'Peito de Peru com Quinoa': 'peru-quinoa',
  'Tilápia com Arroz Integral': 'tilapia-arroz',
  'Carne Magra com Legumes': 'carne-legumes',
  'Atum com Grão de Bico': 'atum-grao-bico',
  'Hambúrguer de Lentilha': 'hamburguer-lentilha',
  'Peito de Frango Temperado': 'frango-temperado',
  'Omelete de Forno com Vegetais': 'omelete-forno',
  'Escondidinho de Batata Doce': 'escondidinho-batata',
  // Veganas
  'Curry de Grão de Bico': 'curry-grao-bico',
  'Salada de Quinoa Colorida': 'salada-quinoa',
  'Hambúrguer de Feijão Preto': 'hamburguer-feijao',
  'Risotto de Cogumelos': 'risotto-cogumelos',
  'Macarrão de Abobrinha': 'macarrao-abobrinha',
  'Tofu Refogado com Legumes': 'tofu-refogado',
  'Falafel Assado': 'falafel-assado',
  'Cuscuz Marroquino': 'cuscuz-marroquino',
  'Estrogonofe de Cogumelos': 'estrogonofe-cogumelos',
  // Snacks
  'Mix de Castanhas Temperadas': 'mix-castanhas',
  'Chips de Batata Doce': 'chips-batata-doce',
  'Hummus de Grão de Bico': 'hummus-grao-bico',
  'Barrinhas de Cereais': 'barrinhas-cereais',
  'Guacamole Caseiro': 'guacamole-caseiro',
  'Bolinhas de Coco': 'bolinhas-coco',
  'Pasta de Ricota com Ervas': 'pasta-ricota',
  'Energy Balls': 'energy-balls',
  'Crackers Integrais': 'crackers-integrais',
  // Detox
  'Água Saborizada Detox': 'agua-detox',
  'Suco de Beterraba com Gengibre': 'suco-beterraba',
  'Chá Verde Gelado': 'cha-verde-gelado',
  'Limonada de Cúrcuma': 'limonada-curcuma',
  'Smoothie de Abacaxi': 'smoothie-abacaxi',
  'Suco de Melancia': 'suco-melancia',
  'Água de Berinjela': 'agua-berinjela',
  'Suco de Pepino com Hortelã': 'suco-pepino',
  'Kombucha Caseiro': 'kombucha-caseiro',
  // Low Carb
  'Couve-flor Gratinada': 'couve-flor-gratinada',
  'Omelete de Cogumelos': 'omelete-cogumelos',
  'Berinjela Recheada': 'berinjela-recheada',
  'Salada de Atum': 'salada-atum',
  'Abobrinha Refogada': 'abobrinha-refogada',
  'Espaguete de Abobrinha': 'espaguete-abobrinha',
  'Quiche de Brócolis': 'quiche-brocolis',
  'Wrap de Alface': 'wrap-alface',
  'Pimentão Recheado': 'pimentao-recheado'
};

// Mapeamento de ingredientes para receitas
const ingredientesReceitas = {
  'aveia': ['Panquecas de Aveia', 'Cookies Integrais', 'Overnight Oats', 'Granola Caseira'],
  'chia': ['Smoothie Bowl Tropical', 'Smoothie Verde Energético', 'Pudim de Chia Zero Açúcar'],
  'banana': ['Smoothie Bowl Tropical', 'Panquecas de Aveia', 'Sorvete de Banana Fit', 'Pão de Banana Fit'],
  'castanhas': ['Brownie Fit Zero Açúcar', 'Cookies Integrais', 'Mix de Castanhas Temperadas', 'Energy Balls'],
  'cacau': ['Bolo de Chocolate Fit', 'Brownie Fit Zero Açúcar', 'Mousse de Chocolate Fit', 'Brigadeiro Fit de Cacau'],
  'linhaça': ['Smoothie Verde Energético', 'Panquecas de Aveia', 'Granola Caseira'],
  'maçã': ['Smoothie Bowl Tropical', 'Suco Verde Detox', 'Torta de Maçã Integral'],
  'cenoura': ['Bolo de Chocolate Fit', 'Sopa de Lentilha Nutritiva', 'Carne Magra com Legumes'],
  'abacate': ['Smoothie Verde Energético', 'Salada de Frango Grelhado', 'Guacamole Caseiro'],
  'brócolis': ['Salmão Assado com Legumes', 'Lasanha de Abobrinha Vegana', 'Quiche de Brócolis'],
  'gengibre': ['Suco Verde Detox', 'Smoothie Verde Energético', 'Suco de Beterraba com Gengibre'],
  'mel': ['Panquecas de Aveia', 'Smoothie Bowl Tropical', 'Granola Caseira'],
  'uva': ['Smoothie Bowl Tropical', 'Suco Verde Detox'],
  'tofu': ['Lasanha de Abobrinha Vegana', 'Sopa de Lentilha Nutritiva', 'Tofu Refogado com Legumes'],
  'peixe': ['Salmão Assado com Legumes', 'Tilápia com Arroz Integral', 'Atum com Grão de Bico'],
  'quinoa': ['Peito de Peru com Quinoa', 'Salada de Quinoa Colorida'],
  'abobrinha': ['Lasanha de Abobrinha Vegana', 'Macarrão de Abobrinha', 'Espaguete de Abobrinha'],
  'cogumelos': ['Risotto de Cogumelos', 'Omelete de Cogumelos', 'Estrogonofe de Cogumelos'],
  'grão de bico': ['Curry de Grão de Bico', 'Atum com Grão de Bico', 'Hummus de Grão de Bico'],
  'batata doce': ['Frango com Batata Doce', 'Chips de Batata Doce', 'Escondidinho de Batata Doce'],
  'coco': ['Bolinhas de Coco', 'Trufas de Tâmara'],
  'tâmara': ['Trufas de Tâmara', 'Energy Balls'],
  'açaí': ['Açaí Bowl Energético'],
  'melancia': ['Suco de Melancia'],
  'pepino': ['Suco de Pepino com Hortelã', 'Água Saborizada Detox'],
  'beterraba': ['Suco de Beterraba com Gengibre'],
  'couve-flor': ['Couve-flor Gratinada'],
  'berinjela': ['Berinjela Recheada', 'Água de Berinjela'],
  'atum': ['Salada de Atum', 'Atum com Grão de Bico'],
  'ricota': ['Pasta de Ricota com Ervas'],
  'lentilha': ['Sopa de Lentilha Nutritiva', 'Hambúrguer de Lentilha'],
  'feijão': ['Hambúrguer de Feijão Preto'],
  'abacaxi': ['Smoothie de Abacaxi'],
  'hortelã': ['Suco de Pepino com Hortelã'],
  'cúrcuma': ['Limonada de Cúrcuma'],
  'alface': ['Wrap de Alface'],
  'pimentão': ['Pimentão Recheado']
};

// Função para adicionar eventos aos botões "Ver Receita"
function adicionarEventosVerReceita() {
  document.querySelectorAll('.ver-receita').forEach(btn => {
    // Remove listeners existentes
    btn.removeEventListener('click', handleVerReceita);
    // Adiciona novo listener
    btn.addEventListener('click', handleVerReceita);
  });
}

// Handler para botões "Ver Receita"
function handleVerReceita(e) {
  e.stopPropagation();
  const card = e.target.closest('.card-receita');
  const nomeReceita = card.querySelector('h2').textContent;
  const receitaId = receitaIds[nomeReceita];
  
  if (receitaId) {
    window.location.href = `receita-detalhes.html?id=${receitaId}`;
  } else {
    console.warn('ID da receita não encontrado para:', nomeReceita);
  }
}

// Função para adicionar eventos aos cards
function adicionarEventosCard() {
  document.querySelectorAll('.card-receita').forEach(card => {
    // Remove listeners existentes
    card.removeEventListener('click', handleCardClick);
    // Adiciona novo listener
    card.addEventListener('click', handleCardClick);
  });
}

// Handler para clique no card
function handleCardClick(e) {
  // Só navega se não clicou no favorito ou no botão
  if (!e.target.closest('.favorito') && !e.target.closest('.ver-receita')) {
    const nomeReceita = this.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      window.location.href = `receita-detalhes.html?id=${receitaId}`;
    }
  }
}

// Sistema de favoritos
class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  isFavorito(receitaId) {
    return this.favoritos.includes(receitaId);
  }

  toggleFavorito(receitaId) {
    if (this.isFavorito(receitaId)) {
      this.favoritos = this.favoritos.filter(id => id !== receitaId);
    } else {
      this.favoritos.push(receitaId);
    }
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    return this.isFavorito(receitaId);
  }
}

const favoritosManager = new FavoritosManager();

// Função para atualizar ícone de favorito
function atualizarIconeFavorito(elemento, receitaId) {
  const isFav = favoritosManager.isFavorito(receitaId);
  elemento.classList.toggle('ativo', isFav);
  elemento.textContent = isFav ? '❤' : '🤍';
}

// Marcar/desmarcar favoritos nos cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.favorito').forEach(btn => {
    const card = btn.closest('.card-receita');
    const nomeReceita = card.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      atualizarIconeFavorito(btn, receitaId);
      btn.addEventListener('click', handleFavoritoClick);
    }
  });

  // Inicializar eventos
  adicionarEventosVerReceita();
  adicionarEventosCard();

  // Funcionalidade da barra de pesquisa
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
        window.location.href = `receitas.html?search=${encodeURIComponent(searchTerm)}`;
      }
    });
  }

  // Funcionalidade das categorias
  document.querySelectorAll('.categoria[data-categoria]').forEach(categoria => {
    categoria.addEventListener('click', () => {
      const categoriaValue = categoria.getAttribute('data-categoria');
      window.location.href = `receitas.html?categoria=${encodeURIComponent(categoriaValue)}`;
    });
  });

  // Funcionalidade das setas dos carrosséis
  document.querySelectorAll('.carrossel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const carrosselId = btn.getAttribute('data-carrossel');
      const carrossel = document.getElementById(carrosselId);
      const scrollAmount = 280;
      
      if (btn.classList.contains('prev')) {
        carrossel.scrollLeft -= scrollAmount;
      } else {
        carrossel.scrollLeft += scrollAmount;
      }
    });
  });

  // Funcionalidade dos ingredientes da natureza
  document.querySelectorAll('.ingredientes .card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const ingrediente = card.querySelector('p').textContent.toLowerCase();
      window.location.href = `receitas.html?ingrediente=${encodeURIComponent(ingrediente)}`;
    });
  });
});

// Funcionalidade específica da página receitas.html
if (window.location.pathname.includes('receitas.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    const categoria = urlParams.get('categoria');
    const ingrediente = urlParams.get('ingrediente');
    const mainTitle = document.querySelector('.receitas-main h1');
    
    if (searchTerm) {
      if (mainTitle) mainTitle.textContent = `Resultados para: "${searchTerm}"`;
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = searchTerm;
    } else if (categoria) {
      const categoriaTexto = categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      if (mainTitle) mainTitle.textContent = `Receitas de ${categoriaTexto}`;
      
      document.querySelectorAll('.card-receita').forEach(card => {
        if (card.getAttribute('data-categoria') === categoria) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    } else if (ingrediente) {
      const ingredienteTexto = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);
      if (mainTitle) mainTitle.textContent = `Receitas com ${ingredienteTexto}`;
      
      const receitasComIngrediente = ingredientesReceitas[ingrediente.toLowerCase()] || [];
      document.querySelectorAll('.card-receita').forEach(card => {
        const nomeReceita = card.querySelector('h2').textContent;
        if (receitasComIngrediente.includes(nomeReceita)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Funcionalidade dos filtros
    document.querySelectorAll('.filtros button[data-filtro]').forEach(filtro => {
      filtro.addEventListener('click', () => {
        document.querySelectorAll('.filtros button').forEach(btn => btn.classList.remove('ativo'));
        filtro.classList.add('ativo');
        
        const filtroValue = filtro.getAttribute('data-filtro');
        
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
        if (mainTitle) mainTitle.textContent = 'Bombando Esta Semana';
        
        document.querySelectorAll('.card-receita').forEach(card => {
          const cardFiltros = card.getAttribute('data-filtro') || '';
          if (filtroValue === 'todas' || cardFiltros.includes(filtroValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
}

// Função global para recarregar eventos (útil para conteúdo dinâmico)
window.recarregarEventosReceitas = function() {
  adicionarEventosVerReceita();
  adicionarEventosCard();
  
  // Recarregar eventos de favoritos
  document.querySelectorAll('.favorito').forEach(btn => {
    const card = btn.closest('.card-receita');
    const nomeReceita = card.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      atualizarIconeFavorito(btn, receitaId);
      
      btn.removeEventListener('click', handleFavoritoClick);
      btn.addEventListener('click', handleFavoritoClick);
    }
  });
};

function handleFavoritoClick(e) {
  e.stopPropagation();
  const card = this.closest('.card-receita');
  const nomeReceita = card.querySelector('h2').textContent;
  const receitaId = receitaIds[nomeReceita];
  
  if (receitaId) {
    favoritosManager.toggleFavorito(receitaId);
    atualizarIconeFavorito(this, receitaId);
  }
}