import { Container } from "../components/Container";
import Main from "../components/Main";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import SignupCard from "../components/signup";
import { PageDescription } from "../components/PageDescription";

const Index = () => (
  <Container height="100vh">
    <PageDescription description="register" />
    <Nav />
    <Main
      alignItems={"center"}
      justifyContent="center"
      width={"75%"}
      height={"100vh"}
    >
      <SignupCard />
    </Main>
    <Footer />
  </Container>
);

export default Index;
