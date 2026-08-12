/**
 * Rehype plugin that optimizes all <img> tags in Markdown/MDX content:
 *
 * 1. Adds loading="lazy" and decoding="async" for performance.
 * 2. Injects Cloudinary auto-format/quality/width transforms into any
 *    Cloudinary URL (f_auto,q_auto,w_800 after /upload/).
 *
 * The hero image is rendered separately in [slug].astro with eager loading
 * and is NOT affected by this plugin.
 */

const CLOUDINARY_TRANSFORMS = 'f_auto,q_auto,w_800';

function optimizeCloudinaryUrl(src) {
  if (!src || !src.includes('cloudinary.com') || !src.includes('/upload/')) {
    return src;
  }

  // Avoid double-injecting if transforms are already present
  if (src.includes('f_auto')) return src;

  return src.replace('/upload/', `/upload/${CLOUDINARY_TRANSFORMS}/`);
}

export function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties = node.properties || {};
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = node.properties.decoding || 'async';

        if (node.properties.src) {
          node.properties.src = optimizeCloudinaryUrl(node.properties.src);
        }
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
