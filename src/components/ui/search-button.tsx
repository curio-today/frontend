"use client"

import { Search } from "lucide-react"
import { Button } from "../core/button"
import Link from "next/link"
import {useTranslations} from "next-intl";

export const SearchButton = () => {
    const t = useTranslations("Navigation");

    return (
        <Button variant="outline" asChild>
            <Link href="/search">
                <Search />
                <span className="hidden md:block">
                    {t("searchButton")}
                </span>
            </Link>
        </Button>
    )
}