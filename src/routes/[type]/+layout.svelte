<script lang="ts">
    import MainNavigation from '$lib/components/MainNavigation.svelte';
	import SpriteFile from '$lib/components/SpriteFile.svelte';
    import { onNavigate } from '$app/navigation';
    import '$lib/global.css';
    
    let { children } = $props();
    onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>
<header>
    <MainNavigation></MainNavigation>
</header>
<section class="flow">{@render children()}</section>
<footer>
    <SpriteFile></SpriteFile>
</footer>
<style>
</style>