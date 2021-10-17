import { useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';

export const useWeb3 = () => {
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

  return {
    isCorrectChain,
    wallet,
    chainId,
    setChainId,
    setActiveAccount,
    activeAccount
  }
}
