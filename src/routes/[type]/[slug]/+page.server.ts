import { getEntryBySlugAndType } from '$lib/contentful';
import { contentSlugToId, type ContentIdToFieldsType } from '$lib/mapping';
import { error as errorPage } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
    const contentType = contentSlugToId[params.type as keyof typeof contentSlugToId] as keyof ContentIdToFieldsType;
    if (!contentType){
        errorPage(404, 'Not found');
    }
    const entries = await getEntryBySlugAndType({type: contentType, slug: params.slug});
    console.log({entries});
    if (!entries || !entries.items.length) {
        console.log('no entries!')
        errorPage(404, 'Not found');
    }
    const fields = entries.items[0].fields as unknown as ContentIdToFieldsType[typeof contentType];
    return {
        contentType,
        fields,
    };
};