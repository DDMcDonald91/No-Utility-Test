import Cards from '../Components/Cards.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dnik from '../Components/Images/dnik.png';
import wout from '../Components/Images/wout.png';

export default function Team() {
  return (
    <Container id='team-container' className='d-flex align-items-center justify-content-center' fluid>
      <Container>
      <Container>
        <h1 className='section-title'>Team</h1>  
        </Container>
        <Row id='team-inner-container' className='justify-content-center'>
            <Col sm={4} md={3}>
            <Cards
                className='team-cards'
                width='75%'
                color='white'
                address='https://www.twitter.com/wout_tgh'
                image={wout} 
                title='Wout' 
                text="Founder & Artist" 
                />
            </Col>
            <Col sm={4} md={3}>
            <Cards
                className='team-cards'
                width='75%'
                color='white'
                address='https://www.twitter.com/dmcdonald1991'
                image={dnik} 
                title='D. McDonald' 
                text="Developer" 
                />
            </Col>
        </Row>
    </Container>
    </Container>
  )
}
