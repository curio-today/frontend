import React from "react";
import styles from "./styles/Select.module.css";

type OptionProps = {
    option: string;
    isSelected: boolean;
    isFocused: boolean;
    onSelect: (option: string) => void;
    onHover: () => void;
};

const Option = ({ option, isSelected, isFocused, onSelect, onHover }: OptionProps) => {
    return (
        <div
            id={`custom-select-option-${option}`}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(option)}
            onMouseEnter={onHover}
            className={`${styles.optionBase} ${
                isSelected ? styles.optionSelected : styles.optionUnselected
            } ${isFocused && !isSelected ? styles.optionHover : ""}`}
            tabIndex={-1}
        >
            <span>{option}</span>
            {isSelected && <div className={styles.checkIcon} />}
        </div>
    );
};

export default Option;
