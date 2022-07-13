import React from 'react'
import { GlobalContext } from './GlobalContext';


export const Produto = () => {

  const dados = React.useContext(GlobalContext)
  const { count, addCountOne } = dados

  return (
    <div>
      <button onClick={() => addCountOne()}>Adicionar</button>
      <br />
      Prouduto:{count}
      <br />
      status: Em estoque
    </div>
  )
}