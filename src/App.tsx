import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import Contato from './pages/Contato'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/receitas" element={<div>Receitas - Em desenvolvimento</div>} />
          <Route path="/por-ingredientes" element={<div>Por Ingredientes - Em desenvolvimento</div>} />
          <Route path="/dicas-saudaveis" element={<div>Dicas Saudáveis - Em desenvolvimento</div>} />
          <Route path="/chefes" element={<div>Chefes - Em desenvolvimento</div>} />
          <Route path="/restaurantes" element={<div>Restaurantes - Em desenvolvimento</div>} />
          <Route path="/consulta" element={<div>Consulta - Em desenvolvimento</div>} />
          <Route path="/sobre" element={<div>Sobre - Em desenvolvimento</div>} />
          <Route path="/perfil" element={<div>Perfil - Em desenvolvimento</div>} />
          <Route path="/login" element={<div>Login - Em desenvolvimento</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App