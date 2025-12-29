import Link from "next/link";

import { ModeToggle } from "../toggles/mode-toggle";
import { ButtonGroup } from "../../core/button-group";
import { LanguageToggle } from "../toggles/language-toggle";

import { SettingsSheet } from "../sheets/settings-sheet";
import { CategorySheet } from "../sheets/category-sheet";
import { NavigationCategoryMenu } from "./navigation-category-menu";
import { Memo } from "../memo";
import { SearchButton } from "../search-button";
import { Logo } from "../logo";
import { CurioWithChristmasHat } from "@/components/content/curio";

export const NavigationBar = () => {
  return (
    <header className="lg:pl-10 bg-background w-full fixed flex p-4 top-0 left-0 z-50 justify-start items-center outline-solid outline-1">
      <Link href="/" className="flex flex-1 justify-start flex-row gap-5">
        <Logo width={100}>
          <CurioWithChristmasHat />
        </Logo>
        <div className="hidden md:flex items-center justify-center">
          <Memo />
        </div>
      </Link>

      <div className="flex-wrap hidden md:flex">
        <NavigationCategoryMenu />
      </div>

      <ButtonGroup className="lg:flex-1 justify-end">
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

