<svelte:element this={`h${level}`}>
    {#each block.content as content}
        <Text content={content as TypeText}></Text>
    {/each}
</svelte:element>
<script lang="ts">
	import type { Block, Text as TypeText } from "@contentful/rich-text-types";
    import Text from "./Text.svelte";

    interface Props {
        block: Block
    }
    const props: Props = $props();
    const block = $derived(props.block);
    const level = $derived(block.nodeType.split('-')[1])
</script>