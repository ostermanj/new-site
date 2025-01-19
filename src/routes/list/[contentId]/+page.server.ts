// import contentful inits and getEntry, etc.
import { error, redirect } from '@sveltejs/kit';

import { contentIdToSlug } from '$lib/mapping';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({params}) => {
	const contentId = params.contentId;
	const path = contentIdToSlug[contentId as keyof typeof contentIdToSlug];
	if (path){
		redirect(302, `/${path}`);
	} else {
		error(404, 'Not found');
	}
};

