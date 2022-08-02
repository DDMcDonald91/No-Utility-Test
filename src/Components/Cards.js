import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { TiSocialTwitterCircular } from 'react-icons/ti'; // twitter
import './../App.css';

export default function Cards(props) {
  return (
    <>
  <Card style={{ width: `${props.width}`, margin: '10px auto', border: 'none', backgroundColor: `${props.color}`}}>
  <Card.Img id="card-image" variant="top" src={props.image} />
  <Card.Body>
  </Card.Body>
</Card>
    <Container>
      <h4 className='team-title'>{props.title}</h4>
      <p>{props.text}</p>
    <a href={props.address} target="_blank" rel="noreferrer noopener"><TiSocialTwitterCircular style={{fontSize: '3rem', color: '#0d6efd'}} /></a>
    </Container>
    </>
  )
}
// style={{backgroundColor: '#a2d6d4'}}