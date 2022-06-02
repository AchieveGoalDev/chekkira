import React, { useEffect } from "react";
import { useState } from "react";

import _ from "lodash";

import {
  Input,
  Radio,
  RadioGroup,
  Flex,
  Heading,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const WordInput = ({ words }) => {
  const [checkWord, setCheckWord] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("EK5");
  const [isIn, setIsIn] = useState(false);
  const [wordObj, setWordObj] = useState("");

  const isInDatabase = (checkWord, words, selectedLevel) => {
    const isIn = false;
    words[selectedLevel].forEach((list) => {
      if (list.word.toString().toLowerCase() == checkWord.toLowerCase()) {
        isIn = true;
        wordObj = list;
      }
    });
    console.log(isIn);
    return { isIn: isIn, wordObj: wordObj };
  };

  useEffect(() => {
    console.log("Checking...");
    console.log(selectedLevel);
    console.log(checkWord);
    const checkObj = isInDatabase(checkWord, words, selectedLevel);
    setIsIn(checkObj.isIn);
    setWordObj(checkObj.wordObj);
  }, [checkWord, selectedLevel]);

  return (
    <form>
      <Heading>Check word here:</Heading>
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
          onChange={(e) => setCheckWord(e.target.value)}
        />
        {isIn && (
          <>
            <CheckCircleIcon ms={3} color="green.400" w={6} h={6} />
          </>
        )}
      </Flex>
      {isIn && wordObj && (
        <Box>
          <Flex mt={3}>
            <Text fontWeight={"bold"}>As: </Text>
            <Text ms={2}>{wordObj.pos}</Text>
          </Flex>
        </Box>
      )}
    </form>
  );
};

export default WordInput;
