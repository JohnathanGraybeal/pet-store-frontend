import { Flex, Heading } from "@chakra-ui/react";

import * as React from "react";

interface HeroProps {
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  bgGradient?: string;
  bgClip?: string;
  title?: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <Flex
      paddingTop={100}
      h="100%"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  );
};

Hero.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  title: "Pet Store",
};
