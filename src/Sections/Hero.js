import Container from 'react-bootstrap/Container';
import hero2 from '../Components/Images/hero2.jpg';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax strength={200} bgImage={hero2} bgImageAlt="sample">
      <Container id="hero-container">

      </Container>
    </Parallax>
  )
}

// <h1 id="hero-title" className='section-title'>No Utility Belts</h1>