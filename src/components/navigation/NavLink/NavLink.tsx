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

    function checkPathname(): string {
        if (pathname == href) {
            return styles.selected
        }
        return styles.navLink
    }

    return (
        <Link href={href} passHref className={checkPathname()}>
            {children}
        </Link>
    )
}


export default NavLink;