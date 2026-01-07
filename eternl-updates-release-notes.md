# Eternl updates / release notes

## Releases

# v2.0.16.0
> Released 16.12.2025
{.is-info}

## Changed
+ Updated second checkbox text on the ToS acceptance overlay to read: "I agree to the immediate start of the service and acknowledge that I waive my 14-day cooling-off period (for the ToS)."

## Fixed
+ Signing with spending password: Shift key not working properly.

Thanks to @stakepool_ for reporting it.

Availability
 ✓  available - eternl.io
 ✓  available - beta.eternl.io
 ✓  available - Eternl Extension
not submitted - Eternl Beta Extension
    pending   - Android app
    pending   - iOS app

[Eternl Update v2.0.16.0](/en/updates/2-0-16-0)

---

# v2.0.15.0
> Released 14.12.2025
{.is-info}

## Fixed
+ Granting initial dapp access resulting in "account changed" error 
+ User slippage setting in MonsterSwap being used to build final transactions
+ Extension popups not opening on multiple screens setups
+ Delegate button not showing when stake pool is retired
+ Cancel orders using minswap aggregator via MonsterSwap
+ Trying to submit a tx after signing with the first account when more accounts need to sign

## Availability
 ✓  available - eternl.io
 ✓  available - beta.eternl.io
 ✓  available - Eternl Extension
not submitted - Eternl Beta Extension
 -  submitted - Android app
 -  submitted - iOS app

[Eternl Update v2.0.15.0](/en/updates/2-0-15-0)

## v2.0.14.1

> Released 29.10.2025 {.is-info}

### MonsterSwap

* Added support for the MinSwap aggregator

### Updated

* Smart contract badges

### Fixed

* After submitting a transaction the app didn't switch to the transaction list
* Selecting autocomplete wallet group name preventing loading the app
* Midnight not using an unused address on sm.midnight.gd
* Dapp Browser with a url /path opening without the path after app restart
* Optimized Multi-Sig backend (sharing of partially signed transactions)
* Import issue with custom Multi-Sig scripts (e.g. Summon Platform scripts)

### Availability

✓ available - eternl.io ✓ available - beta.eternl.io ✓ available - Eternl Extension ✓ available - Eternl Beta Extension not submitted - Android app not submitted - iOS app

FYI: Mobile apps won't be updated until next week or next release

## v2.0.13.4

> Released 15.10.2025 {.is-info}

### Added

* Tx Viewer: "Show Details" will reveal "Spent by" on outputs, navigate to that transaction through the context menu, similar to inputs.

### Changed

* Warning/Info for spending refScripts or inline datums in transaction.

### Updated

* Smart Contract badges (e.g. Strike, CSwap, Splash)
* Trezor signData support (device firmware isn't available yet to the general public)
* OneKey SDK

### Fixed

* Addressbook handling.
* Transaction building for cases: 2 UTxOs, Send All, fee was deducted, when it was already covered.
* DRep status/info when de-registered
* Account DRep delegation status; When the DRep de-registered, the previous delegation was considered instead.
* Trezor: Staking pool update transactions
* Transaction date filter

***

#### Availability

✓ available - eternl.io ✓ available - beta.eternl.io ✓ available - Eternl Extension ✓ available - Eternl Beta Extension not submitted - Android app not submitted - iOS app

## v2.0.12.5

{% hint style="info" %}
released 04.09.2025
{% endhint %}

### Midnight Glacier Drop

* Trezor: Claim your $NIGHT tokens using the "NULL Transaction signing" method.

### Backend

* Translations are now their own microservice decoupeling them from the syncing backend.

### Send page

* Address input is now an auto-complete input field: Enter wallet names or address book labels to quickly select your own or stored wallets/accounts.
* Put "Select account", "Select from addressbook" and "QR code" to a context menu.
* Added the option to add inline datums and RefScripts to an output on the send page.
* Added warnings when spending UTxOs with attached datums or RefScripts.
* IMPORTANT: If you want to not spend UTxOs with datums or RefScripts, make sure to lock them on the UTxO List page.

### Changed

* Support to allow signing of transactions with unknown inputs and expired TTL (added warnings).
* Asset filter: Use ; to filter for multiple assets at once, e.g. "tappy4278; tappy3709". Hit ENTER to lock in those assets and search for additional assets.
* Added treasury withdrawals to the rewards chart.
* Improved OneKey hardware wallet support.
* Added more details about withdrawal and parameter governance actions.
* Added warning to pool deletation, if please isn't met or low ROS.
* Changed account public key export to acct\_xvk1 only, but also added wallet multi-sig acct\_shared\_xvk1.
* Added filter and pagination for Ada Handles on the Account Name setting.
* Added a source for token registry data.

### Fixed

* Delegate button, if delegated to a retired pool.
* Custom submit endpoints returning status other than 200.
* Minor number formatter issues.
* SAM mode: Put a custom SAM address as first address returned by getUsedAddresses().
* Some tx building issues after removing previously added assets.
* DRep card (with no available data) in tx viewer.

Availability eternl.io: not submitted beta.eternl.io: available Eternl extension: not submitted Eternl Beta ext: awaiting approval Android: not submitted iOS: not submitted

## v2.0.11.2

{% hint style="info" %}
released 06.08.2025
{% endhint %}

### Midnight Glacier Drop

* Trezor: Claim your $NIGHT tokens using the "NULL Transaction signing" method.

### Backend

* Translations are now their own microservice decoupeling them from the syncing backend.

### Send page

* Address input is now an auto-complete input field: Enter wallet names or address book labels to quickly select your own or stored wallets/accounts.
* Put "Select account", "Select from addressbook" and "QR code" to a context menu.
* Added the option to add inline datums and RefScripts to an output on the send page.
* Added warnings when spending UTxOs with attached datums or RefScripts.
* IMPORTANT: If you want to not spend UTxOs with datums or RefScripts, make sure to lock them on the UTxO List page.

### Changed

* Support to allow signing of transactions with unknown inputs and expired TTL (added warnings).
* Asset filter: Use ; to filter for multiple assets at once, e.g. "tappy4278; tappy3709". Hit ENTER to lock in those assets and search for additional assets.
* Added treasury withdrawals to the rewards chart.
* Improved OneKey hardware wallet support.
* Added more details about withdrawal and parameter governance actions.
* Added warning to pool deletation, if please isn't met or low ROS.
* Changed account public key export to acct\_xvk1 only, but also added wallet multi-sig acct\_shared\_xvk1.
* Added filter and pagination for Ada Handles on the Account Name setting.
* Added a source for token registry data.

### Fixed

* Delegate button, if delegated to a retired pool.
* Custom submit endpoints returning status other than 200.
* Minor number formatter issues.
* SAM mode: Put a custom SAM address as first address returned by getUsedAddresses().
* Some tx building issues after removing previously added assets.
* DRep card (with no available data) in tx viewer.

### Availability

eternl.io: - not submitted beta.eternl.io: - available Eternl extension: - not submitted Eternl Beta ext: - awaiting approval Android: - not submitted iOS: - not submitted

## v2.0.10.5

{% hint style="info" %}
Released 05.08.2025
{% endhint %}

### Governance

Bulk voting (first iteration) on proposals is here. DReps can now prepare their votes and cast them in a single transaction.

For DReps using Ledger devices, you can only cast a single vote per transaction. As a workaround, you could get a Keystone device, enter your Ledger seed phrase, change derivation on the Keystone device to Ledger and use that to cast all your votes in a single transaction.

### Web URIs

Eternl now supports URLs in the form of web+cardano://

This includes CIP-0013, CIP-0099, CIP-0157, CIP-0158

Simple payment requests, POO claims, advanced payment requests (prefilling the Send page with values for ADA, token, and comments) and opening the DApp Browser with a given URL. You can try it out using the new QR-Scanner option in the header or main menu.

### Apex Fusion

* Added support for the new Vector testnet.

{% hint style="info" %}
<mark style="color:$info;">Please note: AF uses the same address prefix on Prime mainnet and Vector testnet (same as Cardano mainnet).</mark>
{% endhint %}

### Added

* Ada Handle resolution of decentralized minted handles (DeMi)
* Failed transaction status (very rare on-chain)
* Export/Import wallet as QR code: makes it easy to transfer wallets from one device to another, e.g. from Desktop to mobile. Keep in mind, that for 'hot wallets' the encrypted (by spending password) private key is also shared.
* Added CSwap to MonsterSwap
* Added a bottom banner to get more user participation for governance.

### Changed

* Transaction list filter: Enter a token name (hit ENTER), enter another token name (hit ENTER) to filter for multiple tokens at the same time.
* Added context menus where we had multiple options, e.g. copy address
* Added hardware device info to debug export
* Trezor v9.6.2
* Updated Catalyst info page
* Forced DApp Account setting now prominently visible on accounts and wallets.
* Forced DApp Accouned can now be set in the three dot context menu.

### iOS

* DApp Browser entries removed. User need to enter the URLs themselfes.

### Fixed

* Decimal settings applied globally
* Catalyst registration
* \[object Object] in notifications where it should read 'ADA'.
* Wayland X11 multiple screens popup
* GrapheneOS added missing \[meta-data] tag
* Pin on mobile (biometrics)
* Transaction viewer on utxo list
* UI issues on multi-sig creation

### Availability

* eternl.io: available
* beta.eternl.io: available
* Eternl extension: submitted, awaiting approval
* Eternl Beta ext: not submitted
* Android: not submitted
* iOS: not submitted

## v2.0.9

Released 26.06.2025&#x20;

{% hint style="info" %}
Eternl Beta published to Chrome Webstore - beta.eternl.io is up-to-date
{% endhint %}

SidePanels have too many issues, we are going back to popups for dapp interactions.

### Multi-Sig

* advanced script creation using a node graph
* page to see the script details
* improved Multi-Sig wallet import, including exports from Roundtable and raw native script cbor / CSL json
* optional encrypted metadata for the on-chain wallet registration

### Added

* wallet list (switch on in Pro Mode settings)
* various TxViewer additions and fixes
* Addressbook search
* Bulk export of wallets (see App Settings)
* Pool certs support for HW owner.

### Changed

* Switching from SidePanel to popups for dapp connections
* DApp Browser entries now load from the repository again
* Disablec Beta welcome message modal

### Fixed

* Address pasting (now trims new lines and spaces properly)
* App PIN/password can be any string now (not limited to 4 digits)
* Redirect after PIN entry
* account ADA Handle on send page
* locale number formating
* issues with layout/ui
* translations

Eternl Update v2.0.9 beta

## v2.0.8

> Released 30.04.2025\
> {.is-info}

### Added

* DRep key for CLI wallet
* Governance information in tx details

### Changed

* FileUpload is clickable
* separate mint/burn tx details
* load language files from backend
* hide 0 ADA smart contract withdrawal badge

### Fixed

* asset policy search in tx history
* drep list sorting
* Android bottom navigation padding
* biometrics can be disabled
* compact decimal numbers
* return valid empty witness set instead of empty string
* next unused address in non SAM
* issues with layout/ui
* issues with hw wallet
* translations (coin names ADA vs APEX)

Eternl Update v2.0.8

## v2.0.7

> Released 17.04.2025\
> {.is-info}

### Added

* Added back the submit button on pending tx, if Eternl doesn't know whether a tx was submitted or not
* Allow expired tx signing through cip-30 for fake login signData replacement
* TxViewer, under e.g. /txviewer/mainnet/

### Fixed

* DRep multi-sig registration
* issues with layout/ui
* issues with multi-sig + hw wallets
* translations

Eternl Update v2.0.7

## v2.0.6

> Released 12.04.2025\
> {.is-info}

### Added

* CSV export for transactions (click "more")
* DApp Browser entries: TapTools, Wingriders
* DApp connector button (see Pro Mode settings)

### Fixed

* issues/workarounds with sidepanel connection
* issues with layout
* translations
* MonsterSwap cancel logic

Eternl Update v2.0.6

## v2.0.5

> Eternl v2 is here!\
> {.is-success}

> Released 08.04.2025\
> {.is-info}

### Highlights

* All new UI!
* 30+ languages, e.g. Arabic, Bengali, Chinese, French, Hindi, Japanese, Russian, Spanish, and Vietnamese and many more
* MonsterSwap (aggregator or aggregators, including SteelSwap and DexHunter)
* Portfolio overview
* Multi-Sig wallet support, including on-chain wallet registration and transaction sharing - (advanced script creation follows soon)
* Enhanced Ada Handle functionality
* OneKey hardware wallet support
* Simplified Catalyst secion

We thank the Cardano community for their unwavering support and valuable feedback.

This update reflects our commitment to quality and user-focused development.

And this is just the beginning. Eternl v2 now stands on a solid foundation for continuous improvement.

Eternl Update v2.0.5

## v1.12.20.1

> Released 18.12.2024\
> {.is-info}

### Changed

* Added: CSL v13.2.0 lib
* Loading CSL dynamically for each network, v13.2 for already forked networks and 12.1.1 for mainnet and AF.
* Better handing of errors of aggregator apis.
* DApp Browser now trys to re-establish the connection with a dapp that redirects/reloads the entire embedded page. Since that behavior is not recommended, this might fails still.
* Governance page has more info and links to various external sites
* Added tempo.vote to the DApp Browser
* Removed in-wallet swap on iOS app, because of Apple blocking the update for the hard fork

### Fixed

* Ledger/Trezor building of conway tx
* Apex Fusion minUtxoValue
* Initial tx hash load (was removing tx of past 1 hour)
* Wrong local storage value (switching between v1 and v2)
* Workers not asking for a new backend server every 5 minutes

### Misc

* Helped finding an issue with the node's ledger code, which resulted in node v10.1.3 to be released

(This changelog includes all changes from 1.12.17 to 1.12.20)

Eternl Update v .1.12.20.1

## v1.12.16

> Released 15.10.2024\
> {.is-info}

(Available as extension and on eternl.io)

### Changes

* CIP30: added experimental.getForcedUnusedAddresses() requested by a dApp. Will return an unused address even when Single Address Mode is enabled.
* Catalyst 500 ADA requirement lowered to 25 ADA (text only, there is not threshold for registration).

### Fixes

* Fixed: signData with CIP129

Eternl Update v .1.12.16

## v1.12.15

> Released 10.09.2024\
> {.is-info}

(all apps awaiting approval)

### Fixes

Fixed: drep\_script delegation.

Eternl Update v .1.12.15

## v1.12.14

> Released 04.09.2024\
> {.is-info}

### Hotfix

* Fixed: Trezor popup being blocked in the extension

Eternl Update v .1.12.14

## v1.12.13.4

> Released 04.09.2024\
> {.is-info}

### Fixed

* Wallet balance reported 0 (edge case in extension)
* Extension reporting old utxos (no active background sync)
* Ledger signData: long payloads are now hashed using blake2b224 and signature header set to hashed: true
* Ledger and Trezor: added Conway transaction cbor flag
* In-wallet swaps using MuesliSwap

### Changes

* CSL: updated to v12.1.0-beta.1
* CMS: Emurgo message library, custom, supports hashed payloads, see PR: https://github.com/Emurgo/message-signing/pull/16
* CIP105 drepId now shown above CIP129 ids.
* Added option to de-register as DRep in the wallet settings

Currently available on eternl.io and beta.eternl.io.\
Extension uploaded to the Webstore (awaiting approval)\
iOS and Android apps uploaded to the stores (awaiting approval

Eternl Update v .1.12.13.4

## v1.12.12

> Released 25.08.2024\
> {.is-info}

(currently only Eternl Beta and beta.eternl.io)

Fixed some smaller issues.

### Fixed

* signData returning only payment part of a base address in the header
* signing for Frankenaddress with Ledger
* Conway requiredSigners handling

### Changes

* CSL: updated to v12.0.0-beta.9
* Implemented CIP129 (drep prefixes)
* Added Apex Fusion Prime and Vector testnets to production version

Eternl Update v .1.12.12

## v1.12.9.4

> Released 08.08.2024\
> {.is-info}

This release will also be available on iOS and Android.

### Fixed:

* signData implementations for Keystone, Ledger and mnemonic wallets

Eternl Update v .1.12.9.4

***

## v1.12.8.7

> Released 06.08.2024\
> {.is-info}

This release will also be available on iOS and Android.

### Keystone

* Added: Catalyst registration
* Added: signData message signing support
* Added: Conway support

### Ledger

* Added: signData message signing support
* Added: Conway support

### Trezor

* Added: (limited) Conway support; Trezor will only support delegating to a drep.

### Conway

* Stake registration certificate with explicit deposit
* Voting related tx changes

### Other changes:

* Updated: CSL -> 12.0.0-beta.3
* Updated: Trezor Connect -> 9.3.0
* Added: governance info to transaction view
* Added: failed state for failed smart contract transactions

### Fixed:

* Transaction is\_valid flag from cbor
* Really large numbers in utxos/tx preview
* Empty governance page on Preview
* CSV export date not wrapped in ""
* Set collateral button shown even when collateral is present

### Apex Fusion:

* Support for current testnets
* Added vector1\_ and vector\_test1 address prefixes
* Added Apex currency symbol Â

Eternl Update v .1.12.8.7

***

## v1.12.6

> Released 26.06.2024\
> {.is-info}

### Added

* visuals on Tx preview for governance actions
* webp media type in asset details
* more provider options for in-wallet swap
* badge for failed smart contract transactions

### Changed

* Updated Keystone SDK to v0.7.2
* Updated Trezor to v9.2.5-beta.1 (including governance voting)

### Fixed

* DRep validation key length.
* Partial signing flag taken into account already signed keys
* Missing Voltaire actions to Ledger signing.

Eternl Update v .1.12.6

## v1.12.5

> Released 23.05.2024\
> {.is-info}

### Added

Transaction filter (needs complete wallet resync, see Wallet Settings > Wallet Sync):

* asset finterprints, e.g. asset1m4u92ke6820pkk07m8qmmguye02ewr8g6tezr0
* comma seperation for addresses and finterprints, e.g. asset1m4u92ke6820pkk07m8qmmguye02ewr8g6tezr0,asset1lgultx63fukjlhsncmwp235pcnh4fh988phh7f

### Changed

* Disabled persisted data in Brave (not allowed anymore)

### Fixed

* Rewards mismatch after epoch boundary

#### Browser extension:

* Switching networkId didn't update epoch params.
* Switching networkId didn't update chain tip.
* Switching networkId didn't update dappAccount if it was the same seed on both networks.

Eternl Update v .1.12.5

## v1.12.4

> Released 15.05.2024\
> {.is-info}

### Fixed:

* registering new stake keys
* visual bug where deposits took inputs into account
* Ledger: withdrawals of script stake keys
* Trezor: withdrawals of script stake keys

Eternl Update v .1.12.4

## v1.12.3.17

> Released 05.05.2024\
> {.is-info}

### Improved:

* Utxo handling for cip30
* Asset info will refresh by opening the details (removed the manual update button)

### Added

* More on/off-ramp options (e.g. Transak)
* Unstoppable Domains: .clay address resolution

### Fixed:

* Input and tx building for very large token amounts
* Add additional accounts for Keystone
* getBalance not working for 0 utxos + 1 collateral
* getBalance excluding minUtxoValue of all tokens (now includes this ADA amount again)
* Catalyst voting registration
* Trezor delegation
* Trezor script bytes on outputs
* signTx not considering pending outputs
* Automatic account discovery
* Infinite loading of data when two eternl tabs were open
* Localstorage not updating for some global settings
* In-wallet swap (DexHunter reverse swap)

Eternl Update v .1.12.3.17

## v1.12.3.16 Beta

> Released 24.04.2024\
> {.is-info}

### Currently live on

* Browser extension "Eternl Beta"
* https://beta.eternl.io/

### Improved

* UTxO handling for CIP30
* Asset info will refresh by opening the details (removed the manual update button)

### Added

* More on/off-ramp options

### Fixed

* Input and tx building for very large token amounts
* Add additional accounts for Keystone
* getBalance not working for 0 utxos + 1 collateral
* getBalance excluding minUtxoValue of all tokens (now includes this ADA amount again)
* Catalyst voting registration
* Trezor delegation
* Trezor script bytes on outputs
* signTx not considering pending outputs
* Automatic account discovery
* Infinite loading of data when two eternl tabs were open
* Localstorage not updating for some global settings
* In-wallet swap (DexHunter reverse swap)

Eternl Update v .1.12.3.16

## v1.12.2

> Released 27.03.2024\
> {.is-info}

### Fixed:

* Ledger WebUSB connection on Android Chrome
* Trezor delegation
* signTx not considering pending outputs
* Automatic account discovery
* infinite loading of data when two Eternl tabs were open

Eternl Update v .1.12.2

## v1.12.1

> Released 25.03.2024\
> {.is-info}

### Changes:

* Ledger: connection type changed from WebUSB to WebHID with fallback WebUSB. Connections now work better on Chromium based browser.
* Removed the overlay when signing with Ledger to be able to see the actual transaction details.
* Parsing required\_signers manually to work around dapps which put duplicates in that field

### Fixed:

* Milkomeda transaction metadata missing
* CSV export button not working
* Wallet Resync failed when less than 15 seconds passed since the last sync
* Some syncing edge cases
* Deleting accounts / wallets
* tx fee parsing edge case

Eternl Update v .1.12.1

## v1.12.0

> Released 20.03.2024\
> {.is-info}

* #### Currently no new iOS/Android app release

### Changes

* Faster syncing, better performance
* Eternl Guard: scam warnings
* Updated SanchoNet support
* New cip30 connector
* Lots of fixes and UI updates

And many more internal code changes in preparation for Eternl v2.Eternl Update v .1.12.0

## v1.12.0 Beta

> Released 10.03.2024\
> {.is-info}

Today, we introduce Eternl Beta, a new browser extension used for testing upcoming features and changes and collecting feedback.

We invite all dApp developers and interested Cardano users to assist in testing v1.12.0 and smoothing out any rough edges.

[Eternl Beta](https://chromewebstore.google.com/detail/eternl-beta/aafgiaaomjbkmgainbdgjpcndnodkajp?hl=de)

### Main features:

* New CIP30 (dApp connector) implementation. Please help us test it.
* "Eternl Guard" marks scam tokens in your wallet
* Improved performance and faster syncing
* Updated SanchoNet support

## v1.11.18

> Released 23.12.2023\
> {.is-info}

### Changes

* Collateral set back to 5 ADA (from 3 ADA) as requested by dapps

### Fixed issues

* Spending password reset via pw reset and seed phrase validation

Eternl Update v .1.11.18

## v1.11.17

> Released 05.12.2023\
> {.is-info}

### Changes

* Improved submit transaction errors

### Fixed issues

* Sync workers connecting to mainnet instead of selected testnet
* Fee calculation for some Keystone transactions
* Collateral UTxO state handling
* Open orders page list
* Automatic change output splitting

Eternl Update v .1.11.17

## v1.11.15 / 16

> Released 29.11.2023\
> {.is-info}

### Keystone Hardware Wallet Integration

Eternl now supports the Keystone hardware wallet, enhancing security through QR code communication. Keystone's open-source software allows firmware updates via microSD, enabling offline functionality for heightened security. Consider purchasing your Keystone device through our affiliate link to support our work:\
https://keyst.one/?rfsn=7717950.1c87691\&utm\_source=refersion\&utm\_medium=affiliate\&utm\_campaign=7717950.1c87691

### Dexhunter Integration

Dexhunter has been integrated into Eternl's in-wallet swap feature, complementing Muesliswap. This integration includes Dexhunter's order splitting feature (get more tokens by smaller price impact on liquidity pools).

### Changes

* Added support for SanchoNet, the governance testnet (excluding governance actions, this will be implemented at a later time).
* Added quick access links to dApps on the summary page, including direct access to ADAmail and ADA Handle minting within Eternl.
* Added support for cip30 extensions: cip103 (signTxs) for multiple transaction signing, and cip104 (getAccountPub) allowing dApps access to public account keys upon user consent.
* Changed the metadata display during signing for user clarity.
* Backend improvements to reduce latency.
* Reduced the minimum collateral value from 5 ADA to 3 ADA.
* Updated collateral handling: Collateral UTXOs will be automatically used in transactions if they are the only ones available, resolving issues in newly funded accounts for staking delegation.

### Fixed issues

* Fixed (.16): Accounts with over 5000 transaction can now synchronize again.

> Note: A complete wallet resync might be necessary (refer to account settings).\
> {.is-info}

* Fixed string sorting, now utilizing en-US for Nordic languages.
* Various improvements to Cardano Connect functionality.
* Fixed an issued with "Collect UTxOs", where it wouldn't build transactions when it was indeed possible.

### Upcoming

The next minor update, v1.12.0, focuses on enhancing app stability and performance. Once that version is delivered, the next big update should be Eternl v2 in Q1/2024.

Eternl Update v .1.11.16

## v1.11.13

> Released 25.08.2023\
> {.is-info}

### Changes

* Improved pending transactions, which were sometimes falsely reported as invalid when in fact they ended up on chain.

### Fixed issues

* Fixed: delegating might fail sometimes

Eternl Update v .1.11.13

## v1.11.12

> Released 23.08.2023\
> {.is-info}

### Fixed issues

* Fixed: getUtxos() returning an empty array after one swap

Eternl Update v .1.11.12

## v1.11.11

> Released 22.08.2023\
> {.is-info}

### Fixed issues

* Fixed: Send button being active even with empty address field, sending to the Eternl fee address instead

Eternl Update v .1.11.11

## v1.11.10

> Released 21.08.2023\
> {.is-info}

### Changes/Additions

* Added: Collect UTxOs, up to 10 transactions at a time (but needs wider testing)

### Fixed issues

* Fixed: regression in utxo cache (filtering out too many utxos)
* Fixed: rewards chart not loading
* Fixed: Ledger/Trezor Frankenaddress handling
* Fixed: not connected status
* Fixed: small UI issues

Eternl Update v.1.11.10

## v1.11.9

> Released 17.08.2023\
> {.is-info}

(Available on eternl.io and sumitted to the Webstore, awaiting approval by Google)

### Changes/Additions

* Optimized: Transaction building (using in-memory utxo cache, cancel tx build for new tx build requests etc.)
* Added: Multi tx sign support as well as CIP30 signTxs() (beta)

### Fixed issues

* Fixed: swap cancal for collateral on address index other than 0
* Fixed: reward info not always loading correctly on re-delegation within epoch.
* Fixed: cip30 account changed error (but need wider testing)

Eternl Update v.1.11.9

## v1.11.8

> Released 08.08.2023\
> {.is-info}

(Android awaiting approval by Google)

### Fixed issues

* Fixed issues
* Fixed: Testnets chainTip and epochParams
* Fixed: Testnets explorer links

Eternl Update v.1.11.8

## v1.11.7

> Released 07.08.2023\
> {.is-info}

### Changes/Additions

1. No Connection was caused by the client device time setting being in the future. For older version, check your time settings first. This version includes a time sync with the backend to prevent local settings getting in the way of syncing.
2. In v1.11.0 we introduced sockets for syncing to reduce the overhead of constantly establishing connections to the backend. This is now rolled back to normal HTTP calls as sockets didn't work for ALL users.

### Fixed issues

* Fixed: Utxos with attached plutusData preventing getUtxos by DApps.

Eternl Update v.1.11.7

## v1.11.6

> Released 03.08.2023\
> {.is-info}

(Work in progress, just documenting changes)

Fixed issues\
Fixed: tx building null pointer in edge cases\
Fixed: tx building: trezor empty token bundle issue\
Fixed: milkomeda send token issue\
Fixed: Plutus Contract in tx details view\
Prevent auto-withdrawal, if a withdrawal is pending

Eternl Update v.1.11.6

## v1.11.5

> Released 03.08.2023\
> {.is-info}

(Work in progress, just documenting changes)

### Fixed issues

* Fixed: multi-sig on roundtable
* Fixed: collateral outputs wrong format for ledger/trezor
* Fixed: cip30 return only wallet owned witnesses
* Fixed: set isConfirmed in SignTxConfirm for import tx
* Fixed: redeemer inputList sorted canonically
* Fixed: false flag error of tx mismatch

Eternl Update v.1.11.5

## v1.11.4

> Released 02.08.2023\
> {.is-info}

### Changes

* Changes: optimized submitTx (cip30) to reflect account balances sooner.\
  (We encourage all dapps to (also) submit transactions through the cip30 endpoint, so Eternl can reflect pending transactions).

### Fixed issues

* Tested and fixed more dapp transaction using Ledger/Trezor.

Still investigating optimizations of the new socket based connections.

Eternl Update v.1.11.4

## v1.11.3

> Released 01.08.2023\
> {.is-info}

### Fixed issues

* Fixed: send to Byron addresses with Ledger/Trezor

Improved Asset handling (loading decimals on swap/details)

Eternl Update v.1.11.3

## v1.11.2

> Released 31.07.2023\
> {.is-info}

### Fixed issues

* Fixed: signData returning empty results
* Fixed: some account settings not being honord when importing or migrating

Eternl Update v.1.11.2

## v1.11.1

> Released 29.07.2023\
> {.is-info}

### Fixed issues

* Fixed: socket connection wss
* Fixed: Voting register button
* Fixed: Send to Byron addresses and Byron address display in tx history
* Fixed: Liquid transaction signing problem

Eternl Update v.1.11.1

## v1.11.0

> Released 29.07.2023\
> {.is-info}

Currently in review: Browser extension, iOS app, Android app

This overhaul was necessary to lay the foundation for Eternl v2.\
Now that this milestone is reached, we can focus on the new design of v2.

### Changes/Additions

Smart Chaining!\
Any transaction submitted through Eternl will now be considered when signing additional transactions, allowing for chaining of multiple transactions at the same time. Please note: This only works when they're not (only) submitted through a DApps own endpoint.

Connect everything!\
Eternl allows DApps to connect using CardanoConnect (CIP-45 - P2P) and WalletConnect!\
We invite all DApps to implement CardanoConnect to offer a decentralized connection solution on #Cardano.

Assets\
Eternl now has new logic for storing token data and fetching their details on-demand. We also added support for CIP-68 tokens!

Send UI\
This new Send page replaces the old TxBuilder, allowing you to send to multiple recipients. Resolving ADA Handles also got an overhaul, integrating it more seamlessly.

Transactions\
The details of transactions are now loaded on demand. Pending transactions have been merged into the transaction list to have everything going on in one place.

Address Book\
Before, we used to have wallet specific and a global address book. To make this feature more accessible and easier to use, it has now been merged into one app-wide address book, giving you easier access.

Settings\
Wallet and account settings have been split into their own sections, making what setting applies to an account more transparent. Some settings have been removed, e.g., pending transaction auto-removal, as this is now handled automatically.

A huge thank you goes out to the whole team. This milestone is paramount! With this out of the way, we will focus our efforts on the new design. Stay tuned!

Also:

* Removed locking wallets individually. We will add an app PIN code to v2 though.
* New settings: Transaction History Sync. Enable it to be able to export CSV and use advanced filtering on the Tx History page.
* Removed ADAHandle allowlist/blocklist (use address book instead)

### Known issues

* Clicking Register on the Voting page does not open a transaction to sign

Eternl Update v.1.11.0

## v1.10.10

> Released 07.06.2023\
> {.is-info}

### Bugfixes

* Fixed ADA Handle resolution not allowing to send transaction.
* Fixed Transaction export button alignment

Eternl Update v.1.10.10

## v1.10.9

> Released 07.06.2023\
> {.is-info}

### Bugfixes

* Fixed slippage settings buttons in Safari
* Fixed signData address in protected header

### Known issues

Entering an ADA Handle on the Send page will not enable the Next button.\
Workaround: copy the resolved address into the input field, hit next.

Eternl Update v.1.10.9

## v1.10.8

> Released 06.06.2023\
> {.is-info}

### Changes/Additions

* Added voting center back to allow registrations for the special voting event.
* Added hardware wallet deviceId for newly paired devices (checks for correct connected HW)
* Merged swap page and open orders page. (note: only cancel swaps made in Eternl using the Eternl open orders list to auto-retrieve the frontend fee)
* Added sync time for manual syncs
* Moved wallet identifier from header to summary page

### Bugfixes

* Fixed new address book entry modal on send page
* Fixed hardware wallet certificate edge case
* Fixed reset of collateral transaction

Eternl Update v.1.10.8

## v1.10.7

> Released 17.03.2023\
> {.is-info}

### Changes/Additions:

* Added voting center back to allow registrations for the special voting event.
* Added hardware wallet deviceId for newly paired devices (checks for correct connected HW)
* Merged swap page and open orders page. (note: only cancel swaps made in Eternl using the Eternl open orders list to auto-retrieve the frontend fee)
* Added sync time for manual syncs
* Moved wallet identifier from header to summary page

### Bugfixes

* Fixed new address book entry modal on send page
* Fixed hardware wallet certificate edge case
* Fixed reset of collateral transaction

Eternl Update v.1.10.7

***

## v1.10.6

> Released 27.02.2023\
> {.is-info}

### Changes/Additions

* Removed ccvault namespace for cip30 api
* Further optimized backend communication

### Links

Eternl Update v.1.10.6

***

## v1.10.5

> Released 26.02.2023\
> {.is-info}

### Changes/Additions

* This release prepares for communication optimisations with the backend.
* New modal component

### Bugfixes:

* Fixed token name in details modal header

### Links

Eternl Update v.1.10.5

***

## v1.10.4

> Released 17.02.2023\
> {.is-info}

### Bugfixes

* Fixed ADA Handle address input

### Links

Eternl Update v.1.10.4

***

## v1.10.3

> Released 16.02.2023\
> {.is-info}

### Changes/Additions:

* Account limit is still 24, but you can now enter any valid account index.
* Account index 0 is now optional (account can be deleted)
* Updated Ledger lib to v6.0.0
* Updated Trezor lib to v9.0.6
* Announcements are now pulled from wiki entries to make it easier to add news.

### Bugfixes:

* Fixed Trezor signing in dapp mode

### Links

Eternl Update v.1.10.3

***

## v1.10.2

> Released 25.01.2023\
> {.is-info}

### Changes/Additions

* Added option to select a DEX / pool even on the instant Swap page
* Added option to additionally filter transactions by time of day
* Added option to change the spending password using your recovery seed phrase
* Changed token name parser to TextDecoder
* Hiding Catalyst Voting Center until the Fund 10 update
* Moved wallet sync button to the header
* Moved balance visibility button to the header
* Changed min swappable value to 1 for non-divisible tokens
* Removed Trezor smart contract warning

### Links

Eternl Update v.1.10.2

***

## v1.10.1

> Released 02.01.2023\
> {.is-info}

### Bugfixes

* Fixed switch of input field focus on swap page in Safari
* Fixed some edge cases with swap order cancellation
* Fixed \_ctx.t is not a function error when signing tx that use up locked UTxOs
* Fixed Limit Orders for IWS
* Fixed remove token on send page
* Fixed token collection pagination reset on add/remove

### Links

Eternl Update v.1.10.1

***

## v1.10.0

> Released 31.12.2022\
> {.is-info}

### Important

* **In-wallet Swap:** Exchange tokens right in your wallet (in collaboration with MuesliSwap)
* **Changed:** “Send All” now sends all tokens, rewards, collateral and locked UTxOs

### Changes/Additions

* Added Small NFT icon cache to speed up token list loading
* Added explorer link option: adastat.net
* Added a warning for when a dapp tries to spend a locked utxo
* Added Wingriders price info for tokens
* Moved Staking Vault menu link to settings page
* Updated Trezor connect to v9.0.5
* Changed number formating to omit unnecessary decimals
* Changed dapp tx sign page to be in line with internal sign page
* Swapped button order on TxBuilder to prevent input losses
* Changed all replaceAll occurances to replace + regex (old os support)

### Bugfixes

* Eternl will not be injected into miro(.)com, no need to deactivate it anymore

### Links

Eternl Update v.1.10.0

***

## v1.9.10

> Released 06.12.2022\
> {.is-info}

### Bugfixes:

* Fixed Ledger & Trezor transactions parsing (tx hash mismatch error)

### Links

Eternl Update v.1.9.10

***

## v1.9.9

> Released 04.12.2022\
> {.is-info}

### Changes/Additions:

* Changed ‘Pair’ to ‘Hardware Wallet’ on Add Wallet
* Optimized transaction preview loading

### Bugfixes:

* Fixed Ledger + Trezor Plutus transactions
* Fixed TxBuilder adds multiple Tx after clicking Build Tx
* Fixed TxBuilder auto-submit disabled
* Fixed missing space on Receive page
* Fixed missing label on Account List

### Links

Eternl Update v.1.9.9

***

## v1.9.8

> Released 27.11.2022\
> {.is-info}

### Important

* **iOS 16 introduced Safari changes which lead to a complete app reload while zooming. Users of iOS >=16 should update to at least iOS 16.1.1 to reduce the amount of app reloads while zooming.**

### Changes/Additions:

* Added support for nftcdn.io (beta test) for faster image loading and less bandwidth usage
* Added support for importing transaction text files to sign and submit
* Changed Shareslake coin name to RUSD (from RED) to make it clear, that it is a stablecoin
* Changed Controlled stake: now displaying internal and external stake
* Added support for all three Trezor key derivations as they changed the default
* Added labels to the mobile wallet menu icons

### Bugfixes:

* Optimized token list filtering again, asset names now need a full match to prevent false positives
* Fixed address book overflow / scrollbar
* Fixed Plutus v2 parsing for Trezor and Ledger transactions

### Links

Eternl Update v.1.9.8

***

## v1.9.7

> Released 06.12.2022\
> {.is-info}

### Bugfixes:

* Fixed token list filtering
* Fixed token details metadata list
* Fixed ADA Handle resolved address explorer link

### Links

Eternl Update v.1.9.7

***

## v1.9.6

> Released 03.11.2022\
> {.is-info}

### Changes/Additions:

* Trezor: Upgraded to connect v9 and added Vasil support
* Ledger: Added WebHID back as a fallback when WebUSB is not available
* Added Arweave URL support for token details
* Optimized asset metadata loading
* Improved token list filtering
* Improved smart contract visualisation in tx details
* Switched to new PreProd network genesis files
* Switched to new PreView network genesis files
* Removed explorer links to AdaPools, added Cexplorer (Mainnet, Preprod, Preview)
* Removed explorer links to Cardanoscan Testnet, added Cardanoscan Preprod, Preview

### Bugfixes:

* Delegation transaction utxo management
* Visual issue with TxBuilder second output page
* Explorer links config is again available in the extension

### Links

Eternl Update v.1.9.6

***

## v1.9.5

> Released 27.09.2022\
> {.is-info}

### Changes/Additions:

* Ledger: The device will now disconnect once all requested operations are done.
* Use UTC time now persists after refresh.

### Bugfixes:

* Transaction shows as failed, but goes through anyway
* Ledger: USB connection issues.

### Links

Eternl Update v.1.9.5

***

## v1.9.4

> Released 27.09.2022\
> {.is-info}

### Changes/Additions:

* LedgerJS v5.1.0/Cardano app v5.0.0 support for Babbage features
* Removed Ledger Transport settings, made it a simpel USB/Bluetooth toggle
* signData shows a table of content for JSON payloads as well as the raw data
* Search on the token list is now more precise
* Disable Token Fragmentation and Collect UTxOs buttons while building transactions
* Removed visited DApp Browser entries, DB is now showing only available entries
* Removed Taptools charts for tokens, because of API changes
* Increased number of tokens in a category from 10 to 12
* CIP30: txCbor is now decoded to extract the txBody to get the correct txHash. CSL will currently not honor the incoming cbor.

### Bugfixes:

* Ledger: includeNetworkId bool set if needed
* Ledger: Catalyst voting registration: metadata with reward address instead of change address, which causes txHash missmatch
* Fixed URL input for DApp Browser on staging and beta
* Limit loading of contract labels to once
* Fixed JSON not parsable in metadata, because it’s a number only

### Links

Eternl Update v.1.9.4

***

## v1.9.3

> Released 16.09.2022\
> {.is-info}

### Bugfixes:

* Fixed: Error while selecting a different wallet/account for inter wallet transfers.
* Fixed: Display of account names for the inter wallet transfer selection.

### Links

Eternl Update v.1.9.3

***

## v1.9.2

> Released 15.09.2022\
> {.is-info}

### Important

* “Buy ADA” button that opens a fiat on-ramp (powered by guardarian.com, KYC mandatory)\*\*
* \*ne-click buttons for Token Fragmentation or Collecting UTxOs.

### Changes/Additions:

* Added: “Buy ADA” button that opens a fiat on-ramp (powered by guardarian.com, KYC mandatory)
* Added: “Token Fragmentation” button to TxBuilder, a one-click button to clean up UTxOs
* Added: “Collect UTxOs” button to TxBuilder: Have a wallet with 50.000 small UTxOs? Click this button to combine those all in one go. It’s magic.
* Added: account names (edit on Account > Account List)
* Added: special badges for well-known smart contracts\
  (powered by [https://github.com/Cardano-Fans/crfa-offchain-data-registry](https://github.com/Cardano-Fans/crfa-offchain-data-registry))
* Added: price chart for ADA (small chart icon in the top bar)
* Added: price chart for tokens available on DEXes (thanks to taptools.io)
* Added: public account key export now with xpub, acct\_vk, acct\_xvk prefixes
* Added: setting ‘manual sync’ to prevent automatic syncing (better performance for larger wallets)
* Added: Blockfrost token metadata for Preview and PreProd
* Added: QR code scanner for account key import
* Changed: DApp connection popup has more info.
* Changed: DApp Browser now has a separate ‘Mints’ section, as well as favorites.
* Changed: internal addresses can now be used for SAM custom addresses
* Changed: New wallets default to true for token fragmentation, advanced UTxO management, and collateral
* Changed: Removed deprecated Ledger transports, only webUSB and webBluetooth are available. (BT is only supported on desktop)

### Bugfixes:

* Fixed: token lists show on Guild and Shareslake, as well as PreProd and Preview
* Fixed: ADA price is now visible when the wallet balance is hidden
* Fixed: QR code scanner on the website.

### Links

Eternl Update v.1.9.2

***

## v1.9.1

> Released 24.08.2022\
> {.is-info}

### Bugfixes

* Fixed: minUTxO calculation
* Fixed: Next button is now disabled if no unsigned transaction could be built

### Links

Eternl Update v.1.9.1

***

## v1.9.0

> Released 22.08.2022\
> {.is-info}

### Important

* Staking Vault: New locks are disabled as SV will be phased out.

### Changes/Additions:

* Removed: Cardano Testnet (legacy)
* Added: Cardano Preprod network (Testnet, 5d epochs)
* Added: Cardano Preview network (Testnet, 2h epochs)
* Added: Notification for PWA updates
* Added: Simple UTF8 decoding of signData payload
* Updated: CSL/EMS (renamed to CMS (cardano-message-signing))

### Bugfixes:

* Fixed: auto-clear pending TXs from the UI

### Links

Eternl Update v.1.9.0

***

## v1.8.3

> Released 28.07.2022\
> {.is-info}

### Important:

Added PWA support to eternl.io

* Add Eternl to your home screen (mobile) or installed browser apps (desktop)

PWA is the most complete experience on mobile devices, especially on iOS.

### Changes/Additions:

* Token prices: In each detail overlay (average/floor) prices are pulled from dexes and marketplaces
* Transaction notes: Add local notes to any transaction, export wallet as json file to preserve the notes, also exported in CSV file.
* Pending Transactions: auto cleanup added to app settings/preferences.
* Custom submit endpoint is now available in all app versions, but endpoints need proper CORS headers set for the web app.
* Eternl now remembers the last active account of a wallet. Switching to another wallet and back will go back to the last active account of that wallet.

### Bugfixes:

* Fixed: white spaces in wallet/group names
* Fixed: Delegation certificate not resetting for new transactions
* Fixed: Deregistration page not going back to Settings (on cancel)
* Fixed: SAM custom address not being honored in inter wallet transfers
* Fixed: SAM custom address, not clearable using the (X) button
* Fixed: Reloading Eternl while on the wallet settings page
* Fixed: minor text issues
* Fixed: persistent data option removed from Android app (not available on Android)

### Links

Eternl Update v.1.8.3

***

## v1.8.2

> Released 20.07.2022\
> {.is-info}

### Bugfixes:

* Fixed: signData for DAppBrowser wasn't able to send response via postMessage

### Links

Eternl Update v.1.8.2

***

## v1.8.1

> Released 20.07.2022\
> {.is-info}

### “Babbage”

(Apps submitted, awaiting approval)

### Changes/Additions:

* Added support Babbage protocol changes: reference scripts, reference inputs, inline datum, collateral outputs, etc.
* Added ‘Tx Builder’ to Send page: Add multiple outputs, select specific inputs, custom metadata, and more.
* NFT/Token images are no longer cached in DB to reduce the amount of storage needed by the app – Added to preferences: Reset application cache (excluding wallets)
* Added to preferences: Reset application (deletes wallets)
* Added ‘Add all tokens on page’ button to send UI
* Updated ADAHandle support to reflect Verified Partner standards
* Added click on formatted numbers to copy to clipboard
* CSL updated to v11.0.0-rc6 – Added red color scheme for Shareslake

### Important:

* **Android app:** Set allowBackup to false to prevent wallet data syncing to the cloud.
* **iOS app:** We removed the DApp Browser from the app to be able to push an update to the App Store. We will keep fighting with Apple after this update went through.

### Bugfixes:

* Fixed some formatting bugs regarding amounts

### Links

Eternl Update v.1.8.1

***

## v1.7.8

> Released 14.06.2022\
> {.is-info}

### Fixes:

* Token decimals on list cards
* Trezor mint support

(Apple is still reviewing v.1.7.3)

### Links

Eternl Update v.1.7.8

***

## v1.7.7

> Released 13.06.2022\
> {.is-info}

### Highlights:

* Shareslake network: [https://www.shareslake.com/](https://www.shareslake.com/)
* Locked UTxOs: Excludes UTxOs from spending within Eternl
* Localization of numbers/dates: Set a preference for your locale

### Changes/Additions:

* Modal for switching between Networks (Mainnet, Testnet, Guild, Shareslake)
* Mint/Burn displayed transaction preview
* Improved Catalyst Voting registration: QR code now saved locally.
* ADA Handle: Sending to a handle Eternl now shows the NFT as well.
* Milkomeda: More warnings when sending to a Milkomeda address.
* Staking Vault: Added rewards/rewards paid badges to make it clearer that rewards have been paid.

### Fixes:

* undefined arguments from DApps

### Known issues:

* Format for date/time is in UTC instead of local time zone

(Apple is still reviewing v.1.7.3)

### Links

Eternl Update v.1.7.7

***

Eternl Update v.1.7.4Eternl Updates v.1.7.1 / v.1.7.2Eternl Update v.1.7.0
