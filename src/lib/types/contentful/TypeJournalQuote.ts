import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeJournalQuoteFields {
    internalName: EntryFields.Symbol;
    text: EntryFields.RichText;
}

export type TypeJournalQuote = Entry<TypeJournalQuoteFields>;
export type LocalizedTypeJournalQuoteFields<Locales extends keyof any> = LocalizedFields<TypeJournalQuoteFields, Locales>;
export type LocalizedTypeJournalQuote<Locales extends keyof any> = LocalizedEntry<TypeJournalQuote, Locales>;

export function isTypeJournalQuote(entry: WithContentTypeLink): entry is TypeJournalQuote {
    return entry?.sys?.contentType?.sys?.id === 'journalQuote'
}
