<h1>{fields.title}</h1>
{#if fields.subtitle}
    <div class="subtitle">{fields.subtitle}</div>
{/if}
<div class="date-published">
    <time datetime={fields?.datePublished}>{new Date(  fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
</div>
{#if fields.bodyText}
<div class="u-column flow">
    <RichText doc={fields.bodyText}></RichText>
</div>
{/if}
<template>
    
</template>
<script lang="ts">
	import { type TypeBlogPostFields } from '$lib/types/contentful';
    import RichText from '$lib/components/RichText/index.svelte'
    interface Props {
        fields: TypeBlogPostFields;
    }
    const props: Props = $props() 
    const fields = $derived(props.fields);
</script>
<style>
    h1 {
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
    }
    h1, .date-published, .subtitle {
        text-align: center;
    }
    .subtitle {
        font-weight: bold;
    }
</style>