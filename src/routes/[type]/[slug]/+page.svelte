<article class="flow">
    <h1>{data.fields?.title}</h1>
    {#if data.fields}
    <div class="date-published">
        <time datetime={data.fields?.datePublished}>{new Date(  data.fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
    </div>
    {#if data.fields.bodyText}
        <div class="u-column flow">{@html data.bodyHTML}</div>
    {/if}
    {/if}
</article>
<script lang="ts">
    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    let { data } = $props();

    console.log(data.fields?.bodyText);
    
</script>
<style>
    h1 {
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
    }
    h1, .date-published {
        text-align: center;
    }
</style>