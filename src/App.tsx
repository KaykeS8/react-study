import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NaoEcontrado } from "./components/NaoEcontrado";
import { Sobre } from "./components/Sobre";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NaoEcontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
