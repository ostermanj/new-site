<nav>
    <div class="nav-inner">
        <a class="home-item" aria-label="home" href="/"><Sprite id="initials" height={48} width={50} /></a>
        <menu class="internal">
            <li><a href="/">Blog posts</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Peace Corps</a></li>
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
<style>
    nav {
       font-family: PassionOne;
       letter-spacing: 0.3px;
       position: fixed;
       inset-block-start: 0; 
       inset-inline-start: 0;
       width: 100%;
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
        display: flex;
        gap: 1rem;
    }
    .home-item {
        padding-inline-end: 5px;
        padding-block-end: 5px;
        padding-block-start: 5px;
        border-inline-end: 1px solid var(--c-primary-2);
        /* border-block-end: 1px solid currentColor; */
    }
    .home-item {
        display: flex;
        align-items: center;
        background-color: #fff;
    }
    menu.internal {
        flex-grow: 1;
        justify-content: space-evenly;
        padding-inline: 0.5rem;
    }
    menu.internal li {
        display: flex;
        align-items: center;
    }
    
    menu.external {
        position: sticky;
        top: 59px;
        flex-shrink: 0;
        padding-block-start: 1rem;
        align-items: center;
        flex-direction: column;
        width: 56px;
        border-inline-end: 1px solid currentColor;
        border-block-end: 1px solid currentColor;
        z-index: 1;
    }
    a {
        text-decoration: none;
    }
</style>
<script>
    import Sprite from "./Sprite.svelte";
</script>