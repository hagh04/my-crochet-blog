import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_CHSjsHNx.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BZnZ_Rv_.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DmIu0B3S.mjs';
import { $ as $$PostCard } from './PostCard_BexfyPW6.mjs';
import { t as tags, m as postsByTag, S as SITE } from './blog-data_BSBXRKDS.mjs';

function getStaticPaths() {
  return tags.map((tag) => ({ params: { slug: tag.slug }, props: { tag } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { tag } = Astro2.props;
  const list = await postsByTag(tag.slug);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `#${tag.name} - ${SITE.name}`, "description": `All writing tagged ${tag.name}.`, "canonical": `/tags/${tag.slug}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-4xl px-5 py-12"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Home", to: "/" }, { label: "Tags" }, { label: `#${tag.name}` }] })} <header class="mt-6 border-b border-border pb-8"> <div class="text-xs font-medium uppercase tracking-[0.2em] text-primary">Tag</div> <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight">#${tag.name}</h1> <p class="mt-3 text-muted-foreground">${list.length} ${list.length === 1 ? "post" : "posts"}.</p> </header> ${list.length === 0 ? renderTemplate`<div class="mt-12 rounded-md border border-dashed border-border py-20 text-center text-muted-foreground">
Nothing tagged yet.
</div>` : list.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "variant": "list" })}`)} </div> ` })}`;
}, "C:/Users/Admin/my-crochet-blog/src/pages/tags/[slug].astro", void 0);

const $$file = "C:/Users/Admin/my-crochet-blog/src/pages/tags/[slug].astro";
const $$url = "/tags/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
