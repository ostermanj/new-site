<figure class={['figure', 'flow', {'small': fields.size === 'Small' }]}>
    <Image asset={fields.image}></Image>
    {#if fields.caption}
    <figcaption class="tc-1">
        <RichText doc={fields.caption}></RichText>
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
    .small {
        max-width: calc(var(--l-max-text-column) / 2);
        margin-inline: auto;
    }
    figcaption {
        letter-spacing: 0.5px;
    }
</style>
<script lang="ts">
    import type { TypeFigureFields } from "$lib/types/contentful/TypeFigure";
	import { onMount } from "svelte";
    import Image from "./Image.svelte";
    import RichText from "./RichText/index.svelte";
    interface Props {
        fields: TypeFigureFields
    }
    const props: Props = $props();
    const { fields } = props;
    console.log('figure set up');

    onMount(() => {
        console.log('figure mount!');
    })
</script>