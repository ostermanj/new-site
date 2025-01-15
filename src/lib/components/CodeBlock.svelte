<pre use:highlightCode class="tc-2" style="--timeline: --{fields.internalName.replaceAll(' ','').replaceAll(/[,.;:]/g,'')}">{@html escapeHTML(fields.code)}</pre>
<script module>
    import hljs from 'highlight.js/lib/core';
    import xml from 'highlight.js/lib/languages/xml';
    import css from 'highlight.js/lib/languages/css';
    import javascript from 'highlight.js/lib/languages/javascript';

    const languages = {
        xml,
        css,
        javascript,
    };
</script>
<script lang="ts">
	import type { TypeCodeBlockFields } from "$lib/types/contentful";
    // import 'highlight.js/styles/atom-one-dark.min.css';
    // import 'highlight.js/styles/github-dark.min.css'
    import 'highlight.js/styles/github-dark-dimmed.min.css'
    
    
    interface Props {
        fields: TypeCodeBlockFields
    }
    const props: Props = $props();
    const { fields } = props;
    hljs.registerLanguage(fields.language, languages[fields.language]);
    const highlightCode = (node) => {
        hljs.highlightElement(node);
    }
     const escapeHTML = (html: string) => (html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;"));
</script>
<style>
    pre {
        overflow-x: auto;
        padding: 1em;
    }
    :global(pre.hljs) {
        box-shadow: inset 4px 4px 7px 6px #000;
        background-color: oklch(from var(--c-background-1) calc(l* 0.25) c h);
    }
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        @keyframes perspective {
            from {
                padding-block-start: 1.5rem;
                padding-block-end: 0.5rem;
            }
            to {
                padding-block-start: 0.5rem;
                padding-block-end: 1.5rem;
            }
        }
        :global(pre.hljs) {
            view-timeline: var(--timeline) block;
            animation-timeline: var(--timeline);
            animation-name: perspective;
            animation-timing-function: cubic-bezier(0.1, 0.6, 0.7, 0.2);
        }
    }
</style>
