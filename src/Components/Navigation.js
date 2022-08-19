import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TiSocialTwitterCircular } from 'react-icons/ti' //twitter
import Mint from './Mint.js';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navigation() {
  return (
    <Navbar style={{backgroundColor: 'black', top: '0', position: 'fixed', zIndex: '100', width: '100vw', padding: '5px 0px' }} variant='dark' expand="lg">
    <Container id='nav-container'>
      <Navbar.Brand className="section-title" href="#hero-container">No Utility Belts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#hero-container">Home</Nav.Link>
          <Nav.Link href="#about-container">About</Nav.Link>
          <Nav.Link href="#team-container">Team</Nav.Link>
          <NavDropdown title="Contract Info" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Contract</NavDropdown.Item>
            <NavDropdown.Item href="/">OpenSea</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Mint Portal
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><NavDropdown.Item><Mint /></NavDropdown.Item></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav.Link>
          <Nav.Link href="https://www.twitter.com/NoUtilityBelts" target="_blank" rel="noreferrer noopener"><TiSocialTwitterCircular style={{fontSize: '2rem', color: '#0d6efd'}} /></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
