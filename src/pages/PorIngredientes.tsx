import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import das imagens dos ingredientes
import aveiaImg from '../assets/aveia.svg'
import chiaImg from '../assets/chia.svg'
import bananaImg from '../assets/banana.svg'
import castanhasImg from '../assets/castanhas.svg'
import cacauImg from '../assets/cacau.svg'
import linhacaImg from '../assets/linhaca.svg'
import macaImg from '../assets/maca.svg'
import cenouraImg from '../assets/cenoura.svg'
import abacateImg from '../assets/abacate.svg'
import brocolisImg from '../assets/brocolis.svg'
import gengibreImg from '../assets/gengibre.svg'
import melImg from '../assets/mel.svg'
import uvaImg from '../assets/uva.svg'
import tofuImg from '../assets/tofu.svg'
import peixeImg from '../assets/peixe.svg'

const PorIngredientes: React.FC = () => {
  const navigate = useNavigate()

  const ingredientes = [
    { nome: 'Aveia', imagem: aveiaImg },
    { nome: 'Chia', imagem: chiaImg },
    { nome: 'Banana', imagem: bananaImg },
    { nome: 'Castanhas', imagem: castanhasImg },
    { nome: 'Cacau', imagem: cacauImg },
    { nome: 'Linhaça', imagem: linhacaImg },
    { nome: 'Maçã', imagem: macaImg },
    { nome: 'Cenoura', imagem: cenouraImg },
    { nome: 'Abacate', imagem: abacateImg },
    { nome: 'Brócolis', imagem: brocolisImg },
    { nome: 'Gengibre', imagem: gengibreImg },
    { nome: 'Mel', imagem: melImg },
    { nome: 'Uva', imagem: uvaImg },
    { nome: 'Tofu', imagem: tofuImg },
    { nome: 'Peixe', imagem: peixeImg }
  ]

  const handleIngredienteClick = (ingrediente: string) => {
    // Navegar para a página de receitas com o ingrediente como parâmetro
    navigate(`/receitas?ingrediente=${encodeURIComponent(ingrediente.toLowerCase())}`)
  }

  return (
    <main className="container">
      <h2 className="titulo">Explore Por Ingredientes</h2>
      <p className="subtitulo">
        Descubra receitas incríveis baseadas nos ingredientes frescos e saudáveis que você ama.
      </p>
      
      <div className="grid-cards">
        {ingredientes.map((ingrediente, index) => (
          <div 
            key={index}
            className="card" 
            onClick={() => handleIngredienteClick(ingrediente.nome)}
            style={{ cursor: 'pointer' }}
          >
            <div className="img-placeholder">
              <img 
                src={ingrediente.imagem} 
                alt={ingrediente.nome}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log(`Erro ao carregar imagem: ${ingrediente.nome}`, target.src);
                  target.style.display = 'none';
                  // Adicionar um ícone de fallback
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-icon')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-icon';
                    fallback.innerHTML = '🥗';
                    fallback.style.fontSize = '2rem';
                    parent.appendChild(fallback);
                  }
                }}
                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
            <p>{ingrediente.nome}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default PorIngredientes