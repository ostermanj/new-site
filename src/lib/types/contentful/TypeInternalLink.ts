import type { Entry } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeAboutFields } from "./TypeAbout";
import type { TypePageFields } from "./TypePage";
import type { TypePeaceCorpsPostFields } from "./TypePeaceCorpsPost";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeInternalLinkFields {
    link: Entry<TypeAboutFields | TypePageFields | TypePeaceCorpsPostFields>;
}

export type TypeInternalLink = Entry<TypeInternalLinkFields>;
export type LocalizedTypeInternalLinkFields<Locales extends keyof any> = LocalizedFields<TypeInternalLinkFields, Locales>;
export type LocalizedTypeInternalLink<Locales extends keyof any> = LocalizedEntry<TypeInternalLink, Locales>;

export function isTypeInternalLink(entry: WithContentTypeLink): entry is TypeInternalLink {
    return entry?.sys?.contentType?.sys?.id === 'internalLink'
}
