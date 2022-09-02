import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login/Login";
import { NaoEcontrado } from "./components/NaoEcontrado";
import { Sobre } from "./components/Sobre";
import { Produto } from "./components/Produtos/Produto";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NaoEcontrado />} />
        <Route path="produto/:id/*" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
