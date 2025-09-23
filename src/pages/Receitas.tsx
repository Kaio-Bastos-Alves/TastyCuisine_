import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useFavoritos } from '../contexts/FavoritosContext'
import { MOCK_RECIPES } from '../data/recipes'

const CATEGORIES = [
  'Todos',
  'Café da Manhã',
  'Snacks',
  'Marmitas Fit',
  'Veganas',
  'Detox',
  'Low Carb',
  'Sobremesas Saudáveis',
]

const Receitas: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState<string>('Todos')
  const { favoritos, toggleFavorito } = useFavoritos()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const searchParam = searchParams.get('search')
    setBusca(searchParam || '')
  }, [searchParams])

  const receitasFiltradas = useMemo(() => {
    return MOCK_RECIPES.filter(r => {
      const matchCategoria = categoria === 'Todos' || r.category === categoria
      const matchBusca = r.title.toLowerCase().includes(busca.trim().toLowerCase())
      return matchCategoria && matchBusca
    })
  }, [busca, categoria])

  return (
    <main className="receitas-main">
      <h1>Receitas</h1>

      <section className="search-bar">
        <form className="search-form" onSubmit={(e) => {
          e.preventDefault()
          if (searchTerm.trim()) {
            navigate(`/receitas?search=${encodeURIComponent(searchTerm.trim())}`)
          } else {
            navigate('/receitas')
          }
        }}>
          <input 
            type="text" 
            placeholder="Buscar por uma receita..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </section>

      <div className="filtros">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={categoria === cat ? 'ativo' : ''}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid-receitas">
        {receitasFiltradas.map(r => (
          <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
            <div className="imagem-receita">
              <img src={r.image} alt={r.title} />
            </div>
            <span className={`tag ${
              r.category === 'Sobremesas Saudáveis' ? 'rosa' :
              r.category === 'Café da Manhã' ? 'verde' :
              r.category === 'Marmitas Fit' ? 'lilas' :
              r.category === 'Veganas' ? 'lavanda' :
              r.category === 'Detox' ? 'verde' :
              r.category === 'Low Carb' ? 'lilas' : 'roxo'
            }`}>{r.category}</span>
            <h2>{r.title}</h2>
            <div className="info-receita">
              <span>🕒 {r.time}</span>
              <span>⚙ {r.difficulty}</span>
              <span>❤ {r.likes}</span>
            </div>
            <button className="ver-receita" onClick={() => navigate(`/receitas/${r.id}`)}>Ver Receita</button>
            <span
              className={`favorito ${favoritos.has(r.id) ? 'ativo' : ''}`}
              title={favoritos.has(r.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              onClick={() => toggleFavorito(r.id)}
              role="button"
              aria-label="Favoritar"
            >
              ❤
            </span>
          </article>
        ))}
        {receitasFiltradas.length === 0 && (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#777' }}>
            Nenhuma receita encontrada com os filtros atuais.
          </p>
        )}
      </section>
    </main>
  )
}

export default Receitas
