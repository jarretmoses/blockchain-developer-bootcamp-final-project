// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'; // eslint-disable-line
import path from 'path';
import fs from 'fs/promises';

const getSupportedChains = () => [1337, 3, 4];

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const Lves = await ethers.getContractFactory('Lves');
  const lves = await Lves.deploy();

  await lves.deployed();

  // Dynamically write network / deployed address to JSON to be used in client
  const lvesArtifactPath = path.resolve(__dirname, '../artifacts/contracts/Lves.sol/Lves.json');
  const lvesArtifactJson = JSON.parse(String(await fs.readFile(lvesArtifactPath)));

  lvesArtifactJson.networks = lvesArtifactJson.networks || {};
  lvesArtifactJson.networks[lves.deployTransaction.chainId] = {
    address: lves.address,
  };

  const nonDeployedChains = getSupportedChains().filter((chain) => (
    chain !== lves.deployTransaction.chainId
  ));

  // Set default network objects for Typescript inference
  nonDeployedChains.forEach((chainId) => {
    lvesArtifactJson.networks[chainId] = { address: '' };
  });

  await fs.writeFile(lvesArtifactPath, JSON.stringify(lvesArtifactJson));

  console.log('Lves deployed to:', lves.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
