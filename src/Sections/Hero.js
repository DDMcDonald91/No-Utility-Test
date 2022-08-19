import { Container } from 'react-bootstrap';

export default function Hero() {
  return (
      <Container fluid id="hero-container" className='d-flex align-items-center justify-content-center'>
        <Container id='hero-title-container'>
          <h1 id="hero-title">No Utility Belts</h1>
        </Container>
      </Container>
  )
}