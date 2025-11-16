"use client"

import useTheme from "@/ui/hooks/useTheme";
import Button from "./Button";
import { useState } from "react";
import { IconVariant } from "@/lib/types/content/icon";
import Icon from "../Icon";
import styles from "./button.module.css"

export const ThemeButton = () => {
    const [currentTheme, toggleTheme] = useTheme();
    const [icon, setIcon] = useState<IconVariant>(currentTheme === "dark" ? "moon" : "sun");

    const handleOnClick = () => {
        toggleTheme();
        setIcon(prev => prev === "moon" ? "sun" : "moon");
    }

    return <Button icon={icon} onClick={handleOnClick}/>
}

export default ThemeButton;