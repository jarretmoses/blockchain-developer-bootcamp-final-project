import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('SimpleStorage', () => {
  it('Should get the correct value', async () => {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    const ss = await SimpleStorage.deploy(100);
    await ss.deployed();

    expect(await ss.get()).to.equal(100);
  });

  it('Should set the correct value', async () => {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    const ss = await SimpleStorage.deploy(100);
    await ss.deployed();

    const tx = await ss.set(88);

    await tx.wait();

    expect(await ss.get()).to.equal(88);
  });
});
