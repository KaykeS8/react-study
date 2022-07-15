import React from 'react'
import { GlobalContext } from './GlobalContext'

export const Produto = () => {
  const dados = React.useContext(GlobalContext)
  const { count, addProducts } = dados


  return (
    <div>
      <button onClick={() => addProducts()}>Adicionar produto</button>
      <p>Produto: {count}</p>
    </div>
  )
}
