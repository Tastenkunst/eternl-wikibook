# Multi-sig

### Why multi-sig wallets cannot be a DApp account (for now)

Multi-Sig wallets on Cardano like those created in Eternl, use script-based addresses, while most DApps expect standard wallets that are based on a payment key.

#### Key vs Script-Based Wallets

* Standard wallets: Owned by one person using a private key (payment key).
* Multi-Sig wallets: Controlled by multiple signers via a script.

Most DApps and smart contracts assume the transaction comes from a standard wallet. If a script-based wallet interacts with them, it can lead to:

* Failed transactions
* Locked or lost funds
* Inability to interact with the DApp

#### Smart Contract Limitation

For a DApp to work with a multi-sig wallet, its smart contract must be designed to accept script-based ownership. That’s rarely the case today.

#### MonsterSwap

MonsterSwap is a DEX aggregator developed by the Eternl team and integrated into Eternl v2. While we designed the aggregator, it relies on the underlying DEXs to execute swaps. Since most DEXs only support standard (key-based) wallets, multi-sig wallets are not compatible—these contracts do not recognize or handle script-based addresses.

#### Web wallet bridge (CIP-30)

Multi-Sig support for DApp interaction has additional challenges when it comes to the web wallet bridge (CIP-30) communication flow.

* There’s no built-in check for wallet type to determine if its a standard or script wallet the DApp is communicating with.
* Fee estimation can’t be done correctly without DApp having access to the multi-sig native script.
* The DApp must hand off an unsigned tx (missing only multi-sig witnesses) to the wallet for coordination. A new endpoint would be required for this flow.
* Transactions need a longer TTL to give participants time to sign. This breaks compatibility with time-sensitive use cases, like swaps.

In short, supporting multi-sig wallets with DApps means building a new interaction and submission flow beyond the CIP-30 standard used today for DApp communication.

#### In Summary

> Multi-Sig wallets cannot currently be used with DApps because:
>
> * They use a different type of address.
> * Smart contracts don’t support script-based access.
> * There’s a real risk of losing access to your funds.
> * Web wallet bridge (CIP-30) communication challenges to overcome.
>
> Until DApps explicitly support multi-sig, use a standard wallet for interacting with them. {.is-info}

{% embed url="https://youtu.be/vUvHKuJyDlE" %}



