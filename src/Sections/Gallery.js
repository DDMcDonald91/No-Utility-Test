import Carousel from 'react-bootstrap/Carousel';
import sample4 from '../Components/Images/sample4.JPG';
import sample5 from '../Components/Images/sample5.JPG';
import sample6 from '../Components/Images/sample6.JPG';

export default function Gallery() {
  return (
    <Carousel fade fluid controls={false}>
      <Carousel.Item>
        <img
          className="d-block galleryImg"
          src={sample4}
          alt="First slide"
          responsive
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 galleryImg"
          src={sample5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 galleryImg"
          src={sample6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
