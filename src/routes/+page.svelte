<script lang="ts">
	import MainNavigation from "./MainNavigation.svelte";
	import NameImage from "./NameImage.svelte";
    import SpriteFile from "./SpriteFile.svelte";
</script>
<header>
    <div class="nav">
        <MainNavigation></MainNavigation>
    </div>
    <div class="background"></div>
    <h1>
        <span class="u-visually-hidden">john osterman</span>
        <div aria-hidden="true" class="svg-wrapper">
            <NameImage></NameImage>
        </div>
    </h1>
</header>
<section>
    <p>👋🏻 Hello. I am a web developer specializing in performance, accessibility, and data visualization. I work full-time for the US Holocaust Memorial Museum but am occasionally available for side projects.</p>
    <div class="placeholder"></div>
</section>
<footer>
    <SpriteFile></SpriteFile>
</footer>
<style>
    @keyframes test {
        0% {
            transform: scaleY(1) scaleX(1);
            filter: drop-shadow(0px 0px 0px oklch(from skyblue calc(l - 0.2) c h / alpha));
        }
        75% {
            transform: scaleY(2.5) scaleX(1.5);
            filter: drop-shadow(-20px 20px 3px oklch(from skyblue l c h / alpha));
        }
        100% {
            transform: scaleY(2.5) scaleX(1.5) translateY(-100%);
            filter: drop-shadow(-20px 20px 3px oklch(from skyblue l c h / alpha));
        }
    }
    @keyframes color {
        from {
            color: var(--c-primary-2)
        }
        to {
            color: var(--c-primary-1)
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
        align-items: end;
        justify-content: end;
        color: var(--c-primary-2);
        height: 100dvh;
        margin-inline: auto;
        
    }
    h1 {
        display: flex;
        justify-content: end;
        width: 100%;
    }
    .svg-wrapper {
        display: flex;
        align-items: end;
        width: 55%;
        transform-origin: right bottom;
    }
    section {
        font-size: 1.2rem;
        line-height: 1.428;
        padding: 1lh;
        max-width: 46.25rem;
        margin-inline: auto;

    }  
    p {
        margin-block-end: 1lh;
    }
    .placeholder {
        height: 100vh;
    }


    /* @media (min-aspect-ratio: 1/1){
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
    } */
    /* TODO: change this to something else */
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
    /* @supports (nonexistent: 100%) { */
        header { 
            height: 200dvh;
            view-timeline-name: --observerTimeline;
            animation-name: color;
            animation-fill-mode: both;
            animation-timeline: --observerTimeline;
            animation-timing-function: linear;
            animation-range: entry 100% exit 50%;
        }
        .background {
            position: fixed;
            inset: 0;
            background-color: oklch(0.82 0.08 225.77);
            animation-name: fade-to-white;
            animation-fill-mode: both;
            animation-timeline: --observerTimeline;
            animation-range: exit 0% exit 100%;
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
            margin-block-start: -20dvh;
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
