import soroslogo from "./soros-logo.png"
import {Container, Nav, Navbar} from 'react-bootstrap';

import './navbar.styles.scss'

function NavbarComponent() {
  return (

    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/Soros">
          <img 
          width="70"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          src={soroslogo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Soros/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/Soros/about">About</Nav.Link>
            <Nav.Link href="/Soros/resources">Resources</Nav.Link>
            <Nav.Link className='safety-report-link' href="/Soros/form">Submit Safety Report</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

