# Implementation Plan (Brainstorming)

## Context and goals
- Render the existing Markdown content in this repo as a lightweight GitBook-like site.
- Use Vite + Vue + TailwindCSS v4 + TypeScript.
- Preserve GitBook-specific patterns: SUMMARY.md navigation, front matter, embeds, hints, and HTML blocks.
- Docs are edited only in WebStorm/VSCode, not in the site UI.
- Enable an LLM workflow to translate content into 36+ languages.
- Keep the web app under page/ (package.json and code) so the repo root stays content-only.

## Feature set ideas
### Must have (MVP)
- Navigation built from SUMMARY.md (multi-level sidebar).
- Markdown rendering with front matter (title, description, cover, icon).
- GitBook directives support: hint blocks, embed blocks, details blocks.
- Asset handling for .gitbook/assets and relative links.
- On-page table of contents with anchor links.
- Previous/next page navigation.
- Responsive layout for desktop and mobile.
- Basic search (static index over the current content set).

### Nice to have (later)
- Syntax highlighting and code copy buttons.
- Image lightbox and figure captions.
- Simple broken-link checks.

### Edge cases to plan for
- GitBook HTML in Markdown (tables, figures, embedded iframes).
- Mixed content (local pages plus external links).

## Tech stack
- Vite + Vue 3 + TypeScript.
- TailwindCSS v4 for styling.
- Markdown pipeline with remark/rehype to support GitBook-specific blocks.
- Static search index (Pagefind or a small custom JSON index).

## Suggested implementation phases
1) Content ingestion: parse SUMMARY.md, map routes, load Markdown files.
2) Rendering: Markdown pipeline with GitBook directives and front matter.
3) UI shell: sidebar, breadcrumbs, page layout, nav buttons.
4) Search: static index and client search.
5) Polishing: theming, SEO, optional features.

## Localization workflow (LLM-assisted)
- Keep English as the source of truth in this repo.
- Generate translated Markdown files per locale (e.g., `home/…` -> `i18n/de/home/…`).
- Maintain the same folder structure per locale for predictable routing.
- Automate translation with an LLM pipeline, then allow human review before publish.

## Open questions
- Do we want a strict one-to-one GitBook visual clone or a lighter docs UI?
- Which locales are required first, and where should translated files live?
