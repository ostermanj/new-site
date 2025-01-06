<script lang="ts">
	import MainNavigation from "./MainNavigation.svelte";
	import NameImage from "./NameImage.svelte";
    import SpriteFile from "./SpriteFile.svelte";
</script>
<header>
    <MainNavigation></MainNavigation>
    <div class="background"></div>
    <h1>
        <span class="u-visually-hidden">john osterman</span>
        <div aria-hidden="true" class="svg-wrapper">
            <NameImage></NameImage>
        </div>
    </h1>
</header>
<section>
    <p>👋🏻 Hello. I am a web developer specializing in performance, accessibility, and data visualization. I work full-time for the <a href="//ushmm.org">US Holocaust Memorial Museum</a> but am occasionally available for side projects.</p>
    <div class="placeholder"></div>
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
    /* @keyframes test {
        from {
            transform: translate(20px, -20px);
            filter: drop-shadow(-20px 20px 3px oklch(from skyblue calc(l - 0.2) c h / alpha));
        }
        to {
            transform: translate(0, 0);
            filter: drop-shadow(0px 0px 0px oklch(from skyblue calc(l - 0.4) c h / alpha));
        }
    } */

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
        font-size: 1.44rem;
        line-height: 1.428;
        padding: .5em;
        max-width: var(--l-max-column-width);
        margin-inline: auto;
        hyphens: auto;

    }  
    p {
        margin-block-end: 1lh;
    }
    .placeholder {
        height: 100vh;
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
    /* TODO: change this to something else */
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
    /* @supports (nonexistent: 100%) { */
        header {
            align-items: start;
            height: 150dvh;
            view-timeline-name: --observerTimeline;
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
            margin-block-start: 30dvh;
            position: relative;
            z-index: 1;
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
