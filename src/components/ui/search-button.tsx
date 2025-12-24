import { Search } from "lucide-react"
import { Button } from "../core/button"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export const SearchButton = async () => {
    const t = await getTranslations("Navigation");

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