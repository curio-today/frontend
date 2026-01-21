"use client"

import Link from "next/link";
import { LogoWithMemo } from "@/components/core/logo";
import { Curio } from "@/components/content/curio";
import { NavigationCategoryMenu } from "@/components/navigation/navigation-category-menu";
import { ButtonGroup } from "@/components/ui/button-group";
import { SearchButton } from "@/components/core/search-button";
import { LanguageToggle } from "@/components/core/toggles/language-toggle";
import { ModeToggle } from "@/components/core/toggles/mode-toggle";
import { SettingsSheet } from "@/components/core/sheets/settings-sheet";

export const NavigationBarBase = () => {
    return (
        <header className="lg:pl-10 bg-background w-full fixed flex p-4 top-0 left-0 z-50 items-center lg:justify-start justify-between outline-solid outline-1">
            <Link className="sm:flex-1" href="/">
                <LogoWithMemo>
                    <Curio />
                </LogoWithMemo>
            </Link>

            <div className="flex-1 justify-center items-center flex-wrap hidden md:flex">
                <NavigationCategoryMenu />
            </div>

            <ButtonGroup className="flex-1 justify-end">
                <ButtonGroup>
                    <ButtonGroup>
                        <SearchButton />
                    </ButtonGroup>
                    <ButtonGroup className="hidden md:flex">
                        <LanguageToggle />
                        <ModeToggle />
                    </ButtonGroup>
                    <ButtonGroup className="block md:hidden">
                        <SettingsSheet />
                    </ButtonGroup>
                </ButtonGroup>
            </ButtonGroup>
        </header>
    )
}