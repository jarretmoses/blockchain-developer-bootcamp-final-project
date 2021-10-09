// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Lves {
  struct Entry {
    string created;
    string text;
    bool isActive;
  }

  struct User {
    Entry[] entries;
    bool isActive;
  }

  address owner = msg.sender;

  mapping(address => User) users;

  // TODO: use OpenZeppeling Ownerable.sol
  modifier isOwner() {
    require(msg.sender == owner, "Only the contract owner can perform this action");
    _;
  }

  modifier isActiveUser() {
    require(users[msg.sender].isActive == true, "User must be active");
    _;
  }

  event LogUserAdded(address userAddress);
  event LogUserRemoved(address userAddress);
  event LogEntryAdded(address userAddress, string text);

  function addUser(address walletAddress) public isOwner {}

  function removeUser(address walletAddress) public isOwner {}

  function addEntry(address walletAddress, string memory text) public isActiveUser {}
}
