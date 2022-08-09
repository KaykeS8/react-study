import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Heading } from "./style";
import '../../App.css'

export const Header = () => {
  return (
    <Heading>
      <Container>
        <h1>Logo</h1>
        <nav>
          <NavLink to={"/"} end>Home</NavLink> | <NavLink to={"/sobre"}>Sobre</NavLink>
        </nav>
      </Container>
    </Heading>
  );
};
