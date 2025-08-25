import React from 'react'
import '../styles/sobre.css'

const Sobre: React.FC = () => {
  return (
    <main className="sobre-container">
      <section className="sobre-hero">
        <h1 className="sobre-titulo">Sobre o TastyCuisine</h1>
        <p className="sobre-subtitulo">
          Facilitando o acesso a receitas simples e saudáveis para todos
        </p>
      </section>

      <section className="sobre-conteudo">
        <div className="sobre-missao">
          <h2>Nossa Missão</h2>
          <p>
            O TastyCuisine nasceu com um propósito claro: <strong>facilitar o acesso a receitas simples e saudáveis</strong> 
            para pessoas que buscam uma alimentação mais equilibrada e saborosa no dia a dia.
          </p>
          <p>
            Acreditamos que comer bem não precisa ser complicado. Por isso, reunimos receitas práticas, 
            nutritivas e deliciosas que cabem na rotina de qualquer pessoa, independentemente do seu 
            nível de experiência na cozinha.
          </p>
        </div>

        <div className="sobre-valores">
          <h2>Nossos Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">🌱</div>
              <h3>Simplicidade</h3>
              <p>Receitas fáceis de seguir, com ingredientes acessíveis e instruções claras.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">💚</div>
              <h3>Saúde</h3>
              <p>Priorizamos ingredientes naturais e preparos que nutrem o corpo e a alma.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">⏰</div>
              <h3>Praticidade</h3>
              <p>Soluções culinárias que se adaptam à correria do dia a dia moderno.</p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">🤝</div>
              <h3>Comunidade</h3>
              <p>Um espaço para compartilhar experiências e descobrir novos sabores juntos.</p>
            </div>
          </div>
        </div>

        <div className="sobre-diferencial">
          <h2>O que nos torna especiais</h2>
          <div className="diferencial-lista">
            <div className="diferencial-item">
              <span className="diferencial-numero">01</span>
              <div className="diferencial-texto">
                <h3>Receitas testadas e aprovadas</h3>
                <p>Cada receita passa por um processo de teste para garantir que seja realmente simples e saborosa.</p>
              </div>
            </div>
            <div className="diferencial-item">
              <span className="diferencial-numero">02</span>
              <div className="diferencial-texto">
                <h3>Foco na alimentação saudável</h3>
                <p>Priorizamos ingredientes naturais e preparos que contribuem para uma vida mais equilibrada.</p>
              </div>
            </div>
            <div className="diferencial-item">
              <span className="diferencial-numero">03</span>
              <div className="diferencial-texto">
                <h3>Interface intuitiva</h3>
                <p>Navegação fácil e busca eficiente para você encontrar exatamente o que procura.</p>
              </div>
            </div>
            <div className="diferencial-item">
              <span className="diferencial-numero">04</span>
              <div className="diferencial-texto">
                <h3>Comunidade ativa</h3>
                <p>Espaço para compartilhar suas próprias criações e descobrir receitas de outros usuários.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-promocao">
          <div className="app-conteudo">
            <div className="app-texto">
              <h2>📱 Baixe o App TastyCuisine</h2>
              <p className="app-destaque">
                Leve suas receitas favoritas para qualquer lugar!
              </p>
              <div className="app-beneficios">
                <div className="beneficio-item">
                  <span className="beneficio-icon">🔍</span>
                  <span>Busca inteligente por ingredientes</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icon">📋</span>
                  <span>Lista de compras automática</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icon">⏰</span>
                  <span>Timer integrado para cozinhar</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icon">❤️</span>
                  <span>Sincronização de favoritos</span>
                </div>
                <div className="beneficio-item">
                  <span className="beneficio-icon">📱</span>
                  <span>Acesso offline às suas receitas</span>
                </div>
              </div>
              <div className="app-downloads">
                <button className="download-btn ios">
                  <span className="download-icon">🍎</span>
                  <div className="download-texto">
                    <small>Baixar na</small>
                    <strong>App Store</strong>
                  </div>
                </button>
                <button className="download-btn android">
                  <span className="download-icon">🤖</span>
                  <div className="download-texto">
                    <small>Baixar no</small>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
            </div>
            <div className="app-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="app-logo">🍽️</div>
                      <h3>TastyCuisine</h3>
                    </div>
                    <div className="app-search">
                      <div className="search-bar-mini">🔍 Buscar receitas...</div>
                    </div>
                    <div className="app-categories">
                      <div className="category-mini rosa">Café da Manhã</div>
                      <div className="category-mini verde">Snacks</div>
                      <div className="category-mini lilas">Low Carb</div>
                    </div>
                    <div className="app-recipe-card">
                      <div className="recipe-image-mini"></div>
                      <div className="recipe-info-mini">
                        <h4>Smoothie Verde</h4>
                        <p>⏰ 5 min • ❤️ 234</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sobre-convite">
          <h2>Junte-se à nossa comunidade</h2>
          <p>
            Seja você um iniciante na cozinha ou alguém que já tem experiência, o TastyCuisine é o lugar 
            perfeito para descobrir receitas que vão transformar sua relação com a comida.
          </p>
          <p>
            <strong>Comida de verdade, sabor de sobra.</strong> Essa é nossa promessa para você.
          </p>
          <div className="sobre-cta">
            <button className="btn-primary" onClick={() => window.location.href = '/receitas'}>
              Explorar Receitas
            </button>
            <button className="btn-outline" onClick={() => window.location.href = '/publicar'}>
              Compartilhar Receita
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sobre