<article class="flow">
    {#if data.contentType === 'blogPost'}
        <BlogPost {fields} {bodyHTML}/>
    {/if}
</article>
<script lang="ts">
	import BlogPost from './BlogPost.svelte';

    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const { data } = $props();
    const fields = data.fields;
    const bodyHTML = data.bodyHTML;

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