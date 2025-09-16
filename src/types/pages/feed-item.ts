import { IconVariant } from "@/components/ui/Icon";
import { TranslationKey } from "../translation-key";

export type FeedItem = {
    key: TranslationKey;
    href: string;
    icon?: IconVariant;
}
