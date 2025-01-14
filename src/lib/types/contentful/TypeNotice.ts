import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeNoticeFields {
    internalName: EntryFields.Symbol;
    label: EntryFields.Symbol;
    text: EntryFields.RichText;
}

export type TypeNotice = Entry<TypeNoticeFields>;
export type LocalizedTypeNoticeFields<Locales extends keyof any> = LocalizedFields<TypeNoticeFields, Locales>;
export type LocalizedTypeNotice<Locales extends keyof any> = LocalizedEntry<TypeNotice, Locales>;

export function isTypeNotice(entry: WithContentTypeLink): entry is TypeNotice {
    return entry?.sys?.contentType?.sys?.id === 'notice'
}
