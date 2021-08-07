const call_test_contract = artifacts.require("call_test_contract");
const call_contract = artifacts.require("call_contract");

module.exports = function (deployer) {
  deployer.deploy(call_test_contract);
  deployer.deploy(call_contract);
  
  call_test_contract.deployed().then(function(instance){test=instance});
};


//faucet.deployed().then(i => {test=i})
//send()만 사용한 이유는, fallback 함수를 사용하고 있기 때문, 원래 function.send() 이렇게 써야댐ㄴ
//test.send(web3.utils.toWei("1","ether")).then(res=>{console.log(res.logs[0].event, res.logs[0].args)})
//test.withdraw(web3.utils.toWei("1","ether")).then(res=>{console.log(res.logs[0].event, res.logs[0].args)})
//web3.eth.getBalance("0xDbF80cFa400f08F3A0e4FAEB6Ae9358811339A21") //잔액조회
