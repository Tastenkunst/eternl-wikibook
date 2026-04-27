---
description: How to create simple or complex multi-sig wallets
---

# Multi-Sig

## How to Create a Multi-Sig Wallet

{% embed url="https://youtu.be/vUvHKuJyDlE" %}

## How to Create Complex Multi-Sig Structures

{% embed url="https://youtu.be/Amar1nDk0FU" %}

---

## Technical Details & Limitations

Managing Multi-Sig wallets requires an understanding of how they differ from standard wallets, especially regarding DApp compatibility.

### Key vs. Script-Based Wallets

Standard wallets are owned by a single person using a private key (payment key). Multi-Sig wallets, however, are controlled by multiple signers via a **native script**.

Most current DApps and smart contracts expect transactions from standard (key-based) addresses. Interacting with them using a script-based wallet can lead to failed transactions or, in the worst case, lost funds.

### The Challenge with DApps and MonsterSwap

For a DApp to support Multi-Sig, its smart contracts must be explicitly designed to handle script-based ownership.

* **MonsterSwap:** Although developed by the Eternl team, this aggregator relies on various underlying DEX protocols. Since these protocols do not recognize script-based addresses, Multi-Sig wallets cannot be used for swaps.
* **CIP-30 Bridge:** The current standard for how wallets communicate with websites (CIP-30) lacks the infrastructure for Multi-Sig. It cannot correctly estimate fees for scripts or handle the longer "Time-to-Live" (TTL) required for multiple people to sign a single transaction.

### Summary

Currently, Multi-Sig wallets in Eternl should be used exclusively for **secure storage and manual transfers**. Until DApps and the web-bridge standards evolve to support script-based flows, always use a standard wallet for DApp interactions to ensure your funds remain safe and accessible.
