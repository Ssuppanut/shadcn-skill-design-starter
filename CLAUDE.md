# CLAUDE.md

Guidance for Claude Code when working in this repository.

## 1. Project Overview

A **Figma-driven Next.js UI project**. Design decisions live in a Figma file; this repo turns them into production React/Next.js code. The pipeline is: **Figma → design tokens → Tailwind v4 theme → shadcn/ui components → Next.js pages**, all built and maintained through Claude Code.

This folder is the **application root** (it will hold `src/`, `package.json`, etc.). It also ships a self-contained `design-system` skill that Claude Code auto-loads when building UI.

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js`) |
| Components | shadcn/ui (Default style · Neutral base · CSS variables) |
| Design source | Figma file → tokens via the LazyYsync variables export |
| Figma bridge | Figma Dev Mode MCP server (live design context + Code Connect) |
| Icons | lucide-react |
| Forms | react-hook-form + Zod |
| Package manager | pnpm |

## 3. Repository Structure

```
.
├── CLAUDE.md                         ← this file (project memory)
├── package.json                      ← scripts incl. sync:tokens
├── design/
│   └── variables-export.json         ← Figma token snapshot (1,806 vars) — source of truth
├── scripts/
│   └── sync-tokens.mjs               ← regenerates src/app/globals.css from the JSON
├── src/
│   └── app/
│       ├── globals.css               ← AUTO-GENERATED token theme (do not hand-edit)
│       ├── layout.tsx                ← ThemeProvider + fonts
│       └── ...                        ← routes (App Router)
├── components/
│   ├── ui/                           ← shadcn/ui generated — never hand-edit
│   └── ...                            ← composed feature/layout components
├── lib/
│   └── utils.ts                      ← cn() helper
└── .claude/
    └── skills/
        └── design-system/
            ├── SKILL.md              ← UI-generation skill (auto-discovered)
            └── references/
                └── design-tokens.md  ← full token reference (19 collections / 1,806 vars)
```

## 4. Commands

```bash
# Setup (first time — scaffolds Next.js into this folder; see §7)
pnpm dlx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
pnpm dlx shadcn@latest init -t next        # Default · Neutral · CSS variables: yes

# Day-to-day
pnpm dev                                    # dev server
pnpm build                                  # production build (use to verify)
pnpm lint                                   # ESLint
pnpm dlx shadcn@latest add <component>      # add a shadcn/ui component before using it

# Tokens
pnpm sync:tokens                            # regenerate src/app/globals.css from design/variables-export.json
pnpm sync:tokens:check                      # verify token count (1,806) without writing — use in CI
```

## 5. Figma Workflow

The Figma file is the source of truth. Three pipelines connect it to code.

### A. Token sync (variables → CSS)
```
Figma variables ──(LazyYsync plugin export)──▶ design/variables-export.json
                ──(pnpm sync:tokens)──────────▶ src/app/globals.css
```
- When tokens change in Figma: re-export the JSON (overwrite `design/variables-export.json`), then run `pnpm sync:tokens`.
- For live values without a re-export, read from Figma directly with `get_variable_defs`.
- `globals.css` is **generated** — treat it as authoritative output and never hand-edit it. The human-readable copy in `references/design-tokens.md §3` is documentation only; if they disagree, the generated file (from the JSON) wins.

### B. Design-to-code (frames → components)
```
Figma frame URL ──▶ get_metadata ──▶ get_design_context / get_screenshot
                ──▶ generate Next.js page + shadcn/ui components (semantic tokens only)
```
- Load the `/figma-use` skill **before** calling `use_figma`. Use `/figma-generate-design` to translate a page/layout.
- Building UI is governed by the `design-system` skill (rules, recipes, checklist) — see §7.

### C. Code Connect (components ↔ Figma)
```
shadcn component ──▶ get_code_connect_map / add_code_connect_map ──▶ Dev Mode shows real code
```
- Use `/figma-code-connect` to map our `components/ui/*` to their Figma counterparts so designers see real project code in Dev Mode.

### Figma URL parsing
`figma.com/design/:fileKey/:name?node-id=:nodeId` → extract `fileKey` and `nodeId`; **convert `-` to `:` in the nodeId** before passing to MCP tools.

### MCP tools at a glance
`get_metadata` · `get_design_context` · `get_screenshot` · `get_variable_defs` · `get_code_connect_map` · `add_code_connect_map`. Skills: `/figma-use` (mandatory before `use_figma`), `/figma-generate-design`, `/figma-generate-library`, `/figma-code-connect`.

## 6. Design Token System

- **Source of truth:** `design/variables-export.json` — **1,806 variables across 19 collections** (`shadcn/ui`, `tw/colors`, `rdx/colors`, `tokens`, spacing/sizing/border/typography sets). This count is an invariant: do not add, drop, or fabricate tokens.
- **Semantic tokens only in `className`.** Use `bg-background`, `text-foreground`, `border`, `text-muted-foreground`, etc. Never hardcode hex/rgb, and never use raw palette classes like `bg-white` or `text-gray-900`.
- **The 35 `shadcn/ui` tokens** are the only color tokens referenced directly in markup; `tw/colors` (244) and `rdx/colors` (396) are the underlying palettes that semantic tokens alias.
- **Dark mode is automatic** via `.dark` overrides in `globals.css`; only use `dark:` for one-off exceptions.
- Full tables, OKLCh values, and per-collection breakdowns: `.claude/skills/design-system/references/design-tokens.md`.

## 7. The `design-system` Skill

`.claude/skills/design-system/SKILL.md` is auto-discovered by Claude Code and activates when building, generating, or modifying UI. It contains the code-generation rules, file conventions, component recipes (dashboard, form, dialog, sidebar, empty state, toast), responsive + server/client guidance, and a pre-output checklist. Follow it for all UI work; consult `references/design-tokens.md` for token values.

## 8. Code Conventions

- **Server vs Client:** components are Server Components by default. Add `"use client"` only for state/effects/handlers/forms, and keep the boundary as low in the tree as possible. Fetch data in Server Components and pass props down.
- **File layout:** routes under `src/app/` (use route groups like `(dashboard)`); generated primitives in `components/ui/`; composed pieces in `components/<feature>/` and `components/layout/`.
- **Imports:** `@/components/ui/*`, `@/lib/utils` (`cn`).
- **`SidebarProvider`** wraps at the layout level, never inside a page.
- **Accessibility:** every `Dialog` has a `DialogTitle`; icon-only buttons have `aria-label`; images use `alt`; links styled as buttons use `asChild`.
- Detailed rules and examples live in the skill (§7).

## 9. Guardrails — Don't

- Don't hand-edit `src/app/globals.css` — run `pnpm sync:tokens`.
- Don't hand-edit `components/ui/*` — re-run `shadcn add` to regenerate.
- Don't hardcode colors or use raw Tailwind palette classes — use semantic tokens.
- Don't let tokens drift from `design/variables-export.json` (the 1,806 count is fixed).
- Don't use `<a>` for internal nav (use `next/link`) or fetch data inside Client Components when a Server Component can.
- Keep `SKILL.md` lean; push large tables into `references/`.

## 10. Verification

```bash
pnpm sync:tokens:check                                    # asserts 1,806 variables
jq '.variables | length' design/variables-export.json    # → 1806
pnpm build && pnpm lint                                   # after any UI change
```
Also confirm generated UI uses only semantic tokens (no hex / raw palette classes) and works in both light and dark mode.

> Note: the actual `create-next-app` / `shadcn init` scaffold (§4) installs many files and is run as an explicit step — ask before scaffolding if `src/` is not yet populated. The token snapshot, sync script, skill, and this guide are already in place.
