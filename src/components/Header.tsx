import { Button, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { DividerNav } from "../pages/styles";

export const Header = () => {
  return (
    <Container maxWidth={"960px"} mt={10} mb={5}>
      <DividerNav>
        <Button>
          <NavLink className={"link"} to="/" end>
            Produtos
          </NavLink>
        </Button>
        <Button>
          <NavLink className={"link"} to="contato">
            Contato
          </NavLink>
        </Button>
      </DividerNav>
    </Container>
  );
};
