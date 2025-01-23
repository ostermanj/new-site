import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypePageFields {
    internalName: EntryFields.Symbol;
    isSlashPage: EntryFields.Boolean;
    title: EntryFields.Symbol;
    showTitle: EntryFields.Boolean;
    subtitle?: EntryFields.Symbol;
    seriesTitle: EntryFields.Symbol;
    secondaryTitle?: EntryFields.Symbol;
    body: EntryFields.Text;
    bodyText?: EntryFields.RichText;
    snippet?: EntryFields.Text;
    slug: EntryFields.Symbol;
    hero?: Asset;
}

export type TypePage = Entry<TypePageFields>;
export type LocalizedTypePageFields<Locales extends keyof any> = LocalizedFields<TypePageFields, Locales>;
export type LocalizedTypePage<Locales extends keyof any> = LocalizedEntry<TypePage, Locales>;

export function isTypePage(entry: WithContentTypeLink): entry is TypePage {
    return entry?.sys?.contentType?.sys?.id === 'page'
}
