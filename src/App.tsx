import React, { useEffect, useRef } from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notification, setNotification] = React.useState<string>("");

  const timeOutReference = React.useRef(0)

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotification("Item adicionado ao carrinho")

    clearTimeout(timeOutReference.current)
    timeOutReference.current = setTimeout(() => {
      setNotification("")
    }, 2000);
    console.log(timeOutReference.current)
  }

  return (
    <div className="App">
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default App;
