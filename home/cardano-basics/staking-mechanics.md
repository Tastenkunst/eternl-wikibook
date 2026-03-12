# How Staking Works

Cardano epochs (currently 5 days long) serve as the heartbeat of staking. Each epoch begins with a snapshot of the ledger so the network knows which stake keys are eligible to produce blocks and which stake pools to delegate to. Eternl keeps your payment and stake addresses separate: payment credentials control the UTxOs that hold ADA, while stake credentials point to your reward account and decide how your stake is assigned.

![Staking Overview](/gitbook-assets/pictures/staking_your_ada.webp)

When you delegate, Eternl sends a lightweight delegation certificate signed by your stake key. The snapshot records this certificate, and the new delegation takes effect in the next epoch (after one epoch of stability). Epochs also determine when rewards are calculated and distributed: the rewards from epoch N are paid out in epoch N+2, giving the system time to confirm the history.

If you switch pools, Eternl updates the stake key’s delegation certificate and the next snapshot will include the change, again with the two-epoch delay before new rewards flow in. This separation between payment and stake credentials keeps your spending keys independent from the staking mathematics, so you can spend ADA freely on payment addresses while your stake stays bonded to the pool you chose.
