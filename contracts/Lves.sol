// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
// import "hardhat/console.sol";

/// @title Lves lets you journal about life’s most important events and record the inner workings of your mind
/// @author Jarret Mosesp
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

  bool public isActive = true;

  /// @notice check if the user is active on the contract
  modifier isActiveUser() {
    require(users[msg.sender].isActive == true, "User must be active");
    _;
  }

  /// @notice check if the contract is active to be interacted with
  modifier isActiveContract() {
    require(isActive == true, "Contract is not currently active");
    _;
  }

  event LogUserAdded(address userAddress);
  event LogUserArchived(address userAddress);
  event LogEntryAdded(address userAddress, string createdAt, string text);
  event LogEntriesRecieved(address userAddress);
  event LogRemoveEntry(address userAddress, uint index);
  event LogToggleActive(bool isActive);

  /// @notice function call to add a user to the contract's storage
  function addUser() public isActiveContract {
    require(!users[msg.sender].isActive, "User already exists");

    // This is weird since I cant instantiate an empty array of structs
    users[msg.sender].isActive = true;

    emit LogUserAdded(msg.sender);
  }


  /// @notice ALlows a user to archive themselves if they want to stop and make sure no more posts can be added in their name
  function archiveUser() public isActiveUser isActiveContract {
    users[msg.sender].isActive = false;

    emit LogUserArchived(msg.sender);
  }

  /// @notice allows a user to add a new entry
  /// @param createdAt - the ISO String of the time in which the memory was created
  /// @param text - the text of the memeory to be stored
  function addEntry(string memory createdAt, string memory text) public isActiveUser isActiveContract {
    users[msg.sender].entries.push(Entry(createdAt, text));

    emit LogEntryAdded(msg.sender, createdAt, text);
  }

  /// @notice returns all entries by a user
  /// @dev We return separate arrays as you cannot return an array of structs. The order of the arrays must be consistent in order to keep the text and times they were created in sync
  /// @return entries and createdAt - returns an array of entries and created at times
  function getUserEntries() public view isActiveUser isActiveContract returns (
    string[] memory entries,
    string[] memory createdAt
  ) {
    User memory user = users[msg.sender];
    entries = new string[](user.entries.length);
    createdAt = new string[](user.entries.length);

    for (uint i; i < entries.length; i++) {
      entries[i] = user.entries[i].text;
      createdAt[i] = user.entries[i].createdAt;
    }
  }

  /// @notice Allows a user to remove a memory
  function removeEntry(uint index) public isActiveUser isActiveContract {
    require(
      index >= 0 && index < users[msg.sender].entries.length,
      "Entry does not exist"
    );

    for (uint i = index; i < users[msg.sender].entries.length - 1; i++) {
      users[msg.sender].entries[i] = users[msg.sender].entries[i + 1];
      users[msg.sender].entries[i] = users[msg.sender].entries[i + 1];
    }

    users[msg.sender].entries.pop();

    emit LogRemoveEntry(msg.sender, index);
  }

  /// @notice checks if a user exists
  /// @return isACtive returns the boolean flag of if the user is active
  function userExists() public view returns (bool) {
    User memory user = users[msg.sender];

    return user.isActive;
  }

  /// @notice ability for contract owner to stop the contract from being used
  function toggleActive() public onlyOwner {
    isActive = !isActive;

    emit LogToggleActive(isActive);
  }
}
