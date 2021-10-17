import { useEffect, useState } from 'react';
import { getProvider } from './utils/get-provider';
import { SimpleStorage, SimpleStorage__factory } from './typechain';
import { ConnectMetaMask } from './components/coonect-metamask.component';

import * as simpleStorageJson from './contracts/SimpleStorage.sol/SimpleStorage.json';
type Networks = 1337;

import './App.css';
import { useWeb3 } from './hooks/use-web3.hook';
import { MainView } from './views/main.view';
import { IncorrectNetworkView } from './views/incorrect-network.view';

const REQUIRED_CHAIN = Number(import.meta.env.VITE_CHAIN_ID);

type LoadingState = 'loading' | 'ok' | 'incorrectChain';

function App() {
  const {
    wallet,
    isCorrectChain,
    setChainId,
    chainId,
  } = useWeb3();
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');
  let Content: React.ReactNode;

  useEffect(() => {
    const setApp = async () => {
      if (!chainId) {
        setChainId((await wallet.getNetwork()).chainId)
      } else {
        const isOk = isCorrectChain(REQUIRED_CHAIN);

        if (isOk) {
          setLoadingState('ok');
        } else {
          setLoadingState('incorrectChain');
        }
      }
    }

    setApp();
  }, [chainId]);

  switch(loadingState) {
    case 'ok': {
      Content = <MainView />;
      break;
    }
    case 'incorrectChain': {
      Content = <IncorrectNetworkView requiredChainId={REQUIRED_CHAIN} />
      break;
    };
    case 'loading':
    default: {
      Content = (
        <div>Loading...</div>
      )
    }
  }

  return (
    <div className='App'>
      {Content}
    </div>
  );
}

export default App;
