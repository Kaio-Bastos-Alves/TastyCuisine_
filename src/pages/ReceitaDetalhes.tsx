import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOCK_RECIPES } from '../data/recipes'
import { useFavoritos } from '../contexts/FavoritosContext'
import '../styles/receita-detalhes.css'

const ReceitaDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { favoritos, toggleFavorito } = useFavoritos()
  
  const receita = MOCK_RECIPES.find(r => r.id === Number(id))
  
  if (!receita) {
    return (
      <div className="receita-not-found">
        <h2>Receita não encontrada</h2>
        <button onClick={() => navigate('/receitas')}>Voltar às receitas</button>
      </div>
    )
  }

  const ingredientes = receita.ingredients || [
    '2 xícaras de farinha de aveia',
    '1 xícara de açúcar demerara',
    '3 ovos',
    '1/2 xícara de óleo de coco',
    '1 colher de chá de fermento',
    '1 pitada de sal'
  ]

  const instrucoes = receita.instructions || [
    'Pré-aqueça o forno a 180°C',
    'Misture os ingredientes secos em uma tigela',
    'Em outra tigela, bata os ovos com o óleo',
    'Combine as misturas até formar uma massa homogênea',
    'Despeje em forma untada',
    'Asse por 25-30 minutos'
  ]

  return (
    <main className="receita-detalhes">
      <button className="btn-voltar" onClick={() => navigate('/receitas')}>
        ← Voltar
      </button>
      
      <div className="receita-header">
        <div className="receita-imagem">
          <img src={receita.image} alt={receita.title} />
        </div>
        
        <div className="receita-info">
          <span className={`tag ${
            receita.category === 'Sobremesas Saudáveis' ? 'rosa' :
            receita.category === 'Café da Manhã' ? 'verde' :
            receita.category === 'Marmitas Fit' ? 'lilas' :
            receita.category === 'Veganas' ? 'lavanda' :
            receita.category === 'Detox' ? 'verde' :
            receita.category === 'Low Carb' ? 'lilas' : 'roxo'
          }`}>{receita.category}</span>
          
          <h1>{receita.title}</h1>
          
          <p className="descricao">
            {receita.description || 'Uma deliciosa receita saudável, perfeita para quem busca sabor e nutrição em cada garfada.'}
          </p>
          
          <div className="receita-stats">
            <div className="stat">
              <span className="icon">🕒</span>
              <span>{receita.time}</span>
            </div>
            <div className="stat">
              <span className="icon">⚙</span>
              <span>{receita.difficulty}</span>
            </div>
            <div className="stat">
              <span className="icon">👥</span>
              <span>{receita.servings || 4} porções</span>
            </div>
            <div className="stat">
              <span className="icon">🔥</span>
              <span>{receita.calories || 250} kcal</span>
            </div>
          </div>
          
          <div className="receita-actions">
            <button 
              className={`btn-favorito ${favoritos.has(receita.id) ? 'ativo' : ''}`}
              onClick={() => toggleFavorito(receita.id)}
            >
              ❤ {favoritos.has(receita.id) ? 'Favoritado' : 'Favoritar'}
            </button>
            <div className="likes">
              <span>❤ {receita.likes} curtidas</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="receita-content">
        <section className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </section>
        
        <section className="modo-preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            {instrucoes.map((instrucao, index) => (
              <li key={index}>{instrucao}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}

export default ReceitaDetalhes