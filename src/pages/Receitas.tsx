import React, { useMemo, useState } from 'react'
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
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState<string>('Todos')
  const { favoritos, toggleFavorito } = useFavoritos()

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

      <section className="search-bar" style={{ paddingTop: 0 }}>
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Buscar receita por nome..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          <button type="submit" className="search-icon" aria-label="Buscar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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
            <button className="ver-receita" onClick={() => alert('Página de detalhes em desenvolvimento')}>Ver Receita</button>
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
