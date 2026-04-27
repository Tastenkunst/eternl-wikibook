# DApp Connection Issues

If a website (DEX, Marketplace) is unable to connect to your Eternl wallet or shows the wrong balance, please check these common causes:

### Wrong Account visible to DApp
* **Problem:** The DApp shows a balance of 0 or connects to the wrong account, even if you switch accounts in Eternl.
* **Cause:** By default, Eternl connects with your currently active account. However, if a "Forced DApp Account" is set, Eternl will always use that specific account regardless of your current selection.
* **Solution:** 
    * Look for a **"Forced DApp Account"** hint next to an account name in your wallet list.
    * To change or deactivate it: Click the **context-menu (three dots)** of the account and select **"Disable Forced DApp Account"** or **"Set as Forced DApp Account"**.
    * If no account is forced, simply ensure the account you want to use is the one currently selected (active) in Eternl.

### Extension Conflicts
* **Problem:** The website doesn't "see" Eternl or tries to connect to another wallet extension (e.g., Nami, Lace).
* **Cause:** Browsers often struggle when multiple Cardano extensions try to inject themselves into the same website at once.
* **Solution:** The most reliable way is to **temporarily disable other Cardano wallet extensions** in your browser's extension settings while you are using Eternl.

### Connection Permissions (Allowlist)
* **Problem:** You clicked "Connect" on a website, but no permission pop-up appears.
* **Solution:** 
    * Go to **Settings > App Settings > DApp Allowlist**.
    * If the site is listed there but not working, delete it from the list by clicking the trash icon.
    * Refresh the DApp website and reconnect to trigger a fresh permission prompt.
