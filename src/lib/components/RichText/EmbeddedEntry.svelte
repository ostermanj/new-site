<div>EmbeddedEntry</div>
{#if entry.sys.contentType.sys.id === 'figure'}
    <Figure fields={fields as TypeFigureFields}></Figure>
{:else if entry.sys.contentType.sys.id === 'summaryDetails'}
    <SummaryDetails fields={fields as TypeSummaryDetailsFields}></SummaryDetails>
{:else if entry.sys.contentType.sys.id === 'twoUp'}
    <TwoUp fields={fields as TypeTwoUpFields}></TwoUp>
{:else if entry.sys.contentType.sys.id === 'codeBlock'}
    <CodeBlock fields={fields as TypeCodeBlockFields}></CodeBlock>
{:else if entry.sys.contentType.sys.id === 'notice'}
    <Notice fields={fields as TypeNoticeFields}></Notice>
{:else if entry.sys.contentType.sys.id === 'journalQuote'}
    <JournalQuote fields={fields as TypeJournalQuoteFields}></JournalQuote>
{:else}
    <div>EMBEDDED_ENTRY <pre>{JSON.stringify(entry, null, 4)   }</pre></div>
{/if}

<script lang="ts">
	import type { TopLevelBlock } from "@contentful/rich-text-types";

    import type { TypeFigureFields, TypeSummaryDetailsFields, TypeTwoUpFields, TypeCodeBlockFields, TypeNoticeFields, TypeJournalQuoteFields } from "$lib/types/contentful";
	import type { Entry } from "contentful";
    import Figure from "../Figure.svelte";
    import SummaryDetails from "../SummaryDetails.svelte";
    import TwoUp from "../TwoUp.svelte";
    import CodeBlock from "../CodeBlock.svelte";
    import Notice from "../Notice.svelte";
    import JournalQuote from "../JournalQuote.svelte";

    interface Props {
        block: TopLevelBlock
    };

    const props: Props = $props();
    const { block } = props;
    console.log(block);
    const entry = block.data.target as Entry;
    const fields = entry.fields as unknown as ( TypeFigureFields | TypeSummaryDetailsFields | TypeTwoUpFields | TypeCodeBlockFields);
    console.log(fields)
    
</script>
