import styles from "./NavigationBarActionButtons.module.css";
import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";

const NavigationBarActionButtons = () => {
  return (
    <ul className={styles.buttons}>
      <li>
        <SwitchLanguageButton />
      </li>
    </ul>
  );
};

export default NavigationBarActionButtons;
