import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout, r as renderScript, a as $$Icon } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { s as sortedPosts, j as categories, t as tags, S as SITE } from './blog-data_BSBXRKDS.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sortedPosts();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Archive - ${SITE.name}`, "description": "Every essay, field note, and interview we've published. Search and filter by category or tag.", "canonical": "/blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-4xl px-5 py-12" data-archive> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "Archive" }] })} <h1 class="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">The archive</h1> <p class="mt-3 max-w-xl text-muted-foreground">
Every piece we've published. ${posts.length} essays, field notes, and interviews.
</p> <form data-archive-search class="mt-8 flex items-center gap-2 border-b border-border pb-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "class": "h-4 w-4 text-muted-foreground" })} <input data-archive-query name="q" aria-label="Search the archive" placeholder="Search the archive..." class="w-full border-0 bg-transparent py-2 outline-none placeholder:text-muted-foreground"> <button data-archive-clear type="button" class="text-xs text-muted-foreground hover:text-foreground" hidden>
Clear
</button> </form> <div class="mt-6 space-y-4 text-sm"> <div class="flex flex-wrap items-center gap-2"> <span class="text-xs uppercase tracking-wider text-muted-foreground">Categories</span> <a data-category-filter="" href="/blog" class="rounded-full border px-3 py-1 text-xs">All</a> ${categories.map((category) => renderTemplate`<a${addAttribute(category.slug, "data-category-filter")}${addAttribute(`/blog?cat=${category.slug}`, "href")} class="rounded-full border px-3 py-1 text-xs"> ${category.name} </a>`)} </div> <div class="flex flex-wrap items-center gap-2"> <span class="text-xs uppercase tracking-wider text-muted-foreground">Tags</span> ${tags.map((tag) => renderTemplate`<a${addAttribute(tag.slug, "data-tag-filter")}${addAttribute(`/blog?tag=${tag.slug}`, "href")} class="rounded-full border px-2.5 py-0.5 text-xs">
#${tag.name} </a>`)} </div> </div> <div data-archive-count class="mt-6 text-sm text-muted-foreground"></div> <div data-archive-empty class="mt-12 rounded-md border border-dashed border-border py-20 text-center" hidden> <div class="font-serif text-lg">No matches</div> <p class="mt-2 text-sm text-muted-foreground">Try a different word, or clear the filters.</p> </div> <div data-archive-list> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "variant": "list" })}`)} </div> <div data-archive-more-wrap class="mt-10 text-center" hidden> <button type="button" data-archive-more class="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"></button> <div data-archive-page class="mt-3 text-xs text-muted-foreground"></div> </div> </div> ` })} ${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
