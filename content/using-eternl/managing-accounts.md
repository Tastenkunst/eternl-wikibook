<!-- markdownlint-disable-file MD033 -->
# Managing Accounts

## Multiple Accounts From One Seed Phrase

The concept of "accounts" refers to the ability to create multiple sub-accounts from a single seed phrase. Each account is derived from the same mnemonic but has its own unique set of addresses and keys, so you can keep funds, staking, and transaction history separated. These wallets share no on-chain link and act as completely stand-alone accounts.

The theoretical limit of accounts that can be derived from a single seed is extremely high thanks to the BIP32/BIP44 hierarchical deterministic standards, but Eternl v2 surfaces only 30 accounts at the same time. Eternl wallet allows a maximum of 30 active accounts, using indexes 0 through 29 by default.

---

`Account 1: m/1852'/1815'/0'`

`Account 2: m/1852'/1815'/1'`

`Account 3: m/1852'/1815'/2'`

...

`Account 30: m/1852'/1815'/29'`

---

::: info
You also have the option to freely select the indexes for these 30 accounts.
:::

This setup makes it easy to organize multiple wallets inside one seed while staying within the 30-account boundary enforced by Eternl v2.

## Manage Accounts

{% embed url="https://www.youtube.com/watch?v=iCS7JRTifQg" %}

You manage accounts from the wallet card on both hot wallets and hardware wallets. Eternl allows account indexes up to 10,000, but the UI only registers 30 accounts at any time; picking custom indexes gives you flexibility to rotate which accounts are active without exceeding the 30-account limit.

### 1. Wallet Card > Manage Accounts

![Manage accounts layout](/assets/pictures/v2_manage_accounts.jpg)

### 2. Every Time You Click "Add Account" a New Account Will Be Added

![Add account](/assets/pictures/v2_manage_accounts_2.jpg)

### 3. You Can Manage a Maximum of up to 30 Accounts in Eternl at the Same Time

![30 account limit](/assets/pictures/v2_manage_accounts_3.jpg)

### 4. Finally, You Need to Confirm by Entering Your Spending Password or Approving It With Your Hardware Wallet

![Account confirmation](/assets/pictures/v2_manage_accounts_5.jpg)

## Technical Background

Eternl's multi-account feature is built on CIP-1852, the HD wallet standard that extends BIP-44 for Cardano. Each wallet derived from a seed has its own derivation path. By default, Eternl uses indexes 0 through 29 depending on how many accounts you activate.

---

`m / purpose' / coin_type' / account' / role / index`

---

By picking custom indexes, you can use accounts 0 through 10,000 across the derivation tree. The theoretical maximum within the standard is 2,147,483,648 unique accounts (sub-wallets), so Eternl's 30-account window gives you a practical slice of that range without overwhelming the interface.

### References

[^1] https://cips.cardano.org/cip/CIP-1852/ <br>
[^2] https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
