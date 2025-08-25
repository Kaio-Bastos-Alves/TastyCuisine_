import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavoritos } from '../contexts/FavoritosContext'
import { MOCK_RECIPES } from '../data/recipes'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { favoritos, toggleFavorito } = useFavoritos()
  const maisAmadasRef = useRef<HTMLDivElement>(null)
  const emAltaRef = useRef<HTMLDivElement>(null)
  const rapidasRef = useRef<HTMLDivElement>(null)
  
  const [scrollProgress, setScrollProgress] = useState({
    maisAmadas: 0,
    emAlta: 0,
    rapidas: 0
  })

  const sorted = [...MOCK_RECIPES].sort((a, b) => b.likes - a.likes)
  const maisAmadas = sorted.slice(0, 8)
  const emAlta = sorted.slice(8, 16)
  const receitasRapidas = MOCK_RECIPES.filter(r => {
    const timeInMinutes = parseInt(r.time.split(' ')[0])
    return timeInMinutes <= 15
  }).slice(0, 6)

  const tagClass = (cat: string) => (
    cat === 'Sobremesas Saudáveis' ? 'rosa' :
    cat === 'Café da Manhã' ? 'verde' :
    cat === 'Marmitas Fit' ? 'lilas' :
    cat === 'Veganas' ? 'lavanda' :
    cat === 'Detox' ? 'verde' :
    cat === 'Low Carb' ? 'lilas' : 'roxo'
  )

  const updateScrollProgress = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current
      const maxScroll = scrollWidth - clientWidth
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      
      setScrollProgress(prev => ({
        ...prev,
        [section]: Math.min(100, Math.max(0, progress))
      }))
    }
  }

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 300
      const newScrollLeft = direction === 'left' 
        ? ref.current.scrollLeft - scrollAmount
        : ref.current.scrollLeft + scrollAmount
      
      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const handleProgressBarClick = (ref: React.RefObject<HTMLDivElement>, clickX: number, barWidth: number) => {
    if (ref.current) {
      const { scrollWidth, clientWidth } = ref.current
      const maxScroll = scrollWidth - clientWidth
      const targetProgress = (clickX / barWidth) * 100
      const targetScrollLeft = (targetProgress / 100) * maxScroll
      
      ref.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const refs = [
      { ref: maisAmadasRef, section: 'maisAmadas' },
      { ref: emAltaRef, section: 'emAlta' },
      { ref: rapidasRef, section: 'rapidas' }
    ]

    refs.forEach(({ ref, section }) => {
      const element = ref.current
      if (element) {
        const handleScrollUpdate = () => updateScrollProgress(ref, section)
        element.addEventListener('scroll', handleScrollUpdate)
        
        return () => element.removeEventListener('scroll', handleScrollUpdate)
      }
    })
  }, [])

  return (
    <>
      <section className="hero">
        <h1>Comida de verdade, <br /> sabor de sobra.</h1>
        <p>Receitas deliciosas criadas com amor e diversão!</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/receitas')}>
            Explorar receitas
          </button>
          <button className="btn-outline" onClick={() => navigate('/publicar')}>
            Cadastrar Receita
          </button>
        </div>
      </section>

      <section className="search-bar">
        <form className="search-form">
          <input type="text" placeholder="Buscar por ingrediente ou tipo de receita saudável…" />
          <button type="submit" className="search-icon" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </section>

      <section className="categorias">
        <h2 className="titulo-categorias">Categorias</h2>
        <div className="categoria-carrossel">
          <div className="categoria rosa">Café da Manhã</div>
          <div className="categoria verde">Snacks</div>
          <div className="categoria lilas">Marmitas Fit</div>
          <div className="categoria lavanda">Veganas</div>
          <div className="categoria verde">Detox</div>
          <div className="categoria lilas">Low Carb</div>
          <div className="categoria rosa">Sobremesas Saudáveis</div>
        </div>
      </section>

      <section className="mais-amadas">
        <div className="secao-topo">
          <h2>Mais amadas da semana</h2>
        </div>
        <div className="carrossel-container">
          <button 
            className="carrossel-btn prev" 
            onClick={() => handleScroll(maisAmadasRef, 'left')}
          >
            ‹
          </button>
          <div 
            className="carrossel" 
            ref={maisAmadasRef}
            onScroll={() => updateScrollProgress(maisAmadasRef, 'maisAmadas')}
          >
            {maisAmadas.map(r => (
              <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
                <div className="imagem-receita">
                  <img src={r.image} alt={r.title} />
                </div>
                <span className={`tag ${tagClass(r.category)}`}>{r.category}</span>
                <h2>{r.title}</h2>
                <div className="info-receita">
                  <span>🕒 {r.time}</span>
                  <span>⚙ {r.difficulty}</span>
                  <span>❤ {r.likes}</span>
                </div>
                <button className="ver-receita" onClick={() => navigate('/receitas')}>Ver Receita</button>
                <span 
                  className={`favorito ${favoritos.has(r.id) ? 'ativo' : ''}`}
                  onClick={() => toggleFavorito(r.id)}
                  title={favoritos.has(r.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  role="button"
                  aria-label="Favoritar receita"
                >
                  ❤
                </span>
              </article>
            ))}
          </div>
          <button 
            className="carrossel-btn next" 
            onClick={() => handleScroll(maisAmadasRef, 'right')}
          >
            ›
          </button>
        </div>
        <div className="scroll-progress-container">
          <div 
            className="scroll-progress-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickX = e.clientX - rect.left
              handleProgressBarClick(maisAmadasRef, clickX, rect.width)
            }}
          >
            <div 
              className="scroll-progress-thumb" 
              style={{ left: `${scrollProgress.maisAmadas}%` }}
            />
          </div>
        </div>
      </section>

      <section className="receitas-em-alta">
        <div className="secao-topo">
          <h2>Receitas em Alta</h2>
        </div>
        <div className="carrossel-container">
          <button 
            className="carrossel-btn prev" 
            onClick={() => handleScroll(emAltaRef, 'left')}
          >
            ‹
          </button>
          <div 
            className="carrossel" 
            ref={emAltaRef}
            onScroll={() => updateScrollProgress(emAltaRef, 'emAlta')}
          >
            {emAlta.map(r => (
              <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
                <div className="imagem-receita">
                  <img src={r.image} alt={r.title} />
                </div>
                <span className={`tag ${tagClass(r.category)}`}>{r.category}</span>
                <h2>{r.title}</h2>
                <div className="info-receita">
                  <span>🕒 {r.time}</span>
                  <span>⚙ {r.difficulty}</span>
                  <span>❤ {r.likes}</span>
                </div>
                <button className="ver-receita" onClick={() => navigate('/receitas')}>Ver Receita</button>
                <span 
                  className={`favorito ${favoritos.has(r.id) ? 'ativo' : ''}`}
                  onClick={() => toggleFavorito(r.id)}
                  title={favoritos.has(r.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  role="button"
                  aria-label="Favoritar receita"
                >
                  ❤
                </span>
              </article>
            ))}
          </div>
          <button 
            className="carrossel-btn next" 
            onClick={() => handleScroll(emAltaRef, 'right')}
          >
            ›
          </button>
        </div>
        <div className="scroll-progress-container">
          <div 
            className="scroll-progress-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickX = e.clientX - rect.left
              handleProgressBarClick(emAltaRef, clickX, rect.width)
            }}
          >
            <div 
              className="scroll-progress-thumb" 
              style={{ left: `${scrollProgress.emAlta}%` }}
            />
          </div>
        </div>
      </section>

      <section className="receitas-rapidas">
        <div className="secao-topo">
          <h2>Receitas Rápidas ⚡</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Pratos deliciosos em até 15 minutos
          </p>
        </div>
        <div className="carrossel-container">
          <button 
            className="carrossel-btn prev" 
            onClick={() => handleScroll(rapidasRef, 'left')}
          >
            ‹
          </button>
          <div 
            className="carrossel" 
            ref={rapidasRef}
            onScroll={() => updateScrollProgress(rapidasRef, 'rapidas')}
          >
            {receitasRapidas.map(r => (
              <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
                <div className="imagem-receita">
                  <img src={r.image} alt={r.title} />
                </div>
                <span className={`tag ${tagClass(r.category)}`}>{r.category}</span>
                <h2>{r.title}</h2>
                <div className="info-receita">
                  <span>🕒 {r.time}</span>
                  <span>⚙ {r.difficulty}</span>
                  <span>❤ {r.likes}</span>
                </div>
                <button className="ver-receita" onClick={() => navigate('/receitas')}>Ver Receita</button>
                <span 
                  className={`favorito ${favoritos.has(r.id) ? 'ativo' : ''}`}
                  onClick={() => toggleFavorito(r.id)}
                  title={favoritos.has(r.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  role="button"
                  aria-label="Favoritar receita"
                >
                  ❤
                </span>
              </article>
            ))}
          </div>
          <button 
            className="carrossel-btn next" 
            onClick={() => handleScroll(rapidasRef, 'right')}
          >
            ›
          </button>
        </div>
        <div className="scroll-progress-container">
          <div 
            className="scroll-progress-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickX = e.clientX - rect.left
              handleProgressBarClick(rapidasRef, clickX, rect.width)
            }}
          >
            <div 
              className="scroll-progress-thumb" 
              style={{ left: `${scrollProgress.rapidas}%` }}
            />
          </div>
        </div>
      </section>

      <section className="ingredientes">
        <h2>Ingredientes da Natureza</h2>
        <div className="scroll-h">
          <div className="card">
            <div className="img-placeholder"></div>
            <p>Aveia</p>
          </div>
          <div className="card">
            <div className="img-placeholder"></div>
            <p>Chia</p>
          </div>
        </div>
      </section>

      <section className="ebook-form">
        <h3>Receba um e-book grátis com 10 receitas funcionais!</h3>
        <form>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <button type="submit">Quero meu e-book!</button>
        </form>
      </section>
    </>
  )
}

export default Home