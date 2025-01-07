import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeNewPageFields {
    seriesTitle: EntryFields.Symbol;
    secondaryTitle?: EntryFields.Symbol;
    body: EntryFields.RichText;
    snippet?: EntryFields.Text;
    slug: EntryFields.Symbol;
    hero?: Asset;
}

export type TypeNewPage = Entry<TypeNewPageFields>;
export type LocalizedTypeNewPageFields<Locales extends keyof any> = LocalizedFields<TypeNewPageFields, Locales>;
export type LocalizedTypeNewPage<Locales extends keyof any> = LocalizedEntry<TypeNewPage, Locales>;

export function isTypeNewPage(entry: WithContentTypeLink): entry is TypeNewPage {
    return entry?.sys?.contentType?.sys?.id === 'newPage'
}
