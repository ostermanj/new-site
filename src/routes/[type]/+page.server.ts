import type { PageServerLoad } from './$types';
import { getEntryBySlugAndType, getPaginatedCollection } from '$lib/contentful';
import type { TypePageFields } from '$lib/types/contentful';
import { contentSlugToId, contentSlugToTitle, type ContentIdToType, type ContentIdToFieldsType } from '$lib/mapping';


export const load: PageServerLoad = async ({params}) => {
    try {
        const contentId = contentSlugToId[params.type as keyof typeof contentSlugToId] as keyof ContentIdToType;
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
        return {
            title: contentSlugToTitle[params.type as keyof typeof contentSlugToTitle],
            // items: entries.items.map(entry => entry.fields as unknown as ContentIdToType[typeof contentId]),
            // items: entries.items,// as unknown as ContentIdToType[typeof contentId],
            items: entries.items.map(entry => ({
                fields: entry.fields as unknown as ContentIdToFieldsType[typeof contentId],
                sys: entry.sys
            })),
            pageFields: pageEntries.items[0].fields as unknown as TypePageFields,
        };
    } catch (error) {
        console.error(error);
    }
};