# blockchain-developer-bootcamp-final-project
Final project for Consensys Bootcamp 2021

## Description
The rental market is a multi billion dollar market place stuck in the past of dated standards and technologies. A painpoint for companies trying to modernize the industry is acting as a payment facilitator. There is a lot of red tape and steps that need to be taken to simply be able to facilitate payment between a tenant signing a lease, a landlord receiving an initial payment (eg Security deposit),  and a potential 3rd party collecting its fee for helping the transaction to occur. For this project I would like to create a theoretical system in which a tenant can sign a digital lease and provide the required down payment (to be held in escrow). Then once a landlord counter signs payment could be released to the landlord as well as the fee that such a 3rd party provider requires without necessaitating a bank underwriter or payment processor to get in the way. The release of funds would also be on a timer such that if a landlord does not counter sign in a reasonable amount of time (slow landlords being another painpoint on closings) the contract would be void and funds returned to the tenant. Additionally once complete a copy of the contract can be stored for record keeping purposes.

I am trying to keep this project simple but I can forsee building in other incentives. For example rather than just voiding the contract when not counter signed quickly enough a landlord could be penalized in which a small percentage of the upfront costs get returned to the tenant.

## Example Workflow
1) Landlord uploads a lease template id (Will use hellosign for this) to be signed, provides their ETH wallet address, adds the email address of the tenant to sign the lease
2) Tenant recieves an email (perhaps for simplicity will remvoe this and just have the "tenant" go back to the app) and is taken to the app to sign and provide payment (This will hook into metamask).
3) Landlord receives an email (or just goes to app) to counter sign and counter signs the lease.
4) Payment gets released to landlord and 3rd party provider.


## Simplifying
For the sake of this project there are things I would not consider. For example I will just have the `3rd` party be a single unchanging entity for the app thus their eth wallet address could be hardcoded to collect funds. I also may skimp on user experience as to not actually send emails and just have whoever tests the app login after going through the "happy path" steps between user types. I will also most likely create some dummy users for a landlord and tenant.
