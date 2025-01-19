<div>EmbeddedResource</div>
<pre>{JSON.stringify(block, null, 4)}</pre>
<script lang="ts">
	import type { Block } from "@contentful/rich-text-types";
    const { block }: { block: Block} = $props()
</script>