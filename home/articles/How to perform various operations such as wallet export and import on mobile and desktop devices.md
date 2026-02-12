# Working with multiple Eternl instances

Each Eternl instance, including the browser extension, web app, and mobile apps, are distinct installations of Eternl. Eternl does not centrally store any user data; instead, all data is stored locally on each device, which means settings cannot be synchronized across different devices. This also applies to the spending password for hot wallets.

To transfer an Eternl wallet to another device or instance, you have two options:

## Step 1 - Export

### 1. Export the public key of an account. (read-only mode)

> Wallet Settings > Export account Key > Export Account Pub key

### 2. Eternl Wallet Backup (JSON export)

> Wallet Settings > Wallet Specific Settings > Eternl Wallet Backup (JSON export) > Export Wallet

There is also the option to export all wallets in one go under the app settings:

> App Settings > Wallet export (.json) > Export All Wallets

## Step 2 - Import

### Import in read-only mode using the extended public key

> Add Wallet > IMPORT > Import Public Account Key (read-only wallet) > Start Import Process

### OR

### Import the entire wallet (including the settings) using a JSON file previously exported from Eternl

> Add Wallet > IMPORT > Import Eternl .json wallet > Import wallet

The JSON file contains your encrypted private key, safeguarded by the spending password (similar to how it is stored in browser storage), so it's crucial to keep these files secure.

Using JSON files for wallet imports in Eternl is generally more convenient than restoring from a seed phrase.

When using the restore option via seed phrase, the balance, delegation, and other blockchain-stored data will remain accessible, as is the case with any wallet app where you restore your seed phrase.

> Local settings such as wallet name, password, number of accounts, advanced UTxO management, token fragmentation, auto-withdrawal, etc., will not be transferred.
