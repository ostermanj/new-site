import type { RequestHandler } from './$types';
import { getHomepage, getPaginatedCollection } from '$lib/contentful';
import {  isTypeBlogPost, isTypePeaceCorpsPost, isTypeProject, isTypeSlashItem, type TypeBlogPost, type TypeBlogPostFields, type TypeHomepageFields, type TypePeaceCorpsPost, type TypePeaceCorpsPostFields, type TypeProject, type TypeProjectFields, type TypeSlashItemFields } from '$lib/types/contentful';
import { contentIdToSlug } from '$lib/mapping';
import type { BaseEntry } from 'contentful';
import { render } from 'svelte/server';
import RichText from '$lib/components/RichText/index.svelte';

const includeContentTypes = ['project', 'blogPost', 'peaceCorpsPost', 'slashItem'];

const escape = (xml: string) => {
    console.log(xml);
    return xml
    .replaceAll('"','&quot')
    .replaceAll("'", '$apos;')
    .replaceAll("<", '$lt;')
    .replaceAll(">", '$gt;')
    .replaceAll("&", '$amp;');
}

const buildPageLink = (entry: BaseEntry, fields: TypeProjectFields | TypeBlogPostFields | TypePeaceCorpsPostFields | TypeSlashItemFields) => {
    if (isTypeSlashItem(entry)){
        const _fields = fields as TypeSlashItemFields
        return `https://osterman.blog/${_fields.type}#${_fields.slug}`;
    }
    return `https://osterman.blog/${contentIdToSlug[entry.sys.contentType.sys.id as keyof typeof contentIdToSlug]}/${fields.slug}`;
}

const postToXML = (entry: BaseEntry ) => {
    let fields;
    if (isTypeProject(entry)){
        fields = entry.fields as TypeProjectFields;
    } else if (isTypeBlogPost(entry)){
        fields = entry.fields as TypeBlogPostFields;
    } else if (isTypePeaceCorpsPost(entry)){
        fields = entry.fields as TypePeaceCorpsPostFields;
    } else if (isTypeSlashItem(entry)){
        fields = entry.fields as TypeSlashItemFields;
        return `
            <item>
                <title> ${escape(fields.title ?? '')} (${fields.type})</title>
                <description><![CDATA[ ${render(RichText, {props: {doc: fields.bodyText}}).body.replace(/<.*?>/g,'')} ]]></description>
                <pubDate>${fields.datePublished}</pubDate>
                <link>${buildPageLink(entry, fields)}</link>
                <guid isPermaLink="true">${buildPageLink(entry, fields)}</guid>
                
            </item>`;
    }
    if (fields){
        return `
        <item>
            <title> ${escape(fields.title)} </title>
            <description><![CDATA[ ${fields.snippet} ]]></description>
            <pubDate>${fields.datePublished}</pubDate>
            ${fields.dateUpdated ? `<updated>${fields.dateUpdated}</updated>` : ''}
            <link>${buildPageLink(entry as TypeProject | TypeBlogPost | TypePeaceCorpsPost, fields)}</link>
            <guid isPermaLink="true">${buildPageLink(entry as TypeProject | TypeBlogPost | TypePeaceCorpsPost, fields)}</guid>
            
        </item>`;
    }
}
const entryToXML = (entry: TypeProject | TypeBlogPostFields | TypePeaceCorpsPostFields) => {
    return postToXML(entry as TypeProject | TypeBlogPost | TypePeaceCorpsPost)
}

export const GET: RequestHandler = async () => {
    const hpEntries = await getHomepage();
    const tagline = (hpEntries?.items[0].fields as unknown as TypeHomepageFields).newOverview
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