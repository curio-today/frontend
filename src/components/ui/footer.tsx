import { CurioWithChristmasHat } from "../content/curio"
import { Separator } from "../core/separator"
import { ChristmasWreath } from "../feature/new-year"
import { LogoWithMemo } from "./logo"
import { SocialMediaList } from "./social"

export const Footer = () => {
    return (
        <footer className="w-full h-50 bg-background flex justify-center items-center flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-4">
                <LogoWithMemo>
                    <CurioWithChristmasHat />
                </LogoWithMemo>
                <Separator orientation="vertical"/>
                <SocialMediaList />
            </div>
            <p className="flex flex-row items-center gap-2 text-muted-foreground">
                <ChristmasWreath width={32} height={32}/>
                All Rights Are Reserved©
            </p>
        </footer>  
    ) 
}