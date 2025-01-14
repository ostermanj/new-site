<header class="u-column-wide flow">
    <h1>{fields.title}</h1>
    {#if fields.subtitle}
        <div class="subtitle">{fields.subtitle}</div>
    {/if}
    <div class="date-published">
        <time datetime={fields?.datePublished}>{new Date(  fields?.datePublished  ).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>
    </div>
</header>
{#if fields.bodyText}
<div class="u-column flow">
    <RichText doc={fields.bodyText}></RichText>
</div>
{/if}
<script lang="ts">
    interface Props {
        fields: TypePeaceCorpsPostFields; 
    };
	import { type TypePeaceCorpsPostFields } from '$lib/types/contentful';
    
    import RichText from '$lib/components/RichText/index.svelte'
    const props: Props = $props();
    const { fields } = props;
</script>
<style lang="scss">
    h1 {
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
    }
    h1, .date-published, .subtitle {
        text-align: center;
    }
    .subtitle {
        font-weight: bold;
    }
</style>