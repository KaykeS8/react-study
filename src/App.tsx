import React from 'react';
import { useLocalStorage } from './useLovalStorage';

const App = () => {

  const [produto, setProduto] = useLocalStorage('Produto', '')

  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setProduto(currentTarget.innerText)
  }

  return (
    <div>
      <h2>Produto preferido: {produto}</h2>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App