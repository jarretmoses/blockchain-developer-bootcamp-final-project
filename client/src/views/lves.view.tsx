import { useEffect, useRef, useState } from 'react';
import { getProvider } from '../utils/get-provider';
import { Lves, Lves__factory, SimpleStorage, SimpleStorage__factory } from '../typechain';
import { LvesConnectMetamask } from '../components/connect-metamask.component';

import * as lvesJson from '../contracts/Lves.sol/Lves.json';
type Networks = 3 | 4 | 1337;

import '../App.css';
import { LvesTextEditor, TextEditorApi } from '../components/text-editor.component';
import { useLves } from '../context/lves.context';
import { notification } from 'antd';
import { LvesAddUser } from '../components/add-user.component';

export const LvesView = () => {
  const {
    activeAccount,
    chainId,
    wallet,
    userExists
  } = useLves();
  const ref = useRef<TextEditorApi>();
  const [contract, setContract] = useState<Lves>();
  const [contractResult, setContractResult] = useState<number>();
  const handleSubmit = async (entry: string) => {
    try {
      await contract!.addEntry(new Date().toISOString(), entry);

      const userEntries = await contract!.getUserEntryText();

      ref.current?.clear();
    } catch (err: any) {
      notification.error(err.message);
    }
  };

  useEffect(() => {
    const setupInstance = async () => {
      const signer = wallet!.getSigner();
      const contractAddress = lvesJson.networks[chainId as Networks].address;

      const lvesContract = Lves__factory.connect(
        contractAddress,
        signer
      );

      setContract(lvesContract);
    };

    if (activeAccount) {
      setupInstance();
    }

  }, [activeAccount]);

  return (
    <div className='App'>
      <header className='App-header'>
        <LvesConnectMetamask />
        <LvesAddUser />

        {userExists && (
          <LvesTextEditor
            onSubmit={handleSubmit}
            ref={ref}
          />
        )}
      </header>
    </div>
  );
}
