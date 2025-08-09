"use client"

import styles from "./NavLink.module.scss"

import Button, { ButtonProps } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = ButtonProps & {
    href: string,
}


const NavLink = ({href, title, ...rest}: NavLinkProps) => {
    const pathname = usePathname();

    function checkPathname(): string {
        if (pathname == href) {
            return styles.selected
        }
        return styles.navLink
    }

    return (
        <Link href={href} passHref className={checkPathname()}>
            <Button
                title={title}
                mode="noBorder"
                style={{ flexDirection: 'column' }}
                {...rest}
            />
        </Link>
    )
}

export default NavLink;