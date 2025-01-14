{#if isPeaceCorps}
<header>
    <img class="hero" src="{data.pageFields?.hero?.fields.file?.url as string}" alt="{data.pageFields?.hero?.fields.description as string}">
    <h1>{data.title}</h1>
</header>
<div class="u-column flow">
    <div class="secondary-title">{data.pageFields?.secondaryTitle}</div>
    {#if data.pageFields?.bodyText}
    {@html documentToHtmlString(data.pageFields.bodyText)}
    {/if}
</div>
{:else}
<h1 class="u-visually-hidden">{data.title}</h1>
{/if}
<div class="grid tc-1">
    {#each data.items ?? [] as item}
        <article class="flow">
            <h2><a class={{'no-slug': !item.fields.slug}} href="/{contentIdToSlug[item.sys.contentType.sys.id as keyof typeof contentIdToSlug]}/{item.fields.slug}">{item.fields.title}</a></h2>
            <p>{item.fields.snippet}</p>
            <div class="date-published">
                <time datetime={item.fields.datePublished}>{new Date(  item.fields.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
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
    header {
        display: grid;
    }
    h1 {
        mix-blend-mode: difference;
        text-align: center;
        color: #2196f3;
        grid-row: 1;
        grid-column: 1;
        align-self: end;
        font-family: cursive;
        filter: url('#noise-liter');
        @media screen and (min-width: 515px){
            filter: url('#noise-lite');
        }
        @media screen and (min-width: 60rem){
            font-size: var(--fz-larger-3);
        }
    }

    .secondary-title {
        font-family: PassionOne;
        text-align: center;
        margin-block-start: -40px;
        letter-spacing: 0.5px;
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
        &.no-slug {
            opacity: 0.5;
        }
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
    .hero {
        grid-row: 1;
        grid-column: 1;
        margin-block-start: -3px;
        width: 100%;
        padding: 0.5rem;
        height: auto;
        min-height: 270px;
        object-fit: cover;
        filter: url('#noise-liter');
        @media screen and (min-width: 515px){
                filter: url('#noise-lite');
        }
    }
    
</style>
<script lang="ts">
    import { page } from "$app/state";
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import { contentIdToSlug } from "$lib/mapping.js";
    const { data } = $props();
    let isPeaceCorps = $derived(page.url.pathname === '/peace-corps');
    
</script>