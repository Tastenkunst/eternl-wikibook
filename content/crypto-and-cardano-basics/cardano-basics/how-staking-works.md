---
description: An introduction to staking and delegation on Cardano
---

# How Staking Works

Staking helps secure the Cardano network. ADA holders can delegate their stake to a stake pool, which participates in producing blocks. Delegators may receive ADA rewards through the protocol.

:::info
Delegating to a stake pool does not transfer your ADA to its operator or lock your funds. Your ADA remains under your control and can be spent while it is delegated.
:::

## Proof of Stake and Stake Pools

Cardano uses a proof-of-stake protocol called Ouroboros. Stake pools operate nodes that participate in block production. For each slot, the protocol determines which pools are eligible to produce a block, taking delegated stake into account. Selection is probabilistic, so a pool's opportunity to produce blocks varies over time.

Unlike proof of work, used by Bitcoin, proof of stake does not select block producers through energy-intensive mining. The two systems use different approaches to securing their networks.

Running a stake pool requires technical knowledge and ongoing maintenance. ADA holders who do not run a pool can participate by delegating their stake to one.

## Delegation

A staking credential identifies the stake associated with eligible addresses. When you delegate it to a pool, the protocol records your choice in a transaction. You can delegate to a different pool at any time by submitting another delegation transaction. The change takes effect after a delay in the epoch cycle, so rewards from your previous pool can continue for a while.

In a typical wallet account, eligible ADA received at addresses linked to the delegated staking credential is included in later snapshots. Your spendable balance can change: ADA spent before a snapshot is no longer part of that snapshot. An address without a staking credential does not contribute stake through that address.

Cardano allows stake to be distributed among multiple pools using multiple staking credentials. Eternl does not support this within a single account, but you can distribute ADA among multiple accounts and delegate each account to a different pool.

For the steps in Eternl, see [Staking in Eternl](/using-eternl/staking/staking-in-eternl.md).

## Epochs and Rewards

Cardano divides time into **epochs** of approximately five days. The protocol takes snapshots of stake and uses them in the process of selecting pools and calculating rewards. As a result, a new delegation does not produce rewards immediately. The first rewards typically arrive after about 15 to 20 days, depending on when you delegate and whether the pool produces blocks.

Rewards are calculated and distributed by the protocol, not sent manually by the pool operator. They come from transaction fees and the monetary reserve. They depend on factors including the delegated stake, pool performance, fees, and protocol parameters. Rewards can vary and are not guaranteed for every epoch.

Rewards accumulate in a reward account associated with the staking credential. They contribute to delegated stake without being withdrawn first. To use them in ordinary transactions, they must be withdrawn; the required transaction incurs a fee.

:::info
Under the current Cardano governance rules, a typical wallet account must also have a voting delegation to a registered DRep or one of the built-in voting options before its rewards can be withdrawn. Rewards continue to accumulate without this delegation. In Eternl, if the selected DRep is inactive, choose an active DRep or one of the built-in voting options to withdraw rewards.
:::

## Costs and Choosing a Pool

Registering a staking credential requires a refundable deposit and a transaction fee. Changing delegation also requires a transaction fee. The deposit can be returned when the credential is deregistered, subject to the applicable rules and transaction fee.

The **return on stake (ROS)** is a way to express rewards relative to the amount delegated, often as an annualized percentage. An observed or estimated ROS is not a promise of future rewards.

Pools set a fixed cost and a margin. The fixed cost is taken from the pool's epoch rewards before the margin is applied to the remainder. It is not charged separately to each delegator. Pool performance, pledge, and saturation can also affect rewards, so the lowest fee alone does not necessarily mean the highest return.

For example, suppose a pool earns 5,000 ADA in an epoch and has a fixed cost of 200 ADA and a 5% margin. After the fixed cost, 4,800 ADA remains. The 5% margin is 240 ADA, leaving 4,560 ADA to be distributed according to the reward rules. These figures are illustrative, not fee recommendations or protocol minimums. Pool owners may also receive rewards for their own delegated stake.

A pool is **saturated** when additional delegated stake no longer increases its maximum reward in the same way. This can reduce the reward share for delegators. Actual returns vary, especially for smaller pools that may produce blocks less frequently.

## Further Reading

* [Cardano: Stake Your ADA](https://cardano.org/stake-pool-delegation/)
* [Cardano Docs: Pledging and Rewards](https://docs.cardano.org/about-cardano/learn/pledging-rewards)
* [Cardano: Governance](https://cardano.org/governance/)

[//]: # (### Delegating to a Stake Pool Using Eternl Wallet)

[//]: # ()
[//]: # (#### Explore Pools)

[//]: # ()
[//]: # (In Eternl, view available pools. Select one or delegate to multiple pools by adding more accounts to your wallet.)

[//]: # ()
[//]: # (#### Delegation Process)

[//]: # ()
[//]: # (Navigate to the ‘Staking’ section in Eternl. Choose “Delegate” for the chosen pool. Confirm the transaction with your wallet spending password or hardware device. Verify delegation in “Account” or “Staking” after wallet synchronization.)

[//]: # ()
[//]: # (#### Claiming Staking Rewards)

[//]: # ()
[//]: # (**Manual Claim:**)

[//]: # ()
[//]: # (Use the 'Withdraw Rewards' button in the Staking Dashboard.)

[//]: # ()
[//]: # (**Automatic Claim:**)

[//]: # ()
[//]: # (Enable the Auto Withdrawal option in the Account Settings)

[//]: # ()
[//]: # (If enabled, rewards will automatically be withdrawn if needed when creating a transaction.)

[//]: # ()
[//]: # (#### Un-staking or De-registering)

[//]: # ()
[//]: # (1. Choose “Account Settings” from the main menu.)

[//]: # (2. Select “Unstake wallet / Deregister wallet”)

[//]: # (3. Confirm the transaction with by confirming the warning “I understand, that any pending reward will be lost”)

[//]: # (4. Confirm the transaction with your spending password or hardware device.)

[//]: # (5. Check “Staking” or “Account” to verify de-registration.)

[//]: # ()
[//]: # (#### Timing of Rewards)

[//]: # ()
[//]: # (* Initial Rewards: It typically takes 15-20 days to receive your first rewards after delegating your ADA to a pool.)

[//]: # (* Subsequent Rewards: After the initial period, rewards are distributed every epoch, approximately every 5 days.)
