import React from "react";
import { X } from "phosphor-react";

const App = () => {
  const [text, setText] = React.useState<string>("");
  const [message, setMessage] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setText(target.value);
  }

  function addMessage() {
    setMessage(() => {
      return text.length > 0 ? [...message, text] : [...message];
    });
    setText("");
    inputRef.current?.focus();
  }

  function removeMessage() {
    console.log("removeu");
    setMessage(message.filter((item,index,array) => {
      return array[index] !== message[index]
    }));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        ref={inputRef}
        name="texto"
        id="texto"
        placeholder="digite sua messagem"
        value={text}
        onChange={handleChange}
      />
      <button onClick={addMessage}>Adicionar tarefa</button>
      <h2>Tarefas</h2>
      {message.map((item, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center" }}>
          {item}
          <X style={{ cursor: "pointer" }} onClick={removeMessage} />
        </li>
      ))}
    </form>
  );
};

export default App;
