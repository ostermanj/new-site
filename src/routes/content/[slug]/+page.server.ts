import { error, redirect } from '@sveltejs/kit';
import { contentIdToSlug } from '$lib/mapping';

import type { PageServerLoad } from './$types';
import { getEntryBySlugAndType } from '$lib/contentful';
import { redirects } from '$lib/redirects';

const contentIdsToTry = ['blogPost', 'project', 'peaceCorpsPost'];

export const load: PageServerLoad = async ({params}) => {
    for (const contentId of contentIdsToTry) {
        if (redirects[params.slug as keyof typeof redirects]){
            params.slug = redirects[params.slug as keyof typeof redirects];
        }
        const entry = await getEntryBySlugAndType({ type: contentId, slug: params.slug});
        if ( entry?.total ){
            redirect(302, `/${contentIdToSlug[contentId as keyof typeof contentIdToSlug]}/${params.slug}`);
        }
    }
    error(404, 'Not found');
};

