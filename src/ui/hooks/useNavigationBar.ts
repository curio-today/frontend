"use client"

import { useContext } from "react"
import { NavigationBarContext } from "../contexts/NavigationBarContext";

export const useNavigationBar = () => {
    const context = useContext(NavigationBarContext);
    
    if (!context) {
        throw new Error("useNavigationBar must be used within a NavigationBarProvider");
    }

    return context;
}

export default useNavigationBar