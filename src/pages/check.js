import Head from "next/head";

import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";

import FunctionSelector from "../components/FunctionSelector";

export default function Check({ returnData, returnStatus }) {
  return (
    <>
      <Head>
        <title>Chekkira</title>
      </Head>
      {returnStatus ? (
        <pre>{JSON.stringify(returnStatus, null, 2)}</pre>
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

  let returnStatus = {
    initstatus: "initialized",
    pathstatus: "uninitialized",
    datapath: "uninitialized",
    datafiles: "uninitialized",
    localpath: "uninitialized",
  };

  const dataPath = path.join(process.cwd(), "public", "data", "ek");
  const localPath = fs.readdirSync(process.cwd(), (err, files) => {
    if (err) {
      return err;
    } else {
      return files;
    }
  });

  const parsedPaths = path.parse(process.cwd());
  //   const upperPaths = fs.readdirSync(
  //     path.join("..", process.cwd()),
  //     (err, files) => {
  //       if (err) {
  //         return err;
  //       } else {
  //         return files;
  //       }
  //     }
  //   );

  const lowerPaths = fs.readdirSync(
    path.join(process.cwd(), "pages"),
    (err, files) => {
      if (err) {
        return err;
      } else {
        return files;
      }
    }
  );

  //   const dataFiles = fs.readdirSync(dataPath, (err, files) => {
  //     if (err) {
  //       return err;
  //     } else {
  //       return files;
  //     }
  //   });

  returnStatus.datapath = dataPath;
  returnStatus.localpath = localPath;
  //   returnStatus.upperpaths = upperPaths;
  returnStatus.pagespaths = lowerPaths;
  returnStatus.parsedpaths = parsedPaths;
  //   returnStatus.datafiles = dataFiles;
  returnStatus.pathstatus = "ok";
  //   if (!dataPath) {
  //     returnStatus.pathstatus = "error";
  //   } else {
  //     returnStatus.pathstatus = dataPath;
  //   }

  //   const getJsonData = async (dataPath, dataFiles) => {
  //     let jsonObj = {};
  //     for (let i = 0; i < dataFiles.length; i++) {
  //       const objName = dataFiles[i].replace(".csv", "");
  //       jsonObj[objName] = await csv().fromFile(
  //         path.join(dataPath, dataFiles[i])
  //       );
  //     }
  //     return jsonObj;
  //   };

  //   let returnData = await getJsonData(dataPath, dataFiles);

  //   if (!returnData) {
  //     returnStatus = { status: "serverside error" };
  //   }

  return {
    props: {
      returnStatus,
    },
  };
}
