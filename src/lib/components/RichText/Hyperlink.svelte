<a href="{content.data.uri}">
    {#each content.content as text}
    <Text content={text}></Text>
    {/each}
</a>
<script lang="ts">
	import type { Hyperlink } from "@contentful/rich-text-types";
    import Text from "./Text.svelte";
    interface Props {
        content: Hyperlink
    }
    const props: Props = $props();
    const { content } = props;
</script>
