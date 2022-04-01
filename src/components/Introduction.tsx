import { Text } from "@chakra-ui/react";

import React from "react";

interface IntroductionProps {
    justifyContent?: string;
    alignItems?: string;
    height?: string;
    bgGradient?: string;
    bgClip?: string;
    fontSize?: string;
    fontWeight?: string;
    introtext?: string;
  }

export const Introduction: React.FC<IntroductionProps> = ({ introtext }) => {
    return (
        <Text
            justifyContent="center"
            alignItems={"flex-start"}
            height="25vh"
            bgGradient="linear(to-l, #FF0000, #00FF00)"
            bgClip="text"
            fontSize="2vw"
            fontWeight='bold'>
            {introtext}
        </Text>
    );
  };

  Introduction.defaultProps = {
    introtext: "Placeholder intro text"
  };