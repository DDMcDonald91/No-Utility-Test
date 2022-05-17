import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../Components/Cards.js';
import sample1 from '../Components/Images/sample1.jpeg';
import sample2 from '../Components/Images/sample2.png';

export default function About() {
  return (
    <Container style={{marginTop: '10px', marginBottom: '10px'}}>
        <Row>
            <h2>Introducing the No Utility Belt NFT.</h2>
            <p>The NFT project that has no utility.  
              <br/> <strong>Literally none.</strong>
              <div style={{backgroundColor: 'black', height: '2px', width: '25%', margin: '15px auto'}}></div>
            </p>
            <ul style={{listStyleType: 'none'}}>
              <li><h4>No Grinding.</h4></li>
              <li><h4>No Discord.</h4></li>
              <li><h4>No Stress.</h4></li>
            </ul>
            <Col>
               <Cards
                    width='65%'
                    image={sample1} 
                    title='Features' 
                    text="These are the features of the Utility Belt NFT." 
                    firstDetail="Free Mint + Gas" 
                    secondDetail="Low Supply."                     
                    thirdDetail="Doxxed Team" 
                    />
            </Col>
            <Col>
                <Cards 
                    width='65%'
                    image={sample2} 
                    title='Details' 
                    text="These are the details of the No Utility Belt NFT." 
                    firstDetail="1111 Supply." 
                    secondDetail="Public Mint." 
                    thirdDetail="No Utility." 
                    />
            </Col>
        </Row>
    </Container>
  )
}
