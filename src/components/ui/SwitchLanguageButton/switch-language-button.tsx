"use client"

import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import Select, { Option } from "../Select";

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
        <Select options={[{ label: 'English', value: 'en' }, 
            { label: 'Russian', value: 'ru' },
            { label: 'Latvian', value: 'lv'}
        ]} value={currentLocale} onChange={function (option: Option): void {
            switchLocale(option.value as string);
        } } hasSearch={false}></Select>
    )
}


export default SwitchLanguageButton;