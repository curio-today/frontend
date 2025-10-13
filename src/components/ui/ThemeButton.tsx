"use client"

import { useTheme } from "@/hooks/useTheme";
import Button from "./Button";


export const ThemeButton = () => {
    const [currentTheme, toggleTheme] = useTheme();

    return (
        <Button icon={{ type: "moon" }} onClick={toggleTheme}/>
    )

}