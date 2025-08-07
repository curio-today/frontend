"use client"
import "./index.scss"

import useResponsiveLayout from "@/hooks/useResponsiveLayout"
import { Menu } from "@/components/ui/Menu";
import { CurioLogo } from "@/components/ui/CurioLogo";
import { Button } from "@/components/ui/buttons";
import Link from "next/link";
import { BurgerMenu } from "@/components/ui/BurgerMenu";


export const NavBar = () => {
    const isMobile: boolean = useResponsiveLayout(1350);

    return (
        <nav className="bar">
            <CurioLogo />
            <Menu orientation="horizontal" className="links">
                <Menu.Item text="Amazes" href={"/category/amazes"}/>
                <Menu.Item text="Informs" href={"/category/informs"}/>
                <Menu.Item text="Amuses" href={"/category/amuses"}/>
                <Menu.Item text="Inspires" href={"/category/inspires"}/>
            </Menu>
            { isMobile ? (
                <BurgerMenu />
            ) : (
                <Menu orientation="horizontal" className="buttons">
                        <Link href="/support" passHref>
                            <Button text="Support" className="reversed" />
                        </Link>
                        <Button
                            icon={{
                                src: "/icons/globe.svg",
                                alt: "globe",
                            }}
                            text="EN"
                        />
                        <Button
                            icon={{
                                src: "/icons/moon.svg",
                                alt: "Moon",
                            }}
                        />
                        <Link href="/search" passHref>
                            <Button
                                icon={{
                                    src: "/icons/magnifying glass.svg",
                                    alt: "Magnifying glass",
                                }}
                                text="Search"
                            />
                        </Link>
                    </Menu>
            )}
        </nav>
    );
};

