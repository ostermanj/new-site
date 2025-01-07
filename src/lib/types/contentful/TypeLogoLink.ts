import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeHomepageFields } from "./TypeHomepage";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeLogoLinkFields {
    logo: Asset;
    text: EntryFields.Symbol;
    link: Entry<TypeHomepageFields>;
}

export type TypeLogoLink = Entry<TypeLogoLinkFields>;
export type LocalizedTypeLogoLinkFields<Locales extends keyof any> = LocalizedFields<TypeLogoLinkFields, Locales>;
export type LocalizedTypeLogoLink<Locales extends keyof any> = LocalizedEntry<TypeLogoLink, Locales>;

export function isTypeLogoLink(entry: WithContentTypeLink): entry is TypeLogoLink {
    return entry?.sys?.contentType?.sys?.id === 'logoLink'
}
