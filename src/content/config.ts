// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.

const courseSchema = z.object({
    title: z.string(),
    description: z.string(),
    // featured_img: image().refine((img) => img.width >= 220, {
    //     message: "Featured image must be at least 220 pixels wide!",
    // }),
    tags: z.array(z.string()),
    isDraft: z.boolean(),
    duration: z.string(),
    intake: z.string(),
    brochure_url: z.string().optional(),
    trainers: z.array(z.string()).optional(),
    form_option: z.string(),
    cert_logos: z.array(z.string()).optional(),
    /* 
    sortOrder: z.number(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    author: z.string().default('Anonymous'),
    language: z.enum(['en', 'es']),
    // An optional frontmatter property. Very common!
    footnote: z.string().optional(),
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    // publishDate: z.string().transform((str) => new Date(str)),
    // Advanced: Validate that the string is also an email
    authorContact: z.string().email(),
    // Advanced: Validate that the string is also a URL
    canonicalURL: z.string().url(), */
});


const courseCollection = defineCollection(
    { schema: courseSchema });

// 3. Export a single `collections` object to register your collection(s)


export const collections = {
    'course': courseCollection,
    // 'programme': programmeCollection,
    // 'person': personCollection,
};