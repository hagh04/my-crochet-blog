/**
 * Rehype plugin that adds loading="lazy" and decoding="async"
 * to all <img> tags in Markdown/MDX content.
 *
 * This covers standard markdown images: ![alt](url)
 * The hero image is rendered separately in [slug].astro with eager loading.
 */
export function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties = node.properties || {};
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = node.properties.decoding || 'async';
      }
    });
  };
}

function visit(node, type, callback) {
  if (node.type === type) callback(node);
  if (node.children) {
    for (const child of node.children) {
      visit(child, type, callback);
    }
  }
}
