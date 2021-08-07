// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 < 0.9.0;

//컨트랙트의 생성자 설정 및 주소를 저장
contract owned{
    address owner;

    //생성자를 owner로 설정, 한 번만 실행됨
    constructor(){
        owner = msg.sender;
    }

    //owner, msg.sender가 동일해야 함
    //함수식별자
    modifier onlyowner(){
        require(msg.sender == owner, "only owner call");
        _; //구문 표시자, 
    }
}

//owned를 상속
//컨트랙트를 소멸, 남은 eth를 받아가기 위함
contract mortal is owned(){
    function dsetroy() public onlyowner{
        selfdestruct(owner);
    }
}

//mortal을 상속
contract faucet is mortal{ //상속을 사용 mortal이 부모
    //address owner 생성자가 있어서 사용하지 않아도 됨, 상속하고 있기도 함
    event withdraw_(address indexed to, uint amount); //event를 선언
    event deposit_(address indexed from, uint amount);


    //함수 호출자에게 이더를 전송
    function withdraw(uint withdraw_amount) public { //이더 값을 출금하는 함수, 1이더 이하만 출금하도록 예외처리
        require(withdraw_amount<= 1 ether);
        require(this.balance >= withdraw_amount,
            "withdraw request");
        msg.sender.transfer(withdraw_amount);
        emit withdraw_(msg.sender, withdraw_amount); //이벤트 값
    }

    //값을전송하는 부분
    function () public payable{
        emit deposit_(msg.sender, msg.value);
    }
}

contract call_faucet is mortal{
    function faucet_call(address _faucet){ //이게 함수를 호출하는 것 같은데, faucet 컨트랙트의 withdraw 함수를 호출한다는 거같은데?
        _faucet.call("withdraw",0.5 ether); //withdraw 함수의 첫 번째 인자에 값을 넣는다. 그리고 호출한다?
    }
}


/*notepad
tx.origin = 트랜잭션의 원래 EOA 주소, 안전하지 않은 객체
address.send() = 예외 발생 대신, false를 반환함, 반환 값을 항상 확인해야함

//함수 변경자, 함수에 적용할 조건 생성에 사용
modifier onlyowner{
    require(msg.sender == owner);
    _; 
}









*/