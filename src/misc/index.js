import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";

import { listWords } from "../src/graphql/queries";
import { createWord, updateWord, deleteWord } from "../src/graphql/mutations";

import FunctionSelector from "../src/components/FunctionSelector";

import { API, graphqlOperation, withSSRContext } from "aws-amplify";

import { useState, useEffect } from "react";

export default function Home() {
  const [loadState, setLoadState] = useState("loading");
  const [fetchedData, setFetchedData] = useState([]);

  //data.data.listwords.items
  const getData = async () => {
    const data = await API.graphql(graphqlOperation(listWords));
    const words = data.data.listWords.items;
    setFetchedData(words);
  };

  useEffect(() => {
    getData();
    setLoadState("loaded");
  }, []);

  return (
    <Flex
      flexDirection="column"
      backgroundColor="blue.100"
      height="100vh"
      width="100%"
    >
      <Flex width="100%" height="20vh">
        <Spacer></Spacer>
      </Flex>
      <Flex width="100%" flexDirection="column" justifyContent={"center"}>
        <Box
          backgroundColor="white"
          mx="auto"
          borderRadius="4"
          boxShadow={"md"}
          padding={4}
        >
          {loadState === "loading" ? (
            <Heading>Loading...</Heading>
          ) : (
            <>
              <FunctionSelector words={fetchedData} />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
