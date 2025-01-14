
<div class="grid">
    <div class="background"></div>
    <blockquote class="flow">
        <RichText doc={fields.text}></RichText>
    </blockquote>
</div>
<script lang="ts">
    import type { TypeJournalQuoteFields } from "$lib/types/contentful";
    import RichText from '$lib/components/RichText/index.svelte';
    interface Props {
        fields: TypeJournalQuoteFields
    }
    const props: Props = $props();
    const { fields } = props;
</script>
<style>
    .grid {
        display: grid;
        .background, blockquote {
            grid-column: 1;
            grid-row: 1;
        }
        .background {
            background-color: #fff;
            filter: url(#noise) drop-shadow(0px 0px 3px var(--c-secondary-1));
        }
    }
    blockquote {
        background-color: transparent;
        padding-block: 1.4rem 0.6rem;
        padding-inline: 1.4rem 0.6rem;
        font-family: 'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive;
        z-index: 1;
    }
</style>