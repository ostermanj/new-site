<div class="poem">
    <div class="image-container">
        <Image asset={fields.heroImage}></Image>
    </div>
    {#if fields.bodyText}
    <div class="poem-text tc1">
        <RichText doc={fields.bodyText}></RichText>
    </div>
    {/if}
</div>
<script lang="ts">
    interface Props {
        fields: TypePeaceCorpsPostFields; 
    };
    import { type TypePeaceCorpsPostFields } from '$lib/types/contentful';
    
    import RichText from '$lib/components/RichText/index.svelte'
	import Image from '$lib/components/Image.svelte';
    const props: Props = $props();
    const { fields } = props;
</script>
<style>
    .poem {
        display: grid;
        grid-template-rows: 1fr;
        position: fixed;
        inset: 0;
        font-family: PassionOne, sans-serif;
    }
    .image-container {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        flex-direction: column;
    }
    .image-container :global(img) {
        height: 0;
        flex: 1 0 0px;
        object-fit: cover;
    }
    .poem-text {
        grid-column: 1;
        grid-row: 1;
        color: #fff;
        justify-self: end;
        align-self: center;
        letter-spacing: 1px;
        margin-inline: 2em;
        text-indent: -1em;
    }
</style>