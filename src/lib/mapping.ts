import type { TypeBlogPost, TypeBlogPostFields, TypePeaceCorpsPost, TypePeaceCorpsPostFields, TypeProject, TypeProjectFields, TypeSlashItem, TypeSlashItemFields } from '$lib/types/contentful';

export type ContentIdToType = {
    blogPost: TypeBlogPost;
    project: TypeProject;
    peaceCorpsPost: TypePeaceCorpsPost;
    slashItem: TypeSlashItem;
};
export type ContentIdToFieldsType = {
    blogPost: TypeBlogPostFields;
    project: TypeProjectFields;
    peaceCorpsPost: TypePeaceCorpsPostFields;
    slashItem: TypeSlashItemFields;
};

type ContentIdToSlugType = {
    blogPost: 'blog-posts';
    project: 'projects';
    peaceCorpsPost: 'peace-corps';
}

export const contentSlugToId = {
    'blog-posts': 'blogPost',
    'projects': 'project',
    'peace-corps': 'peaceCorpsPost',
};
export const contentIdToSlug: ContentIdToSlugType = {
    'blogPost' : 'blog-posts',
    'project' : 'projects',
    'peaceCorpsPost' : 'peace-corps',
};
export const contentSlugToTitle = {
    'blog-posts': 'Blog posts',
    'projects': 'Projects',
    'peace-corps': 'Sand in the Couscous',
    'coffee': '/coffee'
};
export const contentSlugToSingular = {
    'blog-posts': 'Blog post',
    'projects': 'Project',
    'peace-corps': 'Peace Corps'
};