import Head from "next/head";

import { Flex, Spacer, Box } from "@chakra-ui/react";

import FunctionSelector from "../components/FunctionSelector";

import EK5 from "../data/ek/ek5";
import EK4 from "../data/ek/ek4";
import EK3 from "../data/ek/ek3";
import EKJ2 from "../data/ek/ekj2";
import EK2 from "../data/ek/ek2";
import EKJ1 from "../data/ek/ekj1";

export default function Home({ returnData }) {
  const data = {
    EK5,
    EK4,
    EK3,
    EKJ2,
    EK2,
    EKJ1,
  };

  console.log(data);

  return (
    <>
      <Head>
        <title>AEL - ユーザーログイン</title>
      </Head>

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
            <FunctionSelector words={data} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

// export async function getServerSideProps() {
//   const fs = require("fs");
//   const path = require("path");
//   const csv = require("csvtojson");

//   let searchedPaths = [];

//   const dataPath = path.join(process.cwd(), "public", "data", "ek");
//   const dataFiles = fs.readdirSync(dataPath, (err, files) => {
//     if (err) {
//       return err;
//     } else {
//       return files;
//     }
//   });

//   const getJsonData = async (dataPath, dataFiles) => {
//     let jsonObj = {};
//     let returnArray = [];
//     for (let i = 0; i < dataFiles.length; i++) {
//       const objName = dataFiles[i].replace(".csv", "");
//       jsonObj[objName] = await csv().fromFile(
//         path.join(dataPath, dataFiles[i])
//       );
//       returnArray.push(jsonObj);
//     }
//     return returnArray;
//   };

//   let returnData = await getJsonData(dataPath, dataFiles);

//   console.log(path.join(dataPath, dataFiles[0]));

//   if (!returnData[0]) {
//     returnData = "error";
//   }

//   return {
//     props: {
//       returnData,
//     },
//   };
// }
