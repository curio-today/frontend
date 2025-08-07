"use client"
import "./index.scss"

import { useState } from "react";
import BurgerIcon from "@/components/ui/animated/BurgerIcon";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="burger-menu">
            <BurgerIcon />
        </div>
    )
}