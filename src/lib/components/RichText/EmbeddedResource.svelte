<div>EmbeddedResource</div>
<pre>{JSON.stringify(block, null, 4)}</pre>
<script lang="ts">
	import type { Block } from "@contentful/rich-text-types";
    interface Props {
        block: Block
    }
    const props: Props = $props();
    const block = $derived(props.block);
</script>