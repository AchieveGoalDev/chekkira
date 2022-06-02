import Head from "next/head";

import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";

import FunctionSelector from "../components/FunctionSelector";

export default function Check({ returnData }) {
  return (
    <>
      <Head>
        <title>Chekkira</title>
      </Head>
      {returnData.status ? (
        <Heading>{returnData.status}</Heading>
      ) : (
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
              <FunctionSelector words={returnData} />
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const fs = require("fs");
  const path = require("path");
  const csv = require("csvtojson");

  let searchedPaths = [];

  const dataPath = path.join(process.cwd(), "public", "data", "ek");
  const dataFiles = fs.readdirSync(dataPath, (err, files) => {
    if (err) {
      return err;
    } else {
      return files;
    }
  });

  const getJsonData = async (dataPath, dataFiles) => {
    let jsonObj = {};
    for (let i = 0; i < dataFiles.length; i++) {
      const objName = dataFiles[i].replace(".csv", "");
      jsonObj[objName] = await csv().fromFile(
        path.join(dataPath, dataFiles[i])
      );
    }
    return jsonObj;
  };

  let returnData = await getJsonData(dataPath, dataFiles);

  if (!returnData) {
    returnData = { status: "serverside error" };
  }

  return {
    props: {
      returnData,
    },
  };
}
