import { Buffer } from 'buffer';
import type { RequestHandler } from './$types';
import { B_IDENTIFIER, B_AUTH, C_WEBHOOK_SIGNING_SECRET } from "$env/static/private";
import { verifyRequest } from "@contentful/node-apps-toolkit";
import { json, error } from '@sveltejs/kit';
import { BskyAgent, RichText } from '@atproto/api';

function resolveLink(type, slug){
  return `https://osterman.blog/${type}#${slug}`;
}

export const POST: RequestHandler = async ({request}) => {
    const requestJson = await request.json();
    const canonicalRequest = {
        path: '/webhook',
        headers: Object.fromEntries(request.headers.entries()),
        method: request.method as 'POST',
        body: JSON.stringify(requestJson),
      };
    const isVerified = verifyRequest(C_WEBHOOK_SIGNING_SECRET, canonicalRequest)
    if (!isVerified){
        error(403);
    }
    if ( !requestJson.fields?.blueskyPost || requestJson.sys.revision > 1 ){    
        return json(requestJson, {
            status: 200,
            statusText: 'No content',
        });
    }
    const agent = new BskyAgent({
        service: 'https://bsky.social'
    });
    await agent.login({
        identifier: B_IDENTIFIER,
        password: B_AUTH,
    });
    // creating richtext
    const rt = new RichText({
        text: `${requestJson.fields?.blueskyPost['en-US']} ${resolveLink(requestJson?.fields.type['en-US'], requestJson?.fields.slug['en-US'])}`
    })
    await rt.detectFacets(agent) // automatically detects mentions and links
    console.log(rt);
    const postRecord = {
        $type: 'app.bsky.feed.post',
        text: rt.text,
        facets: rt.facets,
        createdAt: new Date().toISOString(),
    };
    return json(postRecord);
};