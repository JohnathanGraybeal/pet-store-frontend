import { Container } from "../../components/Container";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";
import { CheckoutForm } from "../../components/CheckoutForm";
import { PageDescription } from "../../components/PageDescription";
import { Center } from "@chakra-ui/react";

const Checkout = () => (
  <Container height="100vh">
    <PageDescription description="checkout" />
    <Nav />
    <Main alignItems={"center"} width={"75%"} height={"100vh"}>
        <div  style={{ margin: 50 }} >
        <CheckoutForm></CheckoutForm>
        </div>
    </Main>
  </Container>
);

export default Checkout;
