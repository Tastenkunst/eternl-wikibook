# Cardano roadmap overview - A journey towards a decentralized future

Cardano, a third-generation blockchain platform, was launched in 2017. Cardano's development roadmap consists of multiple eras, each with distinct goals and achievements. These eras include Byron, Shelley, Goguen, Basho, and Voltaire, focusing sequentially on laying the foundational network, decentralization, smart contracts implementation, scalability improvements, and finally, self-sustainability through governance.

## Byron Era: The Foundation (2017-2019)

The Byron era marked the debut of Cardano, establishing the initial infrastructure and creating a community. This phase introduced ADA, the native cryptocurrency named after Ada Lovelace, and implemented the Ouroboros protocol. Ouroboros is the first scientifically proven secure consensus protocol.
Significant developments during this era included the launch of the Daedalus and Yoroi wallets. Those 2 already outlined the future development of Cardano wallets. Daedalus is a desktop full node wallet. In order to function it needs to download a snapshot of the blockchain which can take quite some time but also enables your computer to serve as a node in the Cardano network. Yoroi on the other hand is a light wallet - it only reads from the blockchain and does not act as its own node, therefore making it easier and faster to use. Continuing down the road lots of other wallet projects emerged all aiming for the light wallet path.
Also the Cardano Block Explorer was introduced enabling users to gather information about the latest transactions. One can search for addresses, transactions, epochs, and slots on the Cardano network.
In order for developers to efficiently test their products the byron testnet was established as a mean to not congest the blockchain with test data.

## Shelley Era: Decentralization (2019-2020)

Following Byron, the Shelley era focused on optimizing network decentralization and increasing the number of network nodes operated by the community rather than a centralized authority. In contrast to Byron there is not a single point in time when Shelley was released but rather a set of features that were activated subsequently to allow for a seamless transition without interruption of services. This era aimed to make Cardano 50-100 times more decentralized than other large blockchain networks. So far the network was federated but Shelley aims to give control over the nodes to the community.
Since not every community member is willing and/or has the technical abilities to run a full node themselves the delegation mechanism was established. By delegating your ADA to a pool operator you earn rewards and delegate.
This was achieved by the introduction of stake pools. ADA holders can delegate their ADA to a stake pool in order to gain rewards. The stake pools themselves produce the blocks of the blockchain and verify the transactions. Everybody with the required technical knowledge can set up a stake pool and therefore be part of the verification process. ADA holders express their trust in the operator and the stake pool by delegating their ADA.Cardano aims to reach an equilibrium at around a 1000 stake pools, which is far more than other blockchains where in some cases only about 10 mining pools control the whole network. On top of that the energy consumption of the whole network is only a fraction of other proof-of-work blockchains.
Also an interesting approach for the introduction of stake pools and the verification of the underlying hypothesis from game theory was chosen. Stake pools were first introduced on the testnet in order to verify flawless operation. But while the stake pools only ran on testnet they still produced real ADA rewards incentivizing users to extensively test this feature.  
Another modification of the Shelley era is the update of the Ouroboros protocol called Ouroboros Praos. It adds the support for stake pools and includes mathematically proven mechanisms against adaptive adversaries to ensure network resilience. Which basically means that as long as the majority of stake pools consist of “good” players, the network is robust against any mischiveous adversaries.

## Goguen Era: Smart Contracts (2020-2021)

A little late to the party Cardano introduced smart contracts a while after Ethereum. Smart Contracts offer complex financial transactions without a central instance like a bank. Therefore they are the foundation for the whole world of decentralized applications (DApps). The smart contract platform that was introduced in the Goguen era is called Plutus. These contracts are written in Haskell. Also the same codebase can be used on and off-chain which is a notable difference to other blockchains which require different languages for those 2 use cases.
Alongside Plutus which requires extensive technical knowledge Marlowe was released. It offers OpenSource tools which allow the creation of complex smart contracts without having to write Haskell code. In order to promote SC creation and usage on Cardano udemy courses were created explaining Plutus and Marlowe in detail.
Notably the Cardano core was updated by Goguen as well. It now allows for natively supported tokens via a multi currency ledger. With this update it is possible to create fungible tokens as well as non-fungible-tokens, opening the world of NFTs for Cardano users.

## Basho Era: Scaling (2021-Present)

We are now approaching the current state of blockchain which is the Basho era. It is focused on improving the scalability and interoperability of Cardano. One of the primary components of Basho is the introduction of sidechains, which are new blockchains that are interoperable with the main Cardano chain and can off-load work to increase capacity.

## Voltaire Era: Governance (Future Era)

Voltaire is designed to give the full control over the development of the blockchain back to the people. It will add voting and treasury systems, enabling network participants to use their stakes to vote on key protocol updates and developments. This era aims to make Cardano a self-sustaining network that is completely decentralized and no longer under the control of any single authority.
This means IOHK will no longer be managing Cardanos development.

### Voting System

Allows stakeholders to influence the future development of the network through a democratic process.

### Treasury System

Collects a fraction of transaction fees to fund network development and community initiatives.

---

Cardano's roadmap is a strategic plan aimed at creating a robust, decentralized platform that addresses the needs of users and developers through advanced features and an emphasis on security and sustainability. Each era builds on the last, progressively enhancing the capabilities of the network to support a wide range of applications and services in a decentralized and efficient manner. With its research-driven approach and pioneering technologies, Cardano is set to be a leading player in the blockchain space. (IOHK, 2024, May 2nd)

### References

IOHK. (n.d.). Cardano Roadmap. Cardano Roadmap. Retrieved May 2nd, 2024, from https://roadmap.cardano.org/
