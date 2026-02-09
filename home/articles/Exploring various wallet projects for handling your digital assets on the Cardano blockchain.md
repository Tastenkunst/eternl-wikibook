# Overview of a selection of available Cardano wallets (as of May 2024)

A key concept of blockchains is the decentralized aspect of data collection and storage. That means all the info about your wallet and the assets it contains is not stored locally on your computer or a central server instance but rather on the blockchain.

Every blockchain wallet requires a connection to a full node to interact with the blockchain network. Wallets serve as interfaces, allowing users to check their balances and initiate transactions thus giving access to and altering the state of the blockchain..

Users have two options for connecting their wallets to the network: 

They can run a personal node on their own hardware, ensuring direct and private interactions with the blockchain, or they can connect their wallet to a remote node managed by another entity.


# 1. Full node wallet
## Daedalus 

![daedalus_wallet_logo_2.jpeg](/announcements/daedalus_wallet_logo_2.jpeg)


| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ❌       |         ❌         |       ❌       |    ❌    |          ❌           |         ✔️         |         ✔️         |         ❌           |

[Daedalus](https://daedaluswallet.io/) is a full node desktop wallet developed by [IOHK](https://iohk.io/) for the Cardano blockchain, launched in 2017.

## Key features of Daedalus include

### Maximum Security and Complete Trust
Daedalus is a full node wallet. Unlike light wallets like Eternl, Yoroi and Nami, Daedalus downloads the entire Cardano blockchain and checks every transaction on its own. This gives you the highest level of security and full trust, without relying on third-party servers.

### Works on All Desktop Platforms
Daedalus supports all major desktop operating systems: Windows, macOS, and Linux. It's built using web technologies on Electron, a reliable open-source platform for creating applications that work on different desktop systems. There are no mobile versions of Daedalus wallet available.

### Unlimited Wallet Management
You can manage as many wallets as you want with this advanced HD wallet system. This gives you more control over how your funds are organized. Plus, strong backup and restore features help you recover your funds if needed.

### Security vs. Convenience
While online wallets offer quick access and ease of use, they are vulnerable to cyber threats like hacking and malware. Daedalus, being a desktop wallet, offers a more secure environment but at the expense of less convenience compared to mobile versions. Notably just as every other tool, Daedalus does not offer complete security and is vulnerable to most of the same attacks that light wallets are threatened by. Because most of the scams in crypto space don’t use any bugs or technical hacking attacks but rather focus on social engineering and try to convince the wallet owner to give out their seed phrase. No wallet can secure you from this threat!

# 2. Hardware wallets
A hardware wallet is a small, physical device used to keep your cryptocurrency safe. Unlike storing your crypto on your computer or phone, which can be hacked, a hardware wallet keeps your private keys (the secret codes you need to access your coins) offline. This makes it much harder for anyone to steal your money.

Here's how a hardware wallet works:

**- Offline Storage**
Your private keys are stored on the device itself, not on the internet.

**- Security Features** 
It has built-in security features to protect against hacking and malware.

**- Transaction Approval**
To send your crypto, you need to physically press a button on the device, which ensures only you can authorize transactions.

See hardware wallets, that currently support Cardano, below:

## 2.1 Ledger

![ledger_logo_dark_150.png](/announcements/ledger_logo_dark_150.png)

### Ledger Nano S 
A compact, affordable option. It connects to your computer via USB and supports multiple cryptocurrencies, including Cardano.

### Ledger Nano X
A more advanced version with Bluetooth connectivity, allowing you to manage your crypto on the go using your smartphone. It also supports Cardano and many other coins.

## 2.2 Trezor

![trezor_dark_small.png](/announcements/trezor_dark_small.png)

### Trezor Model T:
This is a premium hardware wallet with a touchscreen for easier use. It supports Cardano and many other cryptocurrencies. It connects to your computer via USB and provides high-level security for your assets.

## 2.3 Keystone (formerly Cobo Vault)

![keystonne_dark_small.png](/announcements/keystonne_dark_small.png)

The [Keystone Wallet](https://keyst.one/?rfsn=7717950.1c87691&utm_source=refersion&utm_medium=affiliate&utm_campaign=7717950.1c87691) is an air-gapped hardware wallet, providing an additional layer of security by operating offline and only communicating through QR codes. This makes it a robust option for managing your ADA and assets.

| Feature                              | Ledger            | Trezor         | Keystone |
|:------------------------------------:|:-----------------:|:--------------:|:--------:|
|Multi-chain support                   |         ✔️        |       ✔️      |    ✔️    |
|Cardano - Catalyst registration/voting|         ✔️        |       ✔️      |    ❌    |

> Hardware wallets can be used in conjunction with light wallets, provided they are supported by the corresponding light wallet, offering the enhanced security of offline key storage and transaction authorization, along with the convenience and fast synchronization of light wallets.
> 
> Using these hardware wallets, you can safely store and manage your Ada and Token, protecting them from online threats.
{.is-info}


# 3. Light wallets
Light wallets, like Eternl, Yoroi and Nami, are faster, because they only download relevant wallet data instead of the whole blockchain ledger. This makes them easy to use and quicker to set up but less secure since you depend on external servers.

## 3.1 Eternl 

![eternl-logo-small-vector.png](/announcements/eternl-logo-small-vector.png)

[Eternl](eternl.io) is a non-custodial Cardano light wallet by [Tastenkunst GmbH](https://www.tastenkunst.com/) in German for the Cardano community, launched in 2021 (as ccvault. io). Eternl's mission is to implement features requested by the Cardano community. 

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ✔️       |    ✔️    |          ✔️           |         ✔️         |         ✔️         |         ✔️           |

### Key features of Eternl include

- Connects to Hardware Wallets
Ledger, Trezor and Keystone

- Support for ADA and native tokens:      
Eternl allows users to manage their ADA and other native tokens securely within the wallet.

- Multi-platform Accessibility: 
Eternl is available as a mobile app, a web app, and a browser extension, catering to various user preferences and needs.

- Participate in Project Catalyst: 
Register to vote in Cardano's decentralized innovation fund directly from the wallet.

### Advanced Features: 
- fast syncing capabilities
- In-wallet DApp browser for DApps that opted in
- Integrated DApp connector (browser extensions)
- CardanoConnect and WalletConnect capabilities (beta)
- in-wallet token swap options for ADA and other Cardano native tokens 	
- various direct ADA purchase options

## 3.2 Lace

![lace_150x150.jpg](/announcements/lace_150x150.jpg)

[Lace](lace.io) is a light wallet platform designed to facilitate user interaction with Web3 technologies. It was released by Input Output Global ([IOG](https://iog.io/)), the developer behind the Cardano blockchain. It was released in April 2023. 

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ❌           |
 
### Key features of Lace include:

- Connects to Hardware Wallets	
(Ledger, Trezor)

- Web3 exploration: 
Users can directly interact with decentralized applications, enhancing its utility within the blockchain ecosystem.

- Integrated DApp connector 
This feature facilitates smoother transactions and interactions between users and the decentralized applications on the Cardano network

## 3.3 Nami

![nami_logo.jpg](/announcements/nami_logo.jpg)

[Nami Wallet](https://www.namiwallet.io/) is a non-custodial, browser-based wallet extension designed specifically for interacting with the Cardano blockchain, initially created by Alessandro Konrad in 2021. Nami was [taken over by IOG in November 2023](https://www.lace.io/blog/lace-says-hello-to-nami?utm_source=lace.io&utm_medium=website&utm_campaign=nami&utm_content=banner).

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ❌           |

### Key features of Lace include:

- Connects to Hardware Wallets	
(Ledger, Trezor and Keystone)

+ Non-custodial: 
Nami Wallet does not hold users' private keys, giving users full control over their assets.

- Browser-Based: 
Easily accessible as a browser extension, making it straightforward to manage assets and interact with DApps.


## 3.4 Yoroi 

![yoroi_logo.jpg](/announcements/yoroi_logo.jpg)

[Yoroi](https://yoroi-wallet.com/) is a light wallet developed since 2018 by [EMURGO](https://www.emurgo.io/), a global blockchain technology company and a founding entity of the Cardano protocol.

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ❌           |


### Key features of Yoroi wallet include:

Connects to Hardware Wallets: 
Ledger and Trezor.

**- Integrated DApp connector **
This feature facilitates smoother transactions and interactions between users and the decentralized applications on the Cardano network

**- Participate in Project Catalyst**
Register to vote in Cardano's decentralized innovation fund directly from the wallet.

**- Stake ADA** 
Stake Cardano ADA for rewards directly from the wallet interface.

**- Review Transactions**
View transaction history, including ADA, tokens, and NFTs.

**- Track Assets** 
Monitor Cardano native tokens, their balances, transaction history, and metadata.


## 3.5 Flint wallet

![flint.jpg](/announcements/flint.jpg)

[Flint Wallet](https://flint-wallet.com/) is a versatile digital wallet developed by [dcSpark](https://www.dcspark.io/) and designed primarily for handling decentralized finance (DeFi) and non-fungible tokens (NFTs). 

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ❌           |

### Key features of Flint wallet include:

Key features of Flint wallet include

**- Connects to Hardware Wallets:** 
Ledger and Trezor.

**- Interact with dApps**
Interact with dApps while maintaining security by using hardware wallets.

**- dApp Connector**
Interact with smart-contracts.

**- NFT Support**
Browse your collection without ever leaving your wallet.

**- Milkomeda Support**
Move assets to Milkomeda EVM compatible chains.

## 3.6 Gero wallet

![gero_wallet.jpg](/announcements/gero_wallet.jpg)

[GeroWallet](https://www.gerowallet.io/) is a wallet designed specifically for the Cardano blockchain. It was launched in August 2021 and provides a user-friendly interface and secure environment for managing digital assets directly through a browser extension.

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ❌           |

### Key features of Gero wallet include:

**- Connects to Hardware Wallets**
Ledger and Trezor.

**- Built-In Swap**
Swap ADA and any Cardano native assets directly within the wallet.

**- Buy ADA with a Card**
Purchase ADA quickly from the wallet with a credit or debit card.

**- NFT Media Player**
Listen to your music and audio NFTs with the Gero Media Player.

## 3.7 Typhoon wallet

![typhoon_wallet.jpg](/announcements/typhoon_wallet.jpg)

Typhon Wallet is a digital wallet designed specifically for the Cardano blockchain, suitable for both web and extension use. 


| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ✔️       |    ❌    |          ✔️           |         ✔️         |         ✔️         |         ✔️           |

### Key features of Typhoon  wallet include:

**- Connects to Hardware Wallets**
Ledger, Trezor and Keystone

**- Staking **
Allows users to stake ADA to various pools and earn rewards.
**

**- NFT Management**
Supports sending, receiving, and viewing NFTs directly within the wallet.

**- Multi-Account**
Enables storing ADA in different accounts under one wallet without needing multiple seed phrases.

**- Multi Delegation**
Users can delegate ADA to multiple staking pools using multi-accounts.

**- Rich Staking Center**
Provides up-to-date information on stake pools and tracks rewards within the wallet.

**- Metadata Transactions**
Allows adding metadata to transactions, such as receipt numbers or messages.

**- Voting**
Users can register to vote in the Catalyst voting rounds to support favorite proposals.

**- HD & Single Address Wallets** 
Offers a choice between HD wallets for enhanced security and single-address wallets for simplicity and speed.

## 3.8 Begin wallet

![begin_logo_150.jpg](/announcements/begin_logo_150.jpg)

| mobile (IOS) | mobile (Android) | Web-app | PWA support | browser extension | Ledger support | Trezor support | Keystone support |
|:-------------:|:-----------------:|:--------------:|:-------:|:---------------------:|:-----------------:|:-----------------:|:-------------------:|
|      ✔️       |         ✔️         |       ❌       |    ❌    |          ✔️           |         ✔️         |         ❌         |         ❌           |

### Key features of Begin wallet include

**- Connect to Hardware Wallets**
Ledger.

**- NFT Support**
Browse your collection without ever leaving your wallet.

**- In-wallet swap feature**
in-wallet token swap options for ADA and other Cardano native tokens

**- Interact with dApps**
Interact with dApps while maintaining security by using hardware wallets.

**- dApp Connector**
Interact with smart-contracts.


# Screenshots

## Screenshots {.tabset}

### ![eternl-logo-small-vector_25.png](/announcements/eternl-logo-small-vector_25.png) Eternl Summary

![eternl_summary.png](/announcements/eternl_summary.png)

### ![eternl-logo-small-vector_25.png](/announcements/eternl-logo-small-vector_25.png) Eternl Token

![eternl_tokenlist.png](/announcements/eternl_tokenlist.png)

### ![lace_25.jpg](/announcements/lace_25.jpg) Lace Home

![lace.png](/announcements/lace.png)

### ![typhoon_wallet_25.jpg](/announcements/typhoon_wallet_25.jpg) Typhoon Home

![typhoon_home.png](/announcements/typhoon_home.png)

### ![typhoon_wallet_25.jpg](/announcements/typhoon_wallet_25.jpg) Typhoon Assets

![typhoon_assets.png](/announcements/typhoon_assets.png)

### ![yoroi_logo_25.jpg](/announcements/yoroi_logo_25.jpg) Yoroi Home

![yoroi_home.png](/announcements/yoroi_home.png)

### ![yoroi_logo_25.jpg](/announcements/yoroi_logo_25.jpg) Yoroi Assets

![yoroi_assets.png](/announcements/yoroi_assets.png)

### ![flint_25.jpg](/announcements/flint_25.jpg) Flint Wallet

![flint.png](/announcements/flint.png)

### ![gero_wallet_25.jpg](/announcements/gero_wallet_25.jpg) Gero

![gero_wallet.png](/announcements/gero_wallet.png)

###  ![begin_logo_25.jpg](/announcements/begin_logo_25.jpg) Begin

![begin_wallet.png](/announcements/begin_wallet.png)

