import Cards from '../Components/Cards.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dnik from '../Components/Images/dnik.png';
import wout from '../Components/Images/wout.png';

export default function Team() {
  return (
    <Container id='team-container' fluid>
      <Container>
        <h1 className='section-title'>Team</h1 >
            <h4>The team of NFT enthusiasts behind this project.  
              <br/>
              <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </h4>
        </Container>
        <Row id='team-inner-container'>
            <Col md={6}>
            <Cards
                className='team-cards'
                width='75%'
                color='#a2d6d4'
                address='https://www.twitter.com/wout_tgh'
                image={wout} 
                title='The Founder/Artist: Wout' 
                text="NFT Artist | Professional Graphic Designer" 
                />
            </Col>
            <Col md={6}>
            <Cards
                className='team-cards'
                width='75%'
                color='#e2c6fe'
                address='https://www.twitter.com/dmcdonald1991'
                image={dnik} 
                title='The Dev: D. McDonald' 
                text="Front End Javascript Developer | Web3 Developer" 
                />
            </Col>
        </Row>
    </Container>
  )
}
