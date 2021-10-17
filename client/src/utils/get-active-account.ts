import { providers } from 'ethers';

// TODO: Expand this past Metamask
export const getActiveAccount = async (provider: providers.Web3Provider) => {
  const [account] = await provider.listAccounts();

  return account;
}
