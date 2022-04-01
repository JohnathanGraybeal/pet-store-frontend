import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import React from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";
import { SocialButton } from "./SocialButton";

interface FooterProps {
  as?: string;
  py?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      position={"fixed"}
      left={0}
      bottom={0}
      right={0}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100%"
    >
      <Container
        as={Stack}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href="/">Home</Link>
          <Link href={"/browse/animals"}>Animals</Link>
          <Link href={"/browse/merchandise"}>Merchandise</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Logo />
          <Text textAlign="left">© 2022 PetStore. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
Footer.defaultProps = {
  py: "8rem",
};
