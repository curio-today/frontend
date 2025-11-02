"use client"

// Types
import { CheckboxProps } from "./checkbox.types";

// Styles
import styles from "./checkbox.module.css";

// Components
import List from "@/ui/components/layout/List";
import CheckboxOption, { CheckboxOptionProps } from "./checkbox-option";

// External libraries
import { useState } from "react";
import clsx from "clsx";


const Checkbox = ({ options, className, listProps }: CheckboxProps) => {
    const [checkedOption, setCheckedOption] = useState<CheckboxOptionProps>();


    const handleCheckboxChange = (checked: boolean, option: CheckboxOptionProps) => {
        if (checked) {
            setCheckedOption(option);
        } else {
            setCheckedOption(undefined);
        }
    };
    return (
        <List
            className={clsx(
                styles.checkboxList,
                className,
            )}
            {...listProps}
        >
            {options.map((option: CheckboxOptionProps) => (
                <CheckboxOption key={option.id}
                                id={option.id}
                                label={option.label}
                                checked={checkedOption?.id == option.id}
                                onChangeAction={(checked) => handleCheckboxChange(checked, option)}
                />
            ))}
        </List>
    )
};

export default Checkbox;