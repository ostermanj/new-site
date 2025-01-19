<a href="/{contentIdToSlug[targetContentType]}/{targetFields.slug}" onclick={(e) => {
    e.preventDefault();
    goto(`/${contentIdToSlug[targetContentType]}/${targetFields.slug}`, {invalidateAll: true});
}}>
    {#each content.content as text}
    <Text content={text}></Text>
    {/each}
</a>
<script lang="ts">
	import type { EntryHyperlink } from "@contentful/rich-text-types";
    import Text from "./Text.svelte";
	import type { Entry } from "contentful";
    import { contentIdToSlug, type ContentIdToFieldsType } from "$lib/mapping.js";
	import { goto } from "$app/navigation";
    interface Props {
        content: EntryHyperlink
    }
    const props: Props = $props();
    const { content } = props;
    const target = content.data.target as unknown as Entry;
    const targetContentType = target.sys.contentType.sys.id as keyof typeof contentIdToSlug;
    const targetFields = target.fields as unknown as ContentIdToFieldsType[typeof targetContentType]
</script>
