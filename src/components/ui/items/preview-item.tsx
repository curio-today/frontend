import { getTranslations } from "next-intl/server"
import { Item, ItemHeader } from "../../core/item"

export const PreviewItem = async () => {
    const t = await getTranslations("Messages");

    return (
        <Item className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-2 text-center z-50">
          <ItemHeader>{t("previewMode")}</ItemHeader>
        </Item>
    )
}