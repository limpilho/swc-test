// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract call_test_contract {
    function call_test() returns(string myString) {
        return "Hello!%";
    } 
}

contract call_contract{
    function call_another_contract(address callee) { //함수 호출에 실패하여, 예외가 발생해도 반환 값이나 예외 처리가 없어 에러가 발생했는지 알 수 없음
    callee.call();
    }
}