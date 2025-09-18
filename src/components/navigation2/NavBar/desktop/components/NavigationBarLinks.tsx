import styles from "./NavigationBarLinks.module.css";

import NavLink from "@/components/navigation/NavLink";
import { NavigationBarProps } from "../../NavBar";

type Props = {
  navigationLinks: NavigationBarProps["navigationLinks"];
};

const NavigationBarLinks = ({ navigationLinks }: Props) => {
  return (
    <ul className={styles.links}>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <NavLink to={link}>
            <h2 className={styles.link}>{link}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationBarLinks;
