  import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavoritosProvider } from './contexts/FavoritosContext'
import { PerfilProvider } from './contexts/PerfilContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import Contato from './pages/Contato'
import Receitas from './pages/Receitas'
import Perfil from './pages/Perfil'
import './styles/perfil.css'

const App: React.FC = () => {
  return (
    <FavoritosProvider>
      <PerfilProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publicar" element={<Publicar />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/receitas" element={<Receitas />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/por-ingredientes" element={<div>Por Ingredientes - Em desenvolvimento</div>} />
              <Route path="/dicas-saudaveis" element={<div>Dicas Saudáveis - Em desenvolvimento</div>} />
              <Route path="/chefes" element={<div>Chefes - Em desenvolvimento</div>} />
              <Route path="/restaurantes" element={<div>Restaurantes - Em desenvolvimento</div>} />
              <Route path="/consulta" element={<div>Consulta - Em desenvolvimento</div>} />
              <Route path="/sobre" element={<div>Sobre - Em desenvolvimento</div>} />
              <Route path="/login" element={<div>Login - Em desenvolvimento</div>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PerfilProvider>
    </FavoritosProvider>
  )
}

export default App