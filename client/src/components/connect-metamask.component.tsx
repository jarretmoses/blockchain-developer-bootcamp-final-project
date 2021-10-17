import { Button, } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useWeb3 } from '../hooks/use-web3.hook';
import { getActiveAccount } from '../utils/get-active-account';
import metamaskIcon from '../assets/metamask-fox.svg';

export const ConnectMetamask = () => {
  const {
    wallet,
    setActiveAccount,
    activeAccount
  } = useWeb3();

  const showButton = activeAccount !== undefined && !activeAccount;

  useEffect(() => {
    const setupComponent = async () => {
      const account = await getActiveAccount(wallet);
      // We will treat '' as an explicit no account exits for now to avoid FOUC
      setActiveAccount(account ?? '');
    };

    setupComponent();
  }, []);

  const connectWallet = async () => {

    try {
      const [account] = await wallet.send('eth_requestAccounts', []);
      setActiveAccount(account);
      // TODO: here is where you can check if the account is stored on the smart contract
    } catch {
      // Do nothing for now
    }
  };

  if (!showButton) return null;

  return (
    <Button
      style={{display: 'flex'}}
      onClick={connectWallet}
      icon={<img style={{marginRight: '8px'}} src={metamaskIcon} />}
    >
      Connect Metamask
    </Button>
  )
}
