import React from 'react'

interface IGlobalChildren {
  children: React.ReactNode
}

interface GlobalContextInterface {
  count: number
  addCountOne: () => void
}

export const GlobalContext = React.createContext({} as GlobalContextInterface)

export const GlobalStorage = ({ children }: IGlobalChildren) => {
  const [count, setCount] = React.useState<number>(0)

  function addCountOne() {
    setCount(count + 1)
  }

  return <GlobalContext.Provider value={{ addCountOne, count }}>{children}</GlobalContext.Provider>
}
