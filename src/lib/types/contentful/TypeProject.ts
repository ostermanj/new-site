import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeTagFields } from "./TypeTag";
import type { TypeWorkplaceFields } from "./TypeWorkplace";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeProjectFields {
    title: EntryFields.Symbol;
    workplace?: Entry<TypeWorkplaceFields>;
    repository?: EntryFields.Symbol;
    link?: EntryFields.Symbol;
    datePublished: EntryFields.Date;
    dateUpdated?: EntryFields.Date;
    body: EntryFields.Text;
    bodyText?: EntryFields.RichText;
    snippet: EntryFields.Text;
    tags: Entry<TypeTagFields>[];
    heroImage?: Asset;
    slug: EntryFields.Symbol;
}

export type TypeProject = Entry<TypeProjectFields>;
export type LocalizedTypeProjectFields<Locales extends keyof any> = LocalizedFields<TypeProjectFields, Locales>;
export type LocalizedTypeProject<Locales extends keyof any> = LocalizedEntry<TypeProject, Locales>;

export function isTypeProject(entry: WithContentTypeLink): entry is TypeProject {
    return entry?.sys?.contentType?.sys?.id === 'project'
}
