<script lang="ts">
    import '$lib/global.scss';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/state';
    let { children } = $props();
</script>
{@render children()}
<Footer isPoem={page.data.fields?.isPoem as boolean | undefined}></Footer>