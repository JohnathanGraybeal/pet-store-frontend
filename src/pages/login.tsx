import { Container } from "../components/Container";
import Main from "../components/Main";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import App from "../components/Login";
import { PageDescription } from "../components/PageDescription";

const Index = () => (
  <Container height="100vh">
    <PageDescription description="login" />
    <Nav />
    <App />
    <Footer />
  </Container>
);

export default Index;
