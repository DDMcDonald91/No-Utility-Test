import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import AccordionList from '../Components/AccordionList';

export default function FAQs() {
  return (
    <Container fluid id='faqs-container'>
      <Container>
        <h2 className='section-title'>Roadmap</h2>
        <h4>Flip it. Flip it good.  
              <br/>
              <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </h4>
      </Container>
        <Col id='faqs-inner-container'>
          <AccordionList />
        </Col>
    </Container>
  )
}
