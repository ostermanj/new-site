import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeSlashItemFields {
    internalName: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    title: EntryFields.Symbol;
    bodyText: EntryFields.RichText;
    type: "coffee" | "til";
    datePublished: EntryFields.Date;
    blueskyPost?: EntryFields.Text;
    blueskyImages?: Asset[];
}

export type TypeSlashItem = Entry<TypeSlashItemFields>;
export type LocalizedTypeSlashItemFields<Locales extends keyof any> = LocalizedFields<TypeSlashItemFields, Locales>;
export type LocalizedTypeSlashItem<Locales extends keyof any> = LocalizedEntry<TypeSlashItem, Locales>;

export function isTypeSlashItem(entry: WithContentTypeLink): entry is TypeSlashItem {
    return entry?.sys?.contentType?.sys?.id === 'slashItem'
}
