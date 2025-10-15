"use client"

import useTheme from "@/hooks/useTheme";
import Button from "./Button";


export const ThemeButton = () => {
    const [, toggleTheme] = useTheme();

    return (
        <Button icon={{
            icon: "moon"
        }} onClick={toggleTheme}/>
    )
}

export default ThemeButton;