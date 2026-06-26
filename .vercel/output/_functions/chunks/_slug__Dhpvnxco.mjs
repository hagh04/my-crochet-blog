import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment } from './entrypoint_CHSjsHNx.mjs';
import { r as renderScript, $ as $$BaseLayout, a as $$Icon } from './BaseLayout_BZnZ_Rv_.mjs';
import { g as getCollection, n as normalizePost, b as getAuthor, c as getCategory, r as renderEntry, d as relatedPosts, e as adjacentPosts, S as SITE, i as imageSrc, f as formatDate, h as getTag } from './blog-data_BSBXRKDS.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import 'clsx';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { $ as $$Newsletter } from './Newsletter_Pc1iXZcR.mjs';

const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { items = [] } = Astro2.props;
  return renderTemplate`${items.length > 0 && renderTemplate`${maybeRenderHead()}<div data-toc data-astro-cid-xvrfupwn><div class="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-astro-cid-xvrfupwn>On this page</div><ul class="mt-3 space-y-2 border-l border-border" data-astro-cid-xvrfupwn>${items.map((item) => renderTemplate`<li data-toc-item class="relative"${addAttribute(`padding-left: ${item.level === 3 ? 24 : 12}px`, "style")} data-astro-cid-xvrfupwn><a${addAttribute(`#${item.id}`, "href")}${addAttribute(item.id, "data-toc-link")} class="block py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground" data-astro-cid-xvrfupwn>${item.text}</a></li>`)}</ul></div>`}${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/components/TableOfContents.astro", void 0);

async function getStaticPaths() {
  const entries = await getCollection("blog");
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const post = normalizePost(entry);
  const author = getAuthor(post.author);
  const category = getCategory(post.category);
  const { Content, headings } = await renderEntry(entry);
  const toc = headings.filter((heading) => heading.depth === 2 || heading.depth === 3).map((heading) => ({
    level: heading.depth,
    id: heading.slug,
    text: heading.text
  }));
  const related = await relatedPosts(post);
  const { prev, next } = await adjacentPosts(post);
  const canonical = `/blog/${post.slug}`;
  const canonicalUrl = new URL(canonical, SITE.url).toString();
  const thumbnailUrl = post.thumbnail ? new URL(imageSrc(post.thumbnail), SITE.url).toString() : void 0;
  const shareUrl = canonicalUrl;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: thumbnailUrl,
    author: { "@type": "Person", name: author?.name },
    mainEntityOfPage: canonicalUrl
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} - ${SITE.name}`, "description": post.excerpt, "canonical": canonical, "ogType": "article", "ogImage": post.thumbnail, "jsonLd": jsonLd, "flushFooter": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed left-0 right-0 top-0 z-50 h-0.5 bg-transparent"> <div data-reading-progress class="h-full bg-primary transition-[width] duration-75" style="width: 0%"></div> </div> <article class="mx-auto max-w-6xl px-5 py-10"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", to: "/" },
    { label: "Archive", to: "/blog" },
    ...category ? [{ label: category.name, to: `/categories/${category.slug}` }] : [],
    { label: post.title }
  ] })} <header class="mx-auto mt-8 max-w-3xl text-center"> ${category && renderTemplate`<a${addAttribute(`/categories/${category.slug}`, "href")} class="text-xs font-medium uppercase tracking-[0.2em] text-primary hover:underline"> ${category.name} </a>`} <h1 class="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"> ${post.title} </h1> <p class="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">${post.excerpt}</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground"> ${author && renderTemplate`<a${addAttribute(`/authors/${author.slug}`, "href")} class="flex items-center gap-2 hover:text-foreground"> <img${addAttribute(author.avatar, "src")} alt="" width="28" height="28" class="h-7 w-7 rounded-full"> ${author.name} </a>`} <span>&middot;</span> <time${addAttribute(post.date, "datetime")}>${formatDate(post.date)}</time> ${post.updated && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<span>&middot;</span><span class="italic">updated ${formatDate(post.updated)}</span>` })}`} <span>&middot;</span> <span>${post.readingTime} min read</span> </div> </header> ${post.thumbnail && renderTemplate`<figure class="mx-auto mt-10 max-w-4xl"> <div class="overflow-hidden rounded-md bg-muted"> <img${addAttribute(post.thumbnail, "src")}${addAttribute(post.imageCredit?.caption ?? "", "alt")} class="w-full"> </div> ${post.imageCredit && renderTemplate`<figcaption class="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground"> ${post.imageCredit.caption && renderTemplate`<span>${post.imageCredit.caption} </span>`} <span>
Photo by${" "} <a${addAttribute(post.imageCredit.authorUrl, "href")} target="_blank" rel="noreferrer" class="text-foreground/75 underline underline-offset-2 hover:text-primary"> ${post.imageCredit.author} </a>${" "}
on${" "} <a${addAttribute(post.imageCredit.sourceUrl, "href")} target="_blank" rel="noreferrer" class="text-foreground/75 underline underline-offset-2 hover:text-primary"> ${post.imageCredit.source} </a>
.
</span> </figcaption>`} </figure>`} <div class="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]"> <div class="mx-auto w-full min-w-0 max-w-2xl"> <div class="prose-article"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="mt-10 flex flex-wrap items-center gap-2"> <span class="text-xs uppercase tracking-wider text-muted-foreground">Tags</span> ${post.tags.map((tag) => {
    const item = getTag(tag);
    return renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} class="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary">
#${item?.name ?? tag} </a>`;
  })} </div> <div class="mt-8 flex items-center gap-2 border-y border-border py-4"> <span class="text-xs uppercase tracking-wider text-muted-foreground">Share</span> <a target="_blank" rel="noreferrer" aria-label="Share on Twitter" data-share-twitter${addAttribute(post.title, "data-share-title")}${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`, "href")} class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "twitter", "class": "h-3.5 w-3.5" })}</a> <a target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" data-share-linkedin${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "href")} class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "linkedin", "class": "h-3.5 w-3.5" })}</a> <button type="button" data-copy-link class="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"> <span data-copy-ready class="inline-flex items-center gap-2">${renderComponent($$result2, "Icon", $$Icon, { "name": "copy", "class": "h-3.5 w-3.5" })} Copy link</span> <span data-copy-done class="inline-flex items-center gap-2" hidden>${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "h-3.5 w-3.5" })} Copied</span> </button> </div> ${author && renderTemplate`<div class="mt-10 flex items-start gap-4 rounded-md border border-border p-5"> <img${addAttribute(author.avatar, "src")} alt="" width="56" height="56" class="h-14 w-14 rounded-full"> <div> <div class="text-xs uppercase tracking-wider text-muted-foreground">Written by</div> <a${addAttribute(`/authors/${author.slug}`, "href")} class="font-serif text-lg font-semibold hover:text-primary"> ${author.name} </a> <p class="mt-1 text-sm text-muted-foreground">${author.bio}</p> </div> </div>`} <nav class="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"> ${prev ? renderTemplate`<a${addAttribute(`/blog/${prev.slug}`, "href")} class="group block"> <div class="flex items-center gap-1 text-xs text-muted-foreground">${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-left", "class": "h-3 w-3" })} Previous</div> <div class="mt-1 font-serif text-base font-semibold leading-snug group-hover:text-primary">${prev.title}</div> </a>` : renderTemplate`<div></div>`} ${next ? renderTemplate`<a${addAttribute(`/blog/${next.slug}`, "href")} class="group block sm:text-right"> <div class="flex items-center gap-1 text-xs text-muted-foreground sm:justify-end">Next ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "h-3 w-3" })}</div> <div class="mt-1 font-serif text-base font-semibold leading-snug group-hover:text-primary">${next.title}</div> </a>` : renderTemplate`<div></div>`} </nav> <div class="mt-12 rounded-md border border-dashed border-border p-8 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "message", "class": "mx-auto h-5 w-5 text-muted-foreground" })} <div class="mt-2 font-serif text-lg">Comments</div> <p class="mt-1 text-sm text-muted-foreground">Hook this up to your favourite commenting platform &mdash; Giscus, Disqus, or your own.</p> </div> </div> <aside class="hidden lg:block"> <div class="sticky top-24"> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "items": toc })} </div> </aside> </div> ${related.length > 0 && renderTemplate`<section class="mt-20 border-t border-border pt-12"> <h2 class="font-serif text-2xl font-semibold tracking-tight">Continue reading</h2> <div class="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"> ${related.map((relatedPost) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": relatedPost })}`)} </div> </section>`} </article> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ` })} ${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
