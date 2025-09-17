"use client"

import { useCurrentRoute } from "@/hooks/use-current-route";
import styles from "./NavLink.module.css"

import { AvailableRoutePath } from "@/types/navigation";
import Link from "next/link";

export type NavLinkProps = PropsWithChildren & {
    to: AvailableRoutePath;
}

const NavLink = ({ to, children}: NavLinkProps) => {
    const { isSelected } = useCurrentRoute();

    return (
        <Link 
            href={to} 
            className={isSelected ? styles.selected : styles.navLink}
            onClick={(e) => isSelected && e.preventDefault()}>
            {children}
        </Link>
    )
}


export default NavLink;