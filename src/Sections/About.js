import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from '../Components/DisplayCard.js';
import sample2 from '../Components/Images/sample2.png';

export default function About() {
  return (
    <Container fluid id="about-container">
          <Container>
            <h1 className='section-title'>About</h1>
            <h4>Introducing the No Utility Belt NFT.</h4>
            <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </Container>
        <Container fluid id='about-outer-container'>
          <Row id='about-inner-container'>
            <Col sm={4}>
               <DisplayCard img={sample2} />
            </Col>
            <Col sm={8}>
                <Container id='about-text-container'>
                  <Container id='about-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>          
                  </Container>
                </Container>
            </Col>
        </Row>
      </Container>
    </Container>
  )
}
