# DApp browser integration

## Some statistics

| Platform           | User base (monthly) |
| ------------------ | ------------------: |
| Browser extension  |                130k |
| Android mobile app |                 20k |
| iOS mobile app     |                  8k |
| PWA (eternl.io)    |                  5k |

## Connection types

Eternl v2 supports 4 app types and 7 different connection methods:

| App/Connector            |               API | Fee Address |
| ------------------------ | ----------------: | ----------: |
| Connector: Extension     |  API Injected (1) |          NO |
| Dapp Browser: Extension  |  API Injected (1) |         YES |
| Dapp Browser: iOS        |  API Injected (1) |         YES |
| Dapp Browser: Android    |  API Injected (1) |         YES |
| Dapp Browser: eternl.io  | PWA JS Bridge (2) |         YES |
| WalletConnect: all apps  | WalletConnect (3) |         YES |
| CardanoConnect: all apps |         CIP45 (4) |         YES |

**All connection types adhere to the CIP30 API.**

* (1) Eternl loads the dapp’s MAIN URL and injects the API directly.
* (2) Legacy Dapp Browser handling: Dapps implement Eternl's PWA JS bridge.\
  This method loads the MAIN/SPECIAL URL (some dapps choose to have the handling on a separate URL, but that's not mandatory).
* (3) WalletConnect: Relies on centralized servers.
* (4) Cardano Connect: A decentralized, P2P alternative to WalletConnect CIP-45.

**Deciding whether to support PWA user base.**

Although implementing the PWA JS Bridge involves extra effort, it provides the benefit of featuring your dapp in the PWA’s Dapp Browser, where only select dApps are supported. With no URL input available, the PWA displays just a list of compliant dApps, so we encourage you to add support for the PWA JS Bridge.

Bridge snippet and example implementation:  [cardano-dapp-connector-bridge](https://github.com/Tastenkunst/cardano-dapp-connector-bridge)

## Technical requirements

Please open a support ticket with us on Discord to provide the following information:

Fill out the following JSON structure.

* label: project name
* caption: one short phrase
* summary: 1-3 sentences.
* description: longer text.
* categoryList: currently available: DeFi, Collectibles, Mints, Social, Tools, Raffle, Streaming, Other
* trigger: unique idendifiers, that people might enter into the URL input field for your entry to be opened.
* extensions: Not necessary, if you don't use more than cip: 30.
* url: The URL to load for (API Injected (1))
* urlBridge: The URL to load for ( PWA JS Bridge (2))
* icon: projectname-256x256.jpg square image for normal entries.
* banner: projectname-728x256.jpg promotional banner, optional, only necessary, if you want to be placed in a promoted spot.
* link: list of your social links, e.g. x, discord, youtube, telegram, github, medium, forum, linkedin, reddit

```json
  {
    label:                    'MinSwap',
    caption:                  'Where the community trades on Cardano.',
    summary:                  'MinSwap is a decentralized exchange on Cardano.',
    description:              'MinSwap is a decentralized exchange on Cardano. It is a community-driven project that aims to provide a safe and secure platform for users to trade their tokens.',
    
    categoryList:             [ 'DeFi' ],
    trigger:                  [ 'minswap', 'min' ],

    extensions:               [ { cip: 30 }, { cip: 95 } ],

    url:                      'https://eternl-dapp-browser.minswap.org',
    urlBridge:                'https://eternl-dapp-browser.minswap.org',

    image: {
      icon:                   '/images/dapp/256_156_squared/256x256_dapp_minswap.jpg',
      banner:                 'https://asset-logos.minswap.org/eternl-banner.jpg'
    },
    
    link: {
      x:                      'https://x.com/MinswapDEX',
      discord:                'https://discord.com/invite/minswap',
      reddit:                 'https://www.reddit.com/r/MinSwap',
      telegram:               'https://t.me/MinswapMafia',
      github:                 'https://github.com/minswap',
      medium:                 'https://minswap-labs.medium.com',
      forum:                  'https://forum.minswap.org'
    }
  }
```

## Convenience fee

The convenience fee is our way to monetize Eternl wallet to keep the lights on and delevop it further. To be listed on the Dapp Browser it's a requirement to implement the fee.

 // const feeAddress = window.cardano.eternl.experimental.feeAddress // normal string, bech32 address.

[EternlDAppBrowser.md](https://github.com/Tastenkunst/cardano-dapp-connector-bridge/blob/main/EternlDAppBrowser.md)\
(for the implementation of the Eternl "convenience fee").

***

### Integration test

## **API Injected (1): Eternl Beta browser extension**

If you want to test against a localhost, that's only available on the Eternl Beta extension, not in production.\
The dapp page is embedded in an iframe, which needs to be allowed by the dApp page.

**PWA JS Bridge (2): https://staging.eternl.io/**

For integration tests of the PWA JS Bridge, please use: https://staging.eternl.io/

The Dapp Browser page has a URL input field. Enter the URL to your dapp staging/production page to see whether it loads properly. Please see the section about Response headers in the [README.md](https://github.com/Tastenkunst/cardano-dapp-connector-bridge/blob/main/README.md) of the bridge.

Please check the browser's dev console network section to find any errors (check the response headers of failing requests).

***

### Checklist

* No errors while loading the page in the Dapp Browser
* The page works on mobile browsers (iOS: Safari, Android: Chrome)
* The Eternl convenience fee is implemented (or for minting projects a 0.5% commision is accepted)
