import { ethers } from 'ethers';
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect
} from 'react';

interface LvesContextProps {
  isCorrectChain?(requiredChainId: number): boolean;
  wallet?: ethers.providers.Web3Provider;
  chainId?: number;
  setChainId(chainId: number): void;
  setActiveAccount(account: string): void;
  activeAccount?: string;
  userExists: boolean;
  setUserExists(userExits: boolean): void;
}

export const LvesContext = createContext<LvesContextProps>({
  isCorrectChain: () => false,
  wallet: undefined,
  chainId: undefined,
  setChainId: () => {},
  setActiveAccount: () => {},
  activeAccount: undefined,
  userExists: false,
  setUserExists: () => {}
});

const LvesProvider = (props: Record<string, any>) => {
  const [activeAccount, setActiveAccount] = useState<string>();
  const [userExists, setUserExists] = useState(false);
  const [chainId, setChainId] = useState<number>();
  const {current: wallet} = useRef(new ethers.providers.Web3Provider(
    window.ethereum,
    'any'
  ));
  const isCorrectChain = (requiredChainId: number) => {
    return chainId === requiredChainId;
  };

  useEffect(() => {
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });
  }, []);

  return (
    <LvesContext.Provider
      value={{
        wallet,
        isCorrectChain,
        chainId,
        setChainId,
        setActiveAccount,
        activeAccount,
        setUserExists,
        userExists
      }}
      {...props}
    />
  );
};

const useLves = () => useContext(LvesContext);

export {
  LvesProvider,
  useLves,
};
