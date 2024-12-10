import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              IFfeiras
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#feiras">Feiras</Nav.Link>
                <Nav.Link href="#clientes">Clientes</Nav.Link>
                <Nav.Link href="#propriedades">Propriedades</Nav.Link>
                <Nav.Link href="#propriedades">Cultivos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
