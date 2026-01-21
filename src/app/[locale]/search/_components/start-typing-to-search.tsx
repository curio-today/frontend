import { 
    Empty, 
    EmptyDescription, 
    EmptyHeader,
    EmptyMedia,
    EmptyTitle
} from "@/components/ui/empty"
import { Search } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const StartTypingToSearch = async () => {
    const t = await getTranslations("Empties.startTypingToSearch");

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Search />
                </EmptyMedia>
                <EmptyTitle>
                    {t("title")}
                </EmptyTitle>
                <EmptyDescription>
                    {t("description")}
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}