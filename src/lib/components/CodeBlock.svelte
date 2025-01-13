<svelte:options css={'injected'}></svelte:options>
<pre class="tc-2"><code>{fields.code}</code></pre>
<script lang="ts">
	import type { TypeCodeBlockFields } from "$lib/types/contentful";
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github.css';

    
    interface Props {
        fields: TypeCodeBlockFields
    }
    const props: Props = $props();
    const { fields } = props;


</script>
<style>
    pre {
        overflow-x: auto;
    }
</style>
