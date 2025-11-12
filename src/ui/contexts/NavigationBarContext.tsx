"use client"

import { Navigation } from "@@/navigation.config";
import { AvailableRoutePath } from "@/lib/types/navigation";
import { createContext } from "react";

type NavigationBarContextType = {
    navigationRoutePaths: AvailableRoutePath[];
}

export const NavigationBarContext = createContext<NavigationBarContextType>({
    navigationRoutePaths: Navigation.navigationBar.links as AvailableRoutePath[]
});