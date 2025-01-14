<aside>
    <h2 class="tc-1">{fields.label}</h2>
    <RichText doc={fields.text}></RichText>
</aside>
<script lang="ts">
    import type { TypeNoticeFields } from "$lib/types/contentful";
    import RichText from './RichText/index.svelte'
    interface Props {
        fields: TypeNoticeFields
    }
    const props: Props = $props();
    const { fields } = props;
</script>
<style>
    aside {
        position: relative;
        background-color: #fff;
        border: 2px solid oklch(from var(--c-background-1) calc(l* 0.25) c h);
        padding: 1em;
    }
    h2 {
        position: absolute;
        background-color: oklch(from var(--c-background-1) calc(l* 0.25) c h);
        color: #fff;
        border: 2px solid oklch(from var(--c-background-1) calc(l* 0.25) c h);
        padding: 0.5rem;
        inset-inline-start: 50%;
        inset-block-start: 0;
        transform: translate(-50%, -50%);
        letter-spacing: 0.5px;

    }
</style>