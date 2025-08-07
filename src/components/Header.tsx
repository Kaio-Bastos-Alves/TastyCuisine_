import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="logo">Tasty Cuisine</h1>
      <nav>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/receitas">Receitas</Link></li>
          <li><Link to="/por-ingredientes">Por Ingredientes</Link></li>
          <li><Link to="/dicas-saudaveis">Dicas Saudáveis</Link></li>
          <li><Link to="/chefes">Chefes</Link></li>
          <li><Link to="/restaurantes">Restaurantes</Link></li>
          <li><Link to="/consulta">Consulta</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header