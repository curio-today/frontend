import { Search } from "lucide-react"
import { Button } from "../core/button"
import Link from "next/link"

export const SearchButton = () => {
    return (
        <Button variant="outline" asChild>
            <Link href="/search">
                <Search />
            </Link>
        </Button>
    )
}