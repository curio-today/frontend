"use client"

import styles from "./NavLink.module.css"

import { AvailableRoutePath } from "@/lib/types/navigation";
import { useCurrentRoute } from "@/ui/hooks";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { Header } from "../../primitives/typography";

export type NavLinkProps = 
                PropsWithChildren & 
                Omit<LinkProps, "href"> & 
                {
                    to: AvailableRoutePath;
                    label?: string;
                }

                
const NavLink = ({ to, label, children, ...rest}: NavLinkProps) => {
    const { path } = useCurrentRoute();
    const isSelected = path == to;

    return (
        <Link 
            href={to} 
            onClick={(e) => isSelected && e.preventDefault()}
            {...rest}
            >
            {label && (
                <div className={isSelected ? styles.selected : styles.navLink}>
                    <Header variant="h3">{label}</Header>
                </div>
            )}
            {children}
        </Link>
    )
}


export default NavLink;