import Cards from '../Components/Cards.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background2 from '../Components/Images/background2.png';
import dnik from '../Components/Images/dnik.png';
import wout from '../Components/Images/wout.png';
import { Parallax } from 'react-parallax';

export default function Team() {
  return (
    <Parallax strength={1000} bgImage={background2} bgImageAlt="sample">
    <Container id='team-container' fluid>
      <Container>
        <h1 className='section-title'>Team</h1 >
            <h4>The team of NFT enthusiasts behind this project.  
              <br/>
              <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </h4>
        </Container>
        <Row id='team-inner-container'>
            <Col  md={6}>
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
            <Col md={6}>
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
    </Parallax>
  )
}
