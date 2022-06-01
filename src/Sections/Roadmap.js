import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Roadmap() {
  return (
    <Container fluid id='roadmap-container'>
      <Container>
        <h2 className='section-title white-titles'>Roadmap</h2>
        <h4 className='white-titles'>Flip it. Flip it good.</h4>
        <div style={{backgroundColor: 'white', height: '2px', width: '15%', margin: '5px auto'}}></div>
      </Container>
    </Container>
  )
}
