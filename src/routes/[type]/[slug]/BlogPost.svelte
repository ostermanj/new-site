<h1>{fields.title}</h1>
{#if fields.subtitle}
    <div class="subtitle">{fields.subtitle}</div>
{/if}
<div class="date-published">
    <time datetime={fields?.datePublished}>{new Date(  fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
</div>
{#if bodyHTML}
    <div class="u-column flow">{@html bodyHTML}</div>
{/if}
<script lang="ts">
    interface Props {
        fields: TypeBlogPostFields; 
        bodyHTML: string
    };
	import { type TypeBlogPostFields } from '$lib/types/contentful';
    const { fields, bodyHTML } = $props() as Props;
</script>