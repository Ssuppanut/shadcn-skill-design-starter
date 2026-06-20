import type { NextConfig } from "next";

// When building for GitHub Pages (project site served under /<repo>/), the
// workflow sets GITHUB_PAGES=true so assets and routes resolve under the
// sub-path. Local `pnpm dev` / `pnpm build` keep working at the root.
const repo = "shadcn-skill-design-starter";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // static HTML export → out/ (GitHub Pages compatible)
  trailingSlash: true, // emit /path/index.html so Pages serves clean URLs
  images: { unoptimized: true }, // no image-optimization server on Pages
  ...(isGithubPages ? { basePath: `/${repo}` } : {}),
};

export default nextConfig;
