<script lang="ts">
	import type { TypeNewPageFields } from '$lib/types/contentful/TypeNewPage';
	
    import MainNavigation from "$lib/components/MainNavigation.svelte";
	import NameImage from "$lib/components/NameImage.svelte";
    import SpriteFile from "$lib/components/SpriteFile.svelte";
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import { onNavigate } from '$app/navigation';

	const { data }: {data: TypeNewPageFields} = $props();

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
    <MainNavigation isHome={true}></MainNavigation>
    <div class="background"></div>
    <h1>
        <span class="u-visually-hidden">john osterman</span>
        <div aria-hidden="true" class="svg-wrapper">
            <NameImage></NameImage>
        </div>
    </h1>
</header>
<section>
    <div class="u-column flow">
        <p class="tc2"><span class="handwave">👋🏻</span> Hello.</p>
        {@html documentToHtmlString(data.body)}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur praesentium nemo nisi eos debitis dicta quae recusandae. Culpa, aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur praesentium nemo nisi eos debitis dicta quae recusandae. Culpa, aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur praesentium nemo nisi eos debitis dicta quae recusandae. Culpa, aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur praesentium nemo nisi eos debitis dicta quae recusandae. Culpa, aliquid.</p>
    </div>
</section>
<footer>
    <SpriteFile></SpriteFile>
</footer>
<style>
    @keyframes test {
        0% {
            transform: scaleY(1) scaleX(1);
        }
        75% {
            transform: scaleY(2.5) scaleX(0.75);
        }
        100% {
            transform: scaleY(1.5) scaleX(0.85) translateY(-100%);
        }
    }
    @keyframes wave {
        0% {
            transform: rotate(0);
        }
        15% {
            transform: rotate(10deg);
        }
        20% {
            transform: rotate(-10deg);
        }
        25% {
            transform: rotate(0);
        }
        70% {
            transform: rotate(0);
        }
        75% {
            transform: rotate(10deg);
        }
        80% {
            transform: rotate(-10deg);
        }
        95% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(0);
        }
    }

    @keyframes fade-to-white {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    header {
        display: flex;
        align-items: start;
        justify-content: end;
        color: var(--c-primary-2);
        background-color: var(--c-background-1);
        height: 100dvh;
        margin-inline: auto;
        
    }
    h1 {
        display: flex;
        justify-content: end;
        align-self: end;
        width: 100%;
        max-width: 84rem;
        margin-inline: auto;
        flex-grow: 1;
    }
    .svg-wrapper {
        display: flex;
        align-items: end;
        width: 100%;
        transform-origin: right bottom;
    }
    section {
        padding-block-start: 40vh;
        hyphens: auto;
        background-image: linear-gradient(to bottom, var(--c-background-1), #fff 40vh);
    }  
    p:first-of-type {
        text-align: center;
    }


    @media (min-aspect-ratio: 1/1){
        .svg-wrapper {
            width: 80%;
        }
    }
    @media (min-aspect-ratio: 9/6){
        .svg-wrapper {
            width: 75%;
        }
    }
    @media (min-aspect-ratio: 5/3){
        .svg-wrapper {
            width: 70%;
        }
    }
    @media (min-aspect-ratio: 11/6){
        .svg-wrapper {
            width: 65%;
        }
    }
    @media (min-aspect-ratio: 2/1){
        .svg-wrapper {
            width: 50%;
        }
    }
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        header {
            align-items: start;
            height: 150dvh;
            view-timeline-name: --observerTimeline;
            background-color: transparent;
        }
        .background {
            position: fixed;
            inset: 0;
            background-color: oklch(0.82 0.08 225.77);
            animation-name: fade-to-white;
            animation-fill-mode: both;
            animation-timeline: --observerTimeline;
            animation-range: exit 30% exit 100%;
            animation-timing-function: ease-in;
        }
        
        h1 {
            position: sticky;
            inset-inline-end: 0;
            inset-block-end: 0;
            overflow: hidden;
            height: 100dvh;
        }
        .svg-wrapper {
            transform-origin: bottom right;
            transition: transform 200ms ease-in;
            animation-name: test;
            animation-fill-mode: both;
            animation-timeline: --observerTimeline;
            animation-range: entry 100% exit 50%;
            animation-timing-function: linear;
        }
        section {
            position: relative;
            z-index: 1;
            background-image: none;
        }
        .handwave {
            display: inline-block;
            view-timeline-name: --sectionTimeline;
            animation-name: wave;
            animation-fill-mode: both;
            animation-timeline: --sectionTimeline;
            animation-range: entry 10% exit 10%;
            animation-timing-function: linear;
        }
    }
    /* @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        header { 
            display: revert;
            height: 200dvh;
            animation: fade-out linear;
            animation-timeline: --header-progress;
        }
        .svg-wrapper-outer {
            perspective: 200vw;
            perspective-origin: bottom right;
            position: fixed;
    
        }
    
        .svg-wrapper {
            animation: rotate-back ease-in;
            animation-timeline: --header-progress;
            animation: rotate-back ease-in;
            animation-timeline: --header-progress;
        }
        p {
            color: oklch(0.89 0.04 225.77);
        }
    } */
</style>
