import { Container } from 'react-bootstrap';
import hero from '../Components/Images/hero.png';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax bgImage={hero} strength={100} >
      <Container fluid id="hero-container">
        <Container id='hero-title-container'>
        <h1 id="hero-title">No Utility Belts</h1>
        </Container>
      </Container>
  </Parallax>
  )
}