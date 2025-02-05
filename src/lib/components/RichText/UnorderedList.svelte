<ul>
    {#each block.content as listItem }
        <ListItem listItem={listItem as Block}></ListItem> 
    {/each}
</ul>
<script lang="ts">
	import type { TopLevelBlock, Block } from "@contentful/rich-text-types";
	import ListItem from "./ListItem.svelte";

    interface Props {
        block: TopLevelBlock
    }

    const props: Props = $props();
    const block = $derived(props.block);
</script>