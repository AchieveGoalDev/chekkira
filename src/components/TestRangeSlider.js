import React, { useState } from "react";

import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderMark,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";

const TestRangeSlider = () => {
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(4);

  const colors = {
    0: "orange",
    1: "pink",
    2: "blue",
    3: "green",
    4: "purple",
    5: "gray",
  };

  function handleRangeChange(e) {
    setMinLevel(e[0]);
    setMaxLevel(e[1]);
  }

  return (
    <RangeSlider
      h={"100px"}
      min={0}
      max={5}
      defaultValue={[0, 4]}
      step={1}
      w={"500px"}
      onChange={(e) => handleRangeChange(e)}
    >
      <RangeSliderMark value={0} fontSize={"sm"} fontWeight={"bold"}>
        <Box bgColor={"orange.100"} p={"5px"} borderRadius={"md"}>
          5級
        </Box>
      </RangeSliderMark>
      <RangeSliderMark value={1} fontSize={"sm"} fontWeight={"bold"}>
        <Box bgColor={"pink.100"} p={"5px"} borderRadius={"md"}>
          4級
        </Box>
      </RangeSliderMark>
      <RangeSliderMark value={2} fontSize={"sm"} fontWeight={"bold"}>
        <Box bgColor={"blue.100"} p={"5px"} borderRadius={"md"}>
          3級
        </Box>
      </RangeSliderMark>
      <RangeSliderMark value={3} fontSize={"sm"} fontWeight={"bold"}>
        <Box bgColor={"green.100"} p={"5px"} borderRadius={"md"}>
          準2級
        </Box>
      </RangeSliderMark>
      <RangeSliderMark value={4} fontSize={"sm"} fontWeight={"bold"}>
        <Box bgColor={"purple.100"} p={"5px"} borderRadius={"md"}>
          2級
        </Box>
      </RangeSliderMark>
      <RangeSliderMark
        value={5}
        fontSize={"sm"}
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
      >
        <Box bgColor={"gray.100"} p={"5px"} borderRadius={"md"}>
          準1級
        </Box>
      </RangeSliderMark>
      <RangeSliderTrack h={3}>
        <RangeSliderFilledTrack
          bgGradient={`linear(to-r, ${colors[minLevel]}.200, ${colors[maxLevel]}.200)`}
        />
      </RangeSliderTrack>
      <RangeSliderThumb
        h={5}
        w={5}
        index={0}
        bg={`${colors[minLevel]}.400`}
        onChange={setMinLevel}
      />
      <RangeSliderThumb
        h={5}
        w={5}
        index={1}
        bg={`${colors[maxLevel]}.400`}
        onChange={setMaxLevel}
      />
    </RangeSlider>
  );
};

export default TestRangeSlider;
