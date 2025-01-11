<svelte:options css={'injected'}></svelte:options>
<figure class="tc-1 figure flow">
    <Image asset={fields.image}></Image>
    {#if fields.caption}
    <figcaption>
        {@html documentToHtmlString(fields.caption)}
    </figcaption>
    {/if}
</figure>
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
<script lang="ts">
    import type { TypeFigureFields } from "$lib/types/contentful/TypeFigure";
    import Image from "./Image.svelte";
    import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
    interface Props {
        fields: TypeFigureFields
    }
    const props: Props = $props();
    const { fields } = props;
</script>