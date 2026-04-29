# Security Best Practices and Common Mistakes

Protecting your cryptocurrency assets begins with understanding how to properly handle and store your credentials. In a decentralized system, you act as your own bank: because transactions are irreversible and cannot be undone by any authority, the safety of your funds depends entirely on your security practices. This guide combines essential principles with specific tips for Eternl Wallet to help you avoid both technical breaches and human error.

## The Golden Rule: Your Seed Phrase

A seed phrase (usually 12, 15, or 24 words) is the master key to your wallet. It contains all the data required to recover and control your funds. If you lose access to your device or forget your password, this phrase is your only way back in.

### Never Store Your Seed Phrase Digitally

Any digital record can be breached, leaked, or intercepted. Avoid the following:

* **Screenshots or Photos:** Storing images on phones exposes them to malware, cloud service breaches, and unauthorized physical access.

* **Cloud Storage:** Do not use Google Drive, iCloud, or Dropbox.

* **Communication Apps:** Avoid email drafts, note-taking apps, or messaging services.

---

::: warning
Safer Alternative: Write the seed phrase **on a physical medium** and store it securely offline.
:::

### Best Practices for Physical Storage

Since your seed phrase must never touch a digital environment, its physical record is the foundation of your security. To ensure your backup remains durable and protected from being damaged, misplaced, accidentally discarded, or accessed by unauthorized persons, follow these principles:

* **Offline Storage:** Store your phrase on non-internet-connected media to remain immune to hacking and malware.

* **Physical Writing:** Write it on paper, but be aware that ink can fade or become unreadable over time.

* **Metal Backups:** For long-term security, use stainless steel plates or "cryptosteel." These are resistant to fire, water, and corrosion.

* **Redundancy:** Maintain multiple copies in different secure locations (e.g., a safe or locked drawer) so that a single incident like a fire or theft does not destroy your only access.

---

:::warning
Regardless of the wallet type, safeguarding the **seed phrase** is essential, as losing it can permanently prevent access to your assets. Always store the seed phrase securely offline to protect from digital and physical threats.
:::

## Using Wallets Securely

### Hot Wallets vs. Cold Wallets 

| Feature      | Hot Wallet<br>(e.g. Eternl Mobile)  |      Cold Wallet<br>(Hardware Wallet)      |
|:-------------|:-----------------------------------:|:------------------------------------------:|
| Connectivity |     Connected to the internet.      |              Always offline.               |
| Security     | Vulnerable to online hacks/malware. | Highest security; keys never leave device. |
| Convenience  |     Fast for frequent trading.      |      Less convenient for quick moves.      |
| Cost         |            Usually free.            |       Requires purchasing hardware.        |

### Using Eternl with Hardware Wallets

For maximum security, combine Eternl with hardware wallets like Ledger, Trezor, or Keystone.
Eternl v2 currently supports these integrations, with more hardware wallet providers planned for future updates to ensure maximum flexibility.

Eternl ensures master keys are encrypted with a spending password and stored locally.
When paired with hardware, your private keys remain offline, and you must physically approve every transaction on the device.

::: info
Note: Investing in a hardware wallet is generally advisable once the value of your cryptocurrency exceeds the cost of the device itself.
:::

### Strong Spending Passwords

If you use a hot wallet, set a strong, unique spending password. This password is required to authorize transactions, though it remains more vulnerable to digital threats than a hardware wallet.

::: warning
Be aware: Passwords remain vulnerable to digital threats.
:::

## Device & Software Security

### Defend Against Malware

Malware and keyloggers can intercept your spending passwords or monitor your screen.

Use reputable antivirus software.

Keep your operating system, browser, and Eternl software up to date.

Avoid clicking suspicious links or popups.

### Two-Factor Authentication (2FA)

Always enable 2FA on your exchange accounts and related online services. This requires a second form of verification (like a code from an authenticator app) in addition to your password.

### Avoid Keeping Funds on Exchanges

"Not your keys, not your crypto." Exchanges (like FTX or Mt. Gox) can be hacked or face liquidity crises. Use personal wallets for long-term storage to maintain full control of your assets.

### Verify Contacts and Connections

Phishing: Be wary of anyone contacting you on social media. No legitimate company or employee will ever ask for your seed phrase.

VPN: Use a reliable Virtual Private Network (VPN) to hide your online activity, especially on public Wi-Fi, but ensure the provider does not keep logs.

## Transaction Security & Human Error
The decentralized nature of blockchain means you act as your own bank. Every action is final, and there is no safety net for mistakes.

* **Irreversibility:** Once a transaction is submitted to the blockchain, it cannot be canceled, reversed, or "clawed back." No central authority or support team can undo a transfer sent to the wrong address or a malicious actor.

* **Double-Check Everything:** Always verify the recipient's address character by character. Malicious software can sometimes swap addresses in your clipboard (Clipboard Hijacking).

* **Test Transactions:** When sending large amounts, consider sending a small "test" amount first to ensure the destination is correct and the funds arrive as expected.

---

::: info
Vigilance is key. Simple human errors and minor oversights are often more costly than sophisticated cyberattacks. Always double-check your practices and stay informed through official tutorials and guides.
:::
