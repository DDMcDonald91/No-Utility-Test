import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordionList from '../Components/AccordionList';
import DisplayCard from '../Components/DisplayCard.js';
import sample2 from '../Components/Images/sample2.png';

export default function About() {
  return (
    <Container fluid id="about-container">
          <Container>
            <h1 className='section-title white-titles'>About</h1>
            <h4 className='white-titles'>Introducing the No Utility Belt NFT.</h4>
            <div style={{backgroundColor: 'white', height: '2px', width: '15%', margin: '5px auto'}}></div>
            </Container>
        <Container fluid id='about-outer-container'>
            <Col>
                <Container id='about-text-container'>
                  <AccordionList />
                </Container>
            </Col>
      </Container>
    </Container>
  )
}
