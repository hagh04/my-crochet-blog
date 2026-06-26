import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_CHSjsHNx.mjs';
import 'clsx';

const frontmatter = {
  "title": "BEATIFUL KIDS CROCHET",
  "excerpt": "Adorable crochet patterns and ideas for kids.",
  "date": "2026-06-06T00:00:00.000Z",
  "readingTime": 5,
  "category": "baby-kids",
  "author": "hamza",
  "thumbnail": "https://res.cloudinary.com/dcgvm3vqc/image/upload/v1782381807/5_iaofta.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Here is the first paragraph of my amazing article."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://res.cloudinary.com/dcgvm3vqc/image/upload/v1782381807/5_iaofta.png",
        alt: "A beautiful crochet blanket"
      })
    }), "\n", createVNode(_components.p, {
      children: "And here is the next paragraph continuing the story…"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/beatiful-kids-crochet.mdx";
const file = "C:/Users/Admin/my-crochet-blog/src/content/blog/beatiful-kids-crochet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/my-crochet-blog/src/content/blog/beatiful-kids-crochet.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
