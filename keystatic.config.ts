import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
    storage: {
        kind: 'github',
        repo: 'hagh04/my-crochet-blog'
    },
    collections: {
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: 'title' }),
                type: fields.select({
                    label: 'Post Type',
                    options: [
                        { label: 'Article', value: 'article' },
                        { label: 'Roundup / Directory', value: 'roundup' },
                    ],
                    defaultValue: 'article',
                }),
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
                content: fields.mdx({
                    label: 'Article Content',
                    components: {
                        CloudImage: block({
                            label: 'Image (URL)',
                            description: 'Insert an image from an external URL (Cloudinary, Unsplash, etc.)',
                            schema: {
                                src: fields.url({
                                    label: 'Image URL',
                                    validation: { isRequired: true },
                                }),
                                alt: fields.text({
                                    label: 'Alt Text',
                                    description: 'Describe the image for accessibility',
                                    validation: { isRequired: true },
                                }),
                                caption: fields.text({
                                    label: 'Caption (optional)',
                                    description: 'Photo credit or description shown below the image',
                                }),
                            },
                        }),
                        PatternLink: block({
                            label: 'Pattern Link',
                            description: 'Link to an external pattern source with designer credit',
                            schema: {
                                url: fields.url({
                                    label: 'Pattern URL',
                                    validation: { isRequired: true },
                                }),
                                designer: fields.text({
                                    label: 'Designer Name',
                                    validation: { isRequired: true },
                                }),
                                source: fields.text({
                                    label: 'Source (e.g. Ravelry, Etsy, Blog)',
                                    defaultValue: 'Free Pattern',
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
});