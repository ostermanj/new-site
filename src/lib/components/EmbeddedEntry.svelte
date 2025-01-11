<style>
    .figure {
        background-color: #fff;
        padding: 1rem;
        filter: drop-shadow(0px 0px 3px var(--c-background-1));
        font-family: PassionOne;
    }
    figcaption {
        letter-spacing: 0.5px;
    }
</style>
<svelte:options css={'injected'}></svelte:options>
{#if entry.sys.contentType.sys.id === 'figure'}
    <figure class="tc-1 figure flow">
        <Image asset={fields.image}></Image>
        {#if fields.caption}
        <figcaption>
            {@html documentToHtmlString(fields.caption)}
        </figcaption>
        {/if}
    </figure>
{/if}
<script lang="ts">
    import type { TypeFigureFields } from "$lib/types/contentful/TypeFigure";
	import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
	import type { Asset, Entry } from "contentful";
	import Image from "./Image.svelte";

    interface Props {
        entry: Entry
    };

    const props: Props = $props();
    const { entry } = props;
    const fields = entry.fields as unknown as TypeFigureFields;
    
</script>
