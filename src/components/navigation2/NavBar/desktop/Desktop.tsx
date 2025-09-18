import styles from "./Desktop.module.css";

import { NavigationBarProps } from "../NavBar";
import { NavigationBarActionButtons, NavigationBarLinks } from "./components";


const DesktopNavigationBar = ({ navigationLinks }: NavigationBarProps) => {
  return (
    <nav className={styles.navBar}>
      <NavigationBarLinks navigationLinks={navigationLinks} />
      <NavigationBarActionButtons />
    </nav>
  );
};

export default DesktopNavigationBar;
