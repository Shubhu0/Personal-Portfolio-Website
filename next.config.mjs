// When building for GitHub Pages the site is served from a project subpath
// (https://<user>.github.io/Personal-Portfolio-Website). The deploy workflow
// sets GITHUB_PAGES=true so the basePath/assetPrefix are applied only there —
// local `npm run dev` / `npm run build` keep serving from the root.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBase = "/Personal-Portfolio-Website";
const basePath = isPages ? repoBase : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
