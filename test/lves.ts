/* eslint-disable node/no-extraneous-import */
import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Lves', () => {
  let lves: Contract;
  let account: SignerWithAddress;
  let owner: SignerWithAddress;
  let LvesFactory: ContractFactory;

  beforeEach(async () => {
    [owner, account] = await ethers.getSigners();
    LvesFactory = await ethers.getContractFactory(
      'Lves',
      owner,
    );

    // deploy contract with the owner
    lves = await LvesFactory.deploy();

    // reassign contract as another non owner account
    lves = lves.connect(account);
    await lves.deployed();
  });

  const toggleContractActiveState = async () => {
    const lvesContractOwnerConnect = lves.connect(owner);

    await lvesContractOwnerConnect.toggleActive();
  };

  describe('toggleActive()', () => {
    context('succeeds', () => {
      it('should toggle isActive when signer is the contract owner', async () => {
        const lvesContractOwnerConnect = lves.connect(owner);

        expect(await lves.isActive()).to.equal(true);

        const { blockNumber } = await lvesContractOwnerConnect.toggleActive();
        const logs = await lvesContractOwnerConnect.provider.getLogs({});
        const txLog = logs.find((log) => log.blockNumber === blockNumber);
        const parsed = lves.interface.parseLog(txLog!);

        expect(await lves.isActive()).to.equal(false);
        expect(parsed.name).to.equal('LogToggleActive');
        expect(parsed.args[0]).to.equal(false);
      });
    });

    context('fails', () => {
      /**
       * Technically this is a redundant test since its testing the
       * functionality of a 3rd party contract
       */
      it('should not allow a non owner to toggle the active state', async () => {
        // Try toggling
        const failedToggle = lves.toggleActive();

        await expect(failedToggle).to.revertedWith('Ownable: caller is not the owner');
      });
    });
  });

  describe('addUser()', () => {
    context('succeeds', () => {
      it('Should add a user', async () => {
        const { blockNumber } = await lves.addUser();

        // Find the log based on block number
        const logs = await lves.provider.getLogs({});
        const txLog = logs.find((log) => log.blockNumber === blockNumber);

        const parsed = lves.interface.parseLog(txLog!);

        expect(parsed.name).to.equal('LogUserAdded');

        expect(parsed.args[0]).to.equal(account.address);
      });

      it('Should add an entry', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();
        const logAbi = ['event LogEntryAdded(address userAddress, string createdAt, string text)'];
        const logInterface = new ethers.utils.Interface(logAbi);

        await lves.addUser();

        let [entries, times] = await lves.getUserEntries();

        expect(entries).to.have.length(0);
        expect(times).to.have.length(0);

        const { blockNumber } = await lves.addEntry(entryDate, 'My first entry');

        [entries, times] = await lves.getUserEntries();

        expect(entries).to.have.length(1);
        expect(times).to.have.length(1);
        expect(entries[0]).to.equal('My first entry');
        expect(times[0]).to.equal(entryDate);

        const logs = await lves.provider.getLogs({});
        const txLog = logs.find((log) => log.blockNumber === blockNumber);

        const { args } = logInterface.parseLog(txLog!);

        expect(args[0]).to.equal(account.address);
        expect(args[1]).to.equal(entryDate);
        expect(args[2]).to.equal(entry);
      });
    });

    context('fails', () => {
      it('should revert when user already exists', async () => {
        // Add user
        await lves.addUser();
        // Try adding same user
        const addUserFailed = lves.addUser();

        await expect(addUserFailed).to.revertedWith('User already exists');
      });

      it('should revert when the contract is not active', async () => {
        await toggleContractActiveState();

        // Try to add user
        const addUserFailed = lves.addUser();

        await expect(addUserFailed).to.revertedWith('Contract is not currently active');
      });
    });
  });

  describe('getUserEntries()', () => {
    context('succeeds', () => {
      it('should add an entry for a user', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();

        // Add user
        await lves.addUser();

        // Add entry
        await lves.addEntry(entryDate, entry);

        // Get entries
        const [entries, times] = await lves.getUserEntries();

        expect(entries).to.have.length(1);
        expect(times).to.have.length(1);
        expect(entries[0]).to.equal(entry);
        expect(times[0]).to.equal(entryDate);
      });
    });

    context('fails', () => {
      it('should revert when the contract is not active', async () => {
        await toggleContractActiveState();

        // Try to add user
        const addUserFailed = lves.addUser();

        await expect(addUserFailed).to.revertedWith('Contract is not currently active');
      });
    });
  });

  describe('removeEntry()', () => {
    context('succeeds', () => {
      it('should remove an entry', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();

        // Add user
        await lves.addUser();

        // Add entry
        await lves.addEntry(entryDate, entry);

        let [entries, times] = await lves.getUserEntries();
        // Ensure the entries are there to test they are properly removed
        expect(entries).to.have.length(1);
        expect(times).to.have.length(1);

        // Remove entry
        const { blockNumber } = await lves.removeEntry(0);

        // Get entries
        [entries, times] = await lves.getUserEntries();

        expect(entries).to.have.length(0);
        expect(times).to.have.length(0);

        const logs = await lves.provider.getLogs({});
        const txLog = logs.find((log) => log.blockNumber === blockNumber);

        const { args } = lves.interface.parseLog(txLog!);

        expect(args[0]).to.equal(account.address);
        expect((args[1] as BigNumber).toNumber()).to.equal(0);
      });
    });

    context('fails', () => {
      it('should revert when entry does not exist', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();

        // Add user
        lves.addUser();

        await lves.addEntry(entryDate, entry);

        // Remove entry
        const expectedFail = lves.removeEntry(10);

        await expect(expectedFail).to.revertedWith('Entry does not exist');
      });

      it('should revert when the contract is not active', async () => {
        await toggleContractActiveState();

        // Try to add user
        const addUserFailed = lves.addUser();

        await expect(addUserFailed).to.revertedWith('Contract is not currently active');
      });
    });
  });
});
