import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useLves } from '../context/lves.context';

import * as lvesJson from '../contracts/Lves.sol/Lves.json';
import { Lves, Lves__factory } from '../typechain';

type Networks = 3 | 4 | 1337;

export const LvesAddUser = () => {
  const [contract, setContract] = useState<Lves>();
  const {
    userExists,
    setUserExists,
    wallet,
    chainId,
    activeAccount
  } = useLves();

  const handleClick = async () => {
    try {
      await contract!.addUser();
      setUserExists(true);
    } catch {

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
      <p>Before adding entries you will need to add yourself as a user</p>
      <Button onClick={handleClick}>Signup</Button>
    </div>
  )
}
