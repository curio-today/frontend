"use client"

import styles from "./NavBarDesktop.module.scss"

import { NavBarProps } from "../types/NavBarProps";
import dynamic from "next/dynamic";
import Links from "@/components/navigation/NavBar/desktop/parts/Links";

const CurioLogo = dynamic(() => import("@/components/branding/CurioLogo"), { ssr: false });
const Buttons = dynamic(() => import("./parts/Buttons"));

const NavBarDesktop = ({ data }: NavBarProps) => {
    return (
        <header className={styles.navBar}>
            <CurioLogo />
            <Links data={data}/>
            <Buttons />
        </header>
    )
}

export default NavBarDesktop;