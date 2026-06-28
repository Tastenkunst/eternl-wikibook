# Eternl v2.1.0: The Basic Update

Juni 2026
Dieses Release ist das Ergebnis von **fünf Monaten Arbeit** an der wallet-Erfahrung, der App-Leistung, den Governance-Tools und den Grundlagen, auf denen wir für zukünftige Entwicklungen aufbauen.

Es ist ein **grundlegendes Release**. Einige Änderungen sind sofort sichtbar, während andere unter der Haube stattfinden und die App **leichter, schneller und einfacher zu warten** machen.

![Eternl v2.1.0 Release](/assets/pictures/eternl_2.1_post_1280x512.jpg)

## Highlights

+ **Eternl Pro plans**, supporting advanced features and the sustainability of ongoing Eternl development.
+ **NEW Eternl Hub:** for pairing wallets and connecting dApps across devices.
+ **Global Search**, across wallets, accounts, assets, transactions, governance, and settings.
+ **Themes** Pro users can experience the first two new theme: Classic and Monochrome.
+ **Redesigned Send page** for more transaction options, multi-account funding, UTxO consolidation, and background transaction building.
+ **Expanded mobile hardware wallet support** with Bluetooth for Ledger and OneKey, in addition to the Keystone support already available.
+ **Governance and DRep workflows** for voting, proposals, metadata, references, and treasury donation transactions.
+ **Performance work** across startup, sync, restore, key derivation, transaction building, and app responsiveness.

## Eternl Pro and sustainability

This release introduces the first **Pro plans** inside Eternl. Pro is our way to make **advanced features** available to users and teams who need them while supporting the ongoing work required to keep Eternl **reliable, maintained, and independent.**

Pro features include **wallet-to-wallet Hub pairing, advanced search,** the **Bridges page, advanced governance tools,** and **seat management** for team and business plans. A mainnet Pro license also unlocks Pro on testnets.

Most everyday wallet functionality remains available as before. Pro is focused on features that are more advanced, resource-intensive, or business-oriented, and it helps fund **continued development, infrastructure, support, and security work.**

## Better tools for larger wallets

**Global Search** gives you one place to find wallets, accounts, assets, transactions, addresses, DReps, governance proposals, and settings. Search results include useful context, highlighted matches, and support for quoted phrases.

**Entities** help organize wallets into named profiles such as personal and business contexts. Each entity can remember its wallet list, groups, last-used account, and theme.

The **Send page** has also been redesigned. You can fund a transaction from multiple accounts, choose the change account, consolidate UTxOs, split or consolidate token UTxOs, withdraw rewards from multiple accounts, and build complex transactions while the app stays responsive.

## Hub, governance, bridges, and developer tools

**Eternl Hub** now makes it possible to pair Eternl instances across devices without moving keys off the device. Paired devices can support **remote signing**, and dApp connections use a clearer consent flow that shows what a dApp may access before you approve it.

**Governance work** is a major part of this release. The wallet now supports submitting pending votes in one transaction, creating on-chain governance action proposals, treasury donation transactions, improved DRep flows, proposal metadata rendering, reference document viewing, and a redesigned voting area.
For Pro users, the new **Bridges page** starts with USDCx Cardano to Ethereum support, including recipient validation, history, progress tracking, and recovery support for edge cases.

**Developer tools** have also been expanded with a draggable panel for address and credential conversion, asset inspection, UTxO exploration, transaction viewing, signing utilities, and related workflows.

## Performance and reliability work

Several important changes are less visible but should be felt during regular use. **Startup has been optimized** across many rounds of work, rarely used parts of the app are loaded later, and heavy tasks such as transaction building, key derivation, and search indexing have moved away from the main thread.

We also removed the legacy WASM Cardano Serialization Library from this path and replaced it with **Eternl's own TypeScript libraries.** This reduces weight, improves loading behavior, and gives us more control over the long-term maintenance of the wallet.

**Hardware wallet support**, transaction viewing, backup export and import, dApp connections, settings, staking, restore flows, and cache handling all received practical improvements.

<h2 style="font-size: 2.5rem;">Thank you!</h2>

Thank you for using Eternl and for supporting the work behind this release. Pro plans are an important step toward making that work sustainable while keeping Eternl moving forward.
