import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function DisplayCard(props) {
  return (
    <Card style={{ width: '100%' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>No Utility Belts</Card.Title>
    <Card.Text>
      A FREE project for the NFT community that we all love. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Supply: 1111</ListGroupItem>
    <ListGroupItem>Price: FREE + Gas</ListGroupItem>
    <ListGroupItem>Availability: Public</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Twitter</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  )
}
