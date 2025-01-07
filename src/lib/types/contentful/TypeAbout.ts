import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeAboutFields {
    body: EntryFields.Text;
}

export type TypeAbout = Entry<TypeAboutFields>;
export type LocalizedTypeAboutFields<Locales extends keyof any> = LocalizedFields<TypeAboutFields, Locales>;
export type LocalizedTypeAbout<Locales extends keyof any> = LocalizedEntry<TypeAbout, Locales>;

export function isTypeAbout(entry: WithContentTypeLink): entry is TypeAbout {
    return entry?.sys?.contentType?.sys?.id === 'about'
}
