import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as addAttribute } from './entrypoint_CHSjsHNx.mjs';
import { a as $$Icon } from './BaseLayout_BZnZ_Rv_.mjs';

const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-1 text-xs text-muted-foreground"> ${items.map((item, index) => renderTemplate`<span class="flex items-center gap-1"> ${index > 0 && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "h-3 w-3" })}`} ${item.to ? renderTemplate`<a${addAttribute(item.to, "href")} class="hover:text-foreground">${item.label}</a>` : renderTemplate`<span class="text-foreground">${item.label}</span>`} </span>`)} </nav>`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
