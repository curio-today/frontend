"use client"

import { PropsWithChildren, useState } from "react"
import { Button, ButtonProps } from "../buttons"

export type DropdownProps = {
    label: string
    buttonProps?: ButtonProps
}

export const Dropdown = ({ children, label, buttonProps }: PropsWithChildren<DropdownProps>) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    
    const handleOnClick = () => {
        setIsClicked(prev => !prev);
    }

    return (
        <div className=" dropdown">
            <Button label={label} onClick={handleOnClick} {...buttonProps} />
            <span className="block absolute">
                {isClicked && children}
            </span>
        </div>
    )
}


export default Dropdown;