# Staking ADA in Eternl v2

Staking on Cardano allows you to delegate your ADA to a stake pool and earn staking rewards while keeping full control over your funds.

Your ADA never leaves your wallet during staking and remains spendable at any time.

---

## Open the Staking Dashboard

To access staking features in Eternl v2:

1. Open Eternl
2. Select your wallet
3. Click **Staking** in the left sidebar

The staking dashboard displays:

- Current staking status
- Reward history
- Available rewards
- Estimated rewards
- Your stake key
- Stake pool management options

![Staking Dashboard](/public/assets/pictures/staking_dashboard.png)

---

## Delegate to a Stake Pool

To start staking:

1. Open the **Staking** page
2. Click the **Stake** button
3. The list of available stake pools will open

You can:

- Search for a specific pool
- Compare pools
- Review pool statistics
- Delegate directly from the list

![Stake Pool List](/public/assets/pictures/stake_pool_list.png)

Each stake pool displays useful information such as:

| Field | Description |
| --- | --- |
| Saturation | Indicates how full the pool is |
| Pledge | ADA committed by the pool operator |
| Fees | Pool operating fees |
| ROS | Estimated Return on Stake |

To delegate:

1. Click **Delegate** on the desired pool
2. Review the transaction
3. Confirm and sign the transaction

---

### Important: Governance Requirement for Reward Withdrawals

Due to changes in the Cardano protocol introduced with on-chain governance, staking reward withdrawals now require governance participation.

To withdraw staking rewards, your wallet must:

- Be delegated to a stake pool
- Have a governance delegation configured

:::warning
Without governance delegation configured, reward withdrawals are restricted by the Cardano protocol.
:::

This can be done by:

- Delegating to a DRep (Delegated Representative), or
- Selecting **Always Abstain**

The **Always Abstain** option allows reward withdrawals without actively participating in governance voting.

:::success
You can manage governance delegation inside the **Governance** section of Eternl.
:::

---

## Staking Rewards

Staking rewards are automatically added to your delegated stake.

This means rewards continue contributing to future rewards without requiring manual compounding.

Rewards are stored separately from your spendable wallet balance until withdrawn.

---

## Auto Withdrawal

Eternl v2 includes an optional **Auto Withdrawal** feature.

When enabled, staking rewards are automatically withdrawn whenever you send a transaction from your wallet.

This helps:

- Reduce the number of separate transactions
- Simplify wallet usage
- Lower total transaction fees

---

## Why Auto Withdrawal Can Save Fees

Without Auto Withdrawal enabled:

1. You create one transaction to withdraw rewards
2. You create another transaction to send funds

This results in two separate transaction fees.

With Auto Withdrawal enabled:

- Reward withdrawal and fund transfer are combined into a single transaction

This reduces total fees.

---

## Manual Reward Withdrawal

If Auto Withdrawal is disabled, rewards can still be withdrawn manually.

To manually withdraw rewards:

1. Open the **Staking** page
2. Locate "Unclaimed Ada" card
3. Click the **Claim rewards** button
4. Review and confirm the transaction

:::warning
Remember that reward withdrawals still require DRep delegation due to Cardano governance rules.
:::

---

## Notes

- Rewards are distributed automatically by the Cardano protocol
- Delegation changes require [several epochs](http://localhost:5174/staking-and-delegation/staking-mechanics) before rewards begin
- Your ADA always remain under your control
- Staking does not lock your funds
- You can change stake pools at any time
