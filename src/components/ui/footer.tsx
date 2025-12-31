import { CurioWithChristmasHat } from "../content/curio"
import { Separator } from "../core/separator"
import { ChristmasWreath } from "../feature/new-year"
import { LogoWithMemo } from "./logo"
import { getTranslations } from "next-intl/server"
import { SocialMediaHoverCard, SocialMediaList } from "./social-media"
import { SocialMedia } from "@/types/social-media"

const curioSocialMedia: SocialMedia[] = [
    { name: "facebook", href: "https://www.facebook.com/people/Curio-Today/61580098790279/" },
    { name: "instagram", href: "https://www.instagram.com/curio.today" },
]

export const Footer = async () => {
    const t = await getTranslations("Messages");

    return (
        <footer className="w-full h-50 bg-background flex justify-center items-center flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-4">
                <LogoWithMemo>
                    <CurioWithChristmasHat />
                </LogoWithMemo>
                <Separator orientation="vertical"/>
                <SocialMediaList socialMedia={curioSocialMedia} />
            </div>
            <p className="flex flex-row items-center gap-2 text-muted-foreground">
                <ChristmasWreath width={32} height={32}/>
                {t("allRightsAreReserved")}
            </p>
            <div className="text-secondary flex items-center flex-row">
                {t("createdBy")}
                <SocialMediaHoverCard contact="@dmytropolizhai" />
            </div>
        </footer>  
    ) 
}