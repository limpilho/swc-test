const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
const test_json = require("../build/contracts/wallet.json");
const gift_json = require("../build/contracts/gift_.json");
const get_abi = test_json['abi'];
const get_abi_gift = gift_json['abi']

async function sendether(){
    const send_e = new web3.eth.Contract(get_abi, "0xEe5881FfE93e98bAADc6AFAB07FAe32d871AeC64");
    const account_all = await web3.eth.getAccounts();
    const acounts_0 = await web3.eth.getBalance(account_all[0]);
    const account0 = (await web3.eth.getAccounts())[0];
    const contract_ba = await web3.eth.getBalance("0xEe5881FfE93e98bAADc6AFAB07FAe32d871AeC64");
    
    console.log(account_all);
    console.log("account[0] balance",acounts_0);
    console.log("account[0] ",account0)

    //contract에 eth값을 전송
    //send를 사용하기 때문에, 가스가 사용됨, 55000 가스로 지정되어 있으나 oog가 출력됨
    await send_e.methods.bank("0x50a3c7460b3bd111B4330ac90f8410c7085298b7").send({from:account0,gas:70000,gasPrice:'200000',value:web3.utils.toWei('1','ether')}).then(
        function(result){
            console.log("bank"+result);
            console.log(contract_ba);
        }    
    )
}
//이 함수가, 호출을 당해서 값을 보내는 것인지는 알 수 없음, 2 ehter가 안채워져서 에러가 난 걸 수도 있음 ㅇㅇ
async function gift_ether(){
    const send_e = new web3.eth.Contract(get_abi_gift, "0x10D6B54b067BDA9038fEB01348FB921D56e6F87b");
    //const send_e = new web3.eth.Contract(get_abi_gift, "0x95d8200418a9bcc20C0dC66F351a16d83f466Fa9");
    //const account_all = await web3.eth.getAccounts();
    const contract_ba = await web3.eth.getBalance("0x10D6B54b067BDA9038fEB01348FB921D56e6F87b");
    const account0 = (await web3.eth.getAccounts())[0];

    console.log(contract_ba);
    //contract에 있는 eth 값을 msg.sender에게 전송 = from으로 eth받을 사람을 설정할 수 있음
    /*await send_e.methods.gift_().call().then(
        function(result_){
            console.log(result_)
        }
    )*/
    
    await send_e.methods.gift().send({from:"0x50a3c7460b3bd111B4330ac90f8410c7085298b7",gas:55000,gasPrice:'200000'}).then(
        function(result){
            console.log("gift",result);
        }
    )
}

sendether();
gift_ether();