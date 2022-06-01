import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";

import WordInput from "./WordInput";
import WordFinder from "./WordFinder";

export default function FunctionSelector({ words }) {
  // const tests = {...Object.keys(words)};
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        {/* <pre>{JSON.stringify(words, null, 2)}</pre> */}
        <TabList>
          <Tab>Check</Tab>
          <Tab>Find</Tab>
          <Tab>Add</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <WordInput words={words} />
          </TabPanel>
          <TabPanel>
            {/* <WordFinder words={words, tests} /> */}
            <Heading>Coming Soon!</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Coming Soon!</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
