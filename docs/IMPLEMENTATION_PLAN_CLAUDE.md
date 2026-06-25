The wiki seems to be a JavaScript-rendered SPA. Let me try fetching the sitemap or robots.txt to understand the structure, and also try alternative approaches.Good, now I have the wiki structure. Let me fetch the release notes page and more existing wiki pages to understand the full structure.The wiki is fully client-side rendered (JavaScript SPA), so direct fetching can't get the content. Let me search for the specific features of this release.Now let me search specifically for the v2.1.0 X announcement thread to learn the specific features of this major version.Now I have enough context to build a comprehensive, well-informed plan. Let me now render the wiki planning document.Now I have all the information needed. Let me build the comprehensive wiki planning document.I have enough to build a thorough, well-structured wiki plan. Let me create the artifact now.

Based on my research, here's what I found about the existing wiki structure and the v2.1.0.72 release (which went live June 23, 2026 and is described as "a foundational update across performance, wallet workflows, governance, Hub, and Pro features"):Here's the full plan, along with a summary of how I got there.

---

**What I found about the existing wiki**

The wiki at wiki.eternl.io is a JavaScript SPA that can't be read directly by a crawler, so I reconstructed its structure from Google's index. It has five confirmed top-level sections: *Getting Started* (basics, security, wallet), *User Guide* (application, how-to, multiple-instances, staking, multi-sig), *FAQ* (errors), *Updates* (one page per release), and *For Developers* (dapp-integration), plus a fresh *Announcements* section where the v2.1.0.72 page lives.

**What v2.1.0.72 actually contains**

The Chrome Web Store listing confirms it shipped on June 23, 2026. Eternl's own X/Twitter announcement describes it as "a foundational update across five pillars: **Performance, Wallet Workflows, Governance, Hub, and Pro**." Combining that with what's visible from the incremental 2.0.x update notes, the material new features are:

- All-new transaction builder (Pro)
- Eternl Hub (collaborative/DAO workspace)
- Eternl Pro tier
- Bulk DRep governance voting (multiple proposals, one tx)
- Expanded governance dashboard
- MonsterSwap DEX aggregator (slippage, DEX toggling, order history)
- Portfolio overview with real-time prices + fiat on-ramp (Mercuryo, Guardarian, Transak)
- OneKey hardware wallet support
- QR-code wallet export/import
- web+cardano:// deep-link scheme (CIP-0013/0099/0157/0158)
- Decentralized Ada Handle resolution (DeMi)

**The plan: 11 new articles + 8 updates**

Every new feature that's substantial enough for user questions gets its own article (`monster-swap`, `governance`, `eternl-pro`, `eternl-hub`, `transaction-builder`, `portfolio`, `hardware-wallets`, `qr-wallet-transfer`, `cardano-url-scheme`, `ada-handle`, and the release note itself). Smaller additions land as new sections in existing articles. The priority order puts the release announcement and the two biggest user-visible gaps (governance bulk voting, MonsterSwap) at the top.
