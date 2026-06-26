import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { e as createRenderInstruction, m as maybeRenderHead, c as addAttribute, u as unescapeHTML, b as renderTemplate, r as renderComponent, f as renderSlot, g as renderHead } from './entrypoint_CHSjsHNx.mjs';
import 'clsx';
import { S as SITE, j as categories, i as imageSrc } from './blog-data_BSBXRKDS.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className = "" } = Astro2.props;
  const paths = {
    "arrow-left": '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>',
    "arrow-right": '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
    "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5 0C9 2 8 2 8 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 7 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-10 5L2 7"></path>',
    menu: '<path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>',
    rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
    search: '<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>',
    sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>',
    twitter: '<path d="M22 4.01c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.89-2.38 8.6 8.6 0 0 1-2.73 1.04A4.28 4.28 0 0 0 11.4 7.27c0 .34.04.67.11.99A12.14 12.14 0 0 1 2.69 3.8a4.28 4.28 0 0 0 1.32 5.72 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2.25 18.1c-.35 0-.7-.02-1.04-.06A12.13 12.13 0 0 0 7.77 20c7.87 0 12.18-6.52 12.18-12.18v-.56A8.7 8.7 0 0 0 22 4.01Z"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
  };
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unescapeHTML(paths[name] ?? "")}</svg>`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Icon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const nav = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Writing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ];
  const current = Astro2.url.pathname.replace(/\/$/, "") || "/";
  const isHome = current === "/";
  const activeClass = isHome ? "home-header-link is-active" : "text-foreground";
  const inactiveClass = isHome ? "home-header-link" : "text-muted-foreground transition-colors hover:text-foreground";
  const headerClass = isHome ? "sticky top-0 z-40 border-b border-transparent bg-transparent text-white" : "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md";
  const iconClass = isHome ? "home-header-action inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors" : "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(headerClass, "class")}${addAttribute(isHome ? "true" : void 0, "data-home-header")} data-scrolled="false"> <div class="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5"> <a href="/" class="flex items-center gap-2"> <span${addAttribute(`font-serif text-xl font-semibold tracking-tight ${isHome ? "home-header-brand" : ""}`, "class")}>${SITE.name}</span> </a> <nav class="hidden items-center gap-8 md:flex" aria-label="Primary navigation"> ${nav.map((item) => {
    const exact = item.to === "/";
    const active = exact ? current === "/" : current.startsWith(item.to);
    return renderTemplate`<a${addAttribute(item.to, "href")}${addAttribute(`text-sm ${active ? activeClass : inactiveClass}`, "class")}${addAttribute(active ? "page" : void 0, "aria-current")}> ${item.label} </a>`;
  })} </nav> <div class="flex items-center gap-1"> <button type="button" data-search-toggle aria-label="Search" aria-controls="site-search" aria-expanded="false"${addAttribute(iconClass, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "h-4 w-4" })} </button> <a href="/rss.xml" aria-label="RSS feed"${addAttribute(`${iconClass} hidden sm:inline-flex`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "rss", "class": "h-4 w-4" })} </a> <button type="button" data-theme-toggle aria-label="Toggle dark mode"${addAttribute(iconClass, "class")}> <span data-theme-icon="moon">${renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "h-4 w-4" })}</span> <span data-theme-icon="sun" hidden>${renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "h-4 w-4" })}</span> </button> <button type="button" data-menu-toggle aria-label="Menu" aria-controls="mobile-menu" aria-expanded="false"${addAttribute(`${iconClass} md:hidden`, "class")}> <span data-menu-icon="menu">${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "class": "h-4 w-4" })}</span> <span data-menu-icon="x" hidden>${renderComponent($$result, "Icon", $$Icon, { "name": "x", "class": "h-4 w-4" })}</span> </button> </div> </div> <div id="site-search" data-search-panel class="border-t border-border/60 bg-background text-foreground" hidden> <form action="/blog" method="get" class="mx-auto max-w-6xl px-5 py-3"> <input data-search-input name="q" aria-label="Search essays, field notes, interviews" placeholder="Search essays, field notes, interviews..." class="w-full border-0 bg-transparent py-2 font-serif text-lg outline-none placeholder:text-muted-foreground"> </form> </div> <div id="mobile-menu" data-menu-panel class="border-t border-border/60 bg-background text-foreground md:hidden" hidden> <nav class="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3" aria-label="Mobile navigation"> ${nav.map((item) => {
    const exact = item.to === "/";
    const active = exact ? current === "/" : current.startsWith(item.to);
    return renderTemplate`<a${addAttribute(item.to, "href")}${addAttribute(`rounded-md px-2 py-2 text-sm hover:bg-muted hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`, "class")}${addAttribute(active ? "page" : void 0, "aria-current")}> ${item.label} </a>`;
  })} </nav> </div> </header> ${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { flush = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([flush ? "mt-0" : "mt-24", "border-t border-border/60"], "class:list")}> <div class="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4"> <div class="md:col-span-2"> <div class="font-serif text-lg font-semibold">${SITE.name}</div> <p class="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground"> ${SITE.description} </p> <div class="mt-4 flex items-center gap-3 text-muted-foreground"> <a href="/rss.xml" aria-label="RSS" class="hover:text-foreground">${renderComponent($$result, "Icon", $$Icon, { "name": "rss", "class": "h-4 w-4" })}</a> <a href="https://x.com/quietpages" aria-label="Quiet Pages on X" class="hover:text-foreground">${renderComponent($$result, "Icon", $$Icon, { "name": "twitter", "class": "h-4 w-4" })}</a> <a href="https://github.com/andreialba/quietpages" aria-label="Quiet Pages on GitHub" class="hover:text-foreground">${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "h-4 w-4" })}</a> <a href="mailto:hello@example.com" aria-label="Email" class="hover:text-foreground">${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "class": "h-4 w-4" })}</a> </div> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sections</div> <ul class="mt-3 space-y-2 text-sm"> ${categories.slice(0, 5).map((category) => renderTemplate`<li> <a${addAttribute(`/categories/${category.slug}`, "href")} class="text-foreground/80 hover:text-foreground"> ${category.name} </a> </li>`)} </ul> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">The site</div> <ul class="mt-3 space-y-2 text-sm"> <li><a href="/about" class="hover:text-foreground">About</a></li> <li><a href="/contact" class="hover:text-foreground">Contact</a></li> <li><a href="/blog" class="hover:text-foreground">Archive</a></li> <li><a href="/rss.xml" class="hover:text-foreground">RSS feed</a></li> </ul> </div> </div> <div class="border-t border-border/60"> <div class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center"> <div>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.name}. Quietly made on the open web.</div> <div>Set in Fraunces &amp; Inter.</div> </div> </div> </footer>`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = `${SITE.name} - A quiet magazine on writing, design, and the slow web`,
    description = SITE.description,
    canonical,
    ogType = "website",
    ogImage,
    jsonLd,
    flushFooter = false
  } = Astro2.props;
  const siteUrl = Astro2.site?.toString() || SITE.url;
  const absoluteUrl = (value) => {
    const src = imageSrc(value) || value;
    if (!src) return void 0;
    try {
      return new URL(src, siteUrl).toString();
    } catch {
      return src;
    }
  };
  const canonicalUrl = absoluteUrl(canonical || Astro2.url.pathname);
  const ogImageUrl = absoluteUrl(ogImage);
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="author"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type"', '><meta property="og:site_name"', ">", "", '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', ">", "", '<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml">', '<script>\n      (function () {\n        try {\n          var theme = localStorage.getItem("theme");\n          var dark = theme\n            ? theme === "dark"\n            : matchMedia("(prefers-color-scheme: dark)").matches;\n          if (dark) document.documentElement.classList.add("dark");\n        } catch (error) {}\n      })();\n    <\/script>', '</head> <body> <a href="#main-content" class="skip-link">Skip to content</a> <div class="flex min-h-dvh flex-col"> ', ' <main id="main-content" class="flex-1"> ', " </main> ", " </div> </body></html>"])), title, addAttribute(description, "content"), addAttribute(SITE.name, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogType, "content"), addAttribute(SITE.name, "content"), canonicalUrl && renderTemplate`<meta property="og:url"${addAttribute(canonicalUrl, "content")}>`, ogImageUrl && renderTemplate`<meta property="og:image"${addAttribute(ogImageUrl, "content")}>`, addAttribute(title, "content"), addAttribute(description, "content"), ogImageUrl && renderTemplate`<meta name="twitter:image"${addAttribute(ogImageUrl, "content")}>`, canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(canonicalUrl, "href")}>`, addAttribute(SITE.name, "title"), jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "flush": flushFooter }));
}, "C:/Users/Admin/my-crochet-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Icon as a, renderScript as r };
