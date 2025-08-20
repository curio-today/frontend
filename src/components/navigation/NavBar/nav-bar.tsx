"use server"

import dynamic from "next/dynamic";

import { Desktop, Mobile } from "@/configs/nav.config";
import { Server_isMobile } from "@/lib/Platform";
import { getTranslations } from "next-intl/server";
import { NavBarHeading } from "@/components/navigation/NavBar/nav-bar.types";

const MobileComp = dynamic(() => import("./components/mobile"));
const DesktopComp = dynamic(() => import("./components/desktop/"));


export default async function NavBar() {
    const t = await getTranslations("Headings");

    function translateNavigationHeadings(data: NavBarHeading[]) {
        return data.map(item => ({
            ...item,
            label: t(item.translationKey),
        }));
    }

    return await Server_isMobile() ? <MobileComp headings={translateNavigationHeadings(Mobile)} /> : <DesktopComp headings={translateNavigationHeadings(Desktop)}/>;
}

