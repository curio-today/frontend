"use client"

import styles from "./Checkbox.module.css"

import { CheckboxProps } from "./types/CheckboxProps";
import { CheckboxOption, CheckboxOptionProps } from "./parts/CheckboxOption";

import List from "@/components/layout/List";
import { useState } from "react";
import clsx from "clsx";

const Checkbox = ({ options,
                      orientation = "vertical",
                      gap = "small",
                      ...rest}: CheckboxProps) => {
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
                rest.className,
            )}
            orientation={orientation}
            gap={gap}
            {...rest}
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