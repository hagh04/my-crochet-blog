import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { S as SITE, a as authors } from './blog-data_BSBXRKDS.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `About - ${SITE.name}`, "description": `About ${SITE.name}: an independent magazine on writing, design, and the slow web.`, "canonical": "/about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-5 py-12"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "About" }] })} <header class="mt-6"> <div class="text-xs font-medium uppercase tracking-[0.2em] text-primary">About</div> <h1 class="mt-2 font-serif text-5xl font-semibold leading-[1.05] tracking-tight">
A quiet magazine for the open web.
</h1> </header> <div class="prose-article mt-10"> <p> ${SITE.name} began as a folder of notes, drafts, and half-finished essays &mdash; the kind of writing that doesn't survive the timeline. We started publishing it here because we wanted somewhere slower to read, and somewhere slower to write.
</p> <p>
The magazine is independent, occasional, and unsponsored. We publish when the work is ready and not before. There are no trackers, no pop-ups, and no infinite scroll. Just sentences, photographs, and the occasional conversation.
</p> <h2 id="what-we-publish">What we publish</h2> <p>
Essays on writing, design, and the craft of the web. Field notes from places we love. Interviews with people who make things with their hands. The occasional photograph, when one is worth printing.
</p> <h2 id="who-we-are">Who we are</h2> <p>A small editorial team, scattered across three time zones, who would rather be reading.</p> </div> <section class="mt-12 border-t border-border pt-10"> <h2 class="font-serif text-2xl font-semibold tracking-tight">Contributors</h2> <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${authors.map((author) => renderTemplate`<a${addAttribute(`/authors/${author.slug}`, "href")} class="group flex items-start gap-3"> <img${addAttribute(author.avatar, "src")} alt="" width="48" height="48" class="h-12 w-12 rounded-full"> <div> <div class="font-serif text-base font-semibold group-hover:text-primary">${author.name}</div> <div class="mt-1 text-sm text-muted-foreground">${author.bio}</div> </div> </a>`)} </div> </section> </div> ` })}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/about.astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
