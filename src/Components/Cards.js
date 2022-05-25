import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { FaTwitter } from 'react-icons/fa';
import './../App.css';

export default function Cards(props) {
  return (
    <>
  <Card style={{ width: `${props.width}`, margin: '10px auto', border: 'white 5px solid', backgroundColor: `${props.color}` }}>
  <Card.Img id="card-image" variant="top" src={props.image} />
  <Card.Body>
  </Card.Body>
</Card>
    <Container>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    <a href={props.address} target="_blank" rel="noreferrer noopener"><FaTwitter /></a>
    </Container>
    </>
  )
}
// style={{backgroundColor: '#a2d6d4'}}