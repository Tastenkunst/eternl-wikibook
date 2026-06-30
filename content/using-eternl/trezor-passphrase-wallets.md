---
disableH2Collapse: true
---

# Trezor Passphrase Wallets in Trezor Suite

## Abstract

This article explains how to use Trezor passphrase wallets with Eternl when signing transactions through Trezor Suite.

A Trezor passphrase wallet is an optional advanced feature. It creates a separate wallet by combining your existing Trezor wallet backup with a custom passphrase. This means your standard wallet and your passphrase wallet are different wallets, even though they are based on the same Trezor device and wallet backup.

With the newer Trezor Suite signing flow, users may no longer see the old browser pop-up for entering the passphrase during signing. Instead, the correct passphrase wallet should be opened in Trezor Suite first. After that, Eternl can request signing through Trezor Suite.

If the wrong wallet type is selected, the transaction may fail with a signing error, for example because the signer produced a different transaction hash or because the expected passphrase wallet is not open.

For Trezor's official passphrase wallet guide, see:

[Using a passphrase wallet in Trezor Suite](https://trezor.io/guides/trezor-suite/using-a-passphrase-wallet-in-trezor-suite)

## What Is a Trezor Passphrase Wallet?

A Trezor passphrase wallet is a hidden wallet created from:

- your existing Trezor wallet backup, also known as your recovery seed
- an additional custom passphrase

The important part is:

**Every unique passphrase opens a different wallet.**

For example:

- Your recovery seed without a passphrase opens your **standard wallet**.
- Your recovery seed with one passphrase opens one hidden wallet.
- Your recovery seed with another passphrase opens a completely different hidden wallet.

This also means that passphrases are case-sensitive. Spaces count as valid characters, too. Even a small typo, a wrong keyboard layout, or an accidental blank space can open a different wallet.

If the wallet looks empty, it does not always mean your funds are gone. It may simply mean that you opened a different passphrase wallet.

## When This Issue Happens

You may run into this issue when:

- You use Eternl with a Trezor hardware wallet.
- Your ADA is stored in a Trezor passphrase wallet.
- You try to send ADA or sign a transaction in Eternl.
- Trezor Suite opens, but no browser pop-up appears to enter the passphrase.
- Trezor Suite is currently showing the **Standard wallet** instead of the expected **Passphrase wallet**.
- Eternl shows a signing error.

Possible error messages include:

```text
Trezor Suite not available, please install or start the Trezor Suite app before continuing.
```

or:

```text
The signer produced a different transaction hash. Please ensure you are using the correct hardware device and passphrase.
```

## Why This Happens

Trezor's newer flow uses Trezor Suite more directly when connecting and signing.

Because of this, the passphrase is no longer necessarily entered through a browser pop-up while signing in Eternl. Instead, the correct passphrase wallet must be opened in Trezor Suite.

If Trezor Suite is currently using the **Standard wallet**, but the ADA is actually in a **Passphrase wallet**, Eternl cannot sign the transaction correctly.

In that case, Eternl and Trezor Suite are not working with the same wallet, which can result in a signing error.

## Standard Wallet vs Passphrase Wallet

In Trezor Suite, the wallet selector can show different wallet types.

### Standard Wallet

The standard wallet is created from your Trezor wallet backup only.

It does not use an additional passphrase.

### Passphrase Wallet

A passphrase wallet is created from your Trezor wallet backup plus your custom passphrase.

This is a separate hidden wallet. You must enter the exact passphrase to access it.

If your ADA is stored in the passphrase wallet, make sure that this passphrase wallet is open in Trezor Suite before signing in Eternl.

## How to Enable Passphrase Wallets in Trezor Suite

Open **Trezor Suite** and make sure passphrase wallets are enabled.

1. Open **Trezor Suite**.
2. Go to **Settings**.
3. Open the **Device** tab.
4. Find **Passphrase**.
5. Enable **Use Passphrase wallets**.

After this setting is enabled, Trezor Suite allows you to open additional passphrase wallets.

If you do not see the passphrase wallet option in the wallet selector, check this setting first. Because naturally the one switch you need is hidden under settings, where all useful things go to retire.

## How to Open Your Existing Passphrase Wallet

After passphrase wallets are enabled:

1. Open **Trezor Suite**.
2. Click the wallet selector in the top-left area.
3. Choose **Passphrase wallet**.
4. Select **Open previously used** if you already used this passphrase wallet before.
5. Enter the same passphrase you normally use.
6. Confirm the passphrase on your Trezor device.
7. Wait until the passphrase wallet is loaded in Trezor Suite.

Do not choose **New passphrase** unless you intentionally want to open a new hidden wallet.

A passphrase does not damage or change your recovery seed. It only opens a different wallet derived from the same seed. Still, entering the wrong passphrase can make it look like your funds are missing, because you are simply looking at another wallet.

## Creating a New Passphrase Wallet

Only create a new passphrase wallet if you intentionally want a new hidden wallet.

When creating or opening passphrase wallets, remember:

- Passphrases are case-sensitive.
- A blank space counts as a valid character.
- Keyboard layout matters.
- A typo can create or open a different hidden wallet.
- An empty passphrase wallet may appear if the passphrase does not match the one you expected.

If you enter a passphrase and Trezor Suite shows an empty wallet, carefully check whether this is really the passphrase wallet you intended to open.

If you expected funds to be there, do not send funds to the empty wallet before checking your passphrase again.

## How to Sign in Eternl After Opening the Passphrase Wallet

Once the correct passphrase wallet is open in Trezor Suite:

1. Return to Eternl.
2. Start the transaction again.
3. Click **Sign** in Eternl.
4. Trezor Suite should ask for the required approvals.
5. Confirm the transaction details in Trezor Suite.
6. Confirm the transaction details on your Trezor device.
7. Complete the signing process.

You may also see a Trezor Suite permission request for Eternl.

The permission screen may ask to allow Eternl to access public keys from your Trezor device. Confirm this request if you want to connect that Trezor wallet to Eternl.

The optional **Always allow for this app** checkbox can reduce repeated approval prompts for the same Eternl app connection.

## Entering the Passphrase

Depending on your Trezor model, you may be able to enter the passphrase on your computer, phone, or directly on the Trezor device.

Trezor models with on-device passphrase entry allow you to enter the passphrase directly on the device. Other models may require entering it through Trezor Suite on the connected computer or phone.

Always follow the instructions shown in Trezor Suite and on your Trezor device.

## Important Security Notes

### Never Share Your Passphrase

Your Trezor passphrase is highly sensitive.

Never share:

- Your recovery seed
- Your Trezor passphrase
- Your Eternl spending password
- Private keys
- Screenshots showing secret information

Eternl support will never ask for your seed phrase or passphrase.

Trezor support cannot recover your passphrase either.

### Eternl Cannot Recover a Lost Passphrase

Eternl cannot recover a lost Trezor passphrase.

Trezor cannot recover it either.

The passphrase is not stored by Eternl, Trezor Suite, or the blockchain. If the passphrase is lost, the hidden wallet cannot be accessed.

This is not a normal password reset situation. There is no "forgot passphrase" button. The blockchain, in its usual charming way, does not care about human regret.

### A Wrong Passphrase Opens a Different Wallet

If you enter the wrong passphrase, Trezor Suite may still open a wallet successfully.

That does not mean it is the correct wallet.

If the wallet looks empty or does not contain the expected ADA, check carefully that:

- You selected **Passphrase wallet**, not **Standard wallet**.
- You entered the exact same passphrase as before.
- You checked capitalization.
- You checked blank spaces.
- You checked your keyboard layout.
- You confirmed the passphrase on your Trezor device.
- You are using the correct Trezor hardware device.

### Do Not Use Browser Autofill for Passphrases

Do not use browser autofill or password manager autofill for Trezor passphrase fields.

Autofill may enter something different than expected or create a hidden wallet you do not actually know how to access manually.

Always enter your passphrase carefully and intentionally.

## Troubleshooting

### Trezor Suite Does Not Open

If Eternl shows:

```text
Trezor Suite not available, please install or start the Trezor Suite app before continuing.
```

try the following:

1. Open Trezor Suite manually.
2. Connect and unlock your Trezor device.
3. Make sure Trezor Suite detects your device.
4. Make sure the correct wallet is selected.
5. Return to Eternl and try signing again.

### Eternl Shows a Different Transaction Hash Error

If Eternl shows:

```text
The signer produced a different transaction hash.
```

check that:

- The correct Trezor device is connected.
- The correct passphrase wallet is open in Trezor Suite.
- You are not accidentally using the standard wallet.
- You entered the correct passphrase.
- The transaction details shown on the Trezor device match what you expect.

Then close the error message and try signing again.

### The Passphrase Prompt Does Not Appear in the Browser

This can be expected with the newer Trezor Suite flow.

Instead of waiting for a browser pop-up, open the passphrase wallet directly in Trezor Suite first. After the correct passphrase wallet is loaded, return to Eternl and sign the transaction again.

### The Wallet Looks Empty

If the wallet looks empty, you may have opened a different passphrase wallet.

Check:

- Did you select **Passphrase wallet**?
- Did you accidentally select **Standard wallet**?
- Did you type the exact same passphrase?
- Did you add or remove a blank space?
- Did capitalization change?
- Is your keyboard layout different?
- Are you using the correct Trezor device?

If you expected funds in the wallet and Trezor Suite shows an empty wallet, do not assume the funds are gone. First verify that the passphrase is exactly correct.

## Summary

If you use a Trezor passphrase wallet with Eternl, make sure the correct passphrase wallet is opened in Trezor Suite before signing.

The basic flow is:

1. Open Trezor Suite.
2. Enable **Use Passphrase wallets** if needed.
3. Open your existing passphrase wallet.
4. Enter the exact passphrase.
5. Confirm the passphrase on your Trezor device.
6. Return to Eternl.
7. Sign the transaction through Trezor Suite.

If you still cannot sign, open a support ticket and include the downloaded debug information from Eternl.

Do not include your seed phrase, passphrase, private keys, or wallet password.

## Related Trezor Documentation

For more information, see Trezor's official guide:

[Using a passphrase wallet in Trezor Suite](https://trezor.io/guides/trezor-suite/using-a-passphrase-wallet-in-trezor-suite)