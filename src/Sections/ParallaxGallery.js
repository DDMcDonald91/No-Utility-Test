import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import gallery2 from '../Components/Images/gallery2.jpg';

export default function ParallaxGallery() {
  return (
    <Parallax strength={200} bgImage={gallery2} bgImageAlt="gallery" style={{height: '30rem', backgroundSize: 'cover'}}>

    </Parallax>
  )
}
