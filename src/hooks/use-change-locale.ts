import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const useChangeLocale = () => {
    const locale = useLocale();
    const router = useRouter();
    const changeLocale = (newLocale: Locale) => {
        if (newLocale !== locale) {
            router.replace(`/${newLocale}`, { scroll: false, })
            router.refresh();
        }
    };

    return changeLocale;
};
