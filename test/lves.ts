import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Lves', () => {
  describe('addUser()', () => {
    context('succeeds', () => {
      it('Should add a user', async () => {
        const logAbi = ['event LogUserAdded(address userAddress)'];
        const logInterface = new ethers.utils.Interface(logAbi);

        const [account] = await ethers.getSigners();
        const LvesFactory = await ethers.getContractFactory(
          'Lves',
          account,
        );
        const lves = await LvesFactory.deploy();
        await lves.deployed();

        const { blockNumber } = await lves.addUser();

        const logs = await lves.provider.getLogs({});
        const txLog = logs.find((log) => log.blockNumber === blockNumber);

        const parsed = logInterface.parseLog(txLog!);

        expect(parsed.name).to.equal('LogUserAdded');

        expect(parsed.args[0]).to.equal(account.address);
      });

      it('Should add an entry', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();
        const logAbi = ['event LogEntryAdded(address userAddress, string createdAt, string text)'];
        const logInterface = new ethers.utils.Interface(logAbi);

        const [account] = await ethers.getSigners();
        const LvesFactory = await ethers.getContractFactory(
          'Lves',
          account,
        );
        const lves = await LvesFactory.deploy();
        await lves.deployed();

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
        const [account] = await ethers.getSigners();
        const LvesFactory = await ethers.getContractFactory(
          'Lves',
          account,
        );
        const lves = await LvesFactory.deploy();
        await lves.deployed();

        // Add user
        await lves.addUser();
        // Try adding same user
        const addUserFailed = lves.addUser();

        await expect(addUserFailed).to.revertedWith('User already exists');
      });
    });
  });

  describe('getUserEntries()', () => {
    context('succeeds', () => {
      it('should add an entry for a user', async () => {
        const entry = 'My first entry';
        const entryDate = new Date().toISOString();

        const [account] = await ethers.getSigners();
        const LvesFactory = await ethers.getContractFactory(
          'Lves',
          account,
        );
        const lves = await LvesFactory.deploy();
        await lves.deployed();

        // Add user
        lves.addUser();

        // Add entry
        lves.addEntry(entryDate, entry);

        // Get entries
        const [entries, times] = await lves.getUserEntries();

        expect(entries).to.have.length(1);
        expect(times).to.have.length(1);
        expect(entries[0]).to.equal(entry);
        expect(times[0]).to.equal(entryDate);
      });
    });
  });
});
