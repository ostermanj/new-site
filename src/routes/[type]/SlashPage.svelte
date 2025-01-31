<article class="slash-page flow">
    <h1 class="slash-h1">{data.pageFields.title}</h1>
    <div class="u-column flow">
        {#if data.pageFields.bodyText}
            <RichText doc={data.pageFields.bodyText}></RichText>
        {/if}
        {#each data.items as item}
        {#if item.fields.bodyText}
        <article id={item.fields.slug} class="flow tc-1 slash-item">
            <div class="date-published"><time datetime={item.fields.datePublished}>{new Date(  item.fields.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></div>
            <h2>{item.fields.title}</h2>
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
    h2 {
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
    .slash-item:target {
        outline: 2px solid var(--c-primary-1);
        outline-offset: 10px;
    }
</style>