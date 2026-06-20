// Ad-hoc a11y gate: runs axe-core against a live Storybook story iframe.
//   node scripts/axe-story.mjs <story-id> [--dark]
// Example: node scripts/axe-story.mjs feedback-progress--showcase
import { readFileSync } from "node:fs";
import { chromium } from "playwright";

const id = process.argv[2];
const dark = process.argv.includes("--dark");
if (!id) {
  console.error("usage: node scripts/axe-story.mjs <story-id> [--dark]");
  process.exit(2);
}

const axeSrc = readFileSync(
  "node_modules/.pnpm/axe-core@4.11.4/node_modules/axe-core/axe.min.js",
  "utf8",
);
// Drive dark mode through Storybook's own theme global so the preview decorator
// applies it consistently (manually toggling .dark races the decorator).
const url = `http://localhost:6006/iframe.html?id=${id}&viewMode=story&globals=theme:${dark ? "dark" : "light"}`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.addScriptTag({ content: axeSrc });

const results = await page.evaluate(async () => {
  // axe is injected via addScriptTag above; it isn't a module import here.
  return await globalThis.axe.run(document.body, {
    runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
  });
});

await browser.close();

const v = results.violations;
console.log(`Story: ${id}${dark ? " (dark)" : ""}`);
console.log(`Passes: ${results.passes.length}  Violations: ${v.length}`);
for (const x of v) {
  console.log(`\n  [${x.impact}] ${x.id} — ${x.help}`);
  console.log(`  ${x.helpUrl}`);
  for (const n of x.nodes) console.log(`    • ${n.target.join(" ")}`);
}
process.exit(v.length ? 1 : 0);
