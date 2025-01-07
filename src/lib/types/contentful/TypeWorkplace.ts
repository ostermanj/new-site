import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeWorkplaceFields {
    name: EntryFields.Symbol;
    url?: EntryFields.Symbol;
}

export type TypeWorkplace = Entry<TypeWorkplaceFields>;
export type LocalizedTypeWorkplaceFields<Locales extends keyof any> = LocalizedFields<TypeWorkplaceFields, Locales>;
export type LocalizedTypeWorkplace<Locales extends keyof any> = LocalizedEntry<TypeWorkplace, Locales>;

export function isTypeWorkplace(entry: WithContentTypeLink): entry is TypeWorkplace {
    return entry?.sys?.contentType?.sys?.id === 'workplace'
}
