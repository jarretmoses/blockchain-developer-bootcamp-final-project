import { ethers } from 'ethers';

export const getProvider = () => {
  const providerUrl = process.env.NODE_ENV === 'production'
    ? 'PUT URL HERE'
    : 'http://localhost:7545';

    return new ethers.providers.JsonRpcProvider(providerUrl);
};
