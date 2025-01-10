import { getEntryBySlugAndType } from '$lib/contentful';
import { contentSlugToId, type ContentIdToFieldsType } from '$lib/mapping';
import richTextOptions from '$lib/rich-text-options.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
    console.log({params});
    try {
        const contentType = contentSlugToId[params.type as keyof typeof contentSlugToId] as keyof ContentIdToFieldsType;
        const entries = await getEntryBySlugAndType({type: contentType, slug: params.slug});
        console.log({entries});
        const fields = entries.items[0].fields as unknown as ContentIdToFieldsType[typeof contentType];
        const bodyHTML = fields.bodyText ? documentToHtmlString(fields.bodyText, richTextOptions) : null;
        return {
            fields,
            bodyHTML
        };
    } catch (error) {
        console.error(error);
    }
};