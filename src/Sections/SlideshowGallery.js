import { Container, Carousel } from 'react-bootstrap';
import sample7 from '../Components/Images/sample7.JPG'
import sample6 from '../Components/Images/sample6.JPG'
import sample5 from '../Components/Images/sample5.JPG'
import sample4 from '../Components/Images/sample4.JPG'
import sample3 from '../Components/Images/sample3.JPG'

function SlideshowGallery() {
  return (
    <Container fluid style={{ padding: 0 }}>
        <Carousel fade>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={sample5}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={sample4}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={sample3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={sample6}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={sample7}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </Container>
  )
}

export default SlideshowGallery