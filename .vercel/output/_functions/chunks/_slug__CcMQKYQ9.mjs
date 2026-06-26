import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { a as authors, p as postsByAuthor, S as SITE } from './blog-data_BSBXRKDS.mjs';

function getStaticPaths() {
  return authors.map((author) => ({ params: { slug: author.slug }, props: { author } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { author } = Astro2.props;
  const list = await postsByAuthor(author.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${author.name} - ${SITE.name}`, "description": author.bio, "canonical": `/authors/${author.slug}`, "ogImage": author.avatar }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-4xl px-5 py-12"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "Authors" }, { label: author.name }] })} <header class="mt-8 flex flex-col items-start gap-6 border-b border-border pb-10 sm:flex-row sm:items-center"> <img${addAttribute(author.avatar, "src")} alt="" width="96" height="96" class="h-24 w-24 rounded-full"> <div> <div class="text-xs font-medium uppercase tracking-[0.2em] text-primary">Author</div> <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight">${author.name}</h1> <p class="mt-3 max-w-xl text-muted-foreground">${author.longBio}</p> </div> </header> <section class="mt-2"> <div class="mt-6 text-xs uppercase tracking-wider text-muted-foreground"> ${list.length} ${list.length === 1 ? "piece" : "pieces"} by ${author.name.split(" ")[0]} </div> ${list.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "variant": "list" })}`)} </section> </div> ` })}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/authors/[slug].astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/authors/[slug].astro";
const $$url = "/authors/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
