import { providers } from 'ethers';

// TODO: Expand this past Metamask
export const isWalletConnected = async (provider: providers.Web3Provider) => {
  const accounts = await provider.listAccounts();
  console.log('👾👾👾:::', accounts);
  return accounts.length > 0;
}
