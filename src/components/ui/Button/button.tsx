"use client"

import dynamic from "next/dynamic";
import { ButtonProps, buttonVariants } from "./button.types";

import { motion } from "framer-motion";

const Icon = dynamic(() => import("@/components/ui/Icon"));

const Button = ({ icon, title, children, mode, className, ...rest }: ButtonProps) => {
    return (
        <motion.button initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                       whileHover={{ scale: 1.1 }}
                       className={buttonVariants({ mode, className })} {...rest}>
            {icon && <Icon size="medium" icon={icon.type} {...icon.props}/>}
            {title && <p>{title}</p>}
            {children}
        </motion.button>
    )
}

export default Button;