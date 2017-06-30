var DMCToken = artifacts.require("DMCToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DMCToken);
};
