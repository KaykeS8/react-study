import { Heading } from "@chakra-ui/react";
import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

const Produto = () => {
  const { id: productId } = useParams<{ id: string }>();

  return (
    <div>
      <Heading as={"h1"} textAlign={"center"}>
        Produto: {productId}
      </Heading>
      <nav>
        <NavLink to={""} end>
          Descrição
        </NavLink>
        <NavLink to={"avaliacao"}>Avaliação</NavLink>
        <NavLink to={"customizado"}>Customizar</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export { Produto };
