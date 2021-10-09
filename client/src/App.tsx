import './App.css';

import { getWeb3 } from './utils/get-web3';
import { useEffect, useState } from 'react';
import SimpleStorageContract from './contracts/SimpleStorage.json';
import { Contract } from 'web3-eth-contract';

function App() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contract, setContract] = useState<Contract>();
  const [contractResult, setContractResult] = useState();

  const testContract = async () => {
    await contract!.methods.set(Math.round(Math.random() * 100)).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract!.methods.get().call();

    setContractResult(response);
  };

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

  useEffect(() => {
    if (contract) {
      testContract();
    }
  }, [contract])

  return (
    <div className="App">
      <header className="App-header">
        <h4>Contract</h4>
        <p>{contract ? contract.options.address : 'Loading Contract...' }</p>

        <h4>Contract Result</h4>
        <p>{contractResult ? contractResult : 'Loading Contract Result...' }</p>
      </header>
    </div>
  );
}

export default App;
