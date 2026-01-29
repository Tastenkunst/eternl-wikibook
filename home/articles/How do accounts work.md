## A very brief introduction of the concept of accounts

The concept of "accounts" refers to the ability to create multiple sub-accounts from a single seed phrase. 

Each of these accounts is derived from the same seed phrase but has its own unique set of addresses and keys, allowing for separation of funds, staking, and transaction history. The additional wallet(s) generated from a seed phrase share no on-chain connection and are completely stand-alone. 

The theoretical limit to the number of sub accounts or accounts within a single wallet is very high, effectively allowing for thousands of accounts. This is because the derivation of these accounts is based on the BIP32/BIP44[^2] hierarchical deterministic wallet standards, which support a vast number of potential child accounts.

Eternl wallet allows a maximum of 30 accounts to be used under one wallet at the same time. By default  the first 30 indexes (0-29) are used:

Account 1: path m/1852'/1815'/0'
Account 2: path m/1852'/1815'/1'
Account 3: path m/1852'/1815'/2'
.
.
.
Account 30: path m/1852'/1815'/29'

> You also have the option to freely select the indexes for these 30 accounts.
{.is-success}

This setup helps you manage multiple accounts easily within a single wallet.

# Manage accounts

You can manage your accounts here. Using accounts is supported on both hotwallets and hardware wallets. Eternl allows you to use account #0 to #10000.

> Wallet card > Manage Accounts
{.is-info}

![v2_manage_accounts.jpg](/announcements/v2_manage_accounts.jpg){.align-center}

> every time you click "Add Account" an new account will be added
{.is-info}

![v2_manage_accounts.jpg](/announcements/v2_manage_accounts_2.jpg){.align-center}

> you can manage a maximum of up to 30 accounts in Eternl at the same time
{.is-info}

![v2_manage_accounts_3.jpg](/announcements/v2_manage_accounts_3.jpg){.align-center}

![v2_manage_accounts_5.jpg](/announcements/v2_manage_accounts_5.jpg){.align-center}

> Finally, you need to confirm by entering your spending password or approving it with your hardware wallet.
{.is-info}

# What technical logic is used to achieve this?
Eternls multi-account on one seedphrase feature is based on CIP-1852[^1], also referred to as the HD Wallet standard[^1]. This standard is built on top of the BIP-44[^2] Each wallet generated from a seedphrase has its own 'path'. Paths are structured as:
`m / purpose' / coin_type' / account' / role / index`

By default, Eternl uses index 0 till 29 for users depending on how many accounts they select to use. By picking custom indexes, account 0 till 10 000 can be used. The theoretical limit of this standard is 2 147 483 648 different accounts (sub-wallets).

[^1]: https://cips.cardano.org/cip/CIP-1852/.
[^2]: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
