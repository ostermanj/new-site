<svelte:head>
    <meta name="description" content={data.pageFields?.snippet} />
    <meta name="og:title" content={contentSlugToTitle[page.params.type as keyof typeof contentSlugToTitle]} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content={`https://osterman.blog/${page.url.pathname}`} />
    <meta name="og:image" content={data.pageFields?.hero?.fields.file?.url as string ?? 'https://osterman.blog/johnosterman.png'} />
    <meta name="og:site_name" content="John Osterman" />
    <meta name="og:description" content={data.pageFields?.snippet} />
    <link rel="canonical" href={`https://osterman.blog/${page.url.pathname}`}>
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
{#if isPeaceCorps}
<header>
    <img class="hero" src="{data.pageFields?.hero?.fields.file?.url as string}" alt="{data.pageFields?.hero?.fields.description as string}">
    <h1>{data.title}</h1>
</header>
<div class="u-column flow">
    <div class="secondary-title">{data.pageFields?.secondaryTitle}</div>
    {#if data.pageFields?.bodyText}
        <RichText doc={data.pageFields.bodyText}></RichText>
    {/if}
</div>
{:else}
<h1 class="u-visually-hidden">{data.title}</h1>
{/if}
<ContentGrid items={data.items}></ContentGrid>
<style lang="scss">
    
    header {
        display: grid;
    }
    h1 {
        mix-blend-mode: difference;
        text-align: center;
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

    .secondary-title {
        font-family: PassionOne;
        text-align: center;
        margin-block-start: -40px;
        letter-spacing: 0.5px;
    }
    .hero {
        grid-row: 1;
        grid-column: 1;
        margin-block-start: -3px;
        width: 100%;
        padding: 0.5rem;
        height: auto;
        min-height: 270px;
        object-fit: cover;
        filter: url('#noise-liter');
        @media screen and (min-width: 515px){
                filter: url('#noise-lite');
        }
    }
    :global(#map-cont) {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
    }
    :global(#map-cont--inner) {
        position: absolute;
        inset: 0;
    }
    
</style>
<script module>
    declare const mapboxgl: {[key: string]: any} | undefined; 
    import { contentSlugToTitle } from "$lib/mapping";
</script>
<script lang="ts">
    
    import { page } from "$app/state";
    import RichText from '$lib/components/RichText/index.svelte';
    import ContentGrid from "$lib/components/ContentGrid.svelte";

    let { data } = $props();
    let isPeaceCorps = $derived(page.url.pathname === '/peace-corps');
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
        clearInterval(timeout);
        if (!mapboxgl) {
            return
        }
        mapboxgl.accessToken = 'pk.eyJ1Ijoib3N0ZXJtYW5qIiwiYSI6ImNsOWl5NmF5ZTA4ODgzd28wczZ3bm9oYm0ifQ.qLNG2qiKlw8RkjFlHwsHhQ';
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