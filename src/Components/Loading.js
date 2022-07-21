import {Container, Spinner} from 'react-bootstrap'

export default function Loading() {
  return (
    <Container>
    <Spinner style={{marginTop: '5rem'}} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Container>
  )
}
