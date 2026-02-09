# Understanding balances displayed in Eternl

In a regular wallet there is only one balance that determines the amount of money one owns and is able to spend. In crypto and especially Cardano things work differently.
In Cardano a wallet has 2 types of balances, the balance it can spend on payment credentials, and the balance that counts towards your stake on your stake credentials. These 2 can be dynamically put together and/or split and merged with others, resulting in franken addresses.

In Eternl we show a breakdown of your funds divided into different categories. It does so for every single account and wallet and those balances are shown on the summary page. Below you can see an example of what this looks like, depending on the structure of the wallet, different balances are shown as not every property is available for every wallet.

<figure><img src="../../../../.gitbook/assets/pictures/eternl_balances.png" alt=""><figcaption></figcaption></figure>
</details>

## Total Funds

The first balance shown is the total sum of your owned funds. This will contain both spendable (albeit potentially locked up by tokens) ADA and your staking rewards.

- **Balance:** Your spendable in-wallet ADA
- **Rewards:** Staking rewards that are yet to be claimed to your wallet
(*Reward balance does not contribute to your Catalyst voting power*)

## Stake Breakdown

- **Controlled stake:** Funds staked to your stake key regardless of if you own them or not

- **Staked externally:** Funds owned by this wallet, but staked to another stake key (franken address)

- **Not staked:** Funds owned by this wallet, but on a enterprise address without stake credentials.

## Available Funds

The next section describes the available funds.

This is a bit more complex and specific for Cardano stemming from the eUTxO system. In order to receive a token it needs to be sent inside a UTxO. A UTxO requires a minimal amount of ADA to be added within the transaction. This amount of ADA is therefore bound to the token or “locked”.

Eternl has a feature called “Token fragmentation” available through settings. There you can define how many tokens are stored on one UTxO. By structuring your wallet properly through Token Fragmentation, you save ADA on transaction fees and generally make it easier (or possible) for DApps to build desired transactions. Storing too many tokens on one UTxO can cause it to be impossible for a DApp to put together a viable transaction (that doesn’t exceed chain limits).

Generally it is advisable to have a ratio of about 20 tokens per 7 ADA to have a good tradeoff between the 2.

- **Estimated Available:** Estimated available ADA that are not attached to tokens.

- **Estimated Locked:** Estimated amount of ADA attached to tokens

### There are a few other sub-balances that are not always shown

### Collateral

Collateral can be required for interaction with smart contracts. It reserves a small amount of ADA (5) to be spent if the validation of a smart contract fails. If collateral is set for the wallet the amount of ADA locked for collateral will be shown here.

### Currently bound to tokens

This entry only shows when the current amount of ADA attached to tokens is too little compared to the ideal case of 20 Tokens per 7 ADA. In that case, currently bound will tell you how much is actually attached to tokens at this time.

### Token Fragmentation

This is shown if the “currently bound to tokens” property does not match the optimal degree of fragmentation as described before. It estimates how many ADA would be locked if fragmentation was optimal.

Then there are properties that are connected to staking.
