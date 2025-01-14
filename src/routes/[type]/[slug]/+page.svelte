<article class="flow">
    {#if data.contentType === 'blogPost'}
        <BlogPost fields={fields as TypeBlogPostFields} />
    {:else if data.contentType === 'project'}
        <Project fields={fields as TypeProjectFields} />
    {/if}
</article>
<script lang="ts">
    import type { TypeBlogPostFields, TypeProjectFields } from '$lib/types/contentful';
	import BlogPost from './BlogPost.svelte';
	import Project from './Project.svelte';

    // import richTextOptions from '$lib/rich-text-options.js'
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const { data } = $props();
    const fields = data.fields;

    
</script>
<style>
    
</style>