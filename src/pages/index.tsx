import { useColorModeValue } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { IntroImage } from "../components/IntroImage";
import Main from "../components/Main";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { Text } from "@chakra-ui/react";
import { PageDescription } from "../components/PageDescription";

import doge from "../images/doge.jpg";
import nelson from "../images/nelson.jpg";

const Index = () => (
  <Container height="100vh">
    <PageDescription description="home" />
    <Nav />
    <Main alignItems={"center"} width={"90%"} height={"100vh"}>
      <Hero />
      <IntroImage alttext="Doge" imagepath={doge} blururl={doge}/>
      <Introduction
        introtext={
          "Welcome to the best pet store that has ever existed on the face of planet Earth"
        }
      />
      <Introduction
        introtext={
          "If you leave now, you may never feel real love in your entire short lifetime, so stick around ;)"
        }
      />

      <Text
        alignItems={"flex-start"}
        justifyContent="center"
        height="25vh"
        bgClip="text"
        fontSize="2vw"
        fontWeight="bold"
        margin="100px"
        color={useColorModeValue("gray.900", "gray.100")}
      >
        {
          "Our pet store is the best place to adopt an animal. Whether you are looking for something simple or exotic we have you covered. Looking for a shark? We will work something out. As long as you don’t ask where your specimens come from, we have no issues! If you insist to know. You can meet one of our local representatives at 1165 Shakespeare Ave, New York City, NY 10452-3904. A representative is available every 3rd Tuesday of every month from 4:15 pm to 5:40 pm. Have a great day and hope to see you again!"
        }
      </Text>
      <IntroImage alttext="Nelson" imagepath={nelson} blururl={nelson}/>
    </Main>
    <Footer />
  </Container>
);

export default Index;
