"use client"

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { TranslationConfig } from "@@/translation.config";

import Select from "@core/selects/Select";

export const LanguageSelect = () => {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
            router.refresh();
        }
    }
    return (
        <Select
            items={TranslationConfig.languages}
            selectedItem={locale}
            onChange={option => switchLocale(option)}
            hasSearch={false}
        />
    )
}

export default LanguageSelect;