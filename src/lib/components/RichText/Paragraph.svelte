
<p>
    {#each block.content as content}
        {#if content.nodeType === 'text' }
            <Text {content}></Text>
        {:else}
        {@const Component = inlineTypeToComponent[content.nodeType as INLINES]}
            <Component content={content as Inline}></Component>
        {/if}
    {/each}
</p>
<script lang="ts">
	import type { INLINES, TopLevelBlock, Inline } from "@contentful/rich-text-types";
    import { inlineTypeToComponent } from './index.svelte'
    import Text from "./Text.svelte";

    interface Props {
        block: TopLevelBlock
    }

    const props: Props = $props();
    const block = $derived(props.block);
</script>
<style>
    p :global(code) {
        font-size: var(--fz-smaller-0-5);
        display: inline-block;
        padding-inline: 0.2em;
        color: var(--c-primary-1);
        background-color: #fff;
    }
</style>
