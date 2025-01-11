import * as contentful from 'contentful';
import { C_SPACE, C_TOKEN } from "$env/static/private";
const client = contentful.createClient({
    space: C_SPACE,
    //environment: 'master',
    accessToken: C_TOKEN
});

export const getEntryBySlugAndType = async ({slug, type}: {slug: string, type: string}) => {
    const entries = await client.getEntries({
        content_type: type,
        "fields.slug": slug,
        include: 2,
    });
    return entries;
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