import styles from "./Desktop.module.css";

import { NavigationBarProps } from "../NavBar";
import NavigationBarLinks from "./components/NavigationBarLinks";

const DesktopNavigationBar = ({ navigationLinks }: NavigationBarProps) => {
  return (
    <nav className={styles.navBar}>
      <NavigationBarLinks navigationLinks={navigationLinks} />
    </nav>
  );
};

export default DesktopNavigationBar;
