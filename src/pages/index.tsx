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

//Need to have custom.d.ts open in another tab for these to not have an error for some reason
import doge from '../images/doge.jpg'
import nelson from '../images/nelson.jpg'

const Index = () => (
  <Container height="100vh">
    <Nav />
    <Main
    alignItems={"center"}
    width={"90%"}
    height={"100vh"}>
    <Hero />
    
    <Introduction introtext={"Welcome to the best pet store that has ever existed on the face of planet Earth"} />
    <Introduction introtext={"If you leave now, you may never feel real love in your entire short lifetime, so stick around ;)"} />

    <IntroImage alttext={"Doge"} imagepath={doge} />

    <Text
      alignItems={"flex-start"}
      justifyContent="center"
      height="25vh"
      bgClip="text"
      fontSize="2vw"
      fontWeight='bold'
      margin="50px"
      color={useColorModeValue("gray.900", "gray.100")}>
      {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem nulla, euismod id lobortis nec, egestas id libero. Nullam faucibus, arcu sit amet rutrum feugiat, ipsum est consequat urna, sit amet lacinia tortor magna nec mauris. Nullam at nisl bibendum tellus posuere bibendum. Nunc a ex ut nibh dapibus porta. Donec et pretium quam. Nunc ac lectus tincidunt, luctus leo et, vehicula augue. Proin iaculis ex in lectus molestie, ac rhoncus nisl tristique. "}
    </Text>

    <IntroImage alttext={"Nelson"} imagepath={nelson} />
    </Main> 
    <Footer />
  </Container>
);

export default Index;
