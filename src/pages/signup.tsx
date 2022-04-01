import { Container } from "../components/Container";
import Main from "../components/Main";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import SignupCard from "../components/signup";

const Index = () => (
    <Container height="100vh">
        <Nav />
        <SignupCard />
        <Footer />
    </Container>
);

export default Index;
