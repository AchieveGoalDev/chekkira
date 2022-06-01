import React from "react";

import {
  Heading,
  Divider,
  Flex,
  RadioGroup,
  Radio,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

const WordFinder = ({ words }) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [listByLevel, setListByLevel] = useState([]);
  const [searchWord, setSearchWord] = useState(null);
  const [searchWordList, setSearchWordList] = useState(null);

  useEffect(() => {
    parseLevel(selectedLevel);
  }, [selectedLevel]);

  useEffect(() => {
    listByLevel && findWords(listByLevel, searchWord);
  }, [searchWord]);

  const parseLevel = (level) => {
    const objList = words.filter((word) => word.level === level);
    setListByLevel(objList);
  };

  const findWords = (wordList, searchWord) => {
    setSearchWordList([]);
    const searchList = wordList.map((word) => {
      console.log(word);
      console.log(searchWord);
      console.log(word.word.toLowerCase().includes(searchWord.toLowerCase()));
      if (word.word.toLowerCase().includes(searchWord.toLowerCase())) {
        return word;
      }
    });
    setSearchWordList(searchList);
  };

  return (
    <>
      <Heading>Find Words Here:</Heading>
      <Divider my={3} />
      <Flex>
        <RadioGroup onChange={setSelectedLevel} value={selectedLevel}>
          <Flex display="block" mb={3}>
            <Flex
              backgroundColor="orange.50"
              display="inline-block"
              padding="1px"
              borderRadius=".5px"
              me={2}
            >
              <Radio defaultChecked value="EK5" me={2}>
                英検5級
              </Radio>
            </Flex>
            <Flex
              backgroundColor="pink.50"
              display="inline-block"
              padding="1px"
              borderRadius=".5px"
              me={2}
            >
              <Radio value="EK4" me={2}>
                英検4級
              </Radio>
            </Flex>
            <Flex
              backgroundColor="blue.50"
              display="inline-block"
              padding="1px"
              borderRadius=".5px"
              me={2}
            >
              <Radio value="EK3" me={2}>
                英検3級
              </Radio>
            </Flex>
          </Flex>
          <Flex
            backgroundColor="purple.50"
            display="inline-block"
            padding="1px"
            borderRadius=".5px"
            me={2}
          >
            <Radio value="EKJ2" me={2}>
              英検準2級
            </Radio>
          </Flex>
          <Flex
            backgroundColor="green.50"
            display="inline-block"
            padding="1px"
            borderRadius=".5px"
            me={2}
          >
            <Radio value="EK2" me={2}>
              英検2級
            </Radio>
          </Flex>
          <Flex
            backgroundColor="gray.50"
            display="inline-block"
            padding="1px"
            borderRadius=".5px"
            me={2}
          >
            <Radio value="EKJ1" me={2}>
              英検準1級
            </Radio>
          </Flex>
        </RadioGroup>
      </Flex>
      <Flex alignItems={"center"}>
        <Input
          type="text"
          width="90%"
          placeholder="Icecream"
          mt={3}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </Flex>
      <Flex display="block">
        {searchWordList &&
          searchWordList.map((word) => {
            if (word) {
              return (
                <Box
                  m={4}
                  key={word && word.id}
                  borderRadius="3"
                  border="1px solid"
                  dropShadow={"md"}
                >
                  <Flex m={2}>
                    <Text
                      fontWeight={"bold"}
                      borderRight="1px solid black"
                      px={2}
                    >
                      {word && word.pos}
                    </Text>
                    <Text ms={2}>{word && word.word}</Text>
                  </Flex>
                </Box>
              );
            }
          })}
      </Flex>
    </>
  );
};

export default WordFinder;
