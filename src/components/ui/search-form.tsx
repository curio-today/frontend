"use client"

import Form from "next/form"
import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../core/input-group"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Input } from "../core/input"
import { FilterButton } from "./filter-button"
import { Button } from "../core/button"

export const SearchForm = ({ initQuery }: { initQuery?: string }) => {
    const [query, setQuery] = useState<string>(initQuery || "");
    const t = useTranslations("Navigation");

    return (
        <Form action="/search" className="flex flex-row gap-2 md:gap-4">
            <Input type="hidden" name="q" value={query}/>
            <InputGroup>
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
                <InputGroupInput
                    placeholder={t("placeholder")} 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <InputGroupAddon align='inline-end'>
                    <FilterButton />
                </InputGroupAddon>


            </InputGroup>
            <Button 
                type="submit"
                disabled={query === "" ? true : false}
            >
                <Search />
                <span className="hidden md:block">{t("searchButton")}</span>
            </Button>
        </Form>
    )
}
