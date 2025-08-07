import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

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

      <section className="receitas-em-alta">
        <div className="secao-topo">
          <h2>Receitas em Alta</h2>
        </div>
        <div className="carrossel-container">
          <button className="carrossel-btn prev">‹</button>
          <div className="carrossel">
            <div className="card-receita">
              <div className="imagem-receita"></div>
              <span className="tag rosa">Sobremesas Saudáveis</span>
              <h2>Bolo de Chocolate Fit</h2>
              <div className="info-receita">
                <span>🕒 30 min</span>
                <span>⚙ Fácil</span>
                <span>❤ 150</span>
              </div>
              <button className="ver-receita">Ver Receita</button>
              <span className="favorito ativo">❤</span>
            </div>
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