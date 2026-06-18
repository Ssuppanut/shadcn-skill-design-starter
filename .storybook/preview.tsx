import * as React from "react";
import type { Decorator, Preview } from "@storybook/nextjs-vite";

// Pull in the generated Tailwind v4 theme + design tokens (light + .dark overrides).
// Processed by Vite through the project's @tailwindcss/postcss config.
import "../src/app/globals.css";

/**
 * Surfaces the design-system tokens and mirrors the theme onto <html> so that
 * portalled overlays (Dialog, Dropdown, Popover…) also render in the right mode.
 */
function ThemeWrapper({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-24 p-6">{children}</div>
    </div>
  );
}

/**
 * Wraps every story so it can be flipped between light and dark via the toolbar
 * (shadcn uses a `.dark` class).
 */
const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) ?? "light";
  return (
    <ThemeWrapper theme={theme}>
      <Story />
    </ThemeWrapper>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Surface a11y findings to dev/QA but don't fail the story render.
      test: "todo",
    },
    layout: "centered",
  },
  initialGlobals: {
    theme: "light",
  },
  globalTypes: {
    theme: {
      description: "Design-system color scheme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  tags: ["autodocs"],
};

export default preview;
