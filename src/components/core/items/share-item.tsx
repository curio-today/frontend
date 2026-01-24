"use client"

import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { ShareButton } from "@/components/core/share-button"
import { useTranslations } from "next-intl"

export const ShareItem = () => {
    const t = useTranslations("Buttons.Share");

    return (
        <Item className="flex flex-1 md:flex-col md:justify-start md:items-start justify-center items-center" variant="outline">
            <div className="flex justify-start items-start flex-col">
                <ItemTitle>
                    {t("question")}
                </ItemTitle>
                <ItemDescription>
                    {t("shareWithYourFriend")}
                </ItemDescription>
            </div>
            <ItemContent className="w-full">
                <ShareButton />
            </ItemContent>
        </Item>
    )
}