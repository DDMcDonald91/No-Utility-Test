import {useState} from 'react';
import {Button, Modal, Container} from 'react-bootstrap';

export default function MintModal(props) {
    const [lgShow, setLgShow] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setLgShow(true)}>
        Mint
        </Button>
  
        <Modal
          show={lgShow}
          onHide={() => setLgShow(false)}
          size='lg'
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton style={{backgroundColor: 'white', color: 'black', border: 'white'}}>
            <Modal.Title id="example-modal-sizes-title-lg" className="section-title">
              No Utility Belts Mint Portal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <p>
            Mint Cost:<br/> Free + Gas.
            <br/>
            <div style={{height: '2px', width: '15%', backgroundColor: 'white', margin: '5px auto'}}></div>
            Mint Limit:<br/> 1 per wallet.
            </p>
            <br/>
            <p>Remaining NFTs Available:<br/> {props.count}/1111</p>
            <Container style={{width: 'auto'}}>
            <p>{props.isLoading}</p>
            <p>{props.message}</p>
            <p style={{wordWrap: 'break-word'}}>Your Transaction Hash is: <span style={{textDecoration: 'underline'}}>{props.transaction}</span></p>
            </Container>
            <Button variant="primary" onClick={props.mint} id='mintBtn' className={props.disabled}>Mint a NFT</Button>
          </Modal.Body>
        </Modal>
      </>
    );
}
