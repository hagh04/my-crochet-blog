import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_CHSjsHNx.mjs';
import 'clsx';

const frontmatter = {
  "title": "BEATIFULA KIDOS CORCHETO",
  "excerpt": "HIGH CROCHET KIDS ",
  "date": "2026-04-08T00:00:00.000Z",
  "readingTime": 5,
  "category": "baby-kids",
  "author": "hamza",
  "thumbnail": "https://res.cloudinary.com/dcgvm3vqc/image/upload/v1782338653/cld-sample-5.jpg"
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
        src: "https://res.cloudinary.com/dcgvm3vqc/image/upload/v1782338653/cld-sample-5.jpg",
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

const url = "src/content/blog/beatifula-kidos-corcheto.mdx";
const file = "C:/Users/Admin/my-crochet-blog/src/content/blog/beatifula-kidos-corcheto.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/my-crochet-blog/src/content/blog/beatifula-kidos-corcheto.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
