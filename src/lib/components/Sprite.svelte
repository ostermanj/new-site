<script>
    const { id = '', width = 24, height = 24, offset = 0, variant = 'default' } = $props();
</script>
<style>
    svg {
        position: relative;
    }
    svg:hover, svg:focus, :global(body.dark) svg:hover, :global(body.dark) svg:focus {
        fill: var(--color-primary-1)
	}
    :global(body.dark) svg {
        filter: invert(1)
    }
    :global(body.dark) svg:hover, :global(body.dark) svg:focus {
        filter: invert(0)
    }
</style>
<svg aria-hidden="true" {width} {height} style:top={offset}px>
    <use xlink:href="#svg-{id}" fill="{variant == 'gradient' ? 'url(#linearGradient)' : null}"></use>
</svg>