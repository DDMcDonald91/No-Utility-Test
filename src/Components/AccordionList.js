import '../App.css';
import { Accordion } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AccordionList() {
  return (
    <>
      <style type="text/css">
        {`
          .accordion-button {
            background: #1D1D1E;
            color: white;
          }
          .accordion-button:not(.collapsed) {
            background: #1D1D1E;
            color: white;
            outline: none;
            box-shadow: none;
          }
        
          .accordion-item {
            background: white;
            color: white;
          }
          
          .accordion-body {
            background: #1D1D1E;
          }
    `   }
      </style>

    <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Price</Accordion.Header>
    <Accordion.Body>
      No Utility Belts will be free for everyone that mints. The only thing you have to pay is the Gas fee for minting on the Ethereum blockchain.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>WL and Public Sale</Accordion.Header>
    <Accordion.Body>
      There will be a presale for whitelist addresses. The whitelist sale will be for 12hrs and then the public sale will take place until the supply is minted out.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Supply</Accordion.Header>
    <Accordion.Body>
      The No Utility Belts will have a supply of 1111 3D rendered art by professional NFT artist Wout. The traits will vary from hammers, screwdrivers, paint brushes and more.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>How to WL</Accordion.Header>
    <Accordion.Body>
      By following us on Twitter. We don't have a discord and don't like the idea of "grinding" for spots. We instead, plan on collaborations with different existing NFT projects in conjunction with raffles and more. Just stay tuned!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Reveal</Accordion.Header>
    <Accordion.Body>
      No Utility Belts reveal will be automatic. As soon as you mint, you can view your new NFT on OpenSea. We don't believe in prolonging the excitement. Just refresh the metadata if your NFT isn't revealed yet.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</>
  )
}
