<details>
    {#if fields.summary}
    <summary>
        <RichText doc={fields.summary}></RichText>
    </summary>
    {/if}
    <RichText doc={fields.details}></RichText>
</details>
<script lang="ts">
    import type { TypeSummaryDetailsFields } from "$lib/types/contentful";
    import RichText from '$lib/components/RichText/index.svelte';
    interface Props {
        fields: TypeSummaryDetailsFields
    }
    const props: Props = $props();
    const { fields } = props;
</script>
<style>
    summary > :global(p) {
        display: inline-block;
    }
</style>