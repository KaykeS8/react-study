import React from "react";
import { useFetch } from "./useFetch";

interface FormTypes {
  id: string;
  label: string;
  type: string;
}

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const App = () => {
  const [form, setForm] = React.useState<any>({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [sendForm, setSendoForm] = React.useState<string | null>(null);
  const { request } = useFetch();

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    async function fetchPost() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      setSendoForm(() => {
        return response?.status === 200 ? "Formulario enviado" : "Ocorreu um erro";
      });
      setTimeout(() => {
        setSendoForm(null);
      }, 2000);
    }
    fetchPost();
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }: FormTypes) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            onChange={handleChange}
            value={form[id]}
            name={id}
          />
        </div>
      ))}
      {sendForm && <p>{sendForm}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
