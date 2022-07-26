import { Radio } from "./form/Radio"
import React from "react";
import { Input } from './form/Input';
import { Select } from "./form/Select";
import { CheckBox } from "./form/CheckBox";


const App = () => {

  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState<string | null>(null)
  const [produtos, setProdutos] = React.useState("");
  const [cores, setCores] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [skills, setSkills] = React.useState<string[]>([])

  function validateCep(value: string) {
    if (value.length === 0) {
      setError("Preencha um valor")
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP valido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }: React.FocusEvent<HTMLInputElement>) {
    validateCep(target.value)
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviado')
    } else {
      console.log('Nao enviado')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={cep} id="cep" label="CEP" onChange={handleChange} placeholder="00000-00" onBlur={handleBlur} />
      <Select options={['smartphone', 'notebook', 'tablet']} setValue={setProdutos} value={produtos} />
      <Radio name="sexo" options={['masculino', 'femenino']} setValue={setSex} title="Gênero" value={sex} />
      <Radio name="cores" options={['gray', 'purple', 'blue', 'black']} setValue={setCores} title="Cores" value={cores} />
      <CheckBox options={['front-end', 'back-end', 'fullstack']} setValue={setSkills} value={skills} title="Habilidades"/>
    </form>
  );
};

export default App;
