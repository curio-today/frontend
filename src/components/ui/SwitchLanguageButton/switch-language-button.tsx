"use client"

import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import Select, { Option } from "../Select";
import { TranslatedLabels } from "@/data/nav.data";

export const SwitchLanguageButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'en';

    const switchLocale = (newLocale: string) => {
        if (newLocale !== currentLocale) {
        router.replace(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
        router.refresh();
        }
    };

    return (
        <Select options={TranslatedLabels} value={currentLocale} onChange={function (option: Option): void {
            switchLocale(option.value as string);
        }} hasSearch={false}></Select>
    )
}


export default SwitchLanguageButton;