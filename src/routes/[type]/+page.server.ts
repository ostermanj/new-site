// import contentful inits and getEntry, etc.
import type { PageServerLoad } from './$types';
import { getEntryBySlugAndType, getPaginatedCollection } from '$lib/contentful';
import type { TypeBlogPostFields, TypePageFields, TypeProjectFields } from '$lib/types/contentful';

type ContentTypeMap = {
    blogPost: TypeBlogPostFields;
    project: TypeProjectFields;
  };

const contentMap = {
    'blog-posts': 'blogPost',
    'projects': 'project',
    'peace-corps': 'peaceCorpsPost'
};
const titleMap = {
    'blog-posts': 'Blog posts',
    'projects': 'Projects',
    'peace-corps': 'Sand in the Couscous'
};

export const load: PageServerLoad = async ({params}) => {
    try {
        const contentType = contentMap[params.type as keyof typeof contentMap] as keyof ContentTypeMap;
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
};