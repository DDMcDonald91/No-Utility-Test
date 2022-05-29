import Button from 'react-bootstrap/Button';

export default function Connect() {

    var account = null;
    async function Connection() {
    if (window.ethereum) {
        let Web3;
        let web3 = Web3;
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById('wallet-address').textContent = account;
        }
    };

  return (
    <Button onClick={Connection}>Connect Wallet</Button>
  )
}
