var BBCoin = artifacts.require("./BBCoin.sol");

module.exports = function(deployer) {
  // constructor requires init coin amount
  deployer.deploy(BBCoin, 0);
};
