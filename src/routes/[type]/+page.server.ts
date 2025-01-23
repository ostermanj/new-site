import type { PageServerLoad } from './$types';
import { getEntryBySlugAndType, getPaginatedCollection, getSlashItems } from '$lib/contentful';
import type { TypePageFields, TypeSlashItemFields } from '$lib/types/contentful';
import { contentSlugToId, type ContentIdToType, type ContentIdToFieldsType } from '$lib/mapping';
import { error as errorPage } from '@sveltejs/kit';

const returnSlashItems = async (slashType: TypeSlashItemFields['type']) => {
    const entries = await getSlashItems(slashType);
    return entries.items.map(entry => ({
            fields: entry.fields as unknown as TypeSlashItemFields,
            sys: entry.sys
        }))
}
export const load: PageServerLoad = async ({params}) => {
    const pageEntries = await getEntryBySlugAndType({type: 'page', slug: params.type});
    if (!pageEntries){
        errorPage(400, 'No entries found');
    }
    const isSlashPage = (pageEntries.items[0].fields as unknown as TypePageFields).isSlashPage;
    if (isSlashPage){
        return {
            items: await returnSlashItems(params.type as TypeSlashItemFields['type']),
            pageFields: pageEntries.items[0].fields as unknown as TypePageFields,
        };
    }
    const contentId = contentSlugToId[params.type as keyof typeof contentSlugToId] as (keyof ContentIdToType) | undefined;
    if (!contentId) {
        errorPage(404, 'Not found');
    }
    const entries = await getPaginatedCollection(contentId);
    return {
        items: entries.items.map(entry => ({
            fields: entry.fields as unknown as ContentIdToFieldsType[typeof contentId],
            sys: entry.sys
        })),
        pageFields: pageEntries.items[0].fields as unknown as TypePageFields,
    };
};