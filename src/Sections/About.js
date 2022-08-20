import Container from 'react-bootstrap/Container';
import AccordionList from '../Components/AccordionList';

export default function About() {
  return (
    <Container fluid id="about-container" className='d-flex align-items-center justify-content-center'>
      <Container>
          <div id='about-title-container'>
            <h1 style={{width: 'auto', padding: '0px', margin: '0px'}} id='about-title' className='section-title white-titles'>
              About
            </h1>
          </div>
        <Container id='about-inner-container'>
            <Container style={{width: '100%', color: 'white'}}>
            <p>NO UTILITY BELTS is a free-to-mint project created by NFT enthusiasts Wout and D. McDonald. No Discord. No Grinding. And you guessed it.
              No Utility.
              Mint for free, flip for profit, or hold for the art. Click below for more specific info.
            </p>
            </Container>
                  <AccordionList />
        </Container>
      </Container>
    </Container>
  )
}
