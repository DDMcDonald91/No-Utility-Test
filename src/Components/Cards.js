import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './../App.css';

export default function Cards(props) {
  return (
    <Card style={{ width: `${props.width}`, margin: '5px auto', border: 'black 2px solid' }}>
  <Card.Img id="card-image" variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.firstDetail}</ListGroupItem>
    <ListGroupItem>{props.secondDetail}</ListGroupItem>
    <ListGroupItem>{props.thirdDetail}</ListGroupItem>
  </ListGroup>
</Card>
  )
}
