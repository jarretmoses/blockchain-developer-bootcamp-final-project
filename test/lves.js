const Lves = artifacts.require('Lves');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Lves', (/* accounts */) => {
  it('should assert true', async () => {
    await Lves.deployed();
    return assert.isTrue(true);
  });
});
