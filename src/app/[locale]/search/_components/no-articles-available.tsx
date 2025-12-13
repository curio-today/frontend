import { Button } from "@/components/core/button";
import { 
    Empty, 
    EmptyContent, 
    EmptyDescription, 
    EmptyHeader,
    EmptyMedia, 
    EmptyTitle 
} from "@/components/core/empty";
import { CircleX } from "lucide-react";
import { getTranslations } from "next-intl/server"
import Link from "next/link";

export const NoArticlesAvailable = async () => {
    const t = await getTranslations("Empties.noArticlesAvailable");

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <CircleX />
                </EmptyMedia>
                <EmptyTitle>{t("title")}</EmptyTitle>
                <EmptyDescription>
                    {t("description")}
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}