import * as contentful from 'contentful';
import { C_SPACE, C_TOKEN, C_TOKEN_PREVIEW } from "$env/static/private";
import type { TypeSlashItemFields } from './types/contentful';
const client = contentful.createClient({
    space: C_SPACE,
    //environment: 'master',
    accessToken: import.meta.env.DEV ? C_TOKEN_PREVIEW : C_TOKEN,
    host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',    
});

export const getHomepage = async () => {
    try {
        const entries = await client.getEntries({
            content_type: 'homepage',
            include: 2,
        });
        return entries;
    } catch (error){
        console.error(error)
    }
}

export const getEntryBySlugAndType = async ({slug, type}: {slug: string, type: string}) => {
    try {
        const entries = await client.getEntries({
            content_type: type,
            "fields.slug": slug,
            include: 2,
        });
        return entries;
    } catch (error){
        console.error(error);
    }
}

export const getPaginatedCollection = async (content_type = "blogPost", skip = 0, limit = 100) => {
    const entries = await client.getEntries({
        content_type,
        skip,
        limit,
        order: ['-fields.datePublished']
    });
    return entries;
}

export const getSlashItems = async (type: TypeSlashItemFields['type'], content_type = "slashItem", skip = 0, limit = 100) => {
    const entries = await client.getEntries({
        content_type,
        skip,
        limit,
        "fields.type": type,
        order: ['-fields.datePublished']
    });
    return entries;
}