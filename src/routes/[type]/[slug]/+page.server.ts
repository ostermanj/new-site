import { getEntryBySlugAndType } from '$lib/contentful';
import { contentSlugToId, type ContentIdToFieldsType } from '$lib/mapping';
import { error as errorPage, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TypeSlashItemFields } from '$lib/types/contentful';

export const load: PageServerLoad = async ({params}) => {
    console.log({params});
    if (params.type === 'slashItem') {
        const slashItems = await getEntryBySlugAndType({type: 'slashItem', slug: params.slug});
        if (!slashItems || !slashItems.items.length) {
            errorPage(404, 'Not found');
        }
        // TODO: HANDLE FUTURE PAGINATION
        const fields = slashItems.items[0].fields as unknown as TypeSlashItemFields;
        redirect(302, `/${fields.type}/#${fields.slug}`);
    }
    const contentType = contentSlugToId[params.type as keyof typeof contentSlugToId] as keyof ContentIdToFieldsType;
    if (!contentType){
        errorPage(404, 'Not found');
    }
    const entries = await getEntryBySlugAndType({type: contentType, slug: params.slug});
    if (!entries || !entries.items.length) {
        errorPage(404, 'Not found');
    }
    const fields = entries.items[0].fields as unknown as ContentIdToFieldsType[typeof contentType];
    return {
        contentType,
        fields,
    };
};