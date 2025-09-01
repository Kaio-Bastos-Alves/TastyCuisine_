import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavoritos } from '../contexts/FavoritosContext'
import { MOCK_RECIPES } from '../data/recipes'
// Imagens de ingredientes
import aveiaImg from '../assets/aveia.svg'
import chiaImg from '../assets/chia.svg'
import bananaImg from '../assets/banana.svg'
import cacauImg from '../assets/cacau.svg'
import abacateImg from '../assets/abacate.svg'
import brocolisImg from '../assets/brocolis.svg'
import gengibreImg from '../assets/gengibre.svg'
import castanhasImg from '../assets/castanhas.svg'
import linhacaImg from '../assets/linhaca.svg'
import cenouraImg from '../assets/cenoura.svg'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { favoritos, toggleFavorito } = useFavoritos()
  const rapidasRef = useRef<HTMLDivElement>(null)
  
  const [scrollProgress, setScrollProgress] = useState({
    rapidas: 0
  })

  const receitasRapidas = MOCK_RECIPES.filter(r => {
    const timeInMinutes = parseInt(r.time.split(' ')[0])
    return timeInMinutes <= 15
  }).slice(0, 12)

  const ingredientesHome = [
    { nome: 'Aveia', imagem: aveiaImg },
    { nome: 'Chia', imagem: chiaImg },
    { nome: 'Banana', imagem: bananaImg },
    { nome: 'Cacau', imagem: cacauImg },
    { nome: 'Abacate', imagem: abacateImg },
    { nome: 'Brócolis', imagem: brocolisImg },
    { nome: 'Gengibre', imagem: gengibreImg },
    { nome: 'Castanhas', imagem: castanhasImg },
    { nome: 'Linhaça', imagem: linhacaImg },
    { nome: 'Cenoura', imagem: cenouraImg }
  ]

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
    const element = rapidasRef.current
    if (element) {
      const handleScrollUpdate = () => updateScrollProgress(rapidasRef, 'rapidas')
      element.addEventListener('scroll', handleScrollUpdate)
      return () => element.removeEventListener('scroll', handleScrollUpdate)
    }
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </section>

      <section className="receitas-rapidas">
        <div className="secao-topo">
          <h2>Receitas Rápidas</h2>
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
          {ingredientesHome.slice(0, 4).map((ing) => (
            <div className="card" key={ing.nome}>
              <div className="img-placeholder">
                <img src={ing.imagem} alt={ing.nome} />
              </div>
              <p>{ing.nome}</p>
            </div>
          ))}
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
