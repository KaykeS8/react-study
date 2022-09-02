import React from "react";
import { Container, Image, ScaleFade } from "@chakra-ui/react";
import { Head } from "../Components/Head";
import {Grid} from './styles';

interface propsProducts {
  descricao: string;
  fotos: {
    titulo: string;
    src: string;
  }[];
  id: string;
  nome: string;
  preco: string;
}
interface propsScale {
  scale: boolean;
}

export const Produtos = ({ scale }: propsScale) => {
  const [products, setProducts] = React.useState<any[]>([]);
  const URL = "https://ranekapi.origamid.dev/json/api/produto";

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((date) => setProducts(date));
  }, []);

  if (products === null) return null;
  return (
    <div>
      <Head title="Produtos" description="Página de produtos" />
      <Container maxW={"960px"}>
        <ScaleFade initialScale={0.8} in={scale}>
          <Grid>
            {products.map(({ id, fotos, nome }: propsProducts) => (
              <div key={id} className="product">
                <Image src={fotos[0].src} w={"300px"} />
                <h1>{nome}</h1>
              </div>
            ))}
          </Grid>
        </ScaleFade>
      </Container>
    </div>
  );
};
