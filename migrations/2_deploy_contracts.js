var KiwiCoin = artifacts.require('KiwiCoin');
var KiwiCoinSale = artifacts.require('KiwiCoinSale');

module.exports = (deployer) => {
  deployer.deploy(KiwiCoin, 1000000).then(()=> {
    var tokenPrice = 1000000000000000;
    return deployer.deploy(KiwiCoinSale, KiwiCoin.address, tokenPrice);
  })
}
