import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeCodeBlockFields {
    internalName: EntryFields.Symbol;
    code: EntryFields.Text;
}

export type TypeCodeBlock = Entry<TypeCodeBlockFields>;
export type LocalizedTypeCodeBlockFields<Locales extends keyof any> = LocalizedFields<TypeCodeBlockFields, Locales>;
export type LocalizedTypeCodeBlock<Locales extends keyof any> = LocalizedEntry<TypeCodeBlock, Locales>;

export function isTypeCodeBlock(entry: WithContentTypeLink): entry is TypeCodeBlock {
    return entry?.sys?.contentType?.sys?.id === 'codeBlock'
}
