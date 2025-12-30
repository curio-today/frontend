import Link from "next/link";

import { ModeToggle } from "../toggles/mode-toggle";
import { ButtonGroup } from "../../core/button-group";
import { LanguageToggle } from "../toggles/language-toggle";

import { SettingsSheet } from "../sheets/settings-sheet";
import { CategorySheet } from "../sheets/category-sheet";
import { NavigationCategoryMenu } from "./navigation-category-menu";
import { SearchButton } from "../search-button";
import { LogoWithMemo } from "../logo";
import { CurioWithChristmasHat } from "@/components/content/curio";

export const NavigationBar = () => {
  return (
    <header className="lg:pl-10 bg-background w-full fixed flex p-4 top-0 left-0 z-50 items-center lg:justify-start justify-between outline-solid outline-1">
      <Link className="sm:flex-1" href="/">
        <LogoWithMemo>
          <CurioWithChristmasHat />
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
            <CategorySheet />
          </ButtonGroup>
        </ButtonGroup>
      </ButtonGroup>
    </header>
  )
}

