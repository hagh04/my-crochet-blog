import { c as createComponent } from './astro-component_CabZ88q0.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate } from './entrypoint_CHSjsHNx.mjs';
import 'clsx';
import { r as renderScript } from './BaseLayout_BZnZ_Rv_.mjs';

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Newsletter;
  const { compact = false } = Astro2.props;
  return renderTemplate`${compact ? renderTemplate`${maybeRenderHead()}<div><div class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Newsletter</div><p class="mt-2 text-sm text-muted-foreground">A short letter, once a fortnight. No noise.</p><form data-newsletter-form class="mt-3 flex gap-2"><input type="email" required aria-label="Email address" placeholder="you@example.com" class="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"><button type="submit" class="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">
Join
</button></form><p data-newsletter-done class="mt-2 text-xs text-primary" role="status" hidden>Thanks &mdash; check your inbox.</p></div>` : renderTemplate`<section data-newsletter-cta class="border-t border-border/60 pt-16 pb-10"><div class="mx-auto max-w-2xl px-5 text-center"><h2 class="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">A quieter inbox.</h2><p class="mt-3 text-muted-foreground">
One thoughtful letter every other Sunday &mdash; new essays, things worth reading, and the occasional photograph.
</p><form data-newsletter-form class="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"><input type="email" required aria-label="Email address" placeholder="you@example.com" class="min-w-0 flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"><button type="submit" class="rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
Subscribe
</button></form><p data-newsletter-done class="mt-3 text-sm text-primary" role="status" hidden>Thanks &mdash; check your inbox to confirm.</p><p class="mt-3 text-xs text-muted-foreground">Free. Unsubscribe in one click.</p></div></section>`}${renderScript($$result, "C:/Users/Admin/my-crochet-blog/src/components/Newsletter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Admin/my-crochet-blog/src/components/Newsletter.astro", void 0);

export { $$Newsletter as $ };
