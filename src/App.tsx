import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom'
import { FavoritosProvider } from './contexts/FavoritosContext'
import { PerfilProvider } from './contexts/PerfilContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import Contato from './pages/Contato'
import Receitas from './pages/Receitas'
import Perfil from './pages/Perfil'
import Sobre from './pages/Sobre'
import PorIngredientes from './pages/PorIngredientes'
import Consulta from './pages/Consulta'
import Restaurantes from './pages/Restaurantes'
import './styles/perfil.css'

// Tipos básicos de usuário
type User = { name: string; email: string }

type RegisterPayload = {
  name: string
  email: string
  password: string
  telefone: string
  cidade: string
  dataNascimento: string
  genero: string
}

// Utilitários para persistência simples no localStorage
const getStoredUsers = (): Array<{ name: string; email: string; password: string }> => {
  try {
    return JSON.parse(localStorage.getItem('authUsers') || '[]')
  } catch {
    return []
  }
}

const setStoredUsers = (users: Array<{ name: string; email: string; password: string }>) => {
  localStorage.setItem('authUsers', JSON.stringify(users))
}

const ensurePerfilData = (user: User) => {
  const key = `perfilData:${user.email.toLowerCase()}`
  const exists = localStorage.getItem(key)
  if (!exists) {
    const perfilData = {
      nome: user.name,
      email: user.email,
      telefone: '',
      bio: 'Olá! Acabei de chegar ao Tasty Cuisine. 🚀',
      foto: '',
      dataNascimento: '',
      genero: 'nao-informar',
      cidade: ''
    }
    localStorage.setItem(key, JSON.stringify(perfilData))
  }
}

// Barra superior com usuário logado e botão sair
const UserBar: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    onLogout()
    navigate('/login', { replace: true })
  }
  return (
    <div style={{ background: '#2E7D32', color: '#ffffff', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
      <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>Bem-vindo(a), <strong style={{ color: '#A5D6A7' }}>{user.name}</strong></div>
      <button onClick={handleLogout} style={{ background: '#ffffff', color: '#2E7D32', border: '1px solid #E0E0E0', padding: '0.5rem 1rem', borderRadius: 12, cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.25s ease' }}>Sair</button>
    </div>
  )
}

// Tela de Login
const Login: React.FC<{ onLogin: (email: string, password: string) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Se já estiver autenticado, redireciona para a Home
    if (localStorage.getItem('authUser')) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      onLogin(email, password)
      navigate('/', { replace: true })
    } catch (err: any) {
      setError(err?.message || 'Erro ao entrar. Verifique suas credenciais.')
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 160px)', background: '#F1F8E9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div style={{ width: '100%', maxWidth: 460, background: '#ffffff', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem 1rem', background: '#2E7D32', color: '#fff' }}>
          <h2 style={{ margin: 0, textAlign: 'center', fontFamily: 'Merriweather, serif', fontSize: '1.5rem' }}>Entrar</h2>
        </div>
        <div style={{ padding: '1.25rem 1rem' }}>
          {error && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.5rem 0.75rem', borderRadius: 8, marginBottom: '0.75rem' }}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '0.75rem' }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>E-mail</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="voce@email.com" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Senha</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={4} placeholder="••••••••" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
            </div>
            <button type="submit" style={{ width: '100%', padding: '0.7rem', borderRadius: 10, border: 'none', background: '#ff6b35', color: '#fff', cursor: 'pointer', fontWeight: 700, letterSpacing: 0.2 }}>Entrar</button>
          </form>
          <p style={{ marginTop: '0.75rem', textAlign: 'center', color: '#6b7280' }}>
            Não tem conta? <Link to="/cadastro" style={{ color: '#ff6b35', fontWeight: 700 }}>Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

// Tela de Cadastro
const Cadastro: React.FC<{ onRegister: (data: RegisterPayload) => void }> = ({ onRegister }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('nao-informar')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      onRegister({ name: name.trim(), email: email.trim(), password, telefone, cidade, dataNascimento, genero })
      navigate('/', { replace: true })
    } catch (err: any) {
      setError(err?.message || 'Erro ao cadastrar. Tente novamente.')
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 160px)', background: '#F1F8E9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div style={{ width: '100%', maxWidth: 560, background: '#ffffff', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1rem', background: '#2a9d8f', color: '#fff' }}>
          <h2 style={{ margin: 0, textAlign: 'center' }}>Cadastro</h2>
        </div>
        <div style={{ padding: '1.25rem 1rem' }}>
          {error && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.5rem 0.75rem', borderRadius: 8, marginBottom: '0.75rem' }}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Nome</label>
                <input value={name} onChange={e => setName(e.target.value)} required minLength={2} placeholder="Seu nome" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>E-mail</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="voce@email.com" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Senha</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={4} placeholder="Crie uma senha" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Telefone</label>
                <input type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="(00) 00000-0000" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Cidade</label>
                <input value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Sua cidade" style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Data de Nascimento</label>
                <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, color: '#374151' }}>Gênero</label>
                <select value={genero} onChange={e => setGenero(e.target.value)} style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: 10, border: '1px solid #d1d5db', outline: 'none', background: '#fff' }}>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                  <option value="nao-informar">Prefiro não informar</option>
                </select>
              </div>
            </div>
            <button type="submit" style={{ marginTop: '0.9rem', width: '100%', padding: '0.7rem', borderRadius: 10, border: 'none', background: '#2a9d8f', color: '#fff', cursor: 'pointer', fontWeight: 700, letterSpacing: 0.2 }}>Cadastrar</button>
          </form>
          <p style={{ marginTop: '0.75rem', textAlign: 'center', color: '#6b7280' }}>
            Já tem conta? <Link to="/login" style={{ color: '#2a9d8f', fontWeight: 700 }}>Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  const [authUser, setAuthUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('authUser')
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  // Função de login simples com validação local
  const login = (email: string, password: string) => {
    const users = getStoredUsers()
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!found) {
      throw new Error('Credenciais inválidas')
    }
    const user: User = { name: found.name, email: found.email }
    localStorage.setItem('authUser', JSON.stringify(user))
    ensurePerfilData(user)
    setAuthUser(user)
  }

  // Função de cadastro com persistência local e criação do perfil
  const register = (data: RegisterPayload) => {
    const { name, email, password, telefone, cidade, dataNascimento, genero } = data
    if (!name) throw new Error('Informe o nome')
    const users = getStoredUsers()
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('E-mail já cadastrado')
    }
    const next = [...users, { name, email, password }]
    setStoredUsers(next)

    const user: User = { name, email }

    // cria/atualiza dados de perfil do usuário
    const perfilKey = `perfilData:${email.toLowerCase()}`
    const perfilData = {
      nome: name,
      email,
      telefone: telefone || '',
      bio: 'Olá! Acabei de chegar ao Tasty Cuisine. 🚀',
      foto: '',
      dataNascimento: dataNascimento || '',
      genero: genero || 'nao-informar',
      cidade: cidade || ''
    }
    localStorage.setItem(perfilKey, JSON.stringify(perfilData))

    localStorage.setItem('authUser', JSON.stringify(user))
    setAuthUser(user)
  }

  // Logout
  const logout = () => {
    localStorage.removeItem('authUser')
    setAuthUser(null)
  }

  // Guardião de rotas protegidas
  const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!authUser) {
      return <Navigate to="/login" replace />
    }
    return <>{children}</>
  }

  return (
    <FavoritosProvider>
      <PerfilProvider key={authUser?.email || 'guest'}>
        <Router>
          <div className="App">
            <div className="top-bars">
              {authUser && <UserBar user={authUser} onLogout={logout} />}
              <Header />
            </div>
            <Routes>
              {/* Rotas públicas */}
              <Route path="/login" element={<Login onLogin={login} />} />
              <Route path="/cadastro" element={<Cadastro onRegister={register} />} />

              {/* Rotas protegidas */}
              <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/publicar" element={<RequireAuth><Publicar /></RequireAuth>} />
              <Route path="/contato" element={<RequireAuth><Contato /></RequireAuth>} />
              <Route path="/receitas" element={<RequireAuth><Receitas /></RequireAuth>} />
              <Route path="/perfil" element={<RequireAuth><Perfil /></RequireAuth>} />
              <Route path="/por-ingredientes" element={<RequireAuth><PorIngredientes /></RequireAuth>} />
              <Route path="/dicas-saudaveis" element={<RequireAuth><div>Dicas Saudáveis - Em desenvolvimento</div></RequireAuth>} />
              <Route path="/chefes" element={<RequireAuth><div>Chefes - Em desenvolvimento</div></RequireAuth>} />
              <Route path="/restaurantes" element={<RequireAuth><Restaurantes /></RequireAuth>} />
              <Route path="/consulta" element={<RequireAuth><Consulta /></RequireAuth>} />
              <Route path="/sobre" element={<RequireAuth><Sobre /></RequireAuth>} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to={authUser ? '/' : '/login'} replace />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PerfilProvider>
    </FavoritosProvider>
  )
}

export default App
