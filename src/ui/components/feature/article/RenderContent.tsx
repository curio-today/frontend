import { blockConverters } from "@/lib/helpers/converters";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "lexical";

export type RenderContentProps = {
    content: SerializedEditorState;
} 

const RenderContent = ({ content }: RenderContentProps) => {
    return (
        <RichText
            className="flex flex-col gap-[1rem]"    
            data={content} 
            converters={blockConverters} 
        />
    );
};

export default RenderContent;
