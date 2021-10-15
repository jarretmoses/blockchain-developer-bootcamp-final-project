import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getProvider } from './utils/get-provider';
import { SimpleStorage, SimpleStorage__factory } from './typechain';

import * as simpleStorageJson from './contracts/SimpleStorage.sol/SimpleStorage.json';
type Networks = 1337;

import './App.css';

const requestWallet = async () => {
  // @ts-expect-error
  const wallet = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await wallet.send('eth_requestAccounts', []);
};

function App() {
  const [contract, setContract] = useState<SimpleStorage>();
  const [contractResult, setContractResult] = useState<number>();

  const testContract = async () => {
    try {
      await contract!.set(Math.round(Math.random() * 100));

      // Get the value from the contract to prove it worked.
      const response = await contract!.get();

      setContractResult(response.toNumber());
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    const setupInstance = async () => {
      // // @ts-expect-error
      // const wallet = new ethers.providers.Web3Provider(window.ethereum, 'any');
      // await wallet.send('eth_requestAccounts', []);

      const provider = getProvider();

      const { chainId } = await provider.getNetwork();
      const [from] = await provider.listAccounts();
      const signer = provider.getSigner(from);
      const contractAddress = simpleStorageJson.networks[chainId as Networks].address;
      console.log('contractAddress', contractAddress);
      const simpleStorage = SimpleStorage__factory.connect(
        contractAddress,
        signer,
      );

      setContract(simpleStorage);
    };

    setupInstance();
  }, []);

  useEffect(() => {
    if (contract) {
      testContract();
    }
  }, [contract]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h4>Contract</h4>
        <p>{contract ? contract.address : 'Loading Contract...'}</p>

        <h4>Contract Result</h4>
        <p>{contractResult || 'Loading Contract Result...'}</p>
      </header>
    </div>
  );
}

export default App;
