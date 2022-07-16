import React from "react";
import { useLocalStorage } from "./useLovalStorage";
import { useFetch } from "./useFetch";

type Tproduto = {
  nome: string;
  id: string;
};

const App = () => {
  const [produto, setProduto] = useLocalStorage("Produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json, response } = await request("https://ranekapi.origamid.dev/json/api/produto/")
    }
    fetchData()
  }, []);


  const handleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    setProduto(currentTarget.innerText);
  };


  if (error) return <p>{error}</p>
  if (loading) return <p>...Carregando</p>
  if (data)
    return (
      <div>
        <h2>Produto preferido: {produto}</h2>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {data.map((produto: Tproduto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null
};

export default App;
