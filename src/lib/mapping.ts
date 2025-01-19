import type { TypeBlogPost, TypeBlogPostFields, TypePeaceCorpsPost, TypePeaceCorpsPostFields, TypeProject, TypeProjectFields } from '$lib/types/contentful';

export type ContentIdToType = {
    blogPost: TypeBlogPost;
    project: TypeProject;
    peaceCorpsPost: TypePeaceCorpsPost;
};
export type ContentIdToFieldsType = {
    blogPost: TypeBlogPostFields;
    project: TypeProjectFields;
    peaceCorpsPost: TypePeaceCorpsPostFields;
};

type ContentIdToSlugType = {
    blogPost: 'blog-posts';
    project: 'projects';
    peaceCorpsPost: 'peace-corps';
    string?: undefined;
}

export const contentSlugToId = {
    'blog-posts': 'blogPost',
    'projects': 'project',
    'peace-corps': 'peaceCorpsPost'
};
export const contentIdToSlug: ContentIdToSlugType = {
    'blogPost' : 'blog-posts',
    'project' : 'projects',
    'peaceCorpsPost' : 'peace-corps',
};
export const contentSlugToTitle = {
    'blog-posts': 'Blog posts',
    'projects': 'Projects',
    'peace-corps': 'Sand in the Couscous'
};
export const contentSlugToSingular = {
    'blog-posts': 'Blog post',
    'projects': 'Project',
    'peace-corps': 'Peace Corps'
};