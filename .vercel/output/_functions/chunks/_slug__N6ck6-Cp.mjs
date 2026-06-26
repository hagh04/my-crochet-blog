import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent } from './entrypoint_CHSjsHNx.mjs';
import { a as $$Icon, $ as $$BaseLayout } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { $ as $$Newsletter } from './Newsletter_Pc1iXZcR.mjs';
import { s as sortedPosts, k as popularPosts, a as authors, j as categories, t as tags, l as postsByCategory, S as SITE } from './blog-data_BSBXRKDS.mjs';

const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const recent = (await sortedPosts()).slice(0, 4);
  const popular = await popularPosts();
  const author = authors[0];
  return renderTemplate`${maybeRenderHead()}<aside class="space-y-10"> <div> <div class="flex items-center gap-3"> <img${addAttribute(author.avatar, "src")} alt="" width="40" height="40" class="h-10 w-10 rounded-full"> <div> <div class="text-sm font-medium">${author.name}</div> <div class="text-xs text-muted-foreground">Editor</div> </div> </div> <p class="mt-3 text-sm text-muted-foreground">${author.bio}</p> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Categories</div> <ul class="mt-3 space-y-2 text-sm"> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`/categories/${category.slug}`, "href")} class="text-foreground/80 hover:text-primary"> ${category.name} </a> </li>`)} </ul> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Popular</div> <div class="mt-3 space-y-4"> ${popular.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "variant": "compact" })}`)} </div> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Recent</div> <div class="mt-3 space-y-4"> ${recent.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "variant": "compact" })}`)} </div> </div> <div> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Tags</div> <div class="mt-3 flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag.slug}`, "href")} class="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"> ${tag.name} </a>`)} </div> </div> ${renderComponent($$result, "Newsletter", $$Newsletter, { "compact": true })} <a href="/rss.xml" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"> ${renderComponent($$result, "Icon", $$Icon, { "name": "rss", "class": "h-3.5 w-3.5" })} Subscribe via RSS
</a> </aside>`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Sidebar.astro", void 0);

function getStaticPaths() {
  return categories.map((category) => ({ params: { slug: category.slug }, props: { category } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { category } = Astro2.props;
  const list = await postsByCategory(category.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category.name} - ${SITE.name}`, "description": `Posts about ${category.name} on ${SITE.name}.`, "canonical": `/categories/${category.slug}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-6xl px-5 py-12"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "Categories" }, { label: category.name }] })} <header class="mt-6 border-b border-border pb-8"> <div class="text-xs font-medium uppercase tracking-[0.2em] text-primary">Category</div> <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">${category.name}</h1> <p class="mt-3 text-muted-foreground"> ${list.length} ${list.length === 1 ? "post" : "posts"} in this category.
</p> </header> <div class="grid gap-12 lg:grid-cols-[1fr_280px]"> <div> ${list.length === 0 ? renderTemplate`<div class="mt-12 rounded-md border border-dashed border-border py-20 text-center"> <p class="text-muted-foreground">No posts yet in this category.</p> </div>` : list.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "variant": "list" })}`)} </div> <div class="pt-8">${renderComponent($$result2, "Sidebar", $$Sidebar, {})}</div> </div> </div> ` })}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/categories/[slug].astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
