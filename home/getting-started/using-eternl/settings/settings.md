<!-- markdownlint-disable-file MD033 -->

# Settings

<details>
<summary>Account Settings</summary>

<figure><img src="../..//gitbook-assets/pictures/Account_Settings.png" alt=""><figcaption><p></p></figcaption></figure>

<details>
<summary>Overview</summary>

{% embed url="https://www.youtube.com/watch?v=iCS7JRTifQg" %}

<figure><img src="../..//gitbook-assets/pictures/Settings_AccountSettings.png" alt=""><figcaption></figcaption></figure>
</details>

<details>
<summary>Account name / handle</summary>

<figure><img src="../..//gitbook-assets/pictures/account_name.png" alt=""><figcaption><p>Here you can choose an account name to be displayed or choose one of the $handles in your active account to be displayed.</p></figcaption></figure>
</details>

<details>
<summary>Export Account Key</summary>

<figure><img src="../..//gitbook-assets/pictures/export_account_key.png" alt=""><figcaption><p>Here you can export the public key of your current account.</p></figcaption></figure>

### Cardano Public Account Key Formats

Cardano supports several public account key formats, each used to view wallet information but **not to sign transactions**. When imported, these keys create **read-only wallets**:

* **`acct_xvk`**: A Cardano-specific extended account public key (Bech32), including both the public key and chain code. Used for deriving address keys in hierarchical deterministic (HD) wallets.
* **`xpub`**: A general extended public key (Base58 or hex) from standards like BIP32, also containing a chain code. Used for address derivation across various wallet systems.
* **`acct_vk`**: A non-extended account public key (Bech32) that includes only the public key. Used for viewing wallet details or verifying signatures.

These key formats enable wallet **monitoring and address generation**, but **cannot be used to access funds or sign transactions**.
</details>

<details>
<summary>Single Address Mode (SAM) [option]</summary>

Only use a single address for all transactions.

When enabled, all funds will be held on the first receive address by default.

<figure><img src="../..//gitbook-assets/pictures/single_address_mode.png" alt=""><figcaption><p>Option switch Single Address Mode (SAM)</p></figcaption></figure>

Alternatively a custom receive address can be set here.

<div class="callout-tip">
Setting a custom receive address will make all change outputs and receive address switch to this address, even if not owned by this account. Please be sure to verify that the correct address is set.
</div>
</details>

<details>
<summary>Collateral [option]</summary>

<figure><img src="../..//gitbook-assets/pictures/collateral.png" alt=""><figcaption><p>Option - Switch Collateral</p></figcaption></figure>

### Collateral (Cardano)

### What is Collateral?

In the Cardano blockchain, **collateral** is a special UTxO (Unspent Transaction Output) set aside to cover transaction fees if a smart contract (Plutus script) **fails** during execution.

* If the script **succeeds**, the collateral is untouched.
* If the script **fails**, the collateral is used to pay the **transaction fee only**, not the full amount.

This system ensures users are responsible for failed executions, helping to protect the network from spam or abuse.

> The **collateral is never locked.** It can still be spent in any transaction that does **not** require collateral.

---

### Using Collateral in Eternl

The **Eternl wallet** provides a feature called **Collateral**.

> When the Collateral Switch is **ON**, Eternl will automatically select a suitable UTxO to be used as collateral, if available in your wallet.

This means:

* You do not need to manually choose a collateral UTxO.
* Interactions with smart contracts and dApps are handled smoothly.
* The selected collateral is only used **if a contract execution fails**, and only to cover **fees**.

> This helps ensure secure and seamless usage of smart contracts on Cardano through the Eternl wallet.

---

### Collateral Summary

* Collateral is **required** for transactions involving Plutus smart contracts.
* Collateral is **never locked** and can be spent in regular (non-contract) transactions.
* Eternl automates collateral management when the **Collateral Switch** is enabled.
* Collateral UTxOs are only consumed **if a transaction fails**, and only to cover **fees**.
</details>

<details>
<summary>Manual sync [option]</summary>

<figure><img src="../..//gitbook-assets/pictures/manual_sync.png" alt=""><figcaption><p>Manual sync option</p></figcaption></figure>

### What is Manual Sync?

In Eternl, **Manual Sync** is an optional setting that allows you to control **when** your wallet fetches the latest data (such as balances, UTxOs, and transaction history) from the blockchain.

By default, this setting is **OFF**, meaning the wallet performs **automatic syncing** in the background.

---

### Automatic Sync (Default)

* The wallet refreshes data **automatically** at regular intervals.
* Keeps balances and UTxOs **up to date** without user input.
* Convenient for most users.

---

### Manual Sync (When turned ON)

When enabled, syncing will **only occur when you manually trigger it** by pressing the **sync button** in the interface.

---

### Advantages of Manual Sync

* **Faster UI response**: Reduces background activity, especially useful on low-power devices or slow networks.
* **More control**: Ideal for advanced users who want to control when blockchain state updates.
* **Useful in testing/debugging scenarios** where state consistency is critical.

---

### Disadvantages of Manual Sync

* **Outdated balances**: You may see stale wallet data until you manually sync.
* **Extra effort**: Requires remembering to sync before sending transactions or interacting with dApps.
* **May cause confusion**: New users might not realize data is not current.

---

### Sync Summary

| Mode                    | Sync Method         | Best For                                   |
| ----------------------- | ------------------- | ------------------------------------------ |
| **Automatic** (default) | Background sync     | Most users (easy & up to date)             |
| **Manual**              | User-triggered sync | Power users, low-resource devices, testing |

> **Tip:** If you're unsure, it's best to leave Manual Sync **off** for a smoother experience.
</details>

<details>
<summary>History sync [option]</summary>

<figure><img src="../..//gitbook-assets/pictures/history_sync.png" alt=""><figcaption></figcaption></figure>

The **History Sync** option controls whether your Eternl wallet **syncs your full transaction history** with the blockchain.

> When **enabled**, Eternl will fetch your complete historical activity (incoming/outgoing transactions, metadata, etc.).

---

### What is History Sync?

Cardano wallets can operate with **minimal sync** (just balances and UTxOs) or with **full history sync**. This setting determines which mode Eternl uses.

* **ON**: Full transaction history is retrieved and displayed.
* **OFF**: Only your current balance and available UTxOs are shown, not past transactions.

---

### Advantages of History Sync (ON)

* See your full transaction history in-app.
* Useful for auditing, record keeping, or tax purposes.
* Easier to track smart contract interactions or NFT transfers.

---

### Disadvantages

* **Slower sync time**, especially for older or busy wallets.
* Higher memory and data usage.
* Not needed for simple transfers or light use.

---

### Summary Table

| Setting           | Sync Behavior                      | Best For                           |
| ----------------- | ---------------------------------- | ---------------------------------- |
| **ON**            | Full transaction history is synced | Power users, bookkeeping, audits   |
| **OFF** (default) | Faster sync, no history loaded     | Everyday users, faster performance |

> **Tip:** If you just need to send/receive ADA or NFTs, you can leave this **OFF** for quicker syncs.

---

### Recommendation

Enable **History Sync** if:

* You need to track past transactions or use the wallet for business or DeFi.
* You are troubleshooting contract calls or asset transfers.

Keep it **disabled** if:

* You want the wallet to load quickly and do not need old records.
</details>

<details>
<summary>Token Fragmentation (TF)</summary>

### Reduce transaction fees by fragmenting tokens

<figure><img src="../..//gitbook-assets/pictures/Token_fragmentation.png" alt=""><figcaption></figcaption></figure>

**Token Fragmentation** is an advanced sending option that controls how tokens are grouped when a transaction is made.

> When enabled, the wallet will **split tokens into bundles** if the number of tokens in the **change output** exceeds a defined threshold.
> **Default value:** `20` tokens per UTxO

### Purpose

This helps **reduce UTxO bloat** and improves **token management** by avoiding overly large token bundles in change.

### How it works

* During a transaction, if the wallet detects that the change output would include **more tokens than the set limit**, it will **automatically split** them into smaller, more manageable outputs.
* This behavior depends on your wallet's current **UTxO and token distribution**.

### Tweaking for Best Results

To get optimal results:

* You may need to **adjust the threshold value** based on your wallet's token composition.
* Different distributions may require different configurations to achieve the desired outcome.

---

> **Tip:** Token Fragmentation can help avoid failed transactions caused by oversized outputs or complex UTxO sets.

### Token Bundle Size

The **Token Bundle Size** setting defines the **maximum number of tokens** each UTxO output should contain when tokens are fragmented.

> **Default value:** `20` tokens per UTxO\
> This value is adjustable based on your specific needs.

### What does it affect?

Changing this value affects how tokens are distributed across outputs when sending transactions:

* **Lowering the value (<20)** splits tokens into **smaller bundles**.
* **Lowering the value (<20)** can lead to **lower transaction fees**.
* **Lowering the value (<20)** means **more ADA locked** in multiple UTxOs.
* **Increasing the value (>20)** groups more tokens per UTxO.
* **Increasing the value (>20)** can lead to **higher transaction fees**.
* **Increasing the value (>20)** means **less ADA locked**, which can be more efficient for frequent use.

> **Tip:** Lower values are better for minimizing fees in simple wallets. Higher values can be more efficient for wallets handling many tokens or dApp interactions.
</details>

<details>
<summary>Advanced UTxO Management</summary>

<figure><img src="../..//gitbook-assets/pictures/advanced_utxo_management.png" alt=""><figcaption></figcaption></figure>

When this feature is **enabled**, Eternl applies advanced logic to optimize how your wallet handles UTxOs during transactions.

* It attempts to maintain at least **10 available UTxOs** to support **parallel transaction execution**, improving performance and responsiveness.
* Additionally, it tries to reserve a dedicated **5 \{{currency\}} collateral UTxO** for use with **smart contract interactions**.

> This setting is especially useful for users interacting with dApps, submitting multiple transactions, or participating in DeFi.
</details>

<details>
<summary>Auto Withdrawal [option]</summary>

<figure><img src="../..//gitbook-assets/pictures/auto_withdrawal.png" alt=""><figcaption></figcaption></figure>
</details>
</details>

<details>
<summary>Wallet Settings</summary>

<figure><img src="../..//gitbook-assets/pictures/Settings_WalletSettings.png" alt=""><figcaption><p>Wallet Settings</p></figcaption></figure>

<details>
<summary>Name and Group</summary>

Update your wallet or group name.
</details>

<details>
<summary>Wallet Spending Password</summary>

Update your wallet spending password.
</details>

<details>
<summary>Wallet Icon</summary>

Set a custom wallet icon or generate a random wallet icon.
</details>

<details>
<summary>Export Wallet</summary>

Secure wallet JSON export that lets you import it on other browsers/devices.
</details>

<details>
<summary>Re-sync wallet</summary>

Force a complete wallet re-synchronization.
</details>

<details>
<summary>Recovery phrase verificationn</summary>

Verify that you've stored the correct recovery phrase for a wallet.
</details>

<details>
<summary>Delete Wallet</summary>

Remove the wallet and all its accounts.
</details>
</details>

<details>
<summary>App Settings</summary>

<figure><img src="../..//gitbook-assets/pictures/App_Settings.jpg" alt=""><figcaption><p></p></figcaption></figure>

<details>
<summary>Pro Mode</summary>

<figure><img src="../..//gitbook-assets/pictures/pro_mode.jpg" alt=""><figcaption><p>Switch between Simple and Pro Mode.</p></figcaption></figure>
</details>

<details>
<summary>Network</summary>

<figure><img src="../..//gitbook-assets/pictures/network_switcher.png" alt=""><figcaption><p>Select the current active network.</p></figcaption></figure>
</details>

<details>
<summary>Language</summary>

<figure><img src="../..//gitbook-assets/pictures/language.png" alt=""><figcaption><p>Select your preferred language, formatting region and timezone.</p></figcaption></figure>
</details>

<details>
<summary>Currency</summary>

<figure><img src="../..//gitbook-assets/pictures/currency.png" alt=""><figcaption><p>Select your preferred currency for conversion.</p></figcaption></figure>
</details>

<details>
<summary>Decimal Precision</summary>

<figure><img src="../..//gitbook-assets/pictures/precision.png" alt=""><figcaption><p>Number of decimal places.</p></figcaption></figure>
</details>

<details>
<summary>Access PIN Code</summary>

<figure><img src="../..//gitbook-assets/pictures/pin.png" alt=""><figcaption><p>Number of decimal places.</p></figcaption></figure>
</details>

<details>
<summary>Biometrics Auth</summary>

<figure><img src="../..//gitbook-assets/pictures/biometrics.png" alt=""><figcaption><p>Use Face ID (iOS) or native biometric systems for authentication yourself.</p></figcaption></figure>
</details>

<details>
<summary>Sounds</summary>

<figure><img src="../..//gitbook-assets/pictures/sounds.jpg" alt=""><figcaption><p>Enable or disable sound notifications.</p></figcaption></figure>
</details>

<details>
<summary>Address Book</summary>

<figure><img src="../..//gitbook-assets/pictures/address_book.jpg" alt=""><figcaption><p>Add, delete, and edit Address Book entries.</p></figcaption></figure>
</details>

<details>
<summary>DApp Allow List</summary>

<figure><img src="../..//gitbook-assets/pictures/whitelisted.jpg" alt=""><figcaption><p>The list of websites/dApps that are allowed to connect to this Eternl app.</p></figcaption></figure>
</details>

<details>
<summary>Export Wallets</summary>

<figure><img src="../..//gitbook-assets/pictures/export_wallets.jpg" alt=""><figcaption><p>This option will export all wallets.</p></figcaption></figure>
</details>

<details>
<summary>Transactions: Auto-Submit</summary>

<figure><img src="../..//gitbook-assets/pictures/transactions_auto_submit.jpg" alt=""><figcaption><p>Automatically submit transactions when you sign them. Turn this off to let you download the signed transaction data.</p></figcaption></figure>
</details>

<details>
<summary>Custom Submit Endpoint</summary>

<figure><img src="../..//gitbook-assets/pictures/custom_submit_endpoint.jpg" alt=""><figcaption><p>Send transactions through a custom Cardano node and Cardano Submit API.</p></figcaption></figure>
</details>

<details>
<summary>Blockchain Explorer</summary>

<figure><img src="../..//gitbook-assets/pictures/blockchain_explorer.jpg" alt=""><figcaption><p>Set your preferred blockchain explorer by type.</p></figcaption></figure>
</details>

<details>
<summary>MonsterSwap</summary>

<figure><img src="../..//gitbook-assets/pictures/monitor_swap.jpg" alt=""><figcaption><p>Slippage and Dex settings for MonsterSwap.</p></figcaption></figure>
</details>

<details>
<summary>Reset Application Cache</summary>

<figure><img src="../..//gitbook-assets/pictures/reset_application_cache.jpg" alt=""><figcaption><p>Remove all cached data to reset the application.</p></figcaption></figure>
</details>

<details>
<summary>Reset Application</summary>

<figure><img src="../..//gitbook-assets/pictures/delete_application.jpg" alt=""><figcaption><p>Delete all wallets and stored data to reset the application.</p></figcaption></figure>
</details>
</details>

<details>
<summary>App Utilities</summary>

<figure><img src="../..//gitbook-assets/pictures/App_Utilities.jpg" alt=""><figcaption><p></p></figcaption></figure>

<details>
<summary>Franken Address Generator</summary>

Create a new address by combining any two addresses.
</details>

<details>
<summary>Sign Data</summary>

Sign or verify any payload with an address / ID according to the CIP-8 standard.
</details>
</details>
