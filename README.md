# LVES.io
Final project for Consensys Bootcamp 2021

## Description
Lves lets you journal about life’s most important events and record the inner workings of your mind. Time and time again, journaling has been shown to improve your state of mind and clarify your thoughts. Now, you can write with the confidence that your life will be recorded on the blockchain, existing long after you are gone…your life doesn’t end with death. Together, we are recording the complex, varied lives of all humans who are alive today, and all humans yet to come.


## Example Workflow
1) User comes to lves.io and signups in which they will connect their wallet, which will create an association with their public key and the their "Journal" storage.
2) User will then have a view to visualize their posts or add a new one.
3) Upon saving their post this will store encrypted data permanently on the blockchin to have access to forever.

## Prerequisites
* Install Node.js
* Have the Metamask browser extension installed
* Add a `"Custom RPC"` in Metamask with `Network Name - ${Any Name}` `New RPC URL - http://127.0.0.1:8545` `Chain ID - 1337` (Note: Make sure to use `127.0.0.1` and not `localhost` as `localhost` seemingly does not resolve correctly on `Brave` and `Chrome` browsers)


## Local Development
* Install all project dependencies by running `npm run install-all-deps`
* Start the truffle development console `npx hardhat node`
* Compile and deploy contracts `npm run compile:dev`
* Grab your ETH Wallet Address from Metamask that is connected to the localhost address you you created and add some test ETH to it with `npx hardhat --network localhost faucet ${YOUR_WALLET_ADDRESS}`
* Start the client by opening a new tab in your terminal, navigate to this project then from within the `client/` directory run `npm run dev`
* In your browser, navigate to `http://localhost:7777` where you should see the app running
