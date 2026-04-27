# Error Submitting a Transaction

If your transaction was created and signed successfully but fails at the final step of sending it to the network, please check the following:

### Custom Submit Endpoint
* **Problem:** The transaction cannot be sent, or you receive a network-related error message immediately after signing.
* **Cause:** You have enabled a "Custom Submit Endpoint" in your settings, and this server is currently offline, unreachable, or not functioning correctly.
* **Solution:** 
    * Go to **Settings > App Settings > Custom Submit Endpoint** and check if a custom submit endpoint is active.
    * Try disabling the custom endpoint to use Eternl's default submission service.
    * If you must use a custom endpoint, verify that the URL is correct and the service is online.

### Internet Connection & Firewall
* **Problem:** General timeout or "failed to fetch" errors.
* **Solution:** 
    * Ensure your internet connection is stable.
    * If you are using a VPN or a restrictive corporate firewall, it might block the connection to the Cardano nodes. Try switching your connection to see if the issue persists.

### Network Congestion
* **Problem:** The transaction is rejected with a "Mempool full" or similar message.
* **Cause:** Occasionally, the Cardano network experiences extremely high traffic (e.g., during major NFT drops or DEX launches).
* **Solution:** This is a temporary network state. Usually, waiting a few minutes and trying again solves the issue.
