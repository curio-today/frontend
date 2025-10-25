import styles from "./styles/TextPreview.module.css";

import React from "react";
import { PropsWithDisabled } from "@/types/ui/disabled-props";

export type TextPreview = {
    value?: string;
    placeholder: string;

    onPreviewClick: () => void;
};
/**
 * Used to preview/show a text or a placeholder.
 * @see Select
 */
const TextPreview = ({ value, placeholder, disabled, onPreviewClick }: PropsWithDisabled<TextPreview>) => {
    return (
        <span className={styles["preview"]} onClick={onPreviewClick} aria-disabled={disabled}>
            {value ? (
                <div className="text-(--text)">{value}</div>
            ) : (
                <div className="text-(--secondary)">{placeholder}</div>
            )}
        </span>
    );
};

export default TextPreview;
