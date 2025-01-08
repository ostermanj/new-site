<script lang="ts">
    import MainNavigation from '$lib/components/MainNavigation.svelte';
	import SpriteFile from '$lib/components/SpriteFile.svelte';
    import '$lib/global.css';
    let { children } = $props();
</script>
<header>
    <MainNavigation></MainNavigation>
</header>
{@render children()}
<footer>
    <SpriteFile></SpriteFile>
</footer>
<style>
</style>