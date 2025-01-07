import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeExternalUrlFields } from "./TypeExternalUrl";
import type { TypeInternalLinkFields } from "./TypeInternalLink";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeTestLinkCardFields {
    title: EntryFields.Symbol;
    image?: Asset;
    urlOrInternalLink: Entry<TypeExternalUrlFields | TypeInternalLinkFields>;
}

export type TypeTestLinkCard = Entry<TypeTestLinkCardFields>;
export type LocalizedTypeTestLinkCardFields<Locales extends keyof any> = LocalizedFields<TypeTestLinkCardFields, Locales>;
export type LocalizedTypeTestLinkCard<Locales extends keyof any> = LocalizedEntry<TypeTestLinkCard, Locales>;

export function isTypeTestLinkCard(entry: WithContentTypeLink): entry is TypeTestLinkCard {
    return entry?.sys?.contentType?.sys?.id === 'testLinkCard'
}
