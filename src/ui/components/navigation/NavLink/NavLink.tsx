"use client"

import { useCurrentRoute } from "@/hooks/use-current-route";
import styles from "./NavLink.module.css"

import { AvailableRoutePath } from "@/lib/types/navigation";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export type NavLinkProps = 
                PropsWithChildren & 
                Omit<LinkProps, "href"> & 
                {
                    to: AvailableRoutePath;
                }                  

                
const NavLink = ({ to, children, ...rest}: NavLinkProps) => {
    const { path } = useCurrentRoute();
    const isSelected = path == to;

    return (
        <Link 
            href={to} 
            className={isSelected ? styles.selected : styles.navLink}
            onClick={(e) => isSelected && e.preventDefault()}
            {...rest}
            >
            {children}
        </Link>
    )
}


export default NavLink;