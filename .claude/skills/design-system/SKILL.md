---
name: design-system
description: Use when building, generating, or modifying UI in a Next.js + Tailwind CSS v4 + shadcn/ui project. Provides semantic design tokens, component patterns, layout shells, and code-generation rules sourced from variables-export.json (1,806 tokens). Consult references/design-tokens.md for the full token tables.
---

# Design System — UI Generation Guide
> Instructions for building Next.js · Tailwind CSS v4 · shadcn/ui UIs.
> Read `references/design-tokens.md` for token values, component structure, and layout patterns.
> Implementing from Figma? Follow the Figma workflow in `CLAUDE.md §5` (`get_metadata` → `get_design_context` → generate); load `/figma-use` before `use_figma`. Tokens come from `design/variables-export.json` via `pnpm sync:tokens` — never hand-edit `globals.css`.

---

## 1. Before Writing Any Code

### Install shadcn/ui components first
Always install a component before using it. Output the command before any code:

```bash
pnpm dlx shadcn@latest add <component-name>

# Common installs
pnpm dlx shadcn@latest add button card input form dialog table tabs
pnpm dlx shadcn@latest add sidebar badge skeleton separator avatar
pnpm dlx shadcn@latest add dropdown-menu select tooltip sheet breadcrumb
pnpm dlx shadcn@latest add sonner          # toast notifications
```

### Dev server
```bash
pnpm dev          # start dev server
pnpm build        # verify production build
pnpm lint         # run ESLint
```

### Project init (new project only)
```bash
pnpm dlx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
cd my-app
pnpm dlx shadcn@latest init -t next       # choose: Default · Neutral · CSS variables: yes
```

---

## 2. File & Folder Conventions

```
src/
├── app/
│   ├── layout.tsx            ← ThemeProvider + global fonts
│   ├── globals.css           ← @theme, :root, .dark tokens (from references/design-tokens.md §3)
│   ├── page.tsx              ← home page (Server Component)
│   ├── (dashboard)/          ← route group — does not affect URL
│   │   ├── layout.tsx        ← SidebarProvider wraps all dashboard pages
│   │   └── dashboard/
│   │       └── page.tsx
│   └── (marketing)/
│       └── page.tsx
├── components/
│   ├── ui/                   ← shadcn/ui generated — NEVER edit manually
│   ├── layout/               ← app-sidebar.tsx, site-header.tsx, etc.
│   └── [feature]/            ← composed feature components
│       ├── feature-list.tsx
│       └── feature-form.tsx
└── lib/
    ├── utils.ts              ← cn() lives here
    └── [feature]/            ← server actions, data fetching helpers
```

**Import paths:**
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
```

---

## 3. Code Generation Rules

### Rule 1 — Tokens only, never raw values
```tsx
// CORRECT
<div className="bg-card text-card-foreground border rounded-lg p-6">
<p className="text-muted-foreground text-sm">Helper text</p>

// WRONG — hardcoded palette classes or hex
<div className="bg-white text-gray-900 border-gray-200 rounded-lg p-6">
<p className="text-[#6b7280] text-sm">Helper text</p>
```

### Rule 2 — Use `cn()` for conditional classes
```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "rounded-lg border p-4 transition-colors",
  isActive && "bg-accent text-accent-foreground",
  isError && "border-destructive",
  className
)}>
```

### Rule 3 — Handle all interactive states
Every interactive component must cover: default · hover · focus · disabled · loading.

```tsx
<Button disabled={isPending}>
  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {isPending ? "Saving…" : "Save changes"}
</Button>
```

### Rule 4 — Mobile-first, always
Start with the smallest layout, then expand with `md:` and `lg:` prefixes.

```tsx
// correct
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
<h1 className="text-2xl font-bold md:text-4xl">

// wrong — desktop-first
<div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
```

### Rule 5 — Keep `"use client"` boundaries minimal
Put `"use client"` as low in the component tree as possible. Fetch data in Server Components.

```tsx
// page.tsx — Server Component (default)
export default async function OrdersPage() {
  const orders = await fetchOrders()               // server-side data fetching
  return <OrdersTable initialData={orders} />      // pass to client component
}

// orders-table.tsx — Client Component
"use client"
export function OrdersTable({ initialData }) { ... }
```

### Rule 6 — Sidebar wraps at layout level
`SidebarProvider` must be in `layout.tsx`, never inside a `page.tsx`.

```tsx
// app/(dashboard)/layout.tsx
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  )
}
```

---

## 4. Component Recipes

### Dashboard Page with Stats + Table

```tsx
// app/(dashboard)/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      {/* KPI stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatsCard title="Revenue" value="$12,345" trend="+12%" />
        <StatsCard title="Orders" value="1,234" trend="+5%" />
        <StatsCard title="Customers" value="573" trend="+2%" />
        <StatsCard title="Growth" value="18.5%" trend="+1.2%" />
      </div>

      {/* Data table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}
```

### Form with Validation (Zod + react-hook-form)

```tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const schema = z.object({
  name:  z.string().min(2, "At least 2 characters"),
  email: z.string().email("Invalid email"),
})
type FormValues = z.infer<typeof schema>

export function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "" },
  })

  async function onSubmit(values: FormValues) {
    // call server action or API
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save changes
        </Button>
      </form>
    </Form>
  )
}
```

### Confirmation Dialog

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete item</DialogTitle>
      <DialogDescription>
        This action cannot be undone. The item will be permanently deleted.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive" onClick={handleDelete}>Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Sidebar App Shell

```tsx
// components/layout/app-sidebar.tsx
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarRail,
         SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
                  <Logo className="h-4 w-4" />
                </div>
                <span className="font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent><NavMain items={navItems} /></SidebarContent>
      <SidebarFooter><NavUser user={currentUser} /></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
```

### Empty State

```tsx
<div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
  <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-full">
    <Inbox className="text-muted-foreground h-8 w-8" />
  </div>
  <div>
    <h3 className="text-lg font-semibold">No results</h3>
    <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
  </div>
  <Button variant="outline" size="sm">Clear filters</Button>
</div>
```

### Toast Notifications

```tsx
// install: pnpm dlx shadcn@latest add sonner
// add to app/layout.tsx: <Toaster />
import { toast } from "sonner"

toast.success("Saved")
toast.error("Something went wrong")
toast.promise(saveData(), {
  loading: "Saving…",
  success: "Saved",
  error: "Failed to save",
})
```

---

## 5. Responsive Design

| Breakpoint | Prefix | Min Width |
|---|---|---|
| Mobile first (default) | — | 0px |
| Small | `sm:` | 640px |
| Medium | `md:` | 768px |
| Large | `lg:` | 1024px |
| Extra large | `xl:` | 1280px |
| 2X large | `2xl:` | 1536px |

**Rules:**
- Stack vertically on mobile, arrange in grid on `md:` and above
- Hide secondary content on mobile: `hidden md:block`
- Scale typography: `text-2xl md:text-4xl lg:text-5xl`

---

## 6. Server vs Client Components

| Use `"use client"` | Server Component (default) |
|---|---|
| `useState` / `useEffect` / `useRef` | `async` data fetching |
| Event handlers (`onClick`, `onChange`) | Static layout and typography |
| `useForm` (react-hook-form) | `<head>` metadata |
| shadcn/ui components with React context (Dialog, Sidebar) | Cards, Tables with static data |
| `useRouter` / `usePathname` | Server Actions |
| Theme toggle | Image optimization (`next/image`) |

**Data flow:**  
Fetch in Server Component → pass as props to Client Component. Never fetch inside a Client Component when a Server Component can do it.

---

## 7. Do's and Don'ts

### Do
- `<Button asChild><Link href="/path">Go</Link></Button>` — for links styled as buttons
- `cn()` to merge class names, especially for variant/conditional logic
- `<Skeleton>` for loading states on content areas (not spinners)
- `<Separator>` between sections in flex/grid layouts instead of borders
- `SidebarProvider` at `layout.tsx` level, never inside `page.tsx`
- `<Image>` from `next/image` for all `<img>` elements
- Server Actions for form submissions — avoid API route handlers for simple mutations

### Don't
- `className="text-[#3b82f6]"` — use `text-primary` or a semantic token
- Duplicate files in `components/ui/` — run `shadcn add` to regenerate
- `cursor-pointer` on buttons — Tailwind v4 default is `cursor-default`; use `--pointer` flag if needed
- `<a>` for internal navigation — use `<Link>` from `next/link`
- Data fetching inside Client Components when a Server Component can do it
- `useEffect` for data fetching — use `async` Server Components or SWR/React Query

---

## 8. Page Generation Checklist

Before finishing any page output, verify:

- [ ] Layout pattern chosen from `references/design-tokens.md` §12 (marketing / dashboard / centered)
- [ ] `shadcn add` command listed for every component used
- [ ] All colors use semantic tokens — no raw palette classes or hex
- [ ] Mobile-first responsive grid applied
- [ ] Loading, empty, and error states handled
- [ ] `"use client"` boundary placed as low as possible
- [ ] `DialogTitle` present in every `Dialog`
- [ ] `aria-label` on every icon-only button
- [ ] `alt` text on every `<Image>`
- [ ] Dark mode works — only token-based classes in `className`

---

## 9. Quick Component Reference

| Component | Install command | Import from |
|---|---|---|
| Button | `add button` | `@/components/ui/button` |
| Card | `add card` | `@/components/ui/card` |
| Input | `add input` | `@/components/ui/input` |
| Textarea | `add textarea` | `@/components/ui/textarea` |
| Form | `add form` | `@/components/ui/form` |
| Select | `add select` | `@/components/ui/select` |
| Checkbox | `add checkbox` | `@/components/ui/checkbox` |
| Switch | `add switch` | `@/components/ui/switch` |
| Dialog | `add dialog` | `@/components/ui/dialog` |
| Sheet | `add sheet` | `@/components/ui/sheet` |
| Table | `add table` | `@/components/ui/table` |
| Tabs | `add tabs` | `@/components/ui/tabs` |
| Sidebar | `add sidebar` | `@/components/ui/sidebar` |
| Badge | `add badge` | `@/components/ui/badge` |
| Skeleton | `add skeleton` | `@/components/ui/skeleton` |
| Separator | `add separator` | `@/components/ui/separator` |
| Avatar | `add avatar` | `@/components/ui/avatar` |
| Dropdown Menu | `add dropdown-menu` | `@/components/ui/dropdown-menu` |
| Navigation Menu | `add navigation-menu` | `@/components/ui/navigation-menu` |
| Breadcrumb | `add breadcrumb` | `@/components/ui/breadcrumb` |
| Tooltip | `add tooltip` | `@/components/ui/tooltip` |
| Popover | `add popover` | `@/components/ui/popover` |
| Calendar | `add calendar` | `@/components/ui/calendar` |
| Toast (Sonner) | `add sonner` | `sonner` |
| Progress | `add progress` | `@/components/ui/progress` |
| Accordion | `add accordion` | `@/components/ui/accordion` |
