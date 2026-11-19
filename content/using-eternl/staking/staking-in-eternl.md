# Staking ADA in Eternl

Staking on Cardano allows you to delegate your ADA to a stake pool and earn staking rewards while keeping full control over your funds.

Your ADA never leaves your wallet during staking and remains spendable at any time.

***

## Open the Staking Dashboard

To access staking features in Eternl:

1. Click **Staking** in the left sidebar
2. Select the wallet and account you want to use in the wallet list

<br>

The staking dashboard displays:

* Current staking status
* Reward history
* Available rewards
* Estimated rewards
* Your stake key
* Stake pool management options

![Staking Dashboard](/assets/pictures/staking_dashboard.jpg)

***

## Delegate to a Stake Pool

To start staking:

1. Open the **Staking** page
2. Click the **Stake** button
3. The list of available stake pools will open

You can:

* Search for a specific pool
* Compare pools
* Review pool statistics
* Delegate directly from the list

Each stake pool displays useful information such as:

| Field      | Description                        |
| ---------- | ---------------------------------- |
| Saturation | Indicates how full the pool is     |
| Pledge     | ADA committed by the pool operator |
| Fees       | Pool operating fees                |
| ROS        | Estimated Return on Stake          |

To delegate:

1. Click **Delegate** on the desired pool
2. Review the transaction
3. Confirm and sign the transaction


## Important: Governance Requirement for Reward Withdrawals

Due to changes in the Cardano protocol introduced with on-chain governance, staking reward withdrawals require a governance delegation.

Rewards can continue accruing without one, but they cannot be withdrawn.

You can set a governance delegation by:

* Delegating to a DRep (Delegated Representative), or
* Selecting **Always Abstain** or **Always No Confidence**

The built-in options allow reward withdrawals without selecting a DRep.

:::success
You can manage governance delegation inside the **Governance** section of Eternl.
:::

***

## Staking Rewards

Unclaimed rewards remain in the reward account and contribute to the account's stake. They do not need to be manually compounded.

Rewards are stored separately from your spendable wallet balance until withdrawn.

:::warning
Reward withdrawals require a governance delegation.
:::

***

## Auto Withdrawal

Eternl includes an optional **Auto Withdrawal** feature.

When enabled, staking rewards are automatically withdrawn whenever you create a transaction from the selected account.

This helps:

* Reduce the number of separate transactions
* Simplify wallet usage
* Lower total transaction fees

***

## Why Auto Withdrawal Can Save Fees

Without Auto Withdrawal enabled:

1. You create one transaction to withdraw rewards
2. You create another transaction to send funds

This results in two separate transaction fees.

With Auto Withdrawal enabled:

* Reward withdrawal and fund transfer are combined into a single transaction

This reduces total fees.

***

## Manual Reward Withdrawal

If Auto Withdrawal is disabled, rewards can still be withdrawn manually.

To manually withdraw rewards:

1. Open the **Staking** page
2. Locate the **Unclaimed ADA** card
3. Click the **Claim rewards** button
4. Review and confirm the transaction

***

## Notes on Staking

* Rewards are distributed automatically by the Cardano protocol
* Delegation changes require [several epochs](/using-eternl/staking/staking-mechanics.md) before rewards begin
* Your ADA always remains under your control
* Staking does not lock your funds
* You can change stake pools at any time

## Unstake an Account

To unstake an account, follow these steps:

1. Open the **three-dot menu** in the top bar
2. Select **Settings**
3. Open **Account Settings**
4. Click **Unstake Account**
5. Enable the **confirmation switch**
6. Click **De-register Account**
7. **Sign** the transaction

:::warning
Eternl automatically withdraws any currently available staking rewards as part of the de-registration transaction. However, pending rewards that have not yet been credited, including pending Catalyst rewards, will be lost.
:::

:::info
The account needs enough available ADA to pay the transaction fee.
:::
