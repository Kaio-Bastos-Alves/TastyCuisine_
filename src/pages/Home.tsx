import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MOCK_RECIPES } from '../data/recipes'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const sorted = [...MOCK_RECIPES].sort((a, b) => b.likes - a.likes)
  const maisAmadas = sorted.slice(0, 4)
  const emAlta = sorted.slice(4)

  const tagClass = (cat: string) => (
    cat === 'Sobremesas Saudáveis' ? 'rosa' :
    cat === 'Café da Manhã' ? 'verde' :
    cat === 'Marmitas Fit' ? 'lilas' :
    cat === 'Veganas' ? 'lavanda' :
    cat === 'Detox' ? 'verde' :
    cat === 'Low Carb' ? 'lilas' : 'roxo'
  )

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
          <button type="submit" className="search-icon">🔍</button>
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
          <button className="carrossel-btn prev">‹</button>
          <div className="carrossel">
            {maisAmadas.map(r => (
              <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
                <div className="imagem-receita"></div>
                <span className={`tag ${tagClass(r.category)}`}>{r.category}</span>
                <h2>{r.title}</h2>
                <div className="info-receita">
                  <span>🕒 {r.time}</span>
                  <span>⚙ {r.difficulty}</span>
                  <span>❤ {r.likes}</span>
                </div>
                <button className="ver-receita" onClick={() => navigate('/receitas')}>Ver Receita</button>
                <span className="favorito ativo">❤</span>
              </article>
            ))}
          </div>
          <button className="carrossel-btn next">›</button>
        </div>
      </section>

      <section className="receitas-em-alta">
        <div className="secao-topo">
          <h2>Receitas em Alta</h2>
        </div>
        <div className="carrossel-container">
          <button className="carrossel-btn prev">‹</button>
          <div className="carrossel">
            {emAlta.map(r => (
              <article key={r.id} className="card-receita" role="article" aria-label={r.title}>
                <div className="imagem-receita"></div>
                <span className={`tag ${tagClass(r.category)}`}>{r.category}</span>
                <h2>{r.title}</h2>
                <div className="info-receita">
                  <span>🕒 {r.time}</span>
                  <span>⚙ {r.difficulty}</span>
                  <span>❤ {r.likes}</span>
                </div>
                <button className="ver-receita" onClick={() => navigate('/receitas')}>Ver Receita</button>
                <span className="favorito ativo">❤</span>
              </article>
            ))}
          </div>
          <button className="carrossel-btn next">›</button>
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