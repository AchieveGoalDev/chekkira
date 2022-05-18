import { Flex, Box, Spacer } from "@chakra-ui/react";

import FunctionSelector from "../src/components/FunctionSelector";

function App() {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="blue.100"
      height="100vh"
      width="100%"
    >
      {/* <Flex width="100%" height="20vh">
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
          <FunctionSelector />
        </Box>
      </Flex> */}
      <Box></Box>
    </Flex>
  );
}

export default App;
