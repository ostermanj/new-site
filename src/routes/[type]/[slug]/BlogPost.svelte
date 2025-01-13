<h1>{fields.title}</h1>
{#if fields.subtitle}
    <div class="subtitle">{fields.subtitle}</div>
{/if}
<div class="date-published">
    <time datetime={fields?.datePublished}>{new Date(  fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
</div>
<div class="u-column flow">
    {@html bodyHTML}
</div>
<template>
    
</template>
<script lang="ts">
    interface Props {
        fields: TypeBlogPostFields; 
        bodyHTML: string | null | undefined
    };
	import { type TypeBlogPostFields } from '$lib/types/contentful';
	import { onMount } from 'svelte';
    const props: Props = $props();
    const { fields, bodyHTML } = props;
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