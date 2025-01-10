<script lang="ts">
    const { isHome = false } = $props();
    import { page } from "$app/state";
    console.log(page);
    import Sprite from "./Sprite.svelte"
</script>
<div class={["main-navigation", {isHome}]}>
    <nav>
        <div class="nav-inner">
            <a aria-current={page.url.pathname === '/' ? 'page' : null} class="home-item" aria-label="home" href="/"><Sprite id="initials" height={48} width={50} /></a>
            <menu class="internal">
                <li><a class={{'breadcrumb': page.url.pathname.startsWith('/blog-posts') }} aria-current={page.url.pathname === '/blog-posts' ? 'page' : null} href="/blog-posts">Blog posts</a></li>
                <li><a class={{'breadcrumb': page.url.pathname.startsWith('/projects') }} aria-current={page.url.pathname === '/projects' ? 'page' : null} href="/projects">Projects</a></li>
                <li><a class={{'breadcrumb': page.url.pathname.startsWith('/peace-corps') }} aria-current={page.url.pathname === '/peace-corps' ? 'page' : null} href="/peace-corps">Peace Corps</a></li>
            </menu>
        </div>
    </nav>
    <menu class="external">
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
    </menu>
</div>
<style lang="scss">
    .main-navigation {
        // view-transition-name: navigation;
        --banner-height: 59px;
        height: var(--banner-height);
        position: relative;

        &.isHome {
            display: contents;
        }
    }
    nav {
       font-family: PassionOne;
       letter-spacing: 0.3px;
       position: fixed;
       inset-block-start: 0; 
       inset-inline-start: 0;
       width: 100%;
       height: var(--banner-height);
       z-index: 2;
       background-color: var(--c-background-1);
    }
    a {
        color: var(--c-primary-2);
    }
    .nav-inner {
        display: flex;
        border-block-end: 1px solid currentColor;
    }
    menu {
        display: grid;
        // grid-auto-rows: 1fr;
        gap: 1rem;
        grid-auto-flow: column;
    }
    .home-item {
        padding-inline-end: 5px;
        padding-block-end: 5px;
        padding-block-start: 5px;
        border-inline-end: 1px solid var(--c-primary-2);
        /* border-block-end: 1px solid currentColor; */
        display: flex;
        align-items: center;
    }
    menu.internal {
        grid-auto-columns: 1fr;
        flex-grow: 1;
        justify-content: stretch;

        @media screen and (min-width: 51rem) {
            padding-inline-end: 56px;
        }
    }
    menu.internal li {
        flex-grow: 1;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
    }
    menu.internal li a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a[aria-current='page'] {
        background-color: var(--c-background-2);
    }
    @mixin vertical {
        margin-block-start: 0;
        padding-block: 1rem;
        position: absolute;
        grid-auto-flow: row;
        width: 56px;
        height: auto;
        border-inline-end: 1px solid currentColor;
    }

    menu.external {
        // view-transition-name: 'externalNav';
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

        @media screen and (min-width: 51rem) {
            @include vertical();
        }

        li {
            line-height: 1;
        }
    }
    .isHome menu.external {
        @include vertical();
        position: sticky;
        top: 59px;
    }
    a {
        position: relative;
        text-decoration: none;
    }
    a.breadcrumb::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 7px solid var(--c-primary-1);
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }
</style>