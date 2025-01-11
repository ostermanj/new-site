<details>
    {#if fields.summary}
    <summary>{@html documentToHtmlString(fields.summary)}</summary>
    {/if}
    {@html documentToHtmlString(fields.details)}
</details>
<script lang="ts">
    import type { TypeSummaryDetailsFields } from "$lib/types/contentful";
    import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
    interface Props {
        fields: TypeSummaryDetailsFields
    }
    const props: Props = $props();
    const { fields } = props;
</script>