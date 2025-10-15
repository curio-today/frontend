"use client"

import { saveToCookie } from "@/utils/storage/cookie";
import { Locale, useLocale } from "next-intl";
import Select from "../Select";
import { TranslationConfig } from "@@/translation.config";
import { useRouter } from "next/navigation";



export const SwitchLanguageButton = () => {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        if (newLocale !== locale) {
            saveToCookie(`locale=${newLocale}; path=/; max-age=31536000`);
            router.refresh();
        }
    }


    return (
        <Select 
            options={TranslationConfig.languages}
            value={locale}
            onChange={option => switchLocale(option.value.toString())}
            hasSearch={false}
        />
    )
}

export default SwitchLanguageButton;