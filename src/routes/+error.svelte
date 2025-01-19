<header>
    <MainNavigation></MainNavigation>
</header>
<section class="u-column flow">
    <h1>{page.status}: {page.error?.message}</h1>
    <p class="tc3 emoji">😟</p>
    <p>Don't worry! Check the URL and try again, or navigate somewhere else</p>
</section>
    <script lang="ts">
	import MainNavigation from "$lib/components/MainNavigation.svelte";
	import { page } from "$app/state";

</script>
<style>
    h1 {
        text-align: center;
        margin-block-start: 1lh;
        filter: drop-shadow(2px 2px 2px var(--c-primary-1));
    }
    .emoji {
        margin-block-start: 2rem;
        line-height: 1;
        text-align: center;
    }
</style>