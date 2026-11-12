# Manage Accounts

## Wallets and Accounts {open}

A wallet can contain multiple accounts derived from the same seed phrase. Each account has its own addresses and keys, which allows funds, staking, and transaction history to be kept separate. Accounts still belong to the wallet they were created in.

Separate wallets are independent. Each wallet has its own seed phrase and its own accounts.

Eternl supports up to 100 accounts per wallet. Each account has an index. When you add an account, Eternl automatically selects the next available index, but you can choose a different index if you want.

The limit of 100 accounts is specific to Eternl. A seed phrase can be used to derive many more account indexes. If you choose an unusually high index, make sure to record it, as the account may not be discovered automatically when restoring the wallet and may need to be added manually.

## Open the Account Manager

1. Click **Manage** at the bottom of the wallet list.
2. Find the wallet whose accounts you want to manage. If its account list is collapsed, click the arrow on the right side of the wallet to expand it.
3. Click **Add Account** below that wallet's accounts to open the Account Manager for this wallet.

Clicking **Manage** activates management mode. The button remains highlighted while this mode is active. Click **Manage** again when you are finished to leave management mode and return to the regular wallet list.

[[carousel title="Open the Account Manager" steps=true start=1]]
### Click "Manage" in the Wallet List
![Open Account Manager - Step 1](/assets/pictures/manage_accounts_add-0_v2-3-0-3.jpg)

### Expand Wallet (if collapsed)
![Open Account Manager - Step 2](/assets/pictures/manage_accounts_add-1_v2-3-0-3.jpg)

### Click "Add Account"
![Open Account Manager - Step 3](/assets/pictures/manage_accounts_add-2_v2-3-0-3.jpg)

### Account Manager is opened
![Open Account Manager - Step 4](/assets/pictures/manage_accounts_account_manager.jpg)
[[/carousel]]

The account manager lists the existing accounts with their names and indexes. When it opens, the name field for a new account is focused automatically.

## Add an Account

1. Enter a name for the new account if you want to use one. The name is optional.
2. Eternl automatically selects the next available account index. You can choose a different index if you prefer.
3. Click **Add Account** to add another account.
4. Click **Save** to apply your changes and close the account manager.

[//]: # (:::info)

[//]: # (Read-only wallets do not support additional accounts. If you click Add Account for one, the account manager displays: “This wallet can’t add more accounts.”)

[//]: # (:::)

![Add Account](/assets/pictures/manage_accounts_add-3.jpg)

To close the account manager without applying unsaved changes, click **X** instead of **Save**.

## Rename an Account

You can rename an account directly from the wallet list without opening the account manager:

1. Open the three-dot menu on the account you want to rename.
2. Select **Rename account**.
3. Enter the new name in the dialog.
4. Click **Save** to apply the new name.

Changing an account name only changes its label in the Eternl instance. It does not change the account’s index.

[[carousel title="Rename an Account" steps=true start=1]]
### Open the three-dot menu of the account
![Rename an Account - Step 1](/assets/pictures/manage_accounts_rename-0.jpg)

### Select "Rename account"
![Rename an Account - Step 2](/assets/pictures/manage_accounts_rename-1.jpg)

### Enter the new name
![Rename an Account - Step 3](/assets/pictures/manage_accounts_rename-2.jpg)

### Click "Save"
![Rename an Account - Step 4](/assets/pictures/manage_accounts_rename-3.jpg)

[[/carousel]]

## Remove an Account

1. Click **Manage** at the bottom of the wallet list.
2. Find the wallet whose accounts you want to manage. If its account list is collapsed, click the arrow on the right side of the wallet to expand it.
3. Click the **trash-can** icon in the row of the account you want to remove.
4. In the "Delete Account" panel, enable the **confirmation switch** to acknowledge that the account's local settings will be lost. To add the account again later, a software wallet requires its spending password; a hardware wallet requires the connected hardware wallet.
5. Enter the account name exactly as shown in the panel. You can use the copy icon next to the name to copy it.
6. Click **Delete**.

Clicking **Manage** activates management mode. The button remains highlighted while this mode is active. Click **Manage** again when you are finished to leave management mode and return to the regular wallet list.

[[carousel title="Remove an Account" steps=true start=1]]
### Click "Manage" in the Wallet List
![Remove an Account - Step 1](/assets/pictures/manage_accounts_add-0_v2-3-0-3.jpg)

### Expand Wallet (if collapsed)
![Remove an Account - Step 2](/assets/pictures/manage_accounts_add-1_v2-3-0-3.jpg)

### Click the trash-can icon next to the account
![Remove an Account - Step 3](/assets/pictures/manage_accounts_remove-0_v2-3-0-3.jpg)

### Enable the confirmation switch
![Remove an Account - Step 4](/assets/pictures/manage_accounts_remove-1_v2-3-0-3.jpg)

### Enter the account name
![Remove an Account - Step 5](/assets/pictures/manage_accounts_remove-2_v2-3-0-3.jpg)

### Click "Delete"
![Remove an Account - Step 6](/assets/pictures/manage_accounts_remove-3_v2-3-0-3.jpg)

[[/carousel]]

---

Alternatively, you can delete an account through **Account Settings**. The **Delete Account** entry is not available for the wallet’s first account. Opening **Account Settings** from an account’s three-dot menu selects that account automatically:

1. Open the three-dot menu on the account you want to remove.
2. Select **Account Settings**.
3. Click **Delete Account**.
4. Enable the **confirmation switch** to acknowledge that the account's local settings will be lost.
5. Enter the account name exactly as shown in the panel. You can use the copy icon next to the name to copy it.
6. Click **Delete**.

[[carousel title="Remove an Account through Account Settings" steps=true start=1]]
### Open the three-dot menu on the account you want to remove
![Remove an Account - Step 1](/assets/pictures/manage_accounts_remove_settings-0_v2-3-0-3.jpg)

### Select "Account Settings"
![Remove an Account - Step 2](/assets/pictures/manage_accounts_remove_settings-1_v2-3-0-3.jpg)

### Click "Delete Account"
![Remove an Account - Step 3](/assets/pictures/manage_accounts_remove_settings-2_v2-3-0-3.jpg)

### Enable the confirmation switch
![Remove an Account - Step 4](/assets/pictures/manage_accounts_remove-1_v2-3-0-3.jpg)

### Enter the account name
![Remove an Account - Step 5](/assets/pictures/manage_accounts_remove-2_v2-3-0-3.jpg)

### Click "Delete"
![Remove an Account - Step 6](/assets/pictures/manage_accounts_remove-3_v2-3-0-3.jpg)

[[/carousel]]

:::info
Removing an account only removes it from this Eternl instance. It does not affect the account’s addresses or any funds associated with it. You can add the account again later by creating a new account with the same index. The account’s name and other local settings will be lost.
:::
