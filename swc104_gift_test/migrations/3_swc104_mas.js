const faucet = artifacts.require("faucet");
const owned = artifacts.require("owned");
const mortal = artifacts.require("mortal");
const call_faucet = artifacts.require("call_faucet");

module.exports = function (deployer) {
  deployer.deploy(faucet);
  deployer.deploy(owned);
  deployer.deploy(mortal);
  deployer.deploy(call_faucet);
};


//faucet.deployed().then(i => {test=i})
//send()만 사용한 이유는, fallback 함수를 사용하고 있기 때문, 원래 function.send() 이렇게 써야댐ㄴ
//test.send(web3.utils.toWei("1","ether")).then(res=>{console.log(res.logs[0].event, res.logs[0].args)})
//test.withdraw(web3.utils.toWei("1","ether")).then(res=>{console.log(res.logs[0].event, res.logs[0].args)})
//web3.eth.getBalance("0xDbF80cFa400f08F3A0e4FAEB6Ae9358811339A21") //잔액조회


/* event
web3.eth.subcribe("logs", {
    address:"",
    topic: [
        web3.utils.sha3("Transfer(address, address, uint256)")
    ]
}, (error, result) => {
    if(error) {
        console.error(error);
    } else {
        console.log(result);
    }
});
*/