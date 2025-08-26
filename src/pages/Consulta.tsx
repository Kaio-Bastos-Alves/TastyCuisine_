import React, { useEffect, useState } from 'react'
import '../styles/consulta-page.css'

interface Nutricionista {
  id: string
  nome: string
  especialidade: string
  cidade: string
  telefone: string
  email: string
}

const initialNutricionistas: Nutricionista[] = [
  {
    id: 'seed-1',
    nome: 'Dra. Ana Souza',
    especialidade: 'Nutrição Clínica e Emagrecimento',
    cidade: 'São Paulo - SP',
    telefone: '(11) 91234-5678',
    email: 'ana.souza@exemplo.com'
  },
  {
    id: 'seed-2',
    nome: 'Dr. Carlos Lima',
    especialidade: 'Nutrição Esportiva',
    cidade: 'Rio de Janeiro - RJ',
    telefone: '(21) 99876-5432',
    email: 'carlos.lima@exemplo.com'
  },
  {
    id: 'seed-3',
    nome: 'Dra. Beatriz Nogueira',
    especialidade: 'Nutrição Funcional',
    cidade: 'Curitiba - PR',
    telefone: '(41) 98888-1122',
    email: 'beatriz.nogueira@exemplo.com'
  },
  {
    id: 'seed-4',
    nome: 'Dra. Marina Alves',
    especialidade: 'Saúde da Mulher e Gestantes',
    cidade: 'Belo Horizonte - MG',
    telefone: '(31) 98765-4321',
    email: 'marina.alves@exemplo.com'
  },
  {
    id: 'seed-5',
    nome: 'Dr. Pedro Santos',
    especialidade: 'Nutrição Clínica e Doenças Crônicas',
    cidade: 'Porto Alegre - RS',
    telefone: '(51) 98123-4567',
    email: 'pedro.santos@exemplo.com'
  }
]

const formatWhatsApp = (telefone: string) => {
  let digits = telefone.replace(/\D/g, '')
  if (!digits.startsWith('55')) {
    digits = '55' + digits
  }
  return `https://wa.me/${digits}`
}

const getInitials = (nome: string) => {
  const cleaned = nome.replace(/\bdr\.?\b|\bdra\.?\b/gi, '').trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '').join('')
}

const generateId = () => 'id-' + Math.random().toString(36).slice(2) + Date.now().toString(36)

const Consulta: React.FC = () => {
  const [lista, setLista] = useState<Nutricionista[]>(() => {
    try {
      const saved = localStorage.getItem('consulta_nutricionistas')
      const data: any[] = saved ? JSON.parse(saved) : initialNutricionistas
      return data.map((n: any, idx: number) => ({
        id: n.id ?? `ls-${idx}-${Date.now().toString(36)}`,
        nome: n.nome ?? '',
        especialidade: n.especialidade ?? '',
        cidade: n.cidade ?? '',
        telefone: n.telefone ?? '',
        email: n.email ?? ''
      }))
    } catch {
      return initialNutricionistas
    }
  })

  const [form, setForm] = useState<Omit<Nutricionista, 'id'>>({
    nome: '',
    especialidade: '',
    cidade: '',
    telefone: '',
    email: ''
  })

  useEffect(() => {
    localStorage.setItem('consulta_nutricionistas', JSON.stringify(lista))
  }, [lista])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nome.trim() || (!form.telefone.trim() && !form.email.trim())) {
      return
    }
    setLista(prev => [{ id: generateId(), ...form }, ...prev])
    setForm({ nome: '', especialidade: '', cidade: '', telefone: '', email: '' })
  }

  const handleDelete = (id: string) => {
    setLista(prev => prev.filter(n => n.id !== id))
  }

  return (
    <main className="container">
      <h2 className="titulo">Consulta com Nutricionistas</h2>
      <p className="subtitulo">Encontre profissionais qualificados e entre em contato diretamente para agendar sua consulta.</p>
      
      <div className="consulta-grid">
        {lista.map((n) => (
          <article key={n.id} className="card nutricionista-card" aria-label={`Nutricionista ${n.nome}`}>
            <div className="img-placeholder avatar" aria-hidden>
              <span className="initials">{getInitials(n.nome)}</span>
            </div>
            <h3 className="nome">{n.nome}</h3>
            <p className="especialidade">{n.especialidade}</p>
            <p className="cidade">📍 {n.cidade}</p>
            <p className="telefone">📞 <a href={`tel:${n.telefone.replace(/\D/g, '')}`} aria-label={`Ligar para ${n.nome}`}>{n.telefone}</a></p>
            <p className="email">✉️ <a href={`mailto:${n.email}`} aria-label={`Enviar e-mail para ${n.nome}`}>{n.email}</a></p>
            <div className="contato-links">
              <a className="btn-primary" href={formatWhatsApp(n.telefone)} target="_blank" rel="noreferrer" aria-label={`Conversar no WhatsApp com ${n.nome}`}>WhatsApp</a>
              <a className="btn-outline" href={`mailto:${n.email}`} aria-label={`Enviar e-mail para ${n.nome}`}>E-mail</a>
              <a className="btn-primary" href={`tel:${n.telefone.replace(/\D/g, '')}`} aria-label={`Ligar para ${n.nome}`}>Ligar</a>
              <button type="button" className="btn-outline" onClick={() => handleDelete(n.id)} aria-label={`Remover ${n.nome}`}>Remover</button>
            </div>
          </article>
        ))}
      </div>

      <section className="consulta-form">
        <h3 className="titulo" style={{ fontSize: '1.5rem' }}>Cadastre seu contato</h3>
        <form className="form-contato" onSubmit={handleSubmit}>
          <input name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
          <input name="especialidade" placeholder="Especialidade (ex: Nutrição Esportiva)" value={form.especialidade} onChange={handleChange} />
          <input name="cidade" placeholder="Cidade/Estado (ex: São Paulo - SP)" value={form.cidade} onChange={handleChange} />
          <input name="telefone" placeholder="Telefone com DDD (ex: (11) 91234-5678)" value={form.telefone} onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
          <button type="submit">Adicionar</button>
          <small style={{ color: 'var(--text-secondary)' }}>Informe pelo menos nome e telefone ou e-mail.</small>
        </form>
      </section>
    </main>
  )
}

export default Consulta
