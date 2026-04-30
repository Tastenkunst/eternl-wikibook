# Staking & Rewards

Staking on Cardano is liquid, meaning your ADA never leave your wallet and are never locked. However, the protocol follows specific rules regarding timing and governance that can be confusing.

### Where are my rewards? (The 3-Epoch Rule)
* **Problem:** You started staking or switched to a new pool, but you don't see any rewards yet.
* **Explanation:** Cardano uses a snapshot system. It takes **3 full epochs** (approx. 15–20 days) before you receive your first rewards from a new pool.
* **Note:** This is a protocol-level delay and not an error in Eternl. Your rewards will start to appear automatically after this period.

### Why is 2 ADA "missing" from my balance?
* **Problem:** Your total balance decreased by 2 ADA when you started staking for the first time.
* **Explanation:** When you first register your stake key on the blockchain, the Cardano network requires a **2 ADA deposit** (Stake Key Registration).
* **Solution:** This is not a fee, but a refundable deposit. If you ever decide to completely undelegate and deregister your stake key, you will receive these 2 ADA back.

### Cannot Withdraw Rewards (DRep Delegation)
* **Problem:** You try to withdraw/claim your staking rewards, but the transaction fails or the button is inactive.
* **Cause:** Since the Voltaire governance era, the Cardano protocol requires you to be **delegated to a DRep** (Decentralized Representative) to withdraw rewards.
* **Solution:** 
    * Navigate to the Governance section.
    * Ensure you have delegated your voting power to a DRep (or selected an option like "Always Abstain").
    * Once your DRep delegation is active, you will be able to withdraw your rewards.

### Switched Pools - Old Pool is still showing
* **Problem:** You switched your delegation to a new pool, but Eternl still shows the old pool name.
* **Explanation:** Due to the epoch-based snapshot system, your delegation to the new pool only becomes active after a certain period.
::: info
The "Current" pool will update automatically according to the blockchain's timeline. You don't need to take any further action.
:::
