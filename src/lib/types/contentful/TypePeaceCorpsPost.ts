import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypePeaceCorpsPostFields {
    title: EntryFields.Symbol;
    subtitle?: EntryFields.Symbol;
    datePublished: EntryFields.Date;
    dateUpdated?: EntryFields.Date;
    body: EntryFields.Text;
    bodyText?: EntryFields.RichText;
    snippet?: EntryFields.Text;
    heroImage?: Asset;
    slug?: EntryFields.Symbol;
    isPoem: EntryFields.Boolean;
}

export type TypePeaceCorpsPost = Entry<TypePeaceCorpsPostFields>;
export type LocalizedTypePeaceCorpsPostFields<Locales extends keyof any> = LocalizedFields<TypePeaceCorpsPostFields, Locales>;
export type LocalizedTypePeaceCorpsPost<Locales extends keyof any> = LocalizedEntry<TypePeaceCorpsPost, Locales>;

export function isTypePeaceCorpsPost(entry: WithContentTypeLink): entry is TypePeaceCorpsPost {
    return entry?.sys?.contentType?.sys?.id === 'peaceCorpsPost'
}
