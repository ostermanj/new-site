<li>
    {#each listItem.content as content}
    {@const Component = blockTypeToComponent[content.nodeType as ListItemBlockEnum]}
        <Component block={content as Block}></Component>
    {/each}
</li>
<script lang="ts">
	import type { Block, ListItemBlockEnum, TopLevelBlock } from "@contentful/rich-text-types";
    import { blockTypeToComponent } from "./index.svelte";

    interface Props {
        listItem: Block
    }

    const props: Props = $props();
    const { listItem } = props;
</script>