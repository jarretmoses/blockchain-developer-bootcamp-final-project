import { ContractTransaction } from '@ethersproject/contracts';
import { message } from 'antd';

interface AwaitMining {
  tx: ContractTransaction,
  waiting: string;
  success: string;
}

export const awaitMining = async ({
  tx,
  waiting,
  success
}: AwaitMining) => {
  message.loading({
    content: waiting,
    key: tx.hash,
    duration: 0
  });

  await tx.wait();

  message.destroy(tx.hash);

  message.success(success);
}
