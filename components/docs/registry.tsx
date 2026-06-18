import type { ComponentType } from "react";

import {
  AccordionDemo,
  AlertDemo,
  AlertDialogDemo,
  AspectRatioDemo,
  AvatarDemo,
  BadgeDemo,
  BreadcrumbDemo,
  ButtonDemo,
  ButtonGroupDemo,
  CalendarDemo,
  CardDemo,
  CarouselDemo,
  ChartDemo,
  CheckboxDemo,
  CollapsibleDemo,
  ComboboxDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DatePickerDemo,
  DialogDemo,
  DrawerDemo,
  DropdownMenuDemo,
  EmptyDemo,
  FieldDemo,
  FormDemo,
  HoverCardDemo,
  InputDemo,
  InputGroupDemo,
  InputOTPDemo,
  ItemDemo,
  KbdDemo,
  LabelDemo,
  MenubarDemo,
  NativeSelectDemo,
  NavigationMenuDemo,
  PaginationDemo,
  PopoverDemo,
  ProgressDemo,
  RadioGroupDemo,
  ScrollAreaDemo,
  SelectDemo,
  SeparatorDemo,
  SheetDemo,
  SidebarDemo,
  SkeletonDemo,
  SliderDemo,
  SpinnerDemo,
  SwitchDemo,
  TableDemo,
  TabsDemo,
  TextareaDemo,
  ToastDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
} from "@/components/docs/demos";

export type DocStatus = "stable" | "beta" | "new";

export type DocEntry = {
  slug: string;
  name: string;
  description: string;
  category: string;
  status: DocStatus;
  install: string;
  usage: string;
  Demo: ComponentType;
};

/**
 * Single source of truth for the documentation site, ordered to match the
 * page order of the `@shadcn_ui components` Figma file (top to bottom).
 * Add a component by appending one entry — the sidebar, the overview grid,
 * and the `/components/[slug]` route all derive from this array.
 */
export const registry: DocEntry[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add accordion",
    usage: `import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It follows WAI-ARIA.</AccordionContent>
  </AccordionItem>
</Accordion>`,
    Demo: AccordionDemo,
  },
  {
    slug: "alert",
    name: "Alert",
    description: "A callout for user attention, with a default and destructive style.",
    category: "Feedback",
    status: "stable",
    install: "pnpm dlx shadcn@latest add alert",
    usage: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert>
  <Check />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components using the CLI.</AlertDescription>
</Alert>`,
    Demo: AlertDemo,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add alert-dialog",
    usage: `import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter,
  AlertDialogCancel, AlertDialogAction,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="outline">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    Demo: AlertDialogDemo,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Constrains its content to a desired ratio across viewport sizes.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add aspect-ratio",
    usage: `import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <img src="/cover.jpg" alt="" className="size-full rounded-lg object-cover" />
</AspectRatio>`,
    Demo: AspectRatioDemo,
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "An image element with a text fallback for representing a user.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add avatar",
    usage: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
    Demo: AvatarDemo,
  },
  {
    slug: "badge",
    name: "Badge",
    description: "A small label for statuses, counts, and categories.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add badge",
    usage: `import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>`,
    Demo: BadgeDemo,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add breadcrumb",
    usage: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    Demo: BreadcrumbDemo,
  },
  {
    slug: "button",
    name: "Button",
    description:
      "Displays a button or a component that looks like one, with variants and sizes.",
    category: "Buttons",
    status: "stable",
    install: "pnpm dlx shadcn@latest add button",
    usage: `import { Button } from "@/components/ui/button"

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="icon" aria-label="Notifications"><Bell /></Button>`,
    Demo: ButtonDemo,
  },
  {
    slug: "button-group",
    name: "Button Group",
    description: "Groups related buttons together with joined, segmented styling.",
    category: "Buttons",
    status: "new",
    install: "pnpm dlx shadcn@latest add button-group",
    usage: `import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

<ButtonGroup>
  <Button variant="outline">Previous</Button>
  <Button variant="outline">Next</Button>
</ButtonGroup>`,
    Demo: ButtonGroupDemo,
  },
  {
    slug: "calendar",
    name: "Calendar",
    description: "A date field component for selecting dates, built on React DayPicker.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add calendar",
    usage: `import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />`,
    Demo: CalendarDemo,
  },
  {
    slug: "card",
    name: "Card",
    description: "A container that groups related content and actions.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add card",
    usage: `import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Upgrade your plan</CardTitle>
    <CardDescription>Unlock advanced analytics.</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter><Button>Upgrade</Button></CardFooter>
</Card>`,
    Demo: CardDemo,
  },
  {
    slug: "carousel",
    name: "Carousel",
    description: "A slideshow for cycling through elements, built on Embla Carousel.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add carousel",
    usage: `import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel"

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>…</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    Demo: CarouselDemo,
  },
  {
    slug: "chart",
    name: "Chart",
    description: "Composable charts built on Recharts, themed with chart color tokens.",
    category: "Data",
    status: "stable",
    install: "pnpm dlx shadcn@latest add chart",
    usage: `import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig,
} from "@/components/ui/chart"

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies ChartConfig

<ChartContainer config={config} className="h-[260px] w-full">
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>`,
    Demo: ChartDemo,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "A control that allows toggling one or more options on a list.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add checkbox",
    usage: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-3">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
    Demo: CheckboxDemo,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "An interactive component that expands and collapses a panel of content.",
    category: "Display",
    status: "stable",
    install: "pnpm dlx shadcn@latest add collapsible",
    usage: `import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>`,
    Demo: CollapsibleDemo,
  },
  {
    slug: "combobox",
    name: "Combobox",
    description:
      "An autocomplete input and command palette, composed from Popover and Command.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add popover command",
    usage: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command"

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" role="combobox">{label}</Button>
  </PopoverTrigger>
  <PopoverContent className="p-0">
    <Command>
      <CommandInput placeholder="Search…" />
      <CommandList>{/* CommandItem list */}</CommandList>
    </Command>
  </PopoverContent>
</Popover>`,
    Demo: ComboboxDemo,
  },
  {
    slug: "command",
    name: "Command",
    description: "A fast, composable command menu and palette, powered by cmdk.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add command",
    usage: `import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut,
} from "@/components/ui/command"

<Command>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    Demo: CommandDemo,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    description: "A menu triggered by right-clicking (or long-pressing) an element.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add context-menu",
    usage: `import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuSeparator, ContextMenuCheckboxItem,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    Demo: ContextMenuDemo,
  },
  {
    slug: "data-table",
    name: "Data Table",
    description:
      "A pattern for filterable, structured tables built on the Table primitives.",
    category: "Data",
    status: "stable",
    install: "pnpm dlx shadcn@latest add table",
    usage: `import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"

<Input placeholder="Filter…" />
<Table>
  <TableHeader><TableRow><TableHead>Invoice</TableHead></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>INV001</TableCell></TableRow></TableBody>
</Table>`,
    Demo: DataTableDemo,
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    description: "A date selection control composed from Popover and Calendar.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add popover calendar",
    usage: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">{date ? format(date) : "Pick a date"}</Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`,
    Demo: DatePickerDemo,
  },
  {
    slug: "dialog",
    name: "Dialog",
    description:
      "A modal window overlaid on the page, for content that requires attention or input.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add dialog",
    usage: `import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild><Button variant="outline">Edit</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes here.</DialogDescription>
    </DialogHeader>
    <DialogFooter><Button>Save</Button></DialogFooter>
  </DialogContent>
</Dialog>`,
    Demo: DialogDemo,
  },
  {
    slug: "drawer",
    name: "Drawer",
    description: "A panel that slides in from the edge of the screen, built on Vaul.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add drawer",
    usage: `import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger asChild><Button variant="outline">Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader><DrawerTitle>Move goal</DrawerTitle></DrawerHeader>
    <DrawerFooter><Button>Submit</Button></DrawerFooter>
  </DrawerContent>
</Drawer>`,
    Demo: DrawerDemo,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description:
      "A menu of actions or options triggered by a button, with groups and shortcuts.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add dropdown-menu",
    usage: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuItem>Profile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    Demo: DropdownMenuDemo,
  },
  {
    slug: "empty",
    name: "Empty",
    description: "An empty-state placeholder with media, title, description, and actions.",
    category: "Feedback",
    status: "new",
    install: "pnpm dlx shadcn@latest add empty",
    usage: `import {
  Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>New messages will appear here.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent><Button size="sm">Refresh</Button></EmptyContent>
</Empty>`,
    Demo: EmptyDemo,
  },
  {
    slug: "field",
    name: "Field",
    description:
      "A composable form-field wrapper pairing labels, controls, and descriptions.",
    category: "Forms",
    status: "new",
    install: "pnpm dlx shadcn@latest add field",
    usage: `import {
  Field, FieldGroup, FieldLabel, FieldDescription,
} from "@/components/ui/field"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="name">Display name</FieldLabel>
    <Input id="name" placeholder="Jane Doe" />
    <FieldDescription>This is your public name.</FieldDescription>
  </Field>
</FieldGroup>`,
    Demo: FieldDemo,
  },
  {
    slug: "form",
    name: "Form",
    description:
      "Accessible form primitives wiring react-hook-form and Zod validation to labels, controls, and messages.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add form",
    usage: `import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"

const schema = z.object({ username: z.string().min(2) })

const form = useForm({ resolver: zodResolver(schema), defaultValues: { username: "" } })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>`,
    Demo: FormDemo,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    description: "Rich preview content shown when hovering over a trigger element.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add hover-card",
    usage: `import {
  HoverCard, HoverCardTrigger, HoverCardContent,
} from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@shadcn</Button></HoverCardTrigger>
  <HoverCardContent>The creator of shadcn/ui.</HoverCardContent>
</HoverCard>`,
    Demo: HoverCardDemo,
  },
  {
    slug: "input",
    name: "Input",
    description: "A form input field paired with a label and helper text.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add input label",
    usage: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="jane@example.com" />
</div>`,
    Demo: InputDemo,
  },
  {
    slug: "input-group",
    name: "Input Group",
    description: "An input with attached addons, icons, buttons, or text on either side.",
    category: "Forms",
    status: "new",
    install: "pnpm dlx shadcn@latest add input-group",
    usage: `import {
  InputGroup, InputGroupAddon, InputGroupInput,
} from "@/components/ui/input-group"

<InputGroup>
  <InputGroupAddon><Search /></InputGroupAddon>
  <InputGroupInput placeholder="Search…" />
</InputGroup>`,
    Demo: InputGroupDemo,
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    description: "An accessible one-time-password input with separated slots.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add input-otp",
    usage: `import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    Demo: InputOTPDemo,
  },
  {
    slug: "item",
    name: "Item",
    description:
      "A flexible row primitive with media, content, and actions for lists and menus.",
    category: "Display",
    status: "new",
    install: "pnpm dlx shadcn@latest add item",
    usage: `import {
  Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions,
} from "@/components/ui/item"

<Item variant="outline">
  <ItemMedia variant="icon"><Inbox /></ItemMedia>
  <ItemContent>
    <ItemTitle>Inbox</ItemTitle>
    <ItemDescription>12 new messages.</ItemDescription>
  </ItemContent>
  <ItemActions><Button size="sm" variant="outline">View</Button></ItemActions>
</Item>`,
    Demo: ItemDemo,
  },
  {
    slug: "kbd",
    name: "Kbd",
    description: "Renders keyboard keys and shortcut combinations.",
    category: "Display",
    status: "new",
    install: "pnpm dlx shadcn@latest add kbd",
    usage: `import { Kbd, KbdGroup } from "@/components/ui/kbd"

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`,
    Demo: KbdDemo,
  },
  {
    slug: "label",
    name: "Label",
    description: "An accessible label associated with a form control.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add label",
    usage: `import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center gap-3">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
    Demo: LabelDemo,
  },
  {
    slug: "menubar",
    name: "Menubar",
    description: "A persistent desktop-style menu bar with menus, items, and shortcuts.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add menubar",
    usage: `import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent,
  MenubarItem, MenubarSeparator, MenubarShortcut,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    Demo: MenubarDemo,
  },
  {
    slug: "native-select",
    name: "Native Select",
    description:
      "A native HTML select styled with the design tokens — lightweight, no JS overlay.",
    category: "Forms",
    status: "new",
    install: "// no install — a styled native <select>",
    usage: `import { Label } from "@/components/ui/label"

<Label htmlFor="plan">Plan</Label>
<select
  id="plan"
  className="border-input bg-transparent focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
>
  <option value="free">Free</option>
  <option value="pro">Pro</option>
</select>`,
    Demo: NativeSelectDemo,
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    description: "A responsive site navigation with dropdown panels of links.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add navigation-menu",
    usage: `import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>{/* links */}</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    Demo: NavigationMenuDemo,
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "Page navigation with previous/next controls and page links.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add pagination",
    usage: `import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
    Demo: PaginationDemo,
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Rich floating content anchored to a trigger, for forms and details.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add popover",
    usage: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent className="w-80">Place content here.</PopoverContent>
</Popover>`,
    Demo: PopoverDemo,
  },
  {
    slug: "progress",
    name: "Progress",
    description: "A bar that communicates the completion progress of a task.",
    category: "Feedback",
    status: "stable",
    install: "pnpm dlx shadcn@latest add progress",
    usage: `import { Progress } from "@/components/ui/progress"

<Progress value={66} />`,
    Demo: ProgressDemo,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "A set of checkable buttons where only one can be selected at a time.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add radio-group",
    usage: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`,
    Demo: RadioGroupDemo,
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    description: "A scrollable region with cross-browser, styled custom scrollbars.",
    category: "Layout",
    status: "stable",
    install: "pnpm dlx shadcn@latest add scroll-area",
    usage: `import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-56 w-48 rounded-md border">
  <div className="p-4">{/* long content */}</div>
</ScrollArea>`,
    Demo: ScrollAreaDemo,
  },
  {
    slug: "select",
    name: "Select",
    description: "A control for choosing a single value from a list of options.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add select",
    usage: `import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem,
} from "@/components/ui/select"

<Select>
  <SelectTrigger><SelectValue placeholder="Select a fruit" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`,
    Demo: SelectDemo,
  },
  {
    slug: "separator",
    name: "Separator",
    description: "A visual or semantic divider between content, horizontal or vertical.",
    category: "Layout",
    status: "stable",
    install: "pnpm dlx shadcn@latest add separator",
    usage: `import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`,
    Demo: SeparatorDemo,
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "A dialog that slides in from an edge of the screen for complementary content.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add sheet",
    usage: `import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader><SheetTitle>Edit profile</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`,
    Demo: SheetDemo,
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    description:
      "A composable, collapsible application sidebar — the shell that wraps this site.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add sidebar",
    usage: `// SidebarProvider wraps at the layout level, never inside a page.
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"

<SidebarProvider>
  <AppSidebar />
  <SidebarInset>{children}</SidebarInset>
</SidebarProvider>`,
    Demo: SidebarDemo,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "A placeholder to show while content is loading.",
    category: "Feedback",
    status: "stable",
    install: "pnpm dlx shadcn@latest add skeleton",
    usage: `import { Skeleton } from "@/components/ui/skeleton"

<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="grid gap-2">
    <Skeleton className="h-4 w-[220px]" />
    <Skeleton className="h-4 w-[160px]" />
  </div>
</div>`,
    Demo: SkeletonDemo,
  },
  {
    slug: "slider",
    name: "Slider",
    description: "An input for selecting a value or range by dragging along a track.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add slider",
    usage: `import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`,
    Demo: SliderDemo,
  },
  {
    slug: "sonner",
    name: "Sonner",
    description: "An opinionated toast notification system, powered by Sonner.",
    category: "Feedback",
    status: "stable",
    install: "pnpm dlx shadcn@latest add sonner",
    usage: `// 1. Mount <Toaster /> once in app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

// 2. Call toast() anywhere
import { toast } from "sonner"

toast.success("Profile saved")
toast.error("Could not save", { description: "Please try again." })`,
    Demo: ToastDemo,
  },
  {
    slug: "spinner",
    name: "Spinner",
    description: "An indeterminate loading indicator for buttons and content areas.",
    category: "Feedback",
    status: "new",
    install: "pnpm dlx shadcn@latest add spinner",
    usage: `import { Spinner } from "@/components/ui/spinner"

<Spinner />
<Button disabled><Spinner /> Loading…</Button>`,
    Demo: SpinnerDemo,
  },
  {
    slug: "switch",
    name: "Switch",
    description: "A control that toggles between an on and off state.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add switch",
    usage: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-3">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane mode</Label>
</div>`,
    Demo: SwitchDemo,
  },
  {
    slug: "table",
    name: "Table",
    description: "A responsive, semantic table with styled header, body, and caption.",
    category: "Data",
    status: "stable",
    install: "pnpm dlx shadcn@latest add table",
    usage: `import {
  Table, TableCaption, TableHeader, TableBody,
  TableRow, TableHead, TableCell,
} from "@/components/ui/table"

<Table>
  <TableHeader><TableRow><TableHead>Invoice</TableHead></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>INV001</TableCell></TableRow></TableBody>
</Table>`,
    Demo: TableDemo,
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "A set of layered sections of content displayed one panel at a time.",
    category: "Navigation",
    status: "stable",
    install: "pnpm dlx shadcn@latest add tabs",
    usage: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">…</TabsContent>
  <TabsContent value="password">…</TabsContent>
</Tabs>`,
    Demo: TabsDemo,
  },
  {
    slug: "textarea",
    name: "Textarea",
    description: "A multi-line text input for longer-form content.",
    category: "Forms",
    status: "stable",
    install: "pnpm dlx shadcn@latest add textarea",
    usage: `import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

<Label htmlFor="message">Your message</Label>
<Textarea id="message" placeholder="Type your message here." />`,
    Demo: TextareaDemo,
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    category: "Buttons",
    status: "stable",
    install: "pnpm dlx shadcn@latest add toggle",
    usage: `import { Toggle } from "@/components/ui/toggle"

<Toggle aria-label="Toggle bold"><Bold /></Toggle>`,
    Demo: ToggleDemo,
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    description: "A set of two-state buttons that can be toggled on or off together.",
    category: "Buttons",
    status: "stable",
    install: "pnpm dlx shadcn@latest add toggle-group",
    usage: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem>
</ToggleGroup>`,
    Demo: ToggleGroupDemo,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "A popup that displays information related to an element on hover.",
    category: "Overlay",
    status: "stable",
    install: "pnpm dlx shadcn@latest add tooltip",
    usage: `import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
    <TooltipContent>Send an email</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    Demo: TooltipDemo,
  },
];

export const categories = [
  "Buttons",
  "Forms",
  "Display",
  "Data",
  "Navigation",
  "Overlay",
  "Feedback",
  "Layout",
] as const;

export function getEntry(slug: string): DocEntry | undefined {
  return registry.find((entry) => entry.slug === slug);
}

export function entriesByCategory(): { category: string; items: DocEntry[] }[] {
  return categories
    .map((category) => ({
      category,
      items: registry.filter((entry) => entry.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
