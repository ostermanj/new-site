import type { Entry, EntryFields } from "contentful";
import type { LocalizedEntry, LocalizedFields } from "./Localized";
import type { TypeWorkplaceFields } from "./TypeWorkplace";
import type { WithContentTypeLink } from "./WithContentTypeLink";

export interface TypeWorkPositionFields {
    title: EntryFields.Symbol;
    workPlace: Entry<TypeWorkplaceFields>;
    startDate: EntryFields.Date;
    endDate?: EntryFields.Date;
}

export type TypeWorkPosition = Entry<TypeWorkPositionFields>;
export type LocalizedTypeWorkPositionFields<Locales extends keyof any> = LocalizedFields<TypeWorkPositionFields, Locales>;
export type LocalizedTypeWorkPosition<Locales extends keyof any> = LocalizedEntry<TypeWorkPosition, Locales>;

export function isTypeWorkPosition(entry: WithContentTypeLink): entry is TypeWorkPosition {
    return entry?.sys?.contentType?.sys?.id === 'workPosition'
}
