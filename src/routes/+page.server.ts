// import contentful inits and getEntry, etc.
import type { PageServerLoad } from './$types';
import type { TypeNewPageFields } from '$lib/types/contentful/'
import { getEntryBySlugAndType } from '$lib/contentful';

export const load: PageServerLoad = async () => {
	const entries = await getEntryBySlugAndType({type: 'newPage', slug: 'about'});
	return entries.items[0].fields as unknown as TypeNewPageFields;
};