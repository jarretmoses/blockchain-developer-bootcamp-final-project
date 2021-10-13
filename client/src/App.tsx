import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getProvider } from './utils/get-provider';
import { SimpleStorage, SimpleStorage__factory } from './typechain';

import './App.css';

const CONTRACT_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

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

      const [from] = await provider.listAccounts();
      const signer = provider.getSigner(from);

      const simpleStorage = SimpleStorage__factory.connect(
        CONTRACT_ADDRESS,
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
