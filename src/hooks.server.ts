import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/.netlify')) {
		return new Response(null, { status: 200 });
	}
	const response = await resolve(event);
	return response;
};
