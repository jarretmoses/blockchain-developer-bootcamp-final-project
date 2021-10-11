import { ethers } from "ethers";

// TODO: Productionize this
export const getProvider = () =>
  new ethers.providers.JsonRpcProvider("http://localhost:8545");
