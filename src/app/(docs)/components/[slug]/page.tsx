import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ComponentPreview, CopyableCommand } from "@/components/docs/component-preview";
import { getEntry, registry } from "@/components/docs/registry";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return registry.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return {
    title: `${entry.name} — Design System`,
    description: entry.description,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const Demo = entry.Demo;
  const index = registry.findIndex((e) => e.slug === slug);
  const prev = index > 0 ? registry[index - 1] : undefined;
  const next = index < registry.length - 1 ? registry[index + 1] : undefined;

  return (
    <article className="mx-auto w-full max-w-4xl flex-1 px-6 py-10 md:py-14">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{entry.name}</h1>
          <Badge
            variant={entry.status === "stable" ? "secondary" : "default"}
            className="capitalize"
          >
            {entry.status}
          </Badge>
        </div>
        <p className="text-balance text-lg text-muted-foreground">
          {entry.description}
        </p>
      </header>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">Installation</h2>
        <CopyableCommand command={entry.install} />
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">Usage</h2>
        <ComponentPreview code={entry.usage}>
          <Demo />
        </ComponentPreview>
      </section>

      <Separator className="my-10" />

      <nav className="flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/components/${prev.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/components/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {next.name}
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
