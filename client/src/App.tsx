import './App.css';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getProvider } from './utils/get-provider';
import { SimpleStorage, SimpleStorage__factory } from './typechain';

function App() {
  const [contract, setContract] = useState<SimpleStorage>();
  const [contractResult, setContractResult] = useState<number>();

  const testContract = async () => {
    try {
      await contract!.set(Math.round(Math.random() * 100));

      // Get the value from the contract to prove it worked.
      const response = await (contract!).get();

      setContractResult(response.toNumber());
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    const setupInstance = async () => {
      const provider = getProvider();

      const [from] = await provider.listAccounts();
      const signer = provider.getSigner(from);

      const simpleStorage = SimpleStorage__factory.connect(
        '0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf',
        signer
      )

      setContract(simpleStorage);
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
