<div class="embedded-entry">
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
    {:else if entry.sys.contentType.sys.id === 'placeholderDiv'}
        <PlaceholderDiv fields={fields as TypePlaceholderDivFields}></PlaceholderDiv>
    {:else}
        <div>EMBEDDED_ENTRY <pre>{JSON.stringify(entry, null, 4)   }</pre></div>
    {/if}
</div>

<script lang="ts">
	import type { TopLevelBlock } from "@contentful/rich-text-types";

    import type { TypeFigureFields, TypeSummaryDetailsFields, TypeTwoUpFields, TypeCodeBlockFields, TypeNoticeFields, TypeJournalQuoteFields, TypePlaceholderDivFields } from "$lib/types/contentful";
	import type { Entry } from "contentful";
    import Figure from "../Figure.svelte";
    import SummaryDetails from "../SummaryDetails.svelte";
    import TwoUp from "../TwoUp.svelte";
    import CodeBlock from "../CodeBlock.svelte";
    import Notice from "../Notice.svelte";
    import JournalQuote from "../JournalQuote.svelte";
    import PlaceholderDiv from "./PlaceholderDiv.svelte";

    interface Props {
        block: TopLevelBlock
    };

    const props: Props = $props();
    const block = $derived(props.block);
    const entry = $derived(block.data.target as Entry);
    const fields = $derived(entry.fields as unknown as ( TypeFigureFields | TypeSummaryDetailsFields | TypeTwoUpFields | TypeCodeBlockFields | TypeNoticeFields | TypeJournalQuoteFields | TypePlaceholderDivFields));
    
</script>
<style>
    .embedded-entry:has(:global(.embedded-entry-pullout)) {
        width: min(calc(33% + 66vw), calc(100% + 200px));
        margin-left: max(calc(0px - 33vw - 33%), -100px);
        margin-left: max(calc(0px - calc(33vw - 33%)), -100px);
    }
</style>
