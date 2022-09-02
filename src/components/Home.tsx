import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  const [livros, setLivros] = React.useState("Livro")

  return (
    <div>
      <Link to={"produto/notebook"}>Notebook</Link>
      <Link to={"produto/smartphone"}>Smartphone</Link>
      <Link to={`produto/${livros}`}>Book</Link>
    </div>
  );
};
