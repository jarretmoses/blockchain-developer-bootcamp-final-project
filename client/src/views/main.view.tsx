import { useEffect, useState } from 'react';
import { getProvider } from '../utils/get-provider';
import { SimpleStorage, SimpleStorage__factory } from '../typechain';
import { ConnectMetamask } from '../components/connect-metamask.component';

import * as simpleStorageJson from '../contracts/SimpleStorage.sol/SimpleStorage.json';
type Networks = 3 | 4 | 1337;

import '../App.css';

export const MainView = () => {
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
      const provider = getProvider();

      const { chainId } = await provider.getNetwork();
      const [from] = await provider.listAccounts();
      const signer = provider.getSigner(from);
      const contractAddress = simpleStorageJson.networks[chainId as Networks].address;

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
        <ConnectMetamask />

        <h4>Contract Result</h4>
        <p>{contractResult || 'Loading Contract Result...'}</p>
      </header>
    </div>
  );
}
