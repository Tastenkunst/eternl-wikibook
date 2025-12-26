# AGENTS

## Overview
- GitBook-based documentation repository for Eternl wallet support.
- Content is Markdown with optional YAML front matter and GitBook-specific markup.

## Structure
- README.md: landing page for the book (front matter cover, description, main title).
- SUMMARY.md: table of contents that drives GitBook navigation.
- home/: end-user docs (welcome, security, Cardano basics, getting started, staking, etc.).
- for-developers/: developer-focused docs (e.g., dApp browser integration).
- contact-and-support.md, eternl-updates-release-notes.md, impressum.md: top-level pages.
- .gitbook/assets/: images and icons referenced from pages.
- notes.md: internal notes (not listed in SUMMARY.md).

## Content conventions
- Keep the first heading as the page title with a single "#".
- Use YAML front matter when needed (description, cover, icon).
- GitBook markup appears throughout: {% embed %}, {% hint %}, <details>, <figure>, and HTML tables.
- Use relative links that match existing patterns for pages and assets.
- Do not rename or move files without updating SUMMARY.md and any inbound links.

## Viewer implementation notes
- Planned stack for a GitBook-like viewer: Vite, Vue 3, TypeScript, TailwindCSS v4.
- Markdown remains the source of truth and is edited only in WebStorm/VSCode (no in-page editing).
- Expect LLM-assisted translations into 36+ languages with locale-specific Markdown trees.
- The web app lives under page/ (package.json and app code) to keep the repo root focused on content.

## Common edits
- Add a page: create the Markdown file in the right folder and add it to SUMMARY.md.
- Add a section: create a folder with README.md for the section landing page and register it in SUMMARY.md.
- Add assets: store in .gitbook/assets and reference with relative paths.
