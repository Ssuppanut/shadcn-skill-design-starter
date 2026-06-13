"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ComponentPreview({
  code,
  children,
  className,
}: {
  code: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Tabs defaultValue="preview" className={cn("w-full gap-4", className)}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <div className="flex min-h-[340px] w-full items-center justify-center rounded-lg border bg-background p-8">
          {children}
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={copy}
            aria-label="Copy code"
            className="absolute right-3 top-3 z-10 text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="text-primary" /> : <Copy />}
          </Button>
          <pre className="max-h-[340px] overflow-auto rounded-lg border bg-muted/50 p-4 text-sm">
            <code className="font-mono text-foreground">{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export function CopyableCommand({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border bg-muted/50 py-2 pl-4 pr-2">
      <code className="truncate font-mono text-sm text-foreground">
        {command}
      </code>
      <Button
        variant="ghost"
        size="icon"
        onClick={copy}
        aria-label="Copy command"
        className="size-8 shrink-0 text-muted-foreground hover:text-foreground"
      >
        {copied ? <Check className="text-primary" /> : <Copy />}
      </Button>
    </div>
  );
}
