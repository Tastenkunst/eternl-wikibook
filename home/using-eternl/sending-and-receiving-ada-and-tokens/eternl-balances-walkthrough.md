---
description: Understanding balances displayed in Eternl
---

# Eternl balances walkthrough

In a regular wallet there is only one balance that determines the amount of money one owns and is able to spend. In crypto and especially Cardano things work differently. In Cardano a wallet has 2 types of balances, the balance it can spend on payment credentials, and the balance that counts towards your stake on your stake credentials. These 2 can be dynamically put together and/or split and merged with others, resulting in Franken addresses.

In Eternl we show a breakdown of your funds divided into different categories. It does so for every single account in a wallet and those balances are shown when you on the "Send" page clicking on "Available " card.

Below you can see an example of what this looks like, depending on the structure of the wallet, different balances are shown as not every property is available for every wallet.

<details>

<summary>Funds on UTxOs</summary>

* All funds on UTxO's in the account&#x20;

</details>

<details>

<summary>Selected UTxOs</summary>

* Total amount of all manually selected UTxOs.

</details>

<details>

<summary>Rewards (not a UTxO)</summary>

* Accumulated rewards, which can be withdrawn, if the account is delegated to a DRep.

</details>

<details>

<summary>Pending inputs</summary>

These funds are being used in a pending transaction.

</details>

<details>

<summary>Collateral (not locked)</summary>

* Locked funds, to be used as collateral by Eternl - Disable collateral in the account settings to be able to spend these funds.

</details>

0\
Locked funds, to be used as collateral by Eternl - Disable collateral in the account settings to be able to spend these funds.\
Locked UTxOs\
₳

0\
Locked funds, not to be spent by Eternl or dapps - Manually select utxos to be unlocked on page: Account > UTxO List.\
Bound to tokens\
₳

2\
.\
47825\
Within Cardano, any token/NFT has some \[object Object] attached. The locked by tokens amount tells you (estimate) how much this is for your current wallet.\
For Token Fragmentation\
₳

2\
.\
47825\
Organising all of your UTxOs using Token Fragmentation would bind this much \[object Object].\
Locked Rewards\
₳

0\
Rewards are not spendable in dapps and must be withdrawn first. Eternl can do this automatically, go to: Account > Wallet Settings > Auto Withdrawal, and enable it. For that you the account must be delegated to a DRep option.\
Transaction fees\
₳

0\
Submitting transactions to the Cardano blockchain costs transaction fees.\
Est. locked\
₳

2\
.\
47825\
Calculated total locked amount.\
Est. available\
₳

17\
.\
117144\
These are the funds after deducting all the locked funds, that can be sent.\
Show breakdown

Token Fragmentation\
Spread your assets over multiple utxo's to lower fees for future transactions.\
Token Fragmentation (TF) enabled

20\
Sets number of tokens each UTxO output should contain. It's a tradeoff between low transaction fees and amount of funds locked in the wallet. small bundle size -> low fees, more Ada locked. large bundle size -> higher fees, less Ada locked.

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

### Funds on UTxOs

The first balance shown is the total sum of your owned funds. This will contain both spendable (albeit potentially locked up by tokens) ADA and your staking rewards.

* **Balance:** Your spendable in-wallet ADA
* **Rewards:** Staking rewards that are yet to be claimed to your wallet (_Reward balance does not contribute to your Catalyst voting power_)

### Stake Breakdown

* **Controlled stake:** Funds staked to your stake key regardless of if you own them or not
* **Staked externally:** Funds owned by this wallet, but staked to another stake key (franken address)
* **Not staked:** Funds owned by this wallet, but on a enterprise address without stake credentials.

### Available Funds

The next section describes the available funds.

This is a bit more complex and specific for Cardano stemming from the eUTxO system. In order to receive a token it needs to be sent inside a UTxO. A UTxO requires a minimal amount of ADA to be added within the transaction. This amount of ADA is therefore bound to the token or “locked”.

Eternl has a feature called “Token fragmentation” available through settings. There you can define how many tokens are stored on one UTxO. By structuring your wallet properly through Token Fragmentation, you save ADA on transaction fees and generally make it easier (or possible) for DApps to build desired transactions. Storing too many tokens on one UTxO can cause it to be impossible for a DApp to put together a viable transaction (that doesn’t exceed chain limits).

Generally it is advisable to have a ratio of about 20 tokens per 7 ADA to have a good tradeoff between the 2.

* **Estimated Available:** Estimated available ADA that are not attached to tokens.
* **Estimated Locked:** Estimated amount of ADA attached to tokens

#### There are a few other sub-balances that are not always shown:

#### Collateral

Collateral can be required for interaction with smart contracts. It reserves a small amount of ADA (5) to be spent if the validation of a smart contract fails. If collateral is set for the wallet the amount of ADA locked for collateral will be shown here.

#### Currently bound to tokens

This entry only shows when the current amount of ADA attached to tokens is too little compared to the ideal case of 20 Tokens per 7 ADA. In that case, currently bound will tell you how much is actually attached to tokens at this time.

#### Token Fragmentation

This is shown if the “currently bound to tokens” property does not match the optimal degree of fragmentation as described before. It estimates how many ADA would be locked if fragmentation was optimal.

Then there are properties that are connected to staking.
