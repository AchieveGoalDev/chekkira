import React from "react";

import { Text } from "@chakra-ui/react";

const WordDisplay = ({ word }) => {
  return (
    <Text>
      <pre>{word}</pre>
    </Text>
  );
};

export default WordDisplay;
