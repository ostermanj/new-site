import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypePlaceholderDivFields {
    id: EntryFields.Symbol;
}

export type TypePlaceholderDiv = Entry<TypePlaceholderDivFields>;
export type LocalizedTypePlaceholderDivFields<Locales extends keyof any> = LocalizedFields<TypePlaceholderDivFields, Locales>;
export type LocalizedTypePlaceholderDiv<Locales extends keyof any> = LocalizedEntry<TypePlaceholderDiv, Locales>;

export function isTypePlaceholderDiv(entry: WithContentTypeLink): entry is TypePlaceholderDiv {
    return entry?.sys?.contentType?.sys?.id === 'placeholderDiv'
}
