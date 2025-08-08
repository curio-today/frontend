"use client"

import styles from "./NavBar.module.scss"

import CurioLogo from "@/components/branding/CurioLogo";
import Links from "./parts/Links";
import Buttons from "./parts/Buttons";


const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <CurioLogo />
            <Links />
            <Buttons />
        </nav>
    );
};

export default NavBar;