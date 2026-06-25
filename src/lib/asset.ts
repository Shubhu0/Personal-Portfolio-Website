// Base path the site is served from. Empty in local dev, set to the GitHub
// Pages project subpath during CI builds (see next.config.mjs / GITHUB_PAGES).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefix a public-folder asset path with the base path so it resolves both
// locally (served from /) and on GitHub Pages (served from a subpath).
export const asset = (path: string): string => `${BASE_PATH}${path}`;
