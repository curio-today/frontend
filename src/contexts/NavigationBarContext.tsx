"use client"

import { Navigation } from "@@/navigation.config";
import { AvailableRoutePath } from "@/lib/types/navigation";
import { createContext } from "react";

type NavigationBarContextType = {
    navigationLinks: AvailableRoutePath[];
}

export const NavigationBarContext = createContext<NavigationBarContextType>({
    navigationLinks: Navigation.navigationBar.links as AvailableRoutePath[]
});