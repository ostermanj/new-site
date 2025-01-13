<p use:test>Test hydration</p>
<script lang="ts">
	import { onMount } from "svelte";

    onMount(() => {
        console.log('mount!');
    })

    const test = (node: HTMLElement) => {
        console.log(node);
    }
</script>