import {
  Container,
  Heading,
  Image,
  ListItem,
  ScaleFade,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Head } from "../../Components/Head";
import Foto from "../../img/Contato.jpg";
import { SectionCont } from "./style";

interface PropsContato {
  scale:boolean;
}

export const Contato = ({scale}: PropsContato) => {
  return (
    <Container maxWidth={"960px"}>
      <Head title="Contato" description="Página de contato" />
      <ScaleFade initialScale={0.8} in={scale}>
        <SectionCont>
          <Image src={Foto} alt="maquina de escrever" mb={2} />
          <div>
            <Heading mb={4}>Entre em contato</Heading>
            <UnorderedList spacing={1}>
              <ListItem>Kayke.simao@gmail.com</ListItem>
              <ListItem>(31)97865-1265</ListItem>
              <ListItem>Rua dos pensamentos 822</ListItem>
            </UnorderedList>
          </div>
        </SectionCont>

      </ScaleFade>
    </Container>
  );
};
