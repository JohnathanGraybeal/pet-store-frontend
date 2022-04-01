import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

import React from "react";

interface ContainerProps {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  bg?: string;
  color?: string;
  height: string;
}

export const Container: React.FC<ContainerProps> = (props: any) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      overflow={"auto"}
      w="auto"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

Container.defaultProps = {
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
};
