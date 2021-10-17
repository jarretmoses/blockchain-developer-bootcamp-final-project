// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

// TODO: Potentially add a balance to this wallet to pay for the creation of a user
contract Lves is Ownable {
  struct Entry {
    string createdAt;
    string text;
  }

  struct User {
    Entry[] entries;
    bool isActive;
  }

  mapping(address => User) private users;

  modifier isActiveUser() {
    require(users[msg.sender].isActive == true, "User must be active");
    _;
  }

  event LogUserAdded(address userAddress);
  event LogUserArchived(address userAddress);
  event LogEntryAdded(address userAddress, string createdAt, string text);

  function addUser() public {
    require(!users[msg.sender].isActive, "User already exists");

    // This is weird since I cant instantiate an empty array o fstructs
    users[msg.sender].isActive = true;

    emit LogUserAdded(msg.sender);
  }

  function archiveUser() public isActiveUser {
    users[msg.sender].isActive = false;

    emit LogUserArchived(msg.sender);
  }

  function addEntry(string memory createdAt, string memory text) public isActiveUser {
    users[msg.sender].entries.push(Entry(createdAt, text));

    emit LogEntryAdded(msg.sender, createdAt, text);
  }

  function getUserEntryText() public view isActiveUser returns (string[] memory) {
    User memory user = users[msg.sender];
    string[] memory entries = new string[](user.entries.length);

    for (uint i; i < entries.length; i++) {
      entries[i] = user.entries[i].text;
    }

    return entries;
  }

  function userExists() public view returns (bool) {
    User memory user = users[msg.sender];

    console.log("Sender %s", msg.sender);

    return user.isActive;
  }
}
