import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeRichTextFields {
    internalName: EntryFields.Symbol;
    text: EntryFields.RichText;
}

export type TypeRichText = Entry<TypeRichTextFields>;
export type LocalizedTypeRichTextFields<Locales extends keyof any> = LocalizedFields<TypeRichTextFields, Locales>;
export type LocalizedTypeRichText<Locales extends keyof any> = LocalizedEntry<TypeRichText, Locales>;

export function isTypeRichText(entry: WithContentTypeLink): entry is TypeRichText {
    return entry?.sys?.contentType?.sys?.id === 'richText'
}
