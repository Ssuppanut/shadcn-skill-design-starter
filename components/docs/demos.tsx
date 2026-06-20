"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Bell,
  Bold,
  CalendarDays,
  Check,
  ChevronRight,
  ChevronsUpDown,
  CircleAlert,
  Home,
  Italic,
  Inbox,
  Loader2,
  Mail,
  Search,
  Settings,
  Smile,
  Underline,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export function ButtonDemo() {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="icon" aria-label="Notifications">
        <Bell />
      </Button>
      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1500);
        }}
      >
        {loading && <Loader2 className="animate-spin" />}
        {loading ? "Saving…" : "Click to load"}
      </Button>
    </div>
  );
}

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge className="gap-1">
        <Check className="size-3" /> Verified
      </Badge>
    </div>
  );
}

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>Upgrade your plan</CardTitle>
          <Badge variant="secondary">Pro</Badge>
        </div>
        <CardDescription>Unlock advanced analytics and more seats.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        You are currently on the Free plan. Upgrade to remove limits and invite
        your team.
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full">Upgrade</Button>
        <Button variant="outline" className="w-full">
          Compare
        </Button>
      </CardFooter>
    </Card>
  );
}

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="demo-email">Email</Label>
      <Input id="demo-email" type="email" placeholder="jane@example.com" />
      <p className="text-sm text-muted-foreground">We&apos;ll never share your email.</p>
      <div className="mt-2 grid gap-2">
        <Label htmlFor="demo-disabled">Disabled</Label>
        <Input id="demo-disabled" placeholder="Disabled" disabled />
      </div>
    </div>
  );
}

export function SwitchDemo() {
  const [on, setOn] = React.useState(true);
  return (
    <div className="flex items-center gap-3">
      <Switch id="demo-airplane" checked={on} onCheckedChange={setOn} />
      <Label htmlFor="demo-airplane">
        Airplane mode is {on ? "on" : "off"}
      </Label>
    </div>
  );
}

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Checkbox id="demo-terms" defaultChecked />
        <Label htmlFor="demo-terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="demo-news" />
        <Label htmlFor="demo-news">Subscribe to the newsletter</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="demo-off" disabled />
        <Label htmlFor="demo-off" className="text-muted-foreground">
          Disabled option
        </Label>
      </div>
    </div>
  );
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled with tokens?</AccordionTrigger>
        <AccordionContent>
          Yes. Every surface uses semantic tokens, so dark mode is automatic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I animate it?</AccordionTrigger>
        <AccordionContent>
          Yes. It is animated by default via tw-animate-css.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
}

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AlertDemo() {
  return (
    <div className="grid w-full gap-4">
      <Alert>
        <Check />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
  );
}

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-[220px]" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
    </div>
  );
}

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Mail /> Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Send an email</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Profile saved")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Could not save", { description: "Please try again." })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise((r) => setTimeout(r, 1500)), {
            loading: "Saving…",
            success: "Saved",
            error: "Failed",
          })
        }
      >
        Promise
      </Button>
      <span className="sr-only">
        <ChevronRight />
      </span>
    </div>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function AspectRatioDemo() {
  return (
    <div className="w-[320px]">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center rounded-lg border bg-muted"
      >
        <span className="text-sm font-medium text-foreground">16 / 9</span>
      </AspectRatio>
    </div>
  );
}

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Previous</Button>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  );
}

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
    />
  );
}

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 264, mobile: 140 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-[260px] w-full max-w-xl">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex w-full max-w-md flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select framework"
          className="w-[240px] justify-between"
        >
          {value
            ? frameworks.find((f) => f.value === value)?.label
            : "Select framework…"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search framework…" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(cur) => {
                    setValue(cur === value ? "" : cur);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(value === f.value ? "opacity-100" : "opacity-0")}
                  />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function CommandDemo() {
  return (
    <Command className="max-w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarDays />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

const invoices = [
  { invoice: "INV001", status: "Paid", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", amount: "$350.00" },
];

export function DataTableDemo() {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-2 pb-3">
        <Input placeholder="Filter invoices…" className="max-w-xs" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell className="font-medium">{row.invoice}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === "Paid"
                        ? "secondary"
                        : row.status === "Unpaid"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] justify-start text-left font-normal"
        >
          <CalendarDays />
          {date ? (
            date.toLocaleDateString()
          ) : (
            <span className="text-muted-foreground">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="dlg-name">Name</Label>
          <Input id="dlg-name" defaultValue="Jane Doe" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 text-center text-sm text-muted-foreground">
            Drag the handle or use the buttons below.
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function EmptyDemo() {
  return (
    <Empty className="max-w-md rounded-lg border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New messages will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" variant="outline">
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  );
}

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(32, { message: "Username must be at most 32 characters." }),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: { username: "" },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    toast.success(`Submitted as @${values.username}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function FieldDemo() {
  return (
    <div className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-name">Display name</FieldLabel>
          <Input id="field-name" placeholder="Jane Doe" />
          <FieldDescription>This is your public display name.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  );
}

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              The creator of shadcn/ui — components you copy into your app.
            </p>
            <div className="flex items-center gap-1 pt-1 text-xs text-muted-foreground">
              <CalendarDays className="size-3" /> Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search…" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
        <InputGroupInput placeholder="you@example.com" type="email" />
      </InputGroup>
    </div>
  );
}

export function InputOTPDemo() {
  const [value, setValue] = React.useState("");
  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={setValue}
      aria-label="One-time password"
    >
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
    </InputOTP>
  );
}

export function ItemDemo() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Inbox />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Inbox</ItemTitle>
          <ItemDescription>12 new messages waiting for you.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            View
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-sm">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground">Command menu</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground">Toggle sidebar</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>B</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}

export function LabelDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="label-demo" defaultChecked />
      <Label htmlFor="label-demo">Accept terms and conditions</Label>
    </div>
  );
}

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Print… <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Reload</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export function NativeSelectDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="native-plan">Plan</Label>
      <select
        id="native-plan"
        defaultValue=""
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
      >
        <option value="" disabled>
          Select a plan
        </option>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
        <option value="team">Team</option>
      </select>
    </div>
  );
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-1 p-2">
              <li>
                <NavigationMenuLink className="block rounded-md p-3 hover:bg-accent">
                  <div className="text-sm font-medium">Introduction</div>
                  <p className="text-sm text-muted-foreground">
                    Re-usable components built with Radix UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="block rounded-md p-3 hover:bg-accent">
                  <div className="text-sm font-medium">Installation</div>
                  <p className="text-sm text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-3">
          <div className="space-y-1">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid grid-cols-3 items-center gap-3">
            <Label htmlFor="popover-width">Width</Label>
            <Input id="popover-width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-3">
            <Label htmlFor="popover-height">Height</Label>
            <Input id="popover-height" defaultValue="24px" className="col-span-2 h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ProgressDemo() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Progress value={33} aria-label="Storage used" />
      <Progress value={66} aria-label="Upload progress" />
      <Progress value={100} aria-label="Profile completion" />
    </div>
  );
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="grid gap-3">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="rg-1" />
        <Label htmlFor="rg-1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="rg-2" />
        <Label htmlFor="rg-2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="rg-3" />
        <Label htmlFor="rg-3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-full max-w-xs rounded-md border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium leading-none">Releases</h4>
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="border-b py-2 font-mono text-sm last:border-0"
          >
            v1.2.0-beta.{24 - i}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[220px]" aria-label="Select a fruit">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SeparatorDemo() {
  return (
    <div className="w-full max-w-xs">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 px-4">
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Jane Doe" />
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SidebarDemo() {
  return (
    <SidebarProvider
      className="min-h-[360px] items-stretch overflow-hidden rounded-lg border"
      style={{ "--sidebar-width": "14rem" } as React.CSSProperties}
    >
      <Sidebar collapsible="none" className="border-r">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Home className="size-4" />
            </div>
            <span className="text-sm font-semibold">Acme Inc.</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home /> Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox /> Inbox
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings /> Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex flex-1 items-center justify-center p-6">
        <p className="max-w-[200px] text-center text-sm text-muted-foreground">
          The full collapsible sidebar wraps this entire documentation site.
        </p>
      </main>
    </SidebarProvider>
  );
}

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
      className="w-full max-w-sm"
    />
  );
}

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-6" />
      <Button disabled>
        <Spinner /> Loading…
      </Button>
    </div>
  );
}

const tableRows = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
];

export function TableDemo() {
  return (
    <Table className="w-full max-w-2xl">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}

export function ToggleDemo() {
  return (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <Italic />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline />
      </Toggle>
    </div>
  );
}

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
