import styles from "./styles/Trigger.module.css";

import React from "react";
import { Option } from "./Select";

type TriggerProps = {
    selectedOption: Option | null;
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
        {selectedOption ? selectedOption.label : placeholder}
      </span>
        </div>
    );
};

export default Trigger;
