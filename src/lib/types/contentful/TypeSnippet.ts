import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeSnippetFields {
    body: EntryFields.RichText;
    image?: Asset;
}

export type TypeSnippet = Entry<TypeSnippetFields>;
export type LocalizedTypeSnippetFields<Locales extends keyof any> = LocalizedFields<TypeSnippetFields, Locales>;
export type LocalizedTypeSnippet<Locales extends keyof any> = LocalizedEntry<TypeSnippet, Locales>;

export function isTypeSnippet(entry: WithContentTypeLink): entry is TypeSnippet {
    return entry?.sys?.contentType?.sys?.id === 'snippet'
}
