import Container from 'react-bootstrap/Container';
import sample7 from '../Components/Images/sample7.JPG';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax strength={300} bgImage={sample7} bgImageAlt="sample">
      <Container id="hero-container">
      <h1 id='hero-title' className='section-title'>No Utility Belts</h1>
      </Container>
    </Parallax>
  )
}


/* 
Former Hero Code :
<Container id="hero-container">
    <img
      id="hero-img"
      className="d-block w-100"
      src={sample2}
      alt="hero_img"
    />
    </Container>
*/