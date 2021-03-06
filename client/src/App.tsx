import { useEffect, useState } from 'react';

import './App.css';
import 'antd/dist/antd.dark.css';

import { LvesView } from './views/lves.view';
import { IncorrectNetworkView } from './views/incorrect-network.view';
import { useLves } from './context/lves.context';
import { getRequiredChainId } from './utils/get-required-chain-id';

type LoadingState = 'loading' | 'ok' | 'incorrectChain';

const REQUIRED_CHAIN = getRequiredChainId();

function App() {
  const {
    wallet,
    isCorrectChain,
    setChainId,
    chainId,
  } = useLves();
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');
  let Content: React.ReactNode;

  useEffect(() => {
    const setApp = async () => {
      if (!chainId) {
        setChainId((await wallet!.getNetwork()).chainId)
      } else {
        const isOk = isCorrectChain!(REQUIRED_CHAIN);

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
      Content = <LvesView />;
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
