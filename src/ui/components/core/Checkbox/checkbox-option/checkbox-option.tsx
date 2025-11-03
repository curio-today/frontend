"use client"

import styles from "./checkbox-option.module.css"
import { CheckboxOptionProps } from "./checkbox-option.types";

import { ChangeEvent } from "react";
import clsx from "clsx";


const CheckboxOption = ({ label, checked = false, onChangeAction }: CheckboxOptionProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeAction?.(e.target.checked);
    };

    return (
        <label className={clsx(styles.checkboxOption, checked && styles.checked)}>
            <input
                type="checkbox"
                className={styles.input}
                checked={checked}
                onChange={handleChange}
                aria-checked={checked}
            />
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}

export default CheckboxOption;