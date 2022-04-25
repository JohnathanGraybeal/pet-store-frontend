import { Container } from "../../components/Container";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";
import { PageDescription } from "../../components/PageDescription";

const Merchandise = () => {
  return (
    <Container height="100vh">
      <PageDescription description="browse merchandise" />
      <Nav />
      <Main
        direction={"row"}
        alignItems={"flex-start"}
        width={"75%"}
        height={"100vh"}
      >
        <Page fetchPath="/merchandise/all" />
      </Main>
    </Container>
  );
};

export default Merchandise;
