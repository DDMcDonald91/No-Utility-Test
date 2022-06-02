import Container from 'react-bootstrap/Container';
import utilitybelthero from '../Components/Images/utilitybelthero.PNG';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax strength={100} bgImage={utilitybelthero} bgImageAlt="sample">
      <Container id="hero-container">
        <Container id='hero-title-container'>
        <h1 id="hero-title">No Utility Belts</h1>
        </Container>
      </Container>
    </Parallax>
  )
}