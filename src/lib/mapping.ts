import type { TypeBlogPostFields, TypeProjectFields } from '$lib/types/contentful';

export type ContentTypeMap = {
    blogPost: TypeBlogPostFields;
    project: TypeProjectFields;
};

export const contentMap = {
    'blog-posts': 'blogPost',
    'projects': 'project',
    'peace-corps': 'peaceCorpsPost'
};
export const titleMap = {
    'blog-posts': 'Blog posts',
    'projects': 'Projects',
    'peace-corps': 'Sand in the Couscous'
};