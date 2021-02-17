var KiwiCoin = artifacts.require('KiwiCoin');
var KiwiCoinSale = artifacts.require('KiwiCoinSale');

module.exports = function(deployer) {
  deployer.deploy(KiwiCoin, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(KiwiCoinSale, KiwiCoin.address, tokenPrice);
  }
