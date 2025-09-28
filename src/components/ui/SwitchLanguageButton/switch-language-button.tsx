"use client"

import { useRouter } from "next/navigation";
import Select, { Option } from "../Select";
import { TranslatedLabels } from "@/data/nav.data";
import { useLocale } from "next-intl";

export const SwitchLanguageButton = () => {
    const router = useRouter();
    const locale = useLocale();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
            router.refresh();
        }
    };

    return (
        <Select 
            options={TranslatedLabels}
            value={locale}
            onChange={(option) => (
                switchLocale(option.value.toString())
            )}
            hasSearch={false}
        />
    )
}


export default SwitchLanguageButton;