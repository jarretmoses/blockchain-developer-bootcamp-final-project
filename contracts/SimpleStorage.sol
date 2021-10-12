//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

contract SimpleStorage {
  uint public storedData;

  constructor(uint initVal) {
    storedData = initVal;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint retVal) {
    return storedData;
  }
}
