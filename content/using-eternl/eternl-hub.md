# Eternl Hub [[ProButton]](welcome-to-eternl-v2/eternl-pro.md)

**Eternl Hub** connects Eternl instances on different devices. It lets you share selected wallets and accounts with another Eternl instance, request remote transaction signing, and connect dApps through a Remote Connect code.

::: info
Full Eternl Hub functionality is available for **[Eternl Pro](../welcome-to-eternl-v2/eternl-pro.md)** users.
:::

## General {open}

Eternl Hub allows selected wallets and accounts to be shared between paired Eternl instances. It also supports remote transaction signing. Pairing does not require you to enter a recovery phrase on the other device or share private keys with it.

Depending on the selected sharing mode, shared wallets are available temporarily or remain on the other instance with **Full Sync Mode**.

### Key Advantages & Use Cases

The main advantages of Eternl Hub are flexible control over wallet sharing, access to selected wallets across devices, remote transaction signing, and the ability to connect multiple wallets and accounts to a dApp.

Examples include:

* **Collaborative transaction workflows:** A team member can prepare a transaction without access to the wallet keys. Another authorized person can review and sign it from a paired Eternl instance, potentially using a connected hardware wallet.
* **Setting up a new device:** Make selected wallets available on a new device with **Full Sync Mode**, without entering a recovery phrase or importing an Eternl backup file.
* **Temporary access:** Share selected wallets or accounts for a specific task and revoke access when the task is complete.
* **Multi-wallet dApp workflows:** A compatible dApp can be connected to multiple selected wallets and accounts, while the user controls which ones are made available.

## Access and Status

### Open Eternl Hub

You can open Eternl Hub using either of the following methods.

#### From the Lightning Menu

1. Click the lightning icon in the top navigation bar.
2. Select **Paired Devices**, **Connected DApps**, or **Manage Connections**.

[[carousel title="Open Eternl Hub via Lightning Button" steps=true start=1]]
### Click the Lightning Button
![Open Eternl Hub via Lightning Button - Step 1](/assets/pictures/hub_open_lightning_0.jpg)

### Click one of the Buttons
![Open Eternl Hub via Lightning Button - Step 2](/assets/pictures/hub_open_lightning_1.jpg)

[[/carousel]]

#### From Settings

1. Open **three-dot menu**.
2. Open **Settings**.
3. Select **App Settings**.
4. Select **Eternl Hub**.

[[carousel title="Open Eternl Hub via Settings" steps=true start=1]]
### Open the three-dot
![Open Eternl Hub via Settings - Step 1](/assets/pictures/hub_open_settings_0.jpg)

### Open "Settings"
![Open Eternl Hub via Settings - Step 2](/assets/pictures/hub_open_settings_1.jpg)

### Select "App Settings"
![Open Eternl Hub via Settings - Step 3](/assets/pictures/hub_open_settings_2.jpg)

### Select "Eternl Hub"
![Open Eternl Hub via Settings - Step 4](/assets/pictures/hub_open_settings_3.jpg)

[[/carousel]]

### Hub Status

When no Hub connection is active, the lightning icon is greyed out and does not display a connection-count badge. When at least one Hub connection is active, the icon turns green and displays a badge with the number of active connections.

[[carousel title="Eternl Hub Status" steps=false]]
### without active connection
![Eternl Hub - inactive](/assets/pictures/hub_status_0.jpg)

### with active connection
![Eternl Hub - active](/assets/pictures/hub_status_1.jpg)

[[/carousel]]

### Disable Eternl Hub

To disable Eternl Hub, open **Settings > App Settings** and turn off the Eternl Hub switch.

When Eternl Hub is disabled, the lightning icon is completely hidden from the top navigation bar. You can show it again by enabling the setting.

## Pair Two Eternl Instances

Pairing connects two Eternl instances. One instance initiates the pairing by generating a pairing code, and the other joins by entering or scanning it. Before sharing the pairing code, the initiating instance can select which wallets and accounts to share. After the connection has been established, either instance can use **Connections > Edit Wallet Shares** to select or change which of its wallets and accounts it shares.

### On the Instance That Initiates the Pairing

1. Open Eternl Hub and select **Pair Wallet**. <br /> Eternl displays a six-digit pairing code and a QR code. The code expires after a short time (30 sec) and is replaced automatically.
2. Select the wallets and accounts that should be available on the other instance. You can select complete wallets or individual accounts.
3. Choose the sharing mode:

   * **Temporary Mode** is the default. The shared accounts are available as temporary wallets on the paired instance, but they cannot be exported. If you revoke sharing, the temporary wallets are removed from the paired instance.
   * **Full Sync Mode** keeps the wallets on the paired instance even if you later revoke sharing. This change cannot be undone remotely.

4. Share the pairing code or QR code with the other Eternl instance.

[[carousel title="Eternl Hub - Pair Wallet" steps=true start=1]]
### Open the "Pair Wallet" tab of Eternl Hub
![Eternl Hub - Pair Wallet - Step 1](/assets/pictures/hub_pair_wallet_0.jpg)

### Select wallets or accounts to share
![Eternl Hub - Pair Wallet - Step 2](/assets/pictures/hub_pair_wallet_1.jpg)

### Select a sharing mode ("Temporary Mode" or "Full Sync Mode")
![Eternl Hub - Pair Wallet - Step 3](/assets/pictures/hub_pair_wallet_2.jpg)

### Share the pairing code or QR code with the other Eternl instance
![Eternl Hub - Pair Wallet - Step 2](/assets/pictures/hub_pair_wallet_3.jpg)

[[/carousel]]

### On the Instance That Joins

1. Open Eternl Hub and select **Join**.
2. Enter the six-digit pairing code from the other Eternl instance, or select **Scan QR Code**.
3. Click **Connect Instance**.

[[carousel title="Eternl Hub - Join" steps=true start=1]]
### Open the "Join" tab of Eternl Hub
![Eternl Hub - Join - Step 1](/assets/pictures/hub_join_0.jpg)

### Enter the six-digit pairing code from the other Eternl instance
![Eternl Hub - Join - Step 2](/assets/pictures/hub_join_1.jpg)

### Click "Connect Instance"
![Eternl Hub - Join - Step 3](/assets/pictures/hub_join_2.jpg)

[[/carousel]]

After pairing, the shared wallets or accounts become available on the receiving instance. The pairing can be reviewed and managed in the **Connections** tab.

## Connect a DApp

Eternl Hub can connect a dApp running in another browser or on another device. The exact workflow depends on the dApp. Eternl provides the **Connect DApp** and **Join** areas for code-based connections, so follow the instructions shown by the dApp.

During the connection process, Eternl lets you choose which wallets and accounts the dApp may use. Multiple wallets and accounts can be selected. Only the selected wallets and accounts are made available to the dApp.

You can review and disconnect dApp connections in the **Connections** tab.

## Manage Connections

The **Connections** tab provides an overview of the active Hub connections:

* **Paired Instances** lists the Eternl instances paired for wallet sharing and remote signing. You can revoke access to a paired instance.
* **Connected DApps** lists dApps connected through Remote Connect. You can disconnect a dApp connection there.

## Security Considerations

* Pair only devices that you control or explicitly trust.
* Treat the pairing code, QR code, and Remote Connect code as private. Do not post or send them to anyone who should not receive access.
* Share only the wallets and accounts that are needed for the task.
* Use **Temporary Mode** when the receiving instance should have access only for a limited purpose. Revoke sharing when you are finished.
* Use **Full Sync Mode** only when the wallets should remain on the other instance. It cannot be undone remotely.
* Eternl Hub is not a backup method. Keep your recovery phrase and other wallet backups stored securely and do not enter them into an untrusted application or website.
