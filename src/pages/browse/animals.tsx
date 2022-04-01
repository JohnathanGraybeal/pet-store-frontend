import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";

const Animals = () => {
  return (
    <Container height="100vh">
      <Nav />
      <Main
        direction={"row"}
        alignItems={"flex-start"}
        width={"75%"}
        height={"100vh"}
      >
        <Page fetchPath="/animal/all" />
      </Main>
    </Container>
  );
};

export default Animals;
