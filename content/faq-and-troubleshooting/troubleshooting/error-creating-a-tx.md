# Error Creating a Transaction

If you encounter an error while building or signing a transaction, please check the following common causes:

### Governance & DRep Issues
* **Problem:** The transaction fails because it tries to claim staking rewards automatically.
* **Solution:** Since the Voltaire era, claiming rewards requires delegation to an **active DRep**. Please check if you are delegated to a DRep and ensure they are still active.

### Hardware Wallet Issues
* **Transaction hash mismatch:** This usually means your hardware wallet's **firmware** or the Cardano app on the device is outdated. Please update your device via Ledger Live / Trezor Suite.
* **Wrong Device:** If you use multiple hardware wallets, ensure you have connected and unlocked the specific device that belongs to the account you are currently using in Eternl.

### Insufficient Funds / Min-ADA
* **Problem:** "Insufficient funds" or "Output too small" errors.
* **Solution:** Every transaction on Cardano requires a small amount of ADA to be sent along with tokens (Min-ADA). Ensure you have enough **available (unlocked) ADA** to cover both the transaction fees and the Min-ADA requirement.

### Smart Contract & Collateral
* **Problem:** Interactions with DApps fail.
* **Solution:** Ensure you have at least one **Collateral (5 ADA)** set up in your account settings. This is mandatory for interacting with smart contracts.
