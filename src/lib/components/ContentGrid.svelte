<section class="flow">
    {#if heading}
        <svelte:element this={`h${heading.level}`} class="section-heading">
            {heading.text}
        </svelte:element>
    {/if}
    <div class="grid tc-1">
        {#each items ?? [] as item}
            <article class="flow">
                {#if showContentTypes}
                    <span class="content-type">{contentSlugToSingular[contentIdToSlug[item.sys.contentType.sys.id as keyof typeof contentIdToSlug] as keyof typeof contentSlugToSingular]}</span>
                {/if}
                <span class="h2"><a class={{'no-slug': !item.fields.slug}} href="/{contentIdToSlug[item.sys.contentType.sys.id as keyof typeof contentIdToSlug]}/{item.fields.slug}">{item.fields.title}</a></span>
                <p>{item.fields.snippet}</p>
                <div class="date-published">
                    <time datetime={item.fields.datePublished}>{new Date(  item.fields.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
                </div>
            </article>
        {/each}
    </div>
</section>
<script lang="ts">
    import { contentIdToSlug, contentSlugToSingular } from "$lib/mapping.js";
    const { items, heading, showContentTypes }: { items: any[], heading?: {level: number, text: string}, showContentTypes?: boolean} = $props();
</script>
<style lang="scss">
    section {
        padding-inline: 1lh;
        @media screen and (min-width: 51rem) {
            width: calc(100vw - 56px * 2);
            margin-inline: auto;
        }
    }
    .section-heading {
        text-align: center;
    }
    article {
        display: grid;
        grid-template-rows: min-content min-content 1fr;
        border: 2px solid var(--c-primary-1);
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #fff;
    }
    .h2 {
        // color: oklch(from skyblue calc(l / 2.5) c h);
        opacity: 0.80;
        font-family: PassionOne;
        letter-spacing: 0.5px;
        hyphens: auto;
        margin-block-start: 0;
        
    }
   .h2 a {
        text-decoration: none;
        color: inherit;
        &.no-slug {
            opacity: 0.5;
        }
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 1rem;
    }
    .date-published {
        align-self: end;
        color: #767676;
    }
    .content-type {
        color: var(--c-primary-1);
        font-weight: bold;
        text-transform: uppercase;
        font-family: PassionOne;
        letter-spacing: 0.5px;
    }
</style>