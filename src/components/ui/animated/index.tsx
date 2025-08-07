"use client"

import { Button } from "@/components/ui/buttons";
import { ReactNode, useState } from "react";


export type AnimatedProps = {
    name: string,
    children: ReactNode,
    isClicked?: boolean,
}


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

