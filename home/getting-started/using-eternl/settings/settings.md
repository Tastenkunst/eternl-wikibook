<!-- markdownlint-disable-file MD033 -->

# Settings

<details>
<summary><span style="color: #ffffff !important;">Account Settings</span></summary>

<figure><img src="../../../../.gitbook/assets/pictures/Account_Settings.png" alt=""><figcaption><p>Wallet Settings</p></figcaption></figure>

<details>
<summary><span style="color: #dc2626;">Overview</span></summary>
{% embed url="https://www.youtube.com/watch?v=iCS7JRTifQg" %}

<figure><img src="../../../../.gitbook/assets/pictures/Settings_AccountSettings.png" alt=""><figcaption></figcaption></figure>
</details>

<details>

<summary><span style="color: #dc2626;">Account name / handle</span></summary>

<figure><img src="../../../../.gitbook/assets/pictures/account_name.png" alt=""><figcaption><p>Here you can choose an account name to be displayed or choose one of the $handles in your active account to be displayed.</p></figcaption></figure>

</details>

<details>

<summary><span style="color: #dc2626;">Export Account Key</span></summary>

<figure><img src="../../../../.gitbook/assets/pictures/export_account_key.png" alt=""><figcaption><p>Here you can export the public key of your current account.</p></figcaption></figure>

##

### Cardano Public Account Key Formats

Cardano supports several public account key formats, each used to view wallet information but **not to sign transactions**. When imported, these keys create **read-only wallets**:

* **`acct_xvk`**: A Cardano-specific extended account public key (Bech32), including both the public key and chain code. Used for deriving address keys in hierarchical deterministic (HD) wallets.
* **`xpub`**: A general extended public key (Base58 or hex) from standards like BIP32, also containing a chain code. Used for address derivation across various wallet systems.
* **`acct_vk`**: A non-extended account public key (Bech32) that includes only the public key. Used for viewing wallet details or verifying signatures.

These key formats enable wallet **monitoring and address generation**, but **cannot be used to access funds or sign transactions**.

### Single Address Mode (SAM) [option]

Only use a single address for all transactions

When enabled, all funds will be held on the first receive address by default.

<figure><img src="../../../../.gitbook/assets/pictures/single_address_mode.png" alt=""><figcaption><p>Option switch Single Address Mode (SAM)</p></figcaption></figure>

Alternatively a custom receive address can be set here.

> <mark style="color:red;">Setting a custom receive address will make all change outputs and receive address switch to this address, even if not owned by this account. Please be sure to verify that the correct address is set.</mark>

</details>

<details>

<summary><span style="color: #dc2626;">Collateral [option]</span></summary>

## Use Eternl provided collateral?

<figure><img src="../../../../.gitbook/assets/pictures/collateral.png" alt=""><figcaption><p>Option - Switch Collateral</p></figcaption></figure>

## Collateral (Cardano)

### What is Collateral?

In the Cardano blockchain, **collateral** is a special UTxO (Unspent Transaction Output) set aside to cover transaction fees if a smart contract (Plutus script) **fails** during execution.

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;"></span> If the script **succeeds**, the collateral is untouched.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;"></span> If the script **fails**, the collateral is used to pay the **transaction fee only**, not the full amount.

This system ensures users are responsible for failed executions, helping to protect the network from spam or abuse.

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconLockOpen.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconLockOpen.svg') no-repeat center / contain;"></span> The **collateral is never locked.** It can still be spent in any transaction that does **not** require a collateral.

---

### Using Collateral in Eternl

The **Eternl wallet** provides a feature called the **Collateral**.

> When the Collateral Switch is **ON**, Eternl will automatically select a suitable UTxO to be used as collateral—if available in your wallet.

This means:

* You don’t need to manually choose a collateral UTxO.
* Interactions with smart contracts and dApps are handled smoothly.
* The selected collateral is only used **if a contract execution fails**, and only to cover **fees**.

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconValidationApproval.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconValidationApproval.svg') no-repeat center / contain;"></span> This helps ensure secure and seamless usage of smart contracts on Cardano through the Eternl wallet.

---

### Collateral Summary

* Collateral is **required** for transactions involving Plutus smart contracts.
* Collateral is **never locked** and can be spent in regular (non-contract) transactions.
* Eternl automates collateral management when the **Collateral Switch** is enabled.
* Collateral UTxOs are only consumed **if a transaction fails**, and only to cover **fees**.

</details>

<details>

<summary><span style="color: #dc2626;">Manual sync [option]</span></summary>

## Set manual sync

<figure><img src="../../../../.gitbook/assets/pictures/manual_sync.png" alt=""><figcaption><p>Manual sync option</p></figcaption></figure>

## What is Manual Sync?

In Eternl, **Manual Sync** is an optional setting that allows you to control **when** your wallet fetches the latest data (such as balances, UTxOs, and transaction history) from the blockchain.

By default, this setting is **OFF**, meaning the wallet performs **automatic syncing** in the background.

---

## <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;"></span> Automatic Sync (Default)

* The wallet refreshes data **automatically** at regular intervals.
* Keeps balances and UTxOs **up to date** without user input.
* Convenient for most users.

---

## <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconHandDoNotTouch02.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconHandDoNotTouch02.svg') no-repeat center / contain;"></span> Manual Sync (When turned ON)

When enabled, syncing will **only occur when you manually trigger it** by pressing the **sync button** in the interface.

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;"></span> Advantages of Manual Sync

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconModeEfficiency.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconModeEfficiency.svg') no-repeat center / contain;"></span> **Faster UI response**: Reduces background activity, especially useful on low-power devices or slow networks.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconLockClosed.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconLockClosed.svg') no-repeat center / contain;"></span> **More control**: Ideal for advanced users who want to control when blockchain state updates.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconTestTube03.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconTestTube03.svg') no-repeat center / contain;"></span> **Useful in testing/debugging scenarios**, where state consistency is critical.

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;"></span> Disadvantages of Manual Sync

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconClock.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconClock.svg') no-repeat center / contain;"></span> **Outdated balances**: You may see stale wallet data until you manually sync.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconUser.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconUser.svg') no-repeat center / contain;"></span> **Extra effort**: Requires remembering to sync before sending transactions or interacting with dApps.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;"></span> **May cause confusion**: New users might not realize data isn’t current.

---

### Sync Summary

| Mode                    | Sync Method         | Best For                                   |
| ----------------------- | ------------------- | ------------------------------------------ |
| **Automatic** (default) | Background sync     | Most users (easy & up to date)             |
| **Manual**              | User-triggered sync | Power users, low-resource devices, testing |

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;"></span> **Tip:** If you're unsure, it's best to leave Manual Sync **off** for a smoother experience.

</details>

<details>

<summary><span style="color: #dc2626;">History sync [option]</span></summary>

## Set history sync

<figure><img src="../../../../.gitbook/assets/pictures/history_sync.png" alt=""><figcaption></figcaption></figure>

The **History Sync** option controls whether your Eternl wallet **syncs your full transaction history** with the blockchain.

> When **enabled**, Eternl will fetch your complete historical activity (incoming/outgoing transactions, metadata, etc.).

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;"></span> What is History Sync?

Cardano wallets can operate with **minimal sync** (just balances and UTxOs) or with **full history sync**. This setting determines which mode Eternl uses.

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;"></span> **ON**: Full transaction history is retrieved and displayed.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconMoon02.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconMoon02.svg') no-repeat center / contain;"></span> **OFF**: Only your current balance and available UTxOs are shown — not past transactions.

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCheckmarkCircle04.svg') no-repeat center / contain;"></span> Advantages of History Sync (ON)

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconWorkHistory.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconWorkHistory.svg') no-repeat center / contain;"></span> See your full transaction history in-app
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;"></span> Useful for auditing, record keeping, or tax purposes
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconNeuralNetwork.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconNeuralNetwork.svg') no-repeat center / contain;"></span> Easier to track smart contract interactions or NFT transfers

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconCancelCircle.svg') no-repeat center / contain;"></span> Disadvantages

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSpinnerLoader.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSpinnerLoader.svg') no-repeat center / contain;"></span> **Slower sync time**, especially for older or busy wallets
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconNetworkStats.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconNetworkStats.svg') no-repeat center / contain;"></span> Higher memory and data usage
* Not needed for simple transfers or light use

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconPin.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconPin.svg') no-repeat center / contain;"></span> Summary Table

| Setting           | Sync Behavior                      | Best For                           |
| ----------------- | ---------------------------------- | ---------------------------------- |
| **ON**            | Full transaction history is synced | Power users, bookkeeping, audits   |
| **OFF** (default) | Faster sync, no history loaded     | Everyday users, faster performance |

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;"></span> **Tip:** If you just need to send/receive ADA or NFTs, you can leave this **OFF** for quicker syncs.

---

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconStarFilled.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconStarFilled.svg') no-repeat center / contain;"></span> Recommendation

Enable **History Sync** if:

* You need to track past transactions or use the wallet for business or DeFi.
* You’re troubleshooting contract calls or asset transfers.

Keep it **disabled** if:

* You want the wallet to load quickly and don’t need old records.

</details>

<details>

<summary><span style="color: #dc2626;">Token Fragmentation (TF)</span></summary>

## Token Fragmentation (TF)

### Reduce transaction fees by fragmenting tokens

<figure><img src="../../../../.gitbook/assets/pictures/Token_fragmentation.png" alt=""><figcaption></figcaption></figure>

**Token Fragmentation** is an advanced sending option that controls how tokens are grouped when a transaction is made.

> When enabled, the wallet will **split tokens into bundles** if the number of tokens in the **change output** exceeds a defined threshold.
> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconModules.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconModules.svg') no-repeat center / contain;"></span> **Default value:** `20` tokens per UTxO

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSearch.svg') no-repeat center / contain;"></span> Purpose

This helps **reduce UTxO bloat** and improves **token management** by avoiding overly large token bundles in change.

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSettings.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSettings.svg') no-repeat center / contain;"></span> How it works

* During a transaction, if the wallet detects that the change output would include **more tokens than the set limit**, it will **automatically split** them into smaller, more manageable outputs.
* This behavior depends on your wallet’s current **UTxO and token distribution**.

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconPrecision.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconPrecision.svg') no-repeat center / contain;"></span> Tweaking for Best Results

To get optimal results:

* You may need to **adjust the threshold value** based on your wallet’s token composition.
* Different distributions may require different configurations to achieve the desired outcome.

---

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconInfo.svg') no-repeat center / contain;"></span> **Tip:** Token Fragmentation can help avoid failed transactions caused by oversized outputs or complex UTxO sets.

## <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconTokenFilled.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconTokenFilled.svg') no-repeat center / contain;"></span> Token Bundle Size

The **Token Bundle Size** setting defines the **maximum number of tokens** each UTxO output should contain when tokens are fragmented.

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconModules.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconModules.svg') no-repeat center / contain;"></span> **Default value:** `20` tokens per UTxO\
> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconArtboardTool.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconArtboardTool.svg') no-repeat center / contain;"></span> This value is adjustable based on your specific needs.

### <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconChart.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconChart.svg') no-repeat center / contain;"></span> What does it affect?

Changing this value affects how tokens are distributed across outputs when sending transactions:

* **Lowering the value (<20):**
  * Splits tokens into **smaller bundles**
  * <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconModeEfficiency.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconModeEfficiency.svg') no-repeat center / contain;"></span> **Lower transaction fees**
  * <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconLockClosed.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconLockClosed.svg') no-repeat center / contain;"></span> **More ADA locked** in multiple UTxOs
* **Increasing the value (>20):**
  * Groups more tokens per UTxO
  * 💸 **Higher transaction fees**
  * <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconLockOpen.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconLockOpen.svg') no-repeat center / contain;"></span> **Less ADA locked**, more efficient for frequent use

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconThumbsUpDown.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconThumbsUpDown.svg') no-repeat center / contain;"></span> **Tip:** Lower values are better for minimizing fees in simple wallets. Higher values can be more efficient for wallets handling many tokens or dApp interactions.

</details>

<details>

<summary><span style="color: #dc2626;">Advanced UTxO Management</span></summary>

## Use advanced UTxO management on your transactions

<figure><img src="../../../../.gitbook/assets/pictures/advanced_utxo_management.png" alt=""><figcaption></figcaption></figure>

## <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconNeuralNetwork.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconNeuralNetwork.svg') no-repeat center / contain;"></span> Advanced UTxO Management

When this feature is **enabled**, Eternl applies advanced logic to optimize how your wallet handles UTxOs during transactions.

* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconRefresh.svg') no-repeat center / contain;"></span> It attempts to maintain at least **10 available UTxOs** to support **parallel transaction execution**, improving performance and responsiveness.
* <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconValidationApproval.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconValidationApproval.svg') no-repeat center / contain;"></span> Additionally, it tries to reserve a dedicated **5 \{{currency\}} collateral UTxO** for use with **smart contract interactions**.

> <span aria-hidden="true" style="display:inline-block;width:1.05em;height:1.05em;vertical-align:-0.15em;background-color:currentColor;filter:drop-shadow(0 0 0.6px currentColor);-webkit-mask:url('../../../../.gitbook/assets/icons/IconSettings.svg') no-repeat center / contain;mask:url('../../../../.gitbook/assets/icons/IconSettings.svg') no-repeat center / contain;"></span> This setting is especially useful for users interacting with dApps, submitting multiple transactions, or participating in DeFi.

</details>

<details>

<summary><span style="color: #dc2626;">Auto Withdrawal [option]</span></summary>

## Automatically withdraw rewards if needed

<figure><img src="../../../../.gitbook/assets/pictures/auto_withdrawal.png" alt=""><figcaption></figcaption></figure>

</details>
</details>

<details>

<summary><span style="color: #ffffff !important;">Wallet Settings</span></summary>
<figure><img src="../../../../.gitbook/assets/pictures/Settings_WalletSettings.png" alt=""><figcaption><p>Wallet Settings</p></figcaption></figure>
xxx
</details>

<details>
<summary><span style="color: #ffffff !important;">App Settings</span></summary>
xxx
</details>

<details>
<summary><span style="color: #ffffff !important;">App Utilities</span></summary>
xxx
</details>
