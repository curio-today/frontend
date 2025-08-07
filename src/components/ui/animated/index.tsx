"use client"

import { Button } from "@/components/ui/buttons";
import { useState } from "react";
import { AnimatedProps } from "@/shared/props/AnimatedProps";


export const AnimatedIconButton = ({name, children }: AnimatedProps) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const toggleIcon = () => {
        setIsClicked(!isClicked);
    }

    return (
        <Button onClick={toggleIcon}>
            <div id={name} className={isClicked ? "open" : ""}>
                {children}
            </div>
        </Button>
    )
}

