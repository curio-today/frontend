import { Logo } from "./logo"
import { Memo } from "./memo"

export const Footer = () => {
    return (
        <footer className="w-full h-50 bg-background flex justify-center items-center flex-col">
            <Logo width={100}/>
            <Memo />
        </footer>  
    ) 
}