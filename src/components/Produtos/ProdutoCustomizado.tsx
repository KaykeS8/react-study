import { Center, Box, Heading, Text, Badge, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

export const ProdutoCustomizado = () => {
  const {id:notebook} = useParams<{id:string}>();
  return (
    <div>
      <Center h={"70vh"}>
        <Box bgColor={"white.700"} padding={10} width={'430px'} display={"flex"} borderRadius={"base"} boxShadow={"2xl"} justifyContent={"center"} flexDirection={"column"} gap={4}>
          <Flex alignItems={'baseline'} gap={4}>
          <Heading as={'h2'} size={"md"}>Customizar {notebook}</Heading>
          <Badge colorScheme={'pink'}>Exclusivo</Badge>
          </Flex>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur at possimus velit cupiditate vel non quo ea unde totam ab ad blanditiis vitae delectus, assumenda illo placeat? Ad, quo quaerat?</Text>
          <Button colorScheme={'twitter'}>Customizar</Button>
        </Box>
      </Center>
    </div>
  );
};
