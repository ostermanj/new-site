import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeExternalUrlFields {
    title: EntryFields.Symbol;
    url: EntryFields.Symbol;
}

export type TypeExternalUrl = Entry<TypeExternalUrlFields>;
export type LocalizedTypeExternalUrlFields<Locales extends keyof any> = LocalizedFields<TypeExternalUrlFields, Locales>;
export type LocalizedTypeExternalUrl<Locales extends keyof any> = LocalizedEntry<TypeExternalUrl, Locales>;

export function isTypeExternalUrl(entry: WithContentTypeLink): entry is TypeExternalUrl {
    return entry?.sys?.contentType?.sys?.id === 'externalUrl'
}
