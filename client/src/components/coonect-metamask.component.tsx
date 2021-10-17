import { Button } from 'antd';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { isWalletConnected } from '../utils/is-wallet-connected';


export const ConnectMetaMask = () => {
  console.log('👾👾👾:::');

  useEffect(() => {
    // @ts-ignore
    window.ethereum.on('accountsChanged', (accounts) => {
      console.log('accounts', accounts);
    });
  }, []);

  const handleClick = async () => {

    // @ts-ignore
    const wallet = new ethers.providers.Web3Provider(window.ethereum, 'any');
    console.log('👾👾👾:::', await isWalletConnected(wallet));

    // console.log('👾👾👾:::', wallet.provider);
    // await wallet.send('eth_requestAccounts', []);
  };

  return (
    <Button onClick={handleClick}>
      Connect Metamask
    </Button>
  )
}
