{#if entry.sys.contentType.sys.id === 'figure'}
    <Figure fields={fields as TypeFigureFields}></Figure>
{:else if entry.sys.contentType.sys.id === 'summaryDetails'}
    <SummaryDetails fields={fields as TypeSummaryDetailsFields}></SummaryDetails>
{:else if entry.sys.contentType.sys.id === 'twoUp'}
    <TwoUp fields={fields as TypeTwoUpFields}></TwoUp>
{:else if entry.sys.contentType.sys.id === 'codeBlock'}
    <CodeBlock fields={fields as TypeCodeBlockFields}></CodeBlock>
{:else}
    <div>EMBEDDED_ENTRY <pre>{JSON.stringify(entry, null, 4)   }</pre></div>
{/if}

<script lang="ts">
    import type { TypeFigureFields, TypeSummaryDetailsFields, TypeTwoUpFields, TypeCodeBlockFields } from "$lib/types/contentful";
	import type { Entry } from "contentful";
    import Figure from "./Figure.svelte";
    import SummaryDetails from "./SummaryDetails.svelte";
    import TwoUp from "./TwoUp.svelte";
    import CodeBlock from "./CodeBlock.svelte";

    interface Props {
        entry: Entry
    };

    const props: Props = $props();
    const { entry } = props;
    const fields = entry.fields as unknown as ( TypeFigureFields | TypeSummaryDetailsFields | TypeTwoUpFields | TypeCodeBlockFields);
    
</script>
