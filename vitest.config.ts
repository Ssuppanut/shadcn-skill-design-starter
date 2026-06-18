import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Runs every story as a real-browser component test (interaction + a11y) for QA.
// See https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      "@": dirname,
    },
  },
  test: {
    name: "storybook",
    // @storybook/addon-vitest (SB >= 10.3) auto-applies the preview annotations
    // (theme decorator, a11y params, globals.css) from .storybook/preview.tsx.
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
  plugins: [
    storybookTest({ configDir: path.join(dirname, ".storybook") }),
  ],
});
