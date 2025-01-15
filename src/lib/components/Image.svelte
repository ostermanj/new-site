<!-- TODO: srcset -->
<img {src} {alt} {width} {height} loading="lazy" />
<script lang="ts">
    import type { Asset, AssetDetails } from "contentful";
    const props = $props();
    const asset: Asset = props.asset
    const src = typeof asset.fields.file?.url === 'string' ? `${asset.fields.file.url}?w=1344&fm=png` : '';
    const alt = typeof asset.fields.description === 'string' ? asset.fields.description : ''
    const width = (asset.fields.file?.details as AssetDetails).image?.width ?? '';
    const height = (asset.fields.file?.details as AssetDetails).image?.height ?? '';
</script>
<style>
    img {
        height: auto;
    }
</style>
