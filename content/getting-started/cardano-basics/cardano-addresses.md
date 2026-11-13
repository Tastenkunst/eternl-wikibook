# Cardano Addresses

## Abstract

Cardano addresses function as a key component in the ecosystem, enabling both the secure holding of ADA and participation in staking to earn rewards. The system splits payment and stake addresses to facilitate these activities, allowing ADA to remain in payment addresses for spending, while stake addresses manage staking rights and rewards. This architecture supports various address types, including base, pointer, enterprise, and reward addresses, each serving distinct roles within the Cardano network. The design ensures users can easily engage in staking through their wallets, which automatically manage and recognize the different address types for a seamless experience.

---

## 1. Understanding Cardano Addresses

Have you ever wondered how you can put your ADA into a pool to earn rewards and still spend them when you want? Let’s make it easier to understand.

### 1.1 Payment Addresses and Staking

In your wallet, you can have many addresses where your ADA coins are kept. If you decide to stake your coins, all your coins go to the pool you picked. This also includes any new addresses you make and move ADA to. Once Cardano takes a snapshot, these new ADA coins are also staked.

To allow spending and staking at the same time, Cardano separates these actions. There are payment addresses for holding and spending your coins and stake addresses for staking. Payment addresses can be linked to a stake address, but ADA coins always stay with the payment address.

### 1.2 How Staking Works

The stake address is where your staking rights are. To stake your coins, you first connect your payment address to your stake address. Then, you tell the stake address to stake with a pool.

In your wallet, you pick a pool, agree to the transaction, and it gets sent off to the blockchain. Behind the scenes, a staking certificate is made that connects your coins to the pool through the stake address. During this, a reward account is created for your staking rewards.

It's important to know that only the stake address gets registered, not your payment addresses. This means you can add more payment addresses in the future without re-registering. Also, your coins remain in the payment addresses, so you have full control and can spend them anytime.

## 1.3 Different Types of Addresses

You can tell addresses apart by their prefixes. Payment addresses start with "addr", and stake addresses start with "stake". Previously, Byron addresses didn’t have a prefix and were different in format. The Shelley era brought new formats for both payment and stake addresses, making them easier to recognize and use.

### 1.3.1 Base Addresses

Base addresses contain a staking key or a script for staking rights, linking the payment address to a specific staking address. This integration allows ADA holders to earn staking rewards directly linked to their payment addresses, ensuring efficient participation in the network's staking mechanisms.

### 1.3.2 Pointer Addresses

Pointer addresses use a pointer system to indirectly refer to a staking key stored in a staking certificate on the blockchain. This design makes the addresses more compact and efficient, reducing the amount of data stored on the blockchain and improving transaction speeds.

### 1.3.3 Enterprise Addresses

Enterprise addresses do not allow staking and are intended for entities that want to hold ADA without participating in staking activities. These addresses are particularly useful for exchanges and businesses that require large holdings without the need for staking, ensuring a clear separation between transactional and staking operations.

### 1.3.4 Reward Addresses

Reward addresses are specifically for collecting staking rewards and operate on an account model rather than holding coins directly. This distinction simplifies the reward collection process, allowing users to manage their staking rewards separately from their main ADA holdings, enhancing the clarity and organization of their assets.

## Conclusion

Using Cardano wallets is straightforward because they manage addresses for you. They automatically recognize which addresses are yours, including those for staking, making it easy to handle your staking activities.
