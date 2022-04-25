import { Container } from "../components/Container";
import Main from "../components/Main";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { AdoptionForm } from "../components/adoptionForm";
import { PageDescription } from "../components/PageDescription";

const Index = () => (
  <Container height="100vh">
    <PageDescription description="adopt animal" />
    <Nav />
    <Main alignItems={"flex-start"} width={"75%"} height={"100vh"}>
      <AdoptionForm></AdoptionForm>
    </Main>
    <Footer />
  </Container>
);

export default Index;
