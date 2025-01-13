<pre use:highlightCode class="tc-2"><code>{fields.code}</code></pre>
<script lang="ts">
	import type { TypeCodeBlockFields } from "$lib/types/contentful";
    import hljs from 'highlight.js/lib/core';
    import xml from 'highlight.js/lib/languages/xml';
    hljs.registerLanguage('javascript', xml);
    // import 'highlight.js/styles/atom-one-dark.min.css';
    // import 'highlight.js/styles/github-dark.min.css'
    import 'highlight.js/styles/github-dark-dimmed.min.css'

    
    interface Props {
        fields: TypeCodeBlockFields
    }
    const props: Props = $props();
    const { fields } = props;
    const highlightCode = (node) => {
        hljs.highlightBlock(node);
    }
</script>
<style>
    pre {
        overflow-x: auto;
        padding: 1em;
    }
</style>
