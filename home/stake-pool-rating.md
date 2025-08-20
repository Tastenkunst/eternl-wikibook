---
description: How Eternl rates stake pools.
icon: coins
---

# stake pool rating

Cardano is a blockchain platform that allows users to stake their ADA cryptocurrency in stake pools to earn rewards. Understanding the parameters of a Cardano stake pool is essential for both pool operators and delegators.

The idea behind the staking pools is that the pools process the transactions of the network. Those transactions are packed within blocks that form the actual blockchain. Once a stake pool node produces a block, this block is distributed to the network. Now the other nodes verify the block to ensure it only contains valid transactions. Once the block is validated, it is added to the blockchain. For doing so they earn rewards. Those are distributed between the wallets staking their ADA on those pools.

Let’s first have a look at the parameters displayed in Eternl’s staking section for each pool:

### Saturation

* **Saturation** refers to the point at which a stake pool is fully utilized.

Each stake pool has an optimal size, and when it reaches this size, it is considered saturated. Delegating more ADA to a saturated pool will not increase the rewards; in fact, it may reduce them. This is because the rewards are shared among all delegators, and an oversaturated pool dilutes these rewards.

### Pledge

* **Pledge** is the amount of ADA that a stake pool operator commits to their own pool.

The pledge shows the operator’s confidence and commitment to the pool. A higher pledge can make the pool more attractive to delegators because it indicates that the operator has a significant stake in the pool’s success. It can also positively affect the pool's ranking and rewards.

### Fees

* **Fees** are the costs that a stake pool operator charges for managing the pool.

There are two main types of fees:

#### Fixed Fee \[₳]

A set amount of ADA that is taken from the pool's rewards before they are distributed to delegators. This is typically used to cover the operational costs of running the pool. For quite a while 340 ADA was considered a reasonable fee, but this amount has been reduced to 170 ADA lately.

#### Variable Fee (Margin) \[%]

A percentage of the remaining rewards after the fixed fee is deducted. This is the operator’s profit margin.

### Luck

**Luck** is calculated by first determining which percentage of the global stake the current stake pool holds. Then the same percentage of the overall number of transactions of the current epoch is considered to be 100% luck. So the number of transactions a pool is expected to process into blocks is consistent with its share of the global stake.

### Return on Stake (RoS)

* **Return on Stake (RoS)** is the annualized percentage return that delegators can expect to earn by staking their ADA in a particular pool.

RoS is often expressed in terms of the `e12` epoch, meaning it is calculated based on the rewards received over 12 epochs. This metric helps delegators estimate the potential earnings from their staked ADA.

> > \[!INFO]
>
> #### Example
>
> Imagine a stake pool with the following parameters:
>
> * **Pledge:** 100,000 ADA
> * **Fixed Fee:** 170 ADA per epoch
> * **Variable Fee:** 2%
> * **Saturation Point:** 64 million ADA
> * **RoS (e12):** 5%
>
> If the pool has reached its saturation point, delegators can expect to earn a RoS of approximately 5% annually on their staked ADA. The pool operator will take 170 ADA as a fixed fee and 2% of the remaining rewards as a variable fee.

> \[!SUCCESS]\
> By understanding these parameters, users can make informed decisions about which stake pool to delegate their ADA to and what to expect in terms of returns and costs.

## How Eternl Determines the Order of Displayed Pools Under "Staking"

Eternl uses a comprehensive approach to sort, score, rank, and incentivize or penalize certain types of staking pools. Here’s how it works:

### 1. Initial Sorting by Pledge

Pools are first sorted by their pledge amount, but only if their margin is below 1%, the pledge is fulfilled, and exceeds 50 ADA.\
Pools not meeting these criteria are moved to the end of the list.

### 2. Scoring Based on Pledge

* The maximum pledge of all eligible pools is identified.
* Each pool’s score is set to zero if the pledge is not fulfilled or is below 50 ADA.
* Scores are then normalized by dividing each pool’s pledge by the maximum pledge.

### 3. Median Normalization and Extra Points Calculation

* The desired number of pools is around 500.
* The 250th pool in the sorted list is used as the median.
* Each pool’s score is adjusted to match the median pool’s score.
* Additional points are awarded to pools starting from the top, with `250 - current rank` points added.

### 4. Saturation Level Adjustment

* Pools are ranked higher if they are decently saturated but not almost full.
* Pools with saturation levels over 95% are penalized.
* Oversaturated pools, those with fixed costs over 340 ADA, or margins over 1%, are also penalized.

### 5. Bonus and Additional Weighting

* Pools that have minted more than 10 blocks receive a bonus.
* Additional weight is added based on the RoS over the last 12 epochs.

### 6. Single vs. Multi-Pool Operators

* The best pool of a multi-pool setup has its score adjusted to be no higher than the lowest score among the top 48 single pool operators, ensuring it does not rank above 49.
* Subsequent pools in the multi-pool setup receive even lower scores based on the best-ranking pool in the setup.

### 7. Final Sorting

After all calculations, the pools are sorted by their final scores to determine the display order.

> \[!SUCCESS]> \
> This method ensures that highly pledged, well-staked, and efficient single-operator pools with low margins are incentivized and prominently displayed.

This version will display correctly and cleanly on GitBook, preserving your original formatting intent while using GitBook-supported callouts and structure. Let me know if you'd like it styled with custom GitBook blocks or code injections for enhanced visuals.
