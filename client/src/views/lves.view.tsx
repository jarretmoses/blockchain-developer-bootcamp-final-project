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
import { LvesTimeline } from '../components/timeline.component';

export const LvesView = () => {
  const {
    activeAccount,
    chainId,
    wallet,
    userExists
  } = useLves();
  const ref = useRef<TextEditorApi>();
  const [contract, setContract] = useState<Lves>();
  const [entries, setEntries] = useState<LvesContract.Entry[]>([])

  const handleSubmit = async (entry: string) => {
    try {
      const createdAt = new Date().toISOString();
      const entryObj: LvesContract.Entry = {
        createdAt,
        text: entry
      };

      await contract!.addEntry(entryObj.createdAt, entryObj.text);

      setEntries([...entries, entryObj]);

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

      const [entries, times] = await lvesContract.getUserEntries();
      const userEntries = entries.map<LvesContract.Entry>((text, i) => ({
        text,
        createdAt: times[i],
      }));

      setEntries(userEntries);
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
          <div className="App-main">
            <LvesTimeline entries={entries} />
            <LvesTextEditor
              onSubmit={handleSubmit}
              ref={ref}
            />
          </div>
        )}
      </header>
    </div>
  );
}
