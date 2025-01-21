<article class="slash-page flow">
    <h1 class="slash-h1">{data.title}</h1>
    <div class="u-column">
        {#each data.items as item}
        {#if item.fields.bodyText}
        <article class="flow">
            <div class="date-published"><time datetime={item.fields.datePublished}>{new Date(  item.fields.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></div>
            <RichText doc={item.fields.bodyText}></RichText>
        </article>
        {/if}
        {/each}
    </div>
</article>
<script lang="ts">
	import type { PageData } from "./$types";
    import RichText from '$lib/components/RichText/index.svelte'
    const { data }: { data: PageData} = $props()
</script>
<style>
    .slash-page {
        width: 100%;
        max-width: max(75vw, var(--l-max-text-column));
        margin-inline: auto;
    }
    .slash-page :global(h2) {
        margin-block-start: 0;
    }
    h1 {
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
        text-align: center;
    }
    .date-published {
        color: #767676;
    }
</style>