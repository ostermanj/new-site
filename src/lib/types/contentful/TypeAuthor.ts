import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeAuthorFields {
    fullName: EntryFields.Symbol;
    bio?: EntryFields.Text;
    photo?: Asset;
    website?: EntryFields.Symbol;
    twitterAccount?: EntryFields.Symbol;
    linkedinAccount?: EntryFields.Symbol;
}

export type TypeAuthor = Entry<TypeAuthorFields>;
export type LocalizedTypeAuthorFields<Locales extends keyof any> = LocalizedFields<TypeAuthorFields, Locales>;
export type LocalizedTypeAuthor<Locales extends keyof any> = LocalizedEntry<TypeAuthor, Locales>;

export function isTypeAuthor(entry: WithContentTypeLink): entry is TypeAuthor {
    return entry?.sys?.contentType?.sys?.id === 'author'
}
