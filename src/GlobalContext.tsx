import React from 'react'

interface ChildrenContext {
  children: React.ReactNode
}

interface IvalueContext {
  count: number
  addProducts: () => void
}

export const GlobalContext = React.createContext({} as IvalueContext)

export const GlobalStorage = ({ children }: ChildrenContext) => {
  const [count, setCount] = React.useState<number>(0)

  function addProducts() {
    setCount(count + 1)
  }

  return <GlobalContext.Provider value={{ addProducts, count }}>{children}</GlobalContext.Provider>
}