"use client"
import styles from "./MobileNavBar.module.scss"
import useResponsiveLayout from "@/hooks/useResponsiveLayout";

import MobileNavButton from "./parts/MobileNavButton";
import List from "@/components/layout/List";


const MobileNavBar = () => {
    const isMobile = useResponsiveLayout();

    if (!isMobile) {
        return <></>;
    }

    return (
        <nav className={styles.mobileNavBar} aria-label="Page navigation">
            <List className={styles.buttons} orientation="horizontal">
                <MobileNavButton text="Informs" src="/icons/filter.svg" alt="test" />
                <MobileNavButton text="Amuzes" src="/icons/filter.svg" alt="test" />
            </List>
        </nav>
    )
}

export default MobileNavBar;