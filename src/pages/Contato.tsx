import React from 'react'

const Contato: React.FC = () => {
  return (
    <main className="contato-container">
      <h1 className="contato-titulo">Fale Conosco</h1>
      <p className="contato-subtitulo">
        Tem alguma dúvida culinária, sugestão de receita ou quer nos dar um feedback? Envie-nos uma mensagem!
      </p>

      <form className="formulario-contato">
        <label htmlFor="nome">Nome</label>
        <div className="input-wrapper">
          <i className="fas fa-user input-icon"></i>
          <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
        </div>

        <label htmlFor="email">E-mail</label>
        <div className="input-wrapper">
          <i className="fas fa-envelope input-icon"></i>
          <input type="email" id="email" name="e-mail" placeholder="seu.email@exemplo.com" required />
        </div>

        <label htmlFor="mensagem">Assunto</label>
        <div className="input-wrapper">
          <i className="fas fa-comment input-icon"></i>
          <textarea id="mensagem" name="mensagem" rows={5} placeholder="Dúvida sobre receitas, sugestão, etc." required></textarea>
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>
    </main>
  )
}

export default Contato