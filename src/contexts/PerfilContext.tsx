import React, { createContext, useContext, useState, ReactNode } from 'react'

interface PerfilData {
  nome: string
  email: string
  telefone: string
  bio: string
  foto: string
  dataNascimento: string
  genero: string
  cidade: string
}

interface PerfilContextType {
  perfil: PerfilData
  updatePerfil: (dados: Partial<PerfilData>) => void
}

const defaultPerfil: PerfilData = {
  nome: 'Convidado',
  email: '',
  telefone: '',
  bio: 'Olá! Complete seu perfil para personalizar sua experiência.',
  foto: '',
  dataNascimento: '',
  genero: 'nao-informar',
  cidade: ''
}

const getAuthUser = (): { name: string; email: string } | null => {
  try {
    const raw = localStorage.getItem('authUser')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const loadPerfilInicial = (): PerfilData => {
  const auth = getAuthUser()
  if (!auth) return defaultPerfil
  const key = `perfilData:${auth.email.toLowerCase()}`
  try {
    const raw = localStorage.getItem(key)
    if (raw) return JSON.parse(raw)
  } catch {}
  // Se não existir, cria um perfil básico com nome e email do auth
  return {
    ...defaultPerfil,
    nome: auth.name,
    email: auth.email
  }
}

const PerfilContext = createContext<PerfilContextType | undefined>(undefined)

export const usePerfil = () => {
  const context = useContext(PerfilContext)
  if (!context) {
    throw new Error('usePerfil deve ser usado dentro de um PerfilProvider')
  }
  return context
}

interface PerfilProviderProps {
  children: ReactNode
}

export const PerfilProvider: React.FC<PerfilProviderProps> = ({ children }) => {
  const [perfil, setPerfil] = useState<PerfilData>(loadPerfilInicial)

  const updatePerfil = (dados: Partial<PerfilData>) => {
    setPerfil(prev => {
      const next = { ...prev, ...dados }
      try {
        const prevKey = prev.email ? `perfilData:${prev.email.toLowerCase()}` : null
        const nextKey = next.email ? `perfilData:${next.email.toLowerCase()}` : null
        if (prevKey && nextKey && prevKey !== nextKey) {
          localStorage.removeItem(prevKey)
        }
        if (nextKey) {
          localStorage.setItem(nextKey, JSON.stringify(next))
        }
      } catch {}
      return next
    })
  }

  return (
    <PerfilContext.Provider value={{ perfil, updatePerfil }}>
      {children}
    </PerfilContext.Provider>
  )
}
