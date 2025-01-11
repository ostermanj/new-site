<!-- TODO: PULL MARGINS OUT -->
<svelte:options css={'injected'}></svelte:options>
<div class="grid">
    {#each figures as figure}
        <Figure fields={figure.fields as TypeFigureFields}></Figure>
    {/each}
</div>
<script lang="ts">
    import Figure from "./Figure.svelte";
    import type { TypeTwoUpFields, TypeFigureFields } from "$lib/types/contentful";
    interface Props {
        fields: TypeTwoUpFields
    }
    const props: Props = $props();
    const { fields } = props;
    const figures = fields.figures
</script>
<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0.5rem;
    }
</style>