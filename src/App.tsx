import { ComputerTower } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

const App = () => {

  const [carrinho, setCarrinho] = useState(0)
  const [notification, setNotification] = useState<string | undefined>(undefined)

  const notificationRef = useRef<number>()

  function handleClick() {
    setCarrinho(carrinho + 1)
    setNotification('Item adicionado ao carrinho')
    clearInterval(notificationRef.current)
    notificationRef.current = setTimeout(() => {
      setNotification(undefined)
    }, 2000)
    console.log(notificationRef.current)
  }

  return (
    <div className="App">
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar carrinho</button>
      {carrinho ? <p>Total de Produtos:{carrinho}</p> : undefined}
    </div>
  );
};

export default App;
