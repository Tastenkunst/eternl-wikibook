# The eUTxO Model

Cardano is built on the Extended Unspent Transaction Output (eUTxO) model, which keeps ADA locked inside an ever-shifting set of outputs instead of a single account balance. Each time you send funds, Eternl chooses one or more UTxOs and creates new ones that split ADA between recipients and change addresses. Think of them as sealed recipe cards: you can only spend a UTxO if you present the key that matches the payment credential inside it. Every on-chain address you create in Eternl combines a payment credential with a stake credential, so your ADA can feed a UTxO while simultaneously pointing to a stake key that collects rewards.

![eUTxO Components](/gitbook-assets/pictures/EUTxO_Components.png)

Every transaction stamps the UTxO with metadata about the payment address (which mixes a payment script or multisig key) and the stake credential that ties it to your staking reward destination. The Eternl viewer stays in the dark theme so these diagrams stand out, blending the azure highlights with the deep background used throughout the docs.

## Estimated Locked vs Estimated Available

Eternl surfaces two helpful balance buckets when you open a wallet:

* **Estimated Locked** groups ADA that will remain in UTxOs until a future transaction, such as change outputs, pending delegation fees, or funds held for smart contract deadlines. It also includes the mandatory minimum ADA that must stay in certain UTxOs to keep them valid.
* **Estimated Available** shows what you could spend or delegate today, factoring in the selected UTxOs, the current fee estimate, and any minimum-ADA constraints. It represents the portion of your balance that can leave the current UTxO set without violating the ledger rules.

Because the eUTxO set constantly changes with every new block, these estimates refresh after each transaction or epoch boundary, helping you understand how much ADA remains purely available for new outputs.
