import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center
} from "@chakra-ui/react";
import React from "react";

export const NaoEcontrado = () => {
  return (
      <Center height={'100vh'}>
      <Alert status="error" height={'100vh'} justifyContent={'center'} flexDirection={'column'}>
        <AlertIcon />
        <AlertTitle>Página nao encontrada</AlertTitle>
        <AlertDescription>Error 404</AlertDescription>
      </Alert>
      </Center>
  );
};
