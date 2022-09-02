import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Contato } from "./pages/Contato/Contato";
import { PageNotFound } from "./pages/PageNotFound";
import { Produtos } from "./pages/Produtos";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos scale={true} />} />
            <Route path="contato" element={<Contato scale={true} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

//https://ranekapi.origamid.dev/json/api/
//https://ranekapi.origamid.dev/json/api/produto/notebook
