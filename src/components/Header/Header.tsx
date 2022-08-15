import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import "../../App.css";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.300", "gray.700")} p={3}>
      <Container
        display={"flex"}
        alignItems={"center"}
        maxW={"960px"}
        justifyContent={"space-between"}
      >
        <Heading>Logo</Heading>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <NavLink to={'/'} end>Home</NavLink>
          <NavLink to={'sobre'}>Sobre</NavLink>
          <NavLink to={'login'}>Login</NavLink>
        </Stack>
      </Container>
    </Box>
  );
};
