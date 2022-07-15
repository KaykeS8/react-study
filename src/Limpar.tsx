import React from 'react'
import { GlobalContext } from './GlobalContext'

export const Limpar = () => {
  const dados = React.useContext(GlobalContext)
  
  if (dados === null) return null
  const { cleanProducts } = dados
  return <button onClick={cleanProducts}>limpar</button>
}