# Governance & Catalyst

Cardano governance concerns how decisions about the network are made. It includes on-chain governance, community discussion and separate initiatives such as Project Catalyst. Together, they give the community ways to help shape the network and support ideas for its future. These processes are related, but they do not all work in the same way.

## On-Chain Governance

On-chain governance is a major milestone of Cardano's **Voltaire** development vision. The Chang and Plomin upgrades introduced the governance system described in CIP-1694, with Plomin activating the full set of governance actions and the DRep role in 2025. The community can now make decisions about the network through a process recorded on the blockchain.

Proposals submitted through this system are called **governance actions**. They can concern matters such as protocol parameter changes, network upgrades, treasury withdrawals, changes to the Constitution or the Constitutional Committee, and motions of no confidence in the committee. **Info actions** allow the community to share information or signal opinions without enacting a protocol change or treasury withdrawal.

Depending on the type of action, decisions involve different combinations of **delegated representatives (DReps)**, stake pool operators and the Constitutional Committee. The committee checks actions against the Cardano Constitution; stake pool operators vote on certain types of actions. Not every group votes on every decision.

## How to Participate

ADA holders have several ways to take part:

- **Delegate to a DRep:** Choose a representative who votes on governance actions on your behalf. You can look at a DRep's profile, positions and voting history to help you choose.
- **Become a DRep:** Anyone can register as a representative and vote on governance actions. A DRep's voting power depends on the ADA delegated to them. Registration requires a deposit and a transaction fee.
- **Choose a built-in option:** Instead of selecting a DRep, you can choose **Always Abstain** or **Always No Confidence**. Always Abstain keeps the delegated voting power out of the vote count. Always No Confidence counts it against governance actions, except motions of no confidence in the Constitutional Committee.
- **Discuss or propose ideas:** You can follow discussions, share feedback and submit a governance action. Submitting an on-chain action requires a deposit and a transaction fee.

Voting delegation is separate from staking delegation: you can choose a DRep independently of the stake pool to which you delegate.

Delegating voting power does not transfer or lock your ADA. You can change your delegation at any time. You should regularly review your DRep's activity and voting decisions and change your delegation if they no longer represent your views. DRep profiles and voting histories are available on tools such as [DRepTalk](https://dreptalk.com/) and blockchain explorers. Voting power is weighted by ADA; it is not a one-person-one-vote system.

If a DRep does not vote or update their registration for the configured activity period, they become **inactive**, and the ADA delegated to them no longer counts toward governance votes. The current period is 20 epochs, or at least 100 days; epochs without open governance actions do not count toward it. A DRep can become active again by voting or updating their registration.

Under the current governance rules, a voting delegation is also required to withdraw staking rewards from a typical wallet account. Rewards can still accrue before they are withdrawn. See [How Staking Works](/crypto-and-cardano-basics/cardano-basics/how-staking-works.md) for more about staking.

## How a Governance Action Proceeds

A governance action generally follows these stages:

1. **Discussion:** An idea can be developed and discussed with the community before it is submitted on-chain. This helps participants review its purpose and implications.
2. **Submission:** The proposer submits the governance action in a transaction. The action then becomes visible on-chain and remains open for a limited period.
3. **Voting:** The governance bodies relevant to that type of action review it and cast their votes. DReps represent the voting power delegated to them; stake pool operators and the Constitutional Committee vote when their participation is required.
4. **Ratification and enactment:** The protocol checks whether the action meets the applicable requirements. If it is ratified, it can be enacted at a later epoch boundary. An action that does not meet the requirements before it expires is not enacted.

The details and required thresholds depend on the action. You can explore actions and discussions using tools such as [DRepTalk](https://dreptalk.com/); more resources are listed in [Cardano Ecosystem Resources](/crypto-and-cardano-basics/cardano-ecosystem-resources.md).

## Organizations and Community Participation

The Cardano Foundation, Input Output and EMURGO played important roles in Cardano's creation and continue to contribute to the ecosystem through work such as research, software development, infrastructure and adoption. Intersect is a member-based organization that helps coordinate development and maintenance and supports governance processes.

These organizations are part of a broader community of contributors. They can help develop ideas and participate in governance, but no single organization controls on-chain governance or can unilaterally change the protocol. Discussion, research and development also take place outside the on-chain voting process.

## The Treasury

Cardano has a treasury that can fund ecosystem and network initiatives. A portion of the funds available for epoch rewards is directed to the treasury, and treasury withdrawals are subject to the applicable governance process. Governance actions can cover more than treasury spending, including changes to protocol parameters and other decisions defined by the governance rules.

## Project Catalyst

[Project Catalyst](https://projectcatalyst.io/) is a community funding initiative. It runs funding rounds in which people can submit proposals and eligible community members can vote on them. Funded proposals can cover a wide range of projects, including tools, education and community initiatives. By connecting ideas with community review and funding, Catalyst helps people contribute to the growth of the ecosystem.

Funding rounds can include proposal submission, community review, voting and reporting by funded projects. Their specific rules can change between rounds. The [Project Catalyst funds overview](https://projectcatalyst.io/funds) provides information about earlier rounds.

Catalyst has its own processes and requirements. A vote in a Catalyst funding round is separate from delegating to a DRep or voting on an on-chain governance action. Check the current Catalyst documentation for the rules and dates of a particular round.

## Cardano Improvement Proposals

[Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) document proposed standards, processes and ideas for the Cardano ecosystem. A CIP is not automatically an approved on-chain governance action: CIPs have their own review and discussion process.

## Further Reading

- [Cardano Governance](https://cardano.org/governance/)
- [Cardano Governance Overview](https://docs.cardano.org/about-cardano/governance-overview)
- [Governance Actions and Their Lifecycle](https://developers.cardano.org/docs/governance/cardano-governance/governance-actions/)
- [The Plomin Upgrade](https://docs.cardano.org/about-cardano/evolution/upgrades/plomin)
- [Project Catalyst](https://projectcatalyst.io/)
