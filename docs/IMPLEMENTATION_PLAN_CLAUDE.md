# Eternl Wiki — Structural Implementation Guide for v2.1.x

> **Scope:** Create files and folders, add frontmatter/nav stubs, update sidebar/nav config.
> **Out of scope:** Article body content. Every new file gets a stub only — full content is authored separately.
> **Releases covered:** v2.1.0.72 · v2.1.1.0 · v2.1.2.0

---

## Step 1 — Append release-notes entries

**File:** `content/eternl-updates-release-notes.md`

Append three new changelog entries at the top of the file (most recent first), each using whatever heading level and divider style already exists in the file.

Entry order (top to bottom):
1. v2.1.2.0 — June 27, 2026 — Extension only
2. v2.1.1.0 — June 26, 2026 — All platforms
3. v2.1.0.72 — June 23, 2026 — All platforms (iOS delayed)

Each entry is a **stub**: heading + release date + platform availability list + section placeholders (Added / Changed / Fixed / Removed as applicable). No body text.

---

## Step 2 — Create new wiki article stubs

Create each file listed below. Every file gets:
- Frontmatter matching the existing article format in the repo (copy structure from any existing article)
- A single `# Title` H1
- Placeholder comment: `<!-- content to be authored -->`
- No body text

### 2.1 Getting Started section

| File path | Title |
|---|---|
| `content/en/1_getting-started/hardware-wallets.md` | Hardware Wallets |

### 2.2 User Guide section

| File path | Title |
|---|---|
| `content/en/2_user-guide/eternl-pro.md` | Eternl Pro |
| `content/en/2_user-guide/eternl-hub.md` | Eternl Hub |
| `content/en/2_user-guide/transaction-builder.md` | Transaction Builder |
| `content/en/2_user-guide/governance.md` | Governance & DRep Voting |
| `content/en/2_user-guide/address-book.md` | Address Book |
| `content/en/2_user-guide/monster-swap.md` | MonsterSwap |
| `content/en/2_user-guide/portfolio.md` | Portfolio & On-Ramp |
| `content/en/2_user-guide/qr-wallet-transfer.md` | QR Wallet Transfer |
| `content/en/2_user-guide/cardano-url-scheme.md` | Cardano URL Scheme |
| `content/en/2_user-guide/ada-handle.md` | Ada Handle |

> **Note on `governance.md`:** Check whether a governance stub already exists. If it does, **replace** it entirely — the old governance voting system was removed in v2.1.1.0 and any existing content is incorrect.

---

## Step 3 — Register new articles in navigation / sidebar

Add all new articles from Step 2 to whatever nav/sidebar config file the wiki uses (e.g. `sidebar.js`, `nav.json`, `config.ts` — check the repo).

Ordering within each section:

**1_getting-started** — insert after `security`:
```
hardware-wallets
```

**2_user-guide** — insert in this order after existing entries:
```
governance
address-book
eternl-pro
eternl-hub
transaction-builder
monster-swap
portfolio
qr-wallet-transfer
cardano-url-scheme
ada-handle
```

---

## Step 4 — Update existing articles (structure only)

For each article below, add a `<!-- UPDATE NEEDED -->` comment at the relevant location. Do **not** change existing content.

| Article file | Where to add comment |
|---|---|
| `content/en/2_user-guide/application.md` | After last paragraph of body |
| `content/en/2_user-guide/eternl-howto.md` | After last paragraph of body |
| `content/en/2_user-guide/multiple-instances.md` | After last paragraph of body |
| `content/en/2_user-guide/staking.md` | After last paragraph of body |
| `content/en/2_user-guide/multi-sig.md` | After last paragraph of body |
| `content/en/1_getting-started/security.md` | After last paragraph of body |
| `content/en/1_getting-started/wallet.md` | After last paragraph of body |
| `content/en/3_frequently-asked-questions/errors.md` | After last paragraph of body |
| `content/en/5_for-developers/dapp-integration.md` | After last paragraph of body |

Comment to insert (copy exactly):
```
<!-- UPDATE NEEDED — see docs/update_implementation.md Step 4 -->
```

---

## Step 5 — Verify

Confirm the following before closing:

- [ ] `content/eternl-updates-release-notes.md` has three new stubs at the top
- [ ] All 11 new article files from Step 2 exist with frontmatter and H1
- [ ] All 11 new articles appear in the nav/sidebar config
- [ ] All 9 existing articles from Step 4 have the update comment
- [ ] No existing article body content has been changed
- [ ] `governance.md` is a clean new stub (not the old content)