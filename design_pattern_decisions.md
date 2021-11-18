1) Inheritance - This contract inherits the OpenZeppelin Ownable contract to add access control to the function that can disable
the contract from being used if necessary (for instance something malicious is happening)

2) Access Control - The contract can only be toggled on or off via the `toggleActive` function which can only be called by the contract owner via the `onlyOwner` modifier
