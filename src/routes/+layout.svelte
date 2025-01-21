<script lang="ts">
    import '$lib/global.scss';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/state';
    let { children } = $props();
</script>
<svelte:head>
    {#if import.meta.env.PROD }
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8P9T7XMGMD"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8P9T7XMGMD');
        </script>
    {/if}
</svelte:head>
{@render children()}
<Footer isPoem={page.data.fields?.isPoem as boolean | undefined}></Footer>