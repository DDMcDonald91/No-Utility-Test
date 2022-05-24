import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTwitter } from 'react-icons/fa'; //twitter



export default function Navigation() {
  return (
    <Navbar style={{backgroundColor: 'black', top: '0', position: 'fixed', zIndex: '100', width: '100vw', padding: '10px 0px' }} variant='dark' expand="md">
    <Container>
      <Navbar.Brand className="section-title" href="#home">No Utility Belt NFT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <NavDropdown title="Contract Info" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Contract</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">OpenSea</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav.Link href="#"><FaTwitter /></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
