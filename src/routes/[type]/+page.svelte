{#if isPeaceCorps}
<img src="{data.pageFields?.hero?.fields.file?.url as string}" alt="{data.pageFields?.hero?.fields.description as string}">

{/if}
<h1 class="{!isPeaceCorps ? 'u-visually-hidden' : null}">{data.title}</h1>
{#if isPeaceCorps}
<div>{data.pageFields?.secondaryTitle}</div>
{#if data.pageFields?.bodyText}
    {@html documentToHtmlString(data.pageFields.bodyText)}
{/if}
{/if}
<div class="grid tc-1">
    {#each data.items ?? [] as item}
        <article class="flow">
            <h2><a href="/">{item.title}</a></h2>
            <p>{item.snippet}</p>
            <div class="date-published">
                <time datetime={item.datePublished}>{new Date(  item.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
            </div>
        </article>
    {/each}
</div>
<div class="placeholder"></div>
<style lang="scss">
    article {
        display: grid;
        grid-template-rows: min-content min-content 1fr;
        border: 2px solid var(--c-primary-1);
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #fff;
    }
    h2 {
        // color: oklch(from skyblue calc(l / 2.5) c h);
        opacity: 0.80;
        font-family: PassionOne;
        letter-spacing: 0.5px;
        hyphens: auto;
    }
    h2 a {
        text-decoration: none;
        color: inherit;
    }
    .grid {
        padding-inline: 1lh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 1rem;

        @media screen and (min-width: 51rem) {
            width: calc(100vw - 56px * 2);
            margin-inline: auto;
        }
    }
    .placeholder {
        height: 200dvh;
    }
    .date-published {
        align-self: end;
        color: #767676;
    }
    
</style>
<script lang="ts">
    import { page } from "$app/state";
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    const { data } = $props();
    let isPeaceCorps = $derived(page.url.pathname === '/peace-corps');
    
</script>