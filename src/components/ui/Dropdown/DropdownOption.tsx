import { PropsWithChildren } from "react";

export const DropdownOption = ({ children }: PropsWithChildren) => {
    return (
        <span className="flex items-center justify-between p-3 cursor-pointer select-none text-sm transition-colors duration-150 ease-in-out"> 
            {children}
        </span>
    )
}


export default DropdownOption;