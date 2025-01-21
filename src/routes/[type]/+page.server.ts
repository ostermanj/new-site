import type { PageServerLoad } from './$types';
import { getEntryBySlugAndType, getPaginatedCollection, getSlashItems } from '$lib/contentful';
import type { TypePageFields, TypeSlashItemFields } from '$lib/types/contentful';
import { contentSlugToId, contentSlugToTitle, type ContentIdToType, type ContentIdToFieldsType } from '$lib/mapping';
import { error as errorPage } from '@sveltejs/kit';

type SlashItemType = TypeSlashItemFields["type"]; 
const isSlashItemType = (value: string): value is SlashItemType => {
    return value === "coffee"; // Validate against known value(s)
}
const loadSlashItems = async (slashType: TypeSlashItemFields['type']) => {
    const entries = await getSlashItems(slashType);
    return {
        isSlashPage: true,
        title: contentSlugToTitle[slashType as keyof typeof contentSlugToTitle],
        items: entries.items.map(entry => ({
            fields: entry.fields as unknown as TypeSlashItemFields,
            sys: entry.sys
        }))
    };
}
export const load: PageServerLoad = async ({params}) => {
    if (isSlashItemType(params.type)){
        return loadSlashItems(params.type);
    }
    const contentId = contentSlugToId[params.type as keyof typeof contentSlugToId] as (keyof ContentIdToType) | undefined;
    if (!contentId) {
        errorPage(404, 'Not found');
    }
    const entries = await getPaginatedCollection(contentId);
    if (params.type !== 'peace-corps'){
        return {
            title: contentSlugToTitle[params.type as keyof typeof contentSlugToTitle],
            // TODO  find a better wy to recast the fields type wo mapping
            items: entries.items.map(entry => ({
                fields: entry.fields as unknown as ContentIdToFieldsType[typeof contentId],
                sys: entry.sys
            }))
            // items: entries.items //as unknown as ContentIdToType[typeof contentId][]
        };
    }
    const pageEntries = await getEntryBySlugAndType({type: 'page', slug: 'peace-corps'});
    if (!pageEntries){
        errorPage(400, 'No entries found');
    }
    return {
        title: contentSlugToTitle[params.type as keyof typeof contentSlugToTitle],
        items: entries.items.map(entry => ({
            fields: entry.fields as unknown as ContentIdToFieldsType[typeof contentId],
            sys: entry.sys
        })),
        pageFields: pageEntries.items[0].fields as unknown as TypePageFields,
    };
};