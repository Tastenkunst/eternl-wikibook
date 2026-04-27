# MonsterSwap Issues

MonsterSwap is a high-performance DEX aggregator integrated into Eternl. It scans multiple protocols and other aggregators (like DexHunter, SteelSwap, or Minswap) to find the best possible prices and liquidity for your trades across the Cardano ecosystem.

Since MonsterSwap acts as a gateway to these decentralized protocols, issues often arise from the underlying smart contracts or network conditions rather than the Eternl interface itself.

### Swap is "Pending" for a long time
* **Problem:** You signed the transaction, but the tokens haven't arrived in your wallet.
* **Cause:** Most swaps are processed by "Batchers" (off-chain agents of the respective DEX). If the network is busy or the DEX is under high load, your request is queued.
* **Solution:** Check your transaction on a block explorer like [Cardanoscan](https://cardanoscan.io). If the status is "Confirmed," Eternl has successfully delivered your order to the network. At this point, the execution depends entirely on the protocol's batching system.

### Order not filled / Price not met
* **Problem:** Your ADA/Tokens are "locked" in an order and the swap doesn't complete.
* **Cause:** This happens if the market price moves away from your target price before the swap can be executed.
* **Solution:** You can view your active swaps in the **"Orders"** tab within MonsterSwap. If you no longer wish to wait, you can cancel an open order there to reclaim your funds.
* **Note:** Canceling an order is a blockchain transaction and requires a small standard network fee (Transaction Fee).

### Slippage & Price Impact
* **Problem:** The transaction fails with an error regarding "Slippage" or "Price Impact."
* **Cause:** To protect you from losing value during volatile price swings, the swap will automatically cancel if the price changes more than your allowed percentage.
* **Solution:** You can adjust your **Slippage Tolerance** in the MonsterSwap settings. Increasing it slightly can help transactions succeed during high volatility, but please be aware that you might receive fewer tokens.

### Getting further Support
If your transaction is confirmed on the blockchain but your swap is taking longer than expected, we recommend checking the community channels (Discord or Telegram) of the involved protocols (e.g., DexHunter, Minswap, or WingRiders) first. Their teams can provide the most direct information about their current batching status and smart contract queues.

If you have technical questions regarding the MonsterSwap interface itself or cannot find a solution through the DEX support, you can of course also open a ticket in the Eternl Discord. Please provide your transaction ID so we can assist you more efficiently.
