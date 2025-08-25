import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FavoritosContextType {
  favoritos: Set<number>
  toggleFavorito: (id: number) => void
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined)

export const useFavoritos = () => {
  const context = useContext(FavoritosContext)
  if (!context) {
    throw new Error('useFavoritos deve ser usado dentro de um FavoritosProvider')
  }
  return context
}

interface FavoritosProviderProps {
  children: ReactNode
}

export const FavoritosProvider: React.FC<FavoritosProviderProps> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set())

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => {
      const novo = new Set(prev)
      if (novo.has(id)) {
        novo.delete(id)
      } else {
        novo.add(id)
      }
      return novo
    })
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}