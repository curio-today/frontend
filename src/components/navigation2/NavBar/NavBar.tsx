"use server"

import { isMobile } from "@/utils/isMobile";
import dynamic from "next/dynamic"

export type NavigationBarProps = {

}

const MobileNavigationBar = dynamic(() => import("./mobile/"));
const DesktopNavigationBar = dynamic(() => import("./desktop/"));

export default async function NavigationBar() {
    if (await isMobile()) {
        return <MobileNavigationBar />
    }   

    return <DesktopNavigationBar />
}

