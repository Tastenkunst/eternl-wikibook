---
disableH2Collapse: true
---

# Trezor Passphrase Wallets in Trezor Suite

## Quick Fix

If you use a **Trezor passphrase wallet** and Eternl no longer shows the old browser pop-up for entering your passphrase, open the correct passphrase wallet in **Trezor Suite** first.

1. Open **Trezor Suite**.
2. Click the wallet selector in the top-left area.
3. Select **Passphrase wallet**.
4. Choose **Open previously used**.
5. Enter the same passphrase you normally use.
6. Confirm the passphrase on your Trezor device.
7. Wait until the passphrase wallet is loaded in Trezor Suite.
8. Return to Eternl and try signing the transaction again.

If you only see the **Standard wallet**, enable passphrase wallets first:

1. Open **Trezor Suite**.
2. Go to **Settings**.
3. Open the **Device** tab.
4. Enable **Use Passphrase wallets**.

Do not choose **New passphrase** unless you intentionally want to open a new hidden wallet.

## Why This Happens

Trezor changed the signing flow to use **Trezor Suite** more directly.

Because of this, the passphrase may no longer be entered through a browser pop-up while signing in Eternl. Instead, the correct passphrase wallet needs to be opened in Trezor Suite before signing.

If Trezor Suite is showing your **Standard wallet**, but your ADA is stored in a **Passphrase wallet**, Eternl cannot sign the transaction correctly.

## Possible Error Messages

You may see an error like:

```text
Trezor Suite not available, please install or start the Trezor Suite app before continuing.
```

or:

```text
The signer produced a different transaction hash. Please ensure you are using the correct hardware device and passphrase.
```

These errors can happen if Trezor Suite is not running, the wrong wallet type is selected, or the wrong passphrase wallet is open.

## Standard Wallet vs Passphrase Wallet

A **Standard wallet** is created from your Trezor wallet backup only.

A **Passphrase wallet** is created from your Trezor wallet backup plus an additional passphrase.

Every unique passphrase opens a different wallet. This means:

- different capitalization opens a different wallet
- an added or missing space opens a different wallet
- a typo opens a different wallet
- a different keyboard layout may enter a different passphrase

If the wallet looks empty, your funds may not be gone. You may simply have opened a different passphrase wallet. Because apparently one invisible character can decide whether your wallet exists. Very normal technology.

## Signing in Eternl

Once the correct passphrase wallet is open in Trezor Suite:

1. Return to Eternl.
2. Start the transaction again.
3. Click **Sign**.
4. Approve the request in Trezor Suite.
5. Confirm the transaction details on your Trezor device.
6. Complete the signing process.

You may also see a Trezor Suite permission request asking whether Eternl may access public keys from your Trezor device. Confirm this request if you want to connect that Trezor wallet to Eternl.

## Important Security Notes

Never share:

- your recovery seed
- your Trezor passphrase
- your Eternl spending password
- private keys
- screenshots showing secret information

Eternl support will never ask for your seed phrase or passphrase.

Eternl cannot recover a lost Trezor passphrase. Trezor cannot recover it either. The passphrase is not stored by Eternl, Trezor Suite, or the blockchain.

Do not use browser autofill for Trezor passphrases. Always enter the passphrase carefully yourself.

## Troubleshooting

### The browser passphrase pop-up does not appear

This can be expected with the newer Trezor Suite flow.

Open the passphrase wallet directly in Trezor Suite first, then return to Eternl and sign again.

### Trezor Suite does not open

Open Trezor Suite manually, connect and unlock your Trezor device, then try signing again in Eternl.

### The wallet looks empty

Check that:

- you selected **Passphrase wallet**, not **Standard wallet**
- you entered the exact same passphrase as before
- capitalization is correct
- there are no extra or missing spaces
- your keyboard layout is correct
- you are using the correct Trezor device

### Eternl shows a different transaction hash error

Check that the correct Trezor device and the correct passphrase wallet are selected in Trezor Suite. Then try signing again.

## Related Trezor Documentation

For more details, see Trezor's official guide:

[Using a passphrase wallet in Trezor Suite](https://trezor.io/guides/trezor-suite/using-a-passphrase-wallet-in-trezor-suite)