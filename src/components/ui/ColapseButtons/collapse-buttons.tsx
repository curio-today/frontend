"use client"

import styles from "./collapse-buttons.module.css"
import { CollapseButtonsProps } from "./collapse-buttons.types";
import Button from "@/components/ui/Button";

const CollapseButtons = ({ children }: CollapseButtonsProps) => {
    return (
        <div className={styles.collapseButtons}>
            {children}
            <Button className={styles.expandButton}>
                s
            </Button>
        </div>
    )
}

export default CollapseButtons;