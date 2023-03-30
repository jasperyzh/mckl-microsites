declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

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

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"courses": {
"effective-lesson-design-and-planning.md": {
  id: "effective-lesson-design-and-planning.md",
  slug: "effective-lesson-design-and-planning",
  body: string,
  collection: "courses",
  data: any
},
"embracing-autism-understanding-supporting-learners-with-autism.md": {
  id: "embracing-autism-understanding-supporting-learners-with-autism.md",
  slug: "embracing-autism-understanding-supporting-learners-with-autism",
  body: string,
  collection: "courses",
  data: any
},
"essential-strategies-to-teaching-learners-with-special-needs.md": {
  id: "essential-strategies-to-teaching-learners-with-special-needs.md",
  slug: "essential-strategies-to-teaching-learners-with-special-needs",
  body: string,
  collection: "courses",
  data: any
},
"fasa-towards-effective-assessment-in-teaching-and-learning.md": {
  id: "fasa-towards-effective-assessment-in-teaching-and-learning.md",
  slug: "fasa-towards-effective-assessment-in-teaching-and-learning",
  body: string,
  collection: "courses",
  data: any
},
"teaching-an-effective-active-learning-class-active-learning.md": {
  id: "teaching-an-effective-active-learning-class-active-learning.md",
  slug: "teaching-an-effective-active-learning-class-active-learning",
  body: string,
  collection: "courses",
  data: any
},
},

	};

	type ContentConfig = never;
}
