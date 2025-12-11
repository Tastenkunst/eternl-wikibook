---
description: How staking works
---

# Staking & delegation

## How staking works

### Abstract&#x20;

{% hint style="info" %}
This article outlines how staking works on the Cardano blockchain, contrasting it with Bitcoin's Proof of Work (PoW). Staking involves holding ADA, Cardano's cryptocurrency, to support network operations and secure transactions. Users delegate ADA to stake pools, which then participate in validating transactions and creating new blocks. Unlike Bitcoin, which requires significant computational power, Cardano's Proof of Stake (PoS) system is more energy-efficient and democratic. Validators are chosen based on the amount of ADA they stake, with rewards distributed for their contribution. The system aims to enhance network security and performance, rewarding participants with additional ADA. The article also compares Cardano's approach to Ethereum's staking, emphasizing Cardano's more decentralized and user-friendly mechanism.
{% endhint %}

## 1. Proof of Stake in Cardano

Cardano's Proof of Stake is a method that secures the network and adds new blocks to the blockchain, but it works differently than Bitcoin's system. Instead of requiring massive amounts of computing power, it lets users lock up some of their Cardano coins as a sign of reliability. The more coins you lock up, or "stake," the better your odds of being selected to check transactions and receive rewards.

Validators on the Cardano network are selected based on the amount of ADA they are willing to delegate (stake) to a pool or use as collateral. Stake pools are responsible for verifying transactions and creating new blocks. The more ADA a validator stakes, the higher the probability they have of being chosen to produce the block.

Staking on the Cardano blockchain involves participants (stakeholders) delegating their ADA (Cardano's native cryptocurrency) to a stake pool, which helps secure the network and participate in the Proof-of-Stake (PoS) consensus mechanism. Here's how it generally works:

#### Stakeholders

Anyone who holds ADA cryptocurrency can participate in staking.

#### Stake Pools

Stake pools are entities on the Cardano network that are responsible for processing transactions and creating new blocks. Stake pools consist of a combination of technical infrastructure and the expertise of the pool operator.

#### Delegation

ADA holders can delegate their ADA to a stake pool of their choice. This process involves selecting a stake pool and delegating their ADA holdings to that pool. Delegation does not involve transferring ownership of ADA; it simply allows the stake pool to include the delegated ADA in its staking power.

#### Rewards

By delegating their ADA to a stake pool, stakeholders earn rewards in the form of additional ADA. These rewards are distributed periodically, typically every epoch (a fixed period of time on the Cardano blockchain, currently around 5 days), and are proportional to the amount of ADA delegated to the pool.

#### Decentralization and Security

Cardano aims to achieve decentralization and security through its PoS mechanism. By participating in staking, ADA holders contribute to the security and decentralization of the network, as stake pools are randomly selected to create blocks based on the amount of ADA delegated to them.

#### Pool Performance

Stake pool operators are incentivized to maintain high-performance servers and secure their operations to attract delegators. Stakeholders often look at a pool's performance, uptime, fees, and other factors before deciding where to delegate their ADA.

#### Pool Operator Rewards

Stake pool operators also receive rewards for their role in maintaining the network and running a stake pool. These rewards are separate from the rewards earned by delegators.

Overall, staking on the Cardano blockchain provides a way for ADA holders to participate in securing the network and earn rewards while contributing to the decentralization of the Cardano ecosystem.

\</details>

### 2. Rewards Distribution

In the Cardano ecosystem, rewards are generated from two key sources: all transaction fees collected from transactions within a block minted during an epoch, and monetary expansion, which is the process of increasing the circulating ADA supply towards a maximum cap. These rewards are then proportionally distributed to both stakers and pool operators. Pool operators are rewarded for their crucial role in maintaining and securing the network, while the remaining rewards are allocated among the stakers. This system is designed to motivate users to engage in staking their ADA, thus enhancing the network's security and overall performance by ensuring a vested interest in the health and efficiency of Cardano.

\</details>

### Return on Stake (RoS)\</summary>

The RoS in Cardano depends on several factors, including the total amount of ADA staked on the network and the individual stake pool's performance and the amount of ADA staked to the pool. RoS can vary but provides an incentive for ADA holders to participate in staking while keeping full access to spend their ADA whenever.

### 4. Cardano vs Ethereum staking mechanisms

Cardano and Ethereum offer contrasting staking mechanisms, with Cardano featuring a native liquid staking system that allows ADA to remain accessible for spending during staking, without any minimum staking requirements or penalties for misbehavior. This approach promotes decentralization and security by making participation more straightforward and aligning stakeholders' interests with the network's needs. Cardano relies on the Ouroboros Proof-of-Stake consensus and Nash equilibrium theory to encourage honest participation, avoiding the need for slashing as a deterrent.

On the other hand, Ethereum requires validators to lock up 32 ETH, with the possibility of slashing for dishonest actions, aiming to secure the network by economically disincentivizing attacks. However, this has raised concerns about centralization and the dependence on third-party services for staking, which could compromise the network's decentralization and security.

Cardano's model is highlighted for its potential to maintain a more decentralized network, allowing ADA to serve both as a secure asset within the network and as a medium of exchange, thanks to its liquid staking. In contrast, Ethereum's approach, particularly its reliance on third-party services, might hinder the liquidity and practical usability of ETH as money, moving towards a more centralized model. This comparison underscores the importance of staking mechanisms in achieving a balance between security, decentralization, and usability within blockchain networks.

In the Cardano network, ADA holders have the option to participate directly in the network's consensus by operating active nodes or to delegate their participation rights to a stake pool. This delegation process allows those who may not have the capacity or desire to maintain active participation to still contribute to the network's security and decision-making processes. When selecting a stake pool, it's crucial to understand that a lower variable commission does not automatically translate to higher rewards. The annual return difference between delegating to a pool with a 1% commission versus a 5% commission is relatively minor, around 1/4% of the expected annual return. The primary considerations for choosing a stake pool should be the operator's reliability in keeping the nodes safe and operational and the pool's saturation level. Saturation occurs when a pool has a high level of staking, leading to diminished rewards for its delegates due to the distribution of rewards across a larger number of participants. The rewards from staking are automatically delegated to the stake pool, generating additional rewards over time. Any changes in the delegation preferences are processed after the next epoch. The Return on ADA (ROA) is a critical metric for assessing a stake pool's performance, calculated as the direct result of the blocks produced by the stake pool divided by the total amount of ADA staked in the pool for each epoch. The number of blocks a stake pool is assigned in each epoch is determined through a lottery process, contributing to the variability in ROA% across different epochs. For ADA holders looking to track their rewards and estimate future earnings, resources are available to provide detailed historical and predictive insights into the rewards process.

### 5. About fees\</summary>

On the Cardano blockchain, stake pool operators charge two types of fees to cover the costs associated with running a pool and to provide an incentive for their services: a fixed fee and a variable fee.

#### Fixed Fee

The fixed fee is a set amount of ADA that is deducted from the total rewards earned by the pool in each epoch (an epoch is a fixed period in which rewards are calculated and distributed on the Cardano network). The minimum fixed fee is set by the Cardano protocol and can only be changed through governance actions. This fee is not charged to each delegator individually; rather, it is taken from the total rewards before distribution to all delegators.

#### Variable Fee (Margin)

The variable fee, also known as the margin, is a percentage of the total rewards that the pool earns after the fixed fee has been deducted. This fee is set by the pool operator and can range from 0% to 10% or more, depending on the pool's policies. The variable fee is intended to provide additional compensation to the pool operator on top of the fixed fee.

The difference between the two fees is that the fixed fee is a constant amount, while the variable fee is a percentage that can result in a different amount of ADA being taken as a fee based on the total rewards the pool earns in an epoch. When rewards are distributed, the fixed fee is taken first, and then the variable fee is calculated on the remaining rewards. The rest of the rewards are then distributed to the delegators proportionally to their stake in the pool

For example, if a pool earns 5,000 ADA in rewards for an epoch, the pool operator would first take the fixed fee of 340 ADA. If the pool's variable fee is set at 5%, the operator would then take 5% of the remaining 4,660 ADA (which is 233 ADA), resulting in a total of 573 ADA for the pool operator (340 ADA fixed fee + 233 ADA variable fee) and 4,427 ADA to be distributed among the delegators.

It's important for delegators to understand these fees when choosing a stake pool, as they can affect the overall rewards received from staking ADA. Lower fees do not necessarily mean higher returns, as the performance and reliability of the pool are also crucial factors.

### 6. Comparison with Bitcoin's Proof of Work

Bitcoin uses a PoW mechanism, where miners solve complex mathematical problems to validate transactions and create new blocks. This process requires significant computational power and energy. The rewards in Bitcoin come in the form of newly minted bitcoins (block rewards) and transaction fees. Unlike Cardano, Bitcoin's reward system heavily relies on the computational work done by miners, not on the amount of cryptocurrency they hold.

Environmental Impact and Efficiency: Cardano's PoS is more energy-efficient compared to Bitcoin's PoW, as it does not require the same level of computational power. This makes Cardano more environmentally friendly and potentially more scalable.

In summary, Cardano's staking mechanism offers a more energy-efficient and potentially more democratic way to participate in the blockchain's security and governance, compared to Bitcoin's computationally intensive PoW mechanism.

### 7. Delegating to a Stake Pool using Eternl wallet\</summary>

#### 7.1 Explore Pools:

In Eternl, view available pools. Select one or delegate to multiple pools by adding more accounts to your wallet.

#### 7.2 Delegation Process:

Navigate to the ‘Staking’ section in Eternl. Choose “Delegate” for the chosen pool. Confirm the transaction with your wallet spending password or hardware device. Verify delegation in “Account” or “Staking” after wallet synchronization.

#### 7.3 Claiming Staking Rewards

**Manual Claim:**

Use the 'Withdraw Rewards' button in the Staking Dashboard.

**Automatic Claim:**

Enable the Auto Withdrawal option in the Account Settings

\{% hint style="success" %\} If enabled, rewards will automatically be withdrawn if needed when creating a transaction. \{% endhint %\}

#### 7.4 Un-staking or De-registering

1. Choose “Wallet Settings” from the main menu.
2. Select “Unstake wallet / Deregister wallet”
3. Confirm the transaction with by confirming the warning “I understand, that any pending reward will be lost”
4. Confirm the transaction with your spending password or hardware device.
5. Check “Staking” or “Account” to verify de-registration.

#### 7.5 Timing of Rewards

* Initial Rewards: It typically takes 15-20 days to receive your first rewards after delegating your ADA to a pool.
* Subsequent Rewards: After the initial period, rewards are distributed every epoch, approximately every 5 days.
