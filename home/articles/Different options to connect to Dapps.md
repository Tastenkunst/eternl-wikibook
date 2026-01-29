# In-wallet DApp browser, browser extensions, CardanoConnect, WalletConnect

Eternl wallet offers four distinct methods for interacting with decentralized applications (DApps).

## 1. DApp Browser (In-Wallet)
Eternl users can easily connect their wallets to DApps listed within Eternl's integrated DApp Browser. This feature, designed for user convenience, includes a small transaction fee to support the ongoing development of Eternl. 
For transactions amounting to 100 ADA or more, a convenience fee of 0.1% of the purchase value or 1 ADA, whichever is greater, will be applied.

> This feature is available only for DApps that have opted in.
{.is-info}

Before you can connect to a DApp, you will be asked which wallet/account you want  to use to interact with this DApp. To do this, simply click on the "Connect as DApp account" button under the respective account.

## 2. Connecting to DApps via the Eternl Wallet Browser Extension
To connect to DApps using the Eternl browser extension, you must first select a wallet or account specifically for this purpose, similar to the in-wallet DApp browser. Follow these steps to ensure a smooth connection process:
Select Your Account
Before visiting the DApp website, activate the desired account from your account list. To do this, navigate to the account list, select the account, and press the button in the header to switch to this account.

Once the account is successfully connected, an icon will appear in the upper right corner of the screen, indicating the active connection even if you navigate away from the account list page.

> To do that, activate the account in the account list and press this button ![dapp_connect_.jpg](/announcements/dapp_connect_.jpg)  in the header to turn to this ![dapp_connected_.jpg](/announcements/dapp_connected_.jpg) Once an account is successfully connected, it will be indicated by this icon ! ![dapp_connected_global_25.jpg](/announcements/dapp_connected_global_25.jpg) in the upper right corner of the screen, even if you are leaving the account list page
{.is-info}

1. - Visit the DApp Website
After selecting your account, visit the DApp website where you intend to connect your wallet.
1. - Connect Your Wallet
On the DApp website, initiate the connection process by selecting "Connect Wallet" or a similar link.

> By following these steps, you will connect to DApps using the Eternl wallet browser extension.
{.is-success}

## 3. CardanoConnect (beta) – (Sundaeswap)
CardanoConnect is a framework designed specifically for the Cardano blockchain to facilitate the interaction between decentralized applications (DApps) and Cardano wallets. Although it’s not as widely recognized as WalletConnect, it serves a similar purpose in the Cardano ecosystem. It is based on CIP 45, which defines the standard for secure wallet-DApp communication on the Cardano network. Here are some key features:

**- API Integration**
CardanoConnect provides APIs that allow DApps to connect with Cardano wallets, enabling users to perform transactions, sign messages, and interact with smart contracts.

**- Wallet Compatibility**
It is designed to work seamlessly with various Cardano wallets, such as Eternl, Yoroi, and Daedalus.

**- Security and Privacy**
CardanoConnect ensures secure connections between DApps and wallets, leveraging Cardano’s robust security features.

> Currently this feature only works with SundaeSwap, here is a tutorial by SundaeSwap Labs about Cardano Connect (CIP-45) (beta) with Eternl
{.is-info}

---

<iframe width="949" height="534" src="https://www.youtube.com/embed/mRpXIh-DyYM" title="Cardano Connect (CIP-45) in SundaeSwap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

--- 

## 4. WalletConnect (beta) – (Minswap, Wingriders)

WalletConnect is an open-source protocol that allows users to connect their cryptocurrency wallets to DApps across multiple blockchain platforms. Key aspects include:

**- Cross-Chain Compatibility**
Originally designed for Ethereum, WalletConnect now supports multiple blockchains, including Cardano, Binance Smart Chain, and more.

**- Off-Chain Communication**
Uses off-chain messaging to securely establish a connection between the DApp and the wallet, typically initiated through QR codes or deep links.

**- End-to-End Encryption**
Ensures that all communications between the wallet and the DApp are end-to-end encrypted, enhancing security and privacy.

**- User Experience** 
Simplifies the user experience by allowing users to interact with DApps without exposing their private keys, improving security and convenience.

> Currently this feature only works with Minswap DEX and WingRiders. 
{.is-info}

The procedure to connect is similar:

### Select Your Account to Interact with the DApp
Before visiting the DApp website, activate the desired account from your account list. 

> To do that, activate the account in the account list and press this button ![dapp_connect_.jpg](/announcements/dapp_connect_.jpg)  in the header to turn to this ![dapp_connected_.jpg](/announcements/dapp_connected_.jpg) Once an account is successfully connected, it will be indicated by this icon ! ![dapp_connected_global_25.jpg](/announcements/dapp_connected_global_25.jpg) in the upper right corner of the screen, even if you are leaving the account list page
{.is-info}

### Visit the DApp Website
After selecting your account, visit the DApp website, launch the App and choose the WalletConnect option, which will generate a connection string to copy. (or QR code for mobile use) 

### Connect Your Wallet
Insert this string in the provided field by Eternl:

**[ All DApp connection Options > WalletConnect > Connect DApp and Confirm ]**

### Visit the DApp Website

> You are now connected with you chosen account to interact with the DApp.
{.is-success}




