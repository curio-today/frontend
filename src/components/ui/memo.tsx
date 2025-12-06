"use server"

import { getTranslations } from "next-intl/server"

export async function Memo() {
    const t = await getTranslations("Messages");

    return (
        <small className="uppercase max-w-25 justify-center text-center">{t("memo")}</small>
    )
}