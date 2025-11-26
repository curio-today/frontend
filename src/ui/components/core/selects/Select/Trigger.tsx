import React from "react";
import styles from "./styles/Trigger.module.css";

import { Container } from "@primitives";
import { useSelect } from "./SelectContext";
import { PropsWithDisabled } from "@/lib/types/ui/PropsWithDisabled";
import Text from "@/ui/components/primitives/typography/Text";

type TriggerProps = PropsWithDisabled<{
    placeholder: string;
    open: boolean;
    onToggle: () => void;
}>;

const Trigger = ({
    placeholder,
    disabled,
    open,
    onToggle,
}: TriggerProps) => {
    const { selectedItem } = useSelect();

    return (
        <Container
            // Refactor
            className={`${styles.triggerBase} ${
                disabled
                    ? styles.triggerDisabled
                    : open
                        ? styles.triggerOpen
                        : styles.triggerClosed
            }`}
            // --
            onClick={onToggle}
            aria-label="Select dropdown"
        >
            <Container className={selectedItem ? styles.selectedText : styles.placeholderText}>
                <Text variant="p">
                    {selectedItem ? selectedItem : placeholder}
                </Text>
            </Container>
        </Container>
    );
};

export default Trigger;