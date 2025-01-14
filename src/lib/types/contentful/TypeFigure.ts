import type { Asset, Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeFigureFields {
    internalName: EntryFields.Symbol;
    image: Asset;
    caption?: EntryFields.RichText;
    size: "Default" | "Small";
}

export type TypeFigure = Entry<TypeFigureFields>;
export type LocalizedTypeFigureFields<Locales extends keyof any> = LocalizedFields<TypeFigureFields, Locales>;
export type LocalizedTypeFigure<Locales extends keyof any> = LocalizedEntry<TypeFigure, Locales>;

export function isTypeFigure(entry: WithContentTypeLink): entry is TypeFigure {
    return entry?.sys?.contentType?.sys?.id === 'figure'
}
