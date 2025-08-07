import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-text">
        <h3>Tasty Cuisine</h3>
        <p>Feito com carinho, saúde e um toque de afeto.</p>
      </div>
      <div className="footer-links">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
      <div className="footer-social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </footer>
  )
}

export default Footer