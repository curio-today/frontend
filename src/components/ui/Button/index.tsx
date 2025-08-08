import "./index.scss"
import { Icon } from "@/components/ui/Icon";
import { ButtonProps } from "@/shared/props/ButtonProps";

// TODO: add tooltip wrapper

export const Button = ({icon, text, children, mode = "normal", ...props}: ButtonProps) => {
    return (
        <button className={mode} {...props}>
            {icon && (
                <Icon {...icon}></Icon>
            )}
            {text && (
                <p>{text}</p>
            )}
            {children}
        </button>
    )
}