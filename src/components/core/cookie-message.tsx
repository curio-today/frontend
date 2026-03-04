"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Item, ItemActions, ItemDescription, ItemTitle } from "../ui/item";
import { useTranslations } from "next-intl";


export const CookieMessage = () => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);
    const t = useTranslations("Messages");

    if (isCookieAccepted) {
        return null;
    }

    
    return (
        <Item variant="outline" className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-background z-50">
            <ItemTitle>
                {t("cookieMessage")}
            </ItemTitle>
            <ItemDescription>
                {t("cookieMessageDescription")}
            </ItemDescription>
            <ItemActions>
                <Button onClick={() => setIsCookieAccepted(true)}>{t("accept")}</Button>
            </ItemActions>
        </Item>
    )
}

