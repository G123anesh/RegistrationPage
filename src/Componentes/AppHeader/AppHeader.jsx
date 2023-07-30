import { Container, Navbar } from "react-bootstrap";

const AppHeader = () => {
  let cod = { marginBottom: "20px" };
  return (
    <header style={cod}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Registration and Login Page</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};
export default AppHeader;