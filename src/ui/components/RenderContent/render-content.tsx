import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { blockConverters } from "@/lib/helpers/converters";
import styles from "./render-content.module.css";
import { SerializedEditorState } from "lexical";

type RenderContentProps = {
    content: SerializedEditorState;
};

const RenderContent = ({ content }: RenderContentProps) => {
    return (
        <RichText data={content} converters={blockConverters} className={styles.content}/>
    );
};

export default RenderContent;
