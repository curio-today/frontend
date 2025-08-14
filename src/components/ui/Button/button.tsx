"use client"

import dynamic from "next/dynamic";

import { ButtonProps, buttonVariants } from "./button.types";

const Icon = dynamic(() => import("@/components/ui/Icon"));

const Button = ({ icon, title, children, mode, className, ...rest }: ButtonProps) => {
    return (
        <button className={buttonVariants({ mode, className })} {...rest}>
            {icon && <Icon size="medium" icon={icon.type} {...icon.props}/>}
            {title && <p>{title}</p>}
            {children}
        </button>
    )
}

export default Button;