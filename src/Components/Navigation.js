import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillTwitterCircle } from 'react-icons/ai'; //twitter
import Connection from './Connect.js';

export default function Navigation() {
  return (
    <Navbar style={{backgroundColor: 'black', top: '0', position: 'fixed', zIndex: '100', width: '100vw', padding: '10px 0px' }} variant='dark' expand="lg">
    <Container style={{width: '65%'}}>
      <Navbar.Brand className="section-title" href="#hero-container">No Utility Belts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#hero-container">Home</Nav.Link>
          <Nav.Link href="#about-container">About</Nav.Link>
          <Nav.Link href="#team-container">Team</Nav.Link>
          <NavDropdown title="Contract Info" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Contract</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">OpenSea</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Connection />
        <Nav.Link href="https://www.twitter.com/NoUtilityBelts" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle style={{fontSize: '1.7rem'}} /></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
