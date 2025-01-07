import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypePoemFields {
    title: EntryFields.Symbol;
    body: EntryFields.RichText;
    showTitle: EntryFields.Boolean;
    className?: EntryFields.Symbol;
    image?: Asset;
    imageCredit?: EntryFields.RichText;
    datePublished: EntryFields.Date;
}

export type TypePoem = Entry<TypePoemFields>;
export type LocalizedTypePoemFields<Locales extends keyof any> = LocalizedFields<TypePoemFields, Locales>;
export type LocalizedTypePoem<Locales extends keyof any> = LocalizedEntry<TypePoem, Locales>;

export function isTypePoem(entry: WithContentTypeLink): entry is TypePoem {
    return entry?.sys?.contentType?.sys?.id === 'poem'
}
