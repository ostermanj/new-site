<svelte:head>
    <meta name="description" content={fields.snippet} />
    <meta name="og:title" content={contentSlugToTitle[page.params.type as keyof typeof contentSlugToTitle]} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content={`https://osterman.blog/${page.url.pathname}`} />
    <meta name="og:image" content={fields.heroImage?.fields.file?.url as string ?? 'https://osterman.blog/johnosterman.png'} />
    <meta name="og:site_name" content="John Osterman" />
    <meta name="og:description" content={fields.snippet} />
    <link rel="canonical" href={`https://osterman.blog/${page.url.pathname}`}>
</svelte:head>
<article class="flow">
    {#if data.contentType === 'blogPost'}
        <BlogPost fields={fields as TypeBlogPostFields} />
    {:else if data.contentType === 'project'}
        <Project fields={fields as TypeProjectFields} />
    {:else if data.contentType === 'peaceCorpsPost'}
        <PeaceCorps fields={fields as TypePeaceCorpsPostFields} />
    {/if}
</article>
<script lang="ts">
    import { page } from '$app/state';
    import { contentSlugToTitle } from '$lib/mapping';
    import type { TypeBlogPostFields, TypeProjectFields, TypePeaceCorpsPostFields } from '$lib/types/contentful';
	import BlogPost from './BlogPost.svelte';
	import Project from './Project.svelte';
    import PeaceCorps from './PeaceCorps.svelte';

    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const { data } = $props();
    const { fields } = $derived(data);

    
</script>
<style>
    article {
        width: 100%;
        max-width: max(75vw, var(--l-max-text-column));
        margin-inline: auto;
    }
</style>