import React from "react";
import styles from "./styles/Select.module.css";

import { SelectOption } from "./Select";

type TriggerProps = {
    selectedOption: SelectOption;
    placeholder: string;
    disabled: boolean;
    isOpen: boolean;
    onToggle: () => void;
};

const Trigger = ({
                     selectedOption,
                     placeholder,
                     disabled,
                     isOpen,
                     onToggle,
                 }: TriggerProps) => {
    return (
        <div
            className={`${styles.triggerBase} ${
                disabled
                    ? styles.triggerDisabled
                    : isOpen
                        ? styles.triggerOpen
                        : styles.triggerClosed
            }`}
            onClick={onToggle}
            aria-label="Select dropdown"
        >
      <span className={selectedOption ? styles.selectedText : styles.placeholderText}>
        {selectedOption ? selectedOption : placeholder}
      </span>
        </div>
    );
};

export default Trigger;