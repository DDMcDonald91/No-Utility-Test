import Cards from '../Components/Cards.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dnik from '../Components/Images/dnik.png';
import wout from '../Components/Images/wout.png';

export default function Team() {
  return (
    <Container fluid style={{backgroundColor: 'darkred', height: 'auto', margin: '15px 0px auto', padding: '15px 0px',  borderTop: 'black solid 2px', borderBottom: 'black solid 2px', color: 'black'}}>
        <h2>Meet Our Team</h2>
            <p>The team of NFT enthusiasts behind this project.  
              <br/>
              <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </p>
        <Row>
            <Col>
            <Cards
                width='65%'
                image={wout} 
                title='The Artist: Wout' 
                text="NFT Artist | Professional Graphic Designer" 
                firstDetail="Twitter" 
                secondDetail="Lynkfyire"                     
                thirdDetail="Foundation" 
                />
            </Col>
            <Col>
            <Cards
                width='65%'
                image={dnik} 
                title='The Dev: D. McDonald' 
                text="Front End Javascript Developer | Web3 Developer" 
                firstDetail="Twitter" 
                secondDetail="LinkedIn"                     
                thirdDetail="GitHub" 
                />
            </Col>
        </Row>
    </Container>
  )
}
