"use client"

import Form from "next/form"
import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../core/input-group"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Input } from "../core/input"

export const SearchForm = ({ initQuery }: { initQuery?: string }) => {
    const [query, setQuery] = useState<string>(initQuery || "");
    const t = useTranslations("Navigation");

    return (
        <Form action="/search">
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
                <InputGroupAddon align="inline-end">
                    <InputGroupButton 
                        variant="secondary" 
                        type="submit"
                        disabled={query === "" ? true : false}
                    >
                        <Search />
                        <span className="hidden md:block">{t("searchButton")}</span>
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </Form>
    )
}