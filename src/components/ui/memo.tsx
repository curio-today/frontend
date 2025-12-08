"use server"

import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server"
import { ComponentPropsWithoutRef } from "react";

export async function Memo({ className, ...rest }: ComponentPropsWithoutRef<"small">) {
    const t = await getTranslations("Messages");

    return (
        <small className={cn("flex items-center justify-center text-center uppercase max-w-25", className)} {...rest}>
            {t("memo")}
        </small>
    )
}