import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeCodeBlockFields } from "./TypeCodeBlock";
import type { TypeFigureFields } from "./TypeFigure";
import type { TypeRichTextFields } from "./TypeRichText";
import type { TypeSummaryDetailsFields } from "./TypeSummaryDetails";
import type { TypeTagFields } from "./TypeTag";
import type { TypeTwoUpFields } from "./TypeTwoUp";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeBlogPostFields {
    title: EntryFields.Symbol;
    subtitle?: EntryFields.Symbol;
    datePublished: EntryFields.Date;
    dateUpdated?: EntryFields.Date;
    body: EntryFields.Text;
    bodyText?: EntryFields.RichText;
    contentBlocks?: Entry<TypeCodeBlockFields | TypeFigureFields | TypeRichTextFields | TypeSummaryDetailsFields | TypeTwoUpFields>[];
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
