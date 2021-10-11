import './App.css';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getWeb3 } from './utils/get-web3';
import SimpleStorageContract from './contracts/SimpleStorage.json';
import { getProvider } from './utils/get-provider';

function App() {
  const [contract, setContract] = useState<ethers.Contract>();
  const [contractResult, setContractResult] = useState<number>();

  const testContract = async () => {
    try {
      await contract!.set(Math.round(Math.random() * 100));

      // Get the value from the contract to prove it worked.
      const [response] = await contract!.functions.get();
      setContractResult((response as ethers.BigNumber).toNumber());
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    const setupInstance = async () => {
      const provider = getProvider()
      const networkId = (await provider.getNetwork()).chainId
      const deployedNetwork = (SimpleStorageContract as AbiJson.Abi).networks[networkId];

      const [from] = await provider.listAccounts();
      const signer = provider.getSigner(from);

      const cont = new ethers.Contract(
        deployedNetwork && deployedNetwork.address,
        SimpleStorageContract.abi,
        signer,
      );


      setContract(cont);
    };

    setupInstance();
  }, []);

  useEffect(() => {
    if (contract) {
      testContract();
    }
  }, [contract]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <header className='App-header'>
        <h4>Contract</h4>
        <p>{contract ? contract.address : 'Loading Contract...' }</p>

        <h4>Contract Result</h4>
        <p>{contractResult || 'Loading Contract Result...' }</p>
      </header>
    </div>
  );
}

export default App;
