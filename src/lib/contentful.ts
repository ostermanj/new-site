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
        "fields.slug": slug
    });
    return entries;
}