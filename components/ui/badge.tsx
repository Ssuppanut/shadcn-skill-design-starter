import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Matches the Figma source of truth (node 73:3479): rounded-lg corners and
// font-medium (was rounded-full / font-semibold from an older shadcn snippet).
const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Figma uses light text on the red fill, but there is no
        // `--destructive-foreground` token (the old `text-destructive-foreground`
        // resolved to near-black → 4.10:1, failing WCAG). `text-background`
        // adapts per theme — white on the dark-red light fill (4.83:1) and
        // near-black on the lighter-red dark fill (~6.5:1) — passing both and
        // matching the Figma look in light mode.
        destructive:
          "border-transparent bg-destructive text-background hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
