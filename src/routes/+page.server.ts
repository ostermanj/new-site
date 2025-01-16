// import contentful inits and getEntry, etc.
import type { PageServerLoad } from './$types';
import type { TypeHomepageFields } from '$lib/types/contentful/'
import { getHomepage } from '$lib/contentful';

export const load: PageServerLoad = async () => {
	const entries = await getHomepage();
	return entries.items[0].fields as unknown as TypeHomepageFields;
};