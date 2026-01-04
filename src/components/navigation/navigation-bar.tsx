'use client'

import { NavigationBarBase } from "./navigation-bar-base";
import { NavigationBarMobile } from "./platforms/navigation-bar-mobile";
import {Activity} from "react";
import {useIsMobile} from "@/hooks/use-mobile";

export function NavigationBar() {
    const mobile = useIsMobile();

    return (
        <>
            <NavigationBarBase />
            <Activity mode={mobile ? "visible" : "hidden"}>
                <NavigationBarMobile />
            </Activity>
        </>
    )
}

NavigationBar.Mobile = NavigationBarMobile;