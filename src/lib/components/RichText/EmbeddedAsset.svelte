<Image asset={block.data.target}></Image>
<script lang="ts">
	import type { Block } from "@contentful/rich-text-types";
    import Image from "../Image.svelte";

    interface Props {
        block: Block
    }
    const props: Props = $props();
    const block = $derived(props.block);
</script>