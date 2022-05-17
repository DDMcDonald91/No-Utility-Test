import Nav from 'react-bootstrap/Nav';

export default function Footer() {
  return (
        <>
    <Nav fluid style={{backgroundColor: 'black'}} className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Twitter</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">OpenSea</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contract</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
  )
}
