import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { NaoEcontrado } from "./NaoEcontrado";
import { Sobre } from "./Sobre";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="*" element={<NaoEcontrado/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
