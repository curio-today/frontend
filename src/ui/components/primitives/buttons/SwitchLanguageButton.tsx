"use client"

import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Button from "./Button";



export const SwitchLanguageButton = () => {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        if (newLocale !== locale) {
            // saveToCookie(`locale=${newLocale}; path=/; max-age=31536000`);
            router.refresh();
        }
    }


    return (
        <Button 
            label={locale}
            // onClick={e => switchLocale(e.val)}
        >

        </Button>
        // <Select 
        //     options={TranslationConfig.languages}
        //     value={locale}
        //     onChange={option => switchLocale(option.value.toString())}
        //     hasSearch={false}
        // />
    )
}

export default SwitchLanguageButton;