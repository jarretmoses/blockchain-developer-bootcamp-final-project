import { ethers } from 'ethers';
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect
} from 'react';

interface Web3ContextProps {
  isCorrectChain?(requiredChainId: number): boolean;
  wallet?: ethers.providers.Web3Provider;
  chainId?: number;
  setChainId(chainId: number): void;
  setActiveAccount(account: string): void;
  activeAccount?: string;
}

export const Web3Context = createContext<Web3ContextProps>({
  isCorrectChain: () => false,
  wallet: undefined,
  chainId: undefined,
  setChainId: () => {},
  setActiveAccount: () => {},
  activeAccount: undefined
});

const Web3Provider = (props: Record<string, any>) => {
  const [activeAccount, setActiveAccount] = useState<string>();
  const [chainId, setChainId] = useState<number>();
  const {current: wallet} = useRef(new ethers.providers.Web3Provider(window.ethereum, 'any'));
  const isCorrectChain = (requiredChainId: number) => {
    return chainId === requiredChainId;
  };

  useEffect(() => {
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });
  }, []);


  return (
    <Web3Context.Provider
      value={{
        wallet,
        isCorrectChain,
        chainId,
        setChainId,
        setActiveAccount,
        activeAccount
      }}
      {...props}
    />
  );
};

const useWeb3 = () => useContext(Web3Context);

export {
  Web3Provider,
  useWeb3,
};
