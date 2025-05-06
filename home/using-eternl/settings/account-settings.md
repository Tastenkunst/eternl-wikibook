---
description: Settings that apply to the currently active account.
---

# Account settings

<figure><img src="../../../.gitbook/assets/account_settings.png" alt=""><figcaption><p>Active account settings</p></figcaption></figure>

### Account name / handle

<figure><img src="../../../.gitbook/assets/Account_name_Handle.png" alt=""><figcaption><p>Enter an account name or choose a $handle</p></figcaption></figure>

Here you can choose an account name to be displayed or choose one of the $handles in your active account to be displayed.

### Export Account Key

<figure><img src="../../../.gitbook/assets/Account_public_key_export.png" alt=""><figcaption><p>account public key export (read only)</p></figcaption></figure>

Here you can export the public key of your current account.

#### Cardano Public Account Key Formats

Cardano supports several public account key formats, each used to view wallet information but **not to sign transactions**. When imported, these keys create **read-only wallets**:

* **`acct_xvk`**: A Cardano-specific extended account public key (Bech32), including both the public key and chain code. Used for deriving address keys in hierarchical deterministic (HD) wallets.
* **`xpub`**: A general extended public key (Base58 or hex) from standards like BIP32, also containing a chain code. Used for address derivation across various wallet systems.
* **`acct_vk`**: A non-extended account public key (Bech32) that includes only the public key. Used for viewing wallet details or verifying signatures.

These key formats enable wallet **monitoring and address generation**, but **cannot be used to access funds or sign transactions**.

### Single Address Mode (SAM)

When enabled, all funds will be held on the first receive address by default.

<figure><img src="../../../.gitbook/assets/single_address_mode.png" alt=""><figcaption><p>Option switch Single Address Mode (SAM)</p></figcaption></figure>

Alternatively a custom receive address can be set here.

> <mark style="color:red;">Setting a custom receive address will make all change outputs and receive address switch to this address, even if not owned by this account. Please be sure to verify that the correct address is set.</mark>

### Collateral&#x20;

<figure><img src="../../../.gitbook/assets/collateral.png" alt=""><figcaption><p>Option switch Collateral</p></figcaption></figure>

***

## Collateral (Cardano)

### What is Collateral?

In the Cardano blockchain, **collateral** is a special UTxO (Unspent Transaction Output) set aside to cover transaction fees if a smart contract (Plutus script) **fails** during execution.

* ✅ If the script **succeeds**, the collateral is untouched.
* ❌ If the script **fails**, the collateral is used to pay the **transaction fee only**, not the full amount.

This system ensures users are responsible for failed executions, helping to protect the network from spam or abuse.

> 🔓 The **collateral is never locked.** It can still be spent in any transaction that does **not** require a collateral.

***

### Using Collateral in Eternl

The **Eternl wallet** provides a feature called the **Collateral**.

> When the Collateral Switch is **ON**, Eternl will automatically select a suitable UTxO to be used as collateral—if available in your wallet.

This means:

* You don’t need to manually choose a collateral UTxO.
* Interactions with smart contracts and dApps are handled smoothly.
* The selected collateral is only used **if a contract execution fails**, and only to cover **fees**.

> 🛡️ This helps ensure secure and seamless usage of smart contracts on Cardano through the Eternl wallet.

***

### Summary

* Collateral is **required** for transactions involving Plutus smart contracts.
* Collateral is **never locked** and can be spent in regular (non-contract) transactions.
* Eternl automates collateral management when the **Collateral Switch** is enabled.
* Collateral UTxOs are only consumed **if a transaction fails**, and only to cover **fees**.

***

## Manual sync option

<figure><img src="../../../.gitbook/assets/manual_sync (1).png" alt=""><figcaption><p>Manual sync option</p></figcaption></figure>

### What is Manual Sync?

In Eternl, **Manual Sync** is an optional setting that allows you to control **when** your wallet fetches the latest data (such as balances, UTxOs, and transaction history) from the blockchain.

By default, this setting is **OFF**, meaning the wallet performs **automatic syncing** in the background.

***

### 🔁 Automatic Sync (Default)

* The wallet refreshes data **automatically** at regular intervals.
* Keeps balances and UTxOs **up to date** without user input.
* Convenient for most users.

***

### ✋ Manual Sync (When turned ON)

When enabled, syncing will **only occur when you manually trigger it** by pressing the **sync button** in the interface.

***

### ✅ Advantages of Manual Sync

* ⚡ **Faster UI response**: Reduces background activity, especially useful on low-power devices or slow networks.
* 🔒 **More control**: Ideal for advanced users who want to control when blockchain state updates.
* 🧪 **Useful in testing/debugging scenarios**, where state consistency is critical.

***

### ❌ Disadvantages of Manual Sync

* 🕒 **Outdated balances**: You may see stale wallet data until you manually sync.
* 🧍‍♂️ **Extra effort**: Requires remembering to sync before sending transactions or interacting with dApps.
* ❌ **May cause confusion**: New users might not realize data isn’t current.

***

### Summary

| Mode                    | Sync Method         | Best For                                   |
| ----------------------- | ------------------- | ------------------------------------------ |
| **Automatic** (default) | Background sync     | Most users (easy & up to date)             |
| **Manual**              | User-triggered sync | Power users, low-resource devices, testing |



> 💡 **Tip:** If you're unsure, it's best to leave Manual Sync **off** for a smoother experience.

### History sync option

The **History Sync** option controls whether your Eternl wallet **syncs your full transaction history** with the blockchain.

> When **enabled**, Eternl will fetch your complete historical activity (incoming/outgoing transactions, metadata, etc.).

***

#### 🔍 What is History Sync?

Cardano wallets can operate with **minimal sync** (just balances and UTxOs) or with **full history sync**. This setting determines which mode Eternl uses.

* 🔄 **ON**: Full transaction history is retrieved and displayed.
* 💤 **OFF**: Only your current balance and available UTxOs are shown — not past transactions.

***

#### ✅ Advantages of History Sync (ON)

* 📜 See your full transaction history in-app
* 🔍 Useful for auditing, record keeping, or tax purposes
* 🧠 Easier to track smart contract interactions or NFT transfers

***

#### ❌ Disadvantages

* 🐢 **Slower sync time**, especially for older or busy wallets
* 🔋 Higher memory and data usage
* Not needed for simple transfers or light use

***

#### 📌 Summary Table

| Setting           | Sync Behavior                      | Best For                           |
| ----------------- | ---------------------------------- | ---------------------------------- |
| **ON**            | Full transaction history is synced | Power users, bookkeeping, audits   |
| **OFF** (default) | Faster sync, no history loaded     | Everyday users, faster performance |

> 💡 **Tip:** If you just need to send/receive ADA or NFTs, you can leave this **OFF** for quicker syncs.

***

### 🧭 Recommendation

Enable **History Sync** if:

* You need to track past transactions or use the wallet for business or DeFi.
* You’re troubleshooting contract calls or asset transfers.

Keep it **disabled** if:

* You want the wallet to load quickly and don’t need old records.
