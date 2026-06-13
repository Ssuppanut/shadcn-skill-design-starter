import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { entriesByCategory, registry } from "@/components/docs/registry";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OverviewPage() {
  const groups = entriesByCategory();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 md:py-14">
      {/* Hero */}
      <section className="flex flex-col gap-4">
        <Badge variant="secondary" className="w-fit gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />
          Figma → tokens → Tailwind v4 → shadcn/ui
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Component documentation
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          A living catalogue of the components in this project. Every surface is
          built from the {registry.length} documented primitives below, themed
          entirely with semantic design tokens — so light and dark mode are
          automatic.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge variant="outline">{registry.length} components</Badge>
          <Badge variant="outline">1,806 design tokens</Badge>
          <Badge variant="outline">35 semantic colors</Badge>
        </div>
      </section>

      {/* Catalogue */}
      <div className="mt-12 flex flex-col gap-10">
        {groups.map((group) => (
          <section key={group.category} className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold tracking-tight">
                {group.category}
              </h2>
              <span className="text-sm text-muted-foreground">
                {group.items.length} component
                {group.items.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/components/${item.slug}`}
                  className="group rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Card className="h-full transition-colors hover:border-foreground/20 hover:bg-accent/40">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base">{item.name}</CardTitle>
                        {item.status !== "stable" && (
                          <Badge variant="secondary" className="capitalize">
                            {item.status}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="line-clamp-2">
                        {item.description}
                      </CardDescription>
                      <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                        View
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
