import { Button } from 'antd';
import { ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import { isWalletConnected } from '../utils/is-wallet-connected';

// TODO: Check if wallet is connected to correct network
export const ConnectMetaMask = () => {
  const {current: wallet} = useRef(new ethers.providers.Web3Provider(window.ethereum, 'any'));
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const setupComponent = async () => {
      const walletConnected = await isWalletConnected(wallet);

      setShowButton(!walletConnected);
    };

    setupComponent();
  }, []);

  const connectWallet = async () => {
    await wallet.send('eth_requestAccounts', []);
  };

  if (!showButton) return null;

  return (
    <Button onClick={connectWallet}>
      Connect Metamask
    </Button>
  )
}
