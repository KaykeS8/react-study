import React from "react";
import { Input } from "./Form/Input";
import { Radio } from "./Form/Radio";
import { Select } from './Form/Selects'
import { CheckBox } from "./Form/CheckBox";

const estilo = {
  display: "block",
  marginTop: "10px",
  padding: "2px 4px",
  cursor: "pointer"
}

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [select, setSelect] = React.useState('');
  const [genere, setGenere] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [skills, setSkills] = React.useState<string[]>([])
  const [termos, setTermos] = React.useState<string[]>([])

  return (
    <form>
      <Input label="Nome" type="text" id="nome" value={nome} setValue={setNome} required />
      <Input label="Email" type="email" id="email" value={email} setValue={setEmail} />
      <Select options={['smartphone', 'notebook', 'carro']} value={select} setValue={setSelect} />
      <h2>Gênero</h2>
      <Radio options={['masculino', 'femenino']} value={genere} setValue={setGenere} name="genero" />
      <h2>Cores</h2>
      <Radio options={['black', 'gray', 'white', 'blue', 'red']} value={cor} setValue={setCor} name="cor" />
      <h2>Habilidades</h2>
      <CheckBox options={['front-end', 'back-end', 'fullstack']} value={skills} setValue={setSkills} />

      <h2>Termos</h2>
      <CheckBox options={['li e aceito os termos']} value={termos} setValue={setTermos} />
      {termos.length > 0 ? <p>Termos aceitos</p> : null}
      <button style={estilo}>Enviar</button>
    </form>
  );
};

export default App;
