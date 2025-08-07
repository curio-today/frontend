"use client"

import "./index.scss"

import { Menu } from "@/components/navigation/Menu";
import { CurioLogo } from "@/components/branding/CurioLogo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BurgerMenu } from "@/components/navigation/BurgerMenu";

export const NavBar = () => {
    return (
        <nav id="topbar">
            <CurioLogo />
            <Menu orientation="horizontal" className="links">
                <Menu.Item text="Amazes" href={"/category/amazes"}/>
                <Menu.Item text="Informs" href={"/category/informs"}/>
                <Menu.Item text="Amuses" href={"/category/amuses"}/>
                <Menu.Item text="Inspires" href={"/category/inspires"}/>
            </Menu>

            <BurgerMenu />
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
        </nav>
    );
};

