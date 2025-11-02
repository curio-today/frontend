import styles from "./buttons.module.css";

import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";

export default function Buttons () {
    return (
        <div className={styles.buttons}>
            <SwitchLanguageButton />
        </div>
    );
}

