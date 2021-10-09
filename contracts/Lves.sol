// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Lves is Ownable {
  struct Entry {
    string created;
    string text;
  }

  struct User {
    Entry[] entries;
    bool isActive;
  }

  mapping(address => User) users;

  modifier isActiveUser() {
    require(users[msg.sender].isActive == true, "User must be active");
    _;
  }

  event LogUserAdded(address userAddress);
  event LogUserRemoved(address userAddress);
  event LogEntryAdded(address userAddress, string text);

  function addUser(address walletAddress) public onlyOwner {}

  function removeUser(address walletAddress) public onlyOwner {}

  function addEntry(address walletAddress, string memory text) public isActiveUser {}
}
