import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeBlogPostFields } from "./TypeBlogPost";
import type { TypePeaceCorpsPostFields } from "./TypePeaceCorpsPost";
import type { TypeProjectFields } from "./TypeProject";
import type { TypeWorkPositionFields } from "./TypeWorkPosition";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeHomepageFields {
    overview: EntryFields.Text;
    body: EntryFields.Text;
    featuredBlogPosts?: Entry<TypeBlogPostFields | TypePeaceCorpsPostFields | TypeProjectFields>[];
    featuredWorkExperience?: Entry<TypeWorkPositionFields>[];
}

export type TypeHomepage = Entry<TypeHomepageFields>;
export type LocalizedTypeHomepageFields<Locales extends keyof any> = LocalizedFields<TypeHomepageFields, Locales>;
export type LocalizedTypeHomepage<Locales extends keyof any> = LocalizedEntry<TypeHomepage, Locales>;

export function isTypeHomepage(entry: WithContentTypeLink): entry is TypeHomepage {
    return entry?.sys?.contentType?.sys?.id === 'homepage'
}
