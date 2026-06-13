# Create Skill Design

A **Figma-driven component documentation site** built on Next.js, Tailwind CSS v4, and shadcn/ui — paired with a self-contained kit of **18 design skills** for Claude Code.

Design decisions live in a Figma file and flow through a one-way pipeline into production code:

```
Figma variables → design/variables-export.json → src/app/globals.css → shadcn/ui → Next.js
```

The repo ships two things in one:

1. **A live docs app** that catalogues 55 UI components, each with an install command, a runnable preview, and copy-paste usage code — themed entirely with semantic design tokens, so light/dark mode is automatic.
2. **A design-system skill kit** under `.claude/skills/` that turns Claude Code into a design-system co-pilot (tokens, accessibility, taste, framework adapters, QA gates, and a 138-system reference library).

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Workflow: from setup to running](#workflow-from-setup-to-running)
- [Project structure](#project-structure)
- [Design token system](#design-token-system)
- [The docs app](#the-docs-app)
- [The design-skill kit](#the-design-skill-kit)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Conventions and guardrails](#conventions-and-guardrails)

---

## Features

- **Token-driven theming.** A single Figma export (`design/variables-export.json`, **1,806 variables**) is compiled into `src/app/globals.css` by `scripts/sync-tokens.mjs`. The 35 `shadcn/ui` semantic tokens are converted from sRGB to **OKLCh** and emitted for both light and dark modes.
- **Automatic dark mode.** Driven by `.dark` overrides in `globals.css` plus `next-themes` (system default). No `dark:` variants needed for normal usage.
- **Component catalogue.** 55 documented components across 8 categories, all derived from a single registry (`components/docs/registry.tsx`) — add one entry and the overview grid, sidebar, and dynamic route all update.
- **Per-component pages.** Each component has an installation command (one-click copyable), a live rendered demo, and usage code. Statically generated via `generateStaticParams`.
- **51 shadcn/ui primitives** pre-installed under `components/ui/`.
- **Design-skill kit.** 18 Claude Code skills + a shared resource layer (`_ux-ui-shared/`) with 14 DTCG token files, 138 named design systems, and 19 validation scripts.
- **Type-safe and linted.** TypeScript throughout, ESLint via `eslint-config-next`, and a CI-friendly token-count check (`sync:tokens:check`).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) + TypeScript |
| UI runtime | React 19 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js`) |
| Components | shadcn/ui — Default style, Neutral base, CSS variables |
| Primitives | Radix UI, cmdk, vaul, embla-carousel, react-day-picker, input-otp |
| Charts | Recharts |
| Toasts | Sonner |
| Icons | lucide-react |
| Theming | next-themes |
| Fonts | Geist Sans + Geist Mono (`next/font`) |
| Design source | Figma variables, exported via the LazyYsync plugin |
| Package manager | pnpm |

---

## Prerequisites

- **Node.js 20.9+** (required by Next.js 16)
- **pnpm 9+** (developed with pnpm 11.x; a `pnpm-lock.yaml` is committed)
- **Python 3** — optional, only needed to run the design-kit validation scripts under `.claude/skills/_ux-ui-shared/scripts/`

> The repo is already scaffolded (it contains `src/`, `components/`, `package.json`, etc.). You do **not** need to run `create-next-app` or `shadcn init` — just install dependencies and start.

---

## Installation

```bash
# 1. Install dependencies
pnpm install

# 2. (Optional) regenerate the token theme from the Figma snapshot
pnpm sync:tokens

# 3. Start the dev server
pnpm dev
```

Then open **http://localhost:3000** to browse the component documentation.

---

## Usage

```bash
pnpm dev                 # start the dev server (Turbopack) at http://localhost:3000
pnpm build               # production build
pnpm start               # serve the production build
pnpm lint                # run ESLint

pnpm sync:tokens         # regenerate src/app/globals.css from the Figma export
pnpm sync:tokens:check   # verify the token count (1,806) without writing — use in CI

pnpm dlx shadcn@latest add <component>   # add a new shadcn/ui primitive
```

---

## Workflow: from setup to running

A new contributor can go from clone to a running, themed app in a few steps.

**1. Install.**

```bash
pnpm install
```

**2. Generate the theme (optional but recommended).**
`src/app/globals.css` is committed, but it is a generated artifact. To rebuild it from the source-of-truth export:

```bash
pnpm sync:tokens
```

This reads `design/variables-export.json`, validates that it contains exactly **1,806** variables, converts the 35 `shadcn/ui` color tokens to OKLCh, and writes `:root` (light) and `.dark` (dark) blocks into `globals.css`. If the count has drifted, the script fails loudly so tokens never silently diverge.

**3. Run the app.**

```bash
pnpm dev
```

Visit `http://localhost:3000`. You will see the **overview page** (a grid of components grouped by category) served from the `(docs)` route group. The layout wraps everything in a collapsible sidebar (`SidebarProvider`), a site header, and a theme toggle.

**4. Explore a component.**
Click any card to open `/components/<slug>`. Each page shows the install command, a live demo, and usage code pulled from the registry.

**5. Add or change a component.**

```bash
pnpm dlx shadcn@latest add <component>     # generates components/ui/<component>.tsx
```

Then add a demo in `components/docs/demos.tsx` and append one entry to `components/docs/registry.tsx`. The sidebar, overview grid, and `/components/[slug]` route all derive from that single array — no other wiring needed.

**6. Update tokens when the design changes.**
Re-export the Figma variables (overwrite `design/variables-export.json`), then:

```bash
pnpm sync:tokens
```

**7. Verify before shipping.**

```bash
pnpm sync:tokens:check    # asserts 1,806 variables
pnpm build && pnpm lint
```

---

## Project structure

```
.
├── CLAUDE.md                          # project memory / instructions for Claude Code
├── components.json                    # shadcn/ui config (Default · Neutral · CSS variables)
├── design/
│   └── variables-export.json          # Figma token snapshot (1,806 vars) — source of truth
├── scripts/
│   └── sync-tokens.mjs                # regenerates globals.css from the export (sRGB → OKLCh)
├── src/
│   └── app/
│       ├── globals.css                # AUTO-GENERATED token theme (do not hand-edit)
│       ├── layout.tsx                 # root layout: fonts, ThemeProvider, Toaster
│       └── (docs)/                    # docs route group
│           ├── layout.tsx             # sidebar + header shell
│           ├── page.tsx               # overview grid (components by category)
│           └── components/[slug]/page.tsx   # per-component page (install · demo · code)
├── components/
│   ├── ui/                            # 51 shadcn/ui primitives (generated — do not hand-edit)
│   ├── docs/                          # registry.tsx, demos.tsx, component-preview.tsx
│   ├── layout/                        # docs-sidebar, site-header, mode-toggle
│   └── theme-provider.tsx
├── hooks/
│   └── use-mobile.tsx
├── lib/
│   └── utils.ts                       # cn() helper
├── public/                            # static assets
├── figma-component-audit.md           # audit of the Figma file vs the docs registry
├── figma-report.json                  # raw Figma REST API report
└── .claude/
    └── skills/
        ├── _ux-ui-shared/             # shared kit resources (224 files)
        ├── design-system/             # this project's UI-generation skill
        └── …                          # 17 generic ux-ui-agent-skills (see kit section)
```

> `figma-rest-api/` (a separate third-party tool) is intentionally **git-ignored** and not part of this repo.

---

## Design token system

- **Source of truth:** `design/variables-export.json` — **1,806 variables across 19 collections** (`shadcn/ui`, `tw/colors`, `rdx/colors`, `tokens`, plus spacing/sizing/border/typography sets). The count is an invariant; the sync script refuses to run if it drifts.
- **Semantic tokens only.** Markup uses `bg-background`, `text-foreground`, `border`, `text-muted-foreground`, etc. The 35 `shadcn/ui` tokens are the only colors referenced directly; `tw/colors` and `rdx/colors` are the underlying palettes they alias.
- **OKLCh output.** `sync-tokens.mjs` converts the exported sRGB values to OKLCh — the same color space shadcn/ui ships in — and emits `:root` + `.dark`.
- **Never hand-edit `src/app/globals.css`.** It is generated; run `pnpm sync:tokens` instead.

For live values without a re-export, read directly from Figma via the Dev Mode MCP server (`get_variable_defs`). See `CLAUDE.md` for the full Figma workflow (token sync, design-to-code, and Code Connect).

---

## The docs app

The documentation site lives entirely under the `(docs)` route group and is driven by one file:

- **`components/docs/registry.tsx`** — the single source of truth. Each entry defines a `slug`, `name`, `description`, `category`, `status` (`stable` / `beta` / `new`), an `install` command, a `usage` snippet, and a `Demo` component.
- **`components/docs/demos.tsx`** — the live demo for each component.
- **`components/docs/component-preview.tsx`** — the preview frame and the copyable command widget.

Categories: **Buttons, Forms, Display, Data, Navigation, Overlay, Feedback, Layout**.

Routes:

| Route | Purpose |
|---|---|
| `/` | Overview grid of all components, grouped by category |
| `/components/[slug]` | Per-component page: install command, live demo, usage code, prev/next nav |

Per-component pages are statically generated (`generateStaticParams`) with per-page metadata (`generateMetadata`).

---

## The design-skill kit

`.claude/skills/` contains **18 skills** that Claude Code auto-discovers, plus a shared resource layer.

| Skill | What it does |
|---|---|
| `design-system` | This project's UI-generation skill (Next.js + Tailwind v4 + shadcn/ui, sourced from the 1,806-token export) |
| `design-tokens` | Generate/extend/audit DTCG tokens (3-tier: primitive → semantic → component) |
| `token-build` | Build platform artifacts (CSS, Tailwind `@theme`, JS/TS, iOS, Android) from tokens |
| `design-code` | Generate token-driven component code for any framework |
| `design-component` | Design a component spec (anatomy, variants, 8 states, a11y) |
| `apply-aesthetic` | Apply a visual direction or one of 138 named design systems |
| `brandkit` | Generate a complete, accessible brand system from a brief |
| `image-to-code` | Turn a screenshot/mockup into token-driven code |
| `redesign` | Upgrade an existing UI to premium quality without breaking it |
| `a11y-audit` | Audit against WCAG 2.2 AA/AAA with criterion-referenced fixes |
| `design-qa` | Set up/run QA gates (token lint, axe, contrast, visual regression) |
| `design-review` | Heuristic design critique across 6 weighted dimensions |
| `prototype` | Move an idea up the fidelity ladder with validation plans |
| `performance` | Optimize against Core Web Vitals (LCP, INP, CLS) |
| `governance` | Versioning, contribution, and deprecation policy |
| `migrate-design-system` | Bridge to/from Material, HIG, Fluent, Carbon, Ant, etc. |
| `figma-integration` | Keep Figma Variables and code tokens in sync |
| `ux-writing` | Write/review UI copy with a voice & tone system |

**`_ux-ui-shared/`** is the resource layer the skills reference (224 files): 14 DTCG token files, a 138-system design library, 19 validation scripts (`contrast.py`, `validate_tokens.py`, `axe_audit.mjs`, …), framework adapters, accessibility references, taste docs, and workflows.

> **Runtime path note:** skill files reference shared resources as `_ux-ui-shared/…`, matching the folder name. On disk these live at `.claude/skills/_ux-ui-shared/…`, so when running a kit script directly, prefix the real path — e.g. `python3 .claude/skills/_ux-ui-shared/scripts/contrast.py`.

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint (`eslint-config-next`) |
| `pnpm sync:tokens` | Regenerate `src/app/globals.css` from `design/variables-export.json` |
| `pnpm sync:tokens:check` | Verify the token count (1,806) without writing — CI guard |

---

## Configuration

| File | Purpose |
|---|---|
| `components.json` | shadcn/ui config — Default style, Neutral base, CSS variables, RSC, lucide icons, `@/` aliases |
| `next.config.ts` | Next.js config (defaults) |
| `tsconfig.json` | TypeScript config + path aliases (`@/components`, `@/lib`, `@/hooks`) |
| `eslint.config.mjs` | ESLint flat config extending `eslint-config-next` |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` |
| `pnpm-workspace.yaml` | pnpm settings (`allowBuilds` disabled for `sharp`, `unrs-resolver`) |
| `.npmrc` | `verify-deps-before-run=false` |

Path aliases (from `components.json` / `tsconfig.json`):

```
@/components/ui/*   → components/ui/*
@/lib/utils        → lib/utils.ts (cn helper)
@/hooks/*          → hooks/*
```

---

## Conventions and guardrails

- **Server Components by default.** Add `"use client"` only for state/effects/handlers, and keep the boundary low in the tree.
- **Semantic tokens only.** No hardcoded hex/rgb and no raw palette classes (`bg-white`, `text-gray-900`); use `bg-background`, `text-foreground`, etc.
- **Do not hand-edit generated files:** `src/app/globals.css` (run `pnpm sync:tokens`) or `components/ui/*` (re-run `shadcn add`).
- **`SidebarProvider`** wraps at the layout level, never inside a page.
- **Accessibility:** every `Dialog` has a `DialogTitle`; icon-only buttons have `aria-label`; use `next/link` for internal navigation.
- Keep the token snapshot at exactly **1,806** variables — the sync script enforces it.

For the full set of rules, recipes, and the Figma workflow, see [`CLAUDE.md`](./CLAUDE.md) and the `design-system` skill in `.claude/skills/`.
