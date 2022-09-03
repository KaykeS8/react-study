import React from "react";
import {
  Box,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Head } from "../../Components/Head";

export const PageNotFound = () => {
  return (
    <Box>
      <Head title="error" description="Página não encontrada"/>
      <Center height={"50vh"}>
        <Alert
          status="error"
          flexDirection={"column"}
          w={"auto"}
          p={5}
          borderRadius={"md"}
          boxShadow={"lg"}
        >
          <AlertIcon />
          <AlertTitle>Page Not Found</AlertTitle>
          <AlertDescription>
            Error-404 The page you requested could not be found
          </AlertDescription>
        </Alert>
      </Center>
    </Box>
  );
};
