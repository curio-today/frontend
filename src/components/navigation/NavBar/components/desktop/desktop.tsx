"use client"

import styles from "./desktop.module.css"

import dynamic from "next/dynamic";


import { NavBarProps } from "../../nav-bar.types";
import Links from "./components/Links";

const CurioLogo = dynamic(() => import("@/components/branding/CurioLogo"), { ssr: false });
const Buttons = dynamic(() => import("@/components/navigation/NavBar/components/desktop/components/Buttons"));

const Desktop = ({ headings }: NavBarProps) => {

    return (
        <header className={styles.navBar}>
            <CurioLogo />
            <Links headings={headings}/>
            <Buttons />
        </header>
    )
}

export default Desktop;