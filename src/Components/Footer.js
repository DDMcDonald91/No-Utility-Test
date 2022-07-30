import Nav from 'react-bootstrap/Nav';

export default function Footer() {
  return (
        <>
        <style type="text/css">
        {`
          .nav-link {color: white }
          }
    `   }
        </style>
    <Nav fluid style={{backgroundColor: 'black', width: '100vw'}} className="justify-content-center nav" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="https://www.twitter.com/NoUtilityBelts" target="_blank" rel="noreferrer noopener">Twitter</Nav.Link>
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
