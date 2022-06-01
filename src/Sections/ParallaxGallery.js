import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import gallerygrid from '../Components/Images/gallerygrid.PNG';

export default function ParallaxGallery() {
  return (
    <Parallax strength={200} bgImage={gallerygrid} bgImageAlt="gallery">
      <Container style={{ height: '30rem '}}></Container>
    </Parallax>
  )
}
