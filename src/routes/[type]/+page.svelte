<header>
    <h1>{data.title}</h1>
</header>
{#each data.items ?? [] as item}
    <article>
        <p>{item.title}</p>
    </article>
{/each}
<div class="placeholder"></div>
<style>
    .placeholder {
        height: 200dvh;
    }
    
</style>
<script lang="ts">
    const { data } = $props();
    console.log(data);
</script>