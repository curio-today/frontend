"use client"

import styles from "./NavLink.module.scss"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export type NavLinkProps = PropsWithChildren & {
    href: string,
}


const NavLink = ({ href, children}: NavLinkProps) => {
    const pathname = usePathname();
    const isSelected = pathname.endsWith(href);

    return (
        <Link 
            href={href} 
            className={isSelected ? styles.selected : styles.navLink}
        >
            {children}
        </Link>
    )
}


export default NavLink;