<script lang="ts">
    import MainNavigation from '$lib/components/MainNavigation.svelte';
    import { onNavigate } from '$app/navigation';
    import '$lib/global.scss';
    const { children } = $props();
    onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const moreHandler = () => {

	}
</script>
<header>
    <MainNavigation></MainNavigation>
</header>
<section class="flow">
	{@render children()}</section>
<style lang="scss">
	section {
		@media screen and (min-width: 51rem) {
            width: calc(100vw - 56px * 2);
            margin-inline: auto;
        }
	}
</style>