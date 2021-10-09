import Web3 from 'web3';

export const getWeb3 = () => {
  const provider = process.env.NODE_ENV === 'production'
    ? Web3.givenProvider
    : 'ws://localhost:7545';

    return new Web3(provider);
}
