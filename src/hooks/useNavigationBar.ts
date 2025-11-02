"use client"

import { NavigationBarContext } from "@/lib/contexts/NavigationBarContext"
import { useContext } from "react"

export const useNavigationBar = () => {
    const context = useContext(NavigationBarContext);

    if (!context) {
        throw new Error("useNavigationBar must be used within a NavigationBarProvider");
    }

    return context;
}

export default useNavigationBar