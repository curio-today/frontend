import { NavigationBarBase } from "./navigation-bar-base";
import { NavigationBarMobile } from "./platforms/navigation-bar-mobile";
import { Activity } from "react";
import { isMobile } from "@/actions/is-mobile";

export async function NavigationBar() {
    const mobile = await isMobile();

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