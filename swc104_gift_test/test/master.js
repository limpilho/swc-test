const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
const owned_json = require("../build/contracts/owned.json");
const faucet_json = require("../build/contracts/faucet.json");
const call_faucet_json = require("../build/contracts/call_faucet.json");


const owned_ = owned_json['abi'];
const faucet_ = faucet_json['abi'];
const call_faucet_ = call_faucet_json['abi']

async function faucet(){
    const faucet = new web3.eth.Contract(faucet_, "0x211cD165EA6DA5cc7F1D654B0a4161dd31645dc7");
    
    //console.log(account_all);
    //console.log("account[0] balance",acounts_0);
    //console.log("account[0] ",account0)

    //contract에 eth값을 전송
    //send를 사용하기 때문에, 가스가 사용됨, 55000 가스로 지정되어 있으나 oog가 출력됨
    /*await send_e.methods.bank("0x50a3c7460b3bd111B4330ac90f8410c7085298b7").send({from:account0,gas:70000,gasPrice:'200000',value:web3.utils.toWei('0.5','ether')}).then(
        function(result){
            console.log(result);
        }    
    )*/  
}

async function call_faucet(){
    const call_faucet = new web3.eth.Contract(call_faucet_, "0x3e7F3dB40CDaF2C9d947ffe9096A4C2F599e549d");
    const account0 = web3.eth.getAccounts()[0];
    await call_faucet.methods.faucet_call("0x729B6B1E6310d282ed59f42657E023B793bdBb56").call().then(function(result){console.log(result)});

    /*await call_faucet.methods.send({from:account0,gas:70000,gasPrice:'200000',value:web3.utils.toWei('1','ether')}).then(
        function(result){
            console.log(result);
            console.log(contract_ba);
        }    
    )

    await faucet.methods.withdraw().send({from:account0,gas:70000,gasPrice:'200000',value:web3.utils.toWei('0.5','ether')}).then(
        function(result){
            console.log(result);
            console.log(contract_ba);
        }    
    )*/
}

//이 함수가, 호출을 당해서 값을 보내는 것인지는 알 수 없음, 2 ehter가 안채워져서 에러가 난 걸 수도 있음 ㅇㅇ
async function ether_send(){
    const send_e = new web3.eth.Contract(get_abi, "0xD6B38346Aea054a22413C41F01aab8DD509e95Ee");
    //const send_e = new web3.eth.Contract(get_abi_gift, "0x95d8200418a9bcc20C0dC66F351a16d83f466Fa9");
    //const account_all = await web3.eth.getAccounts();
    const contract_ba = await web3.eth.getBalance("0xD6B38346Aea054a22413C41F01aab8DD509e95Ee");
    const account0 = (await web3.eth.getAccounts())[0];

    console.log(contract_ba);
    //contract에 있는 eth 값을 msg.sender에게 전송 = from으로 eth받을 사람을 설정할 수 있음
    /*await send_e.methods.gift_().call().then(
        function(result_){
            console.log(result_)
        }
    )*/
    
    await send_e.methods.gift_().send({from:"0x50a3c7460b3bd111B4330ac90f8410c7085298b7",gas:55000,gasPrice:'200000'}).then(
        function(result){
            console.log(result);
        }
    )
}

call_faucet();