const wallet = artifacts.require("wallet");
const gift_ = artifacts.require("gift_");

module.exports = function (deployer) {
  deployer.deploy(gift_);
  deployer.deploy(wallet);
};

//wallet.deployed().then(function(instance){test=instance})
//test.bank({from:"0xD8e8806b131C11Ca5DeCa74943fA90734A52025A",to:"0x50a3c7460b3bd111B4330ac90f8410c7085298b7",value: web3.utils.toWei("15","ether")})
//test._sendWinnings({from: "0xD8e8806b131C11Ca5DeCa74943fA90734A52025A", gas:200000,gasPrice:'200000'}).then(function(res){console.log(res);})
//web3.eth.getBalance("0xDbF80cFa400f08F3A0e4FAEB6Ae9358811339A21") //잔액조회