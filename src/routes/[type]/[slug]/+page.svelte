<article class="flow">
    {#if data.contentType === 'blogPost'}
        <BlogPost fields={fields as TypeBlogPostFields} {bodyHTML}/>
    {/if}
    <TestHydration></TestHydration>
</article>
<script lang="ts">
    import { type TypeBlogPostFields } from '$lib/types/contentful';
	import BlogPost from './BlogPost.svelte';
	import TestHydration from './TestHydration.svelte';

    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const { data } = $props();
    const fields = data.fields;
    const bodyHTML = data.bodyHTML;

    
</script>
<style>
    
</style>