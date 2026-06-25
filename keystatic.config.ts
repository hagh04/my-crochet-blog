import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: { kind: 'local' },
    collections: {
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: 'title' }),
                excerpt: fields.text({ label: 'Excerpt' }),
                date: fields.date({ label: 'Date', validation: { isRequired: true } }),
                readingTime: fields.integer({ label: 'Reading Time (Minutes)', defaultValue: 5 }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Patterns', value: 'patterns' },
                        { label: 'Tutorials', value: 'tutorials' },
                        { label: 'Amigurumi', value: 'amigurumi' },
                        { label: 'Wearables', value: 'wearables' },
                        { label: 'Home Decor', value: 'home-decor' },
                        { label: 'Baby & Kids', value: 'baby-kids' },
                        { label: 'Tips & Techniques', value: 'tips-techniques' },
                        { label: 'Yarn Reviews', value: 'yarn-reviews' },
                    ],
                    defaultValue: 'patterns',
                }),
                author: fields.text({ label: 'Author Name' }),
                thumbnail: fields.text({
                    label: 'Cloudinary Thumbnail URL',
                    description: 'Paste your Cloudinary link here'
                }),
                content: fields.mdx({ label: 'Article Content' }),
            },
        }),
    },
});