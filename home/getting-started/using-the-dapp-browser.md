# Using the DApp Browser

The DApp Browser is a built-in, secure environment inside Eternl that lets you interact with Cardano dApps without leaving the wallet experience. The browser speaks CIP-30 directly, isolates the dApp in an iframe, and keeps your keys locked safely inside the wallet while the dApp requests only the permissions you allow.

Clicking the **DApp Browser** entry in the sidebar opens the interface shown below. The sidebar remains visible on desktop, giving you a clear path back to your wallets or other tools at any time.

![Eternl Dashboard](/gitbook-assets/pictures/v2_dashboard.png)

The landing view highlights a **Promoted** carousel for Eternl-verified partners above the fold before showing collections divided into the interface's built-in categories (DeFi, Social, Collectibles, Tools, Streaming, and more). Use the tabs and filters to jump straight to the section you care about, or scroll through curated lists that briefly describe each dApp and its focus.

![DApp Browser Interface](/gitbook-assets/pictures/v2_dapp_browser.png)

{% hint style="info" %}
The DApp Browser is a core feature available on both the Desktop Extension and the Mobile App (iOS/Android), so the same verified partners, categories, and navigation cues show up whether you are at your desk or on the go.
{% endhint %}

## Connecting your Wallet

When you open a dApp and tap **Connect wallet**, Eternl Guard steps in as a safety layer. The guard screen shows the URL, the CIP-30 permissions requested, and any automated transaction hooks the dApp wants to run. It also surfaces reputation signals for promoted partners and blocks unknown sites until you explicitly allow the connection. This lets you confirm every dApp session with a single tap while keeping the connection sandboxed until you trust the interaction.
