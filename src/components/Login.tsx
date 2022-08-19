import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/kjh");
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        bg={useColorModeValue("white", "gray.700")}
        padding={5}
        borderRadius={"md"}
        boxShadow={"xl"}
      >
        <Heading>Create Account</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type={"email"} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type={"password"} />
        </FormControl>
        <Button colorScheme={"blue"} onClick={handleClick}>
          Enviar
        </Button>
      </Stack>
    </Flex>
  );
}
