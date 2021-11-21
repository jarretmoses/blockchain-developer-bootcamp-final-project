import {
  Button,
  message,
} from 'antd';
import { useEffect, useState } from 'react';
import { useLves } from '../context/lves.context';

import * as lvesJson from '../contracts/Lves.sol/Lves.json';
import { Lves, Lves__factory } from '../typechain-types';
import { awaitMining } from '../utils/await-mining';

type Networks = 3 | 4 | 1337;


export const LvesAddUser = () => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [contract, setContract] = useState<Lves>();
  const {
    userExists,
    setUserExists,
    wallet,
    chainId,
    activeAccount,
  } = useLves();

  const handleClick = async () => {
    try {
      const tx = await contract!.addUser();
      setIsAddingUser(true);

      await awaitMining({
        tx,
        waiting: 'Adding user...',
        success: 'User added'
      })

      setIsAddingUser(false);
      setUserExists(true);
    } catch(err: any) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    const init = async () => {
      const signer = wallet!.getSigner();
      const contractAddress = lvesJson.networks[chainId as Networks].address;

      const lvesContract = Lves__factory.connect(
        contractAddress,
        signer
      );

      const userExists = await lvesContract.userExists();

      if (userExists) {
        setUserExists(true);
      } else {
        setContract(lvesContract);
      }
    }

    init();
  }, [activeAccount]);

  if (userExists || !contract) return null;


  return (
    <div className="lves-add-user">
      <p>Before adding memories you will need to add yourself as a user</p>
      <Button onClick={handleClick} disabled={isAddingUser}>Signup</Button>
    </div>
  )
}
