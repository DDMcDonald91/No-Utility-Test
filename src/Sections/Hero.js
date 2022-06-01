import Container from 'react-bootstrap/Container';
import utilitybelthero from '../Components/Images/utilitybelthero.PNG';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax strength={200} bgImage={utilitybelthero} bgImageAlt="sample">
      <Container id="hero-container">
        <h1 id="hero-title" className='section-title'>No Utility Belts</h1>
      </Container>
    </Parallax>
  )
}