<svelte:head>
    <meta name="description" content={data.pageFields?.snippet} />
    <meta name="og:title" content={contentSlugToTitle[page.params.type as keyof typeof contentSlugToTitle]} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content={`https://osterman.blog/${page.url.pathname}`} />
    <meta name="og:image" content={data.pageFields?.hero?.fields.file?.url as string ?? 'https://osterman.blog/johnosterman.png'} />
    <meta name="og:site_name" content="John Osterman" />
    <meta name="og:description" content={data.pageFields?.snippet} />
    <link rel="canonical" href={`https://osterman.blog${page.url.pathname}`}>
    {#if isPeaceCorps}
    <script defer src='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js'></script>
    <!-- <script defer src='/init-map.js'></script> -->
    {@html `<link
        rel="preload"
        as="style"
        href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css'
        onload="this.rel = 'stylesheet'" />`}
    {/if}
</svelte:head>
{#if data.pageFields.isSlashPage}
<SlashPage items={data.items} pageFields={data.pageFields}></SlashPage>
{:else}
<header class={["flow", page.params.type]}>
    {#if data.pageFields?.hero}
        <img class="hero" src="{data.pageFields?.hero?.fields.file?.url as string}" alt="{data.pageFields?.hero?.fields.description as string}">
    {/if}
    <h1 class={[{'u-visually-hidden': !data.pageFields?.showTitle}]}>{data.pageFields?.title}</h1>
</header>
{#if data.pageFields?.subtitle || data.pageFields?.bodyText }
<div class="u-column flow">
    {#if data.pageFields?.subtitle}
        <div class={["subtitle", page.params.type]}>{data.pageFields?.subtitle}</div>
    {/if}
    {#if data.pageFields?.bodyText}
        <RichText doc={data.pageFields.bodyText}></RichText>
    {/if}
</div>
{/if}
<ContentGrid items={data.items}></ContentGrid>
{/if}
<style lang="scss">
    
    header {
        display: grid;
        &.peace-corps {
            // margin-block-start: 1lh;
        }
    }
    h1 {
        text-align: center;
        .peace-corps & {
            mix-blend-mode: difference;
            color: #2196f3;
            grid-row: 1;
            grid-column: 1;
            align-self: end;
            font-family: cursive;
            filter: url('#noise-liter');
            @media screen and (min-width: 515px){
                filter: url('#noise-lite');
            }
            @media screen and (min-width: 60rem){
                font-size: var(--fz-larger-3);
            }
        }
    }

    .subtitle {
        font-family: PassionOne;
        text-align: center;
        letter-spacing: 0.5px;
        
        &.peace-corps {
            margin-block-start: -40px;
        }
    }
    .hero {
        grid-row: 1;
        grid-column: 1;
        margin-inline-start: -3px;
        margin-block-start: -3px;
        width: 100%;
        height: auto;
        min-height: 270px;
        object-fit: cover;
        
        .peace-corps & {
            // padding: 0.5rem;
            filter: url('#noise-liter');
            @media screen and (min-width: 515px){
                filter: url('#noise-lite');
            }
            @media screen and (min-width: 51rem){
                padding-inline: 1rem;
            }

        }
    }
    // :global(#map-cont) {
    //     position: relative;
    //     width: 100%;
    //     padding-bottom: 56.25%;
    // }
    // :global(#map-cont--inner) {
    //     position: absolute;
    //     inset: 0;
    // }
    
</style>
<script module lang="ts">
    declare const mapboxgl: {[key: string]: any} | undefined; 
    import { contentSlugToTitle } from "$lib/mapping";
    import { isTypeSlashItem } from "$lib/types/contentful/index.js";
    
</script>
<script lang="ts">
    
    import { page } from "$app/state";
    import RichText from '$lib/components/RichText/index.svelte';
    import ContentGrid from "$lib/components/ContentGrid.svelte";
	import SlashPage from "./SlashPage.svelte";
    
    const { data } = $props();
    const isPeaceCorps = $derived(page.url.pathname === '/peace-corps');
    let _map: {[key: string]: any} | undefined; 
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                requestAnimationFrame(() => {
                    _map?.flyTo({
                        center: [-11.0813, 21.1456],
                        zoom: 3.9
                    });
                    observer.disconnect();
                })
            }
        })
    }
    let timeout: number;
    const initMap = (container: HTMLElement) => {
        return;
        clearInterval(timeout);
        if (!mapboxgl) {
            return
        }
        mapboxgl.accessToken = '';
            _map = new mapboxgl.Map({
                container: 'map-cont--inner', // container ID
                style: 'mapbox://styles/mapbox/satellite-streets-v11?optimize=true', // style URL
                center: [-100.4544, 37.0351], // starting position [lng, lat]
                // center: [-11.0813, 21.1456], // starting position [lng, lat]
                zoom: 1.256, // starting zoom
                minzoom: 1.256,
                maxzoom: 3.9,
                // zoom: 3.9, // starting zoom
                projection: 'globe' // display the map as a 3D globe
            });
        if (!_map) return;
        _map.scrollZoom.disable();
        _map.on('load', () => {
            const options = {
                root: null,
                threshold: 1
            };
            const observer = new IntersectionObserver(callback, options);
            if (container){
                observer.observe(container);
            }
        })
    }
    $effect(() => {
        return;
        if (!isPeaceCorps) {
            return;
        }
        const container: HTMLElement | null = document.getElementById('map-cont');
        if (!container) return;
        container.insertAdjacentHTML('afterbegin','<div id="map-cont--inner" class="embedded-entry-pullout"></div>');

        timeout = window.setInterval(() => {
            if (mapboxgl){
                initMap(container)
            }
        })
    })
</script>