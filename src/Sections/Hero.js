import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import sample1 from '../Components/Images/sample1.jpeg';
import sample2 from '../Components/Images/sample2.png';
import image3 from '../Components/Images/image3.jpg';


export default function Hero() {
  return (
    <Container fluid style={{height: 'auto', padding: '0px'}}>
    <img
      id="hero-img"
      className="d-block w-100"
      src={sample2}
      alt="hero_img"
    />
    </Container>
  )
}

/* Carousel
<Carousel fluid>
  <Carousel.Item>
    <img
      style={{height: '100vh'}}
      id="hero-image"
      className="d-block w-100"
      src={sample1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: '100vh'}}
      id="hero-image"
      className="d-block w-100"
      src={sample2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: '100vh'}}
      id="hero-image"
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
*/