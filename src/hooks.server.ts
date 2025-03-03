import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/.netlify')) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const context = (event.platform as any)?.context;
		if (context) {
			const next = await context.next();
			console.log(next);
			return next;
		}
		return new Response(null, { status: 404 });
	}

	const response = await resolve(event);
	return response;
};
