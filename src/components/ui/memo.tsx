"use client"

import { useTranslations } from "next-intl";

export function Memo() {
    const t = useTranslations("Messages");

    return (
        <small className="text-center text-xs uppercase max-w-25">
            {t("memo")}
        </small>
    )
}