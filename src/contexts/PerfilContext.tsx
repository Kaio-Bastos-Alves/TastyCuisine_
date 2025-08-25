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
  nome: 'Maria Silva',
  email: 'maria.silva@email.com',
  telefone: '(11) 99999-9999',
  bio: 'Apaixonada por culinária saudável e receitas criativas. Sempre em busca de novos sabores!',
  foto: '',
  dataNascimento: '1990-05-15',
  genero: 'feminino',
  cidade: 'São Paulo, SP'
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
  const [perfil, setPerfil] = useState<PerfilData>(defaultPerfil)

  const updatePerfil = (dados: Partial<PerfilData>) => {
    setPerfil(prev => ({ ...prev, ...dados }))
  }

  return (
    <PerfilContext.Provider value={{ perfil, updatePerfil }}>
      {children}
    </PerfilContext.Provider>
  )
}