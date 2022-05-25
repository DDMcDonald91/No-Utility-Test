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
            <Col md={5}>
               <DisplayCard width='100%' img={sample2} />
            </Col>
            <Col md={7}>
                <Container id='about-text-container'>
                  <Container id='about-text'>
                    <p>The No Utility Belt NFT project is primarily a art project created by NFT enthusiasts Wout and D. McDonald. The goal for this project is to give back to the NFT community in a small way. Lately in the market, we've seen so many people face difficulties in many different forms. Everything from rugpulls, to scams that drain your wallet and even Discord channels being hacked. All of this and much more from projects that promise the world and more. 
                    </p>
                    <br/>
                    <p>So in the spirit of giving back to the NFT space, we're delivering a project on the Ethereum blockchain that's FREE for people to mint. We encourage flipping your utility belt into a small profit or holding for the art. This project doesn't have any IRL benefits or anything for holding.</p>    
                  </Container>
                </Container>
            </Col>
        </Row>
      </Container>
    </Container>
  )
}
