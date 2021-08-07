const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
const test_json = require("../build/contracts/call_test_contract.json");
const call_json = require("../build/contracts/call_contract.json");
const get_abi = test_json['abi'];
const get_call = call_json['abi'];

async function call_(){
    const send_e = new web3.eth.Contract(get_abi, "0x3A3BFCFCE62894A8A7Ed1aC2Db2C679405d2178a");
    const call_ = new web3.eth.Contract(get_call, "0xf1b452752944F554b45F7144Cb1fFC9AB3B0583f");
    const account_all = await web3.eth.getAccounts();
    const acounts_0 = await web3.eth.getBalance(account_all[0]);
    const account0 = (await web3.eth.getAccounts())[0];
    //const contract_ba = await web3.eth.getBalance("0x1f70aA34d27Cf753D99F63466f8B8A14629C8Fc1");
    
    console.log(account_all);
    console.log("account[0] balance",acounts_0);
    console.log("account[0] ",account0)
    
    await call_.methods.call_another_contract("0x3A3BFCFCE62894A8A7Ed1aC2Db2C679405d2178a").call({gas:100000, gasPrice:'200000'}).then(
        send_e.methods.call_test().call().then(
            function(result){
                console.log(result)}
    ));
    //send_e.methods.call_test().call().then(console.log);
}
call_();
