import React from "react";
import { Heading } from "@chakra-ui/react";
import { DividerLink } from "./produtos";
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import { ProdutoDescricao } from "./ProdutoDescricao";
import { ProdutoAvaliacao } from "./ProdutoAvaliacao";
import { ProdutoCustomizado } from "./ProdutoCustomizado";

const Produto = () => {
  const { id: productId } = useParams<{ id: string }>();

  return (
    <div>
      <Heading as={"h1"} textAlign={"center"}>
        Produto: {productId}
      </Heading>
      <nav>
        <DividerLink>
          <NavLink to={""} end>
            Descrição
          </NavLink>
          <NavLink to={"avaliacao"}>Avaliação</NavLink>
          <NavLink to={"customizado"}>Customizar</NavLink>
        </DividerLink>
      </nav>

      
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export { Produto };
