import { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';
import QuoteBlock from "@/components/blocks/QuoteBlock";

export const blockConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
        quote: ({ node }: { node: unknown }) => {

            return <QuoteBlock text={node.fields.text} author={node.fields.author}/>
        },
    },

});

