# Figma Component Audit

**Date:** 2026-05-30
**Figma file:** `@shadcn_ui components` (`EMGolA3PL92mos3EmmJSlt`)
**Method:** Figma REST API (`GET /v1/files/:key?depth=1`) — each component lives on its own canvas/page (`↳ Name`). The published `/components` & `/component_sets` endpoints return 0 (file is not published as a library), so the page tree is the source of truth.
**Audited against:** `SKILL.md §9` (Quick Component Reference, 26 entries) and the docs registry we built (`components/docs/registry.tsx`, 13 entries).

---

## Source counts

| Source | Count |
|---|---|
| Figma component pages (`↳ …`) | **55** components (+16 blocks/charts/icon sets) |
| `SKILL.md §9` quick reference | 26 |
| Docs registry (live doc pages) | 13 |
| `components/ui/*` installed | 20 |

> Figma also ships non-component pages excluded from the component count: Featured, Login, Signup, OTP, Sidebar (block), Calendar (block), charts (Area/Bar/Line/Pie/Radar/Radial/Tooltip), web landing page, Lucide Icons, Tabler Icons.

---

## A. `SKILL.md §9` vs Figma file — 25 / 26 present

| SKILL.md entry | In Figma? | Figma page |
|---|:---:|---|
| Button | ✅ | Button |
| Card | ✅ | Card |
| Input | ✅ | Input |
| Textarea | ✅ | Textarea |
| **Form** | ❌ | — |
| Select | ✅ | Select |
| Checkbox | ✅ | Checkbox |
| Switch | ✅ | Switch |
| Dialog | ✅ | Dialog |
| Sheet | ✅ | Sheet |
| Table | ✅ | Table |
| Tabs | ✅ | Tabs |
| Sidebar | ✅ | Sidebar |
| Badge | ✅ | Badge |
| Skeleton | ✅ | Skeleton |
| Separator | ✅ | Separator |
| Avatar | ✅ | Avatar |
| Dropdown Menu | ✅ | Dropdown Menu |
| Navigation Menu | ✅ | Navigation Menu |
| Breadcrumb | ✅ | Breadcrumb |
| Tooltip | ✅ | Tooltip |
| Popover | ✅ | Popover |
| Calendar | ✅ | Calendar |
| Toast (Sonner) | ✅ | Sonner |
| Progress | ✅ | Progress |
| Accordion | ✅ | Accordion |

**Only miss: `Form`.** This is expected and correct — shadcn's `Form` is a code-only abstraction over `react-hook-form` + Zod with no visual counterpart, so it legitimately has no Figma page. No action needed beyond a footnote.

---

## B. Docs registry — 13 / 13 valid, 1 inconsistency

All 13 documented components exist in Figma ✅
(Button, Input, Switch, Checkbox, Card, Badge, Avatar, Accordion, Tabs, Alert, Skeleton, Tooltip, Sonner)

⚠️ **`Alert` is documented in the registry and exists in Figma, but is missing from `SKILL.md §9`.** The skill reference table should add an `Alert` row (`add alert` · `@/components/ui/alert`).

---

## C. `SKILL.md §9` components not yet given a doc page (14)

These are referenced in the skill but have no entry in our docs registry:

**Already installed in `components/ui/` (just need a registry entry + demo):**
`Breadcrumb`, `Dropdown Menu`, `Separator`, `Sheet`, `Sidebar` — (Label also installed)

**Not installed yet (need `shadcn add` first):**
`Textarea`, `Select`, `Dialog`, `Table`, `Navigation Menu`, `Popover`, `Calendar`, `Progress`, `Form`

> `components/ui/*` currently installed (20): accordion, alert, avatar, badge, breadcrumb, button, card, checkbox, dropdown-menu, input, label, scroll-area, separator, sheet, sidebar, skeleton, sonner, switch, tabs, tooltip.
> Installed but undocumented (7): breadcrumb, dropdown-menu, label, scroll-area, separator, sheet, sidebar.

---

## D. Figma components NOT covered by `SKILL.md §9` (30) — skill coverage gap

The Figma file is substantially richer than the skill's quick reference. Missing from `SKILL.md §9`:

| Group | Components |
|---|---|
| Overlays / menus | Alert Dialog, Context Menu, Hover Card, Menubar, Drawer, Command |
| Inputs / forms | Label, Textarea*, Radio Group, Slider, Toggle, Toggle Group, Input OTP, Input Group, Native Select, Combobox, Field, Date Picker |
| Data / display | Data Table, Pagination, Carousel, Chart, Aspect Ratio, Scroll-area, Collapsible, Empty, Item, KBD, Spinner |
| Layout | Button Group |
| Feedback | **Alert** (see §B) |

\* Textarea *is* in SKILL.md; listed here only where the same gap overlaps.

---

## Data-quality notes (in the Figma file itself)

- `↳ Aspect Radio` → typo for **Aspect Ratio**
- `↳ Contex Menu` → typo for **Context Menu**
- Duplicate page names exist (Sidebar, Calendar, Tooltip appear both as a component page and as a block/chart example) — disambiguate by section when mapping Code Connect.

---

## Recommendations (priority order)

1. **Fix `SKILL.md §9`:** add the missing **Alert** row (it's built, documented, and in Figma).
2. **Document the 5 already-installed components** (Breadcrumb, Dropdown Menu, Separator, Sheet, Sidebar) — they're shipping in the app shell but have no doc page. Low effort: append registry entries + demos.
3. **Decide skill scope (gap D):** the Figma file has 55 components vs SKILL.md's 26. If the skill is meant to mirror the design source, expand §9 toward the high-value missing ones (Alert Dialog, Select, Dialog, Radio Group, Slider, Label, Textarea, Command, Data Table).
4. **Keep the `Form` footnote:** mark it explicitly as "code-only, no Figma page" so future audits don't flag it.
