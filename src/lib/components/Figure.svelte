{#snippet figcontent()}
    <Image asset={fields.image}></Image>
    {#if fields.caption}
    <!-- svelte-ignore a11y_figcaption_parent -->
    <figcaption class="tc-1">
        <RichText doc={fields.caption}></RichText>
    </figcaption>
    {/if}
{/snippet}
{#if !fields.distorted}
<figure class={['figure', 'flow', {'small': fields.size === 'Small', 'embedded-entry-pullout': fields.pullout }]}>
    {@render figcontent()}
</figure>
{:else}
<div class={["grid", {'embedded-entry-pullout': fields.pullout}]}>
    <div class="background"></div>
    <figure class={['flow', {'small': fields.size === 'Small' }]}>
        {@render figcontent()}
    </figure>
    </div>
{/if}
<style lang="scss">
    .figure {
        background-color: #fff;
        padding: 1rem;
        filter: drop-shadow(0px 0px 3px var(--c-background-1));
        font-family: PassionOne;
    }
    .small {
        max-width: calc(var(--l-max-text-column) / 2);
        max-width: 50%;
        margin-inline: auto;
    }
    figcaption {
        letter-spacing: 0.5px;
    }
    .grid {
        display: grid;
        .background, figure {
            grid-column: 1;
            grid-row: 1;
        }
        .background {
            background-color: #fff;
            filter: url(#noise) drop-shadow(0px 0px 3px var(--c-secondary-1));
        }
        figure {
            padding-block: 1.4rem 0.6rem;
            padding-inline: 1.4rem 0.6rem;
            background-color: transparent;
            font-family: PassionOne;
            z-index: 1;
        }
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