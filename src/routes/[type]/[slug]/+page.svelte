<article class="flow">
    {#if data.contentType === 'blogPost'}
        <BlogPost fields={fields as TypeBlogPostFields} />
    {/if}
</article>
<script lang="ts">
    import { type TypeBlogPostFields } from '$lib/types/contentful';
	import BlogPost from './BlogPost.svelte';

    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const { data } = $props();
    const fields = data.fields;

    
</script>
<style>
    
</style>