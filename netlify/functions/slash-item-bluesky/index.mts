import { Context } from '@netlify/functions';
import { verifyRequest } from '@contentful/node-apps-toolkit';
import { BskyAgent, RichText } from '@atproto/api';
const B_IDENTIFIER = Netlify.env.get('B_IDENTIFIER');
const B_AUTH = Netlify.env.get('B_AUTH');
const C_WEBHOOK_SIGNING_SECRET = Netlify.env.get('C_WEBHOOK_SIGNING_SECRET');

function resolveLink(type: string, slug: string) {
	return `https://osterman.blog/${type}#${slug}`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async (request: Request, context: Context) => {
	try {
		const requestJson = await request.json();
		const canonicalRequest = {
			path: '/.netlify/functions/hello-world',
			headers: Object.fromEntries(request.headers.entries()),
			method: request.method as 'POST',
			body: JSON.stringify(requestJson)
		};
		const isVerified = verifyRequest(C_WEBHOOK_SIGNING_SECRET as string, canonicalRequest);
		if (!C_WEBHOOK_SIGNING_SECRET) {
			return new Response('No SECRET', { status: 403 });
		}
		if (!isVerified) {
			return new Response('Not allowed', { status: 403 });
		}
		if (!requestJson.fields?.blueskyPost /*|| requestJson.sys.revision > 1 */) {
			return new Response(JSON.stringify(requestJson), {
				status: 200,
				statusText: 'No content to handle'
			});
		}
		const agent = new BskyAgent({
			service: 'https://bsky.social'
		});
		await agent.login({
			identifier: B_IDENTIFIER as string,
			password: B_AUTH as string
		});
		// creating richtext
		const rt = new RichText({
			text: `${requestJson.fields?.blueskyPost['en-US']} ${resolveLink(requestJson?.fields.type['en-US'], requestJson?.fields.slug['en-US'])}`
		});
		await rt.detectFacets(agent); // automatically detects mentions and links
		const postRecord = {
			// $type: 'app.bsky.feed.post',
			text: rt.text,
			facets: rt.facets,
			createdAt: new Date().toISOString()
		};
		const blueskyResponse = await agent.post(postRecord);
		return new Response(JSON.stringify(blueskyResponse), { status: 200 });
	} catch (error) {
		return new Response(error.toString(), {
			status: 500
		});
	}
};
