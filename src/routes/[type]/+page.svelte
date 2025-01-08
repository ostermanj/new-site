<h1 class="u-visually-hidden">{data.title}</h1>
<div class="grid tc-1">
    {#each data.items ?? [] as item}
        <article class="flow">
            <h2><a href="/">{item.title}</a></h2>
            <p>{item.snippet}</p>
        </article>
    {/each}
</div>
<div class="placeholder"></div>
<style lang="scss">
    header {
    }
    article {
        border: 2px solid var(--c-primary-1);
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #fff;
    }
    h2 {
        // color: oklch(from skyblue calc(l / 2.5) c h);
        opacity: 0.80;
        font-family: PassionOne;
        letter-spacing: 0.5px;
        hyphens: auto;
    }
    h2 a {
        text-decoration: none;
        color: inherit;
    }
    .grid {
        padding-inline: 1lh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 1rem;

        @media screen and (min-width: 51rem) {
            width: calc(100vw - 56px * 2);
            margin-inline: auto;
        }
    }
    .placeholder {
        height: 200dvh;
    }
    
</style>
<script lang="ts">
    const { data } = $props();
    console.log(data);
</script>