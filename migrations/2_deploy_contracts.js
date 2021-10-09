const SimpleStorage = artifacts.require("SimpleStorage");
const Lves = artifacts.require("Lves");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Lves);
};
