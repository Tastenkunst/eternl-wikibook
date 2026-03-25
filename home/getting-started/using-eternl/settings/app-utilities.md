<!-- markdownlint-disable-file MD033 -->

# App Utilities

## Overview

<figure><img src="/gitbook-assets/pictures/App_Utilities.jpg" alt=""><figcaption></figcaption></figure>

## Franken Address Generator

![Franken Address](../../../../.gitbook/assets/pictures/app_util_franken_address.png)

Create a new address by combining any two addresses.

This is an **advanced utility** for constructing or modifying Cardano addresses. It is typically relevant for testing, analysis, or debugging workflows rather than normal wallet use.

**When to use it:**

* Testing address formats
* Advanced wallet or debugging scenarios

**Important:**

* This is **not** intended for normal users.
* Incorrect usage can result in unusable or invalid addresses.


## Sign Data

![Sign Data](../../../../.gitbook/assets/pictures/app_util_sign_data.png)

Sign or verify any payload with an address / ID according to the CIP-8 standard.

This utility lets you **sign arbitrary data** with a wallet key. It is commonly used for authentication, verification, or proving ownership of a wallet-controlled identity.

**When to use it:**

* Verifying wallet ownership
* Web3 or dApp authentication

**Important:**

* Never sign unknown or untrusted data.
* Signing data does **not** send funds, but it can still be used maliciously in the wrong context.
