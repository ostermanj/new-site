// import contentful inits and getEntry, etc.
import type { PageServerLoad } from './$types';
import { getPaginatedCollection } from '$lib/contentful';
import type { TypeBlogPostFields } from '$lib/types/contentful';

type ContentTypeMap = {
    blogPost: TypeBlogPostFields;
  };

const contentMap = {
    'blog-posts': 'blogPost'
};
const titleMap = {
    'blog-posts': 'Blog posts'
};

export const load: PageServerLoad = async ({params}) => {
    try {
        const contentType = contentMap[params.type as keyof typeof contentMap] as keyof ContentTypeMap;
        const entries = await getPaginatedCollection(contentType);
        return {
            title: titleMap[params.type as keyof typeof titleMap],
            // items: entries.items as unknown as ContentTypeMap[typeof contentType][]};
            items: entries.items.map(entry => entry.fields as unknown as ContentTypeMap[typeof contentType])
        };
    } catch (error) {
        console.error(error);
    }
};