<hr class={{'peace-corps': page.params.type === 'peace-corps'}}>
<script lang="ts">
    import { page } from "$app/state";
</script>
<style>
    .peace-corps {
        filter: url(#noise-liter);
    }
</style>