import { render } from 'svelte/server';
import Strong from './components/Strong.svelte';
import Image from './components/Image.svelte';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-html-renderer';
import type { Asset, Entry } from "contentful";
import EmbeddedEntry from './components/RichText/EmbeddedEntry.svelte';
export default {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) => `<p class="rich text">${next(node.content)}</p>`,
        // [BLOCKS.EMBEDDED_ENTRY]: (node, next) => `<div>EMBEDDED_ENTRY <pre>${JSON.stringify(node, null, 2)}</pre> ${next(node.content)}</div>`,
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const entry: Entry = node.data.target;
            const result = render(EmbeddedEntry, {
                props: { entry }
            });
            return `${result.head}\n${result.body}`
        },
        [BLOCKS.EMBEDDED_RESOURCE]: (node, next) => `<div>EMBEDDED_RESOURCE ${next(node.content)}</div>`,
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            // TODO: handle other kinds of assets
            const asset: Asset = node.data.target;
            const result = render(Image, {
                props: { asset }
            });
            return result.body;
        }
            
    },
    renderMark: {
        // [MARKS.BOLD]: text => `<strong>${text}</strong>`
        [MARKS.BOLD]: text => {
            const result  = render(Strong, {
                props: { text }
            });
            return result.body
        }
    }
} as Partial<Options>