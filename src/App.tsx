import React from "react";
import { Input } from "./form/Input";
import { useForm } from './Hooks/useForm';


const App = () => {

  const cep = useForm('cep')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(cep)
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input id="cep" label="CEP" type="text" placeholder='00000-000' {...cep}/>
      <button>Enviar</button>
    </form>
  );
};

export default App;