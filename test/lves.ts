import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Lves', () => {
  describe('When calls succeed', () => {
    it('Should add a user', async () => {
      const logAbi = [ "event LogUserAdded(address userAddress)" ];
      const logInterface = new ethers.utils.Interface(logAbi);

      const [account] = await ethers.getSigners();
      const LvesFactory = await ethers.getContractFactory(
        'Lves',
        account
      );
      const lves = await LvesFactory.deploy();
      await lves.deployed();

      const { blockNumber } = await lves.addUser();

      const logs = await lves.provider.getLogs({});
      const txLog = logs.find((log) => log.blockNumber === blockNumber);
      expect(txLog).to.exist;

      const parsed = logInterface.parseLog(txLog!);

      expect(parsed.name).to.equal('LogUserAdded');

      expect(parsed.args[0]).to.equal(account.address);
    });

    it('Should add an entry', async () => {
      const entry = 'My first entry';
      const entryDate = new Date().toISOString();
      const logAbi = [ "event LogEntryAdded(address userAddress, string createdAt, string text)" ];
      const logInterface = new ethers.utils.Interface(logAbi);

      const [account] = await ethers.getSigners();
      const LvesFactory = await ethers.getContractFactory(
        'Lves',
        account
      );
      const lves = await LvesFactory.deploy();
      await lves.deployed();

      await lves.addUser();

      let entries = await lves.getUserEntryText();

      expect(entries).to.have.length(0);

      const { blockNumber } = await lves.addEntry(entryDate, 'My first entry');

      entries = await lves.getUserEntryText();

      expect(entries).to.have.length(1);
      expect(entries[0]).to.equal('My first entry');

      const logs = await lves.provider.getLogs({});
      const txLog = logs.find((log) => log.blockNumber === blockNumber);
      expect(txLog).to.exist;

      const { args } = logInterface.parseLog(txLog!);

      expect(args[0]).to.equal(account.address);
      expect(args[1]).to.equal(entryDate);
      expect(args[2]).to.equal(entry);
    })
  });
});
