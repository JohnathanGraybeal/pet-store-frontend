import { Stack, StackProps } from "@chakra-ui/react";

import React from "react";

function Main(props: StackProps) {
  return (
    <Stack height="100%" spacing="1.5rem" width="100%" px="1rem" {...props}>
      {props.children}
    </Stack>
  );
}
Main.defaultProps = {
  spacing: "1.5rem",

  px: "1rem",
};

export default Main;
