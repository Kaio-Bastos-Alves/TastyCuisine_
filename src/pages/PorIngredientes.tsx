import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import das imagens dos ingredientes

const PorIngredientes: React.FC = () => {
  const navigate = useNavigate()




  return (
    <main className="container">
      <h2 className="titulo">Explore Por Ingredientes</h2>
      <p className="subtitulo">
        Descubra receitas incríveis baseadas nos ingredientes frescos e saudáveis que você ama.
      </p>
      
    
    </main>
  )
}

export default PorIngredientes