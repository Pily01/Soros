import soroslogo from "./soros-logo.png"
import {Container, Nav, Navbar} from 'react-bootstrap';


//justify-content="flex-end" and between wont work for navbar > am not sure how to move them to right-most part of screen
function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">
          <img 
          width="70"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          src={soroslogo}/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Soros/form" >Submit Safety Report</Nav.Link>
            <Nav.Link href="/Soros/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;