import { Container, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Container maxWidth={'960px'}>
      <Text textAlign={'center'} color={"gray.500"}>Todos os direitos reservados &copy;</Text>
    </Container>
  )
}