<header class="u-column-wide flow">
    <h1>{fields.title}</h1>
    <div class="date-published">
        <time datetime={fields?.datePublished}>{new Date(  fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
    </div>
    {#if fields.link || fields.repository}
        <div class="u-column">
        {#if fields.link}
            <p class="project-meta"><Sprite id="www" offset={4} /> On the web: <a href="{fields.link}">{fields.link.replace(/https?:\/\//, '')}</a></p>
        {/if}
        {#if fields.repository}
            <p class="project-meta"><Sprite id="github" offset={4} /> Code: <a href="{fields.repository}">{fields.repository.replace(/https?:\/\//, '')}</a></p>
        {/if}
        </div>
    {/if}
</header>
{#if fields.bodyText}
<div class="u-column flow">
    <RichText doc={fields.bodyText}></RichText>
</div>
{/if}
<template>
    
</template>
<script lang="ts">
    interface Props {
        fields: TypeProjectFields; 
    };
	import { type TypeProjectFields} from '$lib/types/contentful';
    
    import RichText from '$lib/components/RichText/index.svelte'
    import Sprite from '$lib/components/Sprite.svelte';
    let props: Props = $props();
    let { fields } = props;
</script>
<style lang="scss">
    h1 {
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
    }
    h1, .date-published {
        text-align: center;
    }
    .project-meta {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>