/* eslint-disable no-console */
import { task } from 'hardhat/config';

// This file is only here to make interacting with the Dapp easier,
// feel free to ignore it if you don't need it.

task('faucet', 'Sends ETH to an address')
  .addPositionalParam('receiver', 'The address that will receive them')
  .setAction(async ({ receiver }, hre) => {
    if (hre.network.name === 'hardhat') {
      console.warn(
      `You are running the faucet task with Hardhat network, which gets automatically created
        and destroyed every time. Use the Hardhat option '--network localhost'`,
      );
    }

    const [sender] = await hre.ethers.getSigners();
    const tx = await sender.sendTransaction({
      to: receiver,
      value: hre.ethers.constants.WeiPerEther.mul(5),
    });

    await tx.wait();

    console.log(`Transferred 5 ETH ${receiver}`);
  });
