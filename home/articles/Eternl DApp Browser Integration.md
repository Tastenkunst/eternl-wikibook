# How to integrate my DApp into Eternl DApp Browser?

## Technical requirements

To be included in the DApp Browser, some technical hurdles have to be overcome.

First of all, the bridge:  

### Cardano dapp connector bridge
A postMessage bridge to connect to dApps loaded into an iframe.

#### Motivation
In April 2022, browser extensions are the only way to connect to Cardano dApps. The ecosystem lacks a dapp-connector API on mobile devices and the web. This bridge script attempts to fill this gap.

With CIP-0030, Cardano already has a dapp-connector specification. Reusing this API will contribute to rapid adoption.

### Results {.tabset}
A postMessage bridge to connect to dApps loaded into an iframe.

#### How to: dApps

DApp includes cardano-dapp-connector-bridge.js and calls:
```// Calling this function is mandatory.
initCardanoDAppConnectorBridge(async (walletApi) => {

  // Bridge was established by the wallet.
  // In this callback you can do, whatever is necessary to setup a good connection, eg.
  
  if(walletApi.name === 'eternl') {
    
    // Here you can set any global flags, eg. 
    // isIframeEmbedded = true
    // addWalletFee = true

    // You could also just connect through the dapp-connector as you would normally do via your connect wallet button.
    // eg.:

    // const fullApi = await walletApi.enable() // walletApi is window.cardano.eternl
    
    // Eternl fee address (mainnet/testnet), see EternlDAppBrowser.md for more info.
    // const feeAddress = window.cardano.eternl.experimental.feeAddress // normal string, bech32 address.
  }
})
```

#### How to: wallets

Wallets need to provide their API object as usual, but replace all functions with a simple string:
```
var bridgeInitialApi          = {

  isBridge:                   true,

  isEnabled:                  'isEnabled',
  enable:                     'enable',

  experimental: {             // your experimental object, if it exist

    appVersion: {

      major:                  1,
      minor:                  7,
      patch:                  0
    }
  },

  apiVersion:                 '0.1.0',
  name:                       'yourWalletNameSpace',
  icon:                       'data:image/png;base64,youricon',
}

var bridgeFullApi = {

  getNetworkId:               'getNetworkId',
  getUsedAddresses:           'getUsedAddresses',
  getUnusedAddresses:         'getUnusedAddresses',
  getRewardAddresses:         'getRewardAddresses',
  getChangeAddress:           'getChangeAddress',
  getBalance:                 'getBalance',
  getUtxos:                   'getUtxos',

  signTx:                     'signTx',
  signData:                   'signData',
  submitTx:                   'submitTx',

  getCollateral:              'getCollateral',

  experimental: {             // your experimental object, if it exist

    getCollateral:            'getCollateral'
  }
}
```
The API objects will be automatically recreated on the dApp side using postMessage calls.
See cardano-dapp-connector-bridge-init-wallet.js for more hints on how to implement it.

### Response headers
There are two options available.

1. Allow your page to be loaded in ANY web context (local, online, app, anywhere). This might be necessary to make third party services work correctly.
1. Restrict your page to be loaded only on certain domains.

Both options need to remove:

`X-Frame-Options`

For option 1 minimize response headers and remove any cross-origin or content-security-policy response headers.

For option 2, to be able to load a dApp page into an iframe, ALL response headers must be configured correctly. This includes pages, images (CDNs) etc.

Add:
```
content-security-policy: frame-ancestors https://*.eternl.io/ https://eternl.io/ ionic: capacitor: chrome-extension: http://localhost:*/ https://localhost:*/;

cross-origin-embedder-policy: require-corp
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: cross-origin
```

What frame-ancestors do?
`
https://*.eternl.io/ https://eternl.io/ -- page can be embedded on eternl pages.  
ionic: capacitor: chrome-extension: -- page can be embedded in apps.  
http://localhost:*/ https://localhost:*/ -- page can be embedded in development environments.
`

[Cardano dapp connector bridge - Github link](https://github.com/Tastenkunst/cardano-dapp-connector-bridge)

Browser extensions on desktop can inject any code into a host website. Wallets use that to inject their API into any dapp page. That's of course not possible, if we embed your page into Eternl. The only way to communicate is window.postMessage and that's what this bridge is all about. It follows its own small protocol, does a handshake and establishes comms between any wallet (that implements this) and the allowing dapp page.

Please take a look at:

[technical "getting started" - Github](https://github.com/Tastenkunst/cardano-dapp-connector-bridge/blob/main/README.md)

[implementation of the Eternl "convenience fee" - Github](https://github.com/Tastenkunst/cardano-dapp-connector-bridge/blob/main/EternlDAppBrowser.md)

---
### Results {.tabset}

####  Eternl "convenience fee"
Integration into the Eternl DApp Browser.
The Eternl DApp Browser is the first comfort feature for users, that we will monetize.

#### Advantages for the User
+ mobile dApps (iOS/Android apps and website)
+ favorite dApps in one place
+ optional feature (can use browser extension instead)

#### Advantage for dApp
+ higher volume through mobile traffic

#### User Fee for Comfort Feature
+ 0.1% or 1 ADA (whichever is higher) on every buy order/swap >= 100 ADA.
+ no fee on list, delist, cancel, price update etc.
+ no fee on buy orders/swaps < 100 ADA

| Order Amount | Fee   | %   |
|--------------|-------|-----|
| 100 ADA      | 1 ADA | 1.0%|
| 200 ADA      | 1 ADA | 0.5%|
| 500 ADA      | 1 ADA | 0.2%|
| 1000 ADA     | 1 ADA | 0.1%|
| 2000 ADA     | 2 ADA | 0.1%|

### Examples

#### Browser Extension:
- 5000 ADA - buy order for NFT
- 125 ADA - marketplace fee 2.5%
- 5000 ADA - paid by buyer
	- 4875 ADA - for the seller
	- 125 ADA - for the marketplace
#### DApp Browser, comfort fee paid by user:
- 5000 ADA - buy order for NFT
- 125 ADA - marketplace fee 2.5%
- 5 ADA - Eternl fee 0.1%
- 5005 ADA - paid by buyer
	- 4875 ADA - for the seller
	-	125 ADA - for the marketplace
	- 5 ADA - for Eternl

### Easy Implementation
- Add an additional output to the BUY transactions

For dApps there are no downsides to this concept. The fee can be clearly communicated to be an addition for using the Eternl DApp Browser. Users are free to use the browser extension instead, if they want to avoid the comfort fee.

DApps will see increased volume due to mobile traffic. Of course it's also completely optional for dApps to join the Eternl DApp Browser.

### Testing

For integration tests, please use: https://staging.eternl.io/

The DApp Browser page has a URL input field on top. Enter the URL to your dapp staging/production page to see whether it loads properly. Please see the section about Response headers in the [README.md](https://github.com/Tastenkunst/cardano-dapp-connector-bridge/blob/main/README.md) of the bridge.

Please check the browser's dev console network section to find any erros (check the response headers of failing requests).

### Checklist
+ no errors while loading the page in the DApp Browser
+ the page works on mobile browsers (iOS: Safari, Android: Chrome)
+ the Eternl convenience fee is implemented (or for minting projects a 0.5% commision is accepted)

**Integration** 

Please open a support ticket now and provide us with your staging/production URLs and please also provide an image (728x256px) for the DApp Browser entry.
We will put your entry in our staging environment and you can do the final tests. Once you are sure it works, we can move it to production. 

![dapp_browser_guidelines.png](/announcements/dapp_browser_guidelines.png){.align-center}

## more help ... [<span class="mdi mdi-help-circle-outline"></span>:arrow_right:](/en/more-help)