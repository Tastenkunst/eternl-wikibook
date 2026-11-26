# Why My Wallets Disappeared?

It can be alarming to open Eternl and find your wallet list empty. Because Eternl is a **non-custodial** wallet, your data is stored locally in your browser's database (IndexedDB) rather than on a central server. If this local data is deleted by your system or browser, the wallet "disappears" from the interface.

:::info
**Your funds are safe.** Your assets live on the Cardano blockchain, not in the app. You can always regain access using your 12-, 15-, or 24-word recovery phrase, your hardware device, or a previously exported backup file.
:::

## Common Causes

### 1. Full Disk or Storage Constraints

If your device's main drive (e.g., **C:/ drive**) is nearly full, your operating system may automatically trigger a cleanup of "unnecessary" data. Browser cache and local storage are often the first targets for these automated deletions to ensure the OS continues to run smoothly.

### 2. Browser "Garbage" Collection

Modern browsers (Chrome, Brave, Edge) periodically perform maintenance to optimize performance. This routine cleanup can occasionally wipe the **IndexedDB** storage where Eternl keeps your wallet metadata and preferences.

### 3. Third-party Cleanup Tools

Software such as **CCleaner** or system "Optimize" apps on mobile devices often identify browser extension data as junk. If these programs are set to run automatically, they may delete your Eternl configuration.

---

### Why Is "Persistent Data" Gone?

In older versions of Eternl, a **Persistent Data** toggle was available in the settings. This option requested that the browser exclude Eternl from automatic cleanup.

**This option was removed because:**

* **Reliability:** The browser API (`navigator.storage.persist()`) did not offer a 100% guarantee; the OS could still override it if disk space became critical.
* **Redundancy:** Modern browsers now handle storage persistence more intelligently based on site usage, making a manual toggle less effective.
* **Focus on Backups:** The development focus has shifted toward robust **JSON backups**, which are a much more reliable way to ensure you never lose your configuration.

---

## The Best Protection: JSON Backups

Instead of relying on browser persistence, you should regularly export an **Eternl Wallet Backup**.

* **Encryption:** These backups are exported as `.json` files and are **encrypted with your spending password**. Without this password, the file cannot be used to access your accounts.
* **Convenience:** Importing a `.json` file restores your wallet name, account structure, and custom settings — details that a seed phrase alone cannot recover.

:::info
Note: A backup file is a convenience tool; it does not replace your 12-, 15-, or 24-word recovery phrase. Always keep your physical seed phrase written down in a secure, offline location.
:::

## How to Restore Your Wallets

If your wallets have disappeared and you have your backup file ready, follow these exact steps to restore them:

1. Open the Eternl interface.
2. Click the **Add wallet** button at the bottom of the wallet list on the main screen.
3. Select **More**.
4. Click on **Import Backup**.
5. Upload your previously exported `.json` file and enter the **spending password** you used when the file was created.

---

## Troubleshooting

### I restored my wallet, but it shows a 0 balance.

This usually happens if you restored a different account index or used the wrong recovery phrase. If you are restoring manually (without a backup file), make sure you select the seed phrase option that matches your recovery phrase.

### Can I import my backup into a different browser?

Yes. Since the \`.json\` file is encrypted and contains your configuration, you can use it to "sync" your setup across different browsers or devices manually.

### What if I don't have a backup or a seed phrase?

If you have lost both your recovery phrase and your encrypted backup file, and the local data has been cleared, there is no way to recover the wallet. **Neither the Eternl team nor anyone else can reset your password or recover your keys.**
