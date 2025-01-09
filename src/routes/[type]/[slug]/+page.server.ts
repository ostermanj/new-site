import type { PageServerLoad } from '../../$types';
import { getEntryBySlugAndType } from '$lib/contentful';
import type { TypePageFields } from '$lib/types/contentful';
import { contentMap, titleMap, type ContentTypeMap } from '$lib/mapping';


export const load: PageServerLoad = async ({params}) => {
    console.log({params});
    try {
        const contentType = contentMap[params.slug as keyof typeof contentMap] as keyof ContentTypeMap;
        console.log(params.type);
        const entries = await getPaginatedCollection(contentType);
        if (params.type !== 'peace-corps'){
            return {
                title: titleMap[params.type as keyof typeof titleMap],
                items: entries.items.map(entry => entry.fields as unknown as ContentTypeMap[typeof contentType])
            };
        }
        const pageEntries = await getEntryBySlugAndType({type: 'page', slug: 'peace-corps'});
        return {
            title: titleMap[params.type as keyof typeof titleMap],
            items: entries.items.map(entry => entry.fields as unknown as ContentTypeMap[typeof contentType]),
            pageFields: pageEntries.items[0].fields as unknown as TypePageFields
        };
    } catch (error) {
        console.error(error);
    }
    return {};
};