import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, F as Fragment } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout, r as renderScript, a as $$Icon } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Image } from './_astro_assets_DyjLBIOP.mjs';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { $ as $$Newsletter } from './Newsletter_Pc1iXZcR.mjs';
import { o as featuredPost, b as getAuthor, c as getCategory, s as sortedPosts, f as formatDate, j as categories, S as SITE } from './blog-data_BSBXRKDS.mjs';

const heroImage = new Proxy({"src":"/_astro/crochet-hero.CAE_FvC7.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Admin/my-crochet-blog/src/assets/crochet-hero.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featured = await featuredPost();
  const featuredAuthor = getAuthor(featured.author);
  const featuredCategory = getCategory(featured.category);
  const latest = (await sortedPosts()).filter((post) => post.slug !== featured.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${SITE.name} - Crochet patterns, tutorials & handmade inspiration`, "description": SITE.description, "canonical": "/", "flushFooter": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative -mt-[calc(4rem+2px)] min-h-[calc(100svh-2rem)] overflow-hidden border-b border-border/60 pt-[calc(4rem+2px)] sm:min-h-[760px]"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": "", "class": "absolute inset-0 h-full w-full object-cover object-center", "loading": "eager", "decoding": "async", "widths": [640, 960, 1280, 1920, 2560], "sizes": "100vw" })} <div aria-hidden="true" class="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.1_0.02_70_/_0.68),oklch(0.16_0.02_80_/_0.38)_46%,oklch(0.98_0.01_90_/_0.1))] dark:bg-[linear-gradient(90deg,oklch(0.08_0.01_70_/_0.78),oklch(0.08_0.01_70_/_0.52)_48%,oklch(0.08_0.01_70_/_0.18))]"></div> <div aria-hidden="true" class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 via-black/18 to-transparent"></div> <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/72 to-transparent"></div> <div class="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl items-center px-5 py-20 sm:min-h-[680px] sm:py-24"> <div class="max-w-4xl text-white drop-shadow-[0_1px_18px_rgba(0,0,0,0.28)]"> <h1 class="font-serif text-[2.5rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
Your cozy corner for
<span class="italic text-white"> crochet</span>,
<span class="italic text-white"> patterns</span>, and
<span class="italic text-white"> handmade joy</span>.
</h1> <p class="mt-8 max-w-xl text-lg leading-relaxed text-white/86">
Free patterns, step-by-step tutorials, and yarn reviews &mdash; for beginners and seasoned crocheters alike.
</p> <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"> <a${addAttribute(`/blog/${featured.slug}`, "href")} class="group inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-medium text-white hover:border-white/70 hover:text-white/82">
Begin with our latest pattern
${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })} </a> <a href="/blog" class="text-sm text-white/76 hover:text-white">
Or browse all posts
</a> </div> </div> </div> </section> <section class="border-b border-border/60"> <div class="mx-auto max-w-6xl px-5 py-16"> <div class="mb-6 flex items-center justify-between"> <div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Featured</div> <a href="/blog" class="text-xs text-muted-foreground hover:text-foreground">All posts &rarr;</a> </div> <article class="grid gap-10 lg:grid-cols-2"> <a${addAttribute(`/blog/${featured.slug}`, "href")} class="group block"${addAttribute(`Read ${featured.title}`, "aria-label")}> <div class="aspect-[4/3] overflow-hidden rounded-md bg-muted"> ${featured.thumbnail && renderTemplate`<img${addAttribute(featured.thumbnail, "src")} alt="" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]">`} </div> </a> <div class="flex flex-col justify-center"> <div class="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground"> ${featuredCategory && renderTemplate`<a${addAttribute(`/categories/${featuredCategory.slug}`, "href")} class="text-primary hover:underline"> ${featuredCategory.name} </a>`} <span>&middot;</span> <time${addAttribute(featured.date, "datetime")}>${formatDate(featured.date)}</time> </div> <a${addAttribute(`/blog/${featured.slug}`, "href")}> <h2 class="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight hover:text-primary sm:text-4xl"> ${featured.title} </h2> </a> <p class="mt-4 text-lg text-muted-foreground">${featured.excerpt}</p> <div class="mt-6 flex items-center gap-3 text-sm text-muted-foreground"> ${featuredAuthor && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": featuredAuthor.avatar, "alt": "", "width": 28, "height": 28, "class": "h-7 w-7 rounded-full" })} <a${addAttribute(`/authors/${featuredAuthor.slug}`, "href")} class="hover:text-foreground">${featuredAuthor.name}</a> <span>&middot;</span> ` })}`} <span>${featured.readingTime} min read</span> </div> <a${addAttribute(`/blog/${featured.slug}`, "href")} class="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
Read the post ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "h-3.5 w-3.5" })} </a> </div> </article> </div> </section> <section class="mx-auto max-w-6xl px-5 py-16" data-home-latest> <div class="flex flex-wrap items-center justify-between gap-4"> <h2 class="font-serif text-2xl font-semibold tracking-tight">Latest</h2> <div class="flex flex-wrap gap-2"> <button type="button" data-home-filter="" class="rounded-full border px-3 py-1 text-xs transition-colors border-foreground bg-foreground text-background">
All
</button> ${categories.map((category) => renderTemplate`<button type="button"${addAttribute(category.slug, "data-home-filter")} class="rounded-full border px-3 py-1 text-xs transition-colors border-border text-muted-foreground hover:text-foreground"> ${category.name} </button>`)} </div> </div> <div data-home-empty class="mt-12 rounded-md border border-dashed border-border py-16 text-center text-muted-foreground" hidden>
Nothing here yet in this section.
</div> <div class="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"> ${latest.map((post, index) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "hidden": index >= 6 })}`)} </div> <div class="mt-12 text-center"> <a href="/blog" class="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
Browse all posts ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "h-3.5 w-3.5" })} </a> </div> </section> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ` })} ${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
