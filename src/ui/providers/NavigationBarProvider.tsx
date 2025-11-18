"use client"

import { Navigation } from "@@/navigation.config";
import { NavigationBarContext } from "@/ui/contexts/NavigationBarContext";
import { AvailableRoutePath } from "@/lib/types/navigation";
import { PropsWithChildren } from "react";


export const NavigationBarProvider = ({ children }: PropsWithChildren) => {
    return (
        <NavigationBarContext.Provider value={{ navigationRoutes: Navigation.navigationBar.links as AvailableRoutePath[] }}>
            {children}
        </NavigationBarContext.Provider>
    )
}

export default NavigationBarProvider;