import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NaoEcontrado } from "./components/NaoEcontrado";
import { Sobre } from "./components/Sobre";
import { Produto } from "./components/Produtos/Produto";
import { ProdutoAvaliacao } from "./components/ProdutoAvaliacao";
import { ProdutoCustomizado } from "./components/ProdutoCustomizado";
import { ProdutoDescricao } from "./components/ProdutoDescricao";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NaoEcontrado />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
