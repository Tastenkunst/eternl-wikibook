# Understanding Cardano's eUTxO Model

Cardano keeps track of funds using the **extended unspent transaction output** model, usually called **eUTxO**. You do not need to manage its details to use a wallet, but understanding the basics can help explain change, transaction fees and why ADA accompanies other tokens.

## What Is a UTxO?

A transaction creates outputs. Each output has an address and a value, which can include ADA and other native tokens. An output that has not yet been spent is called an **unspent transaction output**, or **UTxO**.

A wallet shows a balance by adding up the relevant unspent outputs it can access. The balance may look like a single amount, but it can consist of several UTxOs, potentially spread across multiple addresses.

## Inputs, Outputs and Change

When you send funds, a transaction uses one or more existing UTxOs as **inputs** and creates new **outputs**. Each input UTxO is consumed in full. If its value is greater than the amount you are sending and the fee, the transaction normally creates a change output for the remainder.

For example, imagine a transaction uses one UTxO containing 10 ADA to send 6 ADA. If the fee were 0.2 ADA, the transaction could create an output of 6 ADA for the recipient and another of 3.8 ADA as change. The fee here is only an example; actual fees vary.

Your wallet normally selects inputs and creates change for you. It may use more than one input or create change containing native tokens as well as ADA.

## Native Tokens and Minimum ADA

Cardano native tokens are held in transaction outputs alongside ADA. An output needs a minimum amount of ADA, which depends on its contents and size. This applies to outputs holding tokens as well as outputs containing only ADA.

The ADA in an output is not a separate fee for every token. It remains in that output and can be used in a later transaction when the output is spent, subject to the requirements of the new outputs and the transaction fee. Your wallet may therefore show that some ADA is needed to hold tokens or create a transaction.

## UTxO and Account-Based Models

Bitcoin also uses a UTxO model: transactions consume previous outputs and create new ones. Cardano extends this approach with additional capabilities for scripts and data. By contrast, account-based blockchains keep track of balances and other state using accounts. These are different ways of organizing ledger state; neither removes the need to evaluate an application's security.

## Smart Contracts and Transactions

The **extended** part of eUTxO allows outputs to be associated with scripts and additional data. A script can specify conditions that must be met before an output can be spent. This allows decentralized applications to implement rules for actions such as exchanging tokens. The model gives developers a foundation for building applications that combine digital assets with programmable conditions.

Before submitting a transaction, a wallet can check whether the scripts it uses would validate against the chosen inputs. That does not guarantee the transaction will be accepted: for example, another transaction may consume an input first, or the transaction may expire before it is included in a block.

Independent transactions that use different UTxOs can, in principle, be validated in parallel. If several users try to spend the same UTxO, however, only one transaction can consume it. Application developers must account for this contention when designing a service, for example by distributing activity across multiple outputs.

Native tokens can be issued and transferred using Cardano's ledger rules without a separate smart contract for each token. Their presence on-chain does not guarantee their authenticity or value.

## Further Reading

- [Extended UTxO Model – Cardano Docs](https://docs.cardano.org/about-cardano/learn/eutxo-explainer)
- [Understanding Concurrency – Cardano Docs](https://docs.cardano.org/about-cardano/explore-more/concurrency)
- [Transaction Costs and Determinism – Cardano Docs](https://docs.cardano.org/about-cardano/learn/transaction-costs-determinism)
