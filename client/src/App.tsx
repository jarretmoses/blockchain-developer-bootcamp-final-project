import './App.css';

import { getWeb3 } from './utils/get-web3';
import { useEffect, useState } from 'react';
import SimpleStorageContract from './contracts/SimpleStorage.json';
import { Contract } from 'web3-eth-contract';

function App() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contract, setContract] = useState<Contract>();


  useEffect(() => {
    const web3 = getWeb3();

    const setupAccounts = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    };

    const setupInstance = async () => {
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = (SimpleStorageContract as AbiJson.Abi).networks[networkId];
      const instance = new web3.eth.Contract(
        // @ts-expect-error Need to find typings
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setContract(instance);
    }

    setupAccounts();
    setupInstance();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ethereum Accounts</h1>
        <p>{accounts.length ? (
          accounts.map((account) => (
            <span key={account} style={{display: 'block'}}>{account}</span>
          ))
        ) : 'Loading Accounts...'}</p>

        <h1>Contract</h1>
        <p>{contract ? contract.options.address : 'Loading Contract...' }</p>
      </header>
    </div>
  );
}

export default App;
