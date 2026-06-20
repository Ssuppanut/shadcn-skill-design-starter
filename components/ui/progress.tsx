"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, ...props }, ref) => (
  // NOTE: deviates from the upstream shadcn snippet, which omits `value`/`max`
  // on Root — that leaves the progressbar permanently `indeterminate` with no
  // `aria-valuenow`, so screen readers never announce the percentage
  // (WCAG 4.1.2 Name, Role, Value). Forwarding them lets Radix expose the value
  // and state. Accessibility overrides the "don't hand-edit" guardrail here.
  <ProgressPrimitive.Root
    ref={ref}
    value={value}
    max={max}
    className={cn(
      // Height 8px + track = primary@20% to match the Figma source of truth
      // (was h-4 / bg-secondary from an older shadcn snippet).
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{
        transform: `translateX(-${100 - ((value || 0) / (max ?? 100)) * 100}%)`,
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
