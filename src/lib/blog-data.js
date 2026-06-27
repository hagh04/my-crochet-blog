import { getCollection } from "astro:content";

const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://softcrochet.com"
).replace(/\/$/, "");

export const authors = [
  {
    slug: "hamza",
    name: "Hamza",
    bio: "Editor and crochet enthusiast curating the best free patterns from talented designers worldwide.",
    longBio:
      "Hamza is the founder and editor of Soft Crochet, a curated directory of the best free crochet patterns. With a passion for handmade crafts and a keen eye for beautiful designs, Hamza brings you hand-picked pattern collections, tutorials, and yarn reviews to inspire your next project.",
    avatar: "https://i.pravatar.cc/200?img=12",
  },
];

export const categories = [
  { slug: "patterns", name: "Patterns" },
  { slug: "tutorials", name: "Tutorials" },
  { slug: "amigurumi", name: "Amigurumi" },
  { slug: "wearables", name: "Wearables" },
  { slug: "home-decor", name: "Home Decor" },
  { slug: "baby-kids", name: "Baby & Kids" },
  { slug: "tips-techniques", name: "Tips & Techniques" },
  { slug: "yarn-reviews", name: "Yarn Reviews" },
];

export const tags = [
  { slug: "beginner", name: "Beginner" },
  { slug: "intermediate", name: "Intermediate" },
  { slug: "advanced", name: "Advanced" },
  { slug: "blankets", name: "Blankets" },
  { slug: "scarves", name: "Scarves" },
  { slug: "hats", name: "Hats" },
  { slug: "toys", name: "Toys" },
  { slug: "bags", name: "Bags" },
  { slug: "granny-square", name: "Granny Square" },
  { slug: "doilies", name: "Doilies" },
  { slug: "cardigans", name: "Cardigans" },
  { slug: "cotton-yarn", name: "Cotton Yarn" },
  { slug: "acrylic-yarn", name: "Acrylic Yarn" },
  { slug: "free-pattern", name: "Free Pattern" },
];

const isoDate = (date) => date?.toISOString().slice(0, 10);

export const imageSrc = (image) => (typeof image === "string" ? image : image?.src);

export const normalizePost = (entry) => ({
  slug: entry.id,
  ...entry.data,
  date: isoDate(entry.data.date),
  updated: isoDate(entry.data.updated),
});

export const posts = async () => (await getCollection("blog")).map(normalizePost);

export const getPost = async (slug) => (await posts()).find((post) => post.slug === slug);
export const getAuthor = (slug) => authors.find((author) => author.slug === slug);
export const getCategory = (slug) => categories.find((category) => category.slug === slug);
export const getTag = (slug) => tags.find((tag) => tag.slug === slug);
export const postsByCategory = async (slug) =>
  (await sortedPosts()).filter((post) => post.category === slug);
export const postsByTag = async (slug) =>
  (await sortedPosts()).filter((post) => post.tags.includes(slug));
export const postsByAuthor = async (slug) =>
  (await sortedPosts()).filter((post) => post.author === slug);
export const sortedPosts = async () =>
  [...(await posts())].sort((a, b) => (a.date < b.date ? 1 : -1));
export const featuredPost = async () => {
  const sorted = await sortedPosts();
  return sorted.find((post) => post.featured) ?? sorted[0];
};
export const popularPosts = async () => (await sortedPosts()).slice(0, 4);
export const relatedPosts = async (post, n = 3) =>
  (await sortedPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const score = (candidate) =>
        (candidate.category === post.category ? 2 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, n);

export const adjacentPosts = async (post) => {
  const sorted = await sortedPosts();
  const index = sorted.findIndex((candidate) => candidate.slug === post.slug);
  return { prev: sorted[index + 1], next: sorted[index - 1] };
};

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const SITE = {
  name: "Soft Crochet",
  description:
    "Discover the best free crochet patterns, step-by-step tutorials, and yarn reviews. Curated collections for baby blankets, amigurumi, wearables, home decor, and more.",
  url: siteUrl,
};
