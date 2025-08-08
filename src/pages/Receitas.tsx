import React, { useMemo, useState } from 'react'

interface Recipe {
  id: number
  title: string
  category: string
  time: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  likes: number
}

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

const MOCK_RECIPES: Recipe[] = [
  { id: 1, title: 'Bolo de Chocolate Fit', category: 'Sobremesas Saudáveis', time: '30 min', difficulty: 'Fácil', likes: 150 },
  { id: 2, title: 'Overnight Oats com Chia', category: 'Café da Manhã', time: '5 min', difficulty: 'Fácil', likes: 98 },
  { id: 3, title: 'Wrap Low Carb de Frango', category: 'Low Carb', time: '20 min', difficulty: 'Médio', likes: 120 },
  { id: 4, title: 'Salada Detox de Quinoa', category: 'Detox', time: '25 min', difficulty: 'Fácil', likes: 76 },
  { id: 5, title: 'Snacks de Grão-de-Bico Crocante', category: 'Snacks', time: '35 min', difficulty: 'Fácil', likes: 64 },
  { id: 6, title: 'Strogonoff Vegano de Cogumelos', category: 'Veganas', time: '40 min', difficulty: 'Médio', likes: 87 },
  { id: 7, title: 'Marmita Fit de Frango com Batata Doce', category: 'Marmitas Fit', time: '50 min', difficulty: 'Médio', likes: 110 },
  { id: 8, title: 'Mousse de Cacau e Abacate', category: 'Sobremesas Saudáveis', time: '10 min', difficulty: 'Fácil', likes: 140 },
]

const Receitas: React.FC = () => {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState<string>('Todos')
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set())

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => {
      const novo = new Set(prev)
      if (novo.has(id)) novo.delete(id)
      else novo.add(id)
      return novo
    })
  }

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
          <button type="submit" className="search-icon" aria-label="Buscar">🔍</button>
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
            <div className="imagem-receita" />
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
