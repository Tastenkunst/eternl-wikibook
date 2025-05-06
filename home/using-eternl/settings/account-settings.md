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
