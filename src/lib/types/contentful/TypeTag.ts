import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeTagFields {
    tag: EntryFields.Symbol;
}

export type TypeTag = Entry<TypeTagFields>;
export type LocalizedTypeTagFields<Locales extends keyof any> = LocalizedFields<TypeTagFields, Locales>;
export type LocalizedTypeTag<Locales extends keyof any> = LocalizedEntry<TypeTag, Locales>;

export function isTypeTag(entry: WithContentTypeLink): entry is TypeTag {
    return entry?.sys?.contentType?.sys?.id === 'tag'
}
