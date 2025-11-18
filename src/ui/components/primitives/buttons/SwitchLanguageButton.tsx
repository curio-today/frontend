"use client"

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { TranslationConfig } from "@@/translation.config";

import Select from "@core/Select";


export const SwitchLanguageButton = () => {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
            router.refresh();
        }
    }
    const codes: string[] = Object.keys(TranslationConfig.languages);
    
    return (
        <Select 
            options={codes}
            value={locale}
            onChange={option => switchLocale(option)}
            hasSearch={false}
        />
    )
}

export default SwitchLanguageButton;