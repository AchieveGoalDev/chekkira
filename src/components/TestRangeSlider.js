import React, { useState } from "react";

import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderMark,
  RangeSliderThumb,
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
      h={"85px"}
      min={0}
      max={5}
      defaultValue={[0, 4]}
      step={1}
      w={"500px"}
      onChangeEnd={(e) => handleRangeChange(e)}
    >
      <RangeSliderMark value={0} fontSize={"sm"} fontWeight={"bold"}>
        5級
      </RangeSliderMark>
      <RangeSliderMark value={1} fontSize={"sm"} fontWeight={"bold"}>
        4級
      </RangeSliderMark>
      <RangeSliderMark value={2} fontSize={"sm"} fontWeight={"bold"}>
        3級
      </RangeSliderMark>
      <RangeSliderMark value={3} fontSize={"sm"} fontWeight={"bold"}>
        準2級
      </RangeSliderMark>
      <RangeSliderMark value={4} fontSize={"sm"} fontWeight={"bold"}>
        2級
      </RangeSliderMark>
      <RangeSliderMark
        value={5}
        fontSize={"sm"}
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
      >
        準1級
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
