import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

export default function Connect() {
  const [account, setAccount] = useState(null);
  const [text, setText] = useState("Connect Wallet");

    async function Connection() {
    if (window.ethereum) {
        let Web3;
        let web3 = Web3;
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        }
    };

      return (
        <Button onClick={Connection}>{text}</Button>
      )
}
//  document.getElementById('wallet-address').textContent = account;
/*
var account = null;
    async function Connection() {
    if (window.ethereum) {
        let Web3;
        let web3 = Web3;
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        }
    };

    if(account) {
      return (
        <p style={{color: 'white'}}>{connect}</p>
      )
    } else {
      return (
        <Button onClick={Connection}>Connect Wallet</Button>
      )
    }
    */