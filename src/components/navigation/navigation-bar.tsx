'use client'

import { NavigationBarBase } from "./navigation-bar-base";
import { NavigationBarMobile } from "./platforms/navigation-bar-mobile";
import { Activity, ViewTransition } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function NavigationBar() {
    const mobile = useIsMobile();

    return (
        <ViewTransition name="navigation-bar">
            <NavigationBarBase />
            <Activity mode={mobile ? "visible" : "hidden"}>
                <NavigationBarMobile />
            </Activity>
        </ViewTransition>
    )
}

NavigationBar.Mobile = NavigationBarMobile;