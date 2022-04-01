import { Container } from "../../components/Container";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";

const Merchandise = () => {
  return (
    <Container height="100vh">
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
