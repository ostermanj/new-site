{#each doc.content as block }
    {@const Component = blockTypeToComponent[block.nodeType]}
    <Component {block}></Component>
{/each}
<script module>
    import RichText from '$lib/components/RichText/index.svelte'
    import Paragraph from './Paragraph.svelte';
    import Heading from './Heading.svelte'
    import OrderedList from './OrderedList.svelte';
    import UnorderedList from './UnorderedList.svelte';
    import ListItem from './ListItem.svelte';
    import Hr from './Hr.svelte';
    import BlockQuote from './BlockQuote.svelte';
    import EmbeddedEntry from './EmbeddedEntry.svelte';
    import EmbeddedAsset from './EmbeddedAsset.svelte';
    import EmbeddedResource from './EmbeddedResource.svelte';
    import Table from './Table.svelte';
    import TableRow from './TableRow.svelte';
    import TableCell from './TableCell.svelte';
    import TableHeaderCell from './TableHeaderCell.svelte';

    import DefaultInline from './DefaultInline.svelte';
    import Hyperlink from './Hyperlink.svelte';
    import type { Document } from '@contentful/rich-text-types';

    export const inlineTypeToComponent = {
        "asset-hyperlink": DefaultInline,
        "embedded-entry-inline": DefaultInline,
        "embedded-resource-inline": DefaultInline,
        "entry-hyperlink": DefaultInline,
        "hyperlink": Hyperlink,
        "resource-hyperlink": DefaultInline,
    }

    export const blockTypeToComponent = {
        
        "paragraph": Paragraph,
        "heading-1": Heading,
        "heading-2": Heading,
        "heading-3": Heading,
        "heading-4": Heading,
        "heading-5": Heading,
        "heading-6": Heading,
        "ordered-list": OrderedList,
        "unordered-list": UnorderedList,
        "list-item": ListItem,
        "hr": Hr,
        "blockquote": BlockQuote,
        "embedded-entry-block": EmbeddedEntry,
        "embedded-asset-block": EmbeddedAsset,
        "embedded-resource-block": EmbeddedResource,
        "table": Table,
        "table-row": TableRow,
        "table-cell": TableCell,
        "table-header-cell": TableHeaderCell,
    }
</script>
<script lang="ts">
    interface Props {
        doc: Document
    }

    // blockTypeToComponent.document =  RichText;
    const props: Props = $props()
    const { doc } = props;
    console.log(doc);
</script>