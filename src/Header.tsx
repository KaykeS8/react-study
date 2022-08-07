import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width={"100%"} bg={useColorModeValue('gray.300', 'gray.600')} p={3}>
      <Container
        maxW={"960px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading>Logo</Heading>
        <Stack direction={"row-reverse"} alignItems={"center"}>
          <Avatar src="https://www.github.com/kaykeS8.png" size={"md"} />
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
        </Stack>
      </Container>
    </Box>
  );
};
