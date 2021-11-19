import { useEffect, useRef, useState } from 'react';
import { Lves, Lves__factory } from '../typechain-types';
import { LvesConnectMetamask } from '../components/connect-metamask.component';

import { LvesTextEditor, TextEditorApi } from '../components/text-editor.component';
import { useLves } from '../context/lves.context';
import { message } from 'antd';
import { LvesAddUser } from '../components/add-user.component';
import { LvesTimeline } from '../components/timeline.component';
import * as lvesJson from '../contracts/Lves.sol/Lves.json';
import '../App.css';

type Networks = 3 | 4 | 1337;

export const LvesView = () => {
  const {
    activeAccount,
    chainId,
    wallet,
    userExists
  } = useLves();
  const ref = useRef<TextEditorApi>();
  const [contract, setContract] = useState<Lves>();
  const [entries, setEntries] = useState<LvesContract.Entry[]>([]);

  const handleSubmit = async (entry: string) => {
    try {
      const createdAt = new Date().toISOString();
      const entryObj: LvesContract.Entry = {
        createdAt,
        text: entry
      };

      const tx = await contract!.addEntry(entryObj.createdAt, entryObj.text);

      message.loading({
        content: `Adding memory...`,
        key: tx.hash,
        duration: 0
      });

      await tx.wait();

      message.destroy(tx.hash);

      setEntries([...entries, entryObj]);

      message.success(`Memory added`);

      ref.current?.clear();
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const removeEntry = async (entry: number) => {
    try {
      await contract!.removeEntry(entry);

      setEntries(entries.filter((_, index) => index !== entry));
      message.success({message: 'Entry removed'});
    } catch (err: any) {
      message.error(err.message);
    }
  }

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

  useEffect(() => {
    const getEntries = async () => {
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
    };

    if (userExists) {
      getEntries();
    }

  }, [userExists])

  return (
    <div className='App'>
      <header className='App-header'>
        <LvesConnectMetamask />
        <LvesAddUser />

        {userExists && (
          <div className='App-main'>
            <LvesTimeline
              entries={entries}
              removeEntry={removeEntry}
            />
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
