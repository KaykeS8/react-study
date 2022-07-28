import React from "react";
import { Input } from "./form/Input";
import { useForm } from './Hooks/useForm';


const App = () => {

  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log({
        cep: cep.value,
        email: email.value,
        nome: nome.value
      })
    } else {
      console.log("Errorrrr")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="nome" label="Nome" type="text" placeholder='Digite seu nome' {...nome} />
      <Input id="cep" label="CEP" type="text" placeholder='00000-000' {...cep} />
      <Input id="cep" label="Email" type="email" placeholder='Digite seu E-mail' {...email} />
      {email.error || cep.error || nome.error ? <button disabled>Enviar</button> : <button>Enviar</button>}
    </form>
  );
};

export default App;