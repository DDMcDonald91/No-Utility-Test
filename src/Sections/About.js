import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import AccordionList from '../Components/AccordionList';

export default function About() {
  return (
    <Container fluid id="about-container">
          <Container>
            <h1 className='section-title white-titles'>
              About
            </h1>
            </Container>
        <Container style={{width: '65%'}} id='about-inner-container'>
            <Container style={{width: '100%', color: 'white'}}>
            <p>NO UTILITY BELTS is a free-to-mint project created by NFT enthusiasts Wout and D. McDonald. No Discord. No Grinding. And you guessed it.
              No Utility.
              Mint for free, flip for profit, or hold for the art. Click below for more specific info.
            </p>
            </Container>
                  <AccordionList />
      </Container>
    </Container>
  )
}
