"use client"

import styles from "./Checkbox.module.css"
import { CheckboxProps } from "./types/CheckboxProps";

import { useState } from "react";
import clsx from "clsx";

const Checkbox = ({ checked = false, onChange, label }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        onChange?.(newChecked);
    };

    return (
        <label className={clsx(styles.checkbox, isChecked && styles.checked)}>
            <input
                type="checkbox"
                className={styles.input}
                checked={isChecked}
                onChange={handleChange}
            />
            <span className={styles.circle} />
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default Checkbox;