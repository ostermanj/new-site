<svelte:element this={marksToElement[marks[0].type as keyof typeof marksToElement]}>
    {@render selfContent()}
</svelte:element>
<script lang="ts">
    import type { Mark } from "@contentful/rich-text-types";
    interface Props {
        marks: Mark[],
        selfContent: any
    }
    const props: Props = $props();
    const { marks, selfContent } = props;
    const marksToElement = {
        bold: 'strong',
        italic: 'em',
        underline: 'u',
        code: 'code',
        superscript: 'sup',
        subscript: 'sub',
        strikethrough: 's'
    };

</script>