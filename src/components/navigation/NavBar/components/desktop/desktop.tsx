"use client"

import styles from "./desktop.module.css"
import dynamic from "next/dynamic";
import Links from "./components/links";
import { NavBarProps } from "@/components/navigation/NavBar";

const CurioLogo = dynamic(() => import("@/components/branding/CurioLogo"), { ssr: false });
const Buttons = dynamic(() => import("./components/buttons"));

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