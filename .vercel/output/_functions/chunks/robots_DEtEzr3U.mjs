import { S as SITE } from './blog-data_BSBXRKDS.mjs';

function GET() {
  return new Response(
    ["User-agent: *", "Allow: /", `Sitemap: ${SITE.url}/sitemap.xml`, ""].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
