# Eternl v2.1.0.50 (Beta) release

Today (10.06.2026), we published the Eternl Beta extension v2.1.0.50 on the Chrome Web Store.

This is **NOT** the production extension yet. If you want to see for yourself and install Eternl Beta, make sure to disable the Eternl extension so they don't conflict when communicating with dapps.

I'm proud of the team and what we achieved with this release!

Many features now require a Pro plan. That’s our attempt to become self-sustainable.
For early testers, we created a 10% discount code, which will be valid until the 20th of June:

BETA_RELEASE_260610

---

## New Features

### Eternl Hub - connect your wallets across devices

- Pair Eternl instances across devices (browser, mobile) with a simple PIN - no keys ever leave your device.
- Sign on another device: when a paired device is online, a transaction can be signed remotely from the signing window.
- Connect dApps through the Hub, with a clear consent screen showing exactly what a dApp may access - grant or deny per connection, remembered for next time.
- Live connection status (offline / awaiting / connected) for every paired device and dApp, with reliable detection when the other device goes to background or closes.
- Up to 10 pairings; wallet-to-wallet pairing is a Pro feature. Resetting the app cleanly notifies and removes all pairings.

### Eternl Pro

- New Pro plans with an upgrade flow inside the app and a Pro badge wherever premium features appear.
- Pro features include wallet-to-wallet Hub pairing, advanced search, the Bridges page, and advanced governance tools.
- A mainnet Pro license also unlocks Pro on testnets.
- Seat management for team/business plans.
  
#### Global Search

- Search your entire wallet from one bar: wallets, accounts, assets, transactions, addresses, DReps, governance proposals - even settings, jumping straight to the right panel.
- Smart result details: why a transaction matched, highlighted terms, and quoted-phrase search.

#### #Entities - organize your wallets

- Group wallets into named profiles (e.g. "Personal", "Business").
- Wallet list, groups, and last-used account are remembered per entity; themes can differ per entity.
- Existing wallets are automatically placed into a default "Personal" entity.

#### Themes

- Select one of three themes: Classic, Standard, Monochrome.
- Each entity can set its own theme.
More to come...

#### Bridges - USDCx to Ethereum (Pro)

- New Bridges page with USDCx Cardano → Ethereum support.
- Guided bridge flow with recipient address validation and a history view showing progress until finality, plus a manual recovery option for edge cases.

#### Governance & DRep

- Submit all pending votes in a single transaction.
- Create and submit on-chain governance action proposals directly from the wallet.
- New treasury donation transaction type.
- Smarter reward withdrawals: if your DRep delegation is missing or inactive, the wallet can automatically add an abstain delegation (or the needed prerequisite transaction) so withdrawals never get blocked.
- Stake key registration without delegation as a standalone option.
- DRep re-registration prefills your previous metadata; redesigned Votes section with filtering; resizable proposal viewer.
- All-new voting flow, with drafts, metadata pinning and validation, sign as author or vote with no metadata, all-in-one.
- All-new Votes section as a DRep. See a compact list of your votes with filter and status.
- Improved metadata rendering for proposals, in-app reference documents view.

#### Redesigned Send page

- Select multiple accounts to fund a single transaction, and choose which account receives the change.
- Collect/consolidate UTxOs from all selected accounts in one go.
- Token fragmentation tools: consolidate or split token UTxOs.
- Withdraw rewards from all selected accounts in one transaction.
- Custom transaction TTL is back.
- Transactions are now built in the background - the app stays responsive even for complex builds.
- We removed WASM CSL and replaced it with our own CBOR library in TypeScript

#### Developer tools

- New draggable DevTools panel: address/credential converters, asset inspector, UTxO explorer, transaction viewer, and signing utilities and more

---

### Improvements

#### Hardware wallets

- Ledger Bluetooth on mobile.
- OneKey now uses WebUSB on desktop (no more OneKey Bridge) and Bluetooth on mobile.
- On-device address verification with clear success/error feedback.

#### Transaction viewer

- Draggable and resizable details window.
- New Raw, Script, and Certificates views; governance votes and treasury withdrawals displayed correctly.
- Attach custom notes/metadata to any transaction; nicer metadata display.
- Submit errors are shown directly in the viewer.

#### Wallet management & backup

- Drag-and-drop ordering of wallets and groups, preserved across backup export/import.
- Backups now include Entities; importing legacy v2.0.x backups is supported.

#### dApp connections (CIP-30)

- Unified consent screen for browser-extension and Hub dApp connections.
- More accurate UTxO reporting to dApps and various signing-flow fixes.

#### Settings

- Reorganized into logical sections, fully searchable.
- "Clear cache" now genuinely clears caches while keeping your settings intact.

#### Sync & stability

- First wallet sync no longer freezes the interface; sync progress is displayed more accurately.
- Wallet restore runs in the background - no more UI freeze during key derivation.

#### Staking

- Reward history visible from the start of staking; warnings for unmet pledge and oversaturated pools.
- Build delegation transactions on the send page, including DRep delegation in a single transaction.

#### General

- Draggable modals, can be attached left, right, bottom, detached.
- Price of day data on transactions are now accurate.

#### All-in-one Data Export / Import

- Wallets
- Application Settings
- Address Book
- Transaction Notes
- Notifications
- Entities
- Password protected

#### Other

- Mnemonic verification on password reset; selectable recovery-phrase length on restore.
- Eternl logo embedded in QR codes.
- ADA price chart with improved data source; chart hidden on test networks.
- Terms of Service update without requiring an app release.
- Improved language, number, and currency formatting.
- Reference-script UTxO auto-lock, can be unlocked (made spendable in the settings).

---

### Changes

- Action Cart removed - the Send button now goes directly to the redesigned Send page instead of the multi-step cart.
- Hub enabled by default - controlled by a settings toggle.
- Faster account discovery using the account stake key.
- Increased account limit per wallet from 30 to 100. (There you go Jenny...)
- Fixed deep-linking (CIP-0013, CIP-0099, CIP-0157, CIP-0158)

---

### Under the Hood

- Removed the legacy Cardano Serialization Library (CSL) - the heavy WASM library is fully replaced by Eternl's own lightweight libraries, making the app noticeably smaller and faster to load.
- 30+ rounds of startup optimizations: lazy-loading of rarely-used parts, smaller assets, faster boot.
- Heavy work (transaction building, key derivation, search indexing) moved off the main thread for a smoother UI.
- Modernized build tooling and Hub networking stack; hardened dependency supply chain.

---

### Availability

+ ![Cross or unavailable icon: not submitted](/assets/icons/IconCheckmarkCircle02.svg) not submitted - eternl.io
+ ![Check mark icon: available](/assets/icons/IconCheckmarkCircle02.svg) available - beta.eternl.io
+ ![Cross or unavailable icon: not submitted](/assets/icons/IconCheckmarkCircle02.svg) not submitted - Eternl Extension
+ ![Check mark icon: available](/assets/icons/IconCheckmarkCircle02.svg) available - Eternl Beta Extension
+ ![Cross or unavailable icon: not submitted](/assets/icons/IconCheckmarkCircle02.svg) not submitted - Android app
+ ![Cross or unavailable icon: not submitted](/assets/icons/IconCheckmarkCircle02.svg) not submitted - iOS app
  