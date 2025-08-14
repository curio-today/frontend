import styles from "./NavBarMobile.module.scss";

import List from "@/components/layout/List";
import { NavBarProps } from "../types/NavBarProps";

import NavLink from "@/components/navigation/NavLink";
import Button from "@/components/ui/Button";

const NavBarMobile = ({ data }: NavBarProps) => {
    return (
        <nav className={styles.mobileNavBar} aria-label="Page navigation">
            <List orientation="horizontal" gap="small">
                {data.map((item, index) => (
                    <NavLink
                        key={index}
                        href={item.href} >
                        <Button
                            mode="noBorder"
                            icon={item.icon}
                            title={item.title}
                            variant="small"
                        />
                    </NavLink>

                ))}
            </List>
        </nav>
    )
}

export default NavBarMobile;