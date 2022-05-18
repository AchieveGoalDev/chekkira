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

import csvTest from "../util/csvImport";

const FunctionSelector = ({ words }) => {
  csvTest();

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
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
            <WordFinder words={words} />
          </TabPanel>
          <TabPanel>
            <Heading>Nothing here yet!</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default FunctionSelector;
