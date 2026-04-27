---
disableH2Collapse: true
---

# Transaction Errors
If you encounter an error while building, signing or submitting a transaction, please check the following common causes:


## Error Creating a Transaction

### Governance & DRep Issues
* **Problem:** The transaction fails because it tries to claim staking rewards automatically.
* **Solution:** Since the Voltaire era, claiming rewards requires delegation to an **active DRep**. Please check if you are delegated to a DRep and ensure they are still active.

### Insufficient Funds / Min-ADA
* **Problem:** "Insufficient funds" or "Output too small" errors.
* **Solution:** Every transaction on Cardano requires a small amount of ADA to be sent along with tokens (Min-ADA). Ensure you have enough **available (unlocked) ADA** to cover both the transaction fees and the Min-ADA requirement.

### Smart Contract & Collateral
* **Problem:** Interactions with DApps fail.
* **Solution:** Ensure you have at least one **Collateral (5 ADA)** set up in your account settings. This is mandatory for interacting with smart contracts.


## Error Signing a Transaction

### Hardware Wallet Issues
* **Transaction hash mismatch:** This usually means your hardware wallet's **firmware** or the Cardano app on the device is outdated. Please update your device via Ledger Live / Trezor Suite.
* **Wrong Device:** If you use multiple hardware wallets, ensure you have connected and unlocked the specific device that belongs to the account you are currently using in Eternl.


## Error Submitting a Transaction

### Custom Submit Endpoint
* **Problem:** The transaction cannot be sent, or you receive a network-related error message immediately after signing.
* **Cause:** You have enabled a "Custom Submit Endpoint" in your settings, and this server is currently offline, unreachable, or not functioning correctly.
* **Solution:**
    * Go to **Settings > App Settings > Custom Submit Endpoint** and check if a custom submit endpoint is active.
    * Try disabling the custom endpoint to use Eternl's default submission service.
    * If you must use a custom endpoint, verify that the URL is correct and the service is online.

### Internet Connection & Firewall
* **Problem:** General timeout or "failed to fetch" errors.
* **Solution:**
    * Ensure your internet connection is stable.
    * If you are using a VPN or a restrictive corporate firewall, it might block the connection to the Cardano nodes. Try switching your connection to see if the issue persists.

### Network Congestion
* **Problem:** The transaction is rejected with a "Mempool full" or similar message.
* **Cause:** Occasionally, the Cardano network experiences extremely high traffic (e.g., during major NFT drops or DEX launches).
* **Solution:** This is a temporary network state. Usually, waiting a few minutes and trying again solves the issue.
