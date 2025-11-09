import { ComponentProps } from "react"

export type InputProps = ComponentProps<"input">;

export const Input = ({ children, ...rest }: InputProps) => {
    return (
        <input {...rest}>
            {children}
        </input>
    )
}