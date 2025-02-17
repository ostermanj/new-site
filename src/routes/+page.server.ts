// import contentful inits and getEntry, etc.
import { checkRobots } from './robots';
import type { PageServerLoad } from './$types';
import type { TypeHomepageFields } from '$lib/types/contentful/'
import { getHomepage } from '$lib/contentful';
import { error as errorPage } from '@sveltejs/kit';

export const load: PageServerLoad = async ({request}) => {
	checkRobots(request);
	const entries = await getHomepage();
	if (!entries){
		errorPage(400, 'Not found');
	}
	return entries.items[0].fields as unknown as TypeHomepageFields;
};

