"use client"

import styles from "./CheckboxOption.module.css"
import clsx from "clsx";

export type CheckboxOptionProps = {
    id: number;
    checked?: boolean;
    label: string;
    onChangeAction?: (checked: boolean) => void;
};


export const CheckboxOption = ({ label,
                          checked = false,
                           onChangeAction }: CheckboxOptionProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeAction?.(e.target.checked);
    };

    return (
        <label className={clsx(styles.checkboxOption, checked && styles.checked)}>
            <input
                type="checkbox"
                className={styles.input}
                checked={checked}
                onChange={handleChange}
            />
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}
