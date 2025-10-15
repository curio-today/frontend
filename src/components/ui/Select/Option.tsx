import React from "react";
import styles from "../Select.module.css";
import { Option as OptionType } from "./Select";

type OptionProps = {
    option: OptionType;
    isSelected: boolean;
    isFocused: boolean;
    onSelect: (option: OptionType) => void;
    onHover: () => void;
};

const Option = ({ option, isSelected, isFocused, onSelect, onHover }: OptionProps) => {
    return (
        <div
            id={`custom-select-option-${option.value}`}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(option)}
            onMouseEnter={onHover}
            className={`${styles.optionBase} ${
                isSelected ? styles.optionSelected : styles.optionUnselected
            } ${isFocused && !isSelected ? styles.optionHover : ""}`}
            tabIndex={-1}
        >
            <span>{option.label}</span>
            {isSelected && <div className={styles.checkIcon} />}
        </div>
    );
};

export default Option;
