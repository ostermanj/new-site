
<p>
    {#each block.content as content}
        {#if content.nodeType === 'text' }
            <Text {content}></Text>
        {:else}
        {@const Component = inlineTypeToComponent[content.nodeType as INLINES]}
            <span>{content.nodeType}</span>
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
    const { block } = props;
</script>
<style>
    span {
        background-color: #000;
        color: #fff;
    }
</style>