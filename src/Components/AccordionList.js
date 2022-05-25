import Accordion from 'react-bootstrap/Accordion';

export default function AccordionList() {
  return (
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
    <Accordion.Header>Availability</Accordion.Header>
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
    <Accordion.Header>Utility</Accordion.Header>
    <Accordion.Body>
      The utility for this NFT is to flip.
      <br/>
      This is a fun project that's free for people to obtain and enjoy...or flip into a profit. We want to be able to help add some profit to those whom mint.
      <br/>
      Interestingly enough...the utility belts make great Twitter banners. *hint* *hint*
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Reveal</Accordion.Header>
    <Accordion.Body>
      No Utility Belts reveal will be automatic. As soon as you mint, you can view your new NFT on OpenSea. We don't believe in prolonging the excitement. Just refresh the metadata if your NFT isn't revealed yet.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>Future Plans</Accordion.Header>
    <Accordion.Body>
      Currently we are not promising anything at all. We just want to be able to give back to the NFT community in a small way. Mint and flip for a profit or hold for the art and cool Twitter banner.
      <br/>
      Thats the true "utility" of the No Utility Belts project.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  )
}
