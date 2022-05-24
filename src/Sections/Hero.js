import Container from 'react-bootstrap/Container';
import sample2 from '../Components/Images/sample2.png';
import { Parallax } from 'react-parallax';

export default function Hero() {
  return (
    <Parallax strength={300} bgImage={sample2} bgImageAlt="sample">
    <Container id="hero-container">
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