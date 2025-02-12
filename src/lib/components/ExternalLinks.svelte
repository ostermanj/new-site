<div class={["external-wrapper", {isHome}, {isFooter}]}>
    <button class="nav-more">more</button>
    <menu class={[{'external': !isFooter}, {isHome}, {isFooter}, {pc: page.params.type === 'peace-corps' }]}>
        <li>
            <a title="GitHub" href="//github.com/ostermanj">
                <span class="u-visually-hidden">Github</span> <Sprite id="github" /></a>
        </li>
        <li>
            <a title="Bluesky" href="https://bsky.app/profile/osterman.dev">
                <span class="u-visually-hidden">Bluesky</span> <Sprite id="bluesky" offset={1} /></a>
    
        </li>
        <li>
            <a rel="me" title="Mastadon" href="https://indieweb.social/@ostermoster">
                <span class="u-visually-hidden">Mastodon</span> <Sprite id="mastodon" offset={1} /></a>
    
        </li>
        <li>
            <a title="LinkedIn" href="//www.linkedin.com/in/john-osterman-32714012/"
                ><span class="u-visually-hidden">LinkedIn</span> <Sprite id="linkedin" offset={-1} /></a
            >
        </li>
        <!-- TODO: PUBLIC PATH -->
        <li><a data-sveltekit-reload class="bw-0" title="RSS" href="/rss"><span class="u-visually-hidden">RSS</span> <Sprite width={18} height={18} id="rss" offset={-2} /></a></li>
        <li class="slash-item"><a href="/coffee">/coffee</a></li>
        <li class="slash-item"><a href="/til">/til</a></li>
    </menu>
</div>
<script lang="ts">
    import { page } from "$app/state";
    import Sprite from "./Sprite.svelte";

    const { isHome = false, isFooter = false }: { isHome?: boolean, isFooter?: boolean} = $props(); 
</script>
<style lang="scss">
    @use '../mixins';

    .external-wrapper.isHome {
                position: sticky;
                top: 59px;
                z-index: 1;
    }
     
    menu.external {
        // view-transition-name: 'externalNav';
        display: grid;
        gap: 1rem;
        grid-auto-flow: column;
        margin-block-start: var(--banner-height);
        inset-block-start: 100%;
        background-color: var(--c-background-1);
        flex-shrink: 0;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 56px;
        border-block-end: 1px solid currentColor;
        z-index: 1;
        transition: transform 0.15s 0.2s ease;
        transform: translateY(-100%);
        
        @include mixins.vertical-menu;
        
        .external-wrapper:hover &, .external-wrapper:focus-within &, &.isHome {
            transform: translateY(0);
        }
        
        // &:not(.pc) {
            
        // @media screen and (min-width: 51rem) {
            //         @include mixins.vertical-menu;
            //     }
            // }
            
            li {
                line-height: 1;
            }
            
        @media screen and (min-width: 51rem) {
            transform: translateY(0);
        }
    }

    menu.isFooter {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {
            color: var(--c-background-1);
        }
    }
    .nav-more {
        appearance: none;
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 56px;
        width: 56px;
        border: 1px solid var(--c-background-2);
        border-block-start-width: 0;
        font: inherit;
        background-color: var(--c-background-1);
        color: var(--c-primary-2);
        border-radius: 0 0 5px 5px;

        .isFooter & {
            display: none;
        }

        @media screen and (min-width: 51rem) {
        display: none;
       }
    }
    .slash-item {
        writing-mode: vertical-lr;
        writing-mode: sideways-lr;

        .isFooter & {
            display: none;
        }
    }
</style>