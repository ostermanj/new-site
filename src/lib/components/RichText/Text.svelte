{#if marks.length === 0}
    {content.value}
{:else}
    {#snippet selfContent()}
        <Self content={nextContent}></Self>
    {/snippet}
    <Mark marks={[marks[0]]} {selfContent}></Mark>
{/if}
<script lang="ts">
    import type { Text } from "@contentful/rich-text-types";
    import Mark from "./Mark.svelte";
    import Self from './Text.svelte';
    interface Props {
        content: Text
    }
    const props: Props = $props();
    const content = $derived(props.content);
    const marks = $derived(content.marks);
    const nextMarks = $derived(content.marks.slice(1));
    const nextContent: Text = $derived({
        nodeType: 'text',
        value: content.value,
        marks: nextMarks,
        data: {}
    })
</script>