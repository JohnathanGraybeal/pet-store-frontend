import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

interface LinkProps {
  href: string;
}
export const Link: React.FC<LinkProps> = (props) => (
  <NextLink passHref {...props}>
    <ChakraLink
      px={4}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {props.children}
    </ChakraLink>
  </NextLink>
);
