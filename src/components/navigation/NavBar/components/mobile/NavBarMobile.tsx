import styles from "./NavBarMobile.module.css";

import List from "@/components/layout/List";
import { NavBarProps } from "../../nav-bar.types";

import NavLink from "@/components/navigation/NavLink";
import Button from "@/components/ui/Button";

const NavBarMobile = ({ headings }: NavBarProps) => {
    return (
        <nav className={styles.mobileNavBar} aria-label="Page navigation">
            <List orientation="horizontal" gap="small">
                {headings.map((item, index) => (
                    <NavLink
                        key={index}
                        href={item.href} >
                        <Button
                            mode="noBorder"
                            icon={{ type: item.icon }}
                            title={item.label}
                        />
                    </NavLink>
                ))}

            </List>
        </nav>
    )
}

export default NavBarMobile;