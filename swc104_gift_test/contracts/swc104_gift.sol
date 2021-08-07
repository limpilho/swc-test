// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BANK{
  address owner; //함수를 호출한 사람
  uint withamount; //전달받은 eth 값

  function bank() public payable{

  }

  function gift_() public{
    //require(msg.value == 5 ether, "msg.value not 5 ether"); 
    msg.sender.transfer(this.balance);
    
  }

}

/*contract gift_ is wallet{
  function gift() public{
    msg.sender.transfer(2 ether);
  }
  //돈을 받는 곳 payable
}*/

/*  function bank() public payable{
    owner = msg.sender;
    withamount = msg.value;
    
    if(withamount >= 3 ether){
      gift(); //함수호출인데, call을 사용한게 아님
    }
  }
  */