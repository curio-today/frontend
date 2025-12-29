import { CurioWithChristmasHat } from "../content/curio"
import { Separator } from "../core/separator"
import { ChristmasWreath } from "../feature/new-year"
import { Logo } from "./logo"
import { Memo } from "./memo"

export const Footer = () => {
    return (
        <footer className="w-full h-50 bg-background flex justify-center items-center flex-col">
            <Logo width={100}>
                <CurioWithChristmasHat />
            </Logo>
            <Memo />
            <div className="flex flex-row justify-center items-center gap-4">
                <p className="text-muted-foreground">All Rights Are Reserved©</p>
                <Separator orientation="vertical"/>
                <ChristmasWreath width={32} height={32}/>
            </div>
        </footer>  
    ) 
}