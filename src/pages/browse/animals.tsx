import axios from "axios";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";
import { PageDescription } from "../../components/PageDescription";

const Animals = () => {
  return (
    <Container height="100vh">
      <PageDescription description="browse animals" />
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
