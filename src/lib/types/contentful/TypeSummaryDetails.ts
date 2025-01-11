import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeSummaryDetailsFields {
    internalName: EntryFields.Symbol;
    summary?: EntryFields.RichText;
    details: EntryFields.RichText;
}

export type TypeSummaryDetails = Entry<TypeSummaryDetailsFields>;
export type LocalizedTypeSummaryDetailsFields<Locales extends keyof any> = LocalizedFields<TypeSummaryDetailsFields, Locales>;
export type LocalizedTypeSummaryDetails<Locales extends keyof any> = LocalizedEntry<TypeSummaryDetails, Locales>;

export function isTypeSummaryDetails(entry: WithContentTypeLink): entry is TypeSummaryDetails {
    return entry?.sys?.contentType?.sys?.id === 'summaryDetails'
}
