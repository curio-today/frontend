import styles from "./NavigationBarActionButtons.module.css";
import SwitchLanguageButton from "@/ui/components/base/Buttons/SwitchLanguageButton";

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
