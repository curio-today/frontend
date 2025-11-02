"use server"

import dynamic from "next/dynamic";

import { Desktop, Mobile } from "@/lib/data/nav.data";
import { getTranslations } from "next-intl/server";
import { NavBarHeading } from "@/ui/components/navigation/NavBar/nav-bar.types";
import { Namespaces } from "@/configs/translation.config";
import { isMobile } from "@/lib/utils/isMobile";

const MobileComp = dynamic(() => import("./components/mobile"));
const DesktopComp = dynamic(() => import("./components/desktop"));


export default async function NavBar() {
    const t = await getTranslations(Namespaces.headings);

    function translateNavigationHeadings(data: NavBarHeading[]) {
        return data.map(item => ({
            ...item,
            label: t(item.translationKey),
        }));
    }

    return await isMobile() ? <MobileComp headings={translateNavigationHeadings(Mobile)} /> : <DesktopComp headings={translateNavigationHeadings(Desktop)}/>;
}

