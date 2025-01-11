import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeFigureFields } from "./TypeFigure";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeTwoUpFields {
    internalName: EntryFields.Symbol;
    figures: Entry<TypeFigureFields>[];
}

export type TypeTwoUp = Entry<TypeTwoUpFields>;
export type LocalizedTypeTwoUpFields<Locales extends keyof any> = LocalizedFields<TypeTwoUpFields, Locales>;
export type LocalizedTypeTwoUp<Locales extends keyof any> = LocalizedEntry<TypeTwoUp, Locales>;

export function isTypeTwoUp(entry: WithContentTypeLink): entry is TypeTwoUp {
    return entry?.sys?.contentType?.sys?.id === 'twoUp'
}
