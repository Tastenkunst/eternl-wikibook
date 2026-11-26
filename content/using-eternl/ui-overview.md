# UI Overview

This article describes the main Eternl interface on desktop. The user interface (UI) has four areas:

1. Top Bar
2. Sidebar (page navigation)
3. Wallet List
4. Page Content

![The Four Main Areas of the Interface](/assets/pictures/ui_overview-0.jpg)

## Top Bar

![Main User Interface - Top Bar](/assets/pictures/ui_overview-top_bar-0.jpg)

The Top Bar contains:

- version information
- Global Search
- current ADA price
- current epoch and time remaining
- notification center
- Eternl Hub status
- Eternl Pro
- entity management
- three-dot menu

### Version Info

Below the Eternl logo, the current version number is displayed. If you encounter an issue, first check whether you are using the latest version. The latest release is listed in [Eternl Updates / Release Notes](/eternl-updates-release-notes.md).

[[carousel title="Top Bar - Version Info" steps=false]]
###
![Top Bar - Version Info](/assets/pictures/ui_overview-top_bar-version-0.jpg)
[[/carousel]]

### Global Search [[ProButton]](/welcome-to-eternl-v2/eternl-pro.md)

Global Search is a full-text search across your Eternl instance. It can find wallets, accounts, transactions, assets (FTs and NFTs), address book entries, UTxOs, stake pools, dApps, DReps, governance proposals, swap tokens, and settings.

:::info
Global Search requires an active Eternl Pro subscription.
:::

Click the search field, then select the cog icon to open Search Settings. There, you can, for example, limit results to a category or to the currently selected wallet.

[[carousel title="Top Bar - Global Search" steps=false]]
### Global Search
![Top Bar - Global Search](/assets/pictures/ui_overview-top_bar-search-0.jpg)

### Global Search: Open Search Settings
![Top Bar - Global Search](/assets/pictures/ui_overview-top_bar-search-1.jpg)

### Global Search: Search Settings
![Top Bar - Global Search](/assets/pictures/ui_overview-top_bar-search-2.jpg)
[[/carousel]]


### Eternl Pro

If Eternl Pro is not active for the current entity, a **Pro** button is displayed in the Top Bar. Click it to open the Eternl Pro page, where you can activate an existing Eternl Pro license or purchase one.

:::info
Every Eternl Pro subscription helps fund the ongoing maintenance, operation, and development of Eternl.
:::

If Eternl Pro is active for the current entity, the Pro badge is shown next to its name in the Top Bar.

[[carousel title="Top Bar - Eternl Pro" steps=false]]
###
![Top Bar - Eternl Pro](/assets/pictures/ui_overview-top_bar-pro-0.jpg)
[[/carousel]]

### Current ADA Price

The current ADA price and its recent price change are displayed here. Click the price to open an overlay with the ADA price chart.

[[carousel title="Top Bar - Current ADA Price" steps=false]]
### Current ADA Price
![Top Bar - Current ADA Price](/assets/pictures/ui_overview-top_bar-price-0.jpg)

### Current ADA Price: Chart Overlay
![Top Bar - Current ADA Price](/assets/pictures/ui_overview-top_bar-price-1.jpg)
[[/carousel]]

### Current Epoch

The current epoch and the time remaining until the next epoch are displayed here. Click the epoch display to open **Chain Stats**, which provides current chain status and protocol statistics for the selected network.

The colored bar below the Top Bar gradually fills as the current epoch progresses.

[[carousel title="Top Bar - Current Epoch" steps=false]]
### Current Epoch
![Top Bar - Current Epoch](/assets/pictures/ui_overview-top_bar-epoch-0.jpg)

### Current Epoch: Chain Stats
![Top Bar - Current Epoch: Chain Stats](/assets/pictures/ui_overview-top_bar-epoch-1.jpg)
[[/carousel]]

### Notifications

Click the bell icon to open the Notification Center, where Eternl lists your notifications.

### Eternl Hub Status

When Eternl Hub is enabled, click the lightning icon to open its status menu. From there, you can access **Paired Devices**, **Connected DApps**, and **Manage Connections**. See [Eternl Hub](/using-eternl/eternl-hub.md) for details.

### Entity Management

The entity selector shows the active entity and its subscription status. Click it to switch between entities, add a new entity, or open **Manage Entities**.

### Three-Dot Menu

Click the three-dot icon to open the app menu. It provides quick access to **Settings**, **Themes**, and the **QR scanner**, as well as controls to enable or disable the **DApp Connector**, hide or show amounts and values, and switch between dark and light mode.

---

## Sidebar

The Sidebar is Eternl’s main navigation. Hover over it to expand the navigation and display page names next to their icons. Click an icon or page name to open the corresponding page. The currently active page is highlighted, so you can always see where you are.

[[carousel title="Sidebar States" steps=false]]
### Sidebar collapsed
![Sidebar collapsed](/assets/pictures/ui_overview-sidebar-0.jpg)

### Sidebar extended
![Sidebar extended](/assets/pictures/ui_overview-sidebar-1.jpg)
[[/carousel]]

---

## Wallet List

The Wallet List is used to navigate between wallet groups, wallets, and accounts. Use the arrows on wallet groups and wallets to expand or collapse their contents.

The currently selected account is highlighted in the Wallet List.

![Main User Interface - Wallet List](/assets/pictures/ui_overview-wallet_list-0.jpg)

### Wallet Groups, Wallets and Accounts

Wallet groups organize one or more wallets, and each wallet can contain multiple accounts. Wallet groups are shown in the Wallet List only when more than one group exists. If all wallets belong to a single group, the group is not displayed as a separate entry. To create a group or assign a wallet to one, see [Wallet Settings: Name and Group](/using-eternl/settings/wallet-settings.md#name-and-group). The three-dot menus next to a wallet or account provide actions for that specific item.

### Add Wallet

The **Add wallet** button at the bottom of the Wallet List lets you choose how to add another wallet. You can:

- create a new wallet;
- connect a hardware wallet;
- restore a wallet from a recovery phrase or import an Eternl backup file;
- create a new multi-signature wallet or add an existing multi-signature wallet that includes you as a participant;
- transfer a wallet from another Eternl instance through Eternl Hub or a QR code; or
- add a read-only wallet using an address or public key.

### Manage Mode

Click **Manage** at the bottom of the Wallet List to activate Manage mode. The button is highlighted while it is active.

In Manage mode, you can choose which wallet groups, wallets, and accounts are shown in the regular Wallet List. You can also remove wallets or accounts, except for the first account of a wallet. Click **Manage** again to leave Manage mode and apply your visibility choices.


---

## Page Content

The Page Content area displays the page selected in the Sidebar. On account-specific pages, the displayed information relates to the account selected in the Wallet List.

![Main User Interface - Page Content](/assets/pictures/ui_overview-page_content-0.jpg)
