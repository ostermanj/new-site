<footer class={{isPoem}}>
    <div class={[{'u-column': !isPoem} ,'flow']}>
        {#if !isPoem}
        <div class="tc-1 slash-pages">
            <a href="/coffee">/coffee</a>
        </div>
        <ExternalLinks isFooter={true}></ExternalLinks>
        {/if}
        <div class="tc-2 copyright">© John Osterman 2025. All Rights Reserved.</div>
    </div>
    <SpriteFile></SpriteFile>
    <SvgFilters></SvgFilters>
</footer>
<style>
    footer {
        display: flex;
        align-items: end;
        height: 300px;
        margin-block-start: 150px;
        background-image: linear-gradient(to bottom, var(--c-background-2),  var(--c-secondary-1));
        color: var(--c-background-1);
        position: relative;
        z-index: 1;
    }
    div {
        width: 100%;
    }
    .copyright {
        text-align: center;
    }

    footer.isPoem {
        width: 100%;
        height: auto;
        margin-block-start: 0;
        position: fixed;
        inset-block-end: 0;
        background-image: none;
        justify-content: end;
        color: #fff;
    }
    
    footer.isPoem div {
        width: auto;
    }
    footer.isPoem .copyright {
        text-shadow: 0 0 3px #000;
    }
    .slash-pages {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    .slash-pages a {
        color: var(--c-background-1);
        text-decoration-color: currentcolor;
    }
</style>
<script lang="ts">
	import ExternalLinks from "./ExternalLinks.svelte";
    import SpriteFile from "./SpriteFile.svelte";
	import SvgFilters from "./SVGFilters.svelte";

    const { isPoem = false }: {isPoem?: boolean} = $props();
</script>