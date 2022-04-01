import { Container } from "../../components/Container";
import Main from "../../components/Main";
import { Nav } from "../../components/Nav";
import { Page } from "../../components/Page";
import { CheckoutForm } from "../../components/CheckoutForm";

const Checkout = () => (
    <Container height="100vh">
        <Nav />
        <Main
            alignItems={"flex-start"}
            width={"75%"}
            height={"100vh"}>
            <CheckoutForm></CheckoutForm>
        </Main>
    </Container>
);

export default Checkout;