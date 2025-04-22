---
description: test
icon: plug
---

# How do I connect my Yoroi / Daedalus wallet to Eternl?

## How do I connect my Yoroi / Daedalus wallet to Eternl?

### Keystone/Ledger/Trezor:

> \[Start Page] > Add Wallet > Pair > {choose your device & follow the steps}\
> {.is-info}

### Seed Phrase:

> \[Start Page] > Add Wallet > Restore > Choose number of words > {follow the steps}\
> {.is-info}

see also: [Hardware wallets](broken-reference)

***

## How do sub-accounts work?

Eternl wallet supports sub-accounts. This allows dividing a single wallet into different sub-accounts. This comes in handy if you would like to divide your wallet balance into different chunks. For example, if you want to delegate those different chunks to different staking pools.

If you have created a new wallet out of Eternl, you can choose the number of sub-accounts in the creation process. But you can also add sub-accounts to an existing wallet.

Sub-accounts are created in order, which means that Eternl will always create the same accounts, as will all other wallet apps. You will not lose any funds adding accounts.

You can see a list of all sub-accounts by clicking on the Account List Tab in the Account section of your current active wallet.

In this Tab, you can also add new sub-accounts to your current wallet:

***

## How to use hardware wallets with Eternl?

***

#### Eternl.io currently supports

> KeystoneA Hong Kong based company offering a 100% Air-gapped open-source QR code communication hardware wallet with a 4-Inch touch screen and fingerprint reader.
>
> Ledger (Nano S and Nano X)The Ledger cryptocurrency hardware wallet made by Ledger, a company headquartered in Paris, France.
>
> Trezor (Model T)Trezor Model T (or shortly Trezor T) comes from SatoshiLabs, based in the Czech Republic.\
> {.is-info}

***

### Follow these steps to pair your hardware wallet with Eternl:

#### Click “Add Wallet”

#### Click “Pair”

#### Select your model and click “Next”

#### Choose number of Accounts and Click “Save”

#### Follow the instructions, connect your device and click “Next”

#### Name your wallet and click “Save”

#### Your wallet is ready to use

***

## How to pair a hardware wallet and add accounts to it?

> When creating or restoring a wallet in Eternl, the number of accounts to be created could already be considered in the process of restoring or pairing.\
> {.is-info}

However, it is also possible to add sub-accounts later.

1. Pair your hardware wallet (Keystone, Ledger & Trezor are currently supported)
2. Choose the number of sub-accounts you want to create.
3. Click “Next” and follow the instructions on your hardware wallet.
4. You may rename your wallet. Then click “Save”
5. Choose “Account >Account List” to view the accounts created
6. If sub-accounts are still “missing” you may choose “Add Accounts” and choose the accounts, you want to add.
7. Choose “Add Accounts” and follow the instructions on your hardware wallet.
8. Wait for the accounts to be shown.
9. Wait for the wallet to sync to see the balances.
10. Done!

***

## Hardware wallet troubleshooting

### 1. Does the connection window show up when connecting?

* If not the issue is on the browser side.
* Ensure you have the most up-to-date browse
* Fully close out the browser and re-open
* Open the Eternl.io extension and hit ctrl+F5 on win, or cmd+shift+r on mac to clear the cache

***

### 2. Is the browser up to date?

* Check for updates in the browser
* Check if the most recent version in the app store matches your current version

***

### 3. Is the device Firmware up to date?

* Check Trezor Suite or Ledger Live to ensure your current firmware is updated

***

### 4. Check that The Cardano App on the device is up to date.

* Verify on Ledger Live or Trezor Suite

***

### 5. Are there any other apps that could still be connecting to the device?

* Ensure all other wallets are closed
* Make sure the device is not still tied to a different wallet
* Make sure any other sites that could connect to the device are fully closed

***

### Other things to check:

✓ Try a new cable or ensure the device is connected and is recognized by the computer.

✓ Turn off or disable your Anti-Virus or VPN

* If this is the issue, you should be able to whitelist this device and the website for permanent use.

***

### more help ... :arrow\_right:

***

## What is a collateral?

A collateral (UTxO) is required when interacting with smart contracts. It is sent into smart contract transactions as a special input and acts as a kind of security.

These are usually around 5-10 Ada.

If all goes well, it will not be touched. If the contract “misbehaves”, it is confiscated and given to the stake pools impaired by that misbehavior.

Misbehavior means that the transaction shouldn’t have been allowed in the first place, because it fails validation. The DApps should not construct such transactions.

If there will be no interaction with a DEX, the feature could be turned off.

Further details are here: [collateral-mechanism](https://docs.cardano.org/plutus/collateral-mechanism)

***

## My collateral seems to keep disappearing, why?

When using Eternl.io combined with other wallets on the same seed, creating a transaction might cause the other wallet to consume the collateral UTxO.

There currently is no standard for setting collateral, and other wallets do not know the difference between a normal ADA UTxO and Eternl.io’s collateral UTxO.

Alternatively, a failed smart contract might’ve consumed the collateral UTxO (which is supposed to happen if one fails), to return your funds to you).

Read also here…

***

## What does locking UTxOs do?

It prevents those UTxO from beeing used for sending transactions and from beeing reported to DApps when asking for the wallets balance.

You can lock UTxOs manually:

Main menu > Account > UTxO list

click on the padlock icon to lock/unlock an UTxO

***

## Unwanted NFT and Token

### Clean up your wallet! – burn unwanted tokens

Have a useless token or NFT? Send it to the following address to ADAHandle $burnit, so it can be used for future testing and debugging of Eternl updates!

***

### Wallet - settings ... :arrow\_right:
