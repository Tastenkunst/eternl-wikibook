# App Settings

## Overview

These settings apply **globally** to the Eternl app on this device. They affect the overall app behavior, display, connectivity, and convenience features.

![App Settings](/assets/pictures/settings_app_settings_overview.jpg)

## General

Select options to define your Eternl experience, UI behavior, and home dashboard elements.

**Key Options:**
* **App Experience:** Toggle options like automatically opening the transaction preview when signing, enabling demanding visual effects (e.g., blurred backgrounds), or showing the dApp connector button in the header.
* **Home Dashboard Elements:** Add or remove specific widgets from your dashboard, such as the ADA chart, account stake key, rewards chart, chosen stake pool, Delegated Representative (DRep), or MonsterSwap interface.
* **Experimental Settings:** Enable specialized options like filtering the wallet list by selected entity or showing Developer Settings.

## Network

Select the current active network (e.g., **Mainnet** or **Testnet**).

**When to use it:**
* Use **Mainnet** for normal wallet activity and real funds.
* Use **Testnet** for testing, development, or learning without real assets.

**Important:**
* Funds are **not shared** between networks.
* A wallet on **Mainnet** is separate from a wallet on **Testnet**.

## Localization

Manage language, regional formatting, timezone settings, **fiat display currency**, and **number decimal precision**.

## Security

PIN and biometric authentication settings.

* **Access PIN Code:** Set up an extra app-level lock when opening Eternl on your device.
* **Biometric Auth:** Enable device-level authentication such as **Face ID** or **fingerprint** on supported devices for faster access.

**Important:**
* PIN and biometric security protect local app access, but they are **not** a replacement for your recovery phrase.

## Sounds

Enable or disable sound notifications for audible confirmation of app actions.

## Address Book

Add, delete, and edit Address Book entries to easily manage saved recipient addresses and custom labels.

## Eternl Hub

Enable or disable **Eternl Hub** to pair multiple Eternl instances, sync wallets, and sign transactions remotely.

**Main Features:**
* **Pair Wallet:** Share a pairing code or QR code to sync wallets across devices (includes Temporary Mode for Pro users).
* **Connect DApp:** Generate connection codes to link dApps remotely.
* **Join:** Connect to another Eternl instance or dApp by entering a code or scanning a QR code.
* **Connections:** View and manage all actively paired instances and connected dApps.

[//]: # (::: info)

[//]: # (For a detailed guide on multi-device pairing and remote signing, see the dedicated **[Eternl Hub documentation]&#40;/app-settings/eternl-hub&#41;**.)

[//]: # (:::)

## DApp Allowlist

Manage the list of websites and dApps that are allowed to connect to this Eternl app.

**When to use it:**
* Review connected dApps periodically and remove sites you no longer use.

**Important:**
* Only interact with dApps you trust to prevent malicious or unwanted connections.

## Export Data

Create a comprehensive encrypted backup file of all your wallets, custom settings, and app preferences stored on this device.

**Important:**
* The export file contains **encrypted private keys**. Treat it with the same level of care as your **seed phrase**.

## Import Data

Restore all your wallets, custom settings, and app preferences from a previously exported backup file (`.json`).

## Transactions

Manage auto-submit behavior and custom node endpoints.

* **Auto-Submit:** Automatically broadcast signed transactions to the network. Disable this if you want to inspect, download, or submit signed transactions manually.
* **Custom Submit Endpoint:** Send transactions through a custom node or API endpoint instead of the default setup (advanced users only).

## Blockchain Explorer

Set your preferred blockchain explorer by type (e.g., for addresses, transactions, tokens, pools, and governance links).

## MonsterSwap

Configure slippage tolerance and DEX-specific settings for the built-in MonsterSwap feature.

## Themes

Customize the visual appearance, typography, component colors, and backgrounds of the Eternl interface.

**Available Options:**
* **Eternl Standard:** The modern, standard Eternl appearance.
* **Legacy Themes:** Choose between **Classic** (classic styling) or **Monochrome** (a reduced black-and-white theme).

## Data Organization

Inspect and manage local storage usage scoped to the currently selected network.

**Key Information:**
* **Storage Overview:** View total browser quota usage for Eternl data.
* **Message Index:** Shows the status of indexed transaction messages and offers an option to **Re-index older transactions**.
* **Per-Wallet Storage:** Breaks down local storage consumption across individual wallets.

## Reset Application Cache

Remove all cached application data to resolve potential sync or display issues without deleting your stored wallets.

## Reset Application

Delete all wallets and stored data to completely reset the application on this device.

**Important:**
* Make sure every wallet is backed up before resetting.
* Without your recovery phrase, access to your funds will be lost **permanently**.
