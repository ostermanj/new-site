<script lang="ts">
    import MainNavigation from '$lib/components/MainNavigation.svelte';
	import SpriteFile from '$lib/components/SpriteFile.svelte';
	import SvgFilters from '$lib/components/SVGFilters.svelte';
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
	<SvgFilters></SvgFilters>
</footer>
<style lang="scss">
	section {
		@media screen and (min-width: 51rem) {
            width: calc(100vw - 56px * 2);
            margin-inline: auto;
        }
	}
</style>