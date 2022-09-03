import React from "react";
import {
  Badge,
  Box,
  Container,
  Heading,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Grid } from "./styles";

interface productsTyping {
  descricao: string;
  fotos: {
    titulo: string;
    src: string;
  }[];
  nome: string;
  preco: string;
}
interface PropsProduct {
  scale: boolean;
}

export const Product = ({ scale }: PropsProduct) => {
  const { product } = useParams<{ product: string }>();
  const [dateProducts, setDateProducts] = React.useState<null | productsTyping>(
    null
  );
  const URL = `https://ranekapi.origamid.dev/json/api/produto/${product}`;

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((date) => setDateProducts(date));
  }, []);

  return (
    <Container maxW={"960px"}>
      <ScaleFade initialScale={0.8} in={scale}>
        <Grid>
          <Image src={dateProducts?.fotos[0].src} />
          <Box>
            <Heading as={"h2"}>{dateProducts?.nome}</Heading>
            <Badge colorScheme={"green"} fontSize={"16px"} my={4}>
              R${dateProducts?.preco}
            </Badge>
            <p>{dateProducts?.descricao}</p>
          </Box>
        </Grid>
      </ScaleFade>
    </Container>
  );
};
