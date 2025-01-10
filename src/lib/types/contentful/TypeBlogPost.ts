import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeAuthorFields } from "./TypeAuthor";
import type { TypeTagFields } from "./TypeTag";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeBlogPostFields {
    authors: Entry<TypeAuthorFields>[];
    title: EntryFields.Symbol;
    subtitle?: EntryFields.Symbol;
    datePublished: EntryFields.Date;
    dateUpdated?: EntryFields.Date;
    body: EntryFields.Text;
    bodyText?: EntryFields.RichText;
    snippet: EntryFields.Text;
    tags: Entry<TypeTagFields>[];
    heroImage?: Asset;
    slug?: EntryFields.Symbol;
}

export type TypeBlogPost = Entry<TypeBlogPostFields>;
export type LocalizedTypeBlogPostFields<Locales extends keyof any> = LocalizedFields<TypeBlogPostFields, Locales>;
export type LocalizedTypeBlogPost<Locales extends keyof any> = LocalizedEntry<TypeBlogPost, Locales>;

export function isTypeBlogPost(entry: WithContentTypeLink): entry is TypeBlogPost {
    return entry?.sys?.contentType?.sys?.id === 'blogPost'
}
