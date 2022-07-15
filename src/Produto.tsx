import React from 'react'
import { GlobalContext } from './GlobalContext'

export const Produto = () => {
  const dados = React.useContext(GlobalContext)

  if (dados?.dateProducts === null) return null
  return (
    <div>
      <h2>Produto: {dados?.dateProducts.nome}</h2>
      <p>{dados?.dateProducts.descricao}</p>
      <img src={dados?.dateProducts.fotos[0].src} alt={dados?.dateProducts.fotos[0].titulo} width={250} />
    </div>
  )
}
