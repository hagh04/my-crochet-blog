import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout, r as renderScript, a as $$Icon } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { S as SITE } from './blog-data_BSBXRKDS.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Contact - ${SITE.name}`, "description": `Get in touch with ${SITE.name}.`, "canonical": "/contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-5 py-12"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "Contact" }] })} <header class="mt-6"> <div class="text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</div> <h1 class="mt-2 font-serif text-5xl font-semibold tracking-tight">Say hello.</h1> <p class="mt-4 max-w-xl text-muted-foreground">
Notes, corrections, pitches, or just a thought. We read everything and reply to most of it.
</p> </header> <div class="mt-12 grid gap-12 lg:grid-cols-[1fr_240px]"> <form data-contact-form class="space-y-5"> <div> <label for="name" class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label> <input id="name" required class="mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base outline-none focus:border-primary"> </div> <div> <label for="email" class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label> <input id="email" type="email" required class="mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base outline-none focus:border-primary"> </div> <div> <label for="message" class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label> <textarea id="message" required rows="6" class="mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base outline-none focus:border-primary"></textarea> </div> <button type="submit" class="rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background hover:opacity-90">
Send
</button> <p data-contact-sent class="text-sm text-primary" role="status" hidden>Thanks &mdash; we'll be in touch.</p> </form> <aside class="space-y-6 border-l border-border pl-8 lg:block"> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Elsewhere</div> <ul class="mt-3 space-y-3 text-sm"> <li><a href="mailto:hello@example.com" class="flex items-center gap-2 hover:text-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "mail", "class": "h-3.5 w-3.5" })} hello@example.com</a></li> <li><a href="https://x.com/quietpages" class="flex items-center gap-2 hover:text-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter", "class": "h-3.5 w-3.5" })} @quietpages</a></li> <li><a href="/rss.xml" class="flex items-center gap-2 hover:text-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "rss", "class": "h-3.5 w-3.5" })} RSS feed</a></li> </ul> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Pitches</div> <p class="mt-2 text-sm text-muted-foreground">We commission essays from new contributors a few times a year. Send a short paragraph about what you'd like to write.</p> </div> </aside> </div> </div> ` })} ${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
