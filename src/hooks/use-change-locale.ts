import { usePathname } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const useChangeLocale = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const changeLocale = (newLocale: Locale) => {
        if (newLocale !== locale) {
            router.replace(`/${newLocale}${pathname}`, { scroll: false, })
            router.refresh();
        }
    };

    return changeLocale;
};
