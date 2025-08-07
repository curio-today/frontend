"use client"
import "./index.scss"
import { useState } from "react";


const BurgerIcon = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const toggleIcon = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div id="burger-icon" onClick={toggleIcon} className={isClicked ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );

}

export default BurgerIcon;