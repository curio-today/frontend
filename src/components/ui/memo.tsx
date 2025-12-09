"use server"

import { getTranslations } from "next-intl/server"

export async function Memo() {
    const t = await getTranslations("Messages");

    return (
        <small className="text-center text-xs uppercase max-w-25">
            {t("memo")}
        </small>
    )
}