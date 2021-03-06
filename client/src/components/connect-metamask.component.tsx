import { Button, } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { getActiveAccount } from '../utils/get-active-account';
import metamaskIcon from '../assets/metamask-fox.svg';
import { useLves } from '../context/lves.context';

export const LvesConnectMetamask = () => {
  const {
    wallet,
    setActiveAccount,
    activeAccount
  } = useLves();

  const showButton = activeAccount !== undefined && !activeAccount;

  useEffect(() => {
    const setupComponent = async () => {
      const account = await getActiveAccount(wallet!);
      // We will treat '' as an explicit no account exits for now to avoid FOUC
      setActiveAccount(account ?? '');
    };

    setupComponent();
  }, []);

  const connectWallet = async () => {
    try {
      const [account] = await wallet!.send('eth_requestAccounts', []);
      setActiveAccount(account);
      // TODO: here is where you can check if the account is stored on the smart contract
    } catch {
      // Do nothing for now
    }
  };

  if (!showButton) return null;

  return (
    <>
      <p style={{
        marginBottom: '4.5rem',
        textAlign: 'center',
        maxWidth: '50vw'
      }}>
        LVES uses MetaMask to pay the fee for adding your memories onto the blockchain, making them permanent.
      </p>
      <Button
        style={{display: 'flex'}}
        onClick={connectWallet}
        icon={<img style={{marginRight: '8px', height: '100%'}} src={metamaskIcon} />}
      >
        Connect Metamask
      </Button>
    </>
  )
}
