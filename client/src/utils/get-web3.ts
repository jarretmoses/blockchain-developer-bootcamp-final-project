import Web3 from 'web3';
// TODO: Better fallback?
export const getWeb3 = () => new Web3(Web3.givenProvider || 'ws://localhost:8545');
