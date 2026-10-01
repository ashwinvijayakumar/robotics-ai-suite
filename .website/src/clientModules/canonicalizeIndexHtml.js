// Redirect non-canonical "…/index.html" URLs to their canonical trailing-slash
// form. With trailingSlash:true the SPA home is "/"; served at "/index.html"
// react-router misses the home route and mounts the whole app a SECOND time, so
// the page renders twice as you scroll. Runs at import time, before the app
// mounts, so the browser navigates to the canonical URL instead of duplicating.
// Only executes inside the Docusaurus bundle — the static Sphinx pages under
// /development-stack/**/index.html don't load this script and are left as-is.
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (pathname.endsWith("/index.html")) {
    const canonical = pathname.slice(0, -"index.html".length);
    window.location.replace(canonical + search + hash);
  }
}
