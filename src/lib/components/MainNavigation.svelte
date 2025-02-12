<script lang="ts">
    const { isHome = false } = $props();
    import { page } from "$app/state";
	import ExternalLinks from "./ExternalLinks.svelte";
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
    <ExternalLinks {isHome}></ExternalLinks>
</div>
<style lang="scss">
    @use '../mixins';
    .main-navigation {
        font-size: clamp(15px, 4.375vw, 23.2px);
        // view-transition-name: navigation;
        --banner-height: 59px;
        height: var(--banner-height);
        position: relative;
        z-index: 1;

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