// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

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

    Entry[] memory userEntries;

    users[msg.sender] = User(userEntries, true);

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
}
