import { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';
import QuoteBlock from "@/ui/components/blocks/QuoteBlock";
import { SerializedBlockNode } from "@payloadcms/richtext-lexical";

export const blockConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
        quote: ({ node }: { node: SerializedBlockNode }) => {
            return <QuoteBlock text={node.fields.text} author={node.fields.author}/>
        },
    },

});

