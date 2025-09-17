import styles from "./Desktop.module.css"

import { NavigationBarProps } from "../NavBar";
import NavLink from "@/components/navigation/NavLink";


const DesktopNavigationBar = (props: NavigationBarProps) => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <NavLink to="amazes">
                        <p>Amazes</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="amuses">
                        <p>Amuses</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="ex">
                        <p>Informs</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="informs">
                        <p>Inspires</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNavigationBar;