import styles from "./styles/TextPreview.module.css";

import React from "react";
import { PropsWithDisabled } from "@/lib/types/ui/PropsWithDisabled";

type Props = {
    value?: string;
    placeholder: string;

    onPreviewClick: () => void;
};
/**
 * Used to preview/show a text or a placeholder.
 * @see Select
 */
const SelectPreview = ({ value, placeholder, disabled, onPreviewClick }: PropsWithDisabled<Props>) => {
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

export default SelectPreview;
