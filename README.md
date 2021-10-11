# LVES.io
Final project for Consensys Bootcamp 2021

## Description
Lves lets you journal about life’s most important events and record the inner workings of your mind. Time and time again, journaling has been shown to improve your state of mind and clarify your thoughts. Now, you can write with the confidence that your life will be recorded on the blockchain, existing long after you are gone…your life doesn’t end with death. Together, we are recording the complex, varied lives of all humans who are alive today, and all humans yet to come.


## Example Workflow
1) User comes to lves.io and signups in which they will connect their wallet, which will create an association with their public key and the their "Journal" storage.
2) User will then have a view to visualize their posts or add a new one.
3) Upon saving their post this will store encrypted data permanently on the blockchin to have access to forever.


## Local Development
* Install the root dependencies of the project (run the following commond in the root of the project) `npm i`
* Install client dependencies `cd client && npm i`
* Start the truffle development console `npx hardhat node`
* Compile and deploy contracts `npm run compile:dev`
* Start the client. Open a new tab in your terminal, navigate to this project then from within the `client/` directory run `npm run start`
* In your browser, navigate to `http://localhost:7777` where you should see the app running
