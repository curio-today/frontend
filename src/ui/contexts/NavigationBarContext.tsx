"use client"

import { Navigation } from "@@/navigation.config";
import { AvailableRoutePath } from "@/lib/types/navigation";
import { createContext } from "react";

type NavigationBarContextType = {
    navigationRoutes: AvailableRoutePath[];
}

export const NavigationBarContext = createContext<NavigationBarContextType>({
    navigationRoutes: Navigation.navigationBar.links as AvailableRoutePath[]
});