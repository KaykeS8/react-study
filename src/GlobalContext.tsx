import React, { useEffect } from 'react'

interface IChildrenContext {
  children: React.ReactNode
}

interface IValueContext {
  dateProducts: {
    nome: string
    preco: string
    descricao:string
    fotos: {
      titulo: string
      src: string
    }[]
  }
  cleanProducts: () => void
}

export const GlobalContext = React.createContext<IValueContext | null>(null)

export const GlobalStorage = ({ children }: IChildrenContext) => {
  const [dateProducts, setDateProducts] = React.useState<any>(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(response => response.json())
      .then(dados => setDateProducts(dados))
  }, [])

  const cleanProducts = () => {
    setDateProducts(null)
  }

  return (
    <GlobalContext.Provider value={{ dateProducts, cleanProducts }}>
      {children}
    </GlobalContext.Provider>
  )
}