declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"course": {
"cambridge-international-certificate-in-teaching-learning.mdx": {
  id: "cambridge-international-certificate-in-teaching-learning.mdx",
  slug: "cambridge-international-certificate-in-teaching-learning",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"cambridge-international-diploma-in-teaching-learning.mdx": {
  id: "cambridge-international-diploma-in-teaching-learning.mdx",
  slug: "cambridge-international-diploma-in-teaching-learning",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"effective-lesson-design-and-planning.mdx": {
  id: "effective-lesson-design-and-planning.mdx",
  slug: "effective-lesson-design-and-planning",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"embracing-autism-understanding-supporting-learners-with-autism.mdx": {
  id: "embracing-autism-understanding-supporting-learners-with-autism.mdx",
  slug: "embracing-autism-understanding-supporting-learners-with-autism",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"essential-strategies-to-teaching-learners-with-special-needs.mdx": {
  id: "essential-strategies-to-teaching-learners-with-special-needs.mdx",
  slug: "essential-strategies-to-teaching-learners-with-special-needs",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"fasa-towards-effective-assessment-in-teaching-and-learning.mdx": {
  id: "fasa-towards-effective-assessment-in-teaching-and-learning.mdx",
  slug: "fasa-towards-effective-assessment-in-teaching-and-learning",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
"teaching-an-effective-active-learning-class-active-learning.mdx": {
  id: "teaching-an-effective-active-learning-class-active-learning.mdx",
  slug: "teaching-an-effective-active-learning-class-active-learning",
  body: string,
  collection: "course",
  data: InferEntrySchema<"course">
} & { render(): Render[".mdx"] },
},
"courses": {
"effective-lesson-design-and-planning.md": {
  id: "effective-lesson-design-and-planning.md",
  slug: "effective-lesson-design-and-planning",
  body: string,
  collection: "courses",
  data: any
} & { render(): Render[".md"] },
"embracing-autism-understanding-supporting-learners-with-autism.md": {
  id: "embracing-autism-understanding-supporting-learners-with-autism.md",
  slug: "embracing-autism-understanding-supporting-learners-with-autism",
  body: string,
  collection: "courses",
  data: any
} & { render(): Render[".md"] },
"essential-strategies-to-teaching-learners-with-special-needs.md": {
  id: "essential-strategies-to-teaching-learners-with-special-needs.md",
  slug: "essential-strategies-to-teaching-learners-with-special-needs",
  body: string,
  collection: "courses",
  data: any
} & { render(): Render[".md"] },
"fasa-towards-effective-assessment-in-teaching-and-learning.md": {
  id: "fasa-towards-effective-assessment-in-teaching-and-learning.md",
  slug: "fasa-towards-effective-assessment-in-teaching-and-learning",
  body: string,
  collection: "courses",
  data: any
} & { render(): Render[".md"] },
"teaching-an-effective-active-learning-class-active-learning.md": {
  id: "teaching-an-effective-active-learning-class-active-learning.md",
  slug: "teaching-an-effective-active-learning-class-active-learning",
  body: string,
  collection: "courses",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
