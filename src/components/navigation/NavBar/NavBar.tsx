"use client"

import styles from "./NavBar.module.scss"

import CurioLogo from "@/components/branding/CurioLogo";
import Links from "./parts/Links";
import Buttons from "./parts/Buttons";


const NavBar = () => {
    return (
        <header className={styles.siteHeader}>
            <CurioLogo />
            <nav aria-label="Main navigation">
                <Links />
            </nav>
            <Buttons />
        </header>
    );
};

export default NavBar;