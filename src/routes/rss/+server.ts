import type { RequestHandler } from './$types';
import { getHomepage, getPaginatedCollection } from '$lib/contentful';
import {  type TypeBlogPost, type TypeBlogPostFields, type TypeHomepageFields, type TypePeaceCorpsPost, type TypePeaceCorpsPostFields, type TypeProject, type TypeProjectFields } from '$lib/types/contentful';
import { contentIdToSlug } from '$lib/mapping';

const includeContentTypes = ['project', 'blogPost', 'peaceCorpsPost'];

const escape = (xml: string) => xml
    .replaceAll('"','&quot')
    .replaceAll("'", '$apos;')
    .replaceAll("<", '$lt;')
    .replaceAll(">", '$gt;')
    .replaceAll("&", '$amp;');

const buildLink = (fields: TypeProjectFields | TypeBlogPostFields | TypePeaceCorpsPostFields, contentId: string ) => {
    return `https://osterman.blog/${contentIdToSlug[contentId as keyof typeof contentIdToSlug]}/${fields.slug}`;
}

const postToXML = (fields: TypeProjectFields | TypeBlogPostFields | TypePeaceCorpsPostFields, contentId: string) => {
    return `
    <item>
        <title> ${escape(fields.title)} </title>
        <description><![CDATA[ ${fields.snippet} ]]></description>
        <pubDate>${fields.datePublished}</pubDate>
        <updated>${fields.dateUpdated}</updated>
        <link>${buildLink(fields, contentId)}</link>
        <guid isPermaLink="true">${buildLink(fields, contentId)}</guid>
        
    </item>`;
}
const entryToXML = (entry: TypeProject | TypeBlogPost | TypePeaceCorpsPost) => {
    return postToXML((entry as TypeProject | TypeBlogPost | TypePeaceCorpsPost).fields as TypeProjectFields | TypeBlogPostFields | TypePeaceCorpsPostFields, (entry as TypeBlogPost | TypePeaceCorpsPost ).sys.contentType.sys.id)
}

export const GET: RequestHandler = async () => {
    const hpEntries = await getHomepage();
    const tagline = (hpEntries?.items[0].fields as unknown as TypeHomepageFields).newOverview
    console.log(tagline);
    const entries = includeContentTypes.map(contentType => getPaginatedCollection(contentType));
    const resolvedEntries = await Promise.all(entries);
    const items = resolvedEntries.map(entry => entry.items).flat(1);
    items.sort((a, b) => {
        return Number((b.fields.datePublished as string).replaceAll('-','')) -  Number((a.fields.datePublished as string).replaceAll('-',''))
    });
    const markup = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <atom:link href="http://osterman.blog/rss" rel="self" type="application/rss+xml" />
            <title>John Osterman</title>
            <link>https://osterman.blog</link>
            <description>${tagline}</description>
            <pubDate>Fri, 01 Jan 2016 00:00:00 +0000</pubDate>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
            ${items.map(entryToXML).join('')}
        </channel>
    </rss>`;
    const headers = {
        'Cache-Control': `max-age=0`,
        'Content-Type': 'application/xml',
    };
    return new Response(markup, { status: 200, statusText: 'ok', headers});
};